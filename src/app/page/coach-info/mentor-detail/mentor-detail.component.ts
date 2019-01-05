import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api-service/api.service';
import { FormBuilder } from '@angular/forms';
import { HelperService } from '../../../services/helper-service/helper.service';
import * as moment from 'moment';
@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.scss']
})
export class MentorDetailComponent implements OnInit {
  idMentor: any;
  mentorInfo: any;
  healthList: any = [];
  mentorInfoForm: any;
  constructor(
    private router: ActivatedRoute,
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private _helper: HelperService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.InitForm();
    this.getMentorInfo();
  }
  InitForm() {
    this.mentorInfoForm = this.formBuilder.group({ 
      FirstName: [{ value: '', disabled: true }],
      Email: [{ value: '', disabled: true }],
      ContactNumber: [{ value: '', disabled: true }],
      DateOfBirth: [{ value: '', disabled: true }],
      CountryName: [{ value: '', disabled: true }],
      City: [{ value: '', disabled: true }],
      Gender: [{ value: '', disabled: true }],
      SurName: [{ value: '', disabled: true }],
      Status: [{ value: '', disabled: true }]
    })
  }
  getMentorInfo() {
    this.router.params.subscribe(res => {
      this.idMentor = res.id;
      this._api.getMentorInfo(this.idMentor).then(data => {
        this.mentorInfo = data['data'];
        this.healthList = data['data']['Health'];
        console.log(this.healthList);
        console.log(this.mentorInfo)
        this.fillDataMentorInfo();
      })
    })
  }
  fillDataMentorInfo(){ 
    if(this.mentorInfo){ 
      this.mentorInfoForm.setValue({ 
        FirstName: this.mentorInfo.FirstName,
        Email: this.mentorInfo.Email,
        ContactNumber: this.mentorInfo.ContactNumber,
        DateOfBirth: moment(this.mentorInfo.DateOfBirth).format('YYYY-MM-DD'),
        CountryName: this.mentorInfo.CountryName,
        City: this.mentorInfo.City,
        Gender: this.mentorInfo.Gender,
        SurName: this.mentorInfo.SurName,
        Status: this.mentorInfo.Status
      })
      console.log(this.mentorInfo.Status)
    }
  }
  downGradeMentor(){ 
    this._helper.toggleLoadng(true);
    this._api.downGradeMentor(this.idMentor).then(res => { 
      this._helper.toggleLoadng(false);
      console.log(res);
      this._router.navigate(['/coach-management'])
    },err => {
      this._helper.toggleLoadng(false);
    })
  }
  blockMentor(){ 
    this._helper.toggleLoadng(true);
    this._api.blockMentor(this.idMentor).then(res => { 
      this._helper.toggleLoadng(false);
      console.log(res);
      
    }, err => { 
      this._helper.toggleLoadng(false);
    })
  }
}
