import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreAPI, Category, Rating } from '@models/store-api';

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

  @Input() storeAPI: StoreAPI[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch data from the API
    // this.storeAPI = await fetchStoreData();
  }
}
