"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavDropdownItem = { href: string; label: string };
type NavItem = {
  href: string;
  label: string;
  highlight?: boolean;
  accent?: boolean;
  dropdown?: NavDropdownItem[];
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { href: '/', label: 'Accueil' },
    { href: '/logiciels', label: 'Logiciels EBP' },
    {
      label: 'Services',
      href: '/nosServices',
      dropdown: [
        { href: '/informatique', label: 'Informatique' },
        { href: '/telecom', label: 'Télécom' },
        { href: '/securite', label: 'Sécurité' }
      ]
    },
    { href: '/telemaintenance', label: 'Télémaintenance', highlight: true },
    { href: '/contact', label: 'Contact', accent: true }
  ];

  const isActiveNavItem = (item: NavItem) => {
    if (item.dropdown) {
      return pathname === item.href || item.dropdown.some((subItem: NavDropdownItem) => pathname === subItem.href);
    }
    return pathname === item.href;
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled
        ? "py-2"
        : "py-4"
    )}>
      <nav className={cn(
        "max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500",
        isScrolled
          ? "mx-4 lg:mx-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50"
          : "mx-auto"
      )}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              alt="Solution Logique Informatique"
              src="/assets/logo.webp"
              width={160}
              height={50}
              priority
              className="h-auto w-auto max-h-10 lg:max-h-12 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                        isScrolled
                          ? isActiveNavItem(item)
                            ? "text-primary-600 bg-primary-50"
                            : "text-slate-700 hover:text-primary-600 hover:bg-slate-100"
                          : isActiveNavItem(item)
                            ? "text-white bg-white/20"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 animate-fade-in-scale">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "flex items-center gap-3 px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200",
                              pathname === subItem.href
                                ? "text-primary-600 bg-primary-50"
                                : "text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                            )}
                          >
                            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.highlight ? (
                  <Link
                    href={item.href}
                    className="px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
                  >
                    {item.label}
                  </Link>
                ) : item.accent ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                      isScrolled
                        ? isActiveNavItem(item)
                          ? "text-primary-600 bg-primary-50"
                          : "text-slate-700 hover:text-primary-600 hover:bg-slate-100"
                        : isActiveNavItem(item)
                          ? "text-white bg-white/20"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-all duration-300",
              isScrolled
                ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={cn(
            "lg:hidden py-4 animate-fade-in-scale",
            isScrolled ? "" : "bg-white/10 backdrop-blur-xl rounded-2xl mt-4"
          )}>
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                      item.highlight
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white"
                        : item.accent
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                        : isScrolled
                          ? isActiveNavItem(item)
                            ? "text-primary-600 bg-primary-50"
                            : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                          : isActiveNavItem(item)
                            ? "text-white bg-white/20"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-xl transition-all duration-200",
                            isScrolled
                              ? pathname === subItem.href
                                ? "text-primary-600 bg-primary-50"
                                : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                              : pathname === subItem.href
                                ? "text-white bg-white/20"
                                : "text-white/60 hover:text-white hover:bg-white/10"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
