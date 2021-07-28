!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{pdr6:function(e,n,b){"use strict";b.r(n),b.d(n,"TooltipModule",function(){return f});var s,i,r,c=b("ofXK"),a=b("tyNb"),p=b("fXoL"),l=b("JbP7"),d=b("1kSV"),u=function(t){return{name:"app.module.ts",src:t,lang:"js"}},m=function(t){return[t]},P=function(t){return{name:"styles.scss",src:t,lang:"css"}},g=[{path:"",component:(s=function(){function e(){t(this,e)}var n,b,s;return n=e,(b=[{key:"ngOnInit",value:function(){}}])&&o(n.prototype,b),s&&o(n,s),e}(),s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=p.Fb({type:s,selectors:[["app-tooltip"]],decls:102,vars:10,consts:[["name","tooltips"],[1,"my-3","d-none","d-lg-block"],[1,"card","my-3","mx-n3","mx-md-0"],[1,"card-header"],[1,"card-body"],["routerLink","'/getting-started'"],[1,"list-group","list-group-ordered","mb-3"],[1,"list-group-item"],[3,"sources"],[1,"mt-3","d-block"],["href","https://github.com/sebgroup/bootstrap","target","_blank"],[1,"mt-4"],["id","tooltipInlineExample",1,"card","my-3","mx-n3","mx-md-0"],["placement","top","ngbTooltip","Consect\u0113tur, third-person singular present active subjunctive of consector.","container","body"],["placement","top","ngbTooltip","This time we've used the class 'text-help' to dash underline condimentum.","container","body",1,"text-help"],["id","tooltipTableExample",1,"card","my-3","mx-n3","mx-md-0"],[1,"table"],["ngbTooltip","This column shows first names.","container","body",1,"text-help"],["scope","row"],["ngbTooltip","The name is Mark.","container","body",1,"text-help"],["ngbTooltip","The name is Jacob.","container","body",1,"text-help"],["ngbTooltip","The name is Larry.","container","body",1,"text-help"]],template:function(t,o){1&t&&(p.Qb(0,"a",0),p.Qb(1,"h1",1),p.Ac(2,"Tooltips"),p.Pb(),p.Pb(),p.Qb(3,"div",2),p.Qb(4,"h4",3),p.Ac(5,"Installation and usage"),p.Pb(),p.Qb(6,"div",4),p.Qb(7,"p"),p.Ac(8,"See "),p.Qb(9,"a",5),p.Ac(10,"getting started"),p.Pb(),p.Ac(11," for a complete setup."),p.Pb(),p.Qb(12,"strong"),p.Ac(13,"Steps to get started:"),p.Pb(),p.Qb(14,"ol",6),p.Qb(15,"li",7),p.Ac(16,"Install using npm (see "),p.Qb(17,"a",5),p.Ac(18,"getting started"),p.Pb(),p.Ac(19,")"),p.Pb(),p.Qb(20,"li",7),p.Ac(21,"Import "),p.Qb(22,"code"),p.Ac(23,"NgbTooltipModule"),p.Pb(),p.Ac(24," (if you're not including "),p.Qb(25,"code"),p.Ac(26,"NgbModule"),p.Pb(),p.Ac(27,")"),p.Pb(),p.Qb(28,"li",7),p.Ac(29,"Import ngb-tooltip.scss and @sebgroup/boostrap tooltip styles (if you're not including all of bootstrap)"),p.Pb(),p.Pb(),p.Qb(30,"strong"),p.Ac(31,"Import tooltip module:"),p.Pb(),p.Mb(32,"exemplify",8),p.Qb(33,"strong",9),p.Ac(34,"Import tooltip styles:"),p.Pb(),p.Qb(35,"p"),p.Ac(36,"This component is meant to be used together with "),p.Qb(37,"a",10),p.Ac(38,"@sebgroup/bootstrap"),p.Pb(),p.Ac(39," and in order for the component to get the correct appearance you need to import styles from @sebgroup/bootstrap files to your project."),p.Pb(),p.Mb(40,"exemplify",8),p.Pb(),p.Pb(),p.Qb(41,"h2",11),p.Ac(42,"Examples"),p.Pb(),p.Qb(43,"div",12),p.Qb(44,"h4",3),p.Ac(45,"Tooltip within text"),p.Pb(),p.Qb(46,"div",4),p.Qb(47,"p"),p.Ac(48," Lorem ipsum dolor sit amet, "),p.Qb(49,"abbr",13),p.Ac(50,"consectetur"),p.Pb(),p.Ac(51," adipiscing elit. Mauris in justo id eros mattis aliquet non vel orci. Cras a pulvinar enim, congue pretium velit. Donec ut bibendum felis, vel ultricies metus. Suspendisse "),p.Qb(52,"span",14),p.Ac(53,"condimentum"),p.Pb(),p.Ac(54," magna vitae orci facilisis, nec lacinia elit semper. "),p.Pb(),p.Pb(),p.Pb(),p.Qb(55,"div",15),p.Qb(56,"h4",3),p.Ac(57,"Tooltip inside table"),p.Pb(),p.Qb(58,"div",4),p.Qb(59,"table",16),p.Qb(60,"thead"),p.Qb(61,"tr"),p.Qb(62,"th"),p.Ac(63,"#"),p.Pb(),p.Qb(64,"th"),p.Qb(65,"span",17),p.Ac(66,"First Name"),p.Pb(),p.Pb(),p.Qb(67,"th"),p.Ac(68,"Last Name"),p.Pb(),p.Qb(69,"th"),p.Ac(70,"Username"),p.Pb(),p.Pb(),p.Pb(),p.Qb(71,"tbody"),p.Qb(72,"tr"),p.Qb(73,"th",18),p.Ac(74,"1"),p.Pb(),p.Qb(75,"td"),p.Qb(76,"span",19),p.Ac(77,"Mark"),p.Pb(),p.Pb(),p.Qb(78,"td"),p.Ac(79,"Otto"),p.Pb(),p.Qb(80,"td"),p.Ac(81,"@mdo"),p.Pb(),p.Pb(),p.Qb(82,"tr"),p.Qb(83,"th",18),p.Ac(84,"2"),p.Pb(),p.Qb(85,"td"),p.Qb(86,"span",20),p.Ac(87,"Jacob"),p.Pb(),p.Pb(),p.Qb(88,"td"),p.Ac(89,"Thornton"),p.Pb(),p.Qb(90,"td"),p.Ac(91,"@fat"),p.Pb(),p.Pb(),p.Qb(92,"tr"),p.Qb(93,"th",18),p.Ac(94,"3"),p.Pb(),p.Qb(95,"td"),p.Qb(96,"span",21),p.Ac(97,"Larry"),p.Pb(),p.Pb(),p.Qb(98,"td"),p.Ac(99,"the Bird"),p.Pb(),p.Qb(100,"td"),p.Ac(101,"@twitter"),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb()),2&t&&(p.yb(32),p.hc("sources",p.lc(4,m,p.lc(2,u,'...\nimport {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    ...\n    NgbTooltipModule // <-- Add this line\n  ]\n})'))),p.yb(8),p.hc("sources",p.lc(8,m,p.lc(6,P,"@import '~@sebgroup/bootstrap/scss/core';\n@import '~@sebgroup/bootstrap/scss/styles/reboot';\n@import '~@sebgroup/bootstrap/scss/styles/tooltip'; /* <-- Add this line */\n@import '~@sebgroup/ng-bootstrap/scss/styles/ngb-tooltip'; /* <-- Add this line */\n@import '~@sebgroup/fonts/scss/seb-fonts';"))))},directives:[a.e,l.a,d.s],styles:[""]}),s)}],Q=((i=function o(){t(this,o)}).\u0275mod=p.Jb({type:i}),i.\u0275inj=p.Ib({factory:function(t){return new(t||i)},imports:[[a.f.forChild(g)],a.f]}),i),h=b("PCNd"),f=((r=function o(){t(this,o)}).\u0275mod=p.Jb({type:r}),r.\u0275inj=p.Ib({factory:function(t){return new(t||r)},imports:[[c.c,d.t,h.a,Q]]}),r)}}])}();