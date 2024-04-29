import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-data',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer-data.component.html',
  styleUrl: './footer-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterDataComponent { }
