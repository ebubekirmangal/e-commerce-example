import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";
import { CategoryListComponent } from "../../../features/category/components/category-list/category-list.component";
import { ProductCardComponent } from "../../../features/product/components/product-card/product-card.component";
import { CategoryListItem } from '../../../features/category/models/categoryList';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem } from '../../../features/product/models/productList';


@Component({
    standalone: true,
    templateUrl: './home-page-main.component.html',
    styleUrl: './home-page-main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        AppComponent,
        BasicLayoutComponent,
        CategoryListComponent,
        ProductCardComponent
    ]
})
export class HomePageMainComponent  implements OnInit{

constructor(private router:Router,private route :ActivatedRoute)
{}

selectedCategory:CategoryListItem | null | undefined;

ngOnInit(): void { 
    this.changeOrLeaveIdWithPage();
}

changeOrLeaveIdWithPage() {
    this.route.queryParams.subscribe((queryParams) =>{

        const categoryId: number | undefined = Number(queryParams['category']);
        if(categoryId){
            this.selectedCategory ={
                id: categoryId,
                name:""
            }
        }else return;
    }).unsubscribe();
}

onChangeSelectCategory(event: { selectedCategory:CategoryListItem|null|undefined; }) {
this.selectedCategory = event.selectedCategory;
const queryParams = {
    category: this.selectedCategory?.id || null
};
this.router.navigate([],{
    queryParams
})
}
onViewProduct(event: ProductItem) {
    this.router.navigate(['products', event.id])

    }
}
