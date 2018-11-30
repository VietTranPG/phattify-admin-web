import { HelperService } from './../../services/helper-service/helper.service';
import { ApiService } from './../../services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public dataUser: any;

  constructor(
    private _api: ApiService,
    private router: Router,private _helper:HelperService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  onSubmit() {
    this._helper.toggleLoadng(true);
    this._api.login(this.loginForm.value).then(res => {
      this._helper.toggleLoadng(false);
      if (res['status'] == "success") {
          window.alert('Login success')
        this.router.navigate(['dashboard']);
        localStorage.setItem('userInfo', JSON.stringify({ data: res['token'] }));
        this.dataUser = JSON.parse(localStorage.getItem('userInfo')).data;
      }
      else window.alert('Login failed')
    }).catch(err => {
      console.log(err);
      this._helper.toggleLoadng(false);
    })

  }

}
