import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api-service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../../../services/helper-service/helper.service';
import * as moment from 'moment';
import { ValidateExtendService } from '../../../services/validate-service/validate-extend.service';
import { STATUS } from '../../../constants/config';
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
  changePasswordForm: any;
  @ViewChild('toast')
  toast: any;
  @ViewChild('modalChangePassword')
  modalChangePassword: any;
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
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    }, { validator: ValidateExtendService.matchingPassword('password', 'confirmPassword') })
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
  fillDataMentorInfo() {
    if (this.mentorInfo) {
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
  downGradeMentor() {
    this._helper.toggleLoadng(true);
    this._api.downGradeMentor(this.idMentor).then((res: any) => {
      this._helper.toggleLoadng(false);
      console.log(res);
      if (res.status == STATUS.error){ 
        this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
      } else { 
        this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
        setTimeout(()=>{ 
          this._router.navigate(['/coach-management']);
        })     
      }
    }, err => {
      this._helper.toggleLoadng(false);
    })
  }
  blockMentor() {
    this._helper.toggleLoadng(true);
    this._api.blockMentor(this.idMentor).then(res => {
      this._helper.toggleLoadng(false);
      console.log(res);

    }, err => {
      this._helper.toggleLoadng(false);
    })
  }
  changePassword(){ 
    this.modalChangePassword.hide();
    let data = {
      "password": this.changePasswordForm.value.password
    }
    this._helper.toggleLoadng(true);
    this._api.changePassword(data, this.idMentor).then(res => {
      this._helper.toggleLoadng(false);
      if (res['status'] === STATUS.error) {
        this.changePasswordForm.reset();
        this.toast.addToast({ title: 'Message', msg: 'Can not change password', timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
      } else {
        this.changePasswordForm.reset();
        this.toast.addToast({ title: 'Message', msg: 'Change password success', timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
// export function confirmValidate(control: AbstractControl) {
//   if (control && control.value !== null) {
//     const confirmPassword = control.value;
//     const pass = control.root.get('password');
//     if (pass) {
//       const password = pass.value;

//       if (password !== confirmPassword) {
//         return {
//           isError: true,
//         };
//       }
//     }
//   }
//   return null;
// }