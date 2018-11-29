import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: any, args?: any): any {
    let dateData = new Date(date)
    return moment(dateData).format('DD/MM/YYYY')
  }

}
