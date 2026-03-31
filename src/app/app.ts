import { Component, signal } from '@angular/core';
// import { Courses } from './components/courses/courses';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [RouterModule], //Courses
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CourseApp');
}
