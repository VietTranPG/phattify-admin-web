import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import * as moment from 'moment';
@Injectable()
export class HelperService {
  loading = new BehaviorSubject<boolean>(false);
  toastData = new BehaviorSubject<any>(null);
  constructor() { }
  toggleLoading(status) {
    this.loading.next(status);
  }
  showToast(option) {
    this.toastData.next(option);
  }
  convertTimeToLocal(time) {
    return moment(time).format('YYYY-MM-DD');
  }
  convertTimeToUTC(time) {
    return moment(time).utc().format('YYYY-MM-DD HH:mm:ss');
  }
  convertTimeToLocalByTimeZone(time, timezone) {
    return moment(time).utc().add(timezone, 'hours').format('YYYY-MM-DD');
  }
  convertTimeToUTCByTimeZone(time, timezone) {
    return moment(time).add(-timezone, 'hours').format('YYYY-MM-DD HH:mm:ss');
  }
  cloneArray(arr){
    return arr.map(x => Object.assign({}, x));
  }
  subDate(end,start){
    console.log('end: ',end,'start: ',start)
   return  moment(end).diff(moment(start),'days')
  }
} 
