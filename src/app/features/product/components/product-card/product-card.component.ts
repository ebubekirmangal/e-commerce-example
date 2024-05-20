import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from '../../models/productList';
import { CardComponent } from "../../../../shared/card/card.component";
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CardComponent
  ]
})
export class ProductCardComponent implements OnInit {


  @Input() filterByCategoryId: number | null | undefined;
  @Output() viewProduct = new EventEmitter<ProductItem>();

  productItems!: ProductItem[]
  OnViewInformation(item:ProductItem) {
    this.viewProduct.emit(item);
  }
constructor(private productService:ProductService){

}
  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
  this.productItems = this.productService.getList();
  }

  get filterProductList(): ProductItem[] | null {
    let filteredCategoryList = this.productItems;
    if (this.filterByCategoryId) {
      filteredCategoryList = this.productItems.filter(
        (product) => product.categoryId === this.filterByCategoryId
      );
      return filteredCategoryList;
    } else {
      return this.productItems;
    }
  }
}
