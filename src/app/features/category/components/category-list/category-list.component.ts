import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ListGroupComponent } from "../../../../shared/list-group/list-group.component";
import { CategoryListItem } from '../../models/categoryList';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'app-category-list',
    standalone: true,
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ListGroupComponent
    ]
})
export class CategoryListComponent implements OnInit{

  categoryListItem !: CategoryListItem[];
  @Input() selectedCategoryId: number| null | undefined;
  @Output() changeSelect = new EventEmitter<{selectedCategory: CategoryListItem | null |undefined}>();
 
constructor( private categoryService:CategoryService){

}
    ngOnInit(): void {
        this.getCategoryList();
    }
    getCategoryList() {
    this.categoryListItem = this.categoryService.getList();
    }
  filterProduct(event: { selectedItemId: number|null; }) {
    const selectedCategory:CategoryListItem | null |undefined=event.selectedItemId ? this.categoryListItem
    .find((category) => category.id === event.selectedItemId): null;
    this.changeSelect.emit({selectedCategory})
    }
  
}

