import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../../homePage/module/productList';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  @Input() width?:string= "220px";
  @Input() items:ProductItem[] =[];
  @Output() buttonClick = new EventEmitter<void>();
  @Input()title?: string;
  @Input()description?: string;
  @Input()unitPrice?: number;

  OnButtonClick() {
    this.buttonClick.emit();
    }
 
 }
