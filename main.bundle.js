webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/extension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Extension; });
var Extension = /** @class */ (function () {
    function Extension() {
    }
    return Extension;
}());



/***/ }),

/***/ "./src/app/Models/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_tasks_my_tasks_component__ = __webpack_require__("./src/app/my-tasks/my-tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tracing_tracing_component__ = __webpack_require__("./src/app/tracing/tracing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store_component__ = __webpack_require__("./src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__extension_extension_component__ = __webpack_require__("./src/app/extension/extension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feed_back_feed_back_component__ = __webpack_require__("./src/app/feed-back/feed-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__my_tasks_my_tasks_component__["a" /* MyTasksComponent */], data: { title: 'Mis Tareas' } },
            { path: 'inbox', component: __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__["a" /* InboxComponent */], data: { title: 'Bandeja de Entrada' } },
            { path: 'tracing', component: __WEBPACK_IMPORTED_MODULE_6__tracing_tracing_component__["a" /* TracingComponent */], data: { title: 'Seguimiento' } },
            { path: 'store', component: __WEBPACK_IMPORTED_MODULE_7__store_store_component__["a" /* StoreComponent */], data: { title: 'Extensiones' } },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */], data: { title: 'Perfiles' } },
            { path: 'extension/:id', component: __WEBPACK_IMPORTED_MODULE_8__extension_extension_component__["a" /* ExtensionComponent */] },
            { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_9__feed_back_feed_back_component__["a" /* FeedBackComponent */] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nmain.full-main {\n  width: 100%;\n  height: 100%; }\n\n::ng-deep app-inbox {\n  width: 100%;\n  height: 100%; }\n\n::ng-deep .main-content {\n  width: 100%;\n  height: calc(100% - 80px);\n  background-color: #fff; }\n\n::ng-deep .task-list-header {\n  background-color: #0184d1;\n  border-bottom: 1px solid #dee2e6; }\n\n::ng-deep .lt-tabs {\n  padding-top: 7px;\n  background-color: #0184d1;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n::ng-deep .nav-tabs {\n  border-bottom: none !important; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > a {\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.8em; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li.dropdown {\n  position: relative; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > a.dropdown-toggle:after {\n  content: none; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > a.dropdown-toggle[aria-expanded=\"true\"] {\n  color: #fff;\n  background-color: transparent;\n  border: none; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show {\n  left: initial !important;\n  right: 0 !important;\n  top: calc(100% - 10px) !important;\n  -webkit-transform: none !important;\n          transform: none !important;\n  width: 200px;\n  padding: 15px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  height: 250px;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show h4 {\n    font-size: 1.2em; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li {\n    padding: 5px 0px;\n    border-bottom: solid 1px #f2f2f2; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li a {\n      color: #111; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li a.ml-auto {\n      color: #dc3545;\n      opacity: 0;\n      -webkit-transition: opacity 0.3s ease-out;\n      transition: opacity 0.3s ease-out; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li:hover a.ml-auto {\n    opacity: 1; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show .add-folder input {\n    border: none;\n    border-bottom: solid 1.5px #f2f2f2;\n    border-radius: 0px;\n    font-size: 1em;\n    padding-left: 0px; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show .add-folder button[type=\"submit\"] {\n    border-radius: 50%;\n    padding: 0;\n    height: 30px;\n    width: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #0184d2;\n    color: #fff;\n    padding-top: 1px; }\n\n::ng-deep main .main-content .tasks > div > .task-list-header > ul > li > a.active {\n  border-bottom: solid 7px rgba(0, 0, 0, 0.2);\n  background-color: transparent;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DefaultIntl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_header_full_header_full_component__ = __webpack_require__("./src/app/general/header-full/header-full.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__misc_service__ = __webpack_require__("./src/app/misc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__log_service__ = __webpack_require__("./src/app/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__general_header_header_component__ = __webpack_require__("./src/app/general/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__general_profile_block_profile_block_component__ = __webpack_require__("./src/app/general/profile-block/profile-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__my_tasks_my_tasks_component__ = __webpack_require__("./src/app/my-tasks/my-tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__inbox_inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tracing_tracing_component__ = __webpack_require__("./src/app/tracing/tracing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__task_list_task_list_component__ = __webpack_require__("./src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__task_detail_task_detail_component__ = __webpack_require__("./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__folder_service__ = __webpack_require__("./src/app/folder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__general_select_dialog_select_dialog_component__ = __webpack_require__("./src/app/general/select-dialog/select-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__store_store_component__ = __webpack_require__("./src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__extension_service__ = __webpack_require__("./src/app/extension.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__store_detail_store_detail_component__ = __webpack_require__("./src/app/store-detail/store-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__extension_extension_component__ = __webpack_require__("./src/app/extension/extension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__feed_back_feed_back_component__ = __webpack_require__("./src/app/feed-back/feed-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var DefaultIntl = {
    //look for a better way to do this
    cancelBtnLabel: localStorage.getItem("lang") === "es" ? 'Cancelar' : "Cancel",
    setBtnLabel: localStorage.getItem("lang") === "es" ? 'Aceptar' : "Accept",
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__general_header_full_header_full_component__["a" /* HeaderFullComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_19__general_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__general_profile_block_profile_block_component__["a" /* ProfileBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_21__my_tasks_my_tasks_component__["a" /* MyTasksComponent */],
                __WEBPACK_IMPORTED_MODULE_22__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_23__tracing_tracing_component__["a" /* TracingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__general_select_dialog_select_dialog_component__["a" /* SelectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_33__store_detail_store_detail_component__["a" /* StoreDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__extension_extension_component__["a" /* ExtensionComponent */],
                __WEBPACK_IMPORTED_MODULE_35__feed_back_feed_back_component__["a" /* FeedBackComponent */],
                __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__["a" /* ProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__["d" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__["e" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].firebase, "livetask"),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__misc_service__["a" /* MiscService */],
                __WEBPACK_IMPORTED_MODULE_12__log_service__["a" /* LogService */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_24__profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_27__folder_service__["a" /* FolderService */],
                __WEBPACK_IMPORTED_MODULE_28__task_service__["a" /* TaskService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__["c" /* OwlDateTimeIntl */], useValue: DefaultIntl },
                __WEBPACK_IMPORTED_MODULE_32__extension_service__["a" /* ExtensionService */],
                __WEBPACK_IMPORTED_MODULE_13__firebase_service__["a" /* FirebaseService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService, router, ps, firebaseDB) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.ps = ps;
        this.firebaseDB = firebaseDB;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net/api/auth/';
    }
    ;
    /**
     * Login user
     * @param {string} mail User email
     * @param {string} pass User password
     * @returns {Observable<any>} Returns data from user if exist
     */
    AuthService.prototype.logIn = function (mail, pass) {
        var path = 'login';
        var query = '?mail=' + mail + '&pass=' + pass;
        var url = this.base_url + path + query;
        return this.http.get(url)
            .pipe();
    };
    /**
     * Verify Token
     * @description Checks if there is any access token in cookies, if not, it redirect to login page
     */
    AuthService.prototype.verifyAccessToken = function () {
        var _this = this;
        var accessToken = this.cookieService.get('accessToken');
        var lang = localStorage.getItem("lang");
        var mail = localStorage.getItem("mail");
        var navLang = this.getDefaultLang();
        if (accessToken == undefined) {
            this.router.navigate(['login']);
        }
        else if (lang === undefined) {
            this.ps.getProfile(mail).subscribe(function (data) {
                if (data.lang === undefined) {
                    data.lang = navLang;
                    _this.ps.updateProfile(data);
                }
                else {
                    localStorage.setItem("lang", data.lang);
                }
            });
        }
    };
    /**
     * Register User
     * @param {string} mail User email
     * @param {string} pass User password
     * @param {string} name User name
     * @returns {any} Returns user data
     */
    AuthService.prototype.registerUser = function (mail, pass, name) {
        var path = 'register';
        var url = this.base_url + path;
        var lang = this.getDefaultLang();
        return this.http.post(url, { mail: mail, pass: pass, name: name, lang: lang }, httpOptions).pipe();
    };
    /**
     * Recovery Password
     * @param {string} mail User email
     * @returns Returns if the recovery password has been sent to the `mail` registered
     */
    AuthService.prototype.recoveryPassWord = function (mail) {
        var url = "https://us-central1-livetask-363bb.cloudfunctions.net/api/recovery";
        return this.http.post(url, { mail: mail });
    };
    AuthService.prototype.getDefaultLang = function () {
        var navLanguage = navigator.language.split("-")[0] !== undefined ? navigator.language.split("-")[0] : "en";
        var res = this.firebaseDB.list('/text/list_language').valueChanges();
        res.subscribe(function (langList) {
            if (!(langList.find(function (lang) { return lang.code == navLanguage; }))) {
                navLanguage = "en";
            }
        });
        return navLanguage;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/extension.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ExtensionService = /** @class */ (function () {
    function ExtensionService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net';
        this.get_url = this.base_url + '/api/get/apps';
        this.get_url_user_extension = this.base_url + '/api/get/user_extensions/';
        this.post_url = this.base_url + '/api/post/user_app/';
    }
    ;
    ExtensionService.prototype.getApps = function () {
        var url = this.get_url;
        return this.http.get(url)
            .pipe();
    };
    ExtensionService.prototype.setUserExtension = function (extension) {
        var url = this.post_url;
        var user_token = localStorage.getItem("token");
        return this.http.post(url, { extension: extension, user_token: user_token }, httpOptions).pipe();
    };
    ExtensionService.prototype.getUserExtension = function () {
        var user_token = localStorage.getItem("token");
        var url = this.get_url_user_extension + user_token;
        return this.http.get(url).pipe();
    };
    ExtensionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ExtensionService);
    return ExtensionService;
}());



/***/ }),

/***/ "./src/app/extension/extension.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe *ngIf=\"extension\" [src]=\"getSafeURL(extension.url)\" class=\"w-100 h-100\"></iframe>"

/***/ }),

/***/ "./src/app/extension/extension.component.scss":
/***/ (function(module, exports) {

module.exports = "iframe {\n  border: 0;\n  position: relative; }\n\n::ng-deep app-extension {\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/extension/extension.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extension_service__ = __webpack_require__("./src/app/extension.service.ts");
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




var ExtensionComponent = /** @class */ (function () {
    function ExtensionComponent(extensionService, activatedRoute, sanitizer) {
        this.extensionService = extensionService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    ExtensionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.extensionService.getUserExtension().subscribe(function (ext) {
                _this.extension = ext[id];
                return false;
            });
        });
    };
    ExtensionComponent.prototype.getSafeURL = function (url) {
        var user_mail = localStorage.getItem("mail");
        return this.sanitizer.bypassSecurityTrustResourceUrl(url + user_mail);
    };
    ExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-extension',
            template: __webpack_require__("./src/app/extension/extension.component.html"),
            styles: [__webpack_require__("./src/app/extension/extension.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__extension_service__["a" /* ExtensionService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ExtensionComponent);
    return ExtensionComponent;
}());



/***/ }),

/***/ "./src/app/feed-back/feed-back.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<h2>{{title}}</h2>\r\n</header>\r\n<section class=\"main-content\">\r\n\t<div class=\"inbox-tasks h-100 d-flex flex-column w-100\" id=\"inbox\">\r\n\t\t<div class=\"w-100 h-100 d-flex\">\r\n\t\t\t<form (submit)=\"enviarFormulario()\" class=\"d-flex flex-column col-12 align-items-center\">\r\n\t\t\t\t<p class=\"text-center\"><small>{{subtitle}}</small></p>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-12 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-file\"></i>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"asunto\" name=\"asunto\" placeholder=\"{{subject}}\" [disabled]=\"stop\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"telefono\" name=\"telefono\" placeholder=\"{{phone}}\" [disabled]=\"stop\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-globe\"></i>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"pais\" name=\"pais\" placeholder=\"{{country}}\" [disabled]=\"stop\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-12 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"mensaje\" name=\"mensaje\" placeholder=\"{{comment}}\" [disabled]=\"stop\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-12 text-center pt-4\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"stop\">{{btnSend}}</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/feed-back/feed-back.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep app-feed-back {\n  height: 100%; }\n\nform {\n  padding-top: 30px; }\n\nform .row {\n    width: 650px;\n    max-width: 100%; }\n\nform .row .col-12 .input-group {\n    margin-bottom: 12px; }\n\nform .row .col-12:nth-child(2) .input-group {\n    height: calc(100% - 12px); }\n\nform .row .col-12:nth-child(2) .input-group .form-control {\n      padding-left: 20px;\n      padding-top: 7px; }\n\nform .form-control {\n    border: solid 1px #d2d2d2 !important;\n    border-radius: 25px !important;\n    padding-left: 42px;\n    line-height: 2;\n    font-size: 15px; }\n\nform .input-group i.fa {\n    position: absolute;\n    z-index: 1;\n    color: #7c7c7c;\n    top: calc(50% - 7.5px);\n    left: 20px;\n    font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/feed-back/feed-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_service__ = __webpack_require__("./src/app/misc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service__ = __webpack_require__("./src/app/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedBackComponent = /** @class */ (function () {
    function FeedBackComponent(ms, ls, firebaseService, firebaseDB) {
        this.ms = ms;
        this.ls = ls;
        this.firebaseService = firebaseService;
        this.firebaseDB = firebaseDB;
        this.asunto = '';
        this.telefono = '';
        this.pais = '';
        this.mensaje = '';
        this.stop = false;
        this.subtitle = undefined;
        this.title = undefined;
        this.phone = undefined;
        this.country = undefined;
        this.comment = undefined;
        this.btnSend = undefined;
        this.sent = undefined;
        this.sending = undefined;
        this.subject = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = localStorage.getItem("lang");
    }
    FeedBackComponent.prototype.ngOnInit = function () {
        this.loadLanguage(this.language);
    };
    FeedBackComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.subtitle = k.find(function (f) { return f.name == "feedback_info"; }).description[lang];
            _this.title = k.find(function (f) { return f.name == "feedback"; }).description[lang];
            _this.phone = k.find(function (f) { return f.name == "feedback_phone"; }).description[lang];
            _this.country = k.find(function (f) { return f.name == "feedback_country"; }).description[lang];
            _this.comment = k.find(function (f) { return f.name == "feedback_comment"; }).description[lang];
            _this.btnSend = k.find(function (f) { return f.name == "feedback_button_send"; }).description[lang];
            _this.subject = k.find(function (f) { return f.name == "feedback_subject"; }).description[lang];
            _this.sent = k.find(function (f) { return f.name == "feedback_sent"; }).description[lang];
            _this.sending = k.find(function (f) { return f.name == "feedback_sending"; }).description[lang];
        });
    };
    FeedBackComponent.prototype.enviarFormulario = function () {
        var _this = this;
        var msg = {
            asunto: this.asunto,
            telefono: this.telefono,
            pais: this.pais,
            mensaje: this.mensaje,
            user_mail: localStorage.getItem('mail')
        };
        this.stop = true;
        this.ls.emitChange(this.sending);
        this.ms.sendMail(msg).subscribe(function (res) {
            if (res['complete']) {
                _this.cleanFields();
                _this.ls.emitChange(_this.sent);
            }
            console.log(res);
            _this.stop = false;
        });
    };
    FeedBackComponent.prototype.cleanFields = function () {
        this.asunto = "";
        this.telefono = "";
        this.pais = "";
        this.mensaje = "";
    };
    FeedBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed-back',
            template: __webpack_require__("./src/app/feed-back/feed-back.component.html"),
            styles: [__webpack_require__("./src/app/feed-back/feed-back.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__misc_service__["a" /* MiscService */],
            __WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], FeedBackComponent);
    return FeedBackComponent;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.config = {
            apiKey: "AIzaSyCSRIESV0QWel5B6kYsF48dKF6Myo3xcmc",
            authDomain: "livetask-363bb.firebaseapp.com",
            databaseURL: "https://livetask-363bb.firebaseio.com",
            projectId: "livetask-363bb",
            storageBucket: "livetask-363bb.appspot.com",
            messagingSenderId: "376364526338"
        };
        this.google_provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](this.config);
    }
    FirebaseService.prototype.socialAuth = function (provider) {
        var socialProvider;
        switch (provider) {
            case "google":
                socialProvider = this.google_provider;
                break;
            default:
                console.log("Invalid provider.");
                break;
        }
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(socialProvider);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/folder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var FolderService = /** @class */ (function () {
    function FolderService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net';
        this.get_url = this.base_url + '/api/get/folders/';
        this.post_url = this.base_url + '/api/post/folder/';
        this.delete_url = this.base_url + '/api/delete/folder/';
    }
    ;
    FolderService.prototype.getFolders = function (mail) {
        var url = this.get_url + mail;
        return this.http.get(url)
            .pipe();
    };
    FolderService.prototype.addFolder = function (folder) {
        var url = this.post_url;
        var user_mail = localStorage.getItem("mail");
        console.log(folder);
        return this.http.post(url, { folder: folder, user_mail: user_mail }, httpOptions).pipe();
    };
    FolderService.prototype.deleteFolder = function (folder) {
        var url = this.delete_url;
        var user_mail = localStorage.getItem("mail");
        return this.http.post(url, { folder: folder, user_mail: user_mail }, httpOptions).pipe();
    };
    FolderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FolderService);
    return FolderService;
}());



/***/ }),

/***/ "./src/app/general/header-full/header-full.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"d-flex full-header\">\r\n\t<div class=\"d-flex logo-container align-items-center w-100\">\r\n\t\t<img src=\"assets/images/LOGO.png\" alt=\"\">\r\n\t</div>\r\n</header>"

/***/ }),

/***/ "./src/app/general/header-full/header-full.component.scss":
/***/ (function(module, exports) {

module.exports = "#header .logo-container {\n  height: 80px;\n  background-color: #0184d2;\n  position: relative;\n  -webkit-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2); }\n  #header .logo-container img {\n    height: 50px;\n    width: auto; }\n  #header.full-header .logo-container {\n  padding-right: 30px;\n  padding-left: 30px; }\n"

/***/ }),

/***/ "./src/app/general/header-full/header-full.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFullComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderFullComponent = /** @class */ (function () {
    function HeaderFullComponent() {
    }
    HeaderFullComponent.prototype.ngOnInit = function () {
    };
    HeaderFullComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-full',
            template: __webpack_require__("./src/app/general/header-full/header-full.component.html"),
            styles: [__webpack_require__("./src/app/general/header-full/header-full.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderFullComponent);
    return HeaderFullComponent;
}());



/***/ }),

/***/ "./src/app/general/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"d-flex flex-column h-100\">\r\n\t<div class=\"d-flex logo-container justify-content-center align-items-center\">\r\n\t\t<img src=\"assets/images/LOGO.png\" alt=\"livetask\" class=\"full d-none\">\r\n\t\t<img class=\"min\" src=\"https://firebasestorage.googleapis.com/v0/b/todo-adfd5.appspot.com/o/logoblanco.png?alt=media&token=d406184c-b997-4c08-9108-b86ec03b19df\" alt=\"livetask\">\r\n\t</div>\r\n\t<aside class=\"d-flex flex-column\">\r\n\t\t<div class=\"profile-block\" id=\"asd_profile\">\r\n            <app-profile-block></app-profile-block>\r\n\t\t</div>\r\n\t\t<nav class=\"d-flex flex-column h-100\">\r\n\t\t\t<ul class=\"menu-main d-flex flex-column\">\r\n\t\t\t\t<li><a routerLink=\"/inbox\"><i class=\"fa fa-inbox fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{inbox}}</span></a></li>\r\n\t\t\t\t<li><a routerLink=\"\"><i class=\"fa fa-list-ul fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{myWorks}}</span></a></li>\r\n\t\t\t\t<li><a routerLink=\"/tracing\"><i class=\"fa fa-eye fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{follow}}</span></a></li>\r\n\t\t\t\t<li><a routerLink=\"/store\"><i class=\"fa fa-th-large fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{extentions}}</span></a></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"ext-menu-opts d-flex mt-auto mb-0 w-100 flex-column flex-md-row\">\r\n\t\t\t\t<li class=\"w-50\"><a [routerLink]=\"['/feedback']\"><i class=\"fa fa-commenting fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{feedback}}</span></a></li>\r\n\t\t\t\t<li class=\"w-50\"><a (click)=\"closeSession()\"><i class=\"fa fa-sign-out fa-fw\"></i><span class=\"d-none d-md-inline-block\">{{logout}}</span></a></li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t</aside>\r\n</header>"

/***/ }),

/***/ "./src/app/general/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n#header.full-header {\n  width: auto;\n  max-width: 100%; }\n\n#header.full-header .logo-container {\n    padding-right: 30px;\n    padding-left: 30px; }\n\nmain.full-main {\n  width: 100%;\n  height: 100%; }\n\nmain.full-main .main-content {\n    height: 100%; }\n\n#header {\n  width: auto;\n  max-width: 250px;\n  max-height: 100%; }\n\n#header .logo-container {\n    height: 80px;\n    background-color: #0184d2;\n    position: relative;\n    -webkit-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2);\n            box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2); }\n\n#header .logo-container img {\n    height: 50px;\n    width: auto; }\n\n#header aside {\n    height: calc(100% - 80px); }\n\n#header aside .profile-block {\n      padding: 15px 0; }\n\n#header aside .profile-block img {\n        border-radius: 50%;\n        width: 110px;\n        margin-bottom: 8px; }\n\n#header aside .profile-block h4 {\n        font-size: 1em;\n        color: #111; }\n\n#header aside nav {\n      font-size: 0.8em; }\n\n#header aside nav ul {\n        padding: 0; }\n\n#header aside nav ul li {\n          list-style: none;\n          padding: 0; }\n\n#header aside nav ul li a {\n            display: block;\n            padding: 10px 15px;\n            border-top: solid 1px #f1f1f1;\n            color: #111;\n            white-space: nowrap; }\n\n#header aside nav ul li a i {\n              margin-right: 5px;\n              color: #0184d2; }\n\n#header aside nav ul li.active a {\n          background-color: rgba(0, 0, 0, 0.03); }\n\n#header aside nav .ext-menu-opts {\n        font-size: 0.8em; }\n\n#header aside nav .ext-menu-opts li i {\n          font-size: 1.4em; }\n\nmain {\n  width: calc(100% - 250px); }\n\nmain .main-header {\n    height: 80px;\n    background-color: #0184d2;\n    position: relative;\n    z-index: 1;\n    -webkit-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2);\n            box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2); }\n\nmain .main-header h2 {\n      color: #fff;\n      font-size: 1.1em;\n      margin: 0; }\n\nmain .main-header .tools-container {\n      position: absolute;\n      right: 0; }\n\nmain .main-header .tools-container li > a.dropdown-toggle {\n        color: #fff; }\n\nmain .main-header .tools-container li > a.dropdown-toggle:after {\n        content: none; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show {\n        width: 200px;\n        left: initial !important;\n        right: 0 !important;\n        -webkit-transform: none !important;\n                transform: none !important;\n        top: calc(100% + 5px) !important;\n        font-size: 0.7em;\n        border-radius: 10px; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group:nth-child(1) {\n          border-bottom: solid 2px #f2f2f2;\n          padding: 5px 15px; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group:nth-child(2) {\n          padding: 15px 15px 0px 15px; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group h4 {\n          font-size: 1.2em; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group {\n          margin: 0;\n          padding-left: 10px; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group input[type=\"radio\"]:checked ~ label .fa {\n            display: block !important;\n            margin-left: 5px;\n            color: #0184d2; }\n\nmain .main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group label {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n\nmain .main-content {\n    height: calc(100% - 80px);\n    background-color: #fff; }\n\n@media (min-width: 768px) {\n  .logo-container .full {\n    display: block !important; }\n  .logo-container .min {\n    display: none !important; }\n  #header {\n    width: 250px; } }\n"

/***/ }),

/***/ "./src/app/general/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cookieService, router, firebaseDB) {
        this.cookieService = cookieService;
        this.router = router;
        this.firebaseDB = firebaseDB;
        this.texts = undefined;
        this.language = undefined;
        this.myWorks = undefined;
        this.inbox = undefined;
        this.follow = undefined;
        this.extentions = undefined;
        this.feedback = undefined;
        this.logout = undefined;
        this.language = localStorage.getItem("lang");
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.myWorks = k.find(function (f) { return f.name == "myworks"; }).description[_this.language];
            _this.inbox = k.find(function (f) { return f.name == "inbox"; }).description[_this.language];
            _this.follow = k.find(function (f) { return f.name == "follow"; }).description[_this.language];
            _this.extentions = k.find(function (f) { return f.name == "extensions"; }).description[_this.language];
            _this.feedback = k.find(function (f) { return f.name == "feedback"; }).description[_this.language];
            _this.logout = k.find(function (f) { return f.name == "logout"; }).description[_this.language];
        });
    };
    HeaderComponent.prototype.closeSession = function () {
        this.cookieService.removeAll();
        location.reload();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/general/header/header.component.html"),
            styles: [__webpack_require__("./src/app/general/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/general/profile-block/profile-block.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/profile\" class=\"profile-link d-flex flex-column align-items-center\">\r\n    <img *ngIf=\"profile\" [src]=\"profile.image\" alt=\"\">\r\n    <h4 *ngIf=\"profile\" class=\"d-none d-md-block\">{{ profile.name }}</h4>\r\n</a>"

/***/ }),

/***/ "./src/app/general/profile-block/profile-block.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n\nh4 {\n  color: #0184d2; }\n\n@media (min-width: 768px) {\n  img {\n    width: 120px;\n    height: 120px; } }\n"

/***/ }),

/***/ "./src/app/general/profile-block/profile-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileBlockComponent = /** @class */ (function () {
    function ProfileBlockComponent(profileService) {
        this.profileService = profileService;
        this.user_mail = '';
        this.user_mail = localStorage.getItem("mail");
    }
    ProfileBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile(this.user_mail)
            .subscribe(function (data) {
            _this.profile = data;
            localStorage.setItem("token", _this.profile.id);
        });
    };
    ProfileBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-block',
            template: __webpack_require__("./src/app/general/profile-block/profile-block.component.html"),
            styles: [__webpack_require__("./src/app/general/profile-block/profile-block.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]])
    ], ProfileBlockComponent);
    return ProfileBlockComponent;
}());



/***/ }),

/***/ "./src/app/general/select-dialog/select-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<h6 class=\"m-0\">{{title}}</h6>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<div class=\"content\">\t\t\t\t\r\n\t\t\t\t<div class=\"d-flex align-items-center\" *ngFor=\"let option of options\" >\r\n\t\t\t\t\t<input class=\"d-none\" type=\"radio\" [value]=\"option.name\" [id]=\"option.name\" name=\"option\" [(ngModel)]=\"selected\" >\r\n\t\t\t\t\t<label [for]=\"option.name\">\r\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-alert fa-check\"></i>\r\n\t\t\t\t\t\t{{option.name}}\r\n\t\t\t\t\t</label>\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"sendResponse('CANCEL')\">{{btnCancel}}</button>\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"sendResponse('CONFIRM')\">{{btnAccept}}</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/select-dialog/select-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2); }\n  .modal .modal-content {\n    width: 350px;\n    background-color: #fff; }\n  .modal input[name='option'] ~ label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 0.82em;\n    width: 100%; }\n  .modal input[name='option'] ~ label i {\n      border: solid 2px #999999;\n      border-radius: 3px;\n      font-size: 0.7em;\n      color: #016aa8;\n      padding: 3px;\n      margin-right: 3px;\n      width: 18px;\n      height: 18px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .modal input[name='option'] ~ label i:before {\n      opacity: 0; }\n  .modal input[name='option']:checked ~ label i:before {\n    opacity: 1 !important; }\n"

/***/ }),

/***/ "./src/app/general/select-dialog/select-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectDialogComponent = /** @class */ (function () {
    function SelectDialogComponent(firebaseService, firebaseDB) {
        this.firebaseService = firebaseService;
        this.firebaseDB = firebaseDB;
        this.btnAccept = undefined;
        this.btnCancel = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.response = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.language = localStorage.getItem("lang");
    }
    SelectDialogComponent.prototype.ngOnInit = function () {
        this.setSelected();
        this.loadLanguage(this.language);
    };
    SelectDialogComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.btnAccept = k.find(function (f) { return f.name == "inbox_icon_accept"; }).description[lang];
            _this.btnCancel = k.find(function (f) { return f.name == "inbox_icon_cancel"; }).description[lang];
        });
    };
    SelectDialogComponent.prototype.sendResponse = function (action) {
        this.response.emit({
            response: this.selected,
            action: action
        });
    };
    SelectDialogComponent.prototype.setSelected = function () {
        for (var i in this.options) {
            if (this.options[i].selected) {
                this.selected = this.options[i].name;
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectDialogComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectDialogComponent.prototype, "response", void 0);
    SelectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-dialog',
            template: __webpack_require__("./src/app/general/select-dialog/select-dialog.component.html"),
            styles: [__webpack_require__("./src/app/general/select-dialog/select-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], SelectDialogComponent);
    return SelectDialogComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<h2 [innerText]=\"title\"></h2>\r\n</header>\r\n<section class=\"main-content\">\r\n\t<div class=\"inbox-tasks h-100 d-flex flex-column w-100\" id=\"inbox\">\r\n\t\t<div class=\"w-100 h-100 d-flex\">\r\n\t\t\t<ul *ngIf=\"haveTasks()\" class=\"main-list list-unstyled d-flex w-100 flex-column\">\r\n\t\t\t\t<template *ngFor=\"let task of tasks\">\r\n\t\t\t\t\t<li class=\"w-100\" *ngIf=\"belongsHere(task)\">\r\n\t\t\t\t\t\t<div class=\"li-content d-flex h-100\">\r\n\t\t\t\t\t\t\t<div class=\"li-left d-flex justify-content-center align-items-center\">\r\n\t\t\t\t\t\t\t\t<label class=\"task-name m-0\">{{task.name}}</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"li-right d-flex flex-column ml-auto mr-0 justify-content-center align-items-center\">\r\n\t\t\t\t\t\t\t\t<label class=\"from m-0\" *ngIf=\"hasFromName(task);else noHasName\">{{task.from.name}}</label>\r\n\t\t\t\t\t\t\t\t<ng-template class=\"from m-0\" #noHasName>{{task.from_mail}}</ng-template>\r\n\t\t\t\t\t\t\t\t<label class=\"created m-0\">{{task.created.date}}</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"options\">\r\n\t\t\t\t\t\t\t\t<ul class=\"d-flex list-unstyled h-100\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"btn-accept\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" (click)=\"acceptTask($event,task)\">{{btnAccept}}</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"btn-reject\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" (click)=\"rejectTask($event,task)\">{{btnReject}}</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</template>\r\n\t\t\t</ul>\r\n\t\t\t<div *ngIf=\"!haveTasks()\" class=\"without-tasks d-flex w-100 h-100 justify-content-center align-items-center text-center\">\r\n\t\t\t\t<p class=\"m-0\">{{noTasks1}} <br /> {{noTasks2}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n<app-select-dialog *ngIf=\"showSelectDialog\" [options]=\"folders\" [title]=\"selectTitle\" (response)=\"getSelectResponse($event)\" ></app-select-dialog>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep template {\n  display: block; }\n\n::ng-deep .inbox-tasks .main-list template > li {\n  border-bottom: solid 2px #f2f2f2;\n  cursor: pointer;\n  height: 62px;\n  padding: 0px 18px; }\n\n::ng-deep .inbox-tasks .main-list template > li .li-right {\n    color: #607d8b;\n    font-size: 0.8em;\n    font-style: italic; }\n\n::ng-deep .inbox-tasks .main-list template > li .li-right label {\n      line-height: 1.4em; }\n\n::ng-deep .inbox-tasks .main-list template > li .options {\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    width: 0px;\n    overflow: hidden;\n    padding: 10px 0px; }\n\n::ng-deep .inbox-tasks .main-list template > li .options ul li {\n      min-width: 100px; }\n\n::ng-deep .inbox-tasks .main-list template > li .options ul li a {\n        height: 100%;\n        width: 100px;\n        font-size: 0.8em;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: #fff;\n        font-weight: 500;\n        border-radius: 30px; }\n\n::ng-deep .inbox-tasks .main-list template > li .options ul li.btn-accept {\n      margin-right: 10px; }\n\n::ng-deep .inbox-tasks .main-list template > li .options ul li.btn-accept a {\n        background-color: #2ab27b; }\n\n::ng-deep .inbox-tasks .main-list template > li .options ul li.btn-reject a {\n      background-color: #dc3545; }\n\n::ng-deep .inbox-tasks .main-list template > li:hover .li-right {\n  margin-right: 18px !important; }\n\n::ng-deep .inbox-tasks .main-list template > li:hover .options {\n  width: 210px; }\n"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folder_service__ = __webpack_require__("./src/app/folder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InboxComponent = /** @class */ (function () {
    function InboxComponent(route, titleService, taskService, folderService, firebaseDB) {
        this.route = route;
        this.titleService = titleService;
        this.taskService = taskService;
        this.folderService = folderService;
        this.firebaseDB = firebaseDB;
        this.btnAccept = undefined;
        this.btnReject = undefined;
        this.noTasks1 = undefined;
        this.noTasks2 = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.showSelectDialog = false;
        this.selectTitle = undefined;
        this.user_mail = localStorage.getItem("mail");
        this.language = localStorage.getItem("lang");
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.getFolders();
        this.getTasks();
        this.loadLanguage(this.language);
    };
    InboxComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.btnAccept = k.find(function (f) { return f.name == "inbox_taskslide_accept"; }).description[lang];
            _this.btnReject = k.find(function (f) { return f.name == "inbox_taskslide_reject"; }).description[lang];
            var noTaskaux = k.find(function (f) { return f.name == "inbox_info"; }).description[lang];
            _this.noTasks1 = noTaskaux.split(/\n/g)[0];
            _this.noTasks2 = noTaskaux.split(/\n/g)[1];
            _this.title = k.find(function (f) { return f.name == "inbox"; }).description[lang];
            _this.selectTitle = k.find(function (f) { return f.name == "inbox_dialog_title"; }).description[lang];
        });
    };
    InboxComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks(this.user_mail).subscribe(function (data) {
            _this.tasks = data;
        });
    };
    InboxComponent.prototype.getFolders = function () {
        var _this = this;
        this.folderService.getFolders(this.user_mail).subscribe(function (data) {
            _this.folders = data;
        });
    };
    InboxComponent.prototype.belongsHere = function (task) {
        if (task.parent_id == 0 && task.state == 'SEND' && task.dear_mail == this.user_mail) {
            return true;
        }
        return false;
    };
    InboxComponent.prototype.hasFromName = function (task) {
        if (task.from['name']) {
            return true;
        }
        return false;
    };
    InboxComponent.prototype.acceptTask = function (e, task) {
        e.preventDefault();
        this.toselectTask = task;
        this.showSelectDialog = true;
    };
    InboxComponent.prototype.rejectTask = function (e, task) {
        e.preventDefault();
        this.showSelectDialog = false;
        task.state = 'REJECTED';
        for (var i in this.tasks) {
            if (this.tasks[i].id == task.id) {
                this.tasks.splice(+i, 1);
                this.updateTask(task);
                break;
            }
        }
    };
    InboxComponent.prototype.getSelectResponse = function (event) {
        var res = event.response;
        var action = event.action;
        switch (action) {
            case "CONFIRM":
                this.showSelectDialog = false;
                this.toselectTask.folder = res;
                this.toselectTask.state = 'ACCEPTED';
                for (var i in this.tasks) {
                    if (this.tasks[i].id == this.toselectTask.id) {
                        this.tasks.splice(+i, 1);
                        this.updateTask(this.toselectTask);
                        break;
                    }
                }
                break;
            case "CANCEL":
                this.showSelectDialog = false;
                break;
        }
    };
    InboxComponent.prototype.updateTask = function (task) {
        this.taskService.addTask(task).subscribe(function (res) {
            console.log(res);
        });
    };
    InboxComponent.prototype.haveTasks = function () {
        var res = false;
        for (var i in this.tasks) {
            if (this.belongsHere(this.tasks[i])) {
                res = true;
                break;
            }
        }
        return res;
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("./src/app/inbox/inbox.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4__folder_service__["a" /* FolderService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = /** @class */ (function () {
    function LogService() {
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    LogService.prototype.emitChange = function (message) {
        this.emitChangeSource.next(message);
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-full></app-header-full>\r\n<main class=\"d-flex flex-column full-main\">\r\n\t\t\r\n\t<section class=\"main-content w-100 h-100\">\r\n\t\t\r\n\t\t<div class=\"w-100 h-100 d-flex justify-content-center align-items-center login-form container\" id=\"login\">\r\n\t\t\t<!--<form class=\"d-flex flex-column\" (submit)=\"auth($event,mail.value,pass.value,nameuser.value)\">-->\r\n\t\t\t<form class=\"d-flex flex-column\" (submit)=\"auth($event,mail.value,pass.value,nameuser.value)\">\r\n\t\t\t\t\t<div class=\"info-content w-100\">\r\n\t\t\t\t\t\t\t<p>{{text_info1}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"info-content2 w-100\">\r\n\t\t\t\t\t\t\t<p>{{text_info2}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"log-content w-100\">\r\n\t\t\t\t\t<p *ngIf=\"log\">{{log}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-header d-flex\">\r\n\t\t\t\t\t<div class=\"w-50 text-center active change-form login-btn\" (click)=\"changeFormType($event)\">\r\n\t\t\t\t\t\t<h3 class=\"mb-0 text-uppercase\">{{titleTab1}}</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"w-50 text-center change-form register-btn\" (click)=\"changeFormType($event)\">\r\n\t\t\t\t\t\t<h3 class=\"mb-0 text-uppercase\">{{titleTab2}}</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-body d-flex flex-column mb-0\">\r\n\t\t\t\t\t<input [ngClass]=\"{'d-none':!register}\" class=\"form-control mb-2\" type=\"text\" required=\"true\" placeholder=\"{{phName}}\" #nameuser>\r\n\t\t\t\t\t<input id=\"mail\" class=\"form-control mb-2\" type=\"email\" required=\"true\" placeholder=\"{{phMail}}\" #mail>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" required=\"true\" placeholder=\"{{phPass}}\" #pass>\r\n\t\t\t\t\t<div class=\"form-group d-flex flex-row-reverse mt-2\">\r\n\t\t\t\t\t\t<a [ngClass]=\"{'d-none':register}\" href=\"#\" (click)=\"recoveryPassword($event)\"><small>{{recoverPass}}</small></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-footer d-flex flex-column\">\r\n\t\t\t\t\t<div class=\"form-group d-flex flex-column mb-4\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary ml-1 w-100 mb-3\"><span>{{sendText}}</span></button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary google-login w-100 ml-1\" (click)=\"socialSignIn('google')\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-google-plus mr-2\"></i>\r\n\t\t\t\t\t\t\t{{btnGoogle}}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<!--\r\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"changeFormType($event)\">Registrarme</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"registerUser($event,mail.value,pass.value)\">Registrarme</button>-->\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--\t\r\n\t\t\t\t    <div v-if=\"error != 0\">\r\n\t\t\t\t        {{ error }}\r\n\t\t\t\t    </div>\r\n\t\t\t\t-->\r\n\t\t\t\t\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n</main>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "section {\n  height: 100%;\n  background-color: #fff; }\n  section .info-content {\n    position: absolute;\n    top: -110px;\n    font-size: 0.9em;\n    color: #0184d2;\n    font-weight: 600;\n    text-align: center; }\n  section .info-content2 {\n    position: absolute;\n    bottom: -70px;\n    font-size: 0.9em;\n    color: #8eb4cb; }\n  section .info-content2 p {\n      text-align: center; }\n  section .login-form form {\n    position: relative;\n    width: 350px;\n    -webkit-box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2); }\n  section .login-form form .log-content {\n      position: absolute;\n      top: -50px;\n      font-size: 0.9em;\n      color: #ffb500;\n      font-weight: 600;\n      text-align: center; }\n  section .login-form form .form-header div {\n      padding-top: 22px;\n      padding-bottom: 15px;\n      border-bottom: solid 3px #d2d2d2;\n      cursor: pointer; }\n  section .login-form form .form-header div h3 {\n        font-size: 1.01em;\n        font-weight: 600;\n        color: #d2d2d2;\n        margin-bottom: 15px; }\n  section .login-form form .form-header div.active {\n      border-bottom: solid 3px #499bd9; }\n  section .login-form form .form-header div.active h3 {\n        color: #0184d2; }\n  section .login-form form .form-body {\n      padding: 35px 40px 0px; }\n  section .login-form form .form-body input[type='text'].form-control, section .login-form form .form-body input[type='password'].form-control, section .login-form form .form-body input[type='email'].form-control {\n        border: 0;\n        background-color: #f2f2f2;\n        font-size: 0.8em;\n        border-radius: 5px;\n        padding: 10px 15px; }\n  section .login-form form .form-body small {\n        font-size: 0.75em;\n        font-style: italic;\n        margin-right: 5px;\n        font-weight: 500; }\n  section .login-form form .form-footer {\n      padding: 0px 40px; }\n  section .login-form form .btn {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      width: 120px;\n      height: 50px;\n      font-size: 0.85em; }\n  section .login-form form .btn-default {\n      color: #0184d2; }\n  section .login-form form .btn.google-login {\n      background-color: #f92f25;\n      border: solid 1px #f92f25; }\n  section .login-form form .btn.google-login:hover {\n      background-color: #fff;\n      color: #f92f25; }\n  section .login-form form .btn.google-login:hover i {\n        color: #f92f25; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, cookieService, router, firebaseService, firebaseDB, ps) {
        this.authService = authService;
        this.cookieService = cookieService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.firebaseDB = firebaseDB;
        this.ps = ps;
        this.log_data = undefined;
        this.titleTab1 = undefined;
        this.titleTab2 = undefined;
        this.phMail = undefined;
        this.phPass = undefined;
        this.phName = undefined;
        this.recoverPass = undefined;
        this.btnGoogle = undefined;
        this.signError1 = undefined;
        this.signError2 = undefined;
        this.signError3 = undefined;
        this.signError4 = undefined;
        this.signError5 = undefined;
        this.signError6 = undefined;
        this.info1 = undefined;
        this.text_info1 = undefined;
        this.text_info2 = undefined;
        this.register = false;
        this.sendText = undefined;
        this.log = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = navigator.language.split("-")[0] !== undefined ? navigator.language.split("-")[0] : "en";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getCokkie("accessToken");
        this.loadLanguage(this.language);
    };
    LoginComponent.prototype.logIn = function (mail, pass) {
        var _this = this;
        this.authService.logIn(mail, pass)
            .subscribe(function (log_data) {
            console.log(log_data);
            _this.log_data = log_data;
            _this.setCookie();
        });
    };
    LoginComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.titleTab1 = k.find(function (f) { return f.name == "login_button_enter"; }).description[lang];
            _this.titleTab2 = k.find(function (f) { return f.name == "login_button_register"; }).description[lang];
            _this.phMail = k.find(function (f) { return f.name == "login_form_mail"; }).description[lang];
            _this.phPass = k.find(function (f) { return f.name == "login_form_pass"; }).description[lang];
            _this.phName = k.find(function (f) { return f.name == "login_form_name"; }).description[lang];
            _this.recoverPass = k.find(function (f) { return f.name == "login_footer_forgetpass"; }).description[lang];
            _this.sendText = k.find(function (f) { return f.name == "login_button_send"; }).description[lang];
            _this.btnGoogle = k.find(function (f) { return f.name == "login_button_google"; }).description[lang];
            _this.signError1 = k.find(function (f) { return f.name == "login_sign_error_1"; }).description[lang];
            _this.signError2 = k.find(function (f) { return f.name == "login_sign_error_2"; }).description[lang];
            _this.signError3 = k.find(function (f) { return f.name == "login_sign_error_3"; }).description[lang];
            _this.signError4 = k.find(function (f) { return f.name == "login_sign_error_4"; }).description[lang];
            _this.signError5 = k.find(function (f) { return f.name == "login_sign_error_5"; }).description[lang];
            _this.signError6 = k.find(function (f) { return f.name == "login_forget_errormessage"; }).description[lang];
            _this.info1 = k.find(function (f) { return f.name == "login_forget_sendmessage"; }).description[lang];
            _this.text_info1 = k.find(function (f) { return f.name == "login_info_1"; }).description[lang];
            _this.text_info2 = k.find(function (f) { return f.name == "login_info_2"; }).description[lang];
        });
    };
    LoginComponent.prototype.getCokkie = function (name) {
        var accessToken = this.cookieService.get(name);
        console.log(accessToken);
    };
    LoginComponent.prototype.setCookie = function () {
        if (this.log_data !== undefined) {
            var data = this.log_data.user;
            if (data !== undefined) {
                if (data.stsTokenManager) {
                    localStorage.setItem("mail", data.email);
                    localStorage.setItem("accessToken", data.stsTokenManager.accessToken);
                    this.cookieService.put('accessToken', data.stsTokenManager.accessToken);
                    if (data.lang === undefined) {
                        data.lang = navigator.language.split("-")[0];
                        localStorage.setItem("lang", data.lang);
                        this.ps.updateProfile(data);
                    }
                    this.router.navigate(['']);
                    this.log = undefined;
                }
                else if (data.refreshToken) {
                    localStorage.setItem("mail", data.email);
                    localStorage.setItem("accessToken", data.uid);
                    this.cookieService.put('accessToken', data.uid);
                    if (data.lang === undefined) {
                        data.lang = navigator.language.split("-")[0];
                        localStorage.setItem("lang", data.lang);
                        this.ps.updateProfile(data);
                    }
                    this.router.navigate(['']);
                    this.log = undefined;
                }
                else {
                    this.setLog(data.code);
                }
            }
            else {
                this.setLog(this.log_data.code);
            }
        }
    };
    LoginComponent.prototype.setLog = function (code) {
        switch (code) {
            case "auth/invalid-email":
                this.log = this.signError2;
                break;
            case "auth/wrong-password":
                this.log = this.signError5;
                break;
            case "auth/weak-password":
                this.log = this.signError1;
                break;
            case "auth/email-already-in-use":
                this.log = this.signError4;
                break;
            case "auth/recovery-true":
                this.log = this.info1;
                break;
            case "auth/recovery-false":
                this.log = this.signError6;
                break;
            case "auth/user-not-found":
                this.log = this.signError3;
                break;
            default:
                // code...
                break;
        }
    };
    LoginComponent.prototype.registerUser = function (mail, pass, name) {
        var _this = this;
        this.authService.registerUser(mail, pass, name)
            .subscribe(function (data) {
            _this.log_data = data;
            if (_this.log_data.user.uid) {
                _this.setCookie();
            }
            else {
                _this.setLog(data.code);
            }
        });
    };
    LoginComponent.prototype.changeFormType = function (e) {
        e.preventDefault();
        var element = e.target;
        if (!element.classList.contains('change-form')) {
            element = element.parentNode;
        }
        if (!element.classList.contains('active')) {
            if (this.register) {
                this.register = false;
                var loginbtn = document.getElementsByClassName('login-btn')[0];
                var registerbtn = document.getElementsByClassName('register-btn')[0];
                loginbtn.classList.add("active");
                registerbtn.classList.remove("active");
            }
            else {
                this.register = true;
                var loginbtn = document.getElementsByClassName('login-btn')[0];
                var registerbtn = document.getElementsByClassName('register-btn')[0];
                loginbtn.classList.remove("active");
                registerbtn.classList.add("active");
            }
        }
    };
    LoginComponent.prototype.auth = function (e, mail, pass, name) {
        e.preventDefault();
        if (this.register) {
            this.registerUser(mail, pass, name);
        }
        else {
            this.logIn(mail, pass);
        }
    };
    LoginComponent.prototype.recoveryPassword = function (e) {
        var _this = this;
        e.preventDefault();
        var mail = document.getElementById("mail").value;
        if (mail == '' || mail == undefined) {
            this.setLog("auth/invalid-email");
        }
        else {
            this.authService.recoveryPassWord(mail).subscribe(function (data) {
                if (data.complete) {
                    _this.setLog("auth/recovery-true");
                }
                else {
                    _this.setLog("auth/recovery-false");
                }
            });
        }
    };
    LoginComponent.prototype.socialSignIn = function (platform) {
        var _this = this;
        this.firebaseService.socialAuth(platform).then(function (callback) {
            _this.log_data = callback;
            _this.setCookie();
        }).catch(function (err) {
            console.log("NO OKEY: " + err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100 d-flex\">\r\n\t<app-header class=\"h-100\"></app-header>\r\n\t<main class=\"d-flex flex-column\">\t\t\r\n\t\t<router-outlet></router-outlet>\t\t\r\n\t</main>\t\r\n\t<div class=\"message-log\">\r\n\t\t<p *ngIf=\"log\">{{log.message}}</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\r\nTo change this license header, choose License Headers in Project Properties.\r\nTo change this template file, choose Tools | Templates\r\nand open the template in the editor.\r\n*/\n/* \r\n    Created on : Feb 8, 2018, 11:01:52 AM\r\n    Author     : oficina\r\n*/\nmain {\n  width: calc(100% - 57.12px); }\nmain ::ng-deep.main-header {\n    height: 80px;\n    background-color: #0184d2;\n    position: relative;\n    z-index: 1;\n    -webkit-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2);\n            box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.2); }\nmain ::ng-deep.main-header h2 {\n      color: #fff;\n      font-size: 1.1em;\n      margin: 0; }\nmain ::ng-deep.main-header .tools-container {\n      position: absolute;\n      right: 0; }\nmain ::ng-deep.main-header .tools-container li > a.dropdown-toggle {\n        color: #fff; }\nmain ::ng-deep.main-header .tools-container li > a.dropdown-toggle:after {\n        content: none; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show {\n        width: 200px;\n        left: initial !important;\n        right: 0 !important;\n        -webkit-transform: none !important;\n                transform: none !important;\n        top: calc(100% + 5px) !important;\n        font-size: 0.7em;\n        border-radius: 10px; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group:nth-child(1) {\n          border-bottom: solid 2px #f2f2f2;\n          padding: 5px 15px; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group:nth-child(2) {\n          padding: 15px 15px 0px 15px; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group h4 {\n          font-size: 1.2em; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group {\n          margin: 0;\n          padding-left: 10px; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group input[type=\"radio\"]:checked ~ label .fa {\n            display: block !important;\n            margin-left: 5px;\n            color: #0184d2; }\nmain ::ng-deep.main-header .tools-container li.dropdown > ul.dropdown-menu.show .group .form-group label {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\nmain .main-content {\n    height: calc(100% - 80px);\n    background-color: #fff; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > a {\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  font-size: 0.8em; }\nmain > .main-content .tasks > div > .task-list-header > ul > li.dropdown {\n  position: relative; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > a.dropdown-toggle:after {\n  content: none; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > a.dropdown-toggle[aria-expanded=\"true\"] {\n  color: #fff;\n  background-color: transparent;\n  border: none; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show {\n  left: initial !important;\n  right: 0 !important;\n  top: calc(100% - 10px) !important;\n  -webkit-transform: none !important;\n          transform: none !important;\n  width: 200px;\n  padding: 15px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  height: 250px;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show h4 {\n    font-size: 1.2em; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li {\n    padding: 5px 0px;\n    border-bottom: solid 1px #f2f2f2; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li a {\n      color: #111; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li a.ml-auto {\n      color: #dc3545;\n      opacity: 0;\n      -webkit-transition: opacity 0.3s ease-out;\n      transition: opacity 0.3s ease-out; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show > li:hover a.ml-auto {\n    opacity: 1; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show .add-folder input {\n    border: none;\n    border-bottom: solid 1.5px #f2f2f2;\n    border-radius: 0px;\n    font-size: 1em;\n    padding-left: 0px; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > ul.dropdown-menu.show .add-folder button[type=\"submit\"] {\n    border-radius: 50%;\n    padding: 0;\n    height: 30px;\n    width: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #0184d2;\n    color: #fff;\n    padding-top: 1px; }\nmain > .main-content .tasks > div > .task-list-header > ul > li > a.active {\n  border-bottom: solid 7px rgba(0, 0, 0, 0.2); }\nmain > .main-content .tasks .tasks-list > li {\n  border-bottom: solid 2px #f2f2f2;\n  cursor: pointer; }\nmain > .main-content .tasks .tasks-list > li .li-content {\n    height: 50px; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-left {\n      width: 50px; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-left .fa-heart {\n        color: #ff6969; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-left .fa-heart-o {\n        color: #dbdbdb; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-main {\n      width: 100%;\n      font-size: 0.8em; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-right {\n      opacity: 0;\n      -webkit-transition: all 0.3s ease-out;\n      transition: all 0.3s ease-out; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-right ul > li > a {\n        width: 40px; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-right ul > li > a.delete {\n        color: #dc3545; }\nmain > .main-content .tasks .tasks-list > li .li-content .li-right ul > li > a.complete {\n        color: #2ab27b; }\nmain > .main-content .tasks .tasks-list > li:hover .li-right {\n  opacity: 1; }\nmain > .main-content .tasks .tasks-list > li.active {\n  background-color: #fafafa; }\nmain > .main-content .tasks .add-task-quick {\n  padding: 10px 15px;\n  border-top: solid 2px #f2f2f2; }\nmain > .main-content .tasks .add-task-quick .input-group {\n    margin: 0 !important; }\nmain > .main-content .tasks .add-task-quick .input-group input[name=\"task-name\"] {\n      border: none;\n      border-bottom: solid 1.5px #f2f2f2;\n      border-radius: 0px;\n      font-size: 1em;\n      padding-left: 0px; }\nmain > .main-content .tasks .add-task-quick .input-group button[type=\"submit\"] {\n      border-radius: 50%;\n      padding: 0;\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #fff;\n      background-color: #2cb4aa;\n      padding-top: 2px;\n      font-size: 1.5em; }\n::ng-deep .separator {\n  width: 5px;\n  border-left: solid 1px #f2f2f2;\n  border-right: solid 1px #f2f2f2; }\n.message-log {\n  position: fixed;\n  left: -200px;\n  width: 200px;\n  top: 15px;\n  background-color: #34b7b2;\n  font-size: 13px;\n  color: #fff;\n  z-index: 3;\n  padding: 10px 20px;\n  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2); }\n.message-log p {\n    margin-bottom: 0; }\n.message-log.animate {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-name: showMessageLog;\n          animation-name: showMessageLog; }\n@media (min-width: 768px) {\n  main {\n    width: calc(100% - 250px); } }\n@-webkit-keyframes showMessageLog {\n  0% {\n    left: -200px; }\n  20% {\n    left: calc(100% - 215px); }\n  90% {\n    left: calc(100% - 215px); }\n  100% {\n    left: 100%; } }\n@keyframes showMessageLog {\n  0% {\n    left: -200px; }\n  20% {\n    left: calc(100% - 215px); }\n  90% {\n    left: calc(100% - 215px); }\n  100% {\n    left: 100%; } }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service__ = __webpack_require__("./src/app/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(authService, logService) {
        var _this = this;
        this.authService = authService;
        this.logService = logService;
        this.log = undefined;
        logService.changeEmitted$.subscribe(function (data) {
            _this.log = {
                message: data
            };
            document.getElementsByClassName("message-log")[0].classList.add("animate");
            setTimeout(function () {
                document.getElementsByClassName("message-log")[0].classList.remove("animate");
            }, 5000);
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.authService.verifyAccessToken();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/misc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var MiscService = /** @class */ (function () {
    function MiscService(http) {
        this.http = http;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net/api/';
    }
    MiscService.prototype.sendMail = function (msg) {
        var url = this.base_url + 'post/feedback';
        return this.http.post(url, msg, httpOptions).pipe();
    };
    MiscService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MiscService);
    return MiscService;
}());



/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<h2 [innerText]=\"title\"></h2>\r\n\t<div class=\"dropdown filter-button\">\r\n\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t<i class=\"fa fa-fw fa-filter\"></i>\r\n\t\t</button>\r\n\t\t<ul class=\"dropdown-menu dropdown-menu-right flex-column tasks-tools\">\r\n            <form class=\"group mb-2\">\r\n                <h4>{{sortBy}}</h4>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"order-by\" id=\"ob-1\" value=\"1\">\r\n                    <label class=\"mc2-label\" for=\"ob-1\" (click)=\"changeOrderByState($event,0)\" >{{abcSort}} <i class=\"fa fa-fw fa-check d-none\"></i></label>                        \r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"order-by\" id=\"ob-2\" value=\"2\" checked=\"\">\r\n                    <label class=\"mc2-label\" for=\"ob-2\" (click)=\"changeOrderByState($event,1)\">{{createdSort}} <i class=\"fa fa-fw fa-check d-none\"></i></label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"order-by\" id=\"ob-3\" value=\"3\">\r\n                    <label class=\"mc2-label\" for=\"ob-3\" (click)=\"changeOrderByState($event,2)\">{{upgradeSort}} <i class=\"fa fa-fw fa-check d-none\"></i></label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"order-by\" id=\"ob-4\" value=\"4\">\r\n                    <label class=\"mc2-label\" for=\"ob-4\" (click)=\"changeOrderByState($event,3)\">{{favSort}} <i class=\"fa fa-fw fa-check\"></i></label>\r\n                </div>\r\n            </form>\r\n            <form class=\"group\">\r\n                <h4>{{completed}}</h4>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"completed\" id=\"cp-1\" value=\"1\">\r\n                    <label for=\"cp-1\" class=\"mc2-label-completed\" (click)=\"showCompleted($event,1)\">{{show}} <i class=\"fa fa-fw fa-check d-none\"></i></label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"d-none\" type=\"radio\" name=\"completed\" id=\"cp-2\" value=\"0\">\r\n                    <label for=\"cp-2\" class=\"mc2-label-completed\" (click)=\"showCompleted($event,0)\">{{hide}} <i class=\"fa fa-fw fa-check\"></i></label>\r\n                </div>\r\n            </form>\r\n        </ul>\r\n\t</div>\r\n</header>\r\n<section class=\"main-content d-flex\">\r\n\t<app-task-list [orderBy]=\"orderBy\" [complete]=\"complete\"  [tasks]=\"tasks\" [folders]=\"folders\" (passSelectedTask)=\"showTask($event)\" class=\"tasks h-100 d-flex d-md-flex flex-column w-100\"></app-task-list>\r\n\t<div class=\"separator d-none d-md-block\" *ngIf=\"selectedTask\"></div>\r\n\t<app-task-detail *ngIf=\"selectedTask\" [type]=\"selectedType\" [task]=\"selectedTask\" (saveNewTask)=\"saveNewTask($event)\" (passAction)=\"execAction($event)\" [tasks]=\"selectedTaskSons\" class=\"show_pane w-100 h-100 flex-column\"></app-task-detail>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.scss":
/***/ (function(module, exports) {

module.exports = ".filter-button {\n  position: absolute;\n  right: 0; }\n  .filter-button > button {\n    padding: 8px 16px;\n    background-color: transparent;\n    border: 0; }\n  .filter-button > button.dropdown-toggle::after {\n    content: none; }\n  .filter-button > button.dropdown-toggle:focus {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n  .filter-button > button.dropdown-toggle:active {\n    background-color: transparent;\n    border: 0; }\n  .tasks-tools {\n  padding: 15px; }\n  .tasks-tools h4 {\n    font-size: 16.128px; }\n  .tasks-tools .form-group {\n    margin-bottom: 0; }\n  .tasks-tools label {\n    margin-bottom: 0;\n    font-size: 13.44px;\n    width: 100%; }\n  .tasks-tools label i {\n      color: #0184d2; }\n  ::ng-deep app-my-tasks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .main-content {\n  height: calc(100% - 80px);\n  background-color: #fff; }\n  ::ng-deep .add-task-quick {\n  padding: 10px 15px; }\n  ::ng-deep .add-task-quick button[type=\"submit\"] {\n    border-radius: 50% !important;\n    padding: 0;\n    height: 45px;\n    width: 45px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    color: #fff;\n    background-color: #2cb4aa;\n    padding-top: 2px;\n    font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folder_service__ = __webpack_require__("./src/app/folder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_service__ = __webpack_require__("./src/app/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyTasksComponent = /** @class */ (function () {
    function MyTasksComponent(route, folderService, taskService, logService, firebaseDB) {
        this.route = route;
        this.folderService = folderService;
        this.taskService = taskService;
        this.logService = logService;
        this.firebaseDB = firebaseDB;
        this.title = undefined;
        this.user_mail = '';
        this.orderBy = 4;
        this.complete = 0;
        this.selectedType = "";
        this.sortBy = undefined;
        this.abcSort = undefined;
        this.createdSort = undefined;
        this.upgradeSort = undefined;
        this.favSort = undefined;
        this.completed = undefined;
        this.show = undefined;
        this.hide = undefined;
        this.task_created = undefined;
        this.task_sent = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.user_mail = localStorage.getItem("mail");
        this.language = localStorage.getItem("lang");
    }
    MyTasksComponent.prototype.ngOnInit = function () {
        this.getFolders();
        this.getTasks();
        this.loadLanguage(this.language);
    };
    MyTasksComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.sortBy = k.find(function (f) { return f.name == "filter_sorterby"; }).description[lang];
            _this.abcSort = k.find(function (f) { return f.name == "filter_sorterby_abc"; }).description[lang];
            _this.createdSort = k.find(function (f) { return f.name == "filter_sorterby_abc"; }).description[lang];
            _this.upgradeSort = k.find(function (f) { return f.name == "filter_sorterby_upgrade"; }).description[lang];
            _this.completed = k.find(function (f) { return f.name == "filter_completed"; }).description[lang];
            _this.favSort = k.find(function (f) { return f.name == "filter_sorterby_favorites"; }).description[lang];
            _this.hide = k.find(function (f) { return f.name == "filter_completed_hide"; }).description[lang];
            _this.show = k.find(function (f) { return f.name == "filter_completed_show"; }).description[lang];
            _this.title = k.find(function (f) { return f.name == "task"; }).description[lang];
            _this.task_created = k.find(function (f) { return f.name == "task_created"; }).description[lang];
            _this.task_sent = k.find(function (f) { return f.name == "task_sent"; }).description[lang];
        });
    };
    MyTasksComponent.prototype.getFolders = function () {
        var _this = this;
        this.folderService.getFolders(this.user_mail)
            .subscribe(function (data) {
            _this.folders = data;
        });
    };
    MyTasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks(this.user_mail)
            .subscribe(function (data) {
            _this.tasks = data;
        });
    };
    MyTasksComponent.prototype.showTask = function (event) {
        this.selectedTask = event.task;
        this.selectedType = event.type;
        this.selectedTaskSons = this.getSelectedSons(this.selectedTask.id);
        var task_list = document.getElementsByTagName("app-task-list")[0];
        if (!task_list.classList.contains('d-none')) {
            task_list.classList.add('d-none');
            task_list.classList.remove('d-flex');
        }
    };
    MyTasksComponent.prototype.showTaskList = function (event) {
        this.tasks = event.tasks;
        console.log(this.tasks);
    };
    MyTasksComponent.prototype.getSelectedSons = function (task_id) {
        var sons = [];
        for (var i in this.tasks) {
            if (this.tasks[i].parent_id == task_id) {
                sons.push(this.tasks[i]);
            }
        }
        return sons;
    };
    MyTasksComponent.prototype.execAction = function (event) {
        switch (event.action) {
            case "closeTask":
                this.selectedTask = undefined;
                break;
            default:
                // code...
                break;
        }
    };
    MyTasksComponent.prototype.saveNewTask = function (event) {
        var _this = this;
        for (var i in event.tasks) {
            if (event.type == 'new') {
                this.tasks.push(event.tasks[i]);
            }
            this.taskService.addTask(event.tasks[i]).subscribe(function (task_r) {
                if (task_r.dear_mail == task_r.from_mail) {
                    _this.logService.emitChange(_this.task_created);
                }
                else {
                    _this.logService.emitChange(_this.task_sent);
                }
            });
        }
    };
    MyTasksComponent.prototype.changeOrderByState = function (event, val) {
        var element = event.target;
        var list = document.getElementsByClassName("mc2-label");
        Array.from(list).forEach(function (elementx, index, array) {
            var check = elementx.lastChild;
            //(check).classList.remove("d-none");
            check.classList.add("d-none");
        });
        if (element.classList.contains("mc2-label")) {
            element = element.lastChild;
        }
        this.orderBy = val;
        element.classList.remove("d-none");
    };
    MyTasksComponent.prototype.showCompleted = function (event, val) {
        var element = event.target;
        var list = document.getElementsByClassName("mc2-label-completed");
        Array.from(list).forEach(function (elementx, index, array) {
            var check = elementx.lastChild;
            //(check).classList.remove("d-none");
            check.classList.add("d-none");
        });
        if (element.classList.contains("mc2-label-completed")) {
            element = element.lastChild;
        }
        this.complete = val;
        element.classList.remove("d-none");
    };
    MyTasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-tasks',
            template: __webpack_require__("./src/app/my-tasks/my-tasks.component.html"),
            styles: [__webpack_require__("./src/app/my-tasks/my-tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__folder_service__["a" /* FolderService */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4__log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], MyTasksComponent);
    return MyTasksComponent;
}());



/***/ }),

/***/ "./src/app/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ProfileService = /** @class */ (function () {
    function ProfileService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net/api/';
        this.get_url = this.base_url + "get/profile/";
        this.post_url = this.base_url + "post/profile/";
    }
    ;
    ProfileService.prototype.getProfile = function (mail) {
        var url = this.get_url + mail;
        return this.http.get(url)
            .pipe();
    };
    ProfileService.prototype.updateProfile = function (profile) {
        var url = this.post_url + profile.mail;
        return this.http.post(url, profile, httpOptions).pipe();
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<h2>{{title}}</h2>\r\n</header>\r\n<section class=\"main-content\">\r\n\t<div class=\"inbox-tasks h-100 d-flex flex-column w-100\" id=\"profile\">\r\n\t\t<form (submit)=\"saveProfile()\" *ngIf=\"profile\" class=\"pt-5 text-center pl-2 pr-2 pr-md-4 pl-md-4\">\r\n\t\t\t<div class=\"w-100 text-center\">\r\n\t\t\t\t<figure>\r\n\t\t\t\t\t<img class=\"profileImg\" src=\"{{profile.image}}\" alt=\"\">\r\n\t\t\t\t\t<label for=\"imgSelect\">\r\n\t\t\t\t\t\t<i class=\"fa fa-camera\"></i>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</figure>\r\n\t\t\t</div>\r\n\t\t\t<input class=\"d-none\" type=\"file\" name=\"imgSelect\" id=\"imgSelect\" accept=\".png, .jpg, .jpeg\" (input)=\"changeImg($event)\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"profile.name\">\r\n\t\t\t<label class=\"form-control text-left\">{{profile.mail}}</label>\r\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{btnSave}}</button>\r\n\t\t</form>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep app-profile {\n  height: 100%; }\n\nfigure {\n  display: inline-block;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: white;\n  -webkit-box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.2);\n  position: relative; }\n\nfigure img {\n    width: 150px;\n    height: 150px;\n    border: solid 1px #e3e3e3;\n    border-radius: 50%; }\n\nfigure label[for=\"imgSelect\"] {\n    position: absolute;\n    margin: 0;\n    width: 42px;\n    height: 42px;\n    color: #fff;\n    background-color: #2bb6aa;\n    border-radius: 50%;\n    right: 10px;\n    bottom: 5px;\n    cursor: pointer; }\n\nfigure label[for=\"imgSelect\"] i {\n      vertical-align: middle;\n      line-height: 44px; }\n\nform .form-control {\n  color: #444;\n  border: 0px;\n  border-bottom: solid 1px #dee2e6;\n  /* box-shadow: none; */\n  margin-bottom: 15px;\n  overflow: hidden; }\n\n.btn-primary {\n  margin-top: 20px;\n  background-color: #2bb6aa;\n  border-color: #2bb6aa; }\n\n.btn-primary:hover {\n  background-color: transparent;\n  border-color: #2bb6aa;\n  color: #2bb6aa; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service__ = __webpack_require__("./src/app/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(pf, ls, firebaseDB) {
        var _this = this;
        this.pf = pf;
        this.ls = ls;
        this.firebaseDB = firebaseDB;
        this.title = undefined;
        this.btnSave = undefined;
        this.profile_updated = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.mail = localStorage.getItem("mail");
        this.language = localStorage.getItem("lang");
        pf.getProfile(this.mail).subscribe(function (data) {
            _this.profile = data;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadLanguage(this.language);
    };
    ProfileComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.title = k.find(function (f) { return f.name == "myprofile"; }).description[lang];
            _this.btnSave = k.find(function (f) { return f.name == "myprofile_save"; }).description[lang];
            _this.profile_updated = k.find(function (f) { return f.name == "myprofile_save_data"; }).description[lang];
        });
    };
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        this.pf.updateProfile(this.profile).subscribe(function (response) {
            _this.ls.emitChange(_this.profile_updated);
        });
    };
    ProfileComponent.prototype.changeImg = function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = this.fileOnload;
        reader.readAsDataURL(file);
    };
    ProfileComponent.prototype.fileOnload = function (e) {
        var result = e.target.result;
        document.getElementsByClassName("profileImg")[0].setAttribute("src", result);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/store-detail/store-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mc2-col flex-column w-100\">\r\n\t<div class=\"option-row row-mc2 d-flex\">\r\n\t\t<div class=\"left-content\">\r\n\t\t\t<img [src]=\"extension.logoImg\">\r\n\t\t</div>\r\n\t\t<div class=\"center-content d-flex flex-column justify-content-center\">\r\n\t\t\t <span class=\"name\">{{groups}}</span>\r\n\t\t\t <span class=\"price\">{{free}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"right-content d-flex align-items-center\">\r\n\t\t\t<label class=\"install-btn\" (click)=\"registerUser()\" *ngIf=\"isInstalled;else uninstallBtn\">{{install}}</label>\r\n\t\t\t<ng-template #uninstallBtn>\r\n\t\t\t\t<a class=\"install-btn\" [routerLink]=\"['/extension',extension.id]\">{{open}}</a>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"images-row row-mc2 d-flex flex-column\">\r\n\t\t<h4>{{images}}</h4>\r\n\t\t<div class=\"carousel-content\">\r\n\t\t\t<ul class=\"list-unstyled carousel\">\r\n\t\t\t\t<li *ngFor=\"let item of extension.carousel\" ><img [src]=\"item.image\"></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"description-row row-mc2 d-flex\">\r\n\t\t<div class=\"d-flex flex-column\">\r\n\t\t\t<h4>{{description}}</h4>\r\n\t\t\t<p>{{extension.longDesc[language]}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/store-detail/store-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep app-store-detail {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 100%;\n  overflow-x: hidden; }\n  ::ng-deep app-store-detail h4 {\n    font-size: 0.95em;\n    color: #565656;\n    font-weight: 500;\n    margin-bottom: 0px;\n    margin-top: 12px; }\n  ::ng-deep app-store-detail .mc2-col {\n    padding: 15px 25px; }\n  ::ng-deep app-store-detail .option-row {\n    padding-bottom: 15px;\n    margin-bottom: 5px;\n    border-bottom: solid 1px #f2f2f2; }\n  ::ng-deep app-store-detail .option-row .left-content img {\n      width: 75px; }\n  ::ng-deep app-store-detail .option-row .center-content {\n      width: 100%;\n      padding-left: 10px; }\n  ::ng-deep app-store-detail .option-row .center-content .name {\n        line-height: 1;\n        font-size: 1em;\n        font-weight: 500;\n        color: #0184d2; }\n  ::ng-deep app-store-detail .option-row .center-content .price {\n        font-size: 0.7em;\n        font-weight: 500;\n        color: #ccc;\n        line-height: 1;\n        margin-top: 2px; }\n  ::ng-deep app-store-detail .option-row .right-content label {\n      margin-bottom: 0;\n      border: solid 2px #0184d2;\n      padding: 8px 30px;\n      color: #0184d2;\n      border-radius: 5px;\n      -webkit-transition: all 0.3s ease-out;\n      transition: all 0.3s ease-out;\n      cursor: pointer; }\n  ::ng-deep app-store-detail .option-row .right-content label:hover {\n      background-color: #0184d2;\n      color: #fff !important; }\n  ::ng-deep app-store-detail .images-row .carousel-content {\n    overflow-x: scroll; }\n  ::ng-deep app-store-detail .images-row .carousel-content .carousel {\n      white-space: nowrap; }\n  ::ng-deep app-store-detail .images-row .carousel-content .carousel li {\n        height: auto !important;\n        width: 250px;\n        display: inline-block; }\n  ::ng-deep app-store-detail .images-row .carousel-content .carousel li img {\n          width: 100%;\n          height: auto; }\n  ::ng-deep app-store-detail .images-row .carousel-content .carousel li:nth-child(1) {\n        margin-left: -15px; }\n  ::ng-deep app-store-detail .description-row {\n    padding-top: 10px; }\n  ::ng-deep app-store-detail .description-row p {\n      font-size: 0.8em;\n      line-height: 1.2;\n      margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/store-detail/store-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_extension__ = __webpack_require__("./src/app/Models/extension.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extension_service__ = __webpack_require__("./src/app/extension.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreDetailComponent = /** @class */ (function () {
    function StoreDetailComponent(extensionService, firebaseDB) {
        this.extensionService = extensionService;
        this.firebaseDB = firebaseDB;
        this.isInstalled = true;
        this.prueba = "asdxx";
        this.groups = undefined;
        this.free = undefined;
        this.install = undefined;
        this.open = undefined;
        this.images = undefined;
        this.description = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = localStorage.getItem("lang");
    }
    StoreDetailComponent.prototype.ngOnInit = function () {
        console.log(this.extension);
        console.log(this.userExtensions);
        this.verifyInstalled();
        this.loadLanguage(this.language);
    };
    StoreDetailComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.groups = k.find(function (f) { return f.name == "store_groups"; }).description[lang];
            _this.free = k.find(function (f) { return f.name == "store_free"; }).description[lang];
            _this.install = k.find(function (f) { return f.name == "store_install"; }).description[lang];
            _this.images = k.find(function (f) { return f.name == "store_images"; }).description[lang];
            _this.description = k.find(function (f) { return f.name == "store_description"; }).description[lang];
        });
    };
    StoreDetailComponent.prototype.registerUser = function () {
        this.extensionService.setUserExtension(this.extension).subscribe(function (response) {
            console.log(response);
        });
    };
    StoreDetailComponent.prototype.verifyInstalled = function () {
        for (var i in this.userExtensions) {
            if (this.userExtensions[i] !== null && this.userExtensions[i].id == this.extension.id) {
                this.isInstalled = false;
                break;
            }
        }
    };
    StoreDetailComponent.prototype.unregisterUser = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Models_extension__["a" /* Extension */])
    ], StoreDetailComponent.prototype, "extension", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], StoreDetailComponent.prototype, "userExtensions", void 0);
    StoreDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-detail',
            template: __webpack_require__("./src/app/store-detail/store-detail.component.html"),
            styles: [__webpack_require__("./src/app/store-detail/store-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__extension_service__["a" /* ExtensionService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], StoreDetailComponent);
    return StoreDetailComponent;
}());



/***/ }),

/***/ "./src/app/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<label *ngIf=\"selectedExtension\" class=\"toBack-btn\" (click)=\"toBack()\"><i class=\"fa fa-angle-left\"></i></label>\r\n\t<h2 [innerText]=\"title\"></h2>\r\n</header>\r\n<section>\r\n\t<ng-template #extensionList>\r\n\t\t<ul class=\"d-flex w-100 h-100\">\r\n\t\t\t<li *ngFor=\"let ext of extensions\" class=\"d-flex\">\r\n\t\t\t\t<div class=\"li-content d-flex w-100 h-100\" (click)=\"showAppDetail(ext)\">\r\n\t\t\t\t\t<div class=\"d-flex li-left\">\r\n\t\t\t\t\t\t<img [src]=\"ext.logoImg\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"li-center d-flex flex-column\">\r\n\t\t\t\t\t\t<span class=\"name\">{{ext.name.es}}\t</span>\r\n\t\t\t\t\t\t<span class=\"shortDesc\">{{ext.shortDesc[language]}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"li-right d-flex\">\r\n\t\t\t\t\t\t<label class=\"price\" *ngIf=\"isFree(ext);else isPayed\">Free</label>\r\n\t\t\t\t\t\t<ng-template>\r\n\t\t\t\t\t\t\t<label class=\"price\" #isPayed>$USD {{ext.price}}</label>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</ng-template>\r\n\t<app-store-detail *ngIf=\"selectedExtension;else extensionList\" [extension]=\"selectedExtension\" [userExtensions]=\"user_extensions\"></app-store-detail>\r\n</section>"

/***/ }),

/***/ "./src/app/store/store.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep app-store {\n  height: 100%; }\n  ::ng-deep app-store .toBack-btn {\n    color: #fff;\n    font-size: 2.2em;\n    position: absolute;\n    left: 25px; }\n  ::ng-deep app-store section {\n    height: calc(100% - 80px);\n    background-color: #fff; }\n  ::ng-deep app-store section ul {\n      padding: 15px 0 0 0;\n      margin: 0; }\n  ::ng-deep app-store section ul li {\n        height: 50px;\n        padding: 0 15px;\n        width: 100%; }\n  ::ng-deep app-store section ul li .li-left {\n          width: 50px; }\n  ::ng-deep app-store section ul li .li-left img {\n            width: 50px;\n            height: auto; }\n  ::ng-deep app-store section ul li .li-center {\n          width: 100%;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          padding-left: 10px; }\n  ::ng-deep app-store section ul li .li-center .name {\n            font-size: 1em;\n            font-weight: 500;\n            color: #0184d2;\n            line-height: 1; }\n  ::ng-deep app-store section ul li .li-center .shortDesc {\n            font-size: 0.7em;\n            font-weight: 500;\n            color: #ccc;\n            line-height: 1;\n            margin-top: 2px; }\n  ::ng-deep app-store section ul li .li-right {\n          width: 100px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  ::ng-deep app-store section ul li .li-right label {\n            border: solid 1px #0566a0;\n            border-radius: 5px;\n            padding: 0px 15px;\n            margin: 0;\n            color: #ffffff;\n            background-color: #0184d2;\n            font-size: 0.9em;\n            font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extension_service__ = __webpack_require__("./src/app/extension.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreComponent = /** @class */ (function () {
    function StoreComponent(route, titleService, extensionService, firebaseDB) {
        this.route = route;
        this.titleService = titleService;
        this.extensionService = extensionService;
        this.firebaseDB = firebaseDB;
        this.selectedExtension = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = localStorage.getItem("lang");
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.getExtensions();
        this.getUserExtensions();
        this.loadLanguage(this.language);
    };
    StoreComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.title = k.find(function (f) { return f.name == "extensions"; }).description[lang];
        });
    };
    StoreComponent.prototype.getExtensions = function () {
        var _this = this;
        this.extensionService.getApps().subscribe(function (data) {
            _this.extensions = data;
        });
    };
    StoreComponent.prototype.isFree = function (ext) {
        if (ext.price == 0) {
            return true;
        }
        return false;
    };
    StoreComponent.prototype.showAppDetail = function (ext) {
        console.log(ext);
        this.selectedExtension = ext;
    };
    StoreComponent.prototype.toBack = function () {
        this.selectedExtension = undefined;
    };
    StoreComponent.prototype.getUserExtensions = function () {
        var _this = this;
        this.extensionService.getUserExtension().subscribe(function (data) {
            _this.user_extensions = data;
        });
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store',
            template: __webpack_require__("./src/app/store/store.component.html"),
            styles: [__webpack_require__("./src/app/store/store.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__extension_service__["a" /* ExtensionService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/task-detail/task-detail.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"w-100 h-100 d-flex flex-column\">\r\n        <div v-if=\"task === null\"></div>\r\n        <div class=\"task-details item\" [ngClass]=\"{'subTask':(task.parent_id !== 0)}\"  v-else>\r\n            <div class=\"task-details-header item-header\">\r\n                <div class=\"left\" (click)=\"turnBack($event)\">\r\n                    <i class=\"fa fa-angle-left fa-2x\"></i>\r\n                </div>\r\n                <div class=\"title\">\r\n                    <input type=\"text\" [(ngModel)]=\"task.name\" />                 \r\n                </div>\r\n                <div class=\"right\" (click)=\"sendTask($event)\">\r\n                    <i class=\"fa \" [ngClass]=\"(task.parent_id == 0)?'fa-send':'fa-check'\" ></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"task-details-content item-content d-flex flex-column\">\r\n                <div class=\"form-group mc2-row\">\r\n                    <label for=\"task-details-to\">{{dear}}:</label>\r\n                    <input class=\"form-control\" name=\"task-details-to\" type=\"text\" [(ngModel)]=\"task.dear_mail\">\r\n                </div>\r\n                <div class=\"form-group mc2-row\">\r\n                    <label for=\"task-details-from\">{{from}}:</label>\r\n                    <input class=\"form-control\" name=\"task-details-from\" type=\"text\" [(ngModel)]=\"task.from_mail\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" placeholder=\"{{note}}\" [(ngModel)]=\"task.description\"></textarea>\r\n                </div>\r\n                <div class=\"form-group mb-0 mt-auto d-flex flex-column\">                    \r\n                    <div class=\"d-flex\">\r\n                        <label class=\"date-btn\">                            \r\n                            <input [owlDateTime]=\"dt1\" [(ngModel)]=\"task_expiration_date\" [min]=\"min\" (dateTimeChange)=\"expirationTimeChange($event)\">\r\n                            <span class=\"trigger\" [owlDateTimeTrigger]=\"dt1\">\r\n                                <i class=\"fa fa-calendar mr-2\"></i>\r\n                                {{task_expiration_label}}\r\n                            </span>\r\n                            <owl-date-time #dt1 [hour12Timer]=\"true\" ></owl-date-time>\r\n                        </label>\r\n                        <label class=\"date-btn\">                            \r\n                            <input [owlDateTime]=\"dt2\" [(ngModel)]=\"task_alert_date\" [min]=\"min\" (dateTimeChange)=\"alertTimeChange($event)\">\r\n                            <span class=\"trigger\" [owlDateTimeTrigger]=\"dt2\">\r\n                                <i class=\"fa fa-bell mr-2\"></i>\r\n                                {{task_alert_label}}\r\n                            </span>\r\n                            <owl-date-time #dt2 [hour12Timer]=\"true\" ></owl-date-time>\r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"d-flex flex-column list-unstyled sub_task_list m-0\">\r\n                        <template *ngFor=\"let s_task of tasks\">\r\n                            <li *ngIf=\"isSon(s_task) && isActive(s_task)\" class=\"d-flex\">\r\n                                <div class=\"s_task_container d-flex w-100\" (click)=\"showSubTask(s_task)\">\r\n                                    <div class=\"li-left d-flex justify-content-center align-items-center\">\r\n                                        <i class=\"fa fa-circle\"></i>\r\n                                    </div>\r\n                                    <div class=\"li-main d-flex justify-content-center align-items-center\">\r\n                                        <label class=\"m-0\">{{ s_task.name }}</label>\r\n                                    </div>\r\n                                    <div class=\"li-right mr-0 ml-auto d-flex justify-content-center align-items-center\">\r\n                                        <label class=\"m-0\">{{ s_task.dear_mail }}</label>                                    \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"buttons\">\r\n                                    <a class=\"rm-subtask btn btn-danger btn-sm\" (click)=\"removeSubTask(s_task)\">{{delSubTask}}</a>\r\n                                </div>\r\n                            </li>\r\n                        </template>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <form class=\"task-detailt-footer item-footer add-subtask-form input-group mt-auto mb-0\" (submit)=\"addSubTask($event)\">\r\n                <div class=\"input-group mb-3\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"sub_task_name\" placeholder=\"{{newSubTaskText}}\" [(ngModel)]=\"sub_task_name\">\r\n                    <div class=\"input-group-append d-flex align-items-center\">\r\n                        <button class=\"btn\" type=\"submit\"><i class=\"fa fa-fw fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\r\nTo change this license header, choose License Headers in Project Properties.\r\nTo change this template file, choose Tools | Templates\r\nand open the template in the editor.\r\n*/\n/* \r\n    Created on : Feb 9, 2018, 11:37:06 AM\r\n    Author     : oficina\r\n*/\n::ng-deep .input-group.date .input-group-addon {\n  color: #607d8b;\n  height: 50px; }\n::ng-deep .date-btn {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #607d8b;\n  height: 54px;\n  margin: 0; }\n::ng-deep .date-btn input {\n    height: 0;\n    width: 0;\n    padding: 0;\n    border: 0; }\n.task-details.item.subTask .item-header {\n  background-color: #2cb4aa; }\n/*\r\n::ng-deep .bootstrap-datetimepicker-widget{\r\n    font-size: 0.9em;\r\n    table td {\r\n        height: auto!important;\r\n        line-height: 1!important;\r\n        span{\r\n            height: auto!important;\r\n            line-height: 1!important;\r\n        }\r\n        a{\r\n            padding: 0!important;\r\n        }\r\n    }\r\n    li.picker-switch {\r\n        display: none;\r\n    }\r\n    button[data-action] {\r\n        padding: 0px 6px!important;\r\n        font-size: 1em;\r\n    }    \r\n}\r\n\r\n::ng-deep input[type=\"text\"]:disabled{\r\n    background-color: #fff;\r\n}*/\n::ng-deep .show_pane > div {\n  position: relative;\n  overflow: hidden; }\n::ng-deep .show_pane > div > .item {\n    height: 100%; }\n::ng-deep .show_pane > div > .item .sub_task_list li {\n      font-size: 0.8em;\n      padding: 5px 15px;\n      border-top: solid 1px #f2f2f2; }\n::ng-deep .show_pane > div > .item .sub_task_list li .s_task_container {\n        -webkit-transition: all 0.3s ease-out;\n        transition: all 0.3s ease-out; }\n::ng-deep .show_pane > div > .item .sub_task_list li .s_task_container .li-left {\n          font-size: 0.5em;\n          color: #607d8b; }\n::ng-deep .show_pane > div > .item .sub_task_list li .s_task_container .li-main {\n          padding-left: 8px; }\n::ng-deep .show_pane > div > .item .sub_task_list li .buttons {\n        width: 0px;\n        overflow: hidden;\n        -webkit-transition: all 0.3s ease-out;\n        transition: all 0.3s ease-out; }\n::ng-deep .show_pane > div > .item .sub_task_list li .buttons .btn {\n          margin-left: 8px;\n          color: #fff; }\n::ng-deep .show_pane > div > .item .sub_task_list li:hover .s_task_container {\n      width: calc(100% - 75.23px) !important; }\n::ng-deep .show_pane > div > .item .sub_task_list li:hover .buttons {\n      width: 75.23px; }\n::ng-deep .show_pane > div > .item > .item-header {\n      height: 53px;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background-color: #0184d2;\n      color: #fff; }\n::ng-deep .show_pane > div > .item > .item-header .left, ::ng-deep .show_pane > div > .item > .item-header .right {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 50px;\n        cursor: pointer; }\n::ng-deep .show_pane > div > .item > .item-header .left {\n        padding-left: 15px; }\n::ng-deep .show_pane > div > .item > .item-header .right {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: reverse;\n            -ms-flex-flow: row-reverse;\n                flex-flow: row-reverse;\n        padding-right: 15px;\n        font-size: 1.2em; }\n::ng-deep .show_pane > div > .item > .item-header .title {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: calc(100% - 67px); }\n::ng-deep .show_pane > div > .item > .item-header .title input {\n          color: #fff;\n          background-color: transparent;\n          border: none;\n          text-align: center; }\n::ng-deep .show_pane > div > .item > .item-content {\n      font-size: 0.8em;\n      height: calc(100% - 53px - 67px); }\n::ng-deep .show_pane > div > .item > .item-content .form-group.mc2-row {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin: 0;\n        padding: 0px 15px;\n        border-bottom: solid 2px #f2f2f2; }\n::ng-deep .show_pane > div > .item > .item-content .form-group.mc2-row label {\n          width: 55px;\n          margin-bottom: 0; }\n::ng-deep .show_pane > div > .item > .item-content .form-group.mc2-row .form-control {\n          font-size: 0.9em;\n          padding: 10px 15px 10px 0px;\n          border: none;\n          border-radius: 0; }\n::ng-deep .show_pane > div > .item > .item-content textarea.form-control {\n        border: none;\n        border-radius: 0px;\n        font-size: 0.9em;\n        padding: 10px 15px;\n        resize: none; }\n::ng-deep .show_pane > div > .item > .item-content .date-input {\n        height: 50px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: #607D8B; }\n::ng-deep .show_pane > div > .item > .item-content .date-input label {\n          margin-bottom: 0;\n          margin-left: 5px; }\n::ng-deep .show_pane > div > .item > .item-footer {\n      padding: 10px 15px;\n      border-top: solid 2px #f2f2f2; }\n::ng-deep .show_pane > div > .item > .item-footer .input-group {\n        margin: 0 !important; }\n::ng-deep .show_pane > div > .item > .item-footer .input-group input[name=\"task-name\"] {\n          border: none;\n          border-bottom: solid 1.5px #f2f2f2;\n          border-radius: 0px;\n          font-size: 1em;\n          padding-left: 0px; }\n::ng-deep .show_pane > div > .item > .item-footer .input-group button[type=\"submit\"] {\n          border-radius: 50%;\n          padding: 0;\n          height: 45px;\n          width: 45px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          color: #fff;\n          background-color: #2cb4aa;\n          padding-top: 2px;\n          font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_task__ = __webpack_require__("./src/app/Models/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(dateTimeAdapter, firebaseDB) {
        this.firebaseDB = firebaseDB;
        this.passAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveNewTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.task_expiration_label = undefined;
        this.task_alert_label = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.min = new Date();
        this.sub_task_name = '';
        this.dear = undefined;
        this.from = undefined;
        this.delSubTask = undefined;
        this.expiration = undefined;
        this.expirationDate = undefined;
        this.alert = undefined;
        this.alertDate = undefined;
        this.note = undefined;
        this.newSubTaskText = undefined;
        this.language = localStorage.getItem("lang");
        dateTimeAdapter.setLocale(this.language);
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.loadLanguage(this.language);
    };
    TaskDetailComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.dear = k.find(function (f) { return f.name == "newtask_dear"; }).description[lang];
            _this.from = k.find(function (f) { return f.name == "newtask_from"; }).description[lang];
            _this.delSubTask = k.find(function (f) { return f.name == "newtask_delsubtask"; }).description[lang];
            _this.expiration = k.find(function (f) { return f.name == "newtask_expiration"; }).description[lang];
            _this.alert = k.find(function (f) { return f.name == "newtask_alert"; }).description[lang];
            _this.alertDate = k.find(function (f) { return f.name == "newtask_alertdate"; }).description[lang];
            _this.note = k.find(function (f) { return f.name == "newtask_note"; }).description[lang];
            _this.newSubTaskText = k.find(function (f) { return f.name == "newtask_addsubtask"; }).description[lang];
        });
    };
    TaskDetailComponent.prototype.ngAfterViewInit = function () {
        this.showTaskDates();
        this.tasks.push(this.task);
    };
    TaskDetailComponent.prototype.turnBack = function (event) {
        if (this.task.parent_id == 0) {
            this.passAction.emit({ action: "closeTask" });
            var task_list = document.getElementsByTagName("app-task-list")[0];
            if (task_list.classList.contains('d-none')) {
                task_list.classList.add('d-flex');
                task_list.classList.remove('d-none');
            }
        }
        else {
            for (var i in this.tasks) {
                if (this.tasks[i].id == this.task.parent_id) {
                    this.task = this.tasks[i];
                    this.showTaskDates();
                    break;
                }
            }
        }
    };
    TaskDetailComponent.prototype.sendTask = function (event) {
        if (this.task.parent_id !== 0) {
            for (var i in this.tasks) {
                if (this.tasks[i].id == this.task.parent_id) {
                    this.task = this.tasks[i];
                    this.showTaskDates();
                    break;
                }
            }
        }
        else {
            if (this.task.dear_mail !== this.task.from_mail) {
                this.task.state = 'SEND';
            }
            this.saveNewTask.emit({ tasks: this.tasks, type: this.type });
        }
    };
    TaskDetailComponent.prototype.closeExpirationPicker = function (event) {
        if (this.task_expiration_date == undefined) {
            this.task_expiration_label = this.expiration;
        }
        else {
            console.log(event);
            this.task_expiration_label = this.expirationDate.toUpperCase();
        }
    };
    TaskDetailComponent.prototype.expirationTimeChange = function (event) {
        var fecha = this.task_expiration_date;
        var year = fecha.getFullYear();
        var month = '';
        if ((fecha.getMonth() + 1) < 10) {
            month = "0" + (fecha.getMonth() + 1);
        }
        else {
            month = "" + (fecha.getMonth() + 1);
        }
        var day = "";
        if (fecha.getDate() < 10) {
            day = "0" + fecha.getDate();
        }
        else {
            day = "" + fecha.getDate();
        }
        var hours = '';
        if (fecha.getHours() < 10) {
            hours = "0" + fecha.getHours();
        }
        else {
            hours = "" + fecha.getHours();
        }
        var minutes = '';
        if (fecha.getMinutes() < 10) {
            minutes = "0" + fecha.getMinutes();
        }
        else {
            minutes = "" + fecha.getMinutes();
        }
        var millisecond = fecha.getMilliseconds();
        console.log(hours);
        console.log(minutes);
        var time = this.getFormat12Time(hours + ':' + minutes);
        var expiration = {
            activate: true,
            date: year + '-' + (month) + '-' + day,
            time: time
        };
        this.task_expiration_label = day + '-' + (month) + '-' + year + ' ' + time;
        this.task.expiration = expiration;
    };
    TaskDetailComponent.prototype.getFormat12Time = function (time) {
        console.log(time);
        var timeString = time;
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? " AM" : " PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        return timeString;
    };
    TaskDetailComponent.prototype.getFormat24Time = function (time) {
        var H = +time.substr(0, 2);
        var M = +time.substr(2, 2);
        var ampm = time.substr(-2, 2);
        if (ampm == 'PM') {
            H = H + 12;
        }
        return ampm;
    };
    TaskDetailComponent.prototype.alertTimeChange = function (event) {
        var fecha = this.task_alert_date;
        var year = fecha.getFullYear();
        var month = '';
        if ((fecha.getMonth() + 1) < 10) {
            month = "0" + (fecha.getMonth() + 1);
        }
        else {
            month = "" + (fecha.getMonth() + 1);
        }
        var day = "";
        if (fecha.getDate() < 10) {
            day = "0" + fecha.getDate();
        }
        else {
            day = "" + fecha.getDate();
        }
        var hours = '';
        if (fecha.getHours() < 10) {
            hours = "0" + fecha.getHours();
        }
        else {
            hours = "" + fecha.getHours();
        }
        var minutes = '';
        if (fecha.getMinutes() < 10) {
            minutes = "0" + fecha.getMinutes();
        }
        else {
            minutes = "" + fecha.getMinutes();
        }
        var millisecond = fecha.getMilliseconds();
        var time = this.getFormat12Time(hours + ':' + minutes);
        var alert = {
            activate: true,
            date: year + '-' + (month) + '-' + day,
            time: time
        };
        this.task_alert_label = day + '-' + (month) + '-' + year + ' ' + time;
        this.task.alert = alert;
    };
    TaskDetailComponent.prototype.closeAlertPicker = function (event) {
        if (this.task_alert_date == undefined) {
            this.task_alert_label = this.alert;
        }
        else {
            console.log(event);
            this.task_alert_label = this.alertDate.toUpperCase();
        }
    };
    TaskDetailComponent.prototype.isSon = function (task) {
        if (this.task.id == task.parent_id) {
            return true;
        }
        return false;
    };
    TaskDetailComponent.prototype.addSubTask = function (event) {
        event.preventDefault();
        if (this.sub_task_name !== '') {
            var date = new Date();
            var alert_1 = { activate: false };
            var created = {
                date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                millisecond: date.getMilliseconds(),
                time: date.getTime(),
            };
            var folder = this.task.folder;
            var dear = this.task.dear;
            var dear_mail = this.task.dear_mail;
            var description = '';
            var expiration = {
                activate: false
            };
            var favorite = 0;
            var from = {
                mail: localStorage.getItem("mail")
            };
            var from_mail = localStorage.getItem("mail");
            var id = localStorage.getItem("token") + '__' + Date.now();
            var key = id;
            var name_1 = this.sub_task_name;
            var parent_id = this.task.id;
            var state = 'ACCEPTED';
            var updated = created;
            var visible = true;
            var task = { alert: alert_1, created: created, folder: folder, dear: dear, dear_mail: dear_mail, description: description, expiration: expiration, favorite: favorite, from: from, from_mail: from_mail, id: id, key: key, name: name_1, parent_id: parent_id, state: state, updated: updated, visible: visible };
            this.tasks.push(task);
        }
        else {
            console.log("Ingrese un nombre a la tarea");
        }
    };
    TaskDetailComponent.prototype.showSubTask = function (s_task) {
        this.task = s_task;
        console.log(this.task);
        this.showTaskDates();
    };
    TaskDetailComponent.prototype.showTaskDates = function () {
        if (this.task.expiration['activate'] == true) {
            var date_array = (this.task.expiration['date']).split("-");
            var time = this.getFormat24Time(this.task.expiration['time']);
            this.task_expiration_date = new Date(date_array[0], date_array[1], date_array[2]);
            this.task_expiration_label = this.task.expiration['date'] + ' - ' + this.task.expiration['time'];
        }
        else {
            this.task_expiration_date = undefined;
            this.task_expiration_label = this.expiration;
            console.log("no expiracion");
        }
        if (this.task.alert['activate'] == true) {
            var date_array = (this.task.alert['date']).split("-");
            var time = this.getFormat24Time(this.task.alert['time']);
            this.task_alert_date = new Date(date_array[0], date_array[1], date_array[2]);
            this.task_alert_label = this.task.alert['date'] + ' - ' + this.task.alert['time'];
        }
        else {
            this.task_alert_date = undefined;
            this.task_alert_label = this.alert;
            console.log("no expiracion");
        }
    };
    TaskDetailComponent.prototype.removeSubTask = function (s_task) {
        s_task.state = 'DELETED';
        for (var i in this.tasks) {
            if (this.tasks[i].id == s_task.id) {
                this.tasks[i].id = s_task;
                break;
            }
        }
        console.log("eliminar sub task");
    };
    TaskDetailComponent.prototype.isActive = function (s_task) {
        if (s_task.state == 'DELETED') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Models_task__["a" /* Task */])
    ], TaskDetailComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TaskDetailComponent.prototype, "tasks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaskDetailComponent.prototype, "modo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaskDetailComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskDetailComponent.prototype, "passAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskDetailComponent.prototype, "saveNewTask", void 0);
    TaskDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__("./src/app/task-detail/task-detail.component.html"),
            styles: [__webpack_require__("./src/app/task-detail/task-detail.component.scss")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__["b" /* OWL_DATE_TIME_LOCALE */], useValue: 'en' }
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_pick_datetime__["a" /* DateTimeAdapter */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100 d-flex flex-column w-100 task-list-component\">\r\n    <!-- Tab nav -->\r\n    <div class=\"task-list-header d-flex\">\r\n        <ul class=\"nav nav-tabs folder-tabs lt-tabs\">\r\n            <li class=\"nav-item\" *ngFor=\"let folder of folders\">\r\n                <a [attr.id]=\"folder.name+'-tab'\" class=\"nav-link active\" [ngClass]=\"{active:folder.selected}\" data-toggle=\"tab\" [attr.href]=\"'#'+folder.name\" role=\"tab\" [attr.aria-controls]=\"folder.name\" aria-selected=\"true\" (click)=\"changeFolder(folder)\">{{folder.name}}</a>\r\n            </li>           \r\n        </ul>\r\n        <ul class=\"list-unstyled m-0 task-list-options\">\r\n            <li class=\"ml-auto mr-0 nav-item dropdown\">\r\n                <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-cog\"></i></a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right flex-column\">\r\n                    <h4>{{title}}</h4>\r\n                    <li class=\"dropdown-item d-flex\" *ngFor=\"let folder of folders\" [attr.folder-name]=\"folder.name\">\r\n                        <a href=\"#\">{{folder.name}}</a>\r\n                        <a href=\"#\" class=\"ml-auto mr-0\" (click)=\"removeFolder($event,folder)\"><i class=\"fa fa-fw fa-trash\"></i></a>\r\n                    </li>\r\n                    <form class=\"add-folder input-group mt-auto mb-0\" (submit)=\"addFolder($event)\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"new_folder_name\" [(ngModel)]=\"new_folder_name\" placeholder=\"{{phAddFolder}}\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn\" type=\"submit\"><i class=\"fa fa-fw fa-plus\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content h-100\">\r\n            <div *ngFor=\"let folder of folders\" class=\"tab-pane h-100\" [ngClass]=\"{active:folder.selected}\" [attr.id]=\"folder.name\" role=\"tabpanel\" [attr.aria-labelledby]=\"folder.name+'-tab'\">\r\n                    <ul *ngIf=\"folderHasTasks(folder)\" class=\"tasks-list list-unstyled h-100 m-0\">\r\n                            <template *ngFor=\"let task of tasks\">\r\n                                <li [attr.task-id]=\"task.id\" *ngIf=\"(taskBelongsHere(folder,task) && complete == 1) || (taskBelongsHere(folder,task) && task.state !== 'COMPLETE')\">\r\n                                    <div class=\"li-content d-flex\">\r\n                                        <div class=\"li-left d-flex justify-content-center align-items-center\" (click)=\"setFavorite(task)\">\r\n                                            <i class=\"fa fa-fw\" [ngClass]=\"task.favorite ? 'fa-heart': 'fa-heart-o'\" ></i>\r\n                                        </div>\r\n                                        <div (click)=\"showTask(task)\" class=\"li-main d-flex align-items-center\">{{task.name}}</div>\r\n                                        <div class=\"li-right d-flex justify-content-center align-items-center\">\r\n                                            <ul class=\"d-flex list-unstyled h-100\">\r\n                                                <li><a href=\"#\" title=\"{{btnCompleteTask}}\" class=\"complete d-flex justify-content-center align-items-center h-100\" (click)=\"completeTask($event,task)\"><i class=\"fa fa-check\"></i></a></li>\r\n                                                <li><a href=\"#\" title=\"{{btnDeleteTask}}\" class=\"delete d-flex justify-content-center align-items-center h-100\" (click)=\"deleteTask($event,task)\"><i class=\"fa fa-trash\"></i></a></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </template>\r\n                    </ul>\r\n                    <div class=\"without-tasks d-flex w-100 h-100 justify-content-center align-items-center text-center\" *ngIf=\"!folderHasTasks(folder)\">\r\n                        <p>{{emptyFolder}}</p>\r\n                    </div>\r\n            </div>\r\n    </div>\r\n    <!-- Add Task Form -->\r\n    <form class=\"add-task-quick input-group mt-auto mb-0\" (submit)=\"addTask($event)\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"task-name\" placeholder=\"{{phAddTask}}\" [(ngModel)]=\"new_task_name\">\r\n            <div class=\"input-group-append d-flex align-items-center\">\r\n                <button class=\"btn\" type=\"submit\"><i class=\"fa fa-fw fa-plus\"></i></button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/task-list/task-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\r\nTo change this license header, choose License Headers in Project Properties.\r\nTo change this template file, choose Tools | Templates\r\nand open the template in the editor.\r\n*/\n/* \r\n    Created on : Feb 8, 2018, 11:01:52 AM\r\n    Author     : oficina\r\n*/\n::ng-deep template {\n  display: block; }\n.task-list-component > .tab-content {\n  max-height: calc(100% - 118px);\n  overflow-y: auto; }\n.task-list-options {\n  padding-top: 7px;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto !important; }\n::ng-deep main .main-content .tasks .tasks-list > template > li {\n  border-bottom: solid 2px #f2f2f2;\n  cursor: pointer; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content {\n    height: 50px; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-left {\n      width: 50px; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-left .fa-heart {\n        color: #ff6969; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-left .fa-heart-o {\n        color: #dbdbdb; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-main {\n      width: 100%;\n      font-size: 0.8em; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-right {\n      opacity: 0;\n      -webkit-transition: all 0.3s ease-out;\n      transition: all 0.3s ease-out; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-right ul > li > a {\n        width: 40px; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-right ul > li > a.delete {\n        color: #dc3545; }\n::ng-deep main .main-content .tasks .tasks-list > template > li .li-content .li-right ul > li > a.complete {\n        color: #2ab27b; }\n::ng-deep main .main-content .tasks .tasks-list > template > li:hover .li-right {\n  opacity: 1; }\n::ng-deep main .main-content .tasks .tasks-list > template > li.active {\n  background-color: #fafafa; }\nmain > .main-content .tasks .add-task-quick {\n  padding: 10px 15px;\n  border-top: solid 2px #f2f2f2; }\nmain > .main-content .tasks .add-task-quick .input-group {\n    margin: 0 !important; }\nmain > .main-content .tasks .add-task-quick .input-group input[name=\"task-name\"] {\n      border: none;\n      border-bottom: solid 1.5px #f2f2f2;\n      border-radius: 0px;\n      font-size: 1em;\n      padding-left: 0px; }\nmain > .main-content .tasks .add-task-quick .input-group button[type=\"submit\"] {\n      border-radius: 50%;\n      padding: 0;\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #fff;\n      background-color: #2cb4aa;\n      padding-top: 2px;\n      font-size: 1.5em; }\n.multi > .separator {\n  width: 5px;\n  border-left: solid 1px #f2f2f2;\n  border-right: solid 1px #f2f2f2; }\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folder_service__ = __webpack_require__("./src/app/folder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service__ = __webpack_require__("./src/app/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(folderService, taskService, logService, firebaseDB) {
        this.folderService = folderService;
        this.taskService = taskService;
        this.logService = logService;
        this.firebaseDB = firebaseDB;
        this.tasks = [];
        this.complete = 1;
        this.orderBy = 4;
        this.passSelectedTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user_mail = '';
        this.new_task_name = '';
        this.new_folder_name = '';
        this.title = undefined;
        this.phAddFolder = undefined;
        this.btnCompleteTask = undefined;
        this.btnDeleteTask = undefined;
        this.emptyFolder = undefined;
        this.phAddTask = undefined;
        this.newTask = undefined;
        this.taskCompleted = undefined;
        this.taskCreated = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = localStorage.getItem("lang");
        this.user_mail = localStorage.getItem("mail");
    }
    TaskListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.folders) {
            this.targetActiveFolder();
        }
        if (changes.orderBy) {
            this.sortTasks();
        }
        if (changes.tasks) {
            console.log("x");
            this.sortTasks();
        }
    };
    TaskListComponent.prototype.ngOnInit = function () {
        console.log(this.orderBy);
        this.sortTasks();
        this.loadLanguage(this.language);
    };
    TaskListComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.title = k.find(function (f) { return f.name == "myfolders"; }).description[lang];
            _this.phAddFolder = k.find(function (f) { return f.name == "myfolders_addfolder"; }).description[lang];
            _this.btnCompleteTask = k.find(function (f) { return f.name == "myworks_taskslide_complete"; }).description[lang];
            _this.btnDeleteTask = k.find(function (f) { return f.name == "myworks_taskslide_delete"; }).description[lang];
            _this.emptyFolder = k.find(function (f) { return f.name == "myworks_info"; }).description[lang];
            _this.phAddTask = k.find(function (f) { return f.name == "myworks_addtask"; }).description[lang];
            _this.newTask = k.find(function (f) { return f.name == "newtask"; }).description[lang];
            _this.taskCompleted = k.find(function (f) { return f.name == "task_completed"; }).description[lang];
            _this.taskCreated = k.find(function (f) { return f.name == "task_created"; }).description[lang];
        });
    };
    TaskListComponent.prototype.sortTasks = function () {
        if (this.tasks !== undefined) {
            switch (this.orderBy) {
                case 0:
                    this.tasks.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        else if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case 1:
                    this.tasks.sort(function (a, b) {
                        var a_date = new Date(a.created["time"]);
                        var b_date = new Date(b.created["time"]);
                        if (a_date < b_date) {
                            return -1;
                        }
                        else if (a_date > b_date) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case 2:
                    this.tasks.sort(function (a, b) {
                        var a_date = new Date(a.updated["time"]);
                        var b_date = new Date(b.updated["time"]);
                        if (a_date < b_date) {
                            return -1;
                        }
                        else if (a_date > b_date) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case 3:
                    this.tasks.sort(function (a, b) {
                        if (a.favorite > b.favorite) {
                            return -1;
                        }
                        else if (a.favorite < b.favorite) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                default:
                    // code...
                    break;
            }
        }
    };
    TaskListComponent.prototype.targetActiveFolder = function () {
        for (var i in this.folders) {
            if (this.folders[i].selected) {
                this.active_folder = this.folders[i];
                return;
            }
        }
    };
    TaskListComponent.prototype.taskBelongsHere = function (folder, task) {
        var ok = false;
        if (task.folder == folder.name && task.parent_id == 0) {
            switch (task.state) {
                case "ACCEPTED":
                    ok = true;
                    break;
                case "COMPLETE":
                    ok = true;
                    break;
                case "EXPIRATE":
                    ok = true;
                    break;
                case "NO_SEND":
                    ok = true;
                    break;
                default:
                    ok = false;
                    break;
            }
        }
        return ok;
    };
    TaskListComponent.prototype.changeFolder = function (folder) {
        this.active_folder = folder;
    };
    TaskListComponent.prototype.showTask = function (task) {
        this.passSelectedTask.emit({ task: task, type: 'edit' });
    };
    TaskListComponent.prototype.addTask = function (e) {
        e.preventDefault();
        if ((this.new_task_name).trim() == '') {
            this.addTaskFull();
        }
        else {
            this.addTaskFast();
        }
    };
    TaskListComponent.prototype.addFolder = function (e) {
        e.preventDefault();
        if ((this.new_folder_name).trim() == '') {
            console.log("Ingrese un nombre");
        }
        else {
            var key = this.folders.length;
            var folder = { id: key, key: key, name: this.new_folder_name, selected: false };
            this.folders.push(folder);
            this.folderService.addFolder(folder).subscribe(function (folder_r) {
                console.log("Folder Added");
            });
        }
    };
    TaskListComponent.prototype.removeFolder = function (e, folder) {
        for (var i in this.folders) {
            if (this.folders[i].id == folder.id) {
                this.folders.splice(+i, 1);
                this.folderService.deleteFolder(folder).subscribe(function (folder_r) {
                    console.log("Folder removed");
                });
                return;
            }
        }
    };
    TaskListComponent.prototype.addTaskFull = function () {
        var date = new Date();
        var alert = { active: false };
        var created = {
            date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            millisecond: date.getMilliseconds(),
            time: date.getTime(),
        };
        var folder = this.active_folder.name;
        var dear = {
            mail: localStorage.getItem("mail")
        };
        var dear_mail = localStorage.getItem("mail");
        ;
        var description = '';
        var expiration = {
            active: false
        };
        var favorite = 0;
        var from = {
            mail: localStorage.getItem("mail")
        };
        var from_mail = localStorage.getItem("mail");
        var id = localStorage.getItem("token") + '__' + Date.now();
        var key = id;
        var name = this.newTask;
        var parent_id = 0;
        var state = 'ACCEPTED';
        var updated = created;
        var visible = true;
        var task = { alert: alert, created: created, folder: folder, dear: dear, dear_mail: dear_mail, description: description, expiration: expiration, favorite: favorite, from: from, from_mail: from_mail, id: id, key: key, name: name, parent_id: parent_id, state: state, updated: updated, visible: visible };
        this.passSelectedTask.emit({ task: task, type: 'new' });
    };
    TaskListComponent.prototype.setFavorite = function (task) {
        var _this = this;
        if (task.favorite == 1) {
            task.favorite = 0;
        }
        else {
            task.favorite = 1;
        }
        this.taskService.addTask(task).subscribe(function (task_r) {
            for (var i in _this.tasks) {
                if (_this.tasks[i].key == task.key) {
                    _this.tasks[i] = task;
                }
            }
            console.log(_this.tasks);
        });
    };
    TaskListComponent.prototype.deleteTask = function (e, task) {
        var _this = this;
        task.state = 'DELETED';
        this.taskService.addTask(task).subscribe(function (task_r) {
            for (var i in _this.tasks) {
                if (_this.tasks[i].key == task.key) {
                    _this.tasks[i] = task;
                }
            }
        });
    };
    TaskListComponent.prototype.completeTask = function (e, task) {
        var _this = this;
        task.state = 'COMPLETE';
        this.taskService.addTask(task).subscribe(function (task_r) {
            for (var i in _this.tasks) {
                if (_this.tasks[i].key == task.key) {
                    _this.tasks[i] = task;
                    _this.logService.emitChange(_this.taskCompleted);
                    break;
                }
            }
        });
    };
    TaskListComponent.prototype.folderHasTasks = function (folder) {
        var response = false;
        for (var i in this.tasks) {
            if (this.taskBelongsHere(folder, this.tasks[i])) {
                response = true;
            }
        }
        return response;
    };
    TaskListComponent.prototype.addTaskFast = function () {
        var _this = this;
        var date = new Date();
        var alert = { active: false };
        var created = {
            date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            millisecond: date.getMilliseconds(),
            time: date.getTime(),
        };
        var folder = this.active_folder.name;
        var dear = {
            mail: localStorage.getItem("mail")
        };
        var dear_mail = localStorage.getItem("mail");
        ;
        var description = '';
        var expiration = {
            active: false
        };
        var favorite = 0;
        var from = {
            mail: localStorage.getItem("mail")
        };
        var from_mail = localStorage.getItem("mail");
        var id = localStorage.getItem("token") + '__' + Date.now();
        var key = id;
        var name = this.new_task_name;
        ;
        var parent_id = 0;
        var state = 'ACCEPTED';
        var updated = created;
        var visible = true;
        var task = { alert: alert, created: created, folder: folder, dear: dear, dear_mail: dear_mail, description: description, expiration: expiration, favorite: favorite, from: from, from_mail: from_mail, id: id, key: key, name: name, parent_id: parent_id, state: state, updated: updated, visible: visible };
        this.tasks.push(task);
        this.taskService.addTask(task).subscribe(function (task_r) {
            _this.logService.emitChange(_this.taskCreated);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TaskListComponent.prototype, "folders", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TaskListComponent.prototype, "tasks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TaskListComponent.prototype, "complete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TaskListComponent.prototype, "orderBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "passSelectedTask", void 0);
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__("./src/app/task-list/task-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__folder_service__["a" /* FolderService */],
            __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var TaskService = /** @class */ (function () {
    function TaskService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.base_url = 'https://us-central1-livetask-363bb.cloudfunctions.net';
        this.get_url = this.base_url + '/api/get/tasks/';
        this.post_url = this.base_url + '/api/post/task';
    }
    TaskService.prototype.getTasks = function (user_mail) {
        var url = this.get_url + user_mail;
        return this.http.get(url).pipe();
    };
    TaskService.prototype.addTask = function (task) {
        var url = this.post_url;
        return this.http.post(url, { task: task }, httpOptions).pipe();
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/tracing/tracing.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex justify-content-center align-items-center\">\r\n\t<h2 [innerText]=\"title\"></h2>\r\n</header>\r\n<section class=\"main-content d-flex\">\r\n\t<div class=\"w-100 h-100 d-flex flex-column\">\r\n        <!-- Tab nav -->\r\n        <ul class=\"nav nav-tabs folder-tabs lt-tabs\">\r\n            <li class=\"nav-item w-50\" >\r\n                <a id=\"activas-tab\" class=\"nav-link active text-center\" data-toggle=\"tab\" href=\"#activas\" role=\"tab\" aria-controls=\"activas\" aria-selected=\"true\">{{actives}}</a>\r\n            </li>\r\n            <li class=\"nav-item w-50\" >\r\n                <a id=\"por-aceptar-tab\" class=\"nav-link text-center\" data-toggle=\"tab\" href=\"#por-aceptar\" role=\"tab\" aria-controls=\"por-aceptar\" aria-selected=\"true\">{{accept}}</a>\r\n            </li>\r\n        </ul>\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"activas\" role=\"tabpanel\" aria-labelledby=\"activas-tab\">\r\n                    <ul class=\"list-unstyled\">\r\n                        <template *ngFor=\"let task of tasks\">\r\n                            <li *ngIf=\"belognsActive(task)\" (click)=\"selectTasks(task)\">\r\n                                <div class=\"li-content d-flex\">\r\n                                    <div class=\"li-left d-flex align-items-center justify-content-center\">\r\n                                        <i class=\"fa fa-fw fa-circle\" [ngClass]=\"getStateClass(task)\" ></i>\r\n                                    </div>\r\n                                    <div class=\"li-main d-flex align-items-center\">\r\n                                        <label class=\"m-0\">{{task.name}}</label>\r\n                                    </div>\r\n                                    <div class=\"li-right ml-auto mr-0 align-items-center d-none d-md-flex\">\r\n                                        <div class=\"d-flex graph\">\r\n                                            <template *ngFor=\"let sub_task of sonTasks(task);index as idx\" class=\"w-100 h-100\">\r\n                                                <div class=\"w-100 h-100\" [ngClass]=\"getStateClass(sub_task)\"></div>\r\n                                            </template>\r\n                                        </div>\r\n                                        <label *ngIf=\"hasFromName(task);else noHasTaskName\" class=\"m-0\">{{task.from.name}}</label>\r\n                                        <ng-template #noHasTaskName>\r\n                                            <label class=\"m-0\">{{task.from_mail}}</label>\r\n                                        </ng-template>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </template>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"por-aceptar\" role=\"tabpanel\" aria-labelledby=\"por-aceptar-tab\">\r\n                    <ul class=\"list-unstyled\">\r\n                        <template *ngFor=\"let task of tasks\">\r\n                            <li *ngIf=\"belognsUnaccepted(task)\">\r\n                                <div class=\"li-content d-flex\" v-on:click=\"showSubTasks($event)\">\r\n                                    <div class=\"li-main d-flex align-items-center\">\r\n                                        <label class=\"m-0\">{{task.name}}</label>\r\n                                    </div>\r\n                                    <div class=\"li-right ml-auto mr-0 d-flex align-items-center d-none d-md-block\">\r\n                                        <div class=\"d-flex flex-column\">\r\n                                            <label *ngIf=\"hasFromName(task);else tpltaskmail\" class=\"m-0\">{{task.from.name}}</label>\r\n                                            <ng-template #tpltaskmail class=\"m-0\">{{task.from_mail}}</ng-template>\r\n                                            <label class=\"m-0 text-right\">{{task_state_send}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ul-container\">\r\n                                    <ul class=\"list-unstyled\">\r\n                                        <li v-for=\"(sub_task, index) in tasks\" v-if=\"task.id == sub_task.parent_id\">\r\n                                            <div class=\"li-content d-flex\">\r\n                                                <div class=\"li-left d-flex justify-content-center align-items-center\">\r\n                                                    <i class=\"fa fa-fw fa-circle\" v-bind:class=\"{'acepted-state': task.state == 'ACCEPTED','complete-state':task.state == 'COMPLETE', 'expirate-state':task.state == 'EXPIRATE'}\"></i>\r\n                                                </div>\r\n                                                <div class=\"li-main d-flex align-items-center\">\r\n                                                    <label class=\"m-0\">sub_task.name</label>\r\n                                                </div>\r\n                                                <div class=\"li-right\"></div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li>\r\n                        </template>\r\n                    </ul>\r\n                </div>\r\n        </div>\r\n        <div class=\"tracing-legend mt-auto mb-0\">\r\n            <ul class=\"list-unstyled d-flex flex-column flex-sm-row align-items-center justify-content-center\">\r\n                <li><i class=\"fa fa-fw fa-circle complete-legend mr-1\"></i>{{completed}}</li>\r\n                <li class=\"ml-5 mr-5\"><i class=\"fa fa-fw fa-circle exec-legend mr-1\"></i>{{execution}}</li>\r\n                <li><i class=\"fa fa-fw fa-circle timed-out-legend mr-1\"></i>{{expirated}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"separator d-none d-md-block\" *ngIf=\"selectedTask\"></div>\r\n    <div class=\"w-100 h-100 d-flex flex-column\" *ngIf=\"selectedTask\">\r\n        <app-task-detail  [type]=\"selectedType\" [task]=\"selectedTask\" (saveNewTask)=\"saveNewTask($event)\" (passAction)=\"execAction($event)\" [tasks]=\"selectedTaskSons\" class=\"show_pane w-100 h-100 flex-column\"></app-task-detail>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/tracing/tracing.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep app-tracing {\n  height: 100%; }\n\n::ng-deep template {\n  display: block; }\n\n::ng-deep .tracing-legend > ul > li {\n  font-size: 0.75em;\n  color: #8eb4cb;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: none !important; }\n\n::ng-deep .tracing-legend > ul > li i {\n    font-size: 0.6em; }\n\n::ng-deep .tracing-legend > ul > li i.complete-legend {\n    color: #2ab27b; }\n\n::ng-deep .tracing-legend > ul > li i.exec-legend {\n    color: #8eb4cb; }\n\n::ng-deep .tracing-legend > ul > li i.timed-out-legend {\n    color: #dc3545; }\n\n::ng-deep app-tracing .tab-content {\n  overflow-y: auto;\n  height: calc(100%); }\n\n::ng-deep app-tracing .nav-tabs {\n  height: 61px;\n  min-height: 52px; }\n\n::ng-deep app-tracing .nav-tabs li a {\n    color: #fff;\n    background-color: transparent;\n    border: none !important;\n    border-radius: 0;\n    font-size: 0.8em;\n    white-space: nowrap; }\n\n::ng-deep app-tracing .nav-tabs li a.active {\n    border-bottom: solid 7px rgba(0, 0, 0, 0.2) !important;\n    background-color: transparent !important;\n    color: #fff !important; }\n\n::ng-deep app-tracing #activas > ul > li > .li-content .li-content, ::ng-deep app-tracing #por-aceptar > ul > template > li > .li-content {\n  cursor: pointer; }\n\n::ng-deep app-tracing #activas > ul > li > .li-content .li-content .li-main, ::ng-deep app-tracing #por-aceptar > ul > template > li > .li-content .li-main {\n    padding-left: 25px; }\n\n::ng-deep app-tracing #activas > ul > li > .li-content .li-content .li-right, ::ng-deep app-tracing #por-aceptar > ul > template > li > .li-content .li-right {\n    color: #8eb4cb;\n    font-size: 0.8em;\n    font-style: italic;\n    text-align: right; }\n\n::ng-deep app-tracing #activas > ul > li > .li-content .li-content .li-right label:nth-child(1), ::ng-deep app-tracing #por-aceptar > ul > template > li > .li-content .li-right label:nth-child(1) {\n      line-height: 1; }\n\n::ng-deep app-tracing #activas > ul > li > .li-content .li-content .li-right label:nth-child(2), ::ng-deep app-tracing #por-aceptar > ul > template > li > .li-content .li-right label:nth-child(2) {\n      font-size: 0.8em; }\n\n::ng-deep app-tracing ul li {\n  border-bottom: solid 2px #f2f2f2; }\n\n::ng-deep app-tracing ul li .li-content {\n    height: 50px; }\n\n::ng-deep app-tracing ul li .li-content label {\n      cursor: inherit; }\n\n::ng-deep app-tracing ul li .li-content .li-left {\n      width: 50px;\n      font-size: 0.7em; }\n\n::ng-deep app-tracing ul li .li-content .li-left .acepted-state {\n        color: #8eb4cb; }\n\n::ng-deep app-tracing ul li .li-content .li-left .complete-state {\n        color: #2ab27b; }\n\n::ng-deep app-tracing ul li .li-content .li-left .expirate-state {\n        color: #dc3545; }\n\n::ng-deep app-tracing ul li .li-content .li-main {\n      font-size: 0.8em; }\n\n::ng-deep app-tracing ul li .li-content .li-right {\n      padding-right: 25px; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph {\n        height: 12px;\n        width: 180px; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph div {\n          border-right: solid 1px #fff; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph template:nth-child(1) div {\n          border-radius: 4px 0 0 4px; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph template:nth-last-child(1) div {\n          border-radius: 0 4px 4px 0; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph .acepted-state {\n          background-color: #8eb4cb; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph .complete-state {\n          background-color: #2ab27b; }\n\n::ng-deep app-tracing ul li .li-content .li-right > .graph .expirate-state {\n          background-color: #dc3545; }\n\n::ng-deep app-tracing ul li .li-content .li-right > label {\n        font-size: 0.8em;\n        font-style: italic;\n        color: #8eb4cb;\n        margin-left: 15px !important; }\n\n::ng-deep app-tracing ul .ul-container {\n  height: 0;\n  overflow: hidden; }\n\n::ng-deep app-tracing ul .ul-container ul {\n    padding-left: 50px;\n    padding-right: 50px;\n    font-size: 0.8em; }\n\n::ng-deep app-tracing ul .ul-container ul .li-content {\n      height: 40px; }\n\n::ng-deep app-tracing ul .ul-container ul li:nth-last-child(1) {\n      border-bottom: 0; }\n\n::ng-deep app-tracing ul li.active {\n  background-color: #fafafa; }\n\n::ng-deep app-tracing ul li.active .ul-container {\n    height: auto; }\n"

/***/ }),

/***/ "./src/app/tracing/tracing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TracingComponent = /** @class */ (function () {
    function TracingComponent(route, titleService, taskService, firebaseDB) {
        this.route = route;
        this.titleService = titleService;
        this.taskService = taskService;
        this.firebaseDB = firebaseDB;
        this.selectedType = "edit";
        this.actives = undefined;
        this.accept = undefined;
        this.completed = undefined;
        this.execution = undefined;
        this.expirated = undefined;
        this.task_state_send = undefined;
        this.texts = undefined;
        this.language = undefined;
        this.language = localStorage.getItem("lang");
    }
    TracingComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        this.titleService.setTitle("LiveTask - " + this.title);
        this.user_mail = localStorage.getItem('mail');
        this.getTasks();
        this.loadLanguage(this.language);
    };
    TracingComponent.prototype.loadLanguage = function (lang) {
        var _this = this;
        this.texts = this.firebaseDB.list('/text/list_text/').valueChanges();
        this.texts.subscribe(function (k) {
            _this.title = k.find(function (f) { return f.name == "follow"; }).description[lang];
            _this.actives = k.find(function (f) { return f.name == "follow_activate"; }).description[lang];
            _this.accept = k.find(function (f) { return f.name == "follow_accept"; }).description[lang];
            _this.completed = k.find(function (f) { return f.name == "follow_caption_complete"; }).description[lang];
            _this.execution = k.find(function (f) { return f.name == "follow_caption_execution"; }).description[lang];
            _this.expirated = k.find(function (f) { return f.name == "follow_caption_expirated"; }).description[lang];
            _this.task_state_send = k.find(function (f) { return f.name == "task_state_send"; }).description[lang];
        });
    };
    TracingComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks(this.user_mail)
            .subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TracingComponent.prototype.belognsActive = function (task) {
        if ((task.state == 'ACCEPTED' || task.state == 'COMPLETE' || task.state == 'EXPIRATE') && task.parent_id == '0') {
            return true;
        }
        return false;
    };
    TracingComponent.prototype.belognsUnaccepted = function (task) {
        if ((task.state == 'SEND') && task.parent_id == '0') {
            return true;
        }
        return false;
    };
    TracingComponent.prototype.hasFromName = function (task) {
        if (task.from['name']) {
            return true;
        }
        return false;
    };
    TracingComponent.prototype.getStateClass = function (task) {
        var state_class = "acepted-state";
        switch (task.state) {
            case "ACCEPTED":
                state_class = "acepted-state";
                break;
            case "COMPLETE":
                state_class = "complete-state";
                break;
            case "EXPIRATE":
                state_class = "expirate-state";
                break;
        }
        if (task.expiration["activate"] == true) {
            var expiration_date = task.expiration["date"];
            var expiration_time = task.expiration["time"];
            var date_array = expiration_date.split("-");
            var year = Number(date_array[0]);
            var month = Number(date_array[1]);
            var day = Number(date_array[2]);
            var hour = Number(expiration_time.substr(0, 2));
            var minute = Number(expiration_time.substr(3, 2));
            var ampm = expiration_time.substr(-2, 2);
            if (isNaN(minute)) {
                minute = Number(expiration_time.substr(3, 1));
            }
            if (isNaN(hour)) {
                hour = Number(expiration_time.substr(0, 1));
                minute = Number(expiration_time.substr(2, 2));
                if (isNaN(minute)) {
                    minute = Number(expiration_time.substr(2, 1));
                }
            }
            if (ampm == "PM") {
                hour = hour + 12;
            }
            var aux_date = new Date(year, month, day, hour, minute);
            var now_date = new Date();
            if (aux_date <= now_date) {
                state_class = "expirate-state";
            }
        }
        return state_class;
    };
    TracingComponent.prototype.isSonOf = function (task, sub_task) {
        if (task.id == sub_task.parent_id) {
            return true;
        }
    };
    TracingComponent.prototype.sonTasks = function (task) {
        var sontasks = [];
        for (var i in this.tasks) {
            if (this.tasks[i].parent_id == task.id) {
                sontasks.push(this.tasks[i]);
            }
        }
        return sontasks;
    };
    TracingComponent.prototype.selectTasks = function (task) {
        this.selectedTask = task;
    };
    TracingComponent.prototype.saveNewTask = function (event) {
        for (var i in event.tasks) {
            if (event.type == 'new') {
                this.tasks.push(event.tasks[i]);
            }
            this.taskService.addTask(event.tasks[i]).subscribe(function (task_r) {
                console.log(task_r);
            });
        }
    };
    TracingComponent.prototype.execAction = function (event) {
        switch (event.action) {
            case "closeTask":
                this.selectedTask = undefined;
                break;
            default:
                // code...
                break;
        }
    };
    TracingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tracing',
            template: __webpack_require__("./src/app/tracing/tracing.component.html"),
            styles: [__webpack_require__("./src/app/tracing/tracing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], TracingComponent);
    return TracingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCSRIESV0QWel5B6kYsF48dKF6Myo3xcmc",
        authDomain: "livetask-363bb.firebaseapp.com",
        databaseURL: "https://livetask-363bb.firebaseio.com",
        projectId: "livetask-363bb",
        storageBucket: "livetask-363bb.appspot.com",
        messagingSenderId: "376364526338"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map