import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Pricing } from './components/pricing/pricing';
import { Gallery } from './components/gallery/gallery';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'services', component: Services },
    { path: 'pricing', component: Pricing },
    { path: 'gallery', component: Gallery },
    { path: '**', component: Notfound }
];
