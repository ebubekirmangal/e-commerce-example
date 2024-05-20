import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomePageMainComponent } from './routh/home-page/home-page-main/home-page-main.component';
import { productsRoutes } from '../routes/products/products.routes';
import { EditPageComponent } from './features/category/components/edit-page/edit-page.component';


export const routes: Routes = [
    {
        path: '',
        component: HomePageMainComponent,
    },
    ...productsRoutes
];
