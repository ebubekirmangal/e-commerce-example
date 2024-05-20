import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItem } from '../../models/productList';
import { ProductDetails } from '../../models/productDetails';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  @Input() productId!: number;
  productDetail!: ProductDetails;
  constructor(private productService: ProductService ){

  }

  // ngOnInit(): void {
  //   this.getProductDetail();
   
  // }
  // getProductDetail() {
  //   const productDetail:ProductDetails = this.productService.getById(this.productId).subscribe(()=>
  //     this.productDetail = productDetail );
   
  // }
}
