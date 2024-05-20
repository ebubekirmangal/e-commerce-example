import { Injectable } from '@angular/core';
import { ProductItem } from '../models/productList';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductDetails } from '../models/productDetails';
import { environment } from '../../../../environments/environment';
import { subscribe } from 'diagnostics_channel';
import { CategoryListItem } from '../../category/models/categoryList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private apiUrl = `${environment.apiUrl}/products`
  private productListSubject = new BehaviorSubject<ProductItem[]>([]);
  public productItem$ = this.productListSubject.asObservable();
  
  constructor(private http:HttpClient) { }
getList():Observable<ProductItem[]>{
  return  this.http.get<ProductItem[]>(this.apiUrl).pipe(
    tap(data => this.productListSubject.next(data))
  );
}
getById(id:number):Observable<ProductItem>{
 return this.http.get<ProductItem>(`${this.apiUrl}/${id}`)
}
  
}

