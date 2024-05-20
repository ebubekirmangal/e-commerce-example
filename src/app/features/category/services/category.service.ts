import { Injectable } from '@angular/core';
import { CategoryListItem } from '../models/categoryList';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 private categoryListItem: CategoryListItem[] = [{ id: 1, name: "Phone" },
   { id: 2, name: "Laptop" },
    { id: 3, name: "Earphones" },
     { id: 4, name: "Scooter" },
      { id: 5, name: "Cycle" },
       { id: 6, name: "Skateboard" }]
  constructor() { }

  getList(){
    return this.categoryListItem;
  }
  getById(id:number){
    return this.categoryListItem.find( category => category.id);
  }
}
