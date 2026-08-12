/* Adaptateur de transition.
   ModernButton et Button etaient deux familles concurrentes en service
   simultane (7 fichiers d'un cote, 11 de l'autre) — la cause directe de
   l'incoherence de page en page. Button est desormais le composant unique,
   et a repris l'API de ModernButton, qui etait la meilleure des deux.

   Ce fichier ne fait plus que rediriger, pour ne pas casser les 7 pages qui
   l'importent encore. Il disparait quand elles auront migre vers Button. */

export { Button as ModernButton, default } from './Button';
export type { ButtonProps as ModernButtonProps } from './Button';
