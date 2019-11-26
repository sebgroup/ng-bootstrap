(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-modal-module"], {
        /***/ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html": 
        /*!**********************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/modal/modal.component.html ***!
          \**********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"accordion\"><h1 class=\"my-3 d-none d-lg-block\">Modal</h1></a>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <h4 class=\"card-header\">Installation and usage</h4>\n    <div class=\"card-body\">\n        <p>See <a routerLink=\"'/getting-started'\">getting started</a> for a complete setup.</p>\n        <strong>Steps to get started:</strong>\n        <ol class=\"list-group list-group-ordered mb-3\">\n            <li class=\"list-group-item\">Install using npm (see <a routerLink=\"'/getting-started'\">getting started</a>)</li>\n            <li class=\"list-group-item\">Import <code>NgbModalModule</code> (if you're not including <code>NgbModule</code>)</li>\n            <li class=\"list-group-item\">Import @sebgroup/boostrap modal and animation styles (if you're not including all of bootstrap)</li>\n        </ol>\n        <strong>Import modal module:</strong>\n        <exemplify [sources]=\"[{\n        'name':'app.module.ts',\n        'src':'...\\nimport {NgbModalModule} from &quot;@ng-bootstrap/ng-bootstrap&quot;;'+\n        '\\n\\n@NgModule({\\n'+\n        '  declarations: [AppComponent],\\n'+\n        '  imports: [\\n'+\n        '    ...\\n'+\n        '    NgbModalModule // <-- Add this line\\n'+\n        '  ]\\n'+\n        '})','lang':'js'\n        }]\"></exemplify>\n        <strong class=\"mt-3 d-block\">Import modal and animation styles:</strong>\n        <exemplify [sources]=\"[{\n        'name':'styles.scss',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/core\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/reboot\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/animations\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/modal\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/fonts/scss/seb-fonts\\';','lang':'css'\n        }]\"></exemplify>\n    </div>\n</div>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with <a class=\"alert-link\" href=\"https://www.google.com/search?q=content+scrolling+behind+modal\" target=\"_blank\">scrolling content behind the modal</a>, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing modals. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-modal-body-scroll-lock\" target=\"_blank\">stack blitz</a>.</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"standardModal\">\n    <h4 class=\"card-header\">Modal with backdrop</h4>\n    <div class=\"card-body\"><p>Below is a example of a standard modal opened with a backdrop.</p>\n        <div class=\"row\">\n            <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content)\">Open modal</button></div>\n            <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {size:'lg'})\">Open large modal</button></div>\n        </div>\n        <exemplify selector=\"#standardModal .btn\" class=\"mt-4\" [sources]=\"[{\n      name: 'app.component.ts',\n      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/modal/modal.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',\n      lang: 'typescript'\n    }]\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"asideModal\">\n    <h4 class=\"card-header\">Aside modal</h4>\n    <div class=\"card-body\">\n        <p>Add <code>modal-aside</code> class to the modal element together with either <code>modal-aside-right</code> or <code>modal-aside-left</code> to get a modal that will slide in from the side.<br>Ex. <code>&lt;div  class=&quot;modal modal-aside modal-aside-right&quot;&gt;...&lt;/div&gt;</code></p>\n        <div class=\"row\">\n            <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {windowClass:'modal-aside modal-aside-right'})\">Open aside modal</button></div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <h5>Large aside modal</h5>\n        <p>Add <code>modal-lg</code> class to the modal dialogue together with the above classes to get a larger modal that will slide in from the side.</p>\n        <div class=\"row\">\n            <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(largeContent, {windowClass:'modal-aside modal-aside-right', size:'lg'})\">Open aside modal</button></div>\n        </div>\n        <exemplify selector=\"#asideModal .btn\" class=\"mt-4\" [sources]=\"[{\n      name: 'app.component.ts',\n      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/modal/modal.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',\n      lang: 'typescript'\n    }]\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"fullscreenModal\">\n    <h4 class=\"card-header\">Fullscreen modal aka take-over</h4>\n    <div class=\"card-body\">\n        <p>Add <code>modal-fullscreen</code> class to the modal element to get a fullscreen modal.<br>Ex. <code>&lt;div  class=&quot;modal modal-fullscreen&quot;&gt;...&lt;/div&gt;</code></p>\n        <button class=\"btn btn-primary\" (click)=\"open(content, {windowClass:'modal-fullscreen'})\">Open fullscreen modal</button>\n        <exemplify selector=\"#fullscreenModal .btn\" class=\"mt-4\" [sources]=\"[{\n      name: 'app.component.ts',\n      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/modal/modal.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',\n      lang: 'typescript'\n    }]\"></exemplify>\n    </div>\n</div>\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Modal body text goes here.</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n    </div>\n</ng-template>\n<ng-template #largeContent let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Modal body text goes here.</p>\n        <div class=\"bg-primary-element text-white align-self-center p-3\" style=\"width: 600px; height: 600px;\">\n            <p class=\"lead font-weight-normal\">The large aside modal will adjust it's width to the width of the content.<br/>\n                Max width = 768px<br/>\n                Min width = 320px\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n    </div>\n</ng-template>\n\n";
            /***/ 
        }),
        /***/ "./src/app/modal/modal-routing.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/modal/modal-routing.module.ts ***!
          \***********************************************/
        /*! exports provided: ModalRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRoutingModule", function () { return ModalRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/modal/modal.component.ts");
            var routes = [{ path: '', component: _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"] }];
            var ModalRoutingModule = /** @class */ (function () {
                function ModalRoutingModule() {
                }
                return ModalRoutingModule;
            }());
            ModalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ModalRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modal/modal.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/modal/modal.component.scss ***!
          \********************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
            /***/ 
        }),
        /***/ "./src/app/modal/modal.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/modal/modal.component.ts ***!
          \******************************************/
        /*! exports provided: ModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function () { return ModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var ModalComponent = /** @class */ (function () {
                function ModalComponent(document, modalService) {
                    this.document = document;
                    this.modalService = modalService;
                    this.modal = false;
                }
                ModalComponent.prototype.open = function (content, options) {
                    var _this = this;
                    var modalRef = this.modalService.open(content, Object.assign({}, options, { ariaLabelledBy: 'modal-basic-title' }));
                    // workaround for iOS scroll that allows scroll in modal body
                    var contentBody = document.getElementsByTagName('ngb-modal-window')[0];
                    modalRef.result.then(function (result) {
                        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["clearAllBodyScrollLocks"])();
                        _this.closeResult = "Closed with: " + result;
                    }, function (reason) {
                        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["clearAllBodyScrollLocks"])();
                        _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
                    });
                    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(contentBody);
                };
                ModalComponent.prototype.getDismissReason = function (reason) {
                    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
                        return 'by pressing ESC';
                    }
                    else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
                        return 'by clicking on a backdrop';
                    }
                    else {
                        return "with: " + reason;
                    }
                };
                return ModalComponent;
            }());
            ModalComponent.ctorParameters = function () { return [
                { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
            ]; };
            ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
            ], ModalComponent);
            /***/ 
        }),
        /***/ "./src/app/modal/modal.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/modal/modal.module.ts ***!
          \***************************************/
        /*! exports provided: ModalModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function () { return ModalModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-routing.module */ "./src/app/modal/modal-routing.module.ts");
            /* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.component */ "./src/app/modal/modal.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var ModalModule = /** @class */ (function () {
                function ModalModule() {
                }
                return ModalModule;
            }());
            ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
                        _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModalRoutingModule"]
                    ]
                })
            ], ModalModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=modal-modal-module-es2015.js.map
//# sourceMappingURL=modal-modal-module-es5.js.map
//# sourceMappingURL=modal-modal-module-es5.js.map