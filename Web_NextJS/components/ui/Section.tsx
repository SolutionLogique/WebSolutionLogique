import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

/* Composant section canonique.

   Corrige un bug de longue date : les classes appliquees ici (section-sm,
   section-md, section-lg, section-xl, gradient-subtle) n'ont jamais existe
   dans globals.css. Ce composant ne produisait donc AUCUN espacement
   vertical. Les valeurs sont desormais reelles, et le pas par defaut est
   le rythme unique du design system : clamp(4rem, 8vw, 7rem). */

type Padding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type Background =
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'muted'
  | 'dark'
  | 'gradient-primary'
  | 'gradient-subtle';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: Padding;
  background?: Background;
  id?: string;
  centered?: boolean;
}

const paddings: Record<Padding, string> = {
  none: '',
  sm: 'py-10 md:py-14',
  md: 'py-section',
  lg: 'py-section',
  xl: 'py-section',
};

const backgrounds: Record<Background, string> = {
  transparent: '',
  white: 'bg-sand-0',
  subtle: 'bg-sand-50',
  muted: 'bg-sand-100',
  dark: 'bg-primary-900 text-sand-0',
  /* Anciens noms de degrade, rendus en aplats. */
  'gradient-primary': 'bg-primary-600 text-sand-0',
  'gradient-subtle': 'bg-sand-50',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      containerSize = 'lg',
      padding = 'md',
      background = 'transparent',
      centered = false,
      id,
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      id={id}
      className={cn(paddings[padding], backgrounds[background], centered && 'text-center', className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  )
);

Section.displayName = 'Section';

export default Section;
