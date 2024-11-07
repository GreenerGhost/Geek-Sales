import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  @Input() name: string = '';
  @Input() service: string = '';
  @Input() api: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
    console.log(this.service);
    console.log(this.api);
  }

}


