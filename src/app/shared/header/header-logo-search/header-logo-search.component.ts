import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-logo-search',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header-logo-search.component.html',
  styleUrl: './header-logo-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoSearchComponent { }
