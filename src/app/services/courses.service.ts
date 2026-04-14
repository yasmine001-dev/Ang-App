import { Injectable } from '@angular/core';
import { ICourse } from '../models/icourse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = `${environment.apiBaseUrl}/courses`;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCategoryID(catID: number | string): Observable<ICourse[]> {
    if (String(catID) === '0') {
      return this.getAllCourses();
    }

    return this.http.get<ICourse[]>(`${this.apiUrl}?catId=${catID}`);
  }

  getCoursesByCatID(catID: number | string): Observable<ICourse[]> {
    return this.getCoursesByCategoryID(catID);
  }

  getCourseByID(courseID: number | string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.apiUrl}/${courseID}`);
  }

  addCourse(course: Omit<ICourse, 'id'>): Observable<ICourse> {
    return this.http.post<ICourse>(this.apiUrl, course);
  }
}
