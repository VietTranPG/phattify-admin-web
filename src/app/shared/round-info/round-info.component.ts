import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormGroupName } from '@angular/forms';
import { HelperService } from '../../services/helper-service/helper.service';
import * as moment from 'moment';
import * as _ from "lodash";
@Component({
  selector: 'round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.scss']
})
export class RoundInfoComponent implements OnInit {
  @Input() UserId: any;
  @ViewChild('modalChangeRoundInfo') modalChangeRoundInfo: any;
  rounds: any = [];
  currentRound: any;
  measurements: any = [];
  userTimeZone: any;
  roundInfoForm: FormGroup;
  roundInfo: any;
  stages: any = [];
  constructor(private _api: ApiService, private fb: FormBuilder, private _helper: HelperService) { }
  ngOnInit() {
    this.roundInfo = {
      StartDate: null,
      EndDate: null,
      StartWeight: 0,
      TargetWeight: 0
    }
    this.initForm(this.roundInfo)
  }
  ngOnChanges() {
    this.getRoundData(this.UserId);
  }
  getRoundData(userId) {
    this._api.getRoundAndMeansurementByUserId(userId).subscribe((res: any) => {
      if (res.status == 'success') {
        this.rounds = res.data.rounds;
        this.measurements = res.data.measurements;
        this.userTimeZone = res.data.timeZone;

        this.rounds.forEach(roundInfo => {
          if (this.userTimeZone) {
            roundInfo.StartDate = this._helper.convertTimeToLocalByTimeZone(roundInfo.StartDate, this.userTimeZone);
            roundInfo.EndDate = this._helper.convertTimeToLocalByTimeZone(roundInfo.EndDate, this.userTimeZone)
          } else {
            roundInfo.StartDate = this._helper.convertTimeToLocal(roundInfo.StartDate);
            roundInfo.EndDate = this._helper.convertTimeToLocal(roundInfo.EndDate)
          }
        });
      }
    })
  }
  updateSuccess() {
    this.getRoundData(this.UserId);
  }
  initForm(roundInfo, stages?) {
    this.roundInfoForm = this.fb.group({
      StartDate: [roundInfo.StartDate],
      EndDate: [roundInfo.EndDate],
      StartWeight: [roundInfo.StartWeight, Validators.required],
      TargetWeight: [roundInfo.TargetWeight, Validators.required],
      Stages: new FormArray([]),
    })
    if (stages) {
      console.log(stages)
      for (let i = 0; i < stages.length; i++) {
        this.addStagesToForm(stages[i], i)
      }
    }
  }
  addStagesToForm(stageInput, index) {
    const stagesArr = this.roundInfoForm.controls['Stages'] as FormArray;
    let stage = this.fb.group({
      StartDate: [{ value: stageInput.StartDate, disabled: index != 0 }],
      EndDate: [{ value: stageInput.EndDate, disabled: index == 0 }],
      Id: [stageInput.Id]
    })
    stagesArr.push(stage)
  }
  editRoundInfo(r) {
    this.modalChangeRoundInfo.show();
    this.currentRound = r;
    this.initForm(r);
    this.getStages(r);
  }
  getStages(r) {
    this._api.getStagesByRoundId(r.RoundId).subscribe((res: any) => {
      if (res.status == 'success') {
        this.stages = res.data;
        this.setDateOfStages(r, res.data)
      }
    })
  }
  setDateOfStages(round, stages) {
    for (let i = 0; i < stages.length; i++) {
      if (i == 0) {
        stages[i].StartDate = round.StartDate;
        stages[i].EndDate = moment(stages[i].StartDate).add(stages[i].DayOfStages - 1, 'day').format('YYYY-MM-DD')
      } else {
        stages[i].StartDate = moment(stages[i - 1].EndDate).add(1, 'day').format('YYYY-MM-DD')
        stages[i].EndDate = moment(stages[i].StartDate).add(stages[i].DayOfStages - 1, 'day').format('YYYY-MM-DD')
      }
    }
    this.initForm(this.currentRound, stages);
    this.roundInfoForm.controls['Stages'].valueChanges.subscribe((newVal) => {
      let oldVal = this.roundInfoForm.value['Stages'];
      let diff = _.differenceWith(newVal, oldVal, _.isEqual)[0];
      if (newVal.length == this.stages.length) {
        this.HandleStagesChange(diff)
      }
    })
  }
  HandleStagesChange(diff) {
    let indexOfDiff = this.stages.findIndex(x => x.Id == diff.Id);
    if (indexOfDiff > -1) {
      let stageChanged = this.stages[indexOfDiff];

      if (stageChanged.StageNumber == 1) {
        let subDate = this._helper.subDate(diff.StartDate, stageChanged.StartDate);
        this.currentRound.EndDate = moment(this.currentRound.EndDate).add(subDate, 'day').format('YYYY-MM-DD')
        this.currentRound.StartDate = diff.StartDate;
      } else {
        let diffDatePickandStartStage = this._helper.subDate(diff.EndDate, stageChanged.StartDate);
        if (diffDatePickandStartStage < 0) {
          let mess = 'Please select the end date of stages later than the start date';
          alert(mess);
          this.setDateOfStages(this.currentRound, this.stages)
          return
        }
        let diffDateEndStage = this._helper.subDate(diff.EndDate, stageChanged.EndDate);
        this.stages[indexOfDiff].DayOfStages += diffDateEndStage;
        this.currentRound.EndDate = moment(this.currentRound.EndDate).add(diffDateEndStage, 'day').format('YYYY-MM-DD')
      }
      this.stages[indexOfDiff].StartDate = diff.StartDate;
      this.stages[indexOfDiff].EndDate = diff.EndDate;
      this.setDateOfStages(this.currentRound, this.stages)
    }
  }
  changeRoundInfo() {
    this._helper.toggleLoading(true);
    let request = {
      round: Object.assign(this.roundInfoForm.value),
      stages: this.stages
    }
    request.round.StartDate = this.userTimeZone ? this._helper.convertTimeToUTCByTimeZone(request.round.StartDate, this.userTimeZone) : this._helper.convertTimeToUTC(request.round.StartDate);
    request.round.EndDate = this.userTimeZone ? this._helper.convertTimeToUTCByTimeZone(request.round.EndDate, this.userTimeZone) : this._helper.convertTimeToUTC(request.round.EndDate)  
    request.round.Id = this.currentRound.RoundId;
    console.log(request, this.stages)
    this._api.updateRoundInfo(request).subscribe(res=>{
      this._helper.toggleLoading(false);
      this.modalChangeRoundInfo.hide();
    },err=>{
      this._helper.toggleLoading(false);
    })
  }
}