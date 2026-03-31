import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: ICategory[] = [
    { id: 1, name: 'Academic ' }, // Math Science
    { id: 2, name: 'Technology' }, //  Computer
    { id: 3, name: 'Lifestyle' }, //  Cooking , art
  ];

  getAllCategories(): ICategory[] {
    return this.categories;
  }
}
