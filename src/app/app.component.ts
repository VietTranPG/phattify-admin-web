import { HelperService } from './services/helper-service/helper.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showloading: boolean = false;
  backgroundColor = 'rgba(255, 255, 255, 0.8)';
  constructor(private _helper:HelperService) {
    this._helper.loading.subscribe(res=>{
      this.showloading = res;
    })
  }

}
