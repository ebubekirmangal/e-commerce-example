// import { CommonModule } from '@angular/common';
// import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import { ListGroupComponent } from "../../../../shared/list-group/list-group.component";
// import { CategoryListItem } from '../../models/categoryList';
// import { CategoryService } from '../../services/category.service';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//     selector: 'app-category-list',
//     standalone: true,
//     templateUrl: './category-list.component.html',
//     styleUrl: './category-list.component.scss',
//     changeDetection: ChangeDetectionStrategy.Default,
//     imports: [
//         CommonModule,
//         ListGroupComponent,
//         HttpClientModule
//     ]
// })
// export class CategoryListComponent implements OnInit {

//   categoryListItem !: CategoryListItem[];
//   @Input() selectedCategoryId: number| null | undefined;
//   @Output() changeSelect = new EventEmitter<{selectedCategory: CategoryListItem | null |undefined}>();
 
// constructor( private categoryService:CategoryService){

// }
//     ngOnInit(): void {
//         this.getCategoryList();
//     }
//     getCategoryList() {
//     this.categoryService.getList().subscribe((data)=>{
//       this.categoryListItem = data;
//     });
//     }
//   filterProduct(event: { selectedItemId: number|null; }) {
//     const selectedCategory:CategoryListItem | null |undefined=event.selectedItemId ? this.categoryListItem
//     .find((category) => category.id === event.selectedItemId): null;
//     this.changeSelect.emit({selectedCategory})
    
//     }

  
// }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListGroupComponent } from '../../../../shared/list-group/list-group.component';
import { CategoryListItem } from '../../models/categoryList';
import { CategoryService } from '../../services/category.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    CommonModule,
    ListGroupComponent,
    HttpClientModule
  ]
})
export class CategoryListComponent implements OnInit {

  categoryListItem: CategoryListItem[] = [];
  @Input() selectedCategoryId: number | null | undefined;
  @Output() changeSelect = new EventEmitter<{ selectedCategory: CategoryListItem | null | undefined }>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.categoryList$.subscribe((data) => {
      this.categoryListItem = data;
    });
    this.categoryService.getList().subscribe(); // Ensure data is fetched if not already present
  }

  filterProduct(event: { selectedItemId: number | null; }) {
    const selectedCategory: CategoryListItem | null | undefined = event.selectedItemId ? this.categoryListItem
      .find((category) => category.id === event.selectedItemId) : null;
    this.changeSelect.emit({ selectedCategory });
  }
}