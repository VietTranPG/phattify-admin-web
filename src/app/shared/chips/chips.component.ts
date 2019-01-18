import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() email: any;
  @Output() deletemail: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteEmail(email){
    this.deletemail.emit(email);
  }
}
