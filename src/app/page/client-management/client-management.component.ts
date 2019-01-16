import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { STATUS, GENDER } from '../../constants/config';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidateExtendService } from '../../services/validate-service/validate-extend.service';
@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss'],
})
export class ClientManagementComponent implements OnInit {
  page = 1;
  searchInput: any = '';
  selectInput = '';
  listClient: any;
  selectSort: any = '';
  selectAll: any;
  selectActiveUser = 'Active';
  typeOrder: any = '';
  typeOrderBoolean: boolean;
  status: string = '';
  type: string = '';
  numPages = 10;
  listUser: any;
  totalItem: number = 0;
  limit: number = 20;
  listMentor: any = [];
  mentor: string = '';
  deleteFlag: any;
  isMinimize:boolean;
  tbAll = false;
  @ViewChild('modalDelete')
  modalDelete: any;
  @ViewChild('toast')
  toast: any;
  @ViewChild('modalAddMentee')
  modalAddMentee:any;
  addClientForm:any;
  showSendMail:boolean = false;
  listMail = [];
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
  constructor(
    private _api: ApiService,
    private _helper: HelperService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getListClient();
    this.getListMentor();
    this.InitFormAddClient();
    // this.listMentor = [
    //   { value: '0', label: 'Alabama' },
    //   { value: '1', label: 'Wyoming' },
    //   { value: '2', label: 'Coming' },
    //   { value: '3', label: 'Henry Die' },
    //   { value: '4', label: 'John Doe' }
    // ];
  }
  InitFormAddClient(){ 
    this.addClientForm = this.formBuilder.group({ 
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      confirmEmail: ['', [Validators.required]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNumber: [''],
      note: ['']
    },{ validator: 
      [
        ValidateExtendService.matchingEmail('email', 'confirmEmail'),
        ValidateExtendService.matchingPassword('password','confirmPassword')
    ] })
  }
  onChangePage(event) {
    this.selectAll = false;
    this.getListClient();
  }

  getListClient() {
    const data = {
      search: this.searchInput,
      page: this.page,
      limit: this.limit,
      status: this.status,
      orderBy: this.selectSort,
      orderType: this.typeOrder,
      mentor: this.mentor,
      checked: false
    };
    
    this._api.management(data).then(res => {
      this.listClient = res['data']['clients']
      this.totalItem = res['data']['totalItem'];
    }).catch(err => {
      console.log(err);
    })
  }
  showAll() {
    this.searchInput = '';
    this.page = 1;
    this.type = '';
    this.status = '';
    this.mentor = '';
    this.getListClient();
  }
  searchTable() {
    this.page = 1;
    this.getListClient();
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
    this.getListClient()
  }
  resendCode(idClient) {
    const apiResendCode = {
      IdClient: idClient,
      IdMentor: idClient
    };
    this._api.resendCode(apiResendCode).then(res => {
      this.getListClient()
    }).catch(err => {
      console.log(err);
    })
  }
  getListMentor() {
    this._api.getListMentor().then(res => {
      this.listMentor = res['data'];
    }).catch(err => {

    })
  }
  confirmDelete(client) {
    this.deleteFlag = client;
    this.modalDelete.show();
  }
  delete() {
    this.modalDelete.hide();
    this._helper.toggleLoadng(true);
    this._api.deleteMentee(this.deleteFlag.Id).then((res: any) => {
      this._helper.toggleLoadng(false);
      if (res.status == STATUS.error) {
        this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
      } else {
        this.getListClient();
        this.toast.addToast({ title: 'Message', msg: 'Delete Client Success', timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
      }
    }).catch(err => {
      this._helper.toggleLoadng(false);
    })
  }

  changeAll(value) {
    this.listMail = [];
    if (this.listClient) {
      if (value !== undefined) {
        for (let index = 0; index < this.listClient.length; index++) {
          this.listClient[index].checked = value;
          if(this.listClient[index].checked == true){
            this.listMail.push(this.listClient[index].Email)
          }
        }
      }
    }
  }

  changeOne() {
    // let count = 0;
    // if (this.listClient) {
    //   for(let i = 0; i < this.listClient.length;i++){ 
    //     if(this.listClient[i].checked === true)
    //     count++;
    //   }
    //   this.selectAll = (count === this.listClient.length || count === this.limit)  ? true : false;
    // }
    let count = 0;
    if (this.listClient) {
      for (let i = 0; i < this.listClient.length; i++) {
        if (this.listClient[i].checked === true){
          count++;
          if(this.listMail.indexOf(this.listClient[i].Email)==-1){
            this.listMail.push(this.listClient[i].Email)
          }    
        } else {
          if(this.listMail.indexOf(this.listClient[i].Email) !=-1){
            this.listMail.splice(this.listMail.indexOf(this.listClient[i].Email),1);
          }
        }
      }
      this.selectAll = (count === this.listMentor.length || count === this.limit)  ? true : false;
    }
  }
  goToClientInfo(id) {
    this.router.navigate(['client-info',id]);
  }
  addNewMentee(){ 
    let data = this.addClientForm.value;
    this._api.adminAddClient(data).then((res:any) => {
      if(res.status == 'error'){ 
        this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
      } else { 
        this.toast.addToast({ title: 'Message', msg: "Successfully", timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
        this.addClientForm.reset();
        this.modalAddMentee.hide();
        this.getListClient();
      } 
    })
  }
  closeSendForm(val?){
    this.showSendMail = false;
    if(val === "Successfully"){
      this.toast.addToast({ title: 'Message', msg: val, timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
    }
    this.listMail = [];
    for(let i = 0; i<this.listClient.length;i++){
      this.listClient[i].checked = false;
    }
    this.selectAll = false;
  }
  deleteMail(val){
    this.listMail.splice(this.listMail.indexOf(val),0);
    for(let i = 0;i<this.listClient.length;i++){
      if(this.listClient[i].Email == val){
        this.listClient[i].checked = false;
      }
    }
  }
  showSendMailForm() {
    this.showSendMail = true;
    this.isMinimize =  !this.isMinimize ;
  }
}
