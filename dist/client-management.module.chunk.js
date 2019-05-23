webpackJsonp(["client-management.module"],{

/***/ "./src/app/date-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date, args) {
        var dateData = new Date(date);
        return __WEBPACK_IMPORTED_MODULE_1_moment__(dateData).format('DD/MM/YYYY');
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}());



/***/ }),

/***/ "./src/app/page/client-management/client-management.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col col-right\">\r\n\r\n  </div>\r\n</div> -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <!-- <span class=\"code-header\">Example of <code>horizontal</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span> -->\r\n      <div class=\"\">\r\n        <form class=\"headerTable\" (submit)=\"searchTable()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <input type=\"text\" name=\"searchInput\" [(ngModel)]=\"searchInput\" class=\"form-control\" placeholder=\"Name or email\" (keydown)=\"keyDownFunction($event)\">\r\n            </div>\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <ng-select class=\"select-custom\" [options]=\"listMentor\" [(ngModel)]=\"mentor\" name=\"mentor\" placeholder=\"Select Mentor\">\r\n\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <select [(ngModel)]=\"status\" class=\"form-control\" name=\"status\">\r\n                <option value=\"\">All</option>\r\n                <option value=\"active\">Active</option>\r\n                <option value=\"deactive\">Inactivate</option>\r\n                <option value=\"pending\">Invite pending</option>\r\n                <option value=\"connected\">Connected</option>\r\n                <option value=\"not-connected\">Not Connected</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-sm-12  col-lg-screen col-button-custom\">\r\n              <button type=\"button\" class=\"btn btn-warning btn-header\" (click)=\"searchTable()\">Search</button>\r\n              <button type=\"button\" class=\"btn btn-header\" (click)=\"showAll()\">Show All</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <button type=\"button\" class=\"btn btn-danger margin-button\" (click)=\"showSendMailForm()\">Compose</button>\r\n        <button class=\"btn btn-warning col-right\" (click)=\"showAddClient()\">Add</button>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-framed table-wrap-text\">\r\n          <thead>\r\n            <tr>\r\n              <th>\r\n                <input [(ngModel)]=\"selectAll\" type=\"checkbox\" (change)=\"changeAll(selectAll)\">\r\n              </th>\r\n              <th>#</th>\r\n              <th (click)=\"sortTable('FirstName')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-down\"></i>\r\n                First Name\r\n              </th>\r\n              <th (click)=\"sortTable('SurName')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='SurName'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='SurName'\" class=\"icofont icofont-caret-down\"></i>\r\n                Last Name\r\n              </th>\r\n              <th (click)=\"sortTable('Email')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='Email'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Email'\" class=\"icofont icofont-caret-down\"></i>\r\n                Email\r\n              </th>\r\n              <th (click)=\"sortTable('Type')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='Type'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Type'\" class=\"icofont icofont-caret-down\"></i>\r\n                Type</th>\r\n              <th (click)=\"sortTable('Status')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='Status'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Status'\" class=\"icofont icofont-caret-down\"></i>\r\n                Status</th>\r\n              <th (click)=\"sortTable('MentorEmail')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='MentorEmail'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='MentorEmail'\" class=\"icofont icofont-caret-down\"></i>\r\n                Assigned Mentor</th>\r\n              <!-- <th>Invited Code</th> -->\r\n              <th (click)=\"sortTable('createdAt')\">\r\n                <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-down\"></i>\r\n                Date Joined</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let client of listClient; let i = index\" class=\"client\">\r\n              <td>\r\n                <input type=\"checkbox\" (change)=\"changeOne()\" [(ngModel)]=\"client.checked\">\r\n              </td>\r\n              <td (click)=\"goToClientInfo(client.Id)\" class=\"cursor\">\r\n                {{i+1}}\r\n              </td>\r\n              <td class=\"cursor\" (click)=\"goToClientInfo(client.Id)\">\r\n                {{client.FirstName}}\r\n              </td>\r\n              <td class=\"cursor\" (click)=\"goToClientInfo(client.Id)\">\r\n                {{client.SurName}}\r\n              </td>\r\n              <td>\r\n                {{client.Email}}\r\n              </td>\r\n              <td>\r\n                {{client.Type}}\r\n              </td>\r\n              <td style=\"text-transform: capitalize\">\r\n                {{client.Status == 'deactive'?'inactivate':client.Status}}\r\n              </td>\r\n              <td>\r\n                {{client.MentorEmail}}\r\n              </td>\r\n              <!-- <td>\r\n                <div *ngIf=\"client.Type=='Invite'\">\r\n                  {{client.VerifyCode}}\r\n                </div>\r\n              </td> -->\r\n              <td>\r\n                {{client.createdAt | dateFormat}}\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-danger btn-custom\" (click)=\"confirmDelete(client)\"> <i class=\"icofont icofont-bin\"></i></button>\r\n                <!-- <button *ngIf=\"client.Type=='Invite'\" class=\"btn btn-warning btn-custom\" (click)=\"resendCode(client.Id)\"><i\r\n                    class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\r\n                </button> -->\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      </div>\r\n      <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"totalItem\" [pageSize]=\"limit\" [(page)]=\"page\"\r\n        [maxSize]=\"5\" [boundaryLinks]=\"true\" (pageChange)=\"onChangePage($event)\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"email-compose\" *ngIf=\"showSendMail\">\r\n  <email-compose [listMail]=\"listMail\" (closeSendMail)=\"closeSendForm($event)\" [isMinimize]=\"isMinimize\" (deleteMail)=\"deleteMail($event)\"></email-compose>\r\n</div>\r\n<!-- modal static-->\r\n<!-- <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDefault.show()\">Static</button> -->\r\n<app-modal-basic #modalDelete>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalDelete.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <p>{{deleteFlag?.Email}}</p>\r\n    <p>All data of this client will be deleted. Are you sure you want to delete this client?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDelete.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"delete()\">Delete</button>\r\n  </div>\r\n</app-modal-basic>\r\n<!-- modal add mentee-->\r\n<app-modal-basic #modalAddMentee>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Add client</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\" closeFormAddMentee()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <div class=\"container form-add-client\">\r\n      <form class=\"form\" [formGroup]=\"addClientForm\">\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">First name:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.firstName.touched && !addClientForm.controls.firstName.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Surname:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Surname\" formControlName=\"surName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.surName.touched && !addClientForm.controls.surName.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\">Gender:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"form-radio\">\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"male\" checked=\"checked\" formControlName=\"gender\">\r\n                  <i class=\"helper\"></i>Male\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"female\" formControlName=\"gender\">\r\n                  <i class=\"helper\"></i>Female\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"messages text-danger\" *ngIf=\"addClientForm.controls.gender.errors?.required && addClientForm.controls.gender.touched\">Member\r\n              can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Email:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc@gmail.com\" formControlName=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.hasError('email', 'email') && addClientForm.get('email').touched\">\r\n              Email is invalid.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Confirm email:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc@gmail.com\" formControlName=\"confirmEmail\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmEmail.touched && !addClientForm.controls.confirmEmail.valid\" class=\"error-text\">\r\n              {{ 'Confirm email is required' }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <p *ngIf=\"addClientForm.controls.confirmEmail.touched && addClientForm.errors?.mismatchedEmail && addClientForm.controls.confirmEmail.valid \"\r\n              class=\"error-text\">\r\n              {{ \"Email doesn't match\" }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Password:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.password.touched && !addClientForm.controls.password.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Confirm password:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmPassword.valid && addClientForm.errors?.mismatchedPassword\" class=\"error-text\">\r\n              Passwords don't match\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmPassword.touched && !addClientForm.controls.confirmPassword.valid\"\r\n              class=\"error-text\">\r\n              Confirm password is required\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Date of Birth:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"date\" class=\"form-control\" placeholder=\"2/2/1998\" formControlName=\"dateOfBirth\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Contact number:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" [textMask]=\"{mask: mask,guide:false}\" placeholder=\"123456789\"\r\n                formControlName=\"contactNumber\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Country:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control custom-select\" formControlName=\"countryId\">\r\n                <option value=\"\">Country</option>\r\n                <option *ngFor=\"let countries of countries\" [value]=\"countries.Id\">{{countries.Name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.countryId?.invalid && addClientForm.controls.countryId?.touched\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">City / Town:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"New York\" formControlName=\"city\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.city?.invalid && addClientForm.controls.city?.touched\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Notes:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc\" formControlName=\"note\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default ripple\" (click)=\" closeFormAddMentee()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"addNewMentee()\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-modal-basic>\r\n<toast #toast></toast>"

/***/ }),

/***/ "./src/app/page/client-management/client-management.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  height: 31px; }\n\n.client .cursor {\n  cursor: pointer; }\n\n.form-control {\n  height: 32px;\n  margin: 10px 0;\n  border: 1px solid #cccccc; }\n\n.form-control:hover {\n    border: 1px solid #cccccc; }\n\n@media screen and (min-width: 992px) {\n    .form-control {\n      margin: 0; } }\n\nselect.form-control {\n  margin-left: 0; }\n\n.col-lg-screen {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n@media screen and (min-width: 1231px) {\n    .col-lg-screen {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%;\n      max-width: 25%;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n\n.col-lg-screen button {\n    margin-left: 10px; }\n\n@media screen and (max-width: 1231px) {\n  .col-button-custom {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    margin: 15px 0 10px;\n    text-align: right; } }\n\n.col-md-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nbutton.btn-header {\n  min-width: 100px; }\n\n.margin-button {\n  margin-left: 5px;\n  margin-top: 5px;\n  margin-bottom: 15px; }\n\n.btn-custom {\n  padding: 5px;\n  margin: 5px; }\n\n.btn-custom i {\n    margin: 0; }\n\ntable.table-wrap-text td {\n  white-space: normal; }\n\n.error-text {\n  color: red; }\n\n.email-compose {\n  max-width: 600px;\n  position: fixed;\n  right: 5px;\n  bottom: 0; }\n\n.col-right {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  float: right; }\n\n.app-modal-footer {\n  width: 100%;\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.app-modal-footer button {\n    min-width: 100px;\n    margin: 0 5px; }\n\n.form-add-client {\n  overflow-y: auto;\n  max-height: 600px; }\n"

/***/ }),

/***/ "./src/app/page/client-management/client-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_config__ = __webpack_require__("./src/app/constants/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__ = __webpack_require__("./src/app/services/validate-service/validate-extend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientManagementComponent = /** @class */ (function () {
    function ClientManagementComponent(_api, _helper, router, formBuilder) {
        this._api = _api;
        this._helper = _helper;
        this.router = router;
        this.formBuilder = formBuilder;
        this.page = 1;
        this.searchInput = '';
        this.selectInput = '';
        this.selectSort = '';
        this.selectActiveUser = 'Active';
        this.typeOrder = '';
        this.status = '';
        this.type = '';
        this.numPages = 10;
        this.totalItem = 0;
        this.limit = 20;
        this.listMentor = [];
        this.mentor = '';
        this.tbAll = false;
        this.showSendMail = false;
        this.listMail = [];
        this.countries = [];
        this.listGender = [
            {
                name: 'Male',
                value: __WEBPACK_IMPORTED_MODULE_3__constants_config__["b" /* GENDER */].Male
            },
            {
                name: 'Female',
                value: __WEBPACK_IMPORTED_MODULE_3__constants_config__["b" /* GENDER */].Female
            }
        ];
        this.mask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
    }
    ClientManagementComponent.prototype.ngOnInit = function () {
        this.getListClient();
        this.getListMentor();
        this.InitFormAddClient();
        // this.listMentor = [
        //   { value: '0', label: 'Alabama' },
        //   { value: '1', label: 'Wyoming' },
        //   { value: '2', label: 'Coming' },
        //   { value: '3', label: 'Henry Die' },
        //   { value: '4', label: 'John Doe' }
        // ];
    };
    ClientManagementComponent.prototype.InitFormAddClient = function () {
        this.addClientForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            surName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].email]],
            confirmEmail: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            dateOfBirth: [],
            contactNumber: [''],
            note: [''],
            city: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            countryId: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]
        }, {
            validator: [
                __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingEmail('email', 'confirmEmail'),
                __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingPassword('password', 'confirmPassword')
            ]
        });
    };
    ClientManagementComponent.prototype.onChangePage = function (event) {
        this.selectAll = false;
        this.getListClient();
    };
    ClientManagementComponent.prototype.getListClient = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        var data = {
            search: this.searchInput,
            page: this.page,
            limit: this.limit,
            status: this.status,
            orderBy: this.selectSort,
            orderType: this.typeOrder,
            mentor: this.mentor,
            checked: false
        };
        this._api.management(data).then(function (res) {
            _this._helper.toggleLoading(false);
            _this.listClient = res['data']['clients'];
            _this.totalItem = res['data']['totalItem'];
        }).catch(function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    ClientManagementComponent.prototype.showAll = function () {
        this.searchInput = '';
        this.page = 1;
        this.type = '';
        this.status = '';
        this.mentor = '';
        this.getListClient();
    };
    ClientManagementComponent.prototype.searchTable = function () {
        this.page = 1;
        this.getListClient();
    };
    ClientManagementComponent.prototype.sortTable = function (data) {
        this.selectSort = data;
        if (this.typeOrderBoolean == false || '') {
            this.typeOrder = "desc";
            this.typeOrderBoolean = true;
        }
        else {
            this.typeOrder = "asc";
            this.typeOrderBoolean = false;
        }
        this.getListClient();
    };
    ClientManagementComponent.prototype.resendCode = function (idClient) {
        var _this = this;
        var apiResendCode = {
            IdClient: idClient,
            IdMentor: idClient
        };
        this._api.resendCode(apiResendCode).then(function (res) {
            _this.getListClient();
        }).catch(function (err) {
            console.log(err);
        });
    };
    ClientManagementComponent.prototype.getListMentor = function () {
        var _this = this;
        this._api.getListMentor().then(function (res) {
            _this.listMentor = res['data'];
        }).catch(function (err) {
        });
    };
    ClientManagementComponent.prototype.confirmDelete = function (client) {
        this.deleteFlag = client;
        this.modalDelete.show();
    };
    ClientManagementComponent.prototype.delete = function () {
        var _this = this;
        this.modalDelete.hide();
        this._helper.toggleLoading(true);
        this._api.deleteMentee(this.deleteFlag.Id).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status == __WEBPACK_IMPORTED_MODULE_3__constants_config__["d" /* STATUS */].error) {
                _this.toast.addToast({
                    title: 'Message',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.getListClient();
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Delete Client Success',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
            }
        }).catch(function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    ClientManagementComponent.prototype.changeAll = function (value) {
        this.listMail = [];
        if (this.listClient) {
            if (value !== undefined) {
                for (var index = 0; index < this.listClient.length; index++) {
                    this.listClient[index].checked = value;
                    if (this.listClient[index].checked == true) {
                        this.listMail.push(this.listClient[index].Email);
                    }
                }
            }
        }
    };
    ClientManagementComponent.prototype.changeOne = function () {
        // let count = 0;
        // if (this.listClient) {
        //   for(let i = 0; i < this.listClient.length;i++){ 
        //     if(this.listClient[i].checked === true)
        //     count++;
        //   }
        //   this.selectAll = (count === this.listClient.length || count === this.limit)  ? true : false;
        // }
        var count = 0;
        if (this.listClient) {
            for (var i = 0; i < this.listClient.length; i++) {
                if (this.listClient[i].checked === true) {
                    count++;
                    if (this.listMail.indexOf(this.listClient[i].Email) == -1) {
                        this.listMail.push(this.listClient[i].Email);
                    }
                }
                else {
                    if (this.listMail.indexOf(this.listClient[i].Email) != -1) {
                        this.listMail.splice(this.listMail.indexOf(this.listClient[i].Email), 1);
                    }
                }
            }
            this.selectAll = (count === this.listMentor.length || count === this.limit) ? true : false;
        }
    };
    ClientManagementComponent.prototype.goToClientInfo = function (id) {
        this.router.navigate(['client-info', id]);
    };
    ClientManagementComponent.prototype.addNewMentee = function () {
        var _this = this;
        this.markFormGroupTouched(this.addClientForm);
        if (this.addClientForm.invalid) {
            return;
        }
        var data = {
            firstName: this.addClientForm.value.firstName,
            surName: this.addClientForm.value.surName,
            gender: this.addClientForm.value.gender == 'male' ? __WEBPACK_IMPORTED_MODULE_3__constants_config__["b" /* GENDER */].Male : __WEBPACK_IMPORTED_MODULE_3__constants_config__["b" /* GENDER */].Female,
            email: this.addClientForm.value.email,
            dateOfBirth: this.addClientForm.value.dateOfBirth,
            contactNumber: this.addClientForm.value.contactNumber,
            note: this.addClientForm.value.note,
            password: this.addClientForm.value.password,
            countryId: this.addClientForm.value.countryId,
            city: this.addClientForm.value.city
        };
        this._api.adminAddClient(data).then(function (res) {
            if (res.status == 'error') {
                _this.toast.addToast({
                    title: 'Message',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.toast.addToast({
                    title: 'Message',
                    msg: "Successfully",
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                _this.addClientForm.reset();
                _this.modalAddMentee.hide();
                _this.getListClient();
            }
        });
    };
    ClientManagementComponent.prototype.closeSendForm = function (val) {
        this.showSendMail = false;
        if (val === "Successfully") {
            this.toast.addToast({
                title: 'Message',
                msg: val,
                timeout: 5000,
                theme: 'material',
                position: 'top-right',
                type: 'success'
            });
        }
        this.listMail = [];
        for (var i = 0; i < this.listClient.length; i++) {
            this.listClient[i].checked = false;
        }
        this.selectAll = false;
    };
    ClientManagementComponent.prototype.deleteMail = function (val) {
        this.listMail.splice(this.listMail.indexOf(val), 0);
        for (var i = 0; i < this.listClient.length; i++) {
            if (this.listClient[i].Email == val) {
                this.listClient[i].checked = false;
            }
        }
    };
    ClientManagementComponent.prototype.showSendMailForm = function () {
        this.showSendMail = true;
        this.isMinimize = !this.isMinimize;
    };
    ClientManagementComponent.prototype.showAddClient = function () {
        var _this = this;
        this._api.getCountries().subscribe(function (res) {
            var resultCountry = res['data'];
            _this.countries = _this.sortBy(resultCountry, 'Name', false);
            _this.addClientForm.patchValue({
                gender: 'male'
            });
            _this.modalAddMentee.show();
        });
    };
    ClientManagementComponent.prototype.sortBy = function (list, property, reverse) {
        if (!reverse) {
            return list.sort(function (a, b) {
                if (a[property] < b[property])
                    return -1;
                if (a[property] > b[property])
                    return 1;
                return 0;
            });
        }
        else {
            return list.sort(function (a, b) {
                if (a[property] < b[property])
                    return 1;
                if (a[property] > b[property])
                    return -1;
                return 0;
            });
        }
    };
    ClientManagementComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.getListClient();
        }
    };
    ClientManagementComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ClientManagementComponent.prototype.closeFormAddMentee = function () {
        this.addClientForm.reset();
        this.modalAddMentee.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDelete'),
        __metadata("design:type", Object)
    ], ClientManagementComponent.prototype, "modalDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toast'),
        __metadata("design:type", Object)
    ], ClientManagementComponent.prototype, "toast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddMentee'),
        __metadata("design:type", Object)
    ], ClientManagementComponent.prototype, "modalAddMentee", void 0);
    ClientManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-management',
            template: __webpack_require__("./src/app/page/client-management/client-management.component.html"),
            styles: [__webpack_require__("./src/app/page/client-management/client-management.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], ClientManagementComponent);
    return ClientManagementComponent;
}());



/***/ }),

/***/ "./src/app/page/client-management/client-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManagementModule", function() { return ClientManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_format_pipe__ = __webpack_require__("./src/app/date-format.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_management_component__ = __webpack_require__("./src/app/page/client-management/client-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_select__ = __webpack_require__("./node_modules/ng-select/fesm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__client_management_component__["a" /* ClientManagementComponent */] }
];
var ClientManagementModule = /** @class */ (function () {
    function ClientManagementModule() {
    }
    ClientManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_8_ng_select__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__client_management_component__["a" /* ClientManagementComponent */], __WEBPACK_IMPORTED_MODULE_0__date_format_pipe__["a" /* DateFormatPipe */],]
        })
    ], ClientManagementModule);
    return ClientManagementModule;
}());



/***/ })

});
//# sourceMappingURL=client-management.module.chunk.js.map