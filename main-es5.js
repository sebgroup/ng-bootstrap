(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html": 
        /*!**************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<div class=\"overflow-hidden\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n    <span class=\"navbar-brand\" href=\"#\">\n      {{name}}\n    </span>\n        <a class=\"github-ribbon\" href=\"https://github.com/sebgroup/ng-bootstrap\" target=\"_blank\">Fork me on GitHub</a>\n        <span class=\"navbar-text d-none d-sm-inline-block\">\n          A SEB theme for ng-bootstrap\n      </span>\n    </nav>\n    <div class=\"bg-primary-element py-5 px-3\">\n        <h1 class=\"display-3 text-white\">{{name}}</h1>\n        <p class=\"lead text-white\">A SEB theme for ng-bootstrap</p>\n    </div>\n    <div class=\"container-content mb-5\">\n        <ul class=\"nav flex-column d-none d-lg-block pt-3\" #stickyMenu [ngClass]=\"{'position-fixed': sticky}\">\n            <li class=\"nav-item\" *ngFor=\"let route of routes\">\n                <a class=\"nav-link\" routerLink=\"{{route.path}}\" routerLinkActive=\"active\">{{route.name}}</a>\n            </li>\n        </ul>\n        <div class=\"row mt-4 d-lg-none\">\n            <div ngbDropdown (openChange)=\"toggleBodyLock($event, dropdownMenu)\" class=\"col-12 col-sm-auto\" #stickyMobileMenu [ngClass]=\"{'position-fixed': stickyMobile}\">\n                <button class=\"btn btn-lg btn-outline-primary w-100\" id=\"ngb_dropdown\" ngbDropdownToggle> {{$selected | async}}</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\" #dropdownMenu>\n                    <button *ngFor=\"let route of routes\" class=\"dropdown-item\" routerLink=\"{{route.path}}\" routerLinkActive=\"active\">{{route.name}}</button>\n                </div>\n            </div>\n        </div>\n      <router-outlet></router-outlet>\n    </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
                { path: 'accordion', loadChildren: function () { return __webpack_require__.e(/*! import() | accordion-accordion-module */ "accordion-accordion-module").then(__webpack_require__.bind(null, /*! ./accordion/accordion.module */ "./src/app/accordion/accordion.module.ts")).then(function (m) { return m.AccordionModule; }); } },
                { path: 'tooltip', loadChildren: function () { return __webpack_require__.e(/*! import() | tooltip-tooltip-module */ "tooltip-tooltip-module").then(__webpack_require__.bind(null, /*! ./tooltip/tooltip.module */ "./src/app/tooltip/tooltip.module.ts")).then(function (m) { return m.TooltipModule; }); } },
                { path: 'datepicker', loadChildren: function () { return __webpack_require__.e(/*! import() | datepicker-datepicker-module */ "datepicker-datepicker-module").then(__webpack_require__.bind(null, /*! ./datepicker/datepicker.module */ "./src/app/datepicker/datepicker.module.ts")).then(function (m) { return m.DatepickerModule; }); } },
                { path: 'dropdown', loadChildren: function () { return __webpack_require__.e(/*! import() | dropdown-dropdown-module */ "dropdown-dropdown-module").then(__webpack_require__.bind(null, /*! ./dropdown/dropdown.module */ "./src/app/dropdown/dropdown.module.ts")).then(function (m) { return m.DropdownModule; }); } },
                { path: 'getting-started', loadChildren: function () { return __webpack_require__.e(/*! import() | getting-started-getting-started-module */ "getting-started-getting-started-module").then(__webpack_require__.bind(null, /*! ./getting-started/getting-started.module */ "./src/app/getting-started/getting-started.module.ts")).then(function (m) { return m.GettingStartedModule; }); } },
                { path: 'modal', loadChildren: function () { return __webpack_require__.e(/*! import() | modal-modal-module */ "modal-modal-module").then(__webpack_require__.bind(null, /*! ./modal/modal.module */ "./src/app/modal/modal.module.ts")).then(function (m) { return m.ModalModule; }); } },
                { path: '**', redirectTo: 'getting-started' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = ".github-ribbon {\n  background: #60cd18;\n  padding: 1rem;\n  transform: rotate(45deg);\n  right: -60px;\n  top: 40px;\n  width: 250px;\n  text-align: center;\n  display: inline-block;\n  position: absolute;\n  color: #fff;\n}\n.github-ribbon:hover {\n  color: #fff;\n}\n.github-ribbon + .navbar-text {\n  margin-right: 180px;\n}\n.container-fluid {\n  max-width: 1200px;\n}\n.nav.flex-column {\n  position: absolute;\n  left: 0.25rem;\n}\n.nav.flex-column.position-fixed {\n  top: 0;\n}\na.nav-link.active {\n  position: relative;\n}\na.nav-link.active::before {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: calc(100% - .25rem);\n  background: #60cd18;\n  position: absolute;\n  left: -4px;\n  top: 0.125rem;\n  -webkit-animation: menu-highlight 200ms ease-in-out;\n          animation: menu-highlight 200ms ease-in-out;\n}\n.dropdown.position-fixed {\n  z-index: 1000;\n  min-width: 100%;\n  left: 0;\n  top: 0;\n  padding: 0;\n}\n.dropdown.position-fixed .btn {\n  border-radius: 0;\n  opacity: 1;\n}\n.dropdown {\n  min-width: 0;\n  transition: min-width 200ms ease-in-out, padding 200ms ease-in-out;\n}\n@-webkit-keyframes menu-highlight {\n  0% {\n    transform: scaleY(0);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n@keyframes menu-highlight {\n  0% {\n    transform: scaleY(0);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1ib290c3RyYXAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkMyQ3NCO0VEMUN0QixhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQ0hTO0FDQ1g7QUZHRTtFQUNFLFdDTE87QUNJWDtBRklBO0VBQ0UsbUJBQUE7QUVERjtBRkdBO0VBQ0UsaUJBQUE7QUVBRjtBRkdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FFQUY7QUZDRTtFQUNFLE1BQUE7QUVDSjtBRkdBO0VBQ0Usa0JBQUE7QUVBRjtBRkNFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkNPb0I7RUROcEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUVDSjtBRkdBO0VBQ0UsYUNrVWtDO0VEalVsQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FFQUY7QUZDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBRUNKO0FGRUE7RUFDRSxZQUFBO0VBQ0Esa0VBQUE7QUVDRjtBRkVBO0VBQ0U7SUFDRSxvQkFBQTtFRUNGO0VGQ0E7SUFDRSxvQkFBQTtFRUNGO0FBQ0Y7QUZQQTtFQUNFO0lBQ0Usb0JBQUE7RUVDRjtFRkNBO0lBQ0Usb0JBQUE7RUVDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7IC8vIGltcG9ydHMgYWxsIHNhc3MgdmFyaWFibGVzIHVzZWQgYnkgYm9vdHN0cmFwKlxuQGltcG9ydCBcIn5Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3Mvc3R5bGVzL2Z1bmN0aW9uc1wiOyAvLyBpbXBvcnQgYWxsIHNhc3MgZnVuY3Rpb25zIHVzZWQgYnkgYm9vdHN0cmFwKlxuXG4uZ2l0aHViLXJpYmJvbiB7XG4gIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICByaWdodDogLTYwcHg7XG4gIHRvcDogNDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogJHdoaXRlO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG59XG4uZ2l0aHViLXJpYmJvbiArIC5uYXZiYXItdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMTgwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiBtYXBfZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAneGwnKTtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogbWFwX2dldCgkc3BhY2VycywgMSk7XG4gICYucG9zaXRpb24tZml4ZWQge1xuICAgIHRvcDogMDtcbiAgfVxufVxuXG5hLm5hdi1saW5rLmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gLjI1cmVtKTtcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgdG9wOiAwLjEyNXJlbTtcbiAgICBhbmltYXRpb246IG1lbnUtaGlnaGxpZ2h0IDIwMG1zIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5kcm9wZG93bi5wb3NpdGlvbi1maXhlZCB7XG4gIHotaW5kZXg6ICR6aW5kZXgtZHJvcGRvd247XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5kcm9wZG93biB7XG4gIG1pbi13aWR0aDogMDtcbiAgdHJhbnNpdGlvbjogbWluLXdpZHRoIDIwMG1zIGVhc2UtaW4tb3V0LCBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIG1lbnUtaGlnaGxpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICB9XG59XG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZTllOSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZGVkZSAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlY2VjZSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYWRhZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2ODY4NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NDk0OSAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjEyMSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICAgICksXG4gICAgJGdyYXlzXG4pO1xuXG5cbiRyZWQ6ICAgICAgICAgICAgICAgICAgICNGMDM1Mjk7XG4kcmVkLWRhcms6ICAgICAgICAgICAgICAjRDgxQTFBOyAvLyBTRUIgc3BlY2lmaWNcbiRyZWQtZGFya2VyOiAgICAgICAgICAgICNCQjAwMEM7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdy1kYXJrZXI6ICAgICAgICAgI0Y4QTAwMDsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcms6ICAgICAgICAgICAjRkZCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3c6ICAgICAgICAgICAgICAgICNGRkM1MDA7XG4kZ3JlZW46ICAgICAgICAgICAgICAgICAjNjBjZDE4O1xuJGdyZWVuLWRhcms6ICAgICAgICAgICAgIzQ1QjQwMDsgLy8gU0VCIHNwZWNpZmljXG4kZ3JlZW4tZGFya2VyOiAgICAgICAgICAjMzc5RDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlOiAgICAgICAgICAgICAgICAgICM0MUIwRUU7XG4kYmx1ZS1kYXJrOiAgICAgICAgICAgICAjMDA5MkUxOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlLWRhcmtlcjogICAgICAgICAgICMwMDdBQzc7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZTogICAgICAgICAgICAgICAgIzY3M0FCNjtcbiRwdXJwbGUtZGFyazogICAgICAgICAgICM0RjJDOTk7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZS1kYXJrZXI6ICAgICAgICAgIzNGMjU4NzsgLy8gU0VCIHNwZWNpZmljXG5cblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4tZGFya2VyICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRwdXJwbGUgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkLWRhcmsgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICAgKSxcbiAgICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyB0aGVtZSBpY29ucyAvLyBTRUIgc3BlY2lmaWNcbiRpY29uLWZpbGwtY29sb3I6ICRibGFjaztcbiR0aGVtZS1pY29uczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWljb25zOiBtYXAtbWVyZ2UoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGQ9J000MzUuODQ4IDgzLjQ2NkwxNzIuODA0IDM0Ni41MWwtOTYuNjUyLTk2LjY1MmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwbC0yOC4yODQgMjguMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTMzLjQyMSAxMzMuNDIxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0yOC4yODQtMjguMjg0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQ4IDgwdjM1MmMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4SDQ4Yy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4VjgwYzAtMjYuNTEgMjEuNDktNDggNDgtNDhoMzUyYzI2LjUxIDAgNDggMjEuNDkgNDggNDh6bS00OCAzNDZWODZhNiA2IDAgMCAwLTYtNkg1NGE2IDYgMCAwIDAtNiA2djM0MGE2IDYgMCAwIDAgNiA2aDM0MGE2IDYgMCAwIDAgNi02ek0yMjQgMTE4YzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhcm5pbmdcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIjogICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J00yNDguNzQ3IDIwNC43MDVsNi41ODggMTEyYy4zNzMgNi4zNDMgNS42MjYgMTEuMjk1IDExLjk3OSAxMS4yOTVoNDEuMzdhMTIgMTIgMCAwIDAgMTEuOTc5LTExLjI5NWw2LjU4OC0xMTJjLjQwNS02Ljg5My01LjA3NS0xMi43MDUtMTEuOTc5LTEyLjcwNWgtNTQuNTQ3Yy02LjkwMyAwLTEyLjM4MyA1LjgxMi0xMS45NzggMTIuNzA1ek0zMzAgMzg0YzAgMjMuMTk2LTE4LjgwNCA0Mi00MiA0MnMtNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MiA0MiAxOC44MDQgNDIgNDJ6bS0uNDIzLTM2MC4wMTVjLTE4LjQzMy0zMS45NTEtNjQuNjg3LTMyLjAwOS04My4xNTQgMEw2LjQ3NyA0NDAuMDEzQy0xMS45NDUgNDcxLjk0NiAxMS4xMTggNTEyIDQ4LjA1NCA1MTJINTI3Ljk0YzM2Ljg2NSAwIDYwLjAzNS0zOS45OTMgNDEuNTc3LTcxLjk4N0wzMjkuNTc3IDIzLjk4NXpNNTMuMTkxIDQ1NS4wMDJMMjgyLjgwMyA1Ny4wMDhjMi4zMDktNC4wMDIgOC4wODUtNC4wMDIgMTAuMzk0IDBsMjI5LjYxMiAzOTcuOTkzYzIuMzA4IDQtLjU3OSA4Ljk5OC01LjE5NyA4Ljk5OEg1OC4zODhjLTQuNjE3LjAwMS03LjUwNC00Ljk5Ny01LjE5Ny04Ljk5N3onIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgJHRoZW1lLWljb25zXG4pO1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVyczogICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYnV0dG9uLXZhcmlhdGlvbnM6ICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZy1ib290c3RyYXA6ICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWFuZ3VsYXItZ2VuZXJpYy10YWJsZTogIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmd4LXRvYXN0cjogICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMDogMCxcbiAgICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgICAgMzogJHNwYWNlcixcbiAgICAgIDQ6ICgkc3BhY2VyICogMiksXG4gICAgICA1OiAoJHNwYWNlciAqIDMpXG4gICAgKSxcbiAgICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAyNTogMjUlLFxuICAgICAgNTA6IDUwJSxcbiAgICAgIDc1OiA3NSUsXG4gICAgICAxMDA6IDEwMCUsXG4gICAgICBhdXRvOiBhdXRvXG4gICAgKSxcbiAgICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcblxuLy8gR3JpZCBjb250YWluZXJzXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDMpKjIgIWRlZmF1bHQ7XG5cbi8vIFNFQiBzcGVjaWZpYyBvdmVycmlkZSB3aGVuIHJlc3BvbnNpdmUgZ3V0dGVycyBhcmUgZW5hYmxlZFxuQGlmICgkZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVycykge1xuICAkZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDIpO1xufVxuXG4vLyBTRUIgc3BlY2lmaWNcbiRyZXNwb25zaXZlLWd1dHRlcnM6IChcbiAgc206bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgbGc6bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgeGw6bWFwLWdldCgkc3BhY2VycywgMykqMlxuKSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbjouNHMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbjogICAgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gRm9udHNcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kc2ViLWZvbnQtcGF0aDogICAgICAgICAgICAgICBcIn5Ac2ViZ3JvdXAvZm9udHMvZm9udHNcIiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcIlNFQlNhbnNTZXJpZlwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlRyZWJ1Y2hldFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICgkZm9udC1zaXplLWJhc2UgKiAuNjg3NSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMyAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDtcblxuJGgxLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGgxLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDItc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgzLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRibHVlLWRhcmtlciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaW5rLXdlaWdodDogICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcjogICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3I6ICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZD0nTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptLTYgNDAwSDU0YTYgNiAwIDAgMS02LTZWODZhNiA2IDAgMCAxIDYtNmgzNDBhNiA2IDAgMCAxIDYgNnYzNDBhNiA2IDAgMCAxLTYgNnptLTU0LTMwNGwtMTM2IC4xNDVjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJWMTY3LjljMCA2LjcyMiA1LjUyMiAxMi4xMzMgMTIuMjQzIDExLjk5OGw1OC4wMDEtMi4xNDFMOTkuNTE1IDM0MC40ODVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwyMy4wMyAyMy4wMjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3IDBsMTYyLjcyOS0xNjIuNzI5LTIuMTQxIDU4LjAwMWMtLjEzNiA2LjcyMSA1LjI3NSAxMi4yNDIgMTEuOTk4IDEyLjI0MmgyNy43NTVjNi42MjggMCAxMi01LjM3MyAxMi0xMkwzNTIgMTQwYzAtNi42MjctNS4zNzMtMTItMTItMTJ6JyBmaWxsPScjeyRleHRlcm5hbC1saW5rLWljb24tY29sb3J9JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb246ICAgICAgICBzdHItcmVwbGFjZSgkZXh0ZXJuYWwtbGluay1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSk7XG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgICAgICAgeHM6IDAsXG4gICAgICAgIHNtOiA1NzZweCxcbiAgICAgICAgbWQ6IDc2OHB4LFxuICAgICAgICBsZzogOTkycHgsXG4gICAgICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjYyNXJlbSAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuMjc1cmVtIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibHVlLCAuMDc1KSAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtZXhwYW5kLWJnOiAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbjogICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3onIGZpbGw9JyN7JGJsdWV9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbi1hY3RpdmU6ICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkZHJvcGRvd24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJHdoaXRlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGJsdWU7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAxNnB4IDE2cHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZShtYXAtZ2V0KCR0aGVtZS1pY29ucywgJ3N1Y2Nlc3MnKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnZGFuZ2VyJyksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRpY29uLWZpbGwtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bi1iYWNrZHJvcDogICAgICAgICAgOTkwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kbmF2LXRhYnMtbGluay1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gTmF2YmFyXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAuNDM3NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG5cbi8vIFRvb2x0aXBzXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vNTAwXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGFsZXJ0LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGFsZXJ0LWljb24taGVpZ2h0OiAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1wYWRkaW5nOiAkYWxlcnQtaWNvbi13aWR0aCArICgkYWxlcnQtcGFkZGluZy14KjIpOyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gVG9hc3Qgbm90aWZpY2F0aW9uc1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGFsZXJ0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAwIDAgLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYnVsbGV0LWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMSAxJyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgc3R5bGU9J2ZpbGw6I3skZGFya307JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWNoZWNrLWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGQ9J000MzUuODQ4IDgzLjQ2NkwxNzIuODA0IDM0Ni41MWwtOTYuNjUyLTk2LjY1MmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwbC0yOC4yODQgMjguMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTMzLjQyMSAxMzMuNDIxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0yOC4yODQtMjguMjg0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGdyZWVufScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6ICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBGaWd1cmVzXG5cbi8vIEJyZWFkY3J1bWJzXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yLWxpZ2h0OiAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yLWxpZ2h0OiAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00yNC43MDcgMzguMTAxTDQuOTA4IDU3Ljg5OWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDE4NS42MDcgMjU2IDQuOTA4IDQzNy4xM2MtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDI0LjcwNyA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjA5LjQxNC0yMDkuNDE0YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw0MS42NzggMzguMTAxYy00LjY4Ny00LjY4Ny0xMi4yODUtNC42ODctMTYuOTcxIDB6JyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItYmFjay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTIzMS4yOTMgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw3MC4zOTMgMjU2IDI1MS4wOTIgNzQuODdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIzMS4yOTMgMzguMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDQuOTA4IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTQuMzIyIDQ3My45YzQuNjg3IDQuNjg2IDEyLjI4NSA0LjY4NiAxNi45NzEtLjAwMXonIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLXdpZHRoOiAgICAgICAgICAxNXB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItaGVpZ2h0OiAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQ2xvc2VcblxuLy8gQ29kZVxuXG4vLyBQcmludGluZ1xuXG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvdmFyaWFibGVzXCI7XG5cbi8vIFNjcm9sbGJhclxuJHNjcm9sbGJhci10cmFjay1iZzogICRncmF5LTEwMDtcbiRzY3JvbGxiYXItdGh1bWItYmc6ICAkZ3JheS00MDA7XG4kc2Nyb2xsYmFyLXRyYWNrLWRhcmstYmc6ICAkZGFyaztcbiRzY3JvbGxiYXItdGh1bWItZGFyay1iZzogICRncmF5LTkwMDtcbiRzY3JvbGxiYXItdGh1bWItYWN0aXZlLWJnOiAkYmx1ZTtcbiRzY3JvbGxiYXItdGhpY2tuZXNzOiAgICAgMTBweDtcblxuLy8gQWNjb3JkaW9uXG5cbiRhY2NvcmRpb24taWNvbjogICAgICAgICAgICAkZHJvcGRvd24taWNvbiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWljb24tZGlzYWJsZWQ6ICAgc3RyLXJlcGxhY2UoJGFjY29yZGlvbi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZ3JheS00MDAgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1iZy1ob3ZlcjogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZzogICAgMCAxcmVtIDFyZW0gMi41cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXk6ICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy14OiAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmc6ICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LWJnLWFjdGl2ZTogICRhY2NvcmRpb24tYmctaG92ZXIgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1zaXplOiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuIiwiLmdpdGh1Yi1yaWJib24ge1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHJpZ2h0OiAtNjBweDtcbiAgdG9wOiA0MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmdpdGh1Yi1yaWJib246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmdpdGh1Yi1yaWJib24gKyAubmF2YmFyLXRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDE4MHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5uYXYuZmxleC1jb2x1bW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuMjVyZW07XG59XG4ubmF2LmZsZXgtY29sdW1uLnBvc2l0aW9uLWZpeGVkIHtcbiAgdG9wOiAwO1xufVxuXG5hLm5hdi1saW5rLmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmEubmF2LWxpbmsuYWN0aXZlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAuMjVyZW0pO1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00cHg7XG4gIHRvcDogMC4xMjVyZW07XG4gIGFuaW1hdGlvbjogbWVudS1oaWdobGlnaHQgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kcm9wZG93bi5wb3NpdGlvbi1maXhlZCB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmRyb3Bkb3duLnBvc2l0aW9uLWZpeGVkIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZHJvcGRvd24ge1xuICBtaW4td2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IG1pbi13aWR0aCAyMDBtcyBlYXNlLWluLW91dCwgcGFkZGluZyAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBtZW51LWhpZ2hsaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxufSJdfQ== */";
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/mobile-detect.service */ "./src/app/services/mobile-detect.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, mobileDetectService) {
                    var _this = this;
                    this.router = router;
                    this.mobileDetectService = mobileDetectService;
                    this.sticky = false;
                    this.stickyMobile = false;
                    this.name = '@sebgroup/ng-bootstrap';
                    this.routes = [
                        { name: 'Start', path: '/getting-started' },
                        { name: 'Accordion', path: '/accordion' },
                        { name: 'Datepicker', path: '/datepicker' },
                        { name: 'Dropdown', path: '/dropdown' },
                        { name: 'Modal', path: '/modal' },
                        { name: 'Tooltip', path: '/tooltip' }
                    ];
                    this.$selected = router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return Object.values(_this.routes)
                        .find(function (value) { return value.path === event.url; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) { return route.name; }));
                }
                AppComponent.prototype.handleScroll = function () {
                    var windowScroll = window.pageYOffset;
                    this.sticky = windowScroll >= this.elementPosition;
                    this.stickyMobile = windowScroll >= this.mobileElementPosition;
                };
                AppComponent.prototype.handleResize = function () {
                    if (window.pageYOffset === 0) {
                        this.setPosition();
                    }
                };
                AppComponent.prototype.toggleBodyLock = function (show, templateRef) {
                    if (this.mobileDetectService.isMobile()) {
                        if (show) {
                            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__["disableBodyScroll"])(templateRef);
                        }
                        else {
                            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__["enableBodyScroll"])(templateRef);
                        }
                    }
                };
                AppComponent.prototype.setPosition = function () {
                    if (this.menuElement.nativeElement.offsetTop !== 0) {
                        this.elementPosition = this.menuElement.nativeElement.offsetTop;
                    }
                    ;
                    if (this.mobileMenuElement.nativeElement.offsetTop !== 0) {
                        this.mobileElementPosition = this.mobileMenuElement.nativeElement.offsetTop;
                    }
                    ;
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    this.setPosition();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_5__["MobileDetectService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyMenu', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], AppComponent.prototype, "menuElement", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyMobileMenu', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], AppComponent.prototype, "mobileMenuElement", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], AppComponent.prototype, "handleScroll", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], AppComponent.prototype, "handleResize", null);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_5__["MobileDetectService"]])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/services/mobile-detect.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/services/mobile-detect.service.ts ***!
          \***************************************************/
        /*! exports provided: MobileDetectService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetectService", function () { return MobileDetectService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-detect */ "./node_modules/mobile-detect/mobile-detect.js");
            /* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_2__);
            var MobileDetectService = /** @class */ (function () {
                function MobileDetectService() {
                    this._nativeWindow = window;
                }
                Object.defineProperty(MobileDetectService.prototype, "nativeWindow", {
                    get: function () {
                        return this._nativeWindow;
                    },
                    enumerable: true,
                    configurable: true
                });
                MobileDetectService.prototype.isMobile = function () {
                    var md = new mobile_detect__WEBPACK_IMPORTED_MODULE_2__(this.nativeWindow.navigator.userAgent);
                    return !!md.mobile();
                };
                return MobileDetectService;
            }());
            MobileDetectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], MobileDetectService);
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-exemplify */ "./node_modules/angular-exemplify/fesm2015/angular-exemplify.js");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        angular_exemplify__WEBPACK_IMPORTED_MODULE_3__["ExemplifyModule"]
                    ],
                    exports: [
                        angular_exemplify__WEBPACK_IMPORTED_MODULE_3__["ExemplifyModule"]
                    ]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/travis/build/sebgroup/ng-bootstrap/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map