import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { HelperService } from '../../../services/helper-service/helper.service';
import * as _ from 'lodash';
import { ApiService } from '../../../services/api-service/api.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
@Component({
  selector: 'measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class MeasurementTableComponent implements OnInit {
  @Input() measurements:any;
  @Input() userTimeZone:any;
  @ViewChild('modalConfirmUpdate') modalConfirmUpdate:any;
  @Output() onUpdateSuccess = new EventEmitter;
  objectCompare:any;
  oldData:any;
  constructor(private _helperService:HelperService,private _api:ApiService) { }
  private maskNumber = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: null,
    requireDecimal: false,
    allowNegative: false,
    allowLeadingZeroes: false
  });
  ngOnInit() {
  }
  ngOnChanges() {
    this.measurements.forEach(e => {
      e.createdAt = this.userTimeZone ? this._helperService.convertTimeToLocalByTimeZone(e.createdAt, this.userTimeZone) : this._helperService.convertTimeToLocal(e.createdAt);
    });
    this.oldData = this._helperService.cloneArray(this.measurements);
  }
  showEdit(index) {
    if (typeof (index) == 'number') {
      this.measurements[index].enable = true;
    } 
  }
  closeEdit(index) {
    if (typeof (index) == 'number') {
      this.measurements[index].enable = false;
    }
    this.measurements = this._helperService.cloneArray(this.oldData);
  }

  edit() {
    this.objectCompare=this.checkDiffArr(this.oldData, this.measurements);
    this.modalConfirmUpdate.show();
  }
  checkDiffArr(arrOld, arr) {
    let arrNew = arr.map(function (obj) {
      delete obj.enable;
      return obj
    });
    let diffArr = _.differenceWith(arrNew, arrOld, _.isEqual);
    let oldDiff = arrOld.filter(e => _.some(diffArr, { 'Id': e.Id }))
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
    this._api.updateMeasurements(req).subscribe((res:any)=>{
      this._helperService.toggleLoading(false);
      if(res.status == 'success'){
        this.modalConfirmUpdate.hide();
        this.onUpdateSuccess.emit('');
      }else{  
        alert(res.message)
      }
    });
  }
}
