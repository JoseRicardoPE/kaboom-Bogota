import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Pricing } from './components/pricing/pricing';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Bookings } from './components/bookings/bookings';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'services', component: Services },
    { path: 'pricing', component: Pricing },
    { path: 'gallery', component: Gallery },
    { path: 'contact', component: Contact },
    { path: 'bookings', component: Bookings },
    { path: '**', component: Notfound }
];
