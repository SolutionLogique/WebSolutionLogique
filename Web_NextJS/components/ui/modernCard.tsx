import React, { ReactNode } from 'react';
import Card from './Card';

/* Adaptateur de transition — voir modernButton.tsx pour le contexte.
   Card est desormais le composant unique et a absorbe les variantes de
   ModernCard.

   Ce n'est pas un simple re-export : ModernCard avait size="md" par defaut
   la ou Card n'applique aucun padding par defaut. Un re-export nu aurait
   donc retire le padding des cartes des 5 pages concernees. */

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outline' | 'glass' | 'hover-lift' | 'feature';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  interactive?: boolean;
}

export function ModernCard({ size = 'md', variant = 'default', ...props }: ModernCardProps) {
  return <Card size={size} variant={variant} {...props} />;
}

export default ModernCard;
