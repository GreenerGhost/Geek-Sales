import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleProductService } from '@services/consoleproduct.service';
import { JSONProduct } from '@models/json-product';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule, AsyncPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {

  @Input() name: string = '';


  products: JSONProduct[] = [];

  constructor(private productService: ConsoleProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (product: JSONProduct[]) => {
        this.products = product;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
      },
    });
  }
}
