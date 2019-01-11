import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidateExtendService } from '../../services/validate-service/validate-extend.service';
import { STATUS } from '../../constants/config';
@Component({
  selector: 'email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {
  public editor;
  public editorContent;
  sendMailForm: any;
  fileName: any;
  isMinimize: boolean = false;
  content: any;
  file: any;
  tempEmail: string;
  checkmail: boolean = false;
  @Output() closeSendMail: EventEmitter<any> = new EventEmitter();
  @Input() listMail: any = [];
  @Output() deleteMail: EventEmitter<any> = new EventEmitter();
  @ViewChild('toast')
  toast: any;
  public editorConfig = {
    placeholder: 'Put your things hear'
  };
  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.sendMailForm = this.formBuilder.group({
      email: [''],
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
      "email": this.listMail.length > 0 ? this.listMail : [],
      "subject": this.sendMailForm.value.subject,
      "content": this.content,
      "attachments": this.file ? [{
        "filename": this.fileName,
        "content": this.file,
        "encoding": "base64"
      }] : []
    }

    if (this.tempEmail && this.listMail.indexOf(this.tempEmail) == -1) {
      req.email.push(this.tempEmail);
    }
    if (this.content) {
      if (req.email.length > 0) {
        if (this.ValidateEmail(this.sendMailForm.value.email) || this.sendMailForm.value.email === "") {
          this._api.sendMail(req).then((res: any) => {
            if (res.status == STATUS.success) {
              this.closeForm("Successfully");
            }
          })
        } else {
          if (!this.ValidateEmail(this.sendMailForm.value.email) && this.sendMailForm.value.email !== "" ) {
            let mess = `The "${this.sendMailForm.value.email}" address cannot be recognized in the "To" field. Make sure all addresses are formatted correctly.`
            alert(mess);
          }
        }
      } else {
        if(this.ValidateEmail(this.sendMailForm.value.email)){
          this._api.sendMail(req).then((res: any) => {
            if (res.status == STATUS.success) {
              this.closeForm("Successfully");
            }
          })
        } else { 
          let mess = `The "${this.sendMailForm.value.email}" address cannot be recognized in the "To" field. Make sure all addresses are formatted correctly.`
          alert(mess);   
        }
      }
    } else { 
      alert("Content is required");
    }

  }
  ValidateEmail(str: string) {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(str)) {
      return false;
    }
    return true;
  }
  sendMailToChip(event) {
    if (event.keyCode == 32) {
      if (this.ValidateEmail(event.target.value)) {
        this.tempEmail = event.target.value;
        this.listMail.push(this.tempEmail);
        this.sendMailForm.patchValue({
          email: ''
        })
        this.checkmail = true;
      } else {
        this.checkmail = false;
      }
    }
    if (this.ValidateEmail(event.target.value)) {
      this.tempEmail = event.target.value;
      this.checkmail = true;
    }
  }
  closeForm(mess?: string) {
    this.listMail = [];
    this.closeSendMail.emit(mess);
  }

  getEmail(val) {
    for (let i = 0; i < this.listMail.length; i++) {
      if (this.listMail[i] === val) {
        this.listMail.splice(i, 1);
      }
    }
    this.deleteMail.emit(val);
  }
}
