import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()({ transform: numberAttribute }) id!: number;
  @Input() name: string = '';
  @Input()({ transform: numberAttribute }) price!: number;
  @Input() image: string = '';
  @Input() description: string = '';
}
