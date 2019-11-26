(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tooltip-tooltip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tooltip/tooltip.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tooltip/tooltip.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tooltips\"><h1 class=\"my-3 d-none d-lg-block\">Tooltips</h1></a>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n    <h4 class=\"card-header\">Installation and usage</h4>\n    <div class=\"card-body\">\n        <p>See <a routerLink=\"'/getting-started'\">getting started</a> for a complete setup.</p>\n        <strong>Steps to get started:</strong>\n        <ol class=\"list-group list-group-ordered mb-3\">\n            <li class=\"list-group-item\">Install using npm (see <a routerLink=\"'/getting-started'\">getting started</a>)</li>\n            <li class=\"list-group-item\">Import <code>NgbTooltipModule</code> (if you're not including <code>NgbModule</code>)</li>\n            <li class=\"list-group-item\">Import ngb-tooltip.scss and @sebgroup/boostrap tooltip styles (if you're not including all of bootstrap)</li>\n        </ol>\n        <strong>Import tooltip module:</strong>\n        <exemplify [sources]=\"[{\n        'name':'app.module.ts',\n        'src':'...\\nimport {NgbTooltipModule} from &quot;@ng-bootstrap/ng-bootstrap&quot;;'+\n        '\\n\\n@NgModule({\\n'+\n        '  declarations: [AppComponent],\\n'+\n        '  imports: [\\n'+\n        '    ...\\n'+\n        '    NgbTooltipModule // <-- Add this line\\n'+\n        '  ]\\n'+\n        '})','lang':'js'\n        }]\"></exemplify>\n        <strong class=\"mt-3 d-block\">Import tooltip styles:</strong>\n        <p>This component is meant to be used together with <a href=\"https://github.com/sebgroup/bootstrap\" target=\"_blank\">@sebgroup/bootstrap</a> and in order for the component to get the correct appearance you need to import styles from @sebgroup/bootstrap files to your project.</p>\n        <exemplify [sources]=\"[{\n        'name':'styles.scss',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/core\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/reboot\\';\\n'+\n'@import \\'~@sebgroup/bootstrap/scss/styles/tooltip\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/ng-bootstrap/scss/styles/ngb-tooltip\\'; /* <-- Add this line */\\n'+\n'@import \\'~@sebgroup/fonts/scss/seb-fonts\\';','lang':'css'\n        }]\"></exemplify>\n    </div>\n</div>\n<h2 class=\"mt-4\">Examples</h2>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"tooltipInlineExample\">\n    <h4 class=\"card-header\">Tooltip within text</h4>\n    <div class=\"card-body\">\n        <p>\n            Lorem ipsum dolor sit amet, <abbr placement=\"top\" ngbTooltip=\"Consectētur, third-person singular present active subjunctive of consector.\" container=\"body\">consectetur</abbr> adipiscing elit. Mauris in justo id eros mattis aliquet non vel orci. Cras a pulvinar enim, congue pretium velit. Donec ut bibendum felis, vel ultricies metus. Suspendisse <span class=\"text-help\" placement=\"top\" ngbTooltip=\"This time we've used the class 'text-help' to dash underline condimentum.\" container=\"body\">condimentum</span> magna vitae orci facilisis, nec lacinia elit semper.\n        </p>\n        <exemplify [selector]=\"'#tooltipInlineExample > .card-body > p'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n    </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\" id=\"tooltipTableExample\">\n    <h4 class=\"card-header\">Tooltip inside table</h4>\n    <div class=\"card-body\">\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th><span class=\"text-help\" ngbTooltip=\"This column shows first names.\" container=\"body\">First Name</span></th>\n                <th>Last Name</th>\n                <th>Username</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <th scope=\"row\">1</th>\n                <td><span class=\"text-help\" ngbTooltip=\"The name is Mark.\" container=\"body\">Mark</span></td>\n                <td>Otto</td>\n                <td>@mdo</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">2</th>\n                <td><span class=\"text-help\" ngbTooltip=\"The name is Jacob.\" container=\"body\">Jacob</span></td>\n                <td>Thornton</td>\n                <td>@fat</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">3</th>\n                <td><span class=\"text-help\" ngbTooltip=\"The name is Larry.\" container=\"body\">Larry</span></td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n            </tr>\n            </tbody>\n        </table>\n        <exemplify [selector]=\"'#tooltipTableExample .card-body .table'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tooltip/tooltip-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tooltip/tooltip-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TooltipRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipRoutingModule", function() { return TooltipRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/tooltip/tooltip.component.ts");




const routes = [{ path: '', component: _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"] }];
let TooltipRoutingModule = class TooltipRoutingModule {
};
TooltipRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TooltipRoutingModule);



/***/ }),

/***/ "./src/app/tooltip/tooltip.component.scss":
/*!************************************************!*\
  !*** ./src/app/tooltip/tooltip.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tooltip/tooltip.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tooltip/tooltip.component.ts ***!
  \**********************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TooltipComponent = class TooltipComponent {
    constructor() { }
    ngOnInit() {
    }
};
TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tooltip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/tooltip/tooltip.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/tooltip/tooltip.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TooltipComponent);



/***/ }),

/***/ "./src/app/tooltip/tooltip.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tooltip/tooltip.module.ts ***!
  \*******************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-routing.module */ "./src/app/tooltip/tooltip-routing.module.ts");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/tooltip/tooltip.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let TooltipModule = class TooltipModule {
};
TooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["TooltipComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_3__["TooltipRoutingModule"]
        ]
    })
], TooltipModule);



/***/ })

}]);
//# sourceMappingURL=tooltip-tooltip-module-es2015.js.map