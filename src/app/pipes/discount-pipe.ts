import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercent: number = 10): number {
    return value - (value * discountPercent / 100);
  }
}