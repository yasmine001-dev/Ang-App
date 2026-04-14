import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = `${environment.apiBaseUrl}/categories`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl);
  }

  getAllCateogories(): Observable<ICategory[]> {
    return this.getAllCategories();
  }
}
