import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'formatTimeUtc'
})
export class FormatTimeUtcPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment.utc(value).format('YYYY-MM-DD HH:mm:ss z')
  }

}
