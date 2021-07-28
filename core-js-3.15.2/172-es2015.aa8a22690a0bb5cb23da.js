(self.webpackChunk_sebgroup_ng_bootstrap=self.webpackChunk_sebgroup_ng_bootstrap||[]).push([[172],{2172:function(t,e,o){"use strict";o.r(e),o.d(e,{ModalModule:function(){return _}});var s=o(8583),n=o(7957),l=o(433),i=o(8287),a=o(7716),d=o(9915);function r(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",27),a.TgZ(1,"h4",28),a._uU(2,"Modal title"),a.qZA(),a.qZA(),a.TgZ(3,"div",29),a.TgZ(4,"p"),a._uU(5,"Modal body text goes here."),a.qZA(),a.qZA(),a.TgZ(6,"div",30),a.TgZ(7,"button",31),a.NdJ("click",function(){return a.CHM(t).$implicit.dismiss("Cross click")}),a._uU(8,"Close"),a.qZA(),a.TgZ(9,"button",32),a.NdJ("click",function(){return a.CHM(t).$implicit.close("Save click")}),a._uU(10,"Save changes"),a.qZA(),a.qZA()}}function c(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",27),a.TgZ(1,"h4",28),a._uU(2,"Modal title"),a.qZA(),a.qZA(),a.TgZ(3,"div",29),a.TgZ(4,"p"),a._uU(5,"Modal body text goes here."),a.qZA(),a.TgZ(6,"div",33),a.TgZ(7,"p",34),a._uU(8,"The large aside modal will adjust it's width to the width of the content."),a._UZ(9,"br"),a._uU(10," Max width = 768px"),a._UZ(11,"br"),a._uU(12," Min width = 320px "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",30),a.TgZ(14,"button",31),a.NdJ("click",function(){return a.CHM(t).$implicit.dismiss("Cross click")}),a._uU(15,"Close"),a.qZA(),a.TgZ(16,"button",32),a.NdJ("click",function(){return a.CHM(t).$implicit.close("Save click")}),a._uU(17,"Save changes"),a.qZA(),a.qZA()}}const u=function(t){return{name:"app.module.ts",src:t,lang:"js"}},m=function(t){return[t]},g=function(t){return{name:"styles.scss",src:t,lang:"css"}},Z=function(){return{name:"app.component.ts",src:"https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/modal/modal.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO",lang:"typescript"}},p=[{path:"",component:(()=>{class t{constructor(t,e){this.document=t,this.modalService=e,this.modal=!1}open(t,e){const o=this.modalService.open(t,Object.assign(Object.assign({},e),{ariaLabelledBy:"modal-basic-title"})),s=document.getElementsByTagName("ngb-modal-window")[0];o.result.then(t=>{(0,l.tP)(),this.closeResult=`Closed with: ${t}`},t=>{(0,l.tP)(),this.closeResult=`Dismissed ${this.getDismissReason(t)}`}),(0,l.Qp)(s)}getDismissReason(t){return t===i.If.ESC?"by pressing ESC":t===i.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.K0),a.Y36(i.FF))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-modal"]],decls:119,vars:22,consts:[["name","accordion"],[1,"my-3","d-none","d-lg-block"],[1,"card","my-3","mx-n3","mx-md-0"],[1,"card-header"],[1,"card-body"],["routerLink","'/getting-started'"],[1,"list-group","list-group-ordered","mb-3"],[1,"list-group-item"],[3,"sources"],[1,"mt-3","d-block"],[1,"alert","alert-warning","alert-icon","mx-n3","mx-md-0"],["href","https://www.google.com/search?q=content+scrolling+behind+modal","target","_blank",1,"alert-link"],["href","https://github.com/willmcpo/body-scroll-lock","target","_blank",1,"alert-link"],["href","https://stackblitz.com/edit/seb-modal-body-scroll-lock","target","_blank",1,"alert-link"],["id","standardModal",1,"card","my-3","mx-n3","mx-md-0"],[1,"row"],[1,"col-12","col-sm","col-md-auto"],[1,"btn","btn-primary","w-100",3,"click"],[1,"col-12","col-sm","col-md-auto","mt-3","mt-sm-0"],["selector","#standardModal .btn",1,"mt-4",3,"sources"],["id","asideModal",1,"card","my-3","mx-n3","mx-md-0"],["selector","#asideModal .btn",1,"mt-4",3,"sources"],["id","fullscreenModal",1,"card","my-3","mx-n3","mx-md-0"],[1,"btn","btn-primary",3,"click"],["selector","#fullscreenModal .btn",1,"mt-4",3,"sources"],["content",""],["largeContent",""],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"bg-primary-element","text-white","align-self-center","p-3",2,"width","600px","height","600px"],[1,"lead","font-weight-normal"]],template:function(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"a",0),a.TgZ(1,"h1",1),a._uU(2,"Modal"),a.qZA(),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"h4",3),a._uU(5,"Installation and usage"),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"p"),a._uU(8,"See "),a.TgZ(9,"a",5),a._uU(10,"getting started"),a.qZA(),a._uU(11," for a complete setup."),a.qZA(),a.TgZ(12,"strong"),a._uU(13,"Steps to get started:"),a.qZA(),a.TgZ(14,"ol",6),a.TgZ(15,"li",7),a._uU(16,"Install using npm (see "),a.TgZ(17,"a",5),a._uU(18,"getting started"),a.qZA(),a._uU(19,")"),a.qZA(),a.TgZ(20,"li",7),a._uU(21,"Import "),a.TgZ(22,"code"),a._uU(23,"NgbModalModule"),a.qZA(),a._uU(24," (if you're not including "),a.TgZ(25,"code"),a._uU(26,"NgbModule"),a.qZA(),a._uU(27,")"),a.qZA(),a.TgZ(28,"li",7),a._uU(29,"Import @sebgroup/boostrap modal and animation styles (if you're not including all of bootstrap)"),a.qZA(),a.qZA(),a.TgZ(30,"strong"),a._uU(31,"Import modal module:"),a.qZA(),a._UZ(32,"exemplify",8),a.TgZ(33,"strong",9),a._uU(34,"Import modal and animation styles:"),a.qZA(),a._UZ(35,"exemplify",8),a.qZA(),a.qZA(),a.TgZ(36,"div",10),a.TgZ(37,"strong"),a._uU(38,"Mobile development!"),a.qZA(),a._uU(39," To make the experience extra crisp on mobile devices and more specifically to avoid the issue with "),a.TgZ(40,"a",11),a._uU(41,"scrolling content behind the modal"),a.qZA(),a._uU(42,", you should consider adding "),a.TgZ(43,"a",12),a._uU(44,"body scroll lock"),a.qZA(),a._uU(45," to your project when implementing modals. An example implementation for angular can also be found on "),a.TgZ(46,"a",13),a._uU(47,"stack blitz"),a.qZA(),a._uU(48,"."),a.qZA(),a.TgZ(49,"div",14),a.TgZ(50,"h4",3),a._uU(51,"Modal with backdrop"),a.qZA(),a.TgZ(52,"div",4),a.TgZ(53,"p"),a._uU(54,"Below is a example of a standard modal opened with a backdrop."),a.qZA(),a.TgZ(55,"div",15),a.TgZ(56,"div",16),a.TgZ(57,"button",17),a.NdJ("click",function(){a.CHM(t);const o=a.MAs(116);return e.open(o)}),a._uU(58,"Open modal"),a.qZA(),a.qZA(),a.TgZ(59,"div",18),a.TgZ(60,"button",17),a.NdJ("click",function(){a.CHM(t);const o=a.MAs(116);return e.open(o,{size:"lg"})}),a._uU(61,"Open large modal"),a.qZA(),a.qZA(),a.qZA(),a._UZ(62,"exemplify",19),a.qZA(),a.qZA(),a.TgZ(63,"div",20),a.TgZ(64,"h4",3),a._uU(65,"Aside modal"),a.qZA(),a.TgZ(66,"div",4),a.TgZ(67,"p"),a._uU(68,"Add "),a.TgZ(69,"code"),a._uU(70,"modal-aside"),a.qZA(),a._uU(71," class to the modal element together with either "),a.TgZ(72,"code"),a._uU(73,"modal-aside-right"),a.qZA(),a._uU(74," or "),a.TgZ(75,"code"),a._uU(76,"modal-aside-left"),a.qZA(),a._uU(77," to get a modal that will slide in from the side."),a._UZ(78,"br"),a._uU(79,"Ex. "),a.TgZ(80,"code"),a._uU(81,'<div class="modal modal-aside modal-aside-right">...</div>'),a.qZA(),a.qZA(),a.TgZ(82,"div",15),a.TgZ(83,"div",16),a.TgZ(84,"button",17),a.NdJ("click",function(){a.CHM(t);const o=a.MAs(116);return e.open(o,{windowClass:"modal-aside modal-aside-right"})}),a._uU(85,"Open aside modal"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(86,"div",4),a.TgZ(87,"h5"),a._uU(88,"Large aside modal"),a.qZA(),a.TgZ(89,"p"),a._uU(90,"Add "),a.TgZ(91,"code"),a._uU(92,"modal-lg"),a.qZA(),a._uU(93," class to the modal dialogue together with the above classes to get a larger modal that will slide in from the side."),a.qZA(),a.TgZ(94,"div",15),a.TgZ(95,"div",16),a.TgZ(96,"button",17),a.NdJ("click",function(){a.CHM(t);const o=a.MAs(118);return e.open(o,{windowClass:"modal-aside modal-aside-right",size:"lg"})}),a._uU(97,"Open aside modal"),a.qZA(),a.qZA(),a.qZA(),a._UZ(98,"exemplify",21),a.qZA(),a.qZA(),a.TgZ(99,"div",22),a.TgZ(100,"h4",3),a._uU(101,"Fullscreen modal aka take-over"),a.qZA(),a.TgZ(102,"div",4),a.TgZ(103,"p"),a._uU(104,"Add "),a.TgZ(105,"code"),a._uU(106,"modal-fullscreen"),a.qZA(),a._uU(107," class to the modal element to get a fullscreen modal."),a._UZ(108,"br"),a._uU(109,"Ex. "),a.TgZ(110,"code"),a._uU(111,'<div class="modal modal-fullscreen">...</div>'),a.qZA(),a.qZA(),a.TgZ(112,"button",23),a.NdJ("click",function(){a.CHM(t);const o=a.MAs(116);return e.open(o,{windowClass:"modal-fullscreen"})}),a._uU(113,"Open fullscreen modal"),a.qZA(),a._UZ(114,"exemplify",24),a.qZA(),a.qZA(),a.YNc(115,r,11,0,"ng-template",null,25,a.W1O),a.YNc(117,c,18,0,"ng-template",null,26,a.W1O)}2&t&&(a.xp6(32),a.Q6J("sources",a.VKq(7,m,a.VKq(5,u,'...\nimport {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    ...\n    NgbModalModule // <-- Add this line\n  ]\n})'))),a.xp6(3),a.Q6J("sources",a.VKq(11,m,a.VKq(9,g,"@import '~@sebgroup/bootstrap/scss/core';\n@import '~@sebgroup/bootstrap/scss/styles/reboot';\n@import '~@sebgroup/bootstrap/scss/styles/animations'; /* <-- Add this line */\n@import '~@sebgroup/bootstrap/scss/styles/modal'; /* <-- Add this line */\n@import '~@sebgroup/fonts/scss/seb-fonts';"))),a.xp6(27),a.Q6J("sources",a.VKq(14,m,a.DdM(13,Z))),a.xp6(36),a.Q6J("sources",a.VKq(17,m,a.DdM(16,Z))),a.xp6(16),a.Q6J("sources",a.VKq(20,m,a.DdM(19,Z))))},directives:[n.yS,d.mZ],styles:[""]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(p)],n.Bz]}),t})();var b=o(4466);let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.ez,b.m,i.bz,A]]}),t})()}}]);