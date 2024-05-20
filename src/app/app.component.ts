import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './features/category/services/category.service';
import { LoadingOverlayComponent } from "./loading/component/loading-overlay/loading-overlay.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [CategoryService],
    imports: [RouterOutlet, FontAwesomeModule, LoadingOverlayComponent]
})
export class AppComponent {
  title = 'angularWork';
}
