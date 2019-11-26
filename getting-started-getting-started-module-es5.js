(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"], {
        /***/ "./node_modules/raw-loader/index.js!./src/app/getting-started/getting-started.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/getting-started/getting-started.component.html ***!
          \******************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h1 class=\"my-3 d-none d-lg-block\">Start</h1>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <h4 class=\"card-header\">Installation and usage</h4>\n    <div class=\"card-body\">\n        <p>See example usage and configuration below, please note that this is a wrapped version of <a href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a>, for more examples and a full list of feature please head to <a href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">https://ng-bootstrap.github.io/</a>.</p>\n        <strong>Steps to get started:</strong>\n        <ol class=\"list-group list-group-ordered mb-3\">\n            <li class=\"list-group-item\">Install as dependency</li>\n            <li class=\"list-group-item\">Import ng-bootstrap</li>\n            <li class=\"list-group-item\">Import all styles from @sebgroup/ng-bootstrap or just the parts you need</li>\n        </ol>\n        <strong>Install with:</strong>\n        <p><code>npm install @sebgroup/ng-bootstrap --save</code></p>\n        <strong>Usage and configuration:</strong>\n        <p>These component are meant to be used together with <a href=\"https://sebgroup.github.io/bootstrap/\" target=\"_blank\">@sebgroup/bootstrap</a> and in order for them to get the correct appearance you need to import the following scss (don't add the scss provided by ng-bootstrap).</p>\n        <exemplify [sources]=\"[{\n        'name':'app.module.ts',\n        'src':'...\\nimport {NgbModule} from &quot;@ng-bootstrap/ng-bootstrap&quot;;'+\n        '\\n\\n@NgModule({\\n'+\n        '  declarations: [AppComponent],\\n'+\n        '  imports: [\\n'+\n        '    ...\\n'+\n        '    NgbModule // <-- Add this line\\n'+\n        '  ]\\n'+\n        '})','lang':'js'\n        },{\n        'name':'styles.scss',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/styles/core\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/reboot\\';\\n'+\n'@import \\'~@sebgroup/ng-bootstrap/scss/ng-bootstrap\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/fonts/scss/seb-fonts\\';','lang':'css'\n        }]\"></exemplify>\n    </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./src/app/getting-started/getting-started-routing.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/getting-started/getting-started-routing.module.ts ***!
          \*******************************************************************/
        /*! exports provided: GettingStartedRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedRoutingModule", function () { return GettingStartedRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
            var routes = [{ path: '', component: _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"] }];
            var GettingStartedRoutingModule = /** @class */ (function () {
                function GettingStartedRoutingModule() {
                }
                return GettingStartedRoutingModule;
            }());
            GettingStartedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], GettingStartedRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/getting-started/getting-started.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/getting-started/getting-started.component.scss ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MifQ== */";
            /***/ 
        }),
        /***/ "./src/app/getting-started/getting-started.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/getting-started/getting-started.component.ts ***!
          \**************************************************************/
        /*! exports provided: GettingStartedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function () { return GettingStartedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GettingStartedComponent = /** @class */ (function () {
                function GettingStartedComponent() {
                }
                GettingStartedComponent.prototype.ngOnInit = function () {
                };
                return GettingStartedComponent;
            }());
            GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-getting-started',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/getting-started/getting-started.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/getting-started/getting-started.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], GettingStartedComponent);
            /***/ 
        }),
        /***/ "./src/app/getting-started/getting-started.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/getting-started/getting-started.module.ts ***!
          \***********************************************************/
        /*! exports provided: GettingStartedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function () { return GettingStartedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started-routing.module */ "./src/app/getting-started/getting-started-routing.module.ts");
            /* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            var GettingStartedModule = /** @class */ (function () {
                function GettingStartedModule() {
                }
                return GettingStartedModule;
            }());
            GettingStartedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_3__["GettingStartedRoutingModule"]
                    ]
                })
            ], GettingStartedModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=getting-started-getting-started-module-es2015.js.map
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map