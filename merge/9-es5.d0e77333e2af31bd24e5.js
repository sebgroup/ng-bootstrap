!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var c=t[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{hVeP:function(o,c,n){"use strict";n.r(c),n.d(c,"ModalModule",function(){return k});var a=n("ofXK"),l=n("tyNb"),i=n("4YED"),s=n("1kSV"),b=n("fXoL"),d=n("JbP7");function r(e,t){1&e&&(b.Qb(0,"div",27),b.Qb(1,"h4",28),b.Ac(2,"Modal title"),b.Pb(),b.Pb(),b.Qb(3,"div",29),b.Qb(4,"p"),b.Ac(5,"Modal body text goes here."),b.Pb(),b.Pb(),b.Qb(6,"div",30),b.Qb(7,"button",31),b.ac("click",function(){return t.$implicit.dismiss("Cross click")}),b.Ac(8,"Close"),b.Pb(),b.Qb(9,"button",32),b.ac("click",function(){return t.$implicit.close("Save click")}),b.Ac(10,"Save changes"),b.Pb(),b.Pb())}function m(e,t){1&e&&(b.Qb(0,"div",27),b.Qb(1,"h4",28),b.Ac(2,"Modal title"),b.Pb(),b.Pb(),b.Qb(3,"div",29),b.Qb(4,"p"),b.Ac(5,"Modal body text goes here."),b.Pb(),b.Qb(6,"div",33),b.Qb(7,"p",34),b.Ac(8,"The large aside modal will adjust it's width to the width of the content."),b.Mb(9,"br"),b.Ac(10," Max width = 768px"),b.Mb(11,"br"),b.Ac(12," Min width = 320px "),b.Pb(),b.Pb(),b.Pb(),b.Qb(13,"div",30),b.Qb(14,"button",31),b.ac("click",function(){return t.$implicit.dismiss("Cross click")}),b.Ac(15,"Close"),b.Pb(),b.Qb(16,"button",32),b.ac("click",function(){return t.$implicit.close("Save click")}),b.Ac(17,"Save changes"),b.Pb(),b.Pb())}var u,p,g,h=function(e){return{name:"app.module.ts",src:e,lang:"js"}},f=function(e){return[e]},P=function(e){return{name:"styles.scss",src:e,lang:"css"}},A=function(){return{name:"app.component.ts",src:"https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/modal/modal.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO",lang:"typescript"}},Q=[{path:"",component:(u=function(){function o(t,c){e(this,o),this.document=t,this.modalService=c,this.modal=!1}var c,n,a;return c=o,(n=[{key:"open",value:function(e,t){var o=this,c=this.modalService.open(e,Object.assign(Object.assign({},t),{ariaLabelledBy:"modal-basic-title"})),n=document.getElementsByTagName("ngb-modal-window")[0];c.result.then(function(e){Object(i.a)(),o.closeResult="Closed with: "+e},function(e){Object(i.a)(),o.closeResult="Dismissed "+o.getDismissReason(e)}),Object(i.b)(n)}},{key:"getDismissReason",value:function(e){return e===s.a.ESC?"by pressing ESC":e===s.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e}}])&&t(c.prototype,n),a&&t(c,a),o}(),u.\u0275fac=function(e){return new(e||u)(b.Lb(a.d),b.Lb(s.l))},u.\u0275cmp=b.Fb({type:u,selectors:[["app-modal"]],decls:119,vars:22,consts:[["name","accordion"],[1,"my-3","d-none","d-lg-block"],[1,"card","my-3","mx-n3","mx-md-0"],[1,"card-header"],[1,"card-body"],["routerLink","'/getting-started'"],[1,"list-group","list-group-ordered","mb-3"],[1,"list-group-item"],[3,"sources"],[1,"mt-3","d-block"],[1,"alert","alert-warning","alert-icon","mx-n3","mx-md-0"],["href","https://www.google.com/search?q=content+scrolling+behind+modal","target","_blank",1,"alert-link"],["href","https://github.com/willmcpo/body-scroll-lock","target","_blank",1,"alert-link"],["href","https://stackblitz.com/edit/seb-modal-body-scroll-lock","target","_blank",1,"alert-link"],["id","standardModal",1,"card","my-3","mx-n3","mx-md-0"],[1,"row"],[1,"col-12","col-sm","col-md-auto"],[1,"btn","btn-primary","w-100",3,"click"],[1,"col-12","col-sm","col-md-auto","mt-3","mt-sm-0"],["selector","#standardModal .btn",1,"mt-4",3,"sources"],["id","asideModal",1,"card","my-3","mx-n3","mx-md-0"],["selector","#asideModal .btn",1,"mt-4",3,"sources"],["id","fullscreenModal",1,"card","my-3","mx-n3","mx-md-0"],[1,"btn","btn-primary",3,"click"],["selector","#fullscreenModal .btn",1,"mt-4",3,"sources"],["content",""],["largeContent",""],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"bg-primary-element","text-white","align-self-center","p-3",2,"width","600px","height","600px"],[1,"lead","font-weight-normal"]],template:function(e,t){if(1&e){var o=b.Rb();b.Qb(0,"a",0),b.Qb(1,"h1",1),b.Ac(2,"Modal"),b.Pb(),b.Pb(),b.Qb(3,"div",2),b.Qb(4,"h4",3),b.Ac(5,"Installation and usage"),b.Pb(),b.Qb(6,"div",4),b.Qb(7,"p"),b.Ac(8,"See "),b.Qb(9,"a",5),b.Ac(10,"getting started"),b.Pb(),b.Ac(11," for a complete setup."),b.Pb(),b.Qb(12,"strong"),b.Ac(13,"Steps to get started:"),b.Pb(),b.Qb(14,"ol",6),b.Qb(15,"li",7),b.Ac(16,"Install using npm (see "),b.Qb(17,"a",5),b.Ac(18,"getting started"),b.Pb(),b.Ac(19,")"),b.Pb(),b.Qb(20,"li",7),b.Ac(21,"Import "),b.Qb(22,"code"),b.Ac(23,"NgbModalModule"),b.Pb(),b.Ac(24," (if you're not including "),b.Qb(25,"code"),b.Ac(26,"NgbModule"),b.Pb(),b.Ac(27,")"),b.Pb(),b.Qb(28,"li",7),b.Ac(29,"Import @sebgroup/boostrap modal and animation styles (if you're not including all of bootstrap)"),b.Pb(),b.Pb(),b.Qb(30,"strong"),b.Ac(31,"Import modal module:"),b.Pb(),b.Mb(32,"exemplify",8),b.Qb(33,"strong",9),b.Ac(34,"Import modal and animation styles:"),b.Pb(),b.Mb(35,"exemplify",8),b.Pb(),b.Pb(),b.Qb(36,"div",10),b.Qb(37,"strong"),b.Ac(38,"Mobile development!"),b.Pb(),b.Ac(39," To make the experience extra crisp on mobile devices and more specifically to avoid the issue with "),b.Qb(40,"a",11),b.Ac(41,"scrolling content behind the modal"),b.Pb(),b.Ac(42,", you should consider adding "),b.Qb(43,"a",12),b.Ac(44,"body scroll lock"),b.Pb(),b.Ac(45," to your project when implementing modals. An example implementation for angular can also be found on "),b.Qb(46,"a",13),b.Ac(47,"stack blitz"),b.Pb(),b.Ac(48,"."),b.Pb(),b.Qb(49,"div",14),b.Qb(50,"h4",3),b.Ac(51,"Modal with backdrop"),b.Pb(),b.Qb(52,"div",4),b.Qb(53,"p"),b.Ac(54,"Below is a example of a standard modal opened with a backdrop."),b.Pb(),b.Qb(55,"div",15),b.Qb(56,"div",16),b.Qb(57,"button",17),b.ac("click",function(){b.rc(o);var e=b.pc(116);return t.open(e)}),b.Ac(58,"Open modal"),b.Pb(),b.Pb(),b.Qb(59,"div",18),b.Qb(60,"button",17),b.ac("click",function(){b.rc(o);var e=b.pc(116);return t.open(e,{size:"lg"})}),b.Ac(61,"Open large modal"),b.Pb(),b.Pb(),b.Pb(),b.Mb(62,"exemplify",19),b.Pb(),b.Pb(),b.Qb(63,"div",20),b.Qb(64,"h4",3),b.Ac(65,"Aside modal"),b.Pb(),b.Qb(66,"div",4),b.Qb(67,"p"),b.Ac(68,"Add "),b.Qb(69,"code"),b.Ac(70,"modal-aside"),b.Pb(),b.Ac(71," class to the modal element together with either "),b.Qb(72,"code"),b.Ac(73,"modal-aside-right"),b.Pb(),b.Ac(74," or "),b.Qb(75,"code"),b.Ac(76,"modal-aside-left"),b.Pb(),b.Ac(77," to get a modal that will slide in from the side."),b.Mb(78,"br"),b.Ac(79,"Ex. "),b.Qb(80,"code"),b.Ac(81,'<div class="modal modal-aside modal-aside-right">...</div>'),b.Pb(),b.Pb(),b.Qb(82,"div",15),b.Qb(83,"div",16),b.Qb(84,"button",17),b.ac("click",function(){b.rc(o);var e=b.pc(116);return t.open(e,{windowClass:"modal-aside modal-aside-right"})}),b.Ac(85,"Open aside modal"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(86,"div",4),b.Qb(87,"h5"),b.Ac(88,"Large aside modal"),b.Pb(),b.Qb(89,"p"),b.Ac(90,"Add "),b.Qb(91,"code"),b.Ac(92,"modal-lg"),b.Pb(),b.Ac(93," class to the modal dialogue together with the above classes to get a larger modal that will slide in from the side."),b.Pb(),b.Qb(94,"div",15),b.Qb(95,"div",16),b.Qb(96,"button",17),b.ac("click",function(){b.rc(o);var e=b.pc(118);return t.open(e,{windowClass:"modal-aside modal-aside-right",size:"lg"})}),b.Ac(97,"Open aside modal"),b.Pb(),b.Pb(),b.Pb(),b.Mb(98,"exemplify",21),b.Pb(),b.Pb(),b.Qb(99,"div",22),b.Qb(100,"h4",3),b.Ac(101,"Fullscreen modal aka take-over"),b.Pb(),b.Qb(102,"div",4),b.Qb(103,"p"),b.Ac(104,"Add "),b.Qb(105,"code"),b.Ac(106,"modal-fullscreen"),b.Pb(),b.Ac(107," class to the modal element to get a fullscreen modal."),b.Mb(108,"br"),b.Ac(109,"Ex. "),b.Qb(110,"code"),b.Ac(111,'<div class="modal modal-fullscreen">...</div>'),b.Pb(),b.Pb(),b.Qb(112,"button",23),b.ac("click",function(){b.rc(o);var e=b.pc(116);return t.open(e,{windowClass:"modal-fullscreen"})}),b.Ac(113,"Open fullscreen modal"),b.Pb(),b.Mb(114,"exemplify",24),b.Pb(),b.Pb(),b.yc(115,r,11,0,"ng-template",null,25,b.zc),b.yc(117,m,18,0,"ng-template",null,26,b.zc)}2&e&&(b.yb(32),b.hc("sources",b.lc(7,f,b.lc(5,h,'...\nimport {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    ...\n    NgbModalModule // <-- Add this line\n  ]\n})'))),b.yb(3),b.hc("sources",b.lc(11,f,b.lc(9,P,"@import '~@sebgroup/bootstrap/scss/core';\n@import '~@sebgroup/bootstrap/scss/styles/reboot';\n@import '~@sebgroup/bootstrap/scss/styles/animations'; /* <-- Add this line */\n@import '~@sebgroup/bootstrap/scss/styles/modal'; /* <-- Add this line */\n@import '~@sebgroup/fonts/scss/seb-fonts';"))),b.yb(27),b.hc("sources",b.lc(14,f,b.kc(13,A))),b.yb(36),b.hc("sources",b.lc(17,f,b.kc(16,A))),b.yb(16),b.hc("sources",b.lc(20,f,b.kc(19,A))))},directives:[l.e,d.a],styles:[""]}),u)}],y=((p=function t(){e(this,t)}).\u0275mod=b.Jb({type:p}),p.\u0275inj=b.Ib({factory:function(e){return new(e||p)},imports:[[l.f.forChild(Q)],l.f]}),p),v=n("PCNd"),k=((g=function t(){e(this,t)}).\u0275mod=b.Jb({type:g}),g.\u0275inj=b.Ib({factory:function(e){return new(e||g)},imports:[[a.c,v.a,s.m,y]]}),g)}}])}();