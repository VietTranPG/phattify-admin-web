import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  page = 1;
  searchInput: any;
  selectInput = '';
  listClient: any;
  selectSort: any;
  selectAll: any;
  selectActiveUser = 'Active';
  typeOrder: any;
  typeOrderBoolean: boolean;
  status: string = 'active';
  type: string = '';
  numPages = 10;
  listUser: any;
  totalItem: number = 0;
  limit: number = 20;
  constructor(
    private _api: ApiService,

  ) { }

  ngOnInit() {
    this.getListClient();
  }

  onChangePage(event) {
    this.getListClient();
  }

  getListClient() {
    const data = {
      search: this.searchInput,
      page: this.page,
      limit: this.limit,
      type: this.type,
      status: this.status,
      orderBy: this.selectSort,
      orderType: this.typeOrder
    };
    this._api.management(data).then(res => {
      this.listClient = res['data']['clients']
      this.totalItem = res['data']['totalItem'];
    }).catch(err => {
      console.log(err);
    })
  }
  showAll() {
    this.searchInput = '',
    this.page = 1;
    this.type = '';
    this.status = 'active';
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
}
