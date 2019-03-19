(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-new-module"],{

/***/ "./src/app/new/new.module.ts":
/*!***********************************!*\
  !*** ./src/app/new/new.module.ts ***!
  \***********************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/new/new.page.ts");







var routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]
    }
];
var NewPageModule = /** @class */ (function () {
    function NewPageModule() {
    }
    NewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
        })
    ], NewPageModule);
    return NewPageModule;
}());



/***/ }),

/***/ "./src/app/new/new.page.html":
/*!***********************************!*\
  !*** ./src/app/new/new.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Pizza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onAddPizza()\">\n    <ion-header> New pizza </ion-header>\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input formControlName=\"name\" placeholder=\"Enter name of pizza\" type=\"text\" [(ngModel)]=\"newPizza.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input formControlName=\"description\" placeholder=\"Enter name of pizza\" type=\"text\" [(ngModel)]=\"newPizza.description\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Alergens</ion-label>\n      <ion-list>\n        <ion-item *ngFor=\"let alergen of form.get('alergens').controls\">\n          <ion-label>{{ alergen }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n    <ion-button type=\"submit\">Add Pizza</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/new/new.page.scss":
/*!***********************************!*\
  !*** ./src/app/new/new.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/new/new.page.ts":
/*!*********************************!*\
  !*** ./src/app/new/new.page.ts ***!
  \*********************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var NewPage = /** @class */ (function () {
    function NewPage(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.newPizza = {
            name: '',
            description: '',
            alergens: []
        };
    }
    NewPage.prototype.ngOnInit = function () {
        this.initForm();
        this.itemsCollection = this.afs.collection('allpizzas');
        this.pizzas = this.itemsCollection.valueChanges();
    };
    NewPage.prototype.onAddPizza = function () {
        console.log('Add pizza', this.newPizza);
        console.log(this.pizzas);
        this.itemsCollection.add(this.newPizza).then(function (done) {
            if (done) {
                console.log('Successfully added');
            }
        });
    };
    NewPage.prototype.initForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            alergens: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        });
    };
    NewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.page.html */ "./src/app/new/new.page.html"),
            styles: [__webpack_require__(/*! ./new.page.scss */ "./src/app/new/new.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NewPage);
    return NewPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-new-module.js.map