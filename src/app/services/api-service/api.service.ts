import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  url = "http://admin-phattify-qa.azurewebsites.net/api";
  constructor(private http: HttpClient) { }

  login(req) {
    let urlLogin = this.url + '/admin';
    return new Promise((resolve, reject) => {
      this.http.patch(urlLogin, req).subscribe(res => {
        resolve(res);
        console.log(res)
      }, err => {
        reject(err);
      })
    })
  }
  management(info) {
    let url = this.url + '/managementclient';

    return new Promise((resolve, reject) => {
      this.http.post(url, info).subscribe(res => {
        resolve(res);

      }, err => {
        reject(err);
      })
    })
  }

  getSummary(req) {
    let urlAdmin = `${this.url}/admin?start=${req.startTime}&end=${req.endTime}`;
    return new Promise((resolve, reject) => {
      this.http.get(urlAdmin).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  resendCode(idClient) {
    let urlResend = this.url + '/resendCode';
    return new Promise((resolve, reject) => {
      this.http.post(urlResend, idClient).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
}
