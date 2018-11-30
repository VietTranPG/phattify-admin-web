import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
@Injectable()
export class HelperService {
  loading =  new BehaviorSubject<boolean>(false)
  constructor() { }
  toggleLoadng(status){
    this.loading.next(status);
  }
} 
