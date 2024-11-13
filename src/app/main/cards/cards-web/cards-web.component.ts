import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { webProductService } from '@services/product.service';
import { StoreAPI } from '@models/store-api';

@Component({
  selector: 'app-cards-web',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    HttpClientModule, 
    AsyncPipe
  ],
  templateUrl: './cards-web.component.html',
  styleUrl: './cards-web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsWebComponent implements OnInit{ 

  @Input() type: string = '';

  products: StoreAPI[] = [];

  constructor(
    private productService: webProductService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (productObject: StoreAPI[]) => {
        this.products = productObject;
        console.log(this.products);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
      },
    });
  }
}
