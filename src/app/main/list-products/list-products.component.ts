import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent { }
