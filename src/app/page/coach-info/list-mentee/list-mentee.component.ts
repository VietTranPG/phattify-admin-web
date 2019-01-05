import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api-service/api.service';
import { FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { HelperService } from '../../../services/helper-service/helper.service';
import { GENDER } from '../../../constants/config';
@Component({
  selector: 'app-list-mentee',
  templateUrl: './list-mentee.component.html',
  styleUrls: ['./list-mentee.component.scss']
})
export class ListMenteeComponent implements OnInit {
  @ViewChild('modalAddMentee')
  modalAddMentee:any;
  addClientForm:any;
  listMentee:any;
  idMentor:any;
  limit: number = 20;
  status: string = '';
  selectSort: any = '';
  page = 1;
  typeOrder: any = '';
  totalItem: number = 0;
  selectAll: any;
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
      this.idMentor = res.ud;
      this.getListMentee(res.id);
    })
  }
  InitFormAddClient(){ 
    this.addClientForm = this.formBuilder.group({ 
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      confirmEmail: ['', [confirmValidate, Validators.required]],
      dateOfBirth: ['', Validators.required],
      contactNumber: [''],
      note: ['']
    })
  }
  onChangePage(event) {
    this.selectAll = false;
    this.getListMentee(this.idMentor);
  }
  getListMentee(id){ 
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
    console.log(value);

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
  addNewMentee(){ 
    let data = this.addClientForm.value;
    this._api.addNewMentee(data).then(res => { 
      console.log(data);
      console.log(res); 
    })
  }
}
export function confirmValidate(control: AbstractControl) {
  if (control && control.value !== null) {
    const ConfirmEmail = control.value;
    const email = control.root.get('Email');
    if (email) {
      const Email = email.value;

      if (Email !== ConfirmEmail) {
        return {
          isError: true,
        };
      }
    }
  }
  return null;
}