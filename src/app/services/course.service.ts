import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICourse } from '../models/icourse';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.baseUrl}/courses`);
  }

  getCoursesByCategoryId(catId: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.baseUrl}/courses?catId=${catId}`);
  }

  getCourseById(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.baseUrl}/courses/${id}`);
  }

  addCourse(course: Omit<ICourse, 'id'>): Observable<ICourse> {
    return this.http.post<ICourse>(`${this.baseUrl}/courses`, course);
  }
}
