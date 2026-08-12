import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

/* Test reecrit avec le composant.
   L'ancienne version verifiait les classes de degrade (bg-gradient-to-r,
   from-blue-500, to-cyan-500), volontairement supprimees : les aplats
   remplacent les degrades dans le nouveau design system. Elle testait aussi
   un forwardRef que le composant n'implemente plus — aucun appelant du
   projet ne posait de ref dessus. */

describe('Button', () => {
  describe('Rendu de base', () => {
    test('se rend en <button> par defaut', () => {
      render(<Button>Envoyer</Button>);
      const bouton = screen.getByRole('button', { name: /envoyer/i });
      expect(bouton).toBeInTheDocument();
      expect(bouton).toHaveAttribute('type', 'button');
    });

    test('applique la variante primary par defaut', () => {
      render(<Button>Primaire</Button>);
      expect(screen.getByRole('button')).toHaveClass('bg-primary-600', 'text-sand-0');
    });

    test('n\'utilise plus de degrade', () => {
      render(<Button>Sans degrade</Button>);
      expect(screen.getByRole('button').className).not.toMatch(/gradient/);
    });

    test('accepte des classes personnalisees', () => {
      render(<Button className="ma-classe">Perso</Button>);
      expect(screen.getByRole('button')).toHaveClass('ma-classe');
    });
  });

  describe('Variantes', () => {
    test.each([
      ['primary', 'bg-primary-600'],
      ['secondary', 'bg-sand-0'],
      ['outline', 'border-primary-600'],
      ['ghost', 'text-primary-600'],
      ['accent', 'bg-accent-600'],
    ] as const)('la variante %s applique %s', (variante, classe) => {
      render(<Button variant={variante}>Texte</Button>);
      expect(screen.getByRole('button')).toHaveClass(classe);
    });
  });

  describe('Tailles', () => {
    test.each([
      ['sm', 'h-9'],
      ['md', 'h-11'],
      ['lg', 'h-12'],
      ['xl', 'h-14'],
    ] as const)('la taille %s applique %s', (taille, classe) => {
      render(<Button size={taille}>Texte</Button>);
      expect(screen.getByRole('button')).toHaveClass(classe);
    });

    test('les tailles md, lg et xl garantissent une cible tactile de 44px minimum', () => {
      const { rerender } = render(<Button size="md">A</Button>);
      expect(screen.getByRole('button')).toHaveClass('min-h-[44px]');
      rerender(<Button size="lg">A</Button>);
      expect(screen.getByRole('button')).toHaveClass('min-h-[48px]');
      rerender(<Button size="xl">A</Button>);
      expect(screen.getByRole('button')).toHaveClass('min-h-[56px]');
    });
  });

  describe('Rendu en lien', () => {
    /* C'est l'apport principal du composant : sans lui, les pages ecrivaient
       <Link><button>, soit un element interactif imbrique dans un autre. */
    test('un href interne produit un lien, pas un bouton', () => {
      render(<Button href="/contact">Nous contacter</Button>);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.getByRole('link', { name: /nous contacter/i })).toHaveAttribute('href', '/contact');
    });

    test('un href tel: produit un lien', () => {
      render(<Button href="tel:0450640233">Appeler</Button>);
      expect(screen.getByRole('link')).toHaveAttribute('href', 'tel:0450640233');
    });

    test('une cible _blank recoit rel=noopener noreferrer', () => {
      render(<Button href="https://exemple.fr" target="_blank">Externe</Button>);
      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Etats', () => {
    test('disabled desactive le bouton', () => {
      render(<Button disabled>Inactif</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    test('loading desactive aussi le bouton', () => {
      render(<Button loading>Chargement</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    test('le clic est transmis', () => {
      const auClic = jest.fn();
      render(<Button onClick={auClic}>Cliquer</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(auClic).toHaveBeenCalledTimes(1);
    });

    test('le clic n\'est pas transmis quand disabled', () => {
      const auClic = jest.fn();
      render(<Button onClick={auClic} disabled>Cliquer</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(auClic).not.toHaveBeenCalled();
    });
  });

  describe('Accessibilite', () => {
    test('reste focalisable au clavier', () => {
      /* Le style de focus vient de la regle globale *:focus-visible, pas de
         classes par composant : tailwind-merge supprimait `outline` en le
         confondant avec `outline-2`, laissant une largeur sans style. */
      render(<Button>Focus</Button>);
      const bouton = screen.getByRole('button');
      bouton.focus();
      expect(bouton).toHaveFocus();
    });

    test('accepte aria-label', () => {
      render(<Button aria-label="Fermer la fenetre">X</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Fermer la fenetre');
    });

    test('supporte type=submit', () => {
      render(<Button type="submit">Valider</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    test('les icones sont masquees aux lecteurs d\'ecran', () => {
      const { container } = render(<Button icon={<svg data-testid="icone" />}>Avec icone</Button>);
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });
  });
});
