import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleProductService } from '../../services/consoleproduct.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  @Input() name: string = '';

  product: any;

  constructor(private productService: ConsoleProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (product: any) => {
        this.product = product;
        console.log(this.product);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
}
