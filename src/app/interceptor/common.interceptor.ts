import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any;
    if (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).data) {
      headers = new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('userInfo')).data}`);
    }
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return next.handle(req.clone({
      headers: headers,
    }));
  }
}