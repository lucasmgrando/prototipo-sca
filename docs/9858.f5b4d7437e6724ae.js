"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9858],{9858:(B,c,i)=>{i.r(c),i.d(c,{ParameterModule:()=>j});var u=i(6814),n=i(2129),t=i(9467),l=i(707),r=i(3714),d=i(6218);let g=(()=>{class e{constructor(){this.uploadedFiles=[],this.selectedState1=null,this.selectedState2=null,this.selectedState3=null,this.selectedState15=null,this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems1=[{name:"Propietario 1",code:"Option 1"},{name:"Propietario 2",code:"Option 2"},{name:"Propietario 3",code:"Option 3"}],this.dropdownItems2=[{name:"Propiedad 1",code:"Option 1"},{name:"Propiedad 2",code:"Option 2"}],this.dropdownItems3=[{name:"Inquilino 1",code:"Option 1"},{name:"Inquilino 2",code:"Option 2"},{name:"Inquilino 3",code:"Option 3"},{name:"Inquilino 4",code:"Option 4"},{name:"Inquilino 5",code:"Option 5"}],this.dropdownItems4=[{name:"Casa",code:"Option 1"},{name:"Departamento",code:"Option 2"},{name:"Local comercial",code:"Option 3"}],this.dropdownItems15=[{name:"IPC (Indice de precios al consumidor)",code:"Option 1"},{name:"ICL (Indice de contratos de locaci\xf3n)",code:"Option 2"}],this.cities1=[],this.cities2=[],this.city1=null,this.city2=null,this.items=[{label:"Home",icon:"pi pi-home"},{label:"Features",icon:"pi pi-star"},{label:"Projects",icon:"pi pi-search",items:[{label:"Components",icon:"pi pi-bolt"},{label:"Blocks",icon:"pi pi-server"},{label:"UI Kit",icon:"pi pi-pencil"},{label:"Templates",icon:"pi pi-palette",items:[{label:"Apollo",icon:"pi pi-palette"},{label:"Ultima",icon:"pi pi-palette"}]}]},{label:"Contact",icon:"pi pi-envelope"}],this.date1=new Date,this.products=[{id:"1000",code:new Date((new Date).setMonth(1)),name:4,description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:new Date((new Date).setMonth(2)),name:4,description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:new Date((new Date).setMonth(3)),name:4,description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5}],this.pago=0,this.saldo=0,this.total=0,this.garantes=[{},{}],this.date5=new Date((new Date).setDate(10)),this.value15=6}onUpload(a){for(const o of a.files)this.uploadedFiles.push(o)}addItem(){this.garantes.push({})}removeItem(){this.garantes.pop()}addRow(){this.products.push({id:"1000",code:null,name:null,description:"Product Description",image:"bamboo-watch.jpg",price:null,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:null,rating:5})}deleteRow(a){this.products=this.products.filter(o=>o.code!=a),this.onEditComplete()}onEditComplete(){this.total=this.products.reduce((a,o)=>a+o.name,0),this.pago=this.total}onBlur(){console.log("onInput"),this.saldo=this.total-this.pago}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:23,vars:0,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["pInputText","","id","firstname2","type","text"],[1,"field","col-12","md:col-12"],["rows","5","placeholder","","pInputTextarea","",1,"w-full"],["pButton","","pRipple","","label","Guardar","icon","pi pi-save",1,"m-1"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times","routerLink","/parameter",1,"p-button-secondary","m-1"]],template:function(o,p){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Registrar par\xe1metro"),t.qZA(),t.TgZ(4,"div",2)(5,"h5"),t._uU(6,"Par\xe1metro"),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",3)(9,"div",4)(10,"label",5),t._uU(11,"Nombre"),t.qZA(),t._UZ(12,"input",6),t.qZA(),t.TgZ(13,"div",4)(14,"label",5),t._uU(15,"Valor"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"div",7)(18,"label",5),t._uU(19,"Descripci\xf3n"),t.qZA(),t._UZ(20,"textarea",8),t.qZA()()(),t._UZ(21,"button",9)(22,"button",10),t.qZA()())},dependencies:[n.rH,l.Hq,r.o,d.g],encapsulation:2})}return e})();var h=i(5219),m=i(9552);function v(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"i",10),t.TgZ(3,"input",11),t.NdJ("input",function(p){t.CHM(a),t.oxw();const N=t.MAs(6);return t.KtG(N.filterGlobal(p.target.value,"contains"))}),t.qZA()(),t._UZ(4,"button",12),t.qZA()}}function Z(e,s){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Id"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Descripci\xf3n"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Valor"),t.qZA(),t._UZ(9,"th",13),t.qZA())}function f(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",14),t._UZ(11,"button",15)(12,"button",16),t.qZA()()()),2&e){const a=s.$implicit;t.xp6(2),t.Oqu(a.code),t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(a.description),t.xp6(2),t.Oqu(a.price)}}const y=()=>({"min-width":"50rem"}),b=()=>["code","name","category","quantity"];let P=(()=>{class e{constructor(){this.products=[{id:"1000",code:"1",name:"Tasa inter\xe9s",description:"Tasa de interes diario a aplicar por mora",image:"bamboo-watch.jpg",price:1,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"2",name:"Etapa locativa",description:"Cantidad de periodos mensuales que conforman una etapa locativa",image:"bamboo-watch.jpg",price:6,category:"Propietario 2",quantity:"Propiedad 2",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"3",name:"Vencimiento mensual",description:"D\xeda del mes en el que se vencen los pagos",image:"bamboo-watch.jpg",price:10,category:"Propietario 2",quantity:"Propiedad 2",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"4",name:"Frecuencia copia de seguridad",description:"Cantidad de dias entre una copia de seguridad y otra",image:"bamboo-watch.jpg",price:30,category:"Propietario 2",quantity:"Propiedad 2",inventoryStatus:"INSTOCK",rating:5}]}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:10,vars:7,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[3,"value","tableStyle","paginator","rows","globalFilterFields"],["dt2",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",1,"w-full",3,"input"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus","routerLink","create",1,"mb-2"],[2,"width","20%"],[1,"flex","flex-wrap","gap-2"],["pButton","","pRipple","","type","button","icon","pi pi-pencil","routerLink","update",1,"p-button-rounded","p-button-secondary","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-success","p-button-text"]],template:function(o,p){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Par\xe1metros"),t.qZA(),t.TgZ(4,"div",2)(5,"p-table",3,4),t.YNc(7,v,5,0,"ng-template",5)(8,Z,10,0,"ng-template",6)(9,f,13,4,"ng-template",7),t.qZA()()()()),2&o&&(t.xp6(5),t.Q6J("value",p.products)("tableStyle",t.DdM(5,y))("paginator",!0)("rows",10)("globalFilterFields",t.DdM(6,b)))},dependencies:[n.rH,h.jx,l.Hq,r.o,m.iA],encapsulation:2})}return e})(),T=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[n.Bz.forChild([{path:"",component:P},{path:"update",component:g}]),n.Bz]})}return e})();var A=i(95),C=i(7327),I=i(6760),O=i(1480),U=i(3965),q=i(9663),x=i(5167),S=i(8062),w=i(4055),D=i(6105),F=i(3722);let j=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[u.ez,T,A.u5,C.WN,I._8,O.Gg,U.kW,q.zz,x.L$,S.XH,w.q4,d.A,r.j,D.W6,m.U$,F.O]})}return e})()}}]);