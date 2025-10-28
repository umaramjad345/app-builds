import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'quotes',
        pathMatch: 'full'
    },
    {
        path: 'quotes',
        loadChildren: () => import('./features/quotes/quotes-module').then(m => m.QuotesModule)
    },
    {
        path: '**',
        redirectTo: 'quotes'
    }
];
