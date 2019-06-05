import { Component, OnInit, Input, ViewChild, Output,EventEmitter } from '@angular/core';
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";
import { HelperService } from '../../../services/helper-service/helper.service';
import { ApiService } from '../../../services/api-service/api.service';
import * as moment from 'moment';
import { debug } from 'util';
import { STATUS } from '../../../constants/config';
@Component({
  selector: 'roud-detail-table',
  templateUrl: './roud-detail-table.component.html',
  styleUrls: ['./roud-detail-table.component.scss']
})
export class RoudDetailTableComponent implements OnInit {
  @Input() roundDetail: any = [];
  @Input() userTimeZone: any;
  @Output() onUpdateSuccess = new EventEmitter();
  @ViewChild('modalConfirmUpdate') modalConfirmUpdate:any;
  oldData: any;
  editAll: boolean = false;
  test: any = new Date();
  today: any;
  objectCompare:any={
    old:[],
    new:[]
  };
  constructor(private _helperService: HelperService,private _api:ApiService) {
    this.today = moment().format('YYYY-MM-DD');
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
  remove(index) {
    debugger;
    const Id = this.roundDetail[index].RoundDetailId;

    this._api.deleteRoundDetail(Id).subscribe((res: any) => {
      this._helperService.toggleLoading(false);
      if (res.status == STATUS.error) {
        alert(res.message)
      } else {
        alert(res.status)
      }
    }, err => {
      this._helperService.toggleLoading(false)})
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
    this.objectCompare=this.checkDiffArr(this.oldData, this.roundDetail);
    const { createdAt } = this.objectCompare.new[0];
    const diff = moment().diff(moment(createdAt, 'YYYY-MM-DD'), 'days');
    if(diff < 0) {
      alert('Start date cannot later than today');
    } else {
      this.modalConfirmUpdate.show();
    }
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
  update(){
    let req = this._helperService.cloneArray(this.objectCompare.new);
    req.forEach(e=>{
      e.createdAt =this.userTimeZone?this._helperService.convertTimeToUTCByTimeZone(e.createdAt,this.userTimeZone):this._helperService.convertTimeToUTC(e.createdAt)
    })
    this._helperService.toggleLoading(true);
    this._api.updateRoundDetails(req).subscribe((res:any)=>{
      this._helperService.toggleLoading(false);
      if(res.status == 'success'){
        this.onUpdateSuccess.emit('');
      }else{  
        alert(res.message)
      }
    });
    console.log(this.objectCompare)
  }
}
