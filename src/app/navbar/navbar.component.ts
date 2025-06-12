import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home/home-page/home-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, HomePageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toHome() {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "home" not found.');
    }
  }

  toAbout() {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "about" not found.');
    }
  }
  toExperience() {
    const experienceElement = document.getElementById("experiences");
    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "experience" not found.');
    }
  }
  // to projects
  toProjects() {
    const projectElement = document.getElementById("experience");
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "projects" not found.');
    }
  }
  // to projects
  toEducation() {
    const projectElement = document.getElementById("education");
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "education" not found.');
    }
  }

}
