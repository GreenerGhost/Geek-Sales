import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CardsWebComponent } from '../cards-web/cards-web.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
    CardsComponent,
    CardsWebComponent,
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  @Input() name: string = '';
  @Input() service: string = '';
  @Input() type: string = '';

  constructor() {}

  ngOnInit(): void {}

}


