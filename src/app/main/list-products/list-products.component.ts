import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MainComponent,
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  @Input() product: string = '';
}
