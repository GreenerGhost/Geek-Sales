import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLoginComponent { }
