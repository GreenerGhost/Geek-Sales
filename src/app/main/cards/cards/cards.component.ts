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
import { StarWarsProductService } from '@services/starwarsproduct.service';
import { ClotesProductService } from '@services/clotesproduct.service';
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
  
  constructor(private productService: ClotesProductService) {
    // this.productService = new ConsoleProductService(http);
    // this.productService = new StarWarsProductService(http);
    // this.productService = new ClotesProductService(http);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (productObject: JSONProduct[]) => {
        this.products = productObject;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
      },
    });
  }
}
