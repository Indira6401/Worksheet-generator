import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/worksheet-config/worksheet-config.component').then(
        m => m.WorksheetConfigComponent
      )
  },
  {
    path: 'worksheet',
    loadComponent: () =>
      import('./components/worksheet-display/worksheet-display.component').then(
        m => m.WorksheetDisplayComponent
      )
  },
  { path: '**', redirectTo: '' }
];
