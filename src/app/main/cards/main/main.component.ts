import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListProductsComponent } from '../list-products/list-products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ListProductsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { 
  products = [
    {
      id: 1,
      name: 'Star Wars',
      service: 'api-server-local',
      api: 'starwars-product',
    },
    {
      id: 2,
      name: 'Consolas',
      service: 'api-server-local',
      api: 'console-product',
    },
    {
      id: 3,
      name: 'Diversos',
      service: 'api-server-local',
      api: 'clotes-product',
    },
    {
      id: 4,
      name: 'Ropa',
      service: 'api-server-web',
      api: 'product',
    }
  ];
};
