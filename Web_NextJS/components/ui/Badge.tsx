import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* Remplace les classes .badge / .badge-primary / .badge-accent / .badge-glass
   de globals.css. Ces classes restent definies le temps que les pages migrent. */

type Variant = 'primary' | 'accent' | 'neutral' | 'onDark';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary-50 text-primary-700 border border-primary-100',
  /* accent-700 et non accent-500 : le turquoise clair n'a pas un contraste
     suffisant pour du texte sur fond clair. */
  accent: 'bg-accent-50 text-accent-700 border border-accent-100',
  neutral: 'bg-sand-100 text-sand-700 border border-sand-200',
  onDark: 'bg-sand-0/15 text-sand-0 border border-sand-0/25',
};

export function Badge({ children, className, variant = 'primary', icon, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
