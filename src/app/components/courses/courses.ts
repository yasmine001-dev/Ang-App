import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { ICourse } from '../../models/icourse';
import { CategoryService } from '../../services/category.service';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from '../course-list/course-list';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, CourseListComponent],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnInit {
  private readonly categoryService = inject(CategoryService);
  private readonly courseService = inject(CourseService);

  courses: ICourse[] = [];
  categories: ICategory[] = [];
  selectedCatId = '0';
  totalOrderPrice = 0;
  isLoading = true;
  lastRegisteredCourse = '';

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Failed to load categories', error);
      },
    });

    this.courseService.getAllCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load courses', error);
        this.isLoading = false;
      },
    });
  }

  onTotalOrderPriceChange(totalOrderPrice: number): void {
    this.totalOrderPrice = totalOrderPrice;
  }

  onCourseRegistered(courseTitle: string): void {
    this.lastRegisteredCourse = courseTitle;
  }

  get selectedCategoryName(): string {
    if (this.selectedCatId === '0') {
      return 'All Categories';
    }

    return this.categories.find((category) => String(category.id) === this.selectedCatId)?.name ?? 'Selected Category';
  }
}
