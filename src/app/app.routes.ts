
import { Routes } from '@angular/router';

import { HomePageMainComponent } from './routh/home-page/home-page-main/home-page-main.component';
import { productsRoutes } from './routes/products/products.routes';
import { EditPageComponent } from './routh/edit-page/edit-page.component';
import { FormGuard } from './guard/form.guard';



export const routes: Routes = [
    {
        path: '',
        component: HomePageMainComponent,
    },, { 
        path: 'form', component: EditPageComponent, canDeactivate: [FormGuard]
     },
    ...productsRoutes
];
