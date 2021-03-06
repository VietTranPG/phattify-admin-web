import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { HelperService } from '../../services/helper-service/helper.service';
import * as moment from 'moment';
import { STATUS } from '../../constants/config';
import { ValidateExtendService } from '../../services/validate-service/validate-extend.service';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  clientInfoForm: any;
  clientInfo: any = {};
  listMentor: any = [];
  healthList: any = [];
  checkResendCode: boolean;
  idClient: any;
  wipeData: boolean;
  checkShowDelete: boolean;
  checkShowWipeData: boolean;
  showAssignButton = false;
  @ViewChild('modalChangePassword')
  modalChangePassword: any;
  @ViewChild('toast')
  toast: any;
  @ViewChild('modalDelete')
  modalDelete: any;
  changePasswordForm: FormGroup;
  @ViewChild('modalAssign')
  modalAssign: any;
  mentorEmail: any;
  countries: any;
  checkDeleteFromMentor: any;
  showClientDetail:boolean = false;
  constructor(
    private router: ActivatedRoute,
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private _helper: HelperService,
    private _router: Router
  ) {
    this.initForm();
  }
  ngOnInit() {
    this.router.params.subscribe((res: any) => {
      this.idClient = res.id;
      this.getAllData();
    });
  }
  getAllData() {
    this._helper.toggleLoading(true);
    const getClientInfoPromise = this._api.getClientInfo(this.idClient);
    const getListMentorPromise = this._api.getListMentor();
    const getListCountry = this._api.getListCountry();
    Promise.all([getClientInfoPromise, getListMentorPromise, getListCountry]).then((values: any) => {
      this._helper.toggleLoading(false);
      //  process getClientInfo
      this.clientInfo = values[0].data;
      this.healthList = values[0].data.Health;
      this.checkResendCode = values[0].data.Status !== 'active' ? false : true;
      this.wipeData = values[0].data.RoundId ? true : false;
      this.fillDataClientInfo();
      // process getListMentor
      this.listMentor = values[1].data;

      // process get List Country
      this.countries = values[2].data;
    }).catch(err => {
      this._helper.toggleLoading(false);
    });
  }
  getClientInfo() {
    this._api.getClientInfo(this.idClient);
  }
  initForm() {
    this.clientInfoForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      SurName: ['', Validators.required],
      email: [{ value: '' }],
      DateOfBirth: [''],
      City: [{ value: '' }],
      Status: [{ value: '', disabled: true }],
      mentor: [''],
      Gender: [''],
      CountryName: [''],
      CountryId: ['', Validators.required],
      ContactNumber: [''],
      StartDate: [{ value: '', disabled: true }, Validators.required],
      StartWeight: [{ value: '', disabled: true }, Validators.required],
      CurrentWeight: [{ value: '', disabled: true }, Validators.required],
      EndDate: [{ value: '', disabled: true }, Validators.required]
    }, { validator: ValidateExtendService.isFloat('StartWeight') });
    //
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: ValidateExtendService.matchingPassword('password', 'confirmPassword') });
  }
  fillDataClientInfo() {
    if (this.clientInfo) {


      this.clientInfoForm.setValue({
        FirstName: this.clientInfo.FirstName,
        SurName: this.clientInfo.SurName,
        email: this.clientInfo.Email,
        DateOfBirth: moment(this.clientInfo.DateOfBirth).format('YYYY-MM-DD'),
        City: this.clientInfo.City,
        mentor: this.clientInfo.MentorEmail,
        Status: this.clientInfo.Status ? this.clientInfo.Status : 'pending',
        Gender: this.clientInfo.Gender,
        StartDate: moment(this.clientInfo.StartDate).format('YYYY-MM-DD'),
        StartWeight: this.clientInfo.StartWeight,
        CurrentWeight: this.clientInfo.CurrentWeight,
        CountryName: this.clientInfo.CountryName,
        CountryId: this.clientInfo.CountryId,
        EndDate: moment(this.clientInfo.EndDate).format('YYYY-MM-DD'),
        ContactNumber: this.clientInfo.ContactNumber
      });
      if (this.clientInfo.RoundId) {
        this.clientInfoForm.get('StartDate').enable();
        this.clientInfoForm.get('StartWeight').enable();
        this.clientInfoForm.get('EndDate').enable();
      }
    }
  }
  getListMentor() {
    this._api.getListMentor();
    // .then(res => {
    //   this.listMentor = res['data'];
    // }).catch(err => {

    // });
  }
  resendCode() {
    const apiResendCode = {
      IdClient: this.idClient,
      IdMentor: this.idClient
    };
    this._api.resendCode(apiResendCode).then(res => {
      if (res['status'] === STATUS.error) {
        this.toast.addToast({
          title: 'Message',
          msg: 'Can not resend code',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'error'
        });
      } else {
        this.toast.addToast({
          title: 'Message',
          msg: 'Successfully',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }
  showModalChangePassword() {
    // this.changePasswordForm = this.formBuilder.group({
    //   password: ['', Validators.required],
    //   confirmPassword: ['']
    // }, { Validators: ValidateExtendService.matchingPassword('password', 'confirmPassword') });
    this.modalChangePassword.show();
  }
  changePassword() {
    this.modalChangePassword.hide();
    const data = {
      'password': this.changePasswordForm.value.password
    };
    this._helper.toggleLoading(true);
    this._api.changePassword(data, this.idClient).then(res => {
      this._helper.toggleLoading(false);
      if (res['status'] === STATUS.error) {
        this.changePasswordForm.reset();
        this.toast.addToast({
          title: 'Message',
          msg: 'Can not change password',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'error'
        });
      } else {
        this.changePasswordForm.reset();
        this.toast.addToast({
          title: 'Message',
          msg: 'Change password success',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }
  confirmDelete(type) {
    if (type === 'wipeData' && this.wipeData) {
      this.checkShowDelete = false;
      this.checkShowWipeData = true;
      this.checkDeleteFromMentor = false;
      this.modalDelete.show();
    } else if (type === 'delete') {
      this.checkShowDelete = true;
      this.checkShowWipeData = false;
      this.checkDeleteFromMentor = false;
      this.modalDelete.show();
    } else if (type == 'deleteFromMentor') {
      this.checkDeleteFromMentor = true;
      this.checkShowDelete = false;
      this.checkShowWipeData = false;
      this.modalDelete.show();
    } else if (!this.wipeData) {
      this.toast.addToast({
        title: 'Message',
        msg: 'Delete round error, do not have round is running',
        timeout: 5000,
        theme: 'material',
        position: 'top-right',
        type: 'error'
      });
    }
  }
  hideDelete() {
    this.checkShowDelete = false;
    this.checkShowWipeData = false;
    this.modalDelete.hide();
  }
  delete() {
    this.modalDelete.hide();
    this._helper.toggleLoading(true);
    this._api.deleteMentee(this.clientInfo.Id).then((res: any) => {
      this.checkShowDelete = false;
      this._helper.toggleLoading(false);
      if (res.status === STATUS.error) {
        this.toast.addToast({
          title: 'Message',
          msg: res.message,
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'error'
        });
      } else {
        this.toast.addToast({
          title: 'Message',
          msg: 'Delete Client Success',
          timeout: 2000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
        setTimeout(() => {
          this._router.navigate(['/client-management']);
        }, 2000);
      }
    }).catch(err => {
      this._helper.toggleLoading(true);
    });
  }
  deleteFromMentor() {
    this.modalDelete.hide();
    this._helper.toggleLoading(true);
    this._api.deleteMenteeFromMentor(this.clientInfo.MentorId, this.clientInfo.Id).subscribe((res: any) => {
      this.checkShowDelete = false;
      this._helper.toggleLoading(false);
      if (res.status === STATUS.error) {
        this.toast.addToast({
          title: 'Message',
          msg: res.message,
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'error'
        });
      } else {
        this.toast.addToast({
          title: 'Message',
          msg: 'Delete Client Success',
          timeout: 2000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
        // this._router.navigate(['/coach-management']);
        this.getAllData();
      }
    }, err => {
      this._helper.toggleLoading(true);
    })
  }
  deleteRound() {
    this.modalDelete.hide();
    this._helper.toggleLoading(true);
    if (this.clientInfo.RoundId) {
      this._api.deleteRound(this.clientInfo.RoundId).then((res: any) => {
        this.checkShowWipeData = false;
        this._helper.toggleLoading(false);
        if (res.status === STATUS.error) {
          this.toast.addToast({
            title: 'Message',
            msg: 'Delete round error',
            timeout: 5000,
            theme: 'material',
            position: 'top-right',
            type: 'error'
          });
        } else {
          this.toast.addToast({
            title: 'Message',
            msg: 'Successfully',
            timeout: 5000,
            theme: 'material',
            position: 'top-right',
            type: 'success'
          });
          this.getAllData();
        }
      }, err => {
        console.log(err);
        this._helper.toggleLoading(false);
      });
    }
  }
  assignMentor() {
    const data = {
      'MentorId': this.clientInfoForm.value.mentor,
      'MenteeId': this.idClient
    };
    this._helper.toggleLoading(true);
    this._api.assignMentor(data).then((res: any) => {
      this._helper.toggleLoading(false);
      if (res.status === STATUS.error || res.data === 'not ok') {
        this.modalAssign.hide();
        this.toast.addToast({
          title: 'Message',
          msg: 'Assign Mentor error',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'error'
        });
      } else {
        this.modalAssign.hide();
        this.toast.addToast({
          title: 'Message',
          msg: 'Assign mentor successfully',
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
        // this.getClientInfo();
        // this.fillDataClientInfo();
        this.getAllData();
      }
    }, err => {
      console.log(err);
      this.modalAssign.hide();
      this._helper.toggleLoading(false);
    });
  }
  showModalAssign() {
    if (this.clientInfoForm.value.mentor) {
      this.mentorEmail = this.listMentor.find(x => x.value === this.clientInfoForm.value.mentor);
      this.modalAssign.show();
    } else {
      this.toast.addToast({
        title: 'Message',
        msg: 'You must select email',
        timeout: 5000,
        theme: 'material',
        position: 'top-right',
        type: 'error'
      });
    }
  }

  editClientInfo() {
    if (!this.clientInfoForm.valid) {
      return false;
    }
    const clientInfoForm = this.clientInfoForm.value;
    const data = {
      email:clientInfoForm.email,
      firstName: clientInfoForm.FirstName,
      surName: clientInfoForm.SurName,
      gender: clientInfoForm.Gender,
      dateOfBirth: clientInfoForm.DateOfBirth === 'Invalid date' ? '' : clientInfoForm.DateOfBirth,
      countryId: clientInfoForm.CountryId,
      menteeId: this.clientInfo.Id,
      city: clientInfoForm.City,
      contactNumber: clientInfoForm.ContactNumber,
      startWeight: 0,
      startDate: '',
      RoundId: '',
    };
    if (this.clientInfo.RoundId) {
      data.startWeight = clientInfoForm.StartWeight;
      data.startDate = moment.utc(clientInfoForm.StartDate).format('YYYY-MM-DD');
      data.RoundId = this.clientInfo.RoundId;
    }
    // call api save info
    this._helper.toggleLoading(true);
    this._api.adminUpdateClient(data).then((res: any) => {
    this._helper.toggleLoading(false);
      if (res.status === 'error') {
       
      } else {
        this.toast.addToast({
          title: 'Message', msg: 'Successfully', timeout: 5000,
          theme: 'material', position: 'top-right', type: 'success'
        });
      }
    }).catch(err => {
      this._helper.toggleLoading(false);
      this.toast.addToast({
        title: 'Message', msg: err.message,
        timeout: 5000, theme: 'material', position: 'top-right', type: 'error'
      });
    });
  }
}
