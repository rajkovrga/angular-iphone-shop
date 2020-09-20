import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (search === null || search === '') {
      return value;
    }
    return value.filter(x => x.model.toLowerCase().includes(search.toLowerCase()));
  }

}
