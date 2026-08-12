"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

/* Barre de navigation.

   Choix structurant : la barre est OPAQUE et identique sur toutes les pages.
   L'ancienne version changeait de couleur selon le fond de la page — texte
   blanc au-dessus d'un hero sombre, texte fonce une fois defilee. Comme seules
   5 pages sur 17 avaient un hero sombre, les liens etaient blancs sur fond
   blanc, donc invisibles, sur les 12 autres. On supprime le mecanisme, pas le
   symptome : le bug ne peut plus reapparaitre quel que soit le hero ajoute
   plus tard.

   Le menu deroulant est pilotable au clavier et au tactile. L'ancien s'ouvrait
   au survol uniquement, sans aucun attribut ARIA : inutilisable au clavier, et
   sur mobile le tap naviguait sans jamais ouvrir le sous-menu. */

type NavChild = { href: string; label: string };
type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  {
    href: '/logiciels',
    label: 'Logiciels EBP',
    children: [
      { href: '/ebpcomptabilite', label: 'Comptabilité' },
      { href: '/ebpgestionco', label: 'Gestion commerciale' },
      { href: '/ebpbatiment', label: 'Bâtiment' },
    ],
  },
  {
    href: '/nosServices',
    label: 'Services IT',
    children: [
      { href: '/informatique', label: 'Informatique' },
      { href: '/telecom', label: 'Télécom' },
      { href: '/securite', label: 'Sécurité' },
    ],
  },
  { href: '/telemaintenance', label: 'Télémaintenance' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (item: NavItem) =>
    pathname === item.href || item.children?.some((c) => pathname === c.href);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  // Fermeture au clic exterieur et a la touche Echap
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeAll();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      // Le focus revient sur le declencheur du menu ouvert
      const trigger = document.getElementById(`nav-trigger-${openMenu}`);
      closeAll();
      trigger?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [closeAll, openMenu]);

  // Referme les menus a chaque navigation
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  /* Parcours du sous-menu aux fleches. On cible les liens du panneau ouvert
     plutot que de gerer un index, pour rester juste si le contenu change. */
  const onMenuKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    if (openMenu !== label) {
      setOpenMenu(label);
      return;
    }
    const panel = document.getElementById(`nav-panel-${label}`);
    const links = panel ? Array.from(panel.querySelectorAll<HTMLAnchorElement>('a')) : [];
    if (!links.length) return;
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next =
      e.key === 'ArrowDown'
        ? (current + 1) % links.length
        : (current - 1 + links.length) % links.length;
    links[next]?.focus();
  };

  const openWithHover = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Petit delai : evite que le menu se ferme en traversant l'espace
    // entre le declencheur et le panneau.
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] border-b border-sand-200 bg-sand-0 shadow-sm"
    >
      <nav className="mx-auto flex h-full max-w-container items-center gap-2 px-gutter" aria-label="Navigation principale">
        <Link href="/" className="mr-auto flex-shrink-0" aria-label="Solution Logique — accueil">
          <Image
            alt="Solution Logique Informatique"
            src="/assets/logo.webp"
            width={160}
            height={50}
            priority
            className="h-auto w-auto max-h-9 lg:max-h-11"
          />
        </Link>

        {/* --- Navigation bureau --- */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openWithHover(item.label)}
                onMouseLeave={closeWithDelay}
              >
                <button
                  id={`nav-trigger-${item.label}`}
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-controls={`nav-panel-${item.label}`}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  onKeyDown={(e) => onMenuKeyDown(e, item.label)}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive(item)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-sand-700 hover:bg-sand-50 hover:text-primary-600'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', openMenu === item.label && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {openMenu === item.label && (
                  <div
                    id={`nav-panel-${item.label}`}
                    className="absolute left-0 top-full mt-1 min-w-[230px] rounded-xl border border-sand-200 bg-sand-0 p-1.5 shadow-lg animate-fade-in-scale"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors',
                        pathname === item.href
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-sand-800 hover:bg-sand-50'
                      )}
                      onKeyDown={(e) => onMenuKeyDown(e, item.label)}
                    >
                      Tout voir
                    </Link>
                    <hr className="my-1.5 border-sand-200" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block rounded-lg px-3.5 py-2.5 text-sm transition-colors',
                          pathname === child.href
                            ? 'bg-primary-50 font-semibold text-primary-700'
                            : 'text-sand-700 hover:bg-sand-50 hover:text-primary-600'
                        )}
                        onKeyDown={(e) => onMenuKeyDown(e, item.label)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive(item)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-sand-700 hover:bg-sand-50 hover:text-primary-600'
                )}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-sand-0 shadow-sm transition-colors hover:bg-primary-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact
          </Link>
        </div>

        {/* --- Bouton mobile --- */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="rounded-lg p-2.5 text-sand-700 transition-colors hover:bg-sand-50 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* --- Navigation mobile --- */}
      {mobileOpen && (
        <div
          id="nav-mobile"
          className="max-h-[calc(100vh-var(--nav-height))] overflow-y-auto border-t border-sand-200 bg-sand-0 px-gutter py-4 shadow-lg lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="mb-1">
              <Link
                href={item.href}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-semibold transition-colors',
                  isActive(item) ? 'bg-primary-50 text-primary-700' : 'text-sand-800 hover:bg-sand-50'
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 border-l border-sand-200 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block rounded-lg px-4 py-2.5 text-sm transition-colors',
                        pathname === child.href
                          ? 'bg-primary-50 font-semibold text-primary-700'
                          : 'text-sand-600 hover:bg-sand-50'
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="mt-3 flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 text-base font-semibold text-sand-0"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
