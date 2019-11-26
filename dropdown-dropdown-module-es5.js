(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dropdown-dropdown-module"], {
        /***/ "./node_modules/raw-loader/index.js!./src/app/dropdown/dropdown.component.html": 
        /*!****************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/dropdown/dropdown.component.html ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"dropdown\"><h1 class=\"my-3 d-none d-lg-block\">Dropdown</h1></a>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <h4 class=\"card-header\">Installation and usage</h4>\n    <div class=\"card-body\">\n        <p>See <a routerLink=\"'/getting-started'\">getting started</a> for a complete setup.</p>\n        <strong>Steps to get started:</strong>\n        <ol class=\"list-group list-group-ordered mb-3\">\n            <li class=\"list-group-item\">Install using npm (see <a routerLink=\"'/getting-started'\">getting started</a>)</li>\n            <li class=\"list-group-item\">Import <code>ngbDropdownModule</code> (if you're not including <code>ngbModule</code>)</li>\n            <li class=\"list-group-item\">Import @sebgroup/boostrap dropdown styles (if you're not including all of bootstrap)</li>\n        </ol>\n        <strong>Import dropdown module:</strong>\n        <exemplify [sources]=\"[{\n        'name':'app.module.ts',\n        'src':'...\\nimport {NgbDropdownModule} from &quot;@ng-bootstrap/ng-bootstrap&quot;;'+\n        '\\n\\n@NgModule({\\n'+\n        '  declarations: [AppComponent],\\n'+\n        '  imports: [\\n'+\n        '    ...\\n'+\n        '    NgbDropdownModule // <-- Add this line\\n'+\n        '  ]\\n'+\n        '})','lang':'js'\n        }]\"></exemplify>\n        <strong class=\"mt-3 d-block\">Import dropdown styles:</strong>\n        <p>This component is meant to be used together with <a href=\"https://github.com/sebgroup/bootstrap\" target=\"_blank\">@sebgroup/bootstrap</a> and in order for the component to get the correct appearance you need to import styles from @sebgroup/bootstrap files to your project.</p>\n        <exemplify [sources]=\"[{\n        'name':'styles.scss',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/core\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/reboot\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/dropdown\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/ng-bootstrap/scss/styles/ngb-dropdown\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/fonts/scss/seb-fonts\\';','lang':'css'\n        }]\"></exemplify>\n    </div>\n</div>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\">\n    <strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with scrolling content behind the dropdown on mobile devices, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing dropdowns. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-dropdown-body-scroll-lock\" target=\"_blank\">stack blitz</a>.\n    <br><br><strong>Dropdown cut off?</strong> If the dropdown is placed inside a container with overflow set to auto or hidden you should consider adding container=\"body\" to add the dropdown to the body element instead, this to avoid cutting off the dropdown menu.\n    <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\" [checked]=\"useContainerBody\" (change)=\"toggleContainer(useContainerBody)\">\n        <label class=\"custom-control-label\" for=\"customCheckInline\">Use container='body'</label>\n    </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"dropdownExample\">\n    <h4 class=\"card-header\">\n       Use dropdown as select\n    </h4>\n    <div class=\"card-body\">\n        <form>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-auto\">\n                    <label for=\"ngb_dropdown\">Example dropdown select</label>\n                    <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\" (openChange)=\"toggleBodyLock($event, dropdownMenu)\">\n                        <button class=\"btn btn-outline-primary w-100\" id=\"ngb_dropdown\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\" #dropdownMenu>\n                            <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <code>\n            <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n        </code>\n        <exemplify [selector]=\"'#dropdownExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"multiselectExample\">\n    <h4 class=\"card-header\">\n        Use dropdown as a multi-select\n    </h4>\n    <div class=\"card-body\">\n        <form>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-auto\">\n                    <label for=\"ngb_multiselect\">Example multi-select</label>\n                    <div ngbDropdown #multiSelect=\"ngbDropdown\" [container]=\"useContainerBody ? 'body' : 'null'\">\n                        <button class=\"btn btn-secondary w-100\" id=\"ngb_multiselect\" ngbDropdownToggle>{{selectedMulti.length === 0 ? 'select...': selectedMulti.length === 1 ? selectedMulti[0]: selectedMulti.length + ' selected'}}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"ngb_multiselect\" class=\"w-100 mb-3\">\n                            <div class=\"dropdown-control\">\n                                <div class=\"row mb-2 d-sm-none\">\n                                    <div class=\"col text-right\">\n                                        <span>Close</span><i class=\"far fa-times ml-2\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"btn-group w-100\">\n                                    <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();deselectAll()\">None</button>\n                                    <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();selectAll()\">All</button>\n                                </div>\n                                <div class=\"dropdown-divider\"></div>\n                            </div>\n                            <div class=\"dropdown-multi-select-options\">\n                                <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"$event.stopPropagation();select(option)\" [ngClass]=\"{'active':selectedMulti.indexOf(option) !== -1}\">{{option}}</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <code>\n            <p class=\"mt-3 mb-0\">Selected: {{selectedMulti | json}}</p>\n        </code>\n        <exemplify [selector]=\"'#multiselectExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"dropdownSizeExample\">\n    <h4 class=\"card-header\">\n        Angular dropdown select sizing\n    </h4>\n    <div class=\"card-body\">\n        <form>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-auto\">\n                    <label for=\"dropdownSmall\">Small dropdown select</label>\n                    <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n                        <button class=\"btn btn-secondary btn-sm w-100\" id=\"dropdownSmall\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownSmall\" class=\"w-100 mb-3\">\n                            <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-auto\">\n                    <label for=\"dropdownNormal\">Normal dropdown select</label>\n                    <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n                        <button class=\"btn btn-secondary w-100\" id=\"dropdownNormal\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownNormal\" class=\"w-100 mb-3\">\n                            <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-auto\">\n                    <label for=\"dropdownLarge\">Large dropdown select</label>\n                    <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n                        <button class=\"btn btn-secondary btn-lg w-100\" id=\"dropdownLarge\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLarge\" class=\"w-100 mb-3\">\n                            <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <code>\n            <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n        </code>\n        <exemplify [selector]=\"'#dropdownSizeExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n    </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./src/app/dropdown/dropdown-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/dropdown/dropdown-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: DropdownRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownRoutingModule", function () { return DropdownRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/dropdown/dropdown.component.ts");
            var routes = [{ path: '', component: _dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"] }];
            var DropdownRoutingModule = /** @class */ (function () {
                function DropdownRoutingModule() {
                }
                return DropdownRoutingModule;
            }());
            DropdownRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DropdownRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/dropdown/dropdown.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/dropdown/dropdown.component.scss ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIn0= */";
            /***/ 
        }),
        /***/ "./src/app/dropdown/dropdown.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/dropdown/dropdown.component.ts ***!
          \************************************************/
        /*! exports provided: DropdownComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () { return DropdownComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mobile-detect.service */ "./src/app/services/mobile-detect.service.ts");
            var DropdownComponent = /** @class */ (function () {
                function DropdownComponent(mobileDetectService) {
                    this.mobileDetectService = mobileDetectService;
                    this.options = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
                    this.selectedMulti = []; // selected options for multi-select example
                    this.useContainerBody = true;
                }
                /**
                 * Select
                 * @Param {string} option - option to be selected/deselected
                 */
                DropdownComponent.prototype.select = function (option) {
                    // get index of option in selected options
                    var index = this.selectedMulti.indexOf(option);
                    // if option has index i.e. exists in array...
                    if (index !== -1) {
                        // ...remove it from the array
                        this.selectedMulti.splice(index, 1);
                    }
                    else {
                        // ...if not add it to the array
                        this.selectedMulti.push(option);
                    }
                };
                /**
                 * Select all - selects all options
                 */
                DropdownComponent.prototype.selectAll = function () {
                    this.selectedMulti = this.options.slice();
                };
                /**
                 * Deselect all - deselects all options
                 */
                DropdownComponent.prototype.deselectAll = function () {
                    this.selectedMulti = [];
                };
                DropdownComponent.prototype.toggleBodyLock = function (show, templateRef) {
                    if (this.mobileDetectService.isMobile()) {
                        if (show) {
                            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["disableBodyScroll"])(templateRef);
                        }
                        else {
                            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])(templateRef);
                        }
                    }
                };
                DropdownComponent.prototype.toggleContainer = function (value) {
                    this.useContainerBody = !this.useContainerBody;
                };
                return DropdownComponent;
            }());
            DropdownComponent.ctorParameters = function () { return [
                { type: _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectService"] }
            ]; };
            DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dropdown',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/index.js!./src/app/dropdown/dropdown.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/dropdown/dropdown.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectService"]])
            ], DropdownComponent);
            /***/ 
        }),
        /***/ "./src/app/dropdown/dropdown.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/dropdown/dropdown.module.ts ***!
          \*********************************************/
        /*! exports provided: DropdownModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function () { return DropdownModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _dropdown_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-routing.module */ "./src/app/dropdown/dropdown-routing.module.ts");
            /* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/dropdown/dropdown.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DropdownModule = /** @class */ (function () {
                function DropdownModule() {
                }
                return DropdownModule;
            }());
            DropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
                        _dropdown_routing_module__WEBPACK_IMPORTED_MODULE_3__["DropdownRoutingModule"]
                    ]
                })
            ], DropdownModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=dropdown-dropdown-module-es2015.js.map
//# sourceMappingURL=dropdown-dropdown-module-es5.js.map
//# sourceMappingURL=dropdown-dropdown-module-es5.js.map