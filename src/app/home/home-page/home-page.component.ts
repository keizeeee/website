import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { AboutPageComponent } from '../../about/about-page/about-page.component';
import { ExperiencePageComponent } from '../../experience/experience-page/experience-page.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, AboutPageComponent, ExperiencePageComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  

}
