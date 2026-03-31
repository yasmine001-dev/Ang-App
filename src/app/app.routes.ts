import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact} from './pages/contact/contact';
import { Courses } from './components/courses/courses';
import { NotFound } from './pages/not-found/not-found';
export const routes: Routes = [
     { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'courses', component: Courses },
  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // wildcard
  { path: '**', component: NotFound}
];
