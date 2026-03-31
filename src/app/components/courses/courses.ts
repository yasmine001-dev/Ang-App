import { Component } from '@angular/core';
// import { NgClass } from '@angular/common';
import { ICourse } from '../../models/icourse';
import { ICategory } from '../../models/icategory';
import { CoursesService } from '../../services/courses.service';
import { CategoriesService } from '../../services/categories.service';
import { FormsModule } from '@angular/forms'; // search
import { AppDisableAfterClick } from "../../directives/app-disable-after-click";
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-courses',
  imports: [FormsModule, AppDisableAfterClick,DiscountPipe,CurrencyPipe], //NgClass
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  totalCourses: number = 0; //Total registered courses
  selectedCategoryID: string | number = 'all';
  courses: ICourse[] = [];
  categories: ICategory[] = [];
  registeredCourses: ICourse[] = [];

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService
  ) {
    this.courses = this.coursesService.getCoursesByCatID(0);
    this.categories = this.categoriesService.getAllCategories();
  }


  // get filteredCourses(): ICourse[] {
  //   return this.selectedCategory === 0
  //     ? this.courses
  //     : this.courses.filter(course => course.catId === this.selectedCategory);
  // }
  //task004
  register(course: ICourse) {
    if (course.seats > 0) {
      course.seats--;
      this.totalCourses++;
          this.registeredCourses.push(course); // to get total pricse

    }

//     if (!this.registeredCourses.find(c => c.id === course.id)) {
//   this.registeredCourses.push(course);
// }
  }

get totalPrice(): number {
  return this.registeredCourses.reduce((sum, c) => sum + c.price, 0);
}
}
