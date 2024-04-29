import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLinksComponent { }
