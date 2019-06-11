webpackJsonp(["client-info.module"],{

/***/ "./src/app/page/client-info/client-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card--coach-management\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\" col-flex\">\r\n        <div [class]=\"showClientDetail?'col-detail col-active':'col-detail'\" (click)=\"showClientDetail = true\">\r\n          <h5>Client Detail</h5>\r\n        </div>\r\n        <div [class]=\"!showClientDetail?'col-detail col-active':'col-detail'\" (click)=\"showClientDetail = false\">\r\n          <h5>Round Detail</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" *ngIf=\"showClientDetail\">\r\n      <div class=\"card card--form card--user-info\">\r\n        <div class=\"container\">\r\n          <div class=\"heading-custom\">User Detail</div>\r\n          <form class=\"form\" [formGroup]=\"clientInfoForm\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <input class=\"form-control\" placeholder=\"First Name\" formControlName=\"FirstName\" />\r\n                    <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.FirstName.valid\">This\r\n                      field is required</p>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <input class=\"form-control\" placeholder=\"Last Name\" formControlName=\"SurName\" />\r\n                    <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.SurName.valid\">This\r\n                      field is required</p>\r\n                  </div>\r\n                </div>\r\n      \r\n      \r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label>Email</label>\r\n                    <input class=\"form-control\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\" formControlName=\"email\" required=\"true\"/>\r\n                    <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.email.valid\">Missing or wrong email format</p>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label>Contact number</label>\r\n                    <input class=\"form-control\" formControlName=\"ContactNumber\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\"><button class=\"btn btn-warning btn--form\" (click)=\"this.modalChangePassword.show()\">Change\r\n                      password</button></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label>Gender</label>\r\n                    <select class=\"form-control\" formControlName=\"Gender\">\r\n                      <option [ngValue]=\"false\">Male</option>\r\n                      <option [ngValue]=\"true\">Female</option>\r\n                    </select>\r\n                    <!-- <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.Gender.valid\">This\r\n                      field is required</p> -->\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label>Date of Birth</label>\r\n                    <input class=\"form-control\" type=\"date\" formControlName=\"DateOfBirth\" />\r\n                    <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.DateOfBirth.valid\">This\r\n                      field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label>Country</label>\r\n                    <select class=\"form-control\" type=\"text\" formControlName=\"CountryId\">\r\n                      <option *ngFor=\"let country of countries\" value=\"{{country?.Id}}\">{{country?.Name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label>City/Town</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"City\" />\r\n                  </div>\r\n                </div>\r\n                <label>Health List</label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-control--custom\">\r\n                      <ul class=\"list-group list-group-flush\" *ngFor=\"let healthList of healthList; let i = index\">\r\n                        <li class=\"list-group-item disabled\">{{healthList.Name}}</li>\r\n                      </ul>\r\n                      <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item disabled\" *ngIf=\"clientInfo.OtherIllnesses\">OtherIllnesses:\r\n                          {{clientInfo.OtherIllnesses}}</li>\r\n                        <li class=\"list-group-item disabled\" *ngIf=\"clientInfo.Allergies\">Allergies: {{clientInfo.Allergies}}</li>\r\n                        <li class=\"list-group-item disabled\" *ngIf=\"clientInfo.HealthMedication\">HealthMedication:\r\n                          {{clientInfo.HealthMedication}}</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <label>Status</label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <select formControlName=\"Status\" class=\"form-control\">\r\n                      <option value=\"active\">Active</option>\r\n                      <option value=\"deactive\">Inactivate</option>\r\n                      <option value=\"pending\">Invite pending</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <!-- <button [class]=\"checkResendCode?'btn btn-secondary btn--form':'btn btn-warning btn--form'\" [disabled]=\"checkResendCode\"\r\n                      (click)=\"resendCode()\">Resend</button> -->\r\n                  </div>\r\n                </div>\r\n                <label>Mentor</label>\r\n      \r\n                <div class=\"row\" *ngIf=\"!clientInfo.MentorEmail\">\r\n                  <div class=\"col-md-6\">\r\n                    <ng-select class=\"select-custom\" [options]=\"listMentor\" formControlName=\"mentor\" placeholder=\"select Mentor\"></ng-select>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <button class=\"btn btn-warning btn--form\" (click)='showModalAssign()'>Assign</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"clientInfo.MentorEmail\">\r\n                  <div class=\"col-md-6\">\r\n                    <input class=\"form-control\" formControlName=\"mentor\" disabled />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\" [hidden]=\"!clientInfo.RoundId\">\r\n                <div class=\"row row--center\">\r\n                  <div class=\"title\">Current Round information</div>\r\n                  <button class=\"btn btn-warning btn--form\" (click)=\"confirmDelete('wipeData')\">Wipe Data</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label>Start Date</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <input class=\"form-control\" disabled type=\"date\" formControlName=\"StartDate\" />\r\n                        <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.StartDate.valid\">This\r\n                          field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label>End Date</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <input disabled class=\"form-control\" type=\"date\" formControlName=\"EndDate\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label>Start Weight</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"0\" formControlName=\"StartWeight\" />\r\n                        <p class=\"error-text\" *ngIf=\"!clientInfoForm.controls.StartWeight.valid\">This\r\n                          field is required</p>\r\n                        <p class=\"error-text\" *ngIf=\"clientInfoForm.controls.StartWeight.valid && clientInfoForm.errors?.invalidStartWeight\">This\r\n                          field is invalid</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label>Current Weight</label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"0\" formControlName=\"CurrentWeight\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row row--flex-end\">\r\n              <!-- <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!clientInfoForm.valid\" (click)=\"editClientInfo()\">Save</button> -->\r\n              <button class=\"btn btn-success\" type=\"submit\" (click)=\"editClientInfo()\">Save</button>\r\n              <button class=\"btn btn-danger\" (click)='confirmDelete(\"delete\")'>Delete</button>\r\n              <button class=\"btn btn-danger\" (click)='confirmDelete(\"deleteFromMentor\")' *ngIf=\"this.clientInfo?.MentorId && clientInfo.Type!='Invite'\">Delete\r\n                From Mentor</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"!showClientDetail\">\r\n      <round-info [UserId]='idClient'></round-info>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- modal change password-->\r\n<app-modal-basic #modalChangePassword>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Change password</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalChangePassword.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <div class=\"container\">\r\n      <form class=\"form\" [formGroup]=\"changePasswordForm\">\r\n        <div class=\"row\">\r\n          <label class=\"col-md-4 col-form-label\">New password: </label>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\">\r\n            </div>\r\n            <p class=\"error-text\" *ngIf=\"changePasswordForm.controls.password.touched && !changePasswordForm.controls.password.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-4 col-form-label\">Confirm new password: </label>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n            </div>\r\n            <p *ngIf=\"changePasswordForm.controls.confirmPassword.valid && changePasswordForm.errors?.mismatchedPassword\"\r\n              class=\"error-text\">\r\n              Passwords don't match\r\n            </p>\r\n            <p *ngIf=\"changePasswordForm.controls.confirmPassword.touched && !changePasswordForm.controls.confirmPassword.valid\"\r\n              class=\"error-text\">\r\n              Confirm password is required\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalChangePassword.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"changePassword()\" [disabled]=\"changePasswordForm.invalid || changePasswordForm.hasError('mismatchedPassWord')\">Confirm</button>\r\n  </div>\r\n</app-modal-basic>\r\n<toast #toast></toast>\r\n<!-- modal delete-->\r\n<app-modal-basic #modalDelete>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"hideDelete()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\" *ngIf=\"checkShowDelete || checkDeleteFromMentor\">\r\n    <p>{{clientInfo?.Email}}</p>\r\n    <p>All data of this client will be deleted. Are you sure you want to delete this client?</p>\r\n  </div>\r\n  <div class=\"app-modal-body\" *ngIf=\"checkShowWipeData\">\r\n    <p>{{clientInfo?.Email}}</p>\r\n    <p>All data of this round will be deleted. Are you sure you want to delete this round?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"hideDelete()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" *ngIf=\"checkShowDelete\" (click)=\"delete()\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" *ngIf=\"checkShowWipeData\" (click)=\"deleteRound()\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" *ngIf=\"checkDeleteFromMentor\" (click)=\"deleteFromMentor()\">Delete</button>\r\n  </div>\r\n</app-modal-basic>\r\n<!-- modal assign mentor-->\r\n<app-modal-basic #modalAssign>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalAssign.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <p>{{clientInfo?.Email}}</p>\r\n    <p>Are you sure to assign mentee {{clientInfo?.Email}} to mentor {{mentorEmail?.label}} ?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalAssign.hide()\">Cancel </button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"assignMentor()\">Confirm</button>\r\n  </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "./src/app/page/client-info/client-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".card.card--form.card--user-info {\n  padding: 40px 0; }\n  .card.card--form.card--user-info .heading-custom {\n    margin-bottom: 15px;\n    font-size: 24px;\n    font-weight: 600; }\n  .card.card--form.card--user-info .title {\n    margin-right: 15px;\n    font-weight: 600; }\n  .card.card--form.card--user-info form .row {\n    margin-bottom: 15px; }\n  .card.card--form.card--user-info form .row.row--flex-end {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .card.card--form.card--user-info form .row.row--flex-end button {\n        margin: 0 5px; }\n  .card.card--form.card--user-info form .row.row--center {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .card.card--form.card--user-info form select.form-control {\n    border-top: 1px solid #cccccc;\n    border-right: 1px solid #cccccc;\n    border-left: 1px solid #cccccc; }\n  .card.card--form.card--user-info form .form-control {\n    margin-bottom: 10px; }\n  .card.card--form.card--user-info form .form-control.form-control--custom {\n      height: auto; }\n  .card.card--form.card--user-info form .btn {\n    min-width: 100px; }\n  .card.card--form.card--user-info form .btn.btn--form {\n      padding: 7px; }\n  .error-text {\n  color: red !important; }\n  .card--coach-management .col-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid rgba(204, 204, 204, 0.29); }\n  .card--coach-management .col-detail {\n  padding: 15px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n  border-right: 2px solid #fff; }\n  .card--coach-management .col-detail:hover {\n    background: rgba(204, 204, 204, 0.29); }\n  .card--coach-management .col-detail.col-active {\n    background: rgba(204, 204, 204, 0.29); }\n"

/***/ }),

/***/ "./src/app/page/client-info/client-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_config__ = __webpack_require__("./src/app/constants/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_validate_service_validate_extend_service__ = __webpack_require__("./src/app/services/validate-service/validate-extend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientInfoComponent = /** @class */ (function () {
    function ClientInfoComponent(router, _api, formBuilder, _helper, _router) {
        this.router = router;
        this._api = _api;
        this.formBuilder = formBuilder;
        this._helper = _helper;
        this._router = _router;
        this.clientInfo = {};
        this.listMentor = [];
        this.healthList = [];
        this.showAssignButton = false;
        this.showClientDetail = false;
        this.initForm();
    }
    ClientInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (res) {
            _this.idClient = res.id;
            _this.getAllData();
        });
    };
    ClientInfoComponent.prototype.getAllData = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        var getClientInfoPromise = this._api.getClientInfo(this.idClient);
        var getListMentorPromise = this._api.getListMentor();
        var getListCountry = this._api.getListCountry();
        Promise.all([getClientInfoPromise, getListMentorPromise, getListCountry]).then(function (values) {
            _this._helper.toggleLoading(false);
            //  process getClientInfo
            _this.clientInfo = values[0].data;
            _this.healthList = values[0].data.Health;
            _this.checkResendCode = values[0].data.Status !== 'active' ? false : true;
            _this.wipeData = values[0].data.RoundId ? true : false;
            _this.fillDataClientInfo();
            // process getListMentor
            _this.listMentor = values[1].data;
            // process get List Country
            _this.countries = values[2].data;
        }).catch(function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    ClientInfoComponent.prototype.getClientInfo = function () {
        this._api.getClientInfo(this.idClient);
    };
    ClientInfoComponent.prototype.initForm = function () {
        this.clientInfoForm = this.formBuilder.group({
            FirstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            SurName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            email: [{ value: '' }],
            DateOfBirth: [''],
            City: [{ value: '' }],
            Status: [{ value: '', disabled: true }],
            mentor: [''],
            Gender: [''],
            CountryName: [''],
            CountryId: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            ContactNumber: [''],
            StartDate: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            StartWeight: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            CurrentWeight: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            EndDate: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        }, { validator: __WEBPACK_IMPORTED_MODULE_7__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].isFloat('StartWeight') });
        //
        this.changePasswordForm = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        }, { validator: __WEBPACK_IMPORTED_MODULE_7__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingPassword('password', 'confirmPassword') });
    };
    ClientInfoComponent.prototype.fillDataClientInfo = function () {
        if (this.clientInfo) {
            this.clientInfoForm.setValue({
                FirstName: this.clientInfo.FirstName,
                SurName: this.clientInfo.SurName,
                email: this.clientInfo.Email,
                DateOfBirth: __WEBPACK_IMPORTED_MODULE_5_moment__(this.clientInfo.DateOfBirth).format('YYYY-MM-DD'),
                City: this.clientInfo.City,
                mentor: this.clientInfo.MentorEmail,
                Status: this.clientInfo.Status ? this.clientInfo.Status : 'pending',
                Gender: this.clientInfo.Gender,
                StartDate: __WEBPACK_IMPORTED_MODULE_5_moment__(this.clientInfo.StartDate).format('YYYY-MM-DD'),
                StartWeight: this.clientInfo.StartWeight,
                CurrentWeight: this.clientInfo.CurrentWeight,
                CountryName: this.clientInfo.CountryName,
                CountryId: this.clientInfo.CountryId,
                EndDate: __WEBPACK_IMPORTED_MODULE_5_moment__(this.clientInfo.EndDate).format('YYYY-MM-DD'),
                ContactNumber: this.clientInfo.ContactNumber
            });
            if (this.clientInfo.RoundId) {
                this.clientInfoForm.get('StartDate').enable();
                this.clientInfoForm.get('StartWeight').enable();
                this.clientInfoForm.get('EndDate').enable();
            }
        }
    };
    ClientInfoComponent.prototype.getListMentor = function () {
        this._api.getListMentor();
        // .then(res => {
        //   this.listMentor = res['data'];
        // }).catch(err => {
        // });
    };
    ClientInfoComponent.prototype.resendCode = function () {
        var _this = this;
        var apiResendCode = {
            IdClient: this.idClient,
            IdMentor: this.idClient
        };
        this._api.resendCode(apiResendCode).then(function (res) {
            if (res['status'] === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error) {
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Can not resend code',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Successfully',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ClientInfoComponent.prototype.showModalChangePassword = function () {
        // this.changePasswordForm = this.formBuilder.group({
        //   password: ['', Validators.required],
        //   confirmPassword: ['']
        // }, { Validators: ValidateExtendService.matchingPassword('password', 'confirmPassword') });
        this.modalChangePassword.show();
    };
    ClientInfoComponent.prototype.changePassword = function () {
        var _this = this;
        this.modalChangePassword.hide();
        var data = {
            'password': this.changePasswordForm.value.password
        };
        this._helper.toggleLoading(true);
        this._api.changePassword(data, this.idClient).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res['status'] === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error) {
                _this.changePasswordForm.reset();
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Can not change password',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.changePasswordForm.reset();
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Change password success',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ClientInfoComponent.prototype.confirmDelete = function (type) {
        if (type === 'wipeData' && this.wipeData) {
            this.checkShowDelete = false;
            this.checkShowWipeData = true;
            this.checkDeleteFromMentor = false;
            this.modalDelete.show();
        }
        else if (type === 'delete') {
            this.checkShowDelete = true;
            this.checkShowWipeData = false;
            this.checkDeleteFromMentor = false;
            this.modalDelete.show();
        }
        else if (type == 'deleteFromMentor') {
            this.checkDeleteFromMentor = true;
            this.checkShowDelete = false;
            this.checkShowWipeData = false;
            this.modalDelete.show();
        }
        else if (!this.wipeData) {
            this.toast.addToast({
                title: 'Message',
                msg: 'Delete round error, do not have round is running',
                timeout: 5000,
                theme: 'material',
                position: 'top-right',
                type: 'error'
            });
        }
    };
    ClientInfoComponent.prototype.hideDelete = function () {
        this.checkShowDelete = false;
        this.checkShowWipeData = false;
        this.modalDelete.hide();
    };
    ClientInfoComponent.prototype.delete = function () {
        var _this = this;
        this.modalDelete.hide();
        this._helper.toggleLoading(true);
        this._api.deleteMentee(this.clientInfo.Id).then(function (res) {
            _this.checkShowDelete = false;
            _this._helper.toggleLoading(false);
            if (res.status === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error) {
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
                    msg: 'Delete Client Success',
                    timeout: 2000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                setTimeout(function () {
                    _this._router.navigate(['/client-management']);
                }, 2000);
            }
        }).catch(function (err) {
            _this._helper.toggleLoading(true);
        });
    };
    ClientInfoComponent.prototype.deleteFromMentor = function () {
        var _this = this;
        this.modalDelete.hide();
        this._helper.toggleLoading(true);
        this._api.deleteMenteeFromMentor(this.clientInfo.MentorId, this.clientInfo.Id).subscribe(function (res) {
            _this.checkShowDelete = false;
            _this._helper.toggleLoading(false);
            if (res.status === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error) {
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
                    msg: 'Delete Client Success',
                    timeout: 2000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                // this._router.navigate(['/coach-management']);
                _this.getAllData();
            }
        }, function (err) {
            _this._helper.toggleLoading(true);
        });
    };
    ClientInfoComponent.prototype.deleteRound = function () {
        var _this = this;
        this.modalDelete.hide();
        this._helper.toggleLoading(true);
        if (this.clientInfo.RoundId) {
            this._api.deleteRound(this.clientInfo.RoundId).then(function (res) {
                _this.checkShowWipeData = false;
                _this._helper.toggleLoading(false);
                if (res.status === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error) {
                    _this.toast.addToast({
                        title: 'Message',
                        msg: 'Delete round error',
                        timeout: 5000,
                        theme: 'material',
                        position: 'top-right',
                        type: 'error'
                    });
                }
                else {
                    _this.toast.addToast({
                        title: 'Message',
                        msg: 'Successfully',
                        timeout: 5000,
                        theme: 'material',
                        position: 'top-right',
                        type: 'success'
                    });
                    _this.getAllData();
                }
            }, function (err) {
                console.log(err);
                _this._helper.toggleLoading(false);
            });
        }
    };
    ClientInfoComponent.prototype.assignMentor = function () {
        var _this = this;
        var data = {
            'MentorId': this.clientInfoForm.value.mentor,
            'MenteeId': this.idClient
        };
        this._helper.toggleLoading(true);
        this._api.assignMentor(data).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status === __WEBPACK_IMPORTED_MODULE_6__constants_config__["d" /* STATUS */].error || res.data === 'not ok') {
                _this.modalAssign.hide();
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Assign Mentor error',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.modalAssign.hide();
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Assign mentor successfully',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                // this.getClientInfo();
                // this.fillDataClientInfo();
                _this.getAllData();
            }
        }, function (err) {
            console.log(err);
            _this.modalAssign.hide();
            _this._helper.toggleLoading(false);
        });
    };
    ClientInfoComponent.prototype.showModalAssign = function () {
        var _this = this;
        if (this.clientInfoForm.value.mentor) {
            this.mentorEmail = this.listMentor.find(function (x) { return x.value === _this.clientInfoForm.value.mentor; });
            this.modalAssign.show();
        }
        else {
            this.toast.addToast({
                title: 'Message',
                msg: 'You must select email',
                timeout: 5000,
                theme: 'material',
                position: 'top-right',
                type: 'error'
            });
        }
    };
    ClientInfoComponent.prototype.editClientInfo = function () {
        var _this = this;
        if (!this.clientInfoForm.valid) {
            return false;
        }
        var clientInfoForm = this.clientInfoForm.value;
        var data = {
            email: clientInfoForm.email,
            firstName: clientInfoForm.FirstName,
            surName: clientInfoForm.SurName,
            gender: clientInfoForm.Gender,
            dateOfBirth: clientInfoForm.DateOfBirth === 'Invalid date' ? '' : clientInfoForm.DateOfBirth,
            countryId: clientInfoForm.CountryId,
            menteeId: this.clientInfo.Id,
            city: clientInfoForm.City,
            contactNumber: clientInfoForm.ContactNumber,
            startWeight: 0,
            startDate: '',
            RoundId: '',
        };
        if (this.clientInfo.RoundId) {
            data.startWeight = clientInfoForm.StartWeight;
            data.startDate = __WEBPACK_IMPORTED_MODULE_5_moment__["utc"](clientInfoForm.StartDate).format('YYYY-MM-DD');
            data.RoundId = this.clientInfo.RoundId;
        }
        // call api save info
        this._helper.toggleLoading(true);
        this._api.adminUpdateClient(data).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status === 'error') {
            }
            else {
                _this.toast.addToast({
                    title: 'Message', msg: 'Successfully', timeout: 5000,
                    theme: 'material', position: 'top-right', type: 'success'
                });
            }
        }).catch(function (err) {
            _this._helper.toggleLoading(false);
            _this.toast.addToast({
                title: 'Message', msg: err.message,
                timeout: 5000, theme: 'material', position: 'top-right', type: 'error'
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalChangePassword'),
        __metadata("design:type", Object)
    ], ClientInfoComponent.prototype, "modalChangePassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toast'),
        __metadata("design:type", Object)
    ], ClientInfoComponent.prototype, "toast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDelete'),
        __metadata("design:type", Object)
    ], ClientInfoComponent.prototype, "modalDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAssign'),
        __metadata("design:type", Object)
    ], ClientInfoComponent.prototype, "modalAssign", void 0);
    ClientInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-info',
            template: __webpack_require__("./src/app/page/client-info/client-info.component.html"),
            styles: [__webpack_require__("./src/app/page/client-info/client-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ClientInfoComponent);
    return ClientInfoComponent;
}());



/***/ }),

/***/ "./src/app/page/client-info/client-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoModule", function() { return ClientInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_info_component__ = __webpack_require__("./src/app/page/client-info/client-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_select__ = __webpack_require__("./node_modules/ng-select/fesm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__client_info_component__["a" /* ClientInfoComponent */] }
];
var ClientInfoModule = /** @class */ (function () {
    function ClientInfoModule() {
    }
    ClientInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_select__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__client_info_component__["a" /* ClientInfoComponent */]]
        })
    ], ClientInfoModule);
    return ClientInfoModule;
}());



/***/ })

});
//# sourceMappingURL=client-info.module.chunk.js.map