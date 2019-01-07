import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { STATUS } from '../../constants/config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.scss']
})
export class CoachManagementComponent implements OnInit {
  listMail = [];
  page = 1;
  searchInput: any = '';
  typeOrder = '';
  typeOrderBoolean: boolean;
  limit: number = 20;
  mentee: any = '';
  listMentor: any;
  totalItem: number = 0;
  selectAll: any;
  selectSort: any = '';
  group = '';
  listMentee: any = [];
  loadingSelect: boolean = false;
  showSendMail:boolean = false;
  constructor(
    private _api: ApiService, 
    private _helper: HelperService,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.getListMentor();
  }
  showAll() {
    this.searchInput = '';
    this.page = 1;
    this.typeOrder = '';
    this.mentee = '';
    this.getListMentor();
  }
  searchTable() {
    this.page = 1;
    this.getListMentor();
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

    this.getListMentor()
  }
  onChangePage(event) {
    this.selectAll = false;
    this.getListMentor();
  }
  getListMentor() {
    const data = {
      search: this.searchInput,
      page: this.page,
      limit: this.limit,
      orderType: this.typeOrder,
      mentee: this.mentee,
      orderby: this.selectSort,
      checked: false
    };
    console.log(data);
    this._api.getAllMentor(data).then(res => {
      this.listMentor = res['data']['mentors'];
      this.totalItem = res['data']['totalItem'];
      console.log(this.listMentor);

    }, err => {
      console.log(err);
    })
  }
  changeAll(value) {
    console.log(value);
    this.listMail = [];
    if (this.listMentor) {
      if (value !== undefined) {
        for (let index = 0; index < this.listMentor.length; index++) {
          this.listMentor[index].checked = value;
          if(this.listMentor[index].checked == true){
            this.listMail.push(this.listMentor[index].Email)
          }
        }
      }
    }
  }
  changeOne() {
    let count = 0;
    if (this.listMentor) {
      for (let i = 0; i < this.listMentor.length; i++) {
        if (this.listMentor[i].checked === true){
          count++;
          if(this.listMail.indexOf(this.listMentor[i].Email)==-1){
            this.listMail.push(this.listMentor[i].Email)
          }    
        } else {
          if(this.listMail.indexOf(this.listMentor[i].Email) !=-1){
            this.listMail.splice(this.listMail.indexOf(this.listMentor[i].Email),1);
          }
        }
      }
      this.selectAll = (count === this.listMentor.length || count === this.limit)  ? true : false;
    }

  }
  searchMentee(q) {
    this.loadingSelect = true;
    this._api.searchMentee(q).subscribe(res => {
      console.log(res);
      this.loadingSelect = false;
      this.listMentee = res['data'];
    }, err => {
      this.loadingSelect = false;
    })
  }
  goToCoachInfo(id){
    this.router.navigate(['mentor-info',id]);
  }
}
