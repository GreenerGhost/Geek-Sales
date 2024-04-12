import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
    CardsComponent,
    MainComponent,
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  @Input() product: string = '';
}
