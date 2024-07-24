import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { AboutPageComponent } from '../../about/about-page/about-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, AboutPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
