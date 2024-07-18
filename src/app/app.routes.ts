import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ExperiencePageComponent } from './experience/experience-page/experience-page.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent,
        title: 'Home'
    },
    {
        path:'about',
        component: AboutPageComponent,
        title: 'About'
    },
    {
        path:'experience',
        component: ExperiencePageComponent,
        title: 'Experience'
    }
];
