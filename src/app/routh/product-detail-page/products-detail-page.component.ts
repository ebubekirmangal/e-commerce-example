import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailComponent } from "../../features/product/components/product-detail/product-detail.component";

@Component({
    selector: 'app-products-detail-page',
    standalone: true,
    templateUrl: './products-detail-page.component.html',
    styleUrl: './products-detail-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BasicLayoutComponent,
        ProductDetailComponent
    ]
})
export class ProductsDetailPageComponent implements OnInit{
productId!:number;

    constructor(private router: Router,private route: ActivatedRoute){

    }
    ngOnInit(): void {
        this.getProductIdFromRoute();
    }

    getProductIdFromRoute(){
        this.route.params.subscribe((routeParams) =>{
        const productId: number | undefined = Number(routeParams['productId']);


            if(!productId){
                this.router.navigate([""])
                throw new Error('Product ID is invalid ')
            }else this.productId = productId; 
   
        }).unsubscribe();
    }
}
