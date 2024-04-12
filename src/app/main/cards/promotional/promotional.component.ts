import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-promotional',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './promotional.component.html',
  styleUrl: './promotional.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionalComponent { }
