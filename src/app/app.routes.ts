import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomePageMainComponent } from '../homePage/home-page-main/home-page-main.component';
import { productsRoutes } from '../routes/products/products-detail-page/products.routes';


export const routes: Routes = [
    {
        path: '',
        component: HomePageMainComponent,
    },
    ...productsRoutes
    
];
