import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sort: string): any {
    if (value.length === 0 || sort === '') {
      return value;
    }
    const result = value;
    switch (sort) {
      case 'asc':
        result.sort((a, b) => a['price'] - b['price']);
        break;
      case 'desc':
        result.sort((a, b) => b['price'] - a['price']);
        break;
      default:
        result.sort((a, b) => b['price'] - a['price']);
    }
    return result;
  }

}
