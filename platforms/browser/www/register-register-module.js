(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" padding-horizontal>\n    <ion-slide>\n      <h1>Prihlásenie</h1>\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-card>\n        <ion-card-content>\n          <form (ngSubmit)=\"logIn(loginForm)\" #loginForm=\"ngForm\">\n            <ion-row>\n              <ion-col>\n                <ion-list no-margin>\n                  <ion-item no-padding>\n                    <ion-input ngModel type=\"text\" placeholder=\"Email\" name=\"email\" required></ion-input>\n                  </ion-item>\n\n                  <ion-item no-padding>\n                    <ion-input ngModel type=\"password\" placeholder=\"Heslo\" name=\"password\" required></ion-input>\n                  </ion-item>\n\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n            <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Prihlásiť sa</ion-button>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <h1>Registrácia</h1>\n      <ion-icon name=\"person-add\"></ion-icon>\n      <ion-card>\n        <ion-card-content>\n          <form (ngSubmit)=\"register(registerForm)\" #registerForm=\"ngForm\">\n            <ion-row>\n              <ion-col>\n                <ion-list no-margin>\n                  <ion-item no-padding>\n                    <ion-input ngModel type=\"text\" placeholder=\"Email\" name=\"email\" required></ion-input>\n                  </ion-item>\n\n                  <ion-item no-padding>\n                    <ion-input ngModel type=\"password\" placeholder=\"Heslo\" name=\"password\" required></ion-input>\n                  </ion-item>\n\n                  <ion-item no-padding>\n                    <ion-input ngModel type=\"password\" placeholder=\"Zopakujte heslo\" name=\"confirmation_password\" required></ion-input>\n                  </ion-item>\n\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n            <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!registerForm.form.valid\">Registrovať sa</ion-button>\n            <span class=\"note\">Máte už vytvorený účet? Prihláste sa!</span>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note {\n  font-size: 10px; }\n\nion-slides {\n  height: 100%; }\n\nion-slide {\n  flex-direction: column; }\n\nion-card {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0aW5ha29saWJhc292YS9EZXNrdG9wL1NjaG9vbC80LnJvY8yMbmnMgWsvTGV0bnkgc2VtZXN0ZXIvTVRBQS9tdGFhL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(afs, toast, router, auth) {
        this.afs = afs;
        this.toast = toast;
        this.router = router;
        this.auth = auth;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        if (form.controls.password.value !== form.controls.confirmation_password.value) {
            alert('Different passwords');
        }
        else {
            this.auth.register(form.controls.email.value, form.controls.password.value);
        }
    };
    RegisterPage.prototype.logIn = function (logForm) {
        var _this = this;
        if (!logForm.controls.email.value) {
            this.toast.show("Zadajte email!", '3000', 'bottom').subscribe(function (toast) {
                _this.router.navigate(['/register']);
            });
            return;
        }
        this.auth.login(logForm.controls.email.value, logForm.controls.password.value);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__["Toast"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map