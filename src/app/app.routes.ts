import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutUsComponent } from './pages/about/about';
import { ContactUsComponent } from './components/contact-us/contact-us';
import { CoursesComponent } from './components/courses/courses';
import { CourseDetailsComponent } from './components/course-details/course-details';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
