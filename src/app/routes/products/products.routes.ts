import { Routes } from "@angular/router";
import { ProductsDetailPageComponent } from "../../routh/product-detail-page/products-detail-page.component";


export const productsRoutes : Routes = [
    {
        path: 'products/:productId',
        component: ProductsDetailPageComponent
    }
]
    
