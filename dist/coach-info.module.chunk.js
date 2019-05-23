webpackJsonp(["coach-info.module"],{

/***/ "./src/app/page/coach-info/coach-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--coach-management\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\" col-flex\">\r\n        <div [class]=\"currentTab=='MentorDetail'?'col-detail col-active':'col-detail'\"\r\n          (click)=\"currentTab = 'MentorDetail'\">\r\n          <h5>Mentor detail</h5>\r\n        </div>\r\n        <div [class]=\"currentTab=='ClientList'?'col-detail col-active':'col-detail'\"\r\n          (click)=\"currentTab = 'ClientList'\">\r\n          <h5>Client list</h5>\r\n        </div>\r\n        <div [class]=\"currentTab=='RoundDetail'?'col-detail col-active':'col-detail'\"\r\n          (click)=\"currentTab = 'RoundDetail'\">\r\n          <h5>Round Detail</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" *ngIf=\"currentTab=='MentorDetail'\">\r\n      <app-mentor-detail></app-mentor-detail>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"currentTab=='ClientList'\">\r\n      <app-list-mentee></app-list-mentee>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"currentTab=='RoundDetail'\">\r\n      <round-info [UserId]='idMentor'></round-info>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/coach-info/coach-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".card--coach-management .col-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid rgba(204, 204, 204, 0.29); }\n\n.card--coach-management .col-detail {\n  padding: 15px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n  border-right: 2px solid #fff; }\n\n.card--coach-management .col-detail:hover {\n    background: rgba(204, 204, 204, 0.29); }\n\n.card--coach-management .col-detail.col-active {\n    background: rgba(204, 204, 204, 0.29); }\n"

/***/ }),

/***/ "./src/app/page/coach-info/coach-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoachInfoComponent = /** @class */ (function () {
    function CoachInfoComponent(router) {
        var _this = this;
        this.router = router;
        this.showCoachDetail = true;
        this.currentTab = 'RoundDetail';
        this.router.params.subscribe(function (res) {
            _this.idMentor = res.id;
        });
    }
    CoachInfoComponent.prototype.ngOnInit = function () {
    };
    CoachInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coach-info',
            template: __webpack_require__("./src/app/page/coach-info/coach-info.component.html"),
            styles: [__webpack_require__("./src/app/page/coach-info/coach-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CoachInfoComponent);
    return CoachInfoComponent;
}());



/***/ }),

/***/ "./src/app/page/coach-info/coach-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachInfoModule", function() { return CoachInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_info_component__ = __webpack_require__("./src/app/page/coach-info/coach-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_select__ = __webpack_require__("./node_modules/ng-select/fesm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mentor_detail_mentor_detail_component__ = __webpack_require__("./src/app/page/coach-info/mentor-detail/mentor-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_mentee_list_mentee_component__ = __webpack_require__("./src/app/page/coach-info/list-mentee/list-mentee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__coach_info_component__["a" /* CoachInfoComponent */] }
];
var CoachInfoModule = /** @class */ (function () {
    function CoachInfoModule() {
    }
    CoachInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_select__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__coach_info_component__["a" /* CoachInfoComponent */], __WEBPACK_IMPORTED_MODULE_7__mentor_detail_mentor_detail_component__["a" /* MentorDetailComponent */], __WEBPACK_IMPORTED_MODULE_8__list_mentee_list_mentee_component__["a" /* ListMenteeComponent */]]
        })
    ], CoachInfoModule);
    return CoachInfoModule;
}());



/***/ }),

/***/ "./src/app/page/coach-info/list-mentee/list-mentee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card--client-list\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-right\">\r\n      <button class=\"btn btn-warning\" (click)=\"showAddClient()\">Add</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-client-list\">\r\n    <table class=\"table table-framed table-wrap-text\">\r\n      <thead>\r\n        <tr>\r\n          <th><input type=\"checkbox\" [(ngModel)]=\"selectAll\" (change)=\"changeAll(selectAll)\" /></th>\r\n          <th>#</th>\r\n          <th (click)=\"sortTable('FirstName')\">\r\n            <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-up\"></i>\r\n            <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-down\"></i>\r\n            First Name</th>\r\n          <th (click)=\"sortTable('SurName')\">\r\n            <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='SurName'\" class=\"icofont icofont-caret-up\"></i>\r\n            <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='SurName'\" class=\"icofont icofont-caret-down\"></i>\r\n            Last Name</th>\r\n          <th (click)=\"sortTable('Email')\">\r\n            <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='Email'\" class=\"icofont icofont-caret-up\"></i>\r\n            <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Email'\" class=\"icofont icofont-caret-down\"></i>\r\n            Email</th>\r\n          <th>Status</th>\r\n          <!-- <th>Invited Code</th> -->\r\n          <th (click)=\"sortTable('createdAt')\">\r\n            <i *ngIf=\"this.typeOrderBoolean==false && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-up\"></i>\r\n            <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-down\"></i>\r\n            Date Joined</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let mentee of listMentee;let i = index\" class=\"client\">\r\n          <td><input type=\"checkbox\" [(ngModel)]=\"listMentee.checked\" (change)=\"changeOne()\" /></td>\r\n          <td (click)=\"goToClientInfo(mentee.Id)\" class=\"cursor\">\r\n            {{i+1}}\r\n          </td>\r\n          <td class=\"cursor\" (click)=\"goToClientInfo(mentee.Id)\">\r\n            {{mentee.FirstName}}\r\n          </td>\r\n          <td class=\"cursor\" (click)=\"goToClientInfo(mentee.Id)\">\r\n            {{mentee.SurName}}\r\n          </td>\r\n          <td>{{mentee.Email}}</td>\r\n          <td>{{mentee.Status === 'deactive'? 'inactivate':listMentee.Status}}</td>\r\n          <!-- <td>{{mentee.VerifyCode}}</td> -->\r\n          <td>{{mentee.createdAt | date: 'dd/MM/yyyy'}}</td>\r\n          <td>\r\n            <button *ngIf=\"mentee.Type !='Invite'\" class=\"btn btn-danger btn-custom\" (click)=\"delete(mentee.Id)\"> <i class=\"icofont icofont-bin\"></i></button>\r\n            <!-- <button *ngIf=\"mentee.Type =='Invite'\" class=\"btn btn-warning btn-custom\"><i class=\"fa fa-paper-plane-o\"\r\n                aria-hidden=\"true\" (click)=\"resendCode(mentee.Id)\"></i></button> -->\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"totalItem\" [pageSize]=\"limit\" [(page)]=\"page\"\r\n    [maxSize]=\"5\" [boundaryLinks]=\"true\" (pageChange)=\"onChangePage($event)\"></ngb-pagination>\r\n</div>\r\n<!-- modal add mentee-->\r\n<app-modal-basic #modalAddMentee>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Add client</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"closeFormAddMentee()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <div class=\"container form-add-client\">\r\n      <form class=\"form\" [formGroup]=\"addClientForm\">\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">First name:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.firstName.touched && !addClientForm.controls.firstName.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Surname:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Surname\" formControlName=\"surName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.surName.touched && !addClientForm.controls.surName.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\">Gender:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"form-radio\">\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"male\" checked=\"checked\" formControlName=\"gender\">\r\n                  <i class=\"helper\"></i>Male\r\n                </label>\r\n              </div>\r\n              <div class=\"radio radiofill radio-primary radio-inline\">\r\n                <label>\r\n                  <input type=\"radio\" value=\"female\" formControlName=\"gender\">\r\n                  <i class=\"helper\"></i>Female\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"messages text-danger\" *ngIf=\"addClientForm.controls.gender.errors?.required && addClientForm.controls.gender.touched\">Member\r\n              can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Email:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc@gmail.com\" formControlName=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.hasError('email', 'email') && addClientForm.get('email').touched\">\r\n              Email is invalid.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Confirm email:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc@gmail.com\" formControlName=\"confirmEmail\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmEmail.touched && !addClientForm.controls.confirmEmail.valid\" class=\"error-text\">\r\n              {{ 'Confirm email is required' }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <p *ngIf=\"addClientForm.controls.confirmEmail.touched && addClientForm.errors?.mismatchedEmail && addClientForm.controls.confirmEmail.valid \"\r\n              class=\"error-text\">\r\n              {{ \"Email doesn't match\" }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Password:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p class=\"error-text\" *ngIf=\"addClientForm.controls.password.touched && !addClientForm.controls.password.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Confirm password:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmPassword.valid && addClientForm.errors?.mismatchedPassword\" class=\"error-text\">\r\n              Passwords don't match\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p *ngIf=\"addClientForm.controls.confirmPassword.touched && !addClientForm.controls.confirmPassword.valid\"\r\n              class=\"error-text\">\r\n              Confirm password is required\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Date of Birth:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Contact number:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" [textMask]=\"{mask: mask,guide:false}\" placeholder=\"123456789\" formControlName=\"contactNumber\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <label class=\"col-md-3 col-form-label\">Notes:</label>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"abc\" formControlName=\"note\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"closeFormAddMentee()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"addNewMentee()\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-modal-basic>\r\n<app-modal-basic #modalDelete>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalDelete.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <p>{{deleteFlag?.Email}}</p>\r\n    <p>All data of this client will be deleted. Are you sure you want to delete this client?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDelete.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"deleteMentee()\">Delete</button>\r\n  </div>\r\n</app-modal-basic>\r\n<toast #toast></toast>"

/***/ }),

/***/ "./src/app/page/coach-info/list-mentee/list-mentee.component.scss":
/***/ (function(module, exports) {

module.exports = ".card--client-list {\n  padding: 15px; }\n  .card--client-list .col-right {\n    margin-bottom: 10px;\n    text-align: right; }\n  .card--client-list .btn {\n    height: calc(2.25rem + 2px);\n    padding: 0.375rem 0.75rem; }\n  .card--client-list table th, .card--client-list table td {\n    text-align: center; }\n  .error-text {\n  color: red; }\n  .app-modal-footer {\n  width: 100%;\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .app-modal-footer button {\n    min-width: 100px;\n    margin: 0 5px; }\n  .form-add-client {\n  overflow-y: auto;\n  max-height: 600px; }\n  .client .cursor {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/page/coach-info/list-mentee/list-mentee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMenteeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_config__ = __webpack_require__("./src/app/constants/config.ts");
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







var ListMenteeComponent = /** @class */ (function () {
    function ListMenteeComponent(router, _api, formBuilder, _helper, _router) {
        this.router = router;
        this._api = _api;
        this.formBuilder = formBuilder;
        this._helper = _helper;
        this._router = _router;
        this.limit = 20;
        this.status = '';
        this.selectSort = '';
        this.page = 1;
        this.typeOrder = '';
        this.totalItem = 0;
        this.countries = [];
        this.mask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
        this.listGender = [
            {
                name: 'Male',
                value: __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* GENDER */].Male
            },
            {
                name: 'Female',
                value: __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* GENDER */].Female
            }
        ];
    }
    ListMenteeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.InitFormAddClient();
        this.router.params.subscribe(function (res) {
            _this.idMentor = res.id;
            _this.getListMentee(res.id);
        });
    };
    ListMenteeComponent.prototype.InitFormAddClient = function () {
        this.addClientForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            surName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
            confirmEmail: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            dateOfBirth: [''],
            contactNumber: [''],
            note: [''],
        }, {
            validator: [
                __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingEmail('email', 'confirmEmail'),
                __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingPassword('password', 'confirmPassword')
            ]
        });
    };
    ListMenteeComponent.prototype.onChangePage = function (event) {
        this.selectAll = false;
        this.getListMentee(this.idMentor);
    };
    ListMenteeComponent.prototype.getListMentee = function (id) {
        var _this = this;
        var data = {
            page: this.page,
            limit: this.limit,
            status: this.status,
            orderBy: this.selectSort,
            orderType: this.typeOrder,
            mentor: id,
            checked: false,
            showMentor: 1
        };
        this._api.management(data).then(function (res) {
            _this.listMentee = res['data']['clients'];
            _this.totalItem = res['data']['totalItem'];
        });
    };
    ListMenteeComponent.prototype.sortTable = function (data) {
        this.selectSort = data;
        if (this.typeOrderBoolean == false || '') {
            this.typeOrder = "desc";
            this.typeOrderBoolean = true;
        }
        else {
            this.typeOrder = "asc";
            this.typeOrderBoolean = false;
        }
        this.getListMentee(this.idMentor);
    };
    ListMenteeComponent.prototype.changeAll = function (value) {
        if (this.listMentee) {
            if (value !== undefined) {
                for (var index = 0; index < this.listMentee.length; index++) {
                    this.listMentee[index].checked = value;
                }
            }
        }
    };
    ListMenteeComponent.prototype.changeOne = function () {
        var count = 0;
        if (this.listMentee) {
            for (var i = 0; i < this.listMentee.length; i++) {
                if (this.listMentee[i].checked === true)
                    count++;
            }
            this.selectAll = (count === this.listMentee.length || count === this.limit) ? true : false;
        }
    };
    ListMenteeComponent.prototype.addNewMentee = function () {
        var _this = this;
        this.markFormGroupTouched(this.addClientForm);
        if (this.addClientForm.invalid) {
            return;
        }
        var data = {
            firstName: this.addClientForm.value.firstName,
            surName: this.addClientForm.value.surName,
            gender: this.addClientForm.value.gender == 'male' ? __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* GENDER */].Male : __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* GENDER */].Female,
            email: this.addClientForm.value.email,
            dateOfBirth: this.addClientForm.value.dateOfBirth,
            contactNumber: this.addClientForm.value.contactNumber,
            note: this.addClientForm.value.note,
            password: this.addClientForm.value.password
        };
        data['userId'] = this.idMentor;
        this._api.addNewMentee(data).then(function (res) {
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
                _this.getListMentee(_this.idMentor);
            }
        });
    };
    ListMenteeComponent.prototype.resendCode = function (idClient) {
        var _this = this;
        var data = {
            IdClient: idClient,
            IdMentor: this.idMentor
        };
        this._api.resendCode(data).then(function (res) {
            _this.getListMentee(_this.idMentor);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ListMenteeComponent.prototype.delete = function (id) {
        this.idMenteeDelete = id;
        this.modalDelete.show();
    };
    ListMenteeComponent.prototype.deleteMentee = function () {
        var _this = this;
        this.modalDelete.hide();
        this._helper.toggleLoading(true);
        this._api.deleteMenteeFromMentor(this.idMentor, this.idMenteeDelete).subscribe(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status === __WEBPACK_IMPORTED_MODULE_5__constants_config__["d" /* STATUS */].error) {
                _this.toast.addToast({ title: 'Message', msg: res.message, timeout: 5000, theme: 'material', position: 'top-right', type: 'error' });
            }
            else {
                _this.toast.addToast({ title: 'Message', msg: 'Delete Client Success', timeout: 2000, theme: 'material', position: 'top-right', type: 'success' });
                _this.getListMentee(_this.idMentor);
            }
        }, function (err) {
            _this._helper.toggleLoading(true);
        });
    };
    ListMenteeComponent.prototype.goToClientInfo = function (id) {
        this._router.navigate(['client-info', id]);
    };
    ListMenteeComponent.prototype.showAddClient = function () {
        this.addClientForm.patchValue({
            gender: 'male'
        });
        // this._api.getCountries().subscribe(res => {
        //   let resultCountry = res['data'];
        //   this.countries = this.sortBy(resultCountry, 'Name', false);
        //   this.modalAddMentee.show();
        // })
        this.modalAddMentee.show();
    };
    ListMenteeComponent.prototype.sortBy = function (list, property, reverse) {
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
    ListMenteeComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ListMenteeComponent.prototype.closeFormAddMentee = function () {
        this.addClientForm.reset();
        this.modalAddMentee.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddMentee'),
        __metadata("design:type", Object)
    ], ListMenteeComponent.prototype, "modalAddMentee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toast'),
        __metadata("design:type", Object)
    ], ListMenteeComponent.prototype, "toast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDelete'),
        __metadata("design:type", Object)
    ], ListMenteeComponent.prototype, "modalDelete", void 0);
    ListMenteeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-mentee',
            template: __webpack_require__("./src/app/page/coach-info/list-mentee/list-mentee.component.html"),
            styles: [__webpack_require__("./src/app/page/coach-info/list-mentee/list-mentee.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ListMenteeComponent);
    return ListMenteeComponent;
}());



/***/ }),

/***/ "./src/app/page/coach-info/mentor-detail/mentor-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-mentor-detail\">\r\n  <div class=\"col-sm-8\">\r\n    <form class=\"form\" [formGroup]=\"mentorInfoForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label>Name</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <input class=\"form-control\" formControlName=\"FirstName\" placeholder=\"First name\" />\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <input class=\"form-control\" formControlName=\"SurName\" placeholder=\"Last name\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label>Email</label>\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" formControlName=\"Email\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label>Contact Number</label>\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" formControlName=\"ContactNumber\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-custom\">\r\n        <button class=\"btn btn-warning btn--form\" (click)=\"modalChangePassword.show()\">Change password</button>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label>Gender</label>\r\n          <div class=\"col-xs-12\">\r\n            <select class=\"form-control\" formControlName=\"Gender\">\r\n              <option [ngValue]=\"false\">Male</option>\r\n              <option [ngValue]=\"true\">Female</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label>Date of Birth</label>\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"date\" formControlName=\"DateOfBirth\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label>Country</label>\r\n          <div class=\"col-xs-12\">\r\n              <select class=\"form-control\" type=\"text\" formControlName=\"CountryId\">\r\n                  <option *ngFor=\"let country of countries\" value=\"{{country?.Id}}\">{{country?.Name}}</option>\r\n                </select>\r\n            <!-- <input class=\"form-control\" formControlName=\"CountryName\" /> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label>City/Town</label>\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" formControlName=\"City\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label>Health List</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-control--custom\">\r\n                <ul class=\"list-group list-group-flush\" *ngFor=\"let healthList of healthList; let i = index\">\r\n                  <li class=\"list-group-item disabled\">{{healthList.Name}}</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label>Status</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <input class=\"form-control\" formControlName=\"Status\" />\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <!-- <button class=\"btn btn-secondary btn--form\">Resend</button> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row row-custom row--flex-end\">\r\n        <button type=\"button\" class=\"btn btn-default ripple\" [disabled]=\"mentorIsBlocked\" (click)=\"modalDelete.show()\">Block</button>\r\n        <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"modalDownGrade.show()\">Downgrade mentor</button>\r\n        <button type=\"button\" class=\"btn btn-success ripple light\" (click)=\"updateMentor()\">Save</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n<!-- modal change password-->\r\n<app-modal-basic #modalChangePassword>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Change password</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalChangePassword.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <div class=\"container\">\r\n      <form class=\"form\" [formGroup]=\"changePasswordForm\">\r\n        <div class=\"row\">\r\n          <label class=\"col-md-4 col-form-label\">New password: </label>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\">\r\n            </div>\r\n            <p class=\"error-text\" *ngIf=\"changePasswordForm.controls.password.touched && !changePasswordForm.controls.password.valid\">This\r\n              field is required.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-md-4 col-form-label\">Confirm new password: </label>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n            </div>\r\n            <p *ngIf=\"changePasswordForm.controls.confirmPassword.valid && changePasswordForm.errors?.mismatchedPassword\"\r\n              class=\"error-text\">\r\n              Passwords don't match\r\n            </p>\r\n            <p *ngIf=\"changePasswordForm.controls.confirmPassword.touched && !changePasswordForm.controls.confirmPassword.valid\"\r\n              class=\"error-text\">\r\n              Confirm password is required\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalChangePassword.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"changePassword()\" [disabled]=\"changePasswordForm.invalid || changePasswordForm.hasError('mismatchedPassWord')\">Confirm</button>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<app-modal-basic #modalDelete>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalDelete.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <p>Are you sure to block this mentor?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"blockMentor()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDelete.hide()\">No</button>\r\n  </div>\r\n</app-modal-basic>\r\n<app-modal-basic #modalDownGrade>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Confirm</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalDownGrade.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <p>Are you sure to downgrade this mentor?</p>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"downGradeMentor()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDownGrade.hide()\">No</button>\r\n  </div>\r\n</app-modal-basic>\r\n<toast #toast></toast>"

/***/ }),

/***/ "./src/app/page/coach-info/mentor-detail/mentor-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-mentor-detail {\n  padding: 20px 0; }\n\n.row {\n  margin-bottom: 10px; }\n\n.row.row-custom {\n    padding: 0 15px; }\n\n.row.row--flex-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.row.row--flex-end button {\n      margin-right: 10px;\n      min-width: 100px; }\n\n.row.row--flex-end button:last-child {\n        margin-right: 0; }\n\n.row .form-control {\n    margin-bottom: 10px;\n    border: 1px solid #cccccc; }\n\n@media screen and (min-width: 768px) {\n      .row .form-control {\n        margin-bottom: 0; } }\n\n.row .btn {\n    height: calc(2.25rem + 2px);\n    padding: 0.375rem 0.75rem; }\n\n.error-text {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/page/coach-info/mentor-detail/mentor-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__ = __webpack_require__("./src/app/services/validate-service/validate-extend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_config__ = __webpack_require__("./src/app/constants/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MentorDetailComponent = /** @class */ (function () {
    function MentorDetailComponent(router, _api, formBuilder, _helper, _router) {
        this.router = router;
        this._api = _api;
        this.formBuilder = formBuilder;
        this._helper = _helper;
        this._router = _router;
        this.countries = [];
        this.healthList = [];
    }
    MentorDetailComponent.prototype.ngOnInit = function () {
        this.InitForm();
        this.getMentorInfo();
    };
    MentorDetailComponent.prototype.InitForm = function () {
        var _this = this;
        this.mentorInfoForm = this.formBuilder.group({
            FirstName: [{ value: '' }],
            Email: [{ value: '' }],
            ContactNumber: [{ value: '' }],
            DateOfBirth: [{ value: '' }],
            CountryId: [{ value: '' }],
            City: [{ value: '' }],
            Gender: [{ value: '' }],
            SurName: [{ value: '' }],
            Status: [{ value: '', disabled: true }]
        });
        this.changePasswordForm = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        }, { validator: __WEBPACK_IMPORTED_MODULE_6__services_validate_service_validate_extend_service__["a" /* ValidateExtendService */].matchingPassword('password', 'confirmPassword') });
        this._api.getCountries().subscribe(function (res) {
            var resultCountry = res['data'];
            _this.countries = resultCountry;
        });
    };
    MentorDetailComponent.prototype.getMentorInfo = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        this.router.params.subscribe(function (res) {
            _this.idMentor = res.id;
            _this._api.getMentorInfo(_this.idMentor).then(function (data) {
                _this._helper.toggleLoading(false);
                _this.mentorInfo = data['data'];
                _this.healthList = data['data']['Health'];
                _this.mentorIsBlocked = _this.mentorInfo.BlockedAt ? true : false;
                _this.fillDataMentorInfo();
            }, function (err) {
                _this._helper.toggleLoading(false);
            });
        });
    };
    MentorDetailComponent.prototype.fillDataMentorInfo = function () {
        if (this.mentorInfo) {
            this.mentorInfoForm.setValue({
                FirstName: this.mentorInfo.FirstName,
                Email: this.mentorInfo.Email,
                ContactNumber: this.mentorInfo.ContactNumber,
                DateOfBirth: __WEBPACK_IMPORTED_MODULE_5_moment__(this.mentorInfo.DateOfBirth).format('YYYY-MM-DD'),
                CountryId: this.mentorInfo.CountryId,
                City: this.mentorInfo.City,
                Gender: this.mentorInfo.Gender,
                SurName: this.mentorInfo.SurName,
                Status: this.mentorInfo.BlockedAt ? 'Blocked' : this.mentorInfo.Status
            });
        }
    };
    MentorDetailComponent.prototype.downGradeMentor = function () {
        var _this = this;
        this.modalDownGrade.hide();
        this._helper.toggleLoading(true);
        this._api.downGradeMentor(this.idMentor).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status == __WEBPACK_IMPORTED_MODULE_7__constants_config__["d" /* STATUS */].error) {
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
                    msg: "The mentor has been downgraded to be a mentee",
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                setTimeout(function () {
                    _this._router.navigate(['/coach-management']);
                }, 2000);
            }
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    MentorDetailComponent.prototype.blockMentor = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        this._api.blockMentor(this.idMentor).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status == __WEBPACK_IMPORTED_MODULE_7__constants_config__["d" /* STATUS */].error) {
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'Error',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'error'
                });
            }
            else {
                _this.toast.addToast({
                    title: 'Message',
                    msg: 'The mentor has been blocked and cannot sign in the app anymore',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
                _this.mentorIsBlocked = true;
                _this.modalDelete.hide();
            }
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    MentorDetailComponent.prototype.changePassword = function () {
        var _this = this;
        this.modalChangePassword.hide();
        var data = {
            "password": this.changePasswordForm.value.password
        };
        this._helper.toggleLoading(true);
        this._api.changePassword(data, this.idMentor).then(function (res) {
            _this._helper.toggleLoading(false);
            if (res['status'] === __WEBPACK_IMPORTED_MODULE_7__constants_config__["d" /* STATUS */].error) {
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
    MentorDetailComponent.prototype.updateMentor = function () {
        var _this = this;
        console.log(this.mentorInfoForm.value);
        var req = this.mentorInfoForm.value;
        req.Id = this.idMentor;
        this._helper.toggleLoading(true);
        this._api.updateMentor(req).subscribe(function (res) {
            _this._helper.toggleLoading(false);
            if (res.status == 'success') {
                _this._helper.showToast({
                    title: 'Message',
                    msg: 'Change mentor infor success',
                    timeout: 5000,
                    theme: 'material',
                    position: 'top-right',
                    type: 'success'
                });
            }
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toast'),
        __metadata("design:type", Object)
    ], MentorDetailComponent.prototype, "toast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalChangePassword'),
        __metadata("design:type", Object)
    ], MentorDetailComponent.prototype, "modalChangePassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDelete'),
        __metadata("design:type", Object)
    ], MentorDetailComponent.prototype, "modalDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDownGrade'),
        __metadata("design:type", Object)
    ], MentorDetailComponent.prototype, "modalDownGrade", void 0);
    MentorDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mentor-detail',
            template: __webpack_require__("./src/app/page/coach-info/mentor-detail/mentor-detail.component.html"),
            styles: [__webpack_require__("./src/app/page/coach-info/mentor-detail/mentor-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__services_helper_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], MentorDetailComponent);
    return MentorDetailComponent;
}());



/***/ })

});
//# sourceMappingURL=coach-info.module.chunk.js.map