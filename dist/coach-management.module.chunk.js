webpackJsonp(["coach-management.module"],{

/***/ "./src/app/page/coach-management/coach-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <!-- <span class=\"code-header\">Example of <code>horizontal</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span> -->\r\n      <div class=\"\">\r\n        <form class=\"headerTable\" (submit)=\"searchTable()\">\r\n          <div class=\"row row-filter\">\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <input type=\"text\" [(ngModel)]=\"searchInput\" name=\"searchInput\" class=\"form-control\" placeholder=\"Search by email or name\">\r\n            </div>\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <ng-select class=\"select-custom\" [(ngModel)]=\"group\" name=\"group\" placeholder=\"Search by group\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-sm-4 col-lg-screen\">\r\n              <ng-select class=\"select-custom loading-search\" [(ngModel)]=\"mentee\" name=\"mentee\" [options]=\"listMentee\"\r\n                (filterInputChanged)=\"searchMentee($event)\" placeholder=\"Search by mentee\">\r\n\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-sm-12  col-lg-screen col-button-custom\">\r\n              <button type=\"button\" class=\"btn btn-warning btn-header\" (click)=\"searchTable()\">Search</button>\r\n              <button type=\"button\" class=\"btn btn-header\" (click)=\"showAll()\">Show All</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <button type=\"button\" class=\"btn btn-danger margin-button\" (click)=\"showSendMailForm()\">Compose</button>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-framed table-wrap-text\">\r\n            <tr>\r\n              <th rowspan=\"2\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"selectAll\" (change)=\"changeAll(selectAll)\" />\r\n              </th>\r\n              <th rowspan=\"2\">#</th>\r\n              <th rowspan=\"2\" (click)=\"sortTable('FirstName')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='FirstName'\" class=\"icofont icofont-caret-down\"></i>\r\n                First Name</th>\r\n              <th rowspan=\"2\" (click)=\"sortTable('SurName')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='SurName'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='SurName'\" class=\"icofont icofont-caret-down\"></i>\r\n                Last Name</th>\r\n              <th rowspan=\"2\" (click)=\"sortTable('Email')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='Email'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Email'\" class=\"icofont icofont-caret-down\"></i>\r\n                Email</th>\r\n              <th rowspan=\"2\">Contact Number</th>\r\n              <th rowspan=\"2\" (click)=\"sortTable('Status')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='Status'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='Status'\" class=\"icofont icofont-caret-down\"></i>\r\n                Status</th>\r\n              <th colspan=\"2\" style=\"padding: 5px\">Number of client</th>\r\n              <th rowspan=\"2\">Assign Group</th>\r\n              <th rowspan=\"2\" (click)=\"sortTable('createdAt')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='createdAt'\" class=\"icofont icofont-caret-down\"></i>\r\n                Date Joined</th>\r\n              <th rowspan=\"2\">Ref Code</th>\r\n              <th (click)=\"sortTable('SubscriptionStatus')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='SubscriptionStatus'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='SubscriptionStatus'\" class=\"icofont icofont-caret-down\"></i>\r\n                Subscription Status</th>\r\n              <th (click)=\"sortTable('TotalMoneyRef')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='TotalMoneyRef'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='TotalMoneyRef'\" class=\"icofont icofont-caret-down\"></i>\r\n                Total Money Ref</th>\r\n                <th rowspan=\"2\">SubscriptionId</th>\r\n              <!-- <th rowspan=\"2\">Action</th> -->\r\n            </tr>\r\n            <tr>\r\n              <th style=\"padding: 5px; border-top: 0;\" (click)=\"sortTable('NumberOfClient')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='NumberOfClient'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='NumberOfClient'\" class=\"icofont icofont-caret-down\"></i>\r\n                This month</th>\r\n              <th style=\"padding: 5px; border-top: 0;\" (click)=\"sortTable('TotalClient')\">\r\n                <i *ngIf=\"!this.typeOrderBoolean && this.selectSort=='TotalClient'\" class=\"icofont icofont-caret-up\"></i>\r\n                <i *ngIf=\"this.typeOrderBoolean && this.selectSort=='TotalClient'\" class=\"icofont icofont-caret-down\"></i>\r\n                Total</th>\r\n            </tr>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of listMentor;let i = index\" class=\"coach\">\r\n                <td><input type=\"checkbox\" (change)=\"changeOne()\" [(ngModel)]=\"item.checked\" /></td>\r\n                <td (click)=\"goToCoachInfo(item.Id)\" class=\"cursor\">{{i+1}}</td>\r\n                <td (click)=\"goToCoachInfo(item.Id)\" class=\"cursor\">{{item.FirstName}}</td>\r\n                <td (click)=\"goToCoachInfo(item.Id)\" class=\"cursor\">{{item.SurName}}</td>\r\n                <td>{{item.Email}}</td>\r\n                <td>{{item.ContactNumber}}</td>\r\n                <td>{{item.BlockedAt?'blocked':item.Status}}</td>\r\n\r\n                <td>{{item.clientThisMonth ?item.clientThisMonth : 0}}</td>\r\n                <td>{{item.TotalClient ? item.TotalClient : 0}}</td>\r\n                <td>\r\n                  <select class=\"table-select\">\r\n                    <option>Group A</option>\r\n                    <option>Group B</option>\r\n                    <option>Group C</option>\r\n                  </select>\r\n                  <button class=\"btn-custom btn-orange\">Assign</button>\r\n                </td>\r\n                <td>{{item.createdAt | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{item.RefCode}}</td>\r\n                <th>{{item.SubscriptionStatus}}</th>\r\n                <th>{{item.TotalMoneyRef}}</th>\r\n                <th>{{item.SubscriptionId}}</th>\r\n                <!-- <td>\r\n                <button class=\"btn-custom btn-orange\" (click)=\"$event.stopPropagation();sendOneEmail(item.Email)\"><i class=\"fa fa-paper-plane\"></i></button>\r\n              </td> -->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"totalItem\" [pageSize]=\"limit\" [(page)]=\"page\"\r\n        [maxSize]=\"5\" [boundaryLinks]=\"true\" (pageChange)=\"onChangePage($event)\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"email-compose\" *ngIf=\"showSendMail\">\r\n  <email-compose [listMail]=\"listMail\" [isMinimize]=\"isMinimize\" (closeSendMail)=\"closeSendForm($event)\" (deleteMail)=\"deleteMail($event)\"></email-compose>\r\n</div>\r\n<toast #toast></toast>"

/***/ }),

/***/ "./src/app/page/coach-management/coach-management.component.scss":
/***/ (function(module, exports) {

module.exports = "table {\n  font-size: 13px; }\n  table th {\n    text-align: center; }\n  table td {\n    text-align: center; }\n  table td .table-select, table td .btn-custom {\n      height: 30px;\n      display: inline-block; }\n  table td .btn-custom {\n      border-radius: 3px; }\n  table td .btn-custom.btn-orange {\n        background: #ffba57;\n        border: 1px solid #ffba57;\n        color: #FFF; }\n  .margin-button {\n  margin-left: 5px;\n  margin-top: 5px;\n  margin-bottom: 15px; }\n  .form-control {\n  height: 32px;\n  border: 1px solid #cccccc; }\n  .col-md-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .coach .cursor {\n  cursor: pointer; }\n  .email-compose {\n  max-width: 600px;\n  position: fixed;\n  right: 5px;\n  bottom: 0; }\n  select.form-control {\n  margin-left: 0; }\n  .col-lg-screen {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 10px 0; }\n  @media screen and (min-width: 992px) {\n    .col-lg-screen {\n      margin: 0; } }\n  @media screen and (min-width: 1231px) {\n    .col-lg-screen {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%;\n      max-width: 25%;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n  .col-lg-screen button {\n    margin-left: 10px; }\n  @media screen and (max-width: 1231px) {\n  .col-button-custom {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    margin: 15px 0 10px;\n    text-align: right; } }\n"

/***/ }),

/***/ "./src/app/page/coach-management/coach-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoachManagementComponent = /** @class */ (function () {
    function CoachManagementComponent(_api, _helper, router) {
        this._api = _api;
        this._helper = _helper;
        this.router = router;
        this.listMail = [];
        this.page = 1;
        this.searchInput = '';
        this.typeOrder = 'desc';
        this.limit = 20;
        this.mentee = '';
        this.totalItem = 0;
        this.selectSort = '';
        this.group = '';
        this.listMentee = [];
        this.loadingSelect = false;
        this.showSendMail = false;
    }
    CoachManagementComponent.prototype.ngOnInit = function () {
        this.getListMentor();
    };
    CoachManagementComponent.prototype.showAll = function () {
        this.searchInput = '';
        this.page = 1;
        this.typeOrder = '';
        this.mentee = '';
        this.getListMentor();
    };
    CoachManagementComponent.prototype.searchTable = function () {
        this.page = 1;
        this.getListMentor();
    };
    CoachManagementComponent.prototype.sortTable = function (data) {
        this.selectSort = data;
        if (this.typeOrderBoolean == false || '' || this.typeOrder == 'asc') {
            this.typeOrder = "desc";
            this.typeOrderBoolean = true;
        }
        else {
            this.typeOrder = "asc";
            this.typeOrderBoolean = false;
        }
        this.getListMentor();
    };
    CoachManagementComponent.prototype.onChangePage = function (event) {
        this.selectAll = false;
        this.getListMentor();
    };
    CoachManagementComponent.prototype.getListMentor = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        var data = {
            search: this.searchInput,
            page: this.page,
            limit: this.limit,
            orderType: this.typeOrder,
            mentee: this.mentee,
            orderBy: this.selectSort,
            checked: false
        };
        this._api.getAllMentor(data).then(function (res) {
            _this._helper.toggleLoading(false);
            _this.listMentor = res['data']['mentors'];
            _this.totalItem = res['data']['totalItem'];
        }, function (err) {
            _this._helper.toggleLoading(false);
            console.log(err);
        });
    };
    CoachManagementComponent.prototype.changeAll = function (value) {
        this.listMail = [];
        if (this.listMentor) {
            if (value !== undefined) {
                for (var index = 0; index < this.listMentor.length; index++) {
                    this.listMentor[index].checked = value;
                    if (this.listMentor[index].checked == true) {
                        this.listMail.push(this.listMentor[index].Email);
                    }
                }
            }
        }
    };
    CoachManagementComponent.prototype.changeOne = function () {
        var count = 0;
        if (this.listMentor) {
            for (var i = 0; i < this.listMentor.length; i++) {
                if (this.listMentor[i].checked === true) {
                    count++;
                    if (this.listMail.indexOf(this.listMentor[i].Email) == -1) {
                        this.listMail.push(this.listMentor[i].Email);
                    }
                }
                else {
                    if (this.listMail.indexOf(this.listMentor[i].Email) != -1) {
                        this.listMail.splice(this.listMail.indexOf(this.listMentor[i].Email), 1);
                    }
                }
            }
            this.selectAll = (count === this.listMentor.length || count === this.limit) ? true : false;
        }
    };
    CoachManagementComponent.prototype.searchMentee = function (q) {
        var _this = this;
        this.loadingSelect = true;
        this._api.searchMentee(q).subscribe(function (res) {
            _this.loadingSelect = false;
            _this.listMentee = res['data'];
        }, function (err) {
            _this.loadingSelect = false;
        });
    };
    CoachManagementComponent.prototype.goToCoachInfo = function (id) {
        this.router.navigate(['mentor-info', id]);
    };
    CoachManagementComponent.prototype.closeSendForm = function (val) {
        this.showSendMail = false;
        if (val === "Successfully") {
            this.toast.addToast({ title: 'Message', msg: val, timeout: 5000, theme: 'material', position: 'top-right', type: 'success' });
        }
        this.listMail = [];
        for (var i = 0; i < this.listMentor.length; i++) {
            this.listMentor[i].checked = false;
        }
        this.selectAll = false;
    };
    CoachManagementComponent.prototype.deleteMail = function (val) {
        this.listMail.splice(this.listMail.indexOf(val), 0);
        for (var i = 0; i < this.listMentor.length; i++) {
            if (this.listMentor[i].Email == val) {
                this.listMentor[i].checked = false;
            }
        }
    };
    CoachManagementComponent.prototype.sendOneEmail = function (email) {
        this.listMentor.find(function (x) { return x.Email === email; }).checked = true;
        this.listMail = [];
        this.showSendMail = true;
        this.listMail.push(email);
    };
    CoachManagementComponent.prototype.showSendMailForm = function () {
        this.showSendMail = true;
        this.isMinimize = !this.isMinimize;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toast'),
        __metadata("design:type", Object)
    ], CoachManagementComponent.prototype, "toast", void 0);
    CoachManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coach-management',
            template: __webpack_require__("./src/app/page/coach-management/coach-management.component.html"),
            styles: [__webpack_require__("./src/app/page/coach-management/coach-management.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], CoachManagementComponent);
    return CoachManagementComponent;
}());



/***/ }),

/***/ "./src/app/page/coach-management/coach-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachManagementModule", function() { return CoachManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coach_management_component__ = __webpack_require__("./src/app/page/coach-management/coach-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_select__ = __webpack_require__("./node_modules/ng-select/fesm5/ng-select.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__coach_management_component__["a" /* CoachManagementComponent */] }
];
var CoachManagementModule = /** @class */ (function () {
    function CoachManagementModule() {
    }
    CoachManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_7_ng_select__["a" /* SelectModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__coach_management_component__["a" /* CoachManagementComponent */]]
        })
    ], CoachManagementModule);
    return CoachManagementModule;
}());



/***/ })

});
//# sourceMappingURL=coach-management.module.chunk.js.map