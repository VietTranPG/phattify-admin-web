webpackJsonp(["configs.module"],{

/***/ "./src/app/page/configs/configs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <div class=\"card-header\">\r\n      <h5>Contact Mentor Page</h5>\r\n      <div class=\"card-header-right\">\r\n        <span (click)=\"openEditModal('ContactMentorPage')\" class=\"icofont icofont-ui-edit\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div [innerHTML]=\"configs.ContactMentorPage | safe: 'html'\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <div class=\"card-header\">\r\n      <h5>Register As Mentor Page</h5>\r\n      <div class=\"card-header-right\">\r\n        <span (click)=\"openEditModal('RegisterAsMentorPage')\" class=\"icofont icofont-ui-edit\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div [innerHTML]=\"configs.RegisterAsMentorPage | safe: 'html'\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <div class=\"card-header\">\r\n      <h5>Special Offer Page</h5>\r\n      <div class=\"card-header-right\">\r\n        <span (click)=\"openEditModal('SpecialOfferPage')\" class=\"icofont icofont-ui-edit\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div [innerHTML]=\"configs.SpecialOfferPage | safe: 'html'\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <div class=\"card-header\">\r\n      <h5>Monthly Subscription Page</h5>\r\n      <div class=\"card-header-right\">\r\n        <span (click)=\"openEditModal('MonthlySubscriptionPage')\" class=\"icofont icofont-ui-edit\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div [innerHTML]=\"configs.MonthlySubscriptionPage | safe: 'html'\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal editor -->\r\n<app-modal-basic #modalEditor>\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Editor</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalEditor.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <div class=\"container\" id=\"scrolling-container\">\r\n      <quill-editor [(ngModel)]=\"quill\" [options]=\"editorConfig\" (ready)=\"onEditorCreated($event)\"\r\n        (change)=\"onContentChanged($event)\">\r\n      </quill-editor>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalEditor.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"edit()\">Confirm</button>\r\n  </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "./src/app/page/configs/configs.component.scss":
/***/ (function(module, exports) {

module.exports = "configs\n.content {\n  margin-top: 20px; }\n\n/* Specify our own scrolling container */\n\n#scrolling-container {\n  max-height: 70vh;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/page/configs/configs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(_api, _helper) {
        this._api = _api;
        this._helper = _helper;
        this.configs = {};
        this.editorConfig = {
            placeholder: 'Put your things hear'
        };
    }
    ConfigsComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    ConfigsComponent.prototype.getConfig = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        this._api.getAppConfig().subscribe(function (res) {
            _this.configs = res['data'];
            _this._helper.toggleLoading(false);
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    ConfigsComponent.prototype.onEditorCreated = function (quill) {
    };
    ConfigsComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
    };
    ConfigsComponent.prototype.openEditModal = function (type) {
        this.modalEditor.show();
        this.typeEdit = type;
        this.quill = this.configs[type];
    };
    ConfigsComponent.prototype.edit = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        var req = {
            type: this.typeEdit,
            content: this.quill.replace('<a href=', '<a style="color: blue; text-decoration: underline" href=')
        };
        this._api.updateAppConfig(req).subscribe(function (res) {
            _this._helper.toggleLoading(false);
            _this.modalEditor.hide();
            if (res['status'] == 'error') {
                alert(res['message']);
            }
            else {
                _this.getConfig();
            }
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEditor'),
        __metadata("design:type", Object)
    ], ConfigsComponent.prototype, "modalEditor", void 0);
    ConfigsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'configs',
            template: __webpack_require__("./src/app/page/configs/configs.component.html"),
            styles: [__webpack_require__("./src/app/page/configs/configs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_helper_service_helper_service__["a" /* HelperService */]])
    ], ConfigsComponent);
    return ConfigsComponent;
}());



/***/ }),

/***/ "./src/app/page/configs/configs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsModule", function() { return ConfigsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_component__ = __webpack_require__("./src/app/page/configs/configs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_safe_pipe__ = __webpack_require__("./src/app/pipes/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__configs_component__["a" /* ConfigsComponent */] }
];
var ConfigsModule = /** @class */ (function () {
    function ConfigsModule() {
    }
    ConfigsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_ngx_quill_editor__["a" /* QuillEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__configs_component__["a" /* ConfigsComponent */], __WEBPACK_IMPORTED_MODULE_7__pipes_safe_pipe__["a" /* SafePipe */]]
        })
    ], ConfigsModule);
    return ConfigsModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ })

});
//# sourceMappingURL=configs.module.chunk.js.map