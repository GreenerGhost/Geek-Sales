import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '@services/localproduct.service';
import { JSONProduct } from '@models/json-product';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    HttpClientModule, 
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {

  @Input() type: string = '';

  products: JSONProduct[] = [];
  
  constructor(
    private apiProductService: ProductService,
  ) {}

  ngOnInit(): void {

    this.apiProductService.getProducts().subscribe({
      next: (productObject: JSONProduct[]) => {
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
