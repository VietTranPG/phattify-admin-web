interface configModel {
  Id: string;
  ContactMentorPage: string;
  MonthlySubscriptionPage: string;
  RegisterAsMentorPage: string;
  SpecialOfferPage: string;
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from '../../services/helper-service/helper.service';

@Component({
  selector: 'configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {
  editorValue: any;
  configs: configModel = {} as configModel;
  public editorConfig = {
    placeholder: 'Put your things hear'
  };
  @ViewChild('modalEditor')
  modalEditor: any;
  typeEdit: any;
  quill: any;
  constructor(
    private _api: ApiService,
    private _helper: HelperService) {

  }
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this._helper.toggleLoading(true);
    this._api.getAppConfig().subscribe(res => {
      this.configs = res['data'] as configModel;
      this._helper.toggleLoading(false);
    }, err => {
      this._helper.toggleLoading(false)
    })
  }

  onEditorCreated(quill) {
   
  }

  onContentChanged({ quill, html, text }) {
   

  }
  openEditModal(type) {
    this.modalEditor.show();
    this.typeEdit = type;
    this.quill = this.configs[type];
  }
  edit() {
    this._helper.toggleLoading(true);
    let req = { type: this.typeEdit, content: this.quill };
    this._api.updateAppConfig(req).subscribe(res => {
      this._helper.toggleLoading(false);
      this.modalEditor.hide();
      if (res['status'] == 'error') {
        alert(res['message'])
      } else {
        this.getConfig();
      }
    }, err => {
      this._helper.toggleLoading(false);
    })
  }
}
