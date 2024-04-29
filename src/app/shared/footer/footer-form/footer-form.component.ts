import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>footer-form works!</p>`,
  styleUrl: './footer-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterFormComponent { }
