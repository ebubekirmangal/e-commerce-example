
import { Routes } from '@angular/router';

import { HomePageMainComponent } from './routh/home-page/home-page-main/home-page-main.component';
import { productsRoutes } from './routes/products/products.routes';



export const routes: Routes = [
    {
        path: '',
        component: HomePageMainComponent,
    },
    ...productsRoutes
];
