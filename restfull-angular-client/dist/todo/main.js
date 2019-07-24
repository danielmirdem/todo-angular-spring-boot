(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list-todos/list-todos.component */ "./src/app/pages/list-todos/list-todos.component.ts");
/* harmony import */ var _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/logout/logout.component */ "./src/app/pages/logout/logout.component.ts");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/route-guard.service */ "./src/app/services/route-guard.service.ts");
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/pages/todo/todo.component.ts");










var routes = [
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    { path: 'deloitte', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'welcome/:name', component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'todos', component: _pages_list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_6__["ListTodosComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'logout', component: _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'todos/:id', component: _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: '**', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<br>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:8080/api';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/list-todos/list-todos.component */ "./src/app/pages/list-todos/list-todos.component.ts");
/* harmony import */ var _services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/logout/logout.component */ "./src/app/pages/logout/logout.component.ts");
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/pages/todo/todo.component.ts");
/* harmony import */ var _services_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/http-intercepter-basic-auth.service */ "./src/app/services/http-intercepter-basic-auth.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _pages_list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_10__["ListTodosComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_11__["BasicAuthenticationService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_16__["HttpIntercepterBasicAuthService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #222222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\n  <div class=\"container\">\n    <span class=\"text-muted\">DEM - 2019</span>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <!--\n    <div><a href=\"\" class=\"navbar-brand\">dem</a></div>\n    -->\n\n    <ul class=\"navbar-nav\">\n      <li *ngIf=\"authenticationService.isUserLoggedIn()\"><a routerLink=\"/welcome/dem\" class=\"nav-link\">Home</a></li>\n      <li *ngIf=\"authenticationService.isUserLoggedIn()\"><a routerLink=\"/todos\" class=\"nav-link\">Todos</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n      <li *ngIf=\"!authenticationService.isUserLoggedIn()\"><a routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n      <li *ngIf=\"authenticationService.isUserLoggedIn()\"><a routerLink=\"/logout\" class=\"nav-link\">Logout</a></li>\n    </ul>\n\n  </nav>\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");



var MenuComponent = /** @class */ (function () {
    //public isUserLoggedIn: boolean = false;
    function MenuComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__["BasicAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/domain/todo.ts":
/*!********************************!*\
  !*** ./src/app/domain/todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, username, description, done, targetDate, comment, lastUpdate) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
        this.comment = comment;
        this.lastUpdate = lastUpdate;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/pages/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/error/error.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{errorMessage}}\n  DEM\n  DEM2\n  DEM3\n</p>\n"

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = "An error occured! Contact Support at ***";
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/pages/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/list-todos/list-todos.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-todos/list-todos.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".complete{\n\tcolor: grey;\n\ttext-decoration:line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC10b2Rvcy9saXN0LXRvZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsNEJBQTRCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdC10b2Rvcy9saXN0LXRvZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGV7XG5cdGNvbG9yOiBncmV5O1xuXHR0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/list-todos/list-todos.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/list-todos/list-todos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> My Todo's</h1>\n<hr>\n<div class=\"alert alert-success\" *ngIf=\"message\">{{message}}</div>\n\n<div class=\"container\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>is Done</th>\n        <th>description</th>\n        <th>Target Date</th>\n        <th>Last Update</th>\n        <th>Complete</th>\n        <th>Update</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let todo of todos\">\n        <td><input type=\"checkbox\" name=\"vehicle1\" [(ngModel)] = \"todo.done\" style=\"pointer-events: none;\"></td>\n        <td [ngClass]=\"{'complete': todo.done}\">{{todo.description}}</td>\n        <td>{{todo.targetDate | date | uppercase }}</td>\n        <td>{{todo.lastUpdate | date | uppercase }}</td>        \n        <td><button (click)=\"completeTodo(todo)\" class=\"btn btn-primary\">Complete</button></td>                \n        <td><button (click)=\"updateTodo(todo.id)\" class=\"btn btn-success\">Update</button></td>        \n        <td><button (click)=\"deleteTodo(todo.id)\" class=\"btn btn-warning\">Delete</button></td>                \n      </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <hr>\n  <div class=\"row\">\n    <button (click)=\"addTodo()\" class=\"btn btn-success\">Add</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/list-todos/list-todos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/list-todos/list-todos.component.ts ***!
  \**********************************************************/
/*! exports provided: ListTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function() { return ListTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_todo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/todo-data.service */ "./src/app/services/todo-data.service.ts");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");





var ListTodosComponent = /** @class */ (function () {
    function ListTodosComponent(router, todoDataService, authenticationService) {
        this.router = router;
        this.todoDataService = todoDataService;
        this.authenticationService = authenticationService;
    }
    ListTodosComponent.prototype.ngOnInit = function () {
        this.refreshTodos();
    };
    ListTodosComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoDataService.deleteTodo(this.authenticationService.getUser(), id)
            .subscribe(function (r) {
            console.log(r);
            _this.message = "Delete of Todo " + id + " successful!";
            _this.refreshTodos();
        });
    };
    ListTodosComponent.prototype.completeTodo = function (todo) {
        var _this = this;
        todo.done = true;
        this.todoDataService.updateTodo(this.authenticationService.getUser(), todo.id, todo).subscribe(function (data) {
            console.log(data);
            _this.refreshTodos();
        });
    };
    ListTodosComponent.prototype.updateTodo = function (id) {
        this.router.navigate(['todos', id]);
    };
    ListTodosComponent.prototype.addTodo = function () {
        this.router.navigate(['todos', -1]);
    };
    ListTodosComponent.prototype.refreshTodos = function () {
        var _this = this;
        this.todoDataService.retrieveAllTodos(this.authenticationService.getUser())
            .subscribe(function (a) { return _this.todos = a; });
    };
    ListTodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-todos',
            template: __webpack_require__(/*! ./list-todos.component.html */ "./src/app/pages/list-todos/list-todos.component.html"),
            styles: [__webpack_require__(/*! ./list-todos.component.css */ "./src/app/pages/list-todos/list-todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_todo_data_service__WEBPACK_IMPORTED_MODULE_3__["TodoDataService"],
            app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_4__["BasicAuthenticationService"]])
    ], ListTodosComponent);
    return ListTodosComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Login</h1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf=\"invalidLogin\">{{errorMessage}}</div>\n\n  <div>\n    User Name: <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\n    Password: <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n    <button (click)=\"handleBasicAuthLogin()\" class=\"btn btn-success\">Login</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authentificationService) {
        this.router = router;
        this.authentificationService = authentificationService;
        this.username = "daniel";
        this.password = "123";
        this.invalidLogin = false;
        this.errorMessage = "Invalid Credentials";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleBasicAuthLogin = function () {
        var _this = this;
        this.authentificationService.authenticate(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.invalidLogin = false;
            _this.router.navigate(["welcome", _this.username]);
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.handleHardcodedLogin = function () {
        if (this.authentificationService.hardcodedAuth(this.username, this.password)) {
            console.log(this.username);
            this.invalidLogin = false;
            this.router.navigate(["welcome", this.username]);
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__["BasicAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/logout/logout.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/logout/logout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/logout/logout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>You are logged out</h1>\n<div class=\"container\">\n  Thank you for using our Application\n</div>\n"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/pages/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/pages/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__["BasicAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/todo/todo.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/todo/todo.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form) {\n\tborder-left: 5px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/todo/todo.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/todo/todo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Todo</H1>\n<hr>\n<div class=\"container\">\n\t<div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && todoForm.invalid\">Enter valid values</div>\n\t<div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && targetDate.invalid\">Enter valid Target Date</div>\n\t<div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && description.invalid\">Enter at least 5 characters in Description</div>\n\n\t<form (ngSubmit)=\"!todoForm.invalid && saveTodo()\" #todoForm=\"ngForm\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-9\">\t\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<input type=\"text\" #description=\"ngModel\" \n\t\t\t\t\t[(ngModel)]=\"todo.description\" class=\"form-control\" name=\"description\" required=\"required\" minlength=\"5\">\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-md-3\">\t\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Target Date</label>\n\t\t\t\t\t<input type=\"date\" #targetDate=\"ngModel\" [min]=\"today\"\n\t\t\t\t\t[ngModel]=\"todo.targetDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"todo.targetDate = $event\" class=\"form-control\" name=\"targetDate\" required=\"required\">\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-md-9\">\t\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t<textarea rows=\"4\" cols=\"50\" class=\"form-control\" name=\"comment\" [(ngModel)]=\"todo.comment\">\n\t\t\t\t\t</textarea>\t\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-md-3\">\t\t\t\t\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"done\" [(ngModel)] = \"todo.done\"> Done\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4 col-lg-2\">\t\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-lg-2\">\t\n\t\t\t\t<a routerLink=\"/todos\" class=\"nav-link\">Return to List</a>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/pages/todo/todo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/todo/todo.component.ts ***!
  \**********************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_domain_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/todo */ "./src/app/domain/todo.ts");
/* harmony import */ var app_services_todo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/todo-data.service */ "./src/app/services/todo-data.service.ts");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");






var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoDataService, authenticationService, route, router) {
        this.todoDataService = todoDataService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.today = new Date().toJSON().split('T')[0];
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.todo = new app_domain_todo__WEBPACK_IMPORTED_MODULE_3__["Todo"](this.id, '', '', false, new Date(), '', new Date());
        if (this.id != -1) {
            this.todoDataService.retrieveTodo(this.authenticationService.getUser(), this.id).subscribe(function (t) { return _this.todo = t; });
        }
    };
    TodoComponent.prototype.saveTodo = function () {
        var _this = this;
        if (this.id != -1) {
            //UPDATE
            this.todoDataService.updateTodo(this.authenticationService.getUser(), this.id, this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
        else {
            //CREATE
            this.todoDataService.createTodo(this.authenticationService.getUser(), this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/pages/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/pages/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_todo_data_service__WEBPACK_IMPORTED_MODULE_4__["TodoDataService"],
            app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_5__["BasicAuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome!\n</h1>\n\n<div class=\"container\">\n  welcome {{name}}, You can mange your todos <a routerLink=\"/todos\">here</a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(route) {
        this.route = route;
        this.name = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['name'];
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/pages/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/basic-authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/basic-authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: TOKEN, AUTHENTICATER_USER, BasicAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATER_USER", function() { return AUTHENTICATER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");





var TOKEN = 'token';
var AUTHENTICATER_USER = 'authenticaterUser';
var BasicAuthenticationService = /** @class */ (function () {
    function BasicAuthenticationService(http) {
        this.http = http;
    }
    BasicAuthenticationService.prototype.authenticate = function (username, password) {
        var basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/auth/basicauth", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATER_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
        }));
    };
    BasicAuthenticationService.prototype.hardcodedAuth = function (username, password) {
        if (username === "daniel" && password === "123") {
            sessionStorage.setItem(AUTHENTICATER_USER, username);
            return true;
        }
        else {
            return false;
        }
    };
    BasicAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem(AUTHENTICATER_USER);
        return !(user === null);
    };
    BasicAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(AUTHENTICATER_USER);
        sessionStorage.removeItem(TOKEN);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic logout'
        });
        this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/auth/logout", { headers: headers }).subscribe();
    };
    BasicAuthenticationService.prototype.getUser = function () {
        return sessionStorage.getItem(AUTHENTICATER_USER);
    };
    BasicAuthenticationService.prototype.getToken = function () {
        if (this.getUser())
            return sessionStorage.getItem(TOKEN);
        return null;
    };
    BasicAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BasicAuthenticationService);
    return BasicAuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/http-intercepter-basic-auth.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/http-intercepter-basic-auth.service.ts ***!
  \*****************************************************************/
/*! exports provided: HttpIntercepterBasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function() { return HttpIntercepterBasicAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");



var HttpIntercepterBasicAuthService = /** @class */ (function () {
    function HttpIntercepterBasicAuthService(authenticationService) {
        this.authenticationService = authenticationService;
    }
    HttpIntercepterBasicAuthService.prototype.intercept = function (request, next) {
        var basicAuthHeaderString = this.authenticationService.getToken();
        var username = this.authenticationService.getUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    };
    HttpIntercepterBasicAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__["BasicAuthenticationService"]])
    ], HttpIntercepterBasicAuthService);
    return HttpIntercepterBasicAuthService;
}());



/***/ }),

/***/ "./src/app/services/route-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/route-guard.service.ts ***!
  \*************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/basic-authentication.service */ "./src/app/services/basic-authentication.service.ts");




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__["BasicAuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/services/todo-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-data.service.ts ***!
  \***********************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");




var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/" + username + "/todos");
    };
    TodoDataService.prototype.retrieveTodo = function (username, id) {
        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.deleteTodo = function (username, id) {
        return this.http.delete(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.updateTodo = function (username, id, todo) {
        return this.http.put(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/" + username + "/todos/" + id, todo);
    };
    TodoDataService.prototype.createTodo = function (username, todo) {
        return this.http.post(app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/" + username + "/todos", todo);
    };
    TodoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daniel/projects/udemy-proyect/restfull-angular-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map