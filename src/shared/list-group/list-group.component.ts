import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryListItem } from '../../homePage/module/categoryList';

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent implements OnInit {
  
 
  @Input() listItems:any[] = [];
  @Input() selectedCategoryId : number | null | undefined;
  @Output() clickForFilter = new EventEmitter<{selectedItemId:number | null}>();
  selectedItemId:number | null =null;
  
  ngOnInit(): void {
    if(this.selectedCategoryId){
      this.selectedItemId = this.selectedCategoryId;
    }
  } 
 
  onListGroupItemclick(category: CategoryListItem) {
    
    this.selectedItemId = this.selectedItemId !== category.id ? category.id : null;
    this.clickForFilter.emit({selectedItemId:this.selectedItemId});
    }

  isSelectedItemId(categoryId:number):boolean{
    return this.selectedItemId == categoryId;
  }
}
