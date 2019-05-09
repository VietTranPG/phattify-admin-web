import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { STATUS } from '../../constants/config';
import { HelperService } from '../../services/helper-service/helper.service';

@Component({
  selector: 'app-stripe-error-mentor',
  templateUrl: './stripe-error-mentor.component.html',
  styleUrls: ['./stripe-error-mentor.component.scss']
})
export class StripeErrorMentorComponent implements OnInit {

  constructor(private _api: ApiService, private _helper: HelperService) { }
  listMentor: any = [];
  userId: any;
  @ViewChild('modalConfirm')
  modalConfirm: any;
  ngOnInit() {
    this.getListErrorMentor();
  }
  getListErrorMentor() {
    this._helper.toggleLoadng(true);
    this._api.getErrorMentor().subscribe((res: any) => {
      this._helper.toggleLoadng(false);
      if (res.status == STATUS.error) {
        alert(res.message)
        return;
      }
      this.listMentor = res.data
    }, err => {
      this._helper.toggleLoadng(true);
    })
  }
  showModalConfirm(id) {
    this.userId = id;
    this.modalConfirm.show();
  }
  upgrade() {
    this._helper.toggleLoadng(true);
    this._api.updateErrorMentor({ Id: this.userId }).subscribe((res: any) => {
      this._helper.toggleLoadng(false);
      this.modalConfirm.hide();
      if (res.status == STATUS.error) {
        alert(res.message)
      } else {
        this.getListErrorMentor();
        alert(res.status)
      }
    }, err => {
      this._helper.toggleLoadng(false)})
  }

}
