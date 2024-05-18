import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../../../module/productList';
import { CardComponent } from "../../../../shared/card/card.component";


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
export class ProductCardComponent {

  @Input() filterByCategoryId: number | null | undefined;
  productItems: ProductItem[] = [{ id: 1, categoryId: 1, title: "Iphone 15 Pro", imgPath: "", description: "This is a phone", unitPrice: 1998 },
  { id: 2, categoryId: 1, title: "Samsung Galaxy S24 Ultra", imgPath: "", description: "This is a phone", unitPrice: 1452 },
  { id: 3, categoryId: 5, title: "Salcano Imsomnia", imgPath: "", description: "This is a cycle", unitPrice: 500 },
  { id: 4, categoryId: 5, title: "Sedona 28-city-v", imgPath: "", description: "This is a cycle", unitPrice: 756 },
  { id: 5, categoryId: 2, title: "Monster Abra A5 V16.1.3", imgPath: "", description: "This is a laptop", unitPrice: 3843 },
  { id: 6, categoryId: 2, title: "Excalibur G770", imgPath: "", description: "This is a laptop", unitPrice: 4256 },
  { id: 7, categoryId: 3, title: "Redmi Buds 5 Pro", imgPath: "", description: "This is an earphones", unitPrice: 67.99 },
  { id: 8, categoryId: 4, title: "Xiaomi Mi Pro 4", imgPath: "", description: "This is a scooter", unitPrice: 879.99 },
  { id: 9, categoryId: 4, title: "Onco OV-012", imgPath: "", description: "This is a scooter", unitPrice: 1236.99 },
  { id: 10, categoryId: 6, title: "Triathlon T132", imgPath: "", description: "This is a skateboard", unitPrice: 250 },
  { id: 11, categoryId: 6, title: "Delta 2", imgPath: "", description: "This is a skateboard", unitPrice: 320 },
  { id: 12, categoryId: 3, title: "Airpods kulaklık", imgPath: "", description: "This is an earphones", unitPrice: 89.99 }
  ];
  @Output() viewProduct = new EventEmitter<ProductItem>();
  OnViewInformation(item:ProductItem) {
    this.viewProduct.emit(item);
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
