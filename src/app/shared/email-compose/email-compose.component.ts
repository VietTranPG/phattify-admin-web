import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {
  public editor;
  public editorContent;
  sendMailForm: any;
  fileName:any;
  isMinimize: boolean = false;
  content:any;
  file:any;
  @Output() closeSendMail: EventEmitter<any> = new EventEmitter();
  @Input() listMail: any;
  public editorConfig = {
    placeholder: 'Put your things hear'
  };
  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.listMail);
    this.initForm();
  }
  initForm() {
    this.sendMailForm = this.formBuilder.group({
      email: ['',Validators.email],
      emailCc: [''],
      subject: [''],
      editorContent: [],
      file: []

    })
  }
  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', html);
    this.content = html;
    
  }
  minimize() {

  }
  changeListener($event): void {
    let file = $event.target.files[0];
    this.fileName = file.name;
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.file = myReader.result as any;
      console.log(this.file);
      this.file = this.file.split(',')[1]
      
      
      // let a = this.file.split(',');
      // console.log(a);
    }
    myReader.readAsDataURL(file);
  }
  sendMail() {
    let req =
    {
      "email": [this.sendMailForm.value.email],
      "subject": this.sendMailForm.value.subject,
      "content": this.content,
      "attachments": [{
        "filename": this.fileName,
        "content": this.file,
        "encoding": "base64"
      }]
    }
    this._api.sendMail(req).then(res => { 
      console.log(req);      
      console.log(res);
    })
  }
  closeForm(){
    this.closeSendMail.emit();
  }
}
