import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full' 
  },
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => Object.values(m)[0] as any) 
  },
  { 
    path: 'catalogo', 
    loadComponent: () => import('./pages/catalogo/catalogo').then(m => Object.values(m)[0] as any) 
  },
  { 
    path: 'tendencias', 
    loadComponent: () => import('./pages/tendencias/tendencias').then(m => Object.values(m)[0] as any) 
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./pages/contacto/contacto').then(m => Object.values(m)[0] as any) 
  },
  { 
    path: '**', 
    redirectTo: 'inicio' 
  }
];
