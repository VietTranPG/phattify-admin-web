import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.scss']
})
export class CoachManagementComponent implements OnInit {
  page = 1;
  searchInput: any = '';
  typeOrder: any = '';
  typeOrderBoolean: boolean;
  limit: number = 20;
  mentee: any = '';
  listMentor: any;
  totalItem: number = 0;
  selectAll: any;
  selectSort: any = '';
  constructor(private _api: ApiService, ) {

  }

  ngOnInit() {
    this.getListMentor();
  }
  showAll() {
    this.searchInput = '';
    this.page = 1;
    this.typeOrder = '';
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
    console.log(this.selectSort,this.typeOrderBoolean,this.typeOrder);
    
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
      orderby: this.selectSort
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
}
