import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '../../service/loading.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [
    CommonModule,FontAwesomeModule
  ],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlayComponent {
  loading$ = this.loadingService.loading$;
  faSpinner = faSpinner;
  constructor(private loadingService: LoadingService) {}
 }
