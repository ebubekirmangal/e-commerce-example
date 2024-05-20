import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationComponent } from "../../layout/navigation/navigation.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { CategoryListItem } from '../../features/category/models/categoryList';
import { CategoryService } from '../../features/category/services/category.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CanComponentDeactivate } from '../../guard/form.guard';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-edit-page',
    standalone: true,
    templateUrl: './edit-page.component.html',
    styleUrl: './edit-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NavigationComponent,
        FooterComponent,
        ReactiveFormsModule,
        BasicLayoutComponent,
    ]
})
export class EditPageComponent implements OnInit,CanComponentDeactivate{
addNewCategory() {
throw new Error('Method not implemented.');
}

    message: string | null = null;

    newCategory!:CategoryListItem;

    allList:CategoryListItem[] = [];

    formgroup: FormGroup = new FormGroup({
      id: new FormControl(''),
      name : new FormControl(''),
      description : new FormControl('')
  });
    formgroup2: FormGroup = new FormGroup({
      id: new FormControl('')
  });

  selectedId : number = this.formgroup.value['id'];
   
  constructor(private categoryService:CategoryService,private library: FaIconLibrary){

  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.formgroup.dirty || this.formgroup2.dirty) {
      return confirm('Sayfadan çıkmak istediğinize emin misiniz? Kaydedilmemiş değişiklikler kaybolacak.');
    }
    return true;
  }
  ngOnInit(): void {
    this.addCategory();
    this.getAllList();
  }
  getAllList() {
    this.categoryService.categoryList$.subscribe((data)=>{
      this.allList = data;
    });
    this.categoryService.getList().subscribe();
  }
  addCategory() {
   this.categoryService.getList().subscribe((data) =>{
    this.allList = data;
   });
  }
  delete() {
   this.categoryService.deleteCategory(this.formgroup2.value['id']).subscribe(() =>{
    console.log("Kategori başarıyla silindi")
   });
   console.log(this.formgroup2.value['id'])
   window.location.reload();
    }

  onFormSubmit() {
    if(this.allList.length !== 0){
      this.newCategory = {id: this.allList.length+1,
        name:this.formgroup.value['name'],
        description:this.formgroup.value['description']}
    }else{
      this.newCategory = {id: 1,
        name:this.formgroup.value['name'],
        description:this.formgroup.value['description']}
    }
      console.log(this.newCategory);
  
      this.categoryService.addCategory(this.newCategory).subscribe();
      if(this.newCategory){
        this.showMessage('Category added successfully!');
      }else{
        this.showMessage('Error adding category');
      }
     window.location.reload();
    }
    showMessage(message: string) {
        this.message = message;
        setTimeout(() => {
          this.message = null;
        }, 3000); // 3 seconds
      }
    //TODO: Ayarlama yapılacak
}
