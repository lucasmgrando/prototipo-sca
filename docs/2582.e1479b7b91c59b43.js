"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2582],{2582:(_,d,o)=>{o.r(d),o.d(d,{DashboardModule:()=>M});var l=o(6814),Z=o(95),u=o(9252),h=o(1122),p=o(9552),c=o(707),v=o(1913),A=o(74),g=o(2129),b=o(3620),t=o(9467),f=o(981),T=o(3859),y=o(5219);function x(e,a){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Inquilino"),t.qZA(),t.TgZ(3,"th",20),t._uU(4,"Propietario"),t.qZA(),t.TgZ(5,"th",21),t._uU(6,"Propiedad"),t.qZA(),t._UZ(7,"th"),t.qZA())}function U(e,a){if(1&e&&(t.TgZ(0,"tr")(1,"td",22),t._UZ(2,"img",23),t.qZA(),t.TgZ(3,"td",24),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",26),t._UZ(9,"button",27),t.qZA()()),2&e){const i=a.$implicit;t.xp6(2),t.MGl("src","assets/demo/images/product/",i.image,"",t.LSH),t.s9C("alt",i.name),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(t.xi3(7,4,i.price,"USD"))}}function q(e,a){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Inquilino"),t.qZA(),t.TgZ(3,"th",20),t._uU(4,"Propietario"),t.qZA(),t.TgZ(5,"th",21),t._uU(6,"Propiedad"),t.qZA(),t._UZ(7,"th"),t.qZA())}function C(e,a){if(1&e&&(t.TgZ(0,"tr")(1,"td",22),t._UZ(2,"img",23),t.qZA(),t.TgZ(3,"td",24),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",26),t._UZ(9,"button",27),t.qZA()()),2&e){const i=a.$implicit;t.xp6(2),t.MGl("src","assets/demo/images/product/",i.image,"",t.LSH),t.s9C("alt",i.name),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(t.xi3(7,4,i.price,"USD"))}}function S(e,a){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Inquilino"),t.qZA(),t.TgZ(3,"th",20),t._uU(4,"Propietario"),t.qZA(),t.TgZ(5,"th",21),t._uU(6,"Propiedad"),t.qZA(),t._UZ(7,"th"),t.qZA())}function D(e,a){if(1&e&&(t.TgZ(0,"tr")(1,"td",22),t._UZ(2,"img",23),t.qZA(),t.TgZ(3,"td",24),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",26),t._UZ(9,"button",27),t.qZA()()),2&e){const i=a.$implicit;t.xp6(2),t.MGl("src","assets/demo/images/product/",i.image,"",t.LSH),t.s9C("alt",i.name),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(t.xi3(7,4,i.price,"USD"))}}const s=()=>({width:"2.5rem",height:"2.5rem"});let P=(()=>{class e{constructor(i,n){this.productService=i,this.layoutService=n,this.subscription=this.layoutService.configUpdate$.pipe((0,b.b)(25)).subscribe(r=>{this.initChart()})}ngOnInit(){this.initChart(),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const i=getComputedStyle(document.documentElement),n=i.getPropertyValue("--text-color"),r=i.getPropertyValue("--text-color-secondary"),m=i.getPropertyValue("--surface-border");this.chartData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],datasets:[{label:"IPC",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:i.getPropertyValue("--bluegray-700"),borderColor:i.getPropertyValue("--bluegray-700"),tension:.4},{label:"ICL",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:i.getPropertyValue("--green-600"),borderColor:i.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:r},grid:{color:m,drawBorder:!1}},y:{ticks:{color:r},grid:{color:m,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(f.M),t.Y36(T.P))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:67,vars:19,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-file","text-blue-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-users","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-home","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-building","text-purple-500","text-xl"],[1,"col-12","xl:col-6"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["type","line",3,"data","options"],["pSortableColumn","name"],["pSortableColumn","price"],[2,"width","15%","min-width","5rem"],["width","50",1,"shadow-4",3,"src","alt"],[2,"width","35%","min-width","7rem"],[2,"width","35%","min-width","8rem"],[2,"width","15%"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button","p-component","p-button-text","p-button-icon-only"]],template:function(n,r){1&n&&(t.TgZ(0,"h5"),t._uU(1,"Estad\xedsticas"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div")(7,"span",4),t._uU(8,"Contratos"),t.qZA(),t.TgZ(9,"div",5),t._uU(10,"300"),t.qZA()(),t.TgZ(11,"div",6),t._UZ(12,"i",7),t.qZA()()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"div",3)(16,"div")(17,"span",4),t._uU(18,"Inquilinos"),t.qZA(),t.TgZ(19,"div",5),t._uU(20,"270"),t.qZA()(),t.TgZ(21,"div",8),t._UZ(22,"i",9),t.qZA()()()(),t.TgZ(23,"div",1)(24,"div",2)(25,"div",3)(26,"div")(27,"span",4),t._uU(28,"Propietarios"),t.qZA(),t.TgZ(29,"div",5),t._uU(30,"100"),t.qZA()(),t.TgZ(31,"div",10),t._UZ(32,"i",11),t.qZA()()()(),t.TgZ(33,"div",1)(34,"div",2)(35,"div",3)(36,"div")(37,"span",4),t._uU(38,"Propiedades"),t.qZA(),t.TgZ(39,"div",5),t._uU(40,"130"),t.qZA()(),t.TgZ(41,"div",12),t._UZ(42,"i",13),t.qZA()()()(),t.TgZ(43,"div",14)(44,"div",15)(45,"h5"),t._uU(46,"Alquileres pendientes de pago"),t.qZA(),t.TgZ(47,"p-table",16),t.YNc(48,x,8,0,"ng-template",17)(49,U,10,7,"ng-template",18),t.qZA()(),t.TgZ(50,"div",15)(51,"h5"),t._uU(52,"Alquileres ajustados"),t.qZA(),t.TgZ(53,"p-table",16),t.YNc(54,q,8,0,"ng-template",17)(55,C,10,7,"ng-template",18),t.qZA()(),t.TgZ(56,"div",15)(57,"h5"),t._uU(58,"Alquileres por vencer"),t.qZA(),t.TgZ(59,"p-table",16),t.YNc(60,S,8,0,"ng-template",17)(61,D,10,7,"ng-template",18),t.qZA()()(),t.TgZ(62,"div",14)(63,"div",15)(64,"h5"),t._uU(65,"Indices"),t.qZA(),t._UZ(66,"p-chart",19),t.qZA()()()),2&n&&(t.xp6(11),t.Q6J("ngStyle",t.DdM(15,s)),t.xp6(10),t.Q6J("ngStyle",t.DdM(16,s)),t.xp6(10),t.Q6J("ngStyle",t.DdM(17,s)),t.xp6(10),t.Q6J("ngStyle",t.DdM(18,s)),t.xp6(6),t.Q6J("value",r.products)("paginator",!0)("rows",5),t.xp6(6),t.Q6J("value",r.products)("paginator",!0)("rows",5),t.xp6(6),t.Q6J("value",r.products)("paginator",!0)("rows",5),t.xp6(7),t.Q6J("data",r.chartData)("options",r.chartOptions))},dependencies:[l.PC,u.C,p.iA,y.jx,p.lQ,c.Hq,l.H9],encapsulation:2})}return e})(),J=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[g.Bz.forChild([{path:"",component:P}]),g.Bz]})}return e})(),M=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[l.ez,Z.u5,u.S,h.$9,p.U$,v.l,A.ml,c.hJ,J]})}return e})()}}]);