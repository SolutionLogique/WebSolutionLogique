import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ModernSection garde son API propre : 5 pages et les deux gabarits
   l'utilisent avec des valeurs (background="gray"|"gradient", padding="2xl")
   que le composant Section ne connait pas. La fusion se fera au lot 5, quand
   ces pages seront reprises.

   Ici, seul l'habillage change : les gris froids (gray-50, slate-900) cedent
   la place aux neutres sable et au bleu de marque, et le degrade
   slate/white/blue devient un aplat. */

interface ModernSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
  centered?: boolean;
  id?: string;
}

export function ModernSection({
  children,
  className,
  background = 'white',
  padding = 'lg',
  maxWidth = '7xl',
  centered = true,
  id,
}: ModernSectionProps) {
  const backgrounds = {
    white: 'bg-sand-0',
    gray: 'bg-sand-50',
    gradient: 'bg-sand-50',
    dark: 'bg-primary-900 text-sand-0',
    transparent: 'bg-transparent',
  };

  /* Le rythme se resserre autour du pas unique du design system.
     Les anciennes valeurs montaient jusqu'a py-32, ce qui creusait des
     trous entre les sections. */
  const paddings = {
    sm: 'py-10 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-section',
    xl: 'py-section',
    '2xl': 'py-section',
  };

  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-5xl',
    '7xl': 'max-w-container',
    full: 'max-w-none',
  };

  return (
    <section id={id} className={cn(backgrounds[background], paddings[padding], className)}>
      <div className={cn('mx-auto px-gutter', maxWidths[maxWidth], centered && 'text-center')}>
        {children}
      </div>
    </section>
  );
}

export default ModernSection;
