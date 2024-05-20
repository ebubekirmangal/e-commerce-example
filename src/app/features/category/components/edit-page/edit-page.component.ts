import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../../layout/navigation/navigation.component";
import { FooterComponent } from "../../../../layout/footer/footer.component";
import { FormComponent } from "../../../../shared/form/form.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
        FormComponent,
        ReactiveFormsModule
    ]
})
export class EditPageComponent { 

    formgroup: FormGroup = new FormGroup({
        name : new FormControl(),
    });
}
