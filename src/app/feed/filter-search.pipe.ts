import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  pure: false
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length === 0 || args === undefined){
        return value;
    }

    if(value.length === 0 || args === undefined){
        return value;
    }

    return null;
  }

}
