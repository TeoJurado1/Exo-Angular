import { Routes } from '@angular/router';
//!/! Import de la classe  Route classique pour définir les routes de l'application
import { About } from './pages/about/about';
export const routes: Routes = [
  //! Route pour la page À propos (classique)
  { path: 'about', component: About },
  //? Route par défaut pour rediriger vers la page Home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //? Route en Lazy loading pour la page Home (module)
  //? La route sera chargée uniquement lorsque l'utilisateur naviguera vers cette route
  {
    path: 'home',
    // Lazy Loading du composant
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'interpolation',
    loadComponent: () => import('./pages/interpolation/interpolation').then((m) => m.Interpolation),
  },
  {
    path: 'property-binding',
    loadComponent: () => import('./pages/binding/property-binding/property-binding').then((m) => m.PropertyBinding),
  },
];