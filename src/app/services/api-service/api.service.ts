import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL,SERVER_URL_MOBILE } from '../../constants/config';

@Injectable()
export class ApiService {
  url = SERVER_URL;
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
  getListMentor() {
    let url = this.url + '/managementclient';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  deleteMentee(id) {
    let url = this.url + '/managementclient?id=' + id;
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  getClientInfo(id) {
    let url = this.url + '/client-info?Id=' + id;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  changePassword(req, id) {
    let url = SERVER_URL + '/client-info?Id=' + id;
    return new Promise((resolve, reject) => {
      this.http.put(url, req).subscribe(res => {
        resolve(res);
      }, err => { 
        reject(err);
      })
    })
  }
  deleteRound(roundId) {
    let url = SERVER_URL + 'round?Id=' + roundId;
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  assignMentor(req){
    let url = SERVER_URL_MOBILE + 'managementclient';
    return new Promise((resolve, reject) => {
      this.http.put(url, req).subscribe(res => {
        resolve(res);
      }, err => { 
        reject(err);
      })
    })
  }
}
