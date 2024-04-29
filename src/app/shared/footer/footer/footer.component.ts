import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';
import { FooterFormComponent } from '../footer-form/footer-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FooterLinksComponent,
    FooterFormComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
