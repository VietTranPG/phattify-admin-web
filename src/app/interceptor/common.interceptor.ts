import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HelperService } from '../services/helper-service/helper.service';
@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {
  constructor(private _helper:HelperService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any;
    if (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).data) {
      headers = new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('userInfo')).data}`);
    }
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return next.handle(req.clone({
      headers: headers,
    })).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if(event.body && event.body.status == 'error'){
          this._helper.showToast({
            title: 'Message', msg: event.body.message,
            timeout: 5000, theme: 'material', position: 'top-right', type: 'error'
          });
        }
      }
    })
  }
}