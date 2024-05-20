// import { Injectable } from '@angular/core';
// import { CategoryListItem } from '../models/categoryList';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { addCategory } from '../models/addCategory';
// import { environment } from '../../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class CategoryService {
//   private apiUrl = `${environment.apiUrl}/categories`;

//   constructor(private http: HttpClient) { }

//   getList(): Observable<CategoryListItem[]> {
//     return this.http.get<CategoryListItem[]>(this.apiUrl);
//   }

//   getCategoryById(id: number): Observable<CategoryListItem> {
//     return this.http.get<CategoryListItem>(`${this.apiUrl}/${id}`);
//   }

//   addCategory(category: addCategory): Observable<addCategory> {
//     return this.http.post<addCategory>(this.apiUrl, category);
//   }

//   deleteCategory(id: number): Observable<CategoryListItem>{
//     return this.http.delete<CategoryListItem>(`${this.apiUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { CategoryListItem } from '../models/categoryList';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { addCategory } from '../models/addCategory';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/categories`;
  private categoryListSubject = new BehaviorSubject<CategoryListItem[]>([]);
  public categoryList$ = this.categoryListSubject.asObservable();

  constructor(private http: HttpClient) { }

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiUrl).pipe(
      tap(data => this.categoryListSubject.next(data))
    );
  }

  getCategoryById(id: number): Observable<CategoryListItem> {
    return this.http.get<CategoryListItem>(`${this.apiUrl}/${id}`);
  }

  addCategory(category: addCategory): Observable<addCategory> {
    return this.http.post<addCategory>(this.apiUrl, category).pipe(
      tap(() => this.refreshList())
    );
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshList())
    );
  }

  private refreshList() {
    this.getList().subscribe(); // Fetches the list again to update the BehaviorSubject
  }
}