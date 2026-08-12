// Composants canoniques du design system
export { Button, default as ButtonDefault } from './Button';
export type { ButtonProps } from './Button';
export { Card, CardHeader, CardContent, CardFooter } from './Card';
export { Badge } from './Badge';
export { default as Container } from './Container';
export { default as Section } from './Section';

// Adaptateurs de transition.
// ModernCard et ModernButton delegent desormais a Card et Button ;
// ModernSection garde son API propre, que les pages utilisent avec des
// valeurs que Section ne connait pas (background="gray", padding="2xl").
// Tout ceci disparait au lot 5, quand les pages auront migre.
export { ModernCard } from './modernCard';
export { ModernButton } from './modernButton';
export { ModernSection } from './modernSection';

// Gabarits de page
export { ServiceCard } from './serviceCard';
export { FormationTemplate } from './formationTemplate';
export { EBPTemplate } from './ebpTemplate';
export { LogoCard } from './logoCard';
