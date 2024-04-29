import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/header/header/header.component';
import { PromotionalComponent } from '@main/cards/promotional/promotional.component';
import { MainComponent } from '@main/cards/main/main.component';
import { FooterComponent } from '@shared/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PromotionalComponent,
    MainComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent {
  title = 'geek-sales-page';
}
