import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer-form.component.html',
  styleUrl: './footer-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterFormComponent { }
