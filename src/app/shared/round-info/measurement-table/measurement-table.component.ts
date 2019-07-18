import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormGroupName } from '@angular/forms';
import { HelperService } from '../../../services/helper-service/helper.service';
import * as _ from 'lodash';
import { ApiService } from '../../../services/api-service/api.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as moment from 'moment';

@Component({
  selector: 'measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class MeasurementTableComponent implements OnInit {
  @Input() measurements: any;
  @Input() userTimeZone: any;
  @Input() userId: any;
  @ViewChild('modalConfirmUpdate') modalConfirmUpdate: any;
  @ViewChild('modalConfirmDelete') modalConfirmDelete: any;
  @ViewChild('modalAddNew') modalAddNew: any;
  @Output() onUpdateSuccess = new EventEmitter;
  objectCompare: any;
  oldData: any;
  measureId: any;
  addForm: FormGroup;
  constructor(private _helperService: HelperService, private fb: FormBuilder, private _api: ApiService) { }
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
    this.initForm();
  }
  ngOnChanges() {
    this.measurements.forEach(e => {
      e.createdAt = this.userTimeZone ? this._helperService.convertTimeToLocalByTimeZone(e.createdAt, this.userTimeZone) : this._helperService.convertTimeToLocal(e.createdAt);
      e.Chest = Number(e.Chest);
      e.Hips = Number(e.Hips);
      e.LeftArm = Number(e.LeftArm);
      e.LeftThigh = Number(e.LeftThigh);
      e.RightArm = Number(e.RightArm);
      e.RightThigh = Number(e.RightThigh);
      e.Waist = Number(e.Waist);

    });
    this.oldData = this._helperService.cloneArray(this.measurements);
  }
  initForm() {
    this.addForm = this.fb.group({
      Chest: [0, [Validators.required, Validators.min(0)]],
      Waist: [0, [Validators.required, Validators.min(0)]],
      Hips: [0, [Validators.required, Validators.min(0)]],
      LeftArm: [0, [Validators.required, Validators.min(0)]],
      RightArm: [0, [Validators.required, Validators.min(0)]],
      LeftThigh: [0, [Validators.required, Validators.min(0)]],
      RightThigh: [0, [Validators.required, Validators.min(0)]]
    })
  }
  confirmDelete(index) {
    this.modalConfirmDelete.show();
    this.measureId = this.measurements[index].Id;
  }
  cancelRemove() {
    this.modalConfirmDelete.hide();
  }
  delete() {
    this._helperService.toggleLoading(true);
    this._api.deleteMeasurements(this.measureId).subscribe((res: any) => {
      this._helperService.toggleLoading(false);
      if (res.status == 'success') {
        this.modalConfirmDelete.hide();
        window.location.reload();
      } else {
        alert(res.message)
      }
    });
  }
  showAdd() {
    this.modalAddNew.show();
  }
  addMeasurement() {
    let obj: any = {};
    obj.measurement = this.addForm.value;
    obj.userId = this.userId;
    obj.date = moment.utc();
    this._helperService.toggleLoading(true);
    this._api.addMeasurement(obj).subscribe(res => {
      this.onUpdateSuccess.emit('');
      this.modalAddNew.hide();
      this._helperService.toggleLoading(false);
    }, err => {
      this._helperService.toggleLoading(false);
    })
    console.log(this.addForm);
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
    this.objectCompare = this.checkDiffArr(this.oldData, this.measurements);
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
  cancelUpdate() {
    this.modalConfirmUpdate.hide()
  }
  update() {
    let req = this._helperService.cloneArray(this.objectCompare.new);
    req.forEach(e => {
      e.createdAt = this.userTimeZone ? this._helperService.convertTimeToUTCByTimeZone(e.createdAt, this.userTimeZone) : this._helperService.convertTimeToUTC(e.createdAt)
    })
    this._helperService.toggleLoading(true);
    this._api.updateMeasurements(req).subscribe((res: any) => {
      this._helperService.toggleLoading(false);
      if (res.status == 'success') {
        this.modalConfirmUpdate.hide();
        this.onUpdateSuccess.emit('');
      } else {
        alert(res.message)
      }
    });
  }
}
