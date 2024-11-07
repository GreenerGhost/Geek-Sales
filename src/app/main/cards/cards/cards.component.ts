import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalProductService } from '@services/localproduct.service';
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

  @Input() service: string = '';
  @Input() api: string = '';

  products: JSONProduct[] = [];
  
  constructor(private productService: LocalProductService) {}

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
