import { Pipe, PipeTransform } from '@angular/core';
import { HelperService } from '../services/helper-service/helper.service';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  constructor(private _helperService: HelperService) {

  }
  transform(value: any, type?: any, timezone?: any): any {
    switch (type) {
      case 'UTCtoLocal':
        return timezone ? this._helperService.convertTimeToLocalByTimeZone(value, timezone) : this._helperService.convertTimeToLocal(value);
      case 'LocaltoUTC':
        return timezone ? this._helperService.convertTimeToUTCByTimeZone(value, timezone) : this._helperService.convertTimeToUTC(value);
      default:
        break;
    }
  }

}
