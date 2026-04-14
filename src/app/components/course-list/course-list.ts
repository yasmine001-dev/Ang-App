import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { ICourse } from '../../models/icourse';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, AppDisableAfterClick, DiscountPipe],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseListComponent {
  @Input() courses: ICourse[] = [];
  @Input() selectedCatId = '0';
  @Input() categoryName = 'All Categories';
  @Output() totalOrderPriceChange = new EventEmitter<number>();
  @Output() courseRegistered = new EventEmitter<string>();

  private readonly orderedCourseIds = new Set<string>();
  private totalOrderPrice = 0;

  get filteredCourses(): ICourse[] {
    if (this.selectedCatId === '0') {
      return this.courses;
    }

    return this.courses.filter((course) => String(course.catId) === this.selectedCatId);
  }

  register(course: ICourse): void {
    const courseId = String(course.id);
    if (this.orderedCourseIds.has(courseId) || course.seats === 0) {
      return;
    }

    this.orderedCourseIds.add(courseId);
    course.seats -= 1;
    this.totalOrderPrice += course.price;
    this.totalOrderPriceChange.emit(this.totalOrderPrice);
    this.courseRegistered.emit(course.title);
  }

  isRegistered(course: ICourse): boolean {
    return this.orderedCourseIds.has(String(course.id));
  }
}
