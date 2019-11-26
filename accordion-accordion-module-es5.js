(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion-accordion-module"], {
        /***/ "./node_modules/raw-loader/index.js!./src/app/accordion/accordion.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/accordion/accordion.component.html ***!
          \******************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"accordion\"><h1 class=\"my-3 d-none d-lg-block\">Accordion</h1></a>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <h4 class=\"card-header\">Installation and usage</h4>\n    <div class=\"card-body\">\n        <p>See <a routerLink=\"'/getting-started'\">getting started</a> for a complete setup.</p>\n        <strong>Steps to get started:</strong>\n        <ol class=\"list-group list-group-ordered mb-3\">\n            <li class=\"list-group-item\">Install using npm (see <a routerLink=\"'/getting-started'\">getting started</a>)</li>\n            <li class=\"list-group-item\">Import <code>NgbAccordionModule</code> (if you're not including <code>NgbModule</code>)</li>\n            <li class=\"list-group-item\">Import ngb-accordion.scss</li>\n        </ol>\n        <strong>Import accordion module:</strong>\n        <exemplify [sources]=\"[{\n        'name':'app.module.ts',\n        'src':'...\\nimport {NgbAccordionModule} from &quot;@ng-bootstrap/ng-bootstrap&quot;;'+\n        '\\n\\n@NgModule({\\n'+\n        '  declarations: [AppComponent],\\n'+\n        '  imports: [\\n'+\n        '    ...\\n'+\n        '    NgbAccordionModule // <-- Add this line\\n'+\n        '  ]\\n'+\n        '})','lang':'js'\n        }]\"></exemplify>\n        <strong class=\"mt-3 d-block\">Import ngb-accordion styles:</strong>\n        <exemplify [sources]=\"[{\n        'name':'styles.scss',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/core\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/reboot\\';\\n'+\n'@import \\'~@sebgroup/ng-bootstrap/scss/styles/ngb-accordion\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/fonts/scss/seb-fonts\\';','lang':'css'\n        }]\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <div class=\"card-body\">\n        <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n            <ngb-panel id=\"static-1\" title=\"Simple\">\n                <ng-template ngbPanelContent>\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                    aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                    craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                    occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"static-2\">\n                <ng-template ngbPanelTitle>\n                    <span class=\"text-info\">Custom title<i class=\"far fa-heart ml-2\"></i></span>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                        labore sustainable VHS.</p>\n                    <div class=\"form-row justify-content-end\">\n                        <div class=\"col-6 col-sm-auto\">\n                            <button class=\"btn btn-outline-primary w-100\">Secondary</button>\n                        </div>\n                        <div class=\"col-6 col-sm-auto\">\n                            <button class=\"btn btn-primary w-100\">Primary</button>\n                        </div>\n                    </div>\n\n                </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n                <ng-template ngbPanelContent>\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                    aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                    craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                    occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n        <exemplify [selector]=\"'ngb-accordion'\" [escapeStrings]=\"[' ngbPanelContent', ' ngbPanelTitle', '[closeOthers]', ' activeIds']\"></exemplify>\n    </div>\n</div>\n\n";
            /***/ 
        }),
        /***/ "./src/app/accordion/accordion-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/accordion/accordion-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: AccordionRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionRoutingModule", function () { return AccordionRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.component */ "./src/app/accordion/accordion.component.ts");
            var routes = [{ path: '', component: _accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"] }];
            var AccordionRoutingModule = /** @class */ (function () {
                function AccordionRoutingModule() {
                }
                return AccordionRoutingModule;
            }());
            AccordionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AccordionRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/accordion/accordion.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/accordion/accordion.component.scss ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MifQ== */";
            /***/ 
        }),
        /***/ "./src/app/accordion/accordion.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/accordion/accordion.component.ts ***!
          \**************************************************/
        /*! exports provided: AccordionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () { return AccordionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AccordionComponent = /** @class */ (function () {
                function AccordionComponent() {
                }
                AccordionComponent.prototype.ngOnInit = function () {
                };
                return AccordionComponent;
            }());
            AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-accordion',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/accordion/accordion.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion.component.scss */ "./src/app/accordion/accordion.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AccordionComponent);
            /***/ 
        }),
        /***/ "./src/app/accordion/accordion.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/accordion/accordion.module.ts ***!
          \***********************************************/
        /*! exports provided: AccordionModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function () { return AccordionModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _accordion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-routing.module */ "./src/app/accordion/accordion-routing.module.ts");
            /* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion.component */ "./src/app/accordion/accordion.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var AccordionModule = /** @class */ (function () {
                function AccordionModule() {
                }
                return AccordionModule;
            }());
            AccordionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAccordionModule"],
                        _accordion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccordionRoutingModule"]
                    ]
                })
            ], AccordionModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=accordion-accordion-module-es2015.js.map
//# sourceMappingURL=accordion-accordion-module-es5.js.map
//# sourceMappingURL=accordion-accordion-module-es5.js.map