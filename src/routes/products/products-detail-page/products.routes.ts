import { Routes } from "@angular/router";
import { ProductsDetailPageComponent } from "./products-detail-page.component";

export const productsRoutes : Routes = [
    {
        path: 'products/:productId',
        component: ProductsDetailPageComponent
    }
]
    
