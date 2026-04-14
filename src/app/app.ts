import { Component, signal } from '@angular/core';
// import { Courses } from './components/courses/courses';
import { RouterModule } from '@angular/router'; 
//meta data of component
@Component({
  selector: 'app-root', //=> <app-root/>
  standalone: true,
  imports: [RouterModule], //Courses
  templateUrl: './app.html', //=> can be `<h1></h1>`
  styleUrl: './app.css', // can be `h1{color: red}`
})
export class App {
  protected readonly title = signal('CourseApp');
  ngOnInit() {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });
}
}

