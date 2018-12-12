import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  clientInfoForm: any;
  clientInfo :any;
  listMentor: any = [];
  constructor(private router: ActivatedRoute, private _api: ApiService, private formBuilder: FormBuilder, ) {
    this.InitForm();
  }
  ngOnInit() {
    this.getClientInfo();
    this.getListMentor();
  }
  getClientInfo() {
    this.router.params.subscribe(res => {
      this._api.getClientInfo(res.id).then(data => {
        this.clientInfo = data['data'][0];
        this.fillDataClientInfo();
      })
    })
  }
  InitForm() {
    this.clientInfoForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      SurName: ['',Validators.required],
      email: ['', Validators.email],
      DateOfBirth: ['', Validators.required],
      City: [''],
      Status:[''],
      mentor:[''],
      Gender:[true],
      StartDate: ['',Validators.required],
      StartWeight: [''],
      CurrentWeight: ['']
    })
  }
  fillDataClientInfo(){ 
    if(this.clientInfo) { 
      this.clientInfoForm.setValue({ 
        FirstName: this.clientInfo.FirstName,
        SurName: this.clientInfo.SurName,
        email: this.clientInfo.Email,
        DateOfBirth: this.clientInfo.DateOfBirth,
        City: this.clientInfo.City,
        mentor:this.listMentor,
        Status:this.clientInfo.Status,
        Gender: this.clientInfo.Gender,
        StartDate: this.clientInfo.StartDate,
        StartWeight: this.clientInfo.StartWeight,
        CurrentWeight: this.clientInfo.CurrentWeight
      })
    }

  }
  getListMentor() {
    this._api.getListMentor().then(res => {
      this.listMentor = res['data'];
    }).catch(err => {

    })
  }
}
