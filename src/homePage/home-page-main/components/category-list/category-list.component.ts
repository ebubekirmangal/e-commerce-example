import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { ListGroupComponent } from "../../../../shared/list-group/list-group.component";
import { CategoryListItem } from '../../../module/categoryList';

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
export class CategoryListComponent {

  categoryListItem: CategoryListItem[] = [{ id: 1, name: "Phone" }, { id: 2, name: "Laptop" }, { id: 3, name: "Earphones" }, { id: 4, name: "Scooter" }, { id: 5, name: "Cycle" }, { id: 6, name: "Skateboard" }]
  @Input() selectedCategoryId: number| null | undefined;
  @Output() changeSelect = new EventEmitter<{selectedCategory: CategoryListItem | null |undefined}>();
 

  filterProduct(event: { selectedItemId: number|null; }) {
    const selectedCategory:CategoryListItem | null |undefined=event.selectedItemId ? this.categoryListItem
    .find((category) => category.id === event.selectedItemId): null;
    this.changeSelect.emit({selectedCategory})
    }
  
}

