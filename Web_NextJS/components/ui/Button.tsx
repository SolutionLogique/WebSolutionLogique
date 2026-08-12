import React, { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

/* Composant bouton canonique.
   Il reprend l'API de l'ancien modernButton, qui etait la meilleure des deux
   implementations : gestion de href, etat de chargement, icones, cibles
   tactiles correctes. L'ancien Button ne savait produire qu'un <button>,
   ce qui obligeait les pages a ecrire <Link><button> — du HTML invalide,
   un element interactif imbrique dans un autre.

   Un href interne produit un <Link> Next (navigation client) ; un href
   externe ou un lien tel:/mailto: produit un <a> simple. */

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'destructive';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  'aria-label'?: string;
}

interface AsButton extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: never;
  rel?: never;
}

interface AsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
  target?: string;
  rel?: string;
}

export type ButtonProps = AsButton | AsLink;

/* Le focus visible vient de la regle globale *:focus-visible de globals.css
   (2px solid, offset 2), unique pour tout le site.
   On ne le redeclare pas ici : tailwind-merge considere `outline` et
   `outline-2` comme un meme groupe et supprimait `outline`, donc
   l'outline-style — une largeur sans style ne rend rien. */
const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-colors ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

/* Aplats unis. Plus aucun degrade : avec les ombres lumineuses, c'etait le
   principal marqueur d'apparence generique du site. */
const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-sand-0 hover:bg-primary-700 shadow-sm',
  secondary:
    'bg-sand-0 text-sand-800 border border-sand-300 hover:bg-sand-50 shadow-sm',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost:
    'text-primary-600 hover:bg-primary-50',
  accent:
    'bg-accent-600 text-sand-0 hover:bg-accent-700 shadow-sm',
  destructive:
    'bg-error text-sand-0 hover:opacity-90 shadow-sm',
};

/* min-h garantit une cible tactile d'au moins 44 px sur les tailles lg et xl. */
const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm rounded-lg',
  md: 'h-11 px-5 text-sm rounded-lg min-h-[44px]',
  lg: 'h-12 px-6 text-base rounded-lg min-h-[48px]',
  xl: 'h-14 px-8 text-lg rounded-xl min-h-[56px]',
};

const iconSizes: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-5 h-5',
};

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  href,
  onClick,
  type = 'button',
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading && <Loader2 className={cn('animate-spin', iconSizes[size])} aria-hidden="true" />}
      {!loading && icon && iconPosition === 'left' && (
        <span className={cn('flex items-center', iconSizes[size])} aria-hidden="true">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className={cn('flex items-center', iconSizes[size])} aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (href) {
    // tel:, mailto:, http(s):, ancres et cibles _blank sortent du routeur Next.
    const isExternal = /^(https?:|tel:|mailto:|#)/.test(href) || target === '_blank';

    if (isExternal) {
      return (
        <a href={href} target={target} rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : rel} className={classes} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes} {...rest}>
      {content}
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
