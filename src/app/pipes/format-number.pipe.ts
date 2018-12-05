import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = 0;
    if(value){
      result = value.toFixed(2);
    }
    return result;
  }

}
