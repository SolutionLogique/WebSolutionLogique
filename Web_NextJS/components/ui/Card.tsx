import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* Composant carte canonique. Absorbe modernCard, serviceCard et logoCard.
   L'API composee (Card / CardHeader / CardContent / CardFooter) est conservee,
   et la prop `variant` reprend celles de modernCard pour que les pages qui
   l'utilisent continuent de fonctionner. */

type Variant = 'default' | 'elevated' | 'outline' | 'glass' | 'hover-lift' | 'feature';
type Size = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  /** Anime la carte au survol. Conserve pour compatibilite ascendante. */
  hover?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const variants: Record<Variant, string> = {
  default: 'border border-sand-200 shadow-card',
  elevated: 'border border-sand-200 shadow-md',
  outline: 'border-2 border-sand-200',
  /* Le glassmorphisme est abandonne : cout de rendu eleve et lisibilite
     instable selon ce qui defile dessous. Rendu comme une surface opaque. */
  glass: 'border border-sand-200 shadow-md',
  'hover-lift': 'border border-sand-200 shadow-card',
  feature: 'border border-sand-200 shadow-card',
};

const sizes: Record<Size, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      variant = 'default',
      size = 'none',
      hover = false,
      onClick,
      interactive = false,
      ...props
    },
    ref
  ) => {
    const isInteractive = interactive || !!onClick;

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-sand-0 transition-shadow',
          variants[variant],
          sizes[size],
          (hover || isInteractive) && 'hover:shadow-card-hover',
          isInteractive && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = React.forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 p-6 pb-3', className)} {...props}>
      {children}
    </div>
  )
);

const CardContent = React.forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
);

const CardFooter = React.forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
export default Card;
