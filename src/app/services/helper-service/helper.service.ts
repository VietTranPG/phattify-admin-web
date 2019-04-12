import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
@Injectable()
export class HelperService {
  loading =  new BehaviorSubject<boolean>(false);
  toastData =  new BehaviorSubject<any>(null);
  constructor() { }
  toggleLoadng(status){
    this.loading.next(status);
  }
  showToast(option){
    this.toastData.next(option);
  }
} 
