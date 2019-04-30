import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coach-info',
  templateUrl: './coach-info.component.html',
  styleUrls: ['./coach-info.component.scss']
})
export class CoachInfoComponent implements OnInit {
  showCoachDetail = true;
  idMentor:any;
  currentTab ='RoundDetail'
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((res: any) => {
      this.idMentor = res.id;
    });
   }

  ngOnInit() {
  }

}
