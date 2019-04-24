import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";
import { HelperService } from '../../../services/helper-service/helper.service';
@Component({
  selector: 'roud-detail-table',
  templateUrl: './roud-detail-table.component.html',
  styleUrls: ['./roud-detail-table.component.scss']
})
export class RoudDetailTableComponent implements OnInit {
  @Input() roundDetail: any = [];
  @Input() userTimeZone: any;
  @ViewChild('modalConfirmUpdate') modalConfirmUpdate:any;
  oldData: any;
  editAll: boolean = false;
  test: any = new Date();
  constructor(private _helperService: HelperService) {
  }
  ngOnChanges() {
    this.roundDetail.forEach(e => {
      e.createdAt = this.userTimeZone ? this._helperService.convertTimeToLocalByTimeZone(e.createdAt, this.userTimeZone) : this._helperService.convertTimeToLocal(e.createdAt);
    });
    this.oldData = this._helperService.cloneArray(this.roundDetail);
  }
  ngOnInit() {
  }
  showEdit(index) {
    if (typeof (index) == 'number') {
      this.roundDetail[index].enable = true;
    } else {
      this.editAll = true;
      this.roundDetail.forEach(e => {
        e.enable = true;
      });
    }
  }
  closeEdit(index) {
    if (typeof (index) == 'number') {
      this.roundDetail[index].enable = false;
    } else {
      this.editAll = false;
      this.roundDetail.forEach(e => {
        e.enable = false;
        return e;
      });
    }
    this.roundDetail = this._helperService.cloneArray(this.oldData);
  }
  edit() {
    this.checkDiffArr(this.oldData, this.roundDetail);
    this.modalConfirmUpdate.show();
  }
  checkDiffArr(arrOld, arr) {
    let arrNew = arr.map(function (obj) {
      delete obj.enable;
      return obj
    });
    let diffArr = _.differenceWith(arrNew, arrOld, _.isEqual);
    let oldDiff = arrOld.filter(e => _.some(diffArr, { 'RoundDetailId': e.RoundDetailId }))
    let objectCompare = {
      'old': oldDiff,
      'new': diffArr
    }
    return objectCompare;
  }
  cancelUpdate(){
    this.modalConfirmUpdate.hide()
  }
}
