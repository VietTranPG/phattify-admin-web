import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.scss']
})
export class RoundInfoComponent implements OnInit {
  @Input() UserId:any;
  rounds:any = [];
  measurements:AnalyserNode;
  userTimeZone:any;
  changePasswordForm: FormGroup;
  constructor(private _api:ApiService,private fb : FormBuilder) { }
  ngOnInit() {
   
  }
  ngOnChanges(){
    this.getRoundData(this.UserId);
  }
  getRoundData(userId){
    this._api.getRoundAndMeansurementByUserId(userId).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        this.rounds = res.data.rounds;
        this.measurements = res.data.measurements;
        this.userTimeZone = res.data.timeZone;
      }
      
    })
  }
  updateSuccess(){
    this.getRoundData(this.UserId);
  }
  initForm(round){
    this.changePasswordForm = this.fb.group({
      StartDate:[round.StartDate,Validators.required],
      EndDate:[round.EndDate,Validators.required],
      StartWeight:[round.StartWeight,Validators.required],
      TargetWeight:[round.TargetWeight,Validators.required]
    })
  }
}
