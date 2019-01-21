import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api-service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../../../services/helper-service/helper.service';
import { GENDER, STATUS } from '../../../constants/config';
import { ValidateExtendService } from '../../../services/validate-service/validate-extend.service';
@Component({
  selector: 'app-list-mentee',
  templateUrl: './list-mentee.component.html',
  styleUrls: ['./list-mentee.component.scss']
})
export class ListMenteeComponent implements OnInit {
  @ViewChild('modalAddMentee')
  modalAddMentee: any;
  addClientForm: any;
  listMentee: any;
  changePasswordForm: any;
  idMentor: any;
  limit: number = 20;
  status: string = '';
  selectSort: any = '';
  page = 1;
  typeOrder: any = '';
  totalItem: number = 0;
  selectAll: any;
  @ViewChild('toast')
  toast: any;
  @ViewChild('modalDelete')
  modalDelete: any;
  idMenteeDelete: any;
  countries = [];
  listGender: any = [
    {
      name: 'Male',
      value: GENDER.Male
    },
    {
      name: 'Female',
      value: GENDER.Female
    }
  ]
  typeOrderBoolean: boolean;
  deleteFlag: any;
  constructor(
    private router: ActivatedRoute,
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private _helper: HelperService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.InitFormAddClient();
    this.router.params.subscribe(res => {
      this.idMentor = res.id;
      this.getListMentee(res.id);
    })
  }
  InitFormAddClient() {
    this.addClientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNumber: [''],
      note: [''],
      countryId: ['', Validators.required]
    }, {
        validator:
          [
            ValidateExtendService.matchingEmail('email', 'confirmEmail'),
            ValidateExtendService.matchingPassword('password', 'confirmPassword')
          ]
      })
  }
  onChangePage(event) {
    this.selectAll = false;
    this.getListMentee(this.idMentor);
  }
  getListMentee(id) {
    let data = {
      page: this.page,
      limit: this.limit,
      status: this.status,
      orderBy: this.selectSort,
      orderType: this.typeOrder,
      mentor: id,
      checked: false
    }
    this._api.management(data).then(res => {
      this.listMentee = res['data']['clients'];
      this.totalItem = res['data']['totalItem'];
      console.log(this.listMentee);

    })
  }
  sortTable(data) {
    this.selectSort = data;
    if (this.typeOrderBoolean == false || '') {
      this.typeOrder = "desc";
      this.typeOrderBoolean = true;
    }
    else {
      this.typeOrder = "asc";
      this.typeOrderBoolean = false;
    }
    console.log(this.selectSort, this.typeOrderBoolean, this.typeOrder);

    this.getListMentee(this.idMentor);
  }
  changeAll(value) {
    if (this.listMentee) {
      if (value !== undefined) {
        for (let index = 0; index < this.listMentee.length; index++) {
          this.listMentee[index].checked = value;
        }
      }
    }
  }
  changeOne() {
    let count = 0;
    if (this.listMentee) {
      for (let i = 0; i < this.listMentee.length; i++) {
        if (this.listMentee[i].checked === true)
          count++;
      }
      this.selectAll = (count === this.listMentee.length || count === this.limit) ? true : false;
    }
  }
  addNewMentee() {
    this.markFormGroupTouched(this.addClientForm);
    if (this.addClientForm.invalid) {
      return;
    }
    let data = {
      firstName: this.addClientForm.value.firstName,
      surName: this.addClientForm.value.surName,
      gender: this.addClientForm.value.gender == 'male' ? GENDER.Male : GENDER.Female,
      email: this.addClientForm.value.email,
      dateOfBirth: this.addClientForm.value.dateOfBirth,
      contactNumber: this.addClientForm.value.contactNumber,
      note: this.addClientForm.value.note,
      password:this.addClientForm.value.password,
      countryId: this.addClientForm.value.countryId
    }
    data['userId'] = this.idMentor;
    this._api.addNewMentee(data).then((res: any) => {
      console.log(data);
      
      if (res.status == 'error') {
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
          msg: "Successfully",
          timeout: 5000,
          theme: 'material',
          position: 'top-right',
          type: 'success'
        });
        this.addClientForm.reset();
        this.modalAddMentee.hide();
        this.getListMentee(this.idMentor);
      }
    })
  }
  resendCode(idClient) {
    let data = {
      IdClient: idClient,
      IdMentor: this.idMentor
    };
    this._api.resendCode(data).then(res => {
      this.getListMentee(this.idMentor);
    }).catch(err => {
      console.log(err);
    })
  }
  delete(id) {
    this.idMenteeDelete = id;
    this.modalDelete.show();
  }
  deleteMentee() {
    // this.modalDelete.hide();
    // this._helper.toggleLoadng(true);
    // this._api.deleteMentee(this.idMenteeDelete).then((res: any) => {
    //   this._helper.toggleLoadng(false);
    //   if (res.status == STATUS.error) {
    //     this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
    //   } else {

    //     this.toast.addToast({ title: 'Message', msg: 'Delete Client Success', timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
    //     this.getListMentee(this.idMentor);
    //   }
    // }).catch(err => {
    //   this._helper.toggleLoadng(false);
    // })
    this.modalDelete.hide();
    this._helper.toggleLoadng(true);
    this._api.deleteMenteeFromMentor( this.idMentor,this.idMenteeDelete).subscribe((res: any) => {
      this._helper.toggleLoadng(false);
      if (res.status === STATUS.error) {
        this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
      } else {
        this.toast.addToast({ title: 'Message', msg: 'Delete Client Success', timeout: 2000, theme: 'material', position: 'top-right', type: 'success' });
        this.getListMentee(this.idMentor);
      }
    }, err => {
      this._helper.toggleLoadng(true);
    })
  }
  goToClientInfo(id) {
    this._router.navigate(['client-info', id]);
  }
  showAddClient() {
    this._api.getCountries().subscribe(res => {
      let resultCountry = res['data'];
      this.countries = this.sortBy(resultCountry, 'Name', false);
      this.modalAddMentee.show();
    })
  }
  sortBy(list: any[], property: string, reverse: boolean) {
    if (!reverse) {
      return list.sort(function (a, b) {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      })
    } else {
      return list.sort(function (a, b) {
        if (a[property] < b[property]) return 1;
        if (a[property] > b[property]) return -1;
        return 0;
      })
    }
  }
  markFormGroupTouched(formGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

