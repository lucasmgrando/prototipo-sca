"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[7245],{7245:(H,m,a)=>{a.r(m),a.d(m,{AgreementModule:()=>G});var c=a(6814),d=a(2129),s=a(5219);class h{}class q{constructor(){this.owner=new h}}var e=a(9467),y=a(9862),g=a(95),Z=a(6760),_=a(707),u=a(3714),C=a(3965),A=a(5167),T=a(6218),v=a(3722),f=a(4104);function U(o,l){if(1&o&&(e.TgZ(0,"div",34)(1,"div"),e._uU(2),e.qZA()()),2&o){const n=e.oxw().$implicit;e.xp6(2),e.AsE("",n.firstName," ",n.lastName,"")}}function I(o,l){1&o&&e.YNc(0,U,3,2,"div",33),2&o&&e.Q6J("ngIf",l.$implicit)}function w(o,l){if(1&o&&(e.TgZ(0,"div",34)(1,"div"),e._uU(2),e.qZA()()),2&o){const n=l.$implicit;e.xp6(2),e.AsE("",n.firstName," ",n.lastName,"")}}function M(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",35)(2,"h5",36),e._uU(3),e.qZA(),e.TgZ(4,"button",37),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.removeItem())}),e.qZA()(),e._UZ(5,"hr"),e.TgZ(6,"div",3)(7,"div",4)(8,"label",16),e._uU(9,"DNI"),e.qZA(),e._UZ(10,"input",23),e.qZA(),e.TgZ(11,"div",4)(12,"label",16),e._uU(13,"Nombres"),e.qZA(),e._UZ(14,"input",23),e.qZA(),e.TgZ(15,"div",4)(16,"label",16),e._uU(17,"Apellidos"),e.qZA(),e._UZ(18,"input",23),e.qZA(),e.TgZ(19,"div",8)(20,"label",16),e._uU(21,"Tel\xe9fono"),e.qZA(),e._UZ(22,"input",23),e.qZA(),e.TgZ(23,"div",8)(24,"label",16),e._uU(25,"Correo electr\xf3nico"),e.qZA(),e._UZ(26,"input",23),e.qZA(),e.TgZ(27,"div",11)(28,"label",16),e._uU(29,"Direcci\xf3n"),e.qZA(),e._UZ(30,"input",23),e.qZA()()()}if(2&o){const n=l.$index;e.xp6(3),e.hij("Garante #",n+1,"")}}function N(o,l){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const n=l.$implicit;e.xp6(1),e.AsE("",n.name," - ",n.size," bytes")}}function S(o,l){if(1&o&&(e.TgZ(0,"ul"),e.YNc(1,N,2,2,"li",39),e.qZA()),2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.uploadedFiles)}}function P(o,l){if(1&o&&e.YNc(0,S,2,1,"ul",38),2&o){const n=e.oxw();e.Q6J("ngIf",n.uploadedFiles.length)}}let J=(()=>{class o{constructor(n,p){this.http=n,this.messageService=p,this.agreement={date:new Date,property:{}},this.uploadedFiles=[],this.selectedState1=null,this.selectedState2=null,this.selectedState3=null,this.selectedState15=null,this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems1=[{name:"Propietario 1",code:"Option 1"},{name:"Propietario 2",code:"Option 2"},{name:"Propietario 3",code:"Option 3"}],this.dropdownItems2=[{name:"Propiedad 1",code:"Option 1"},{name:"Propiedad 2",code:"Option 2"}],this.dropdownItems3=[{name:"Inquilino 1",code:"Option 1"},{name:"Inquilino 2",code:"Option 2"},{name:"Inquilino 3",code:"Option 3"},{name:"Inquilino 4",code:"Option 4"},{name:"Inquilino 5",code:"Option 5"}],this.dropdownItems4=[{name:"Casa",code:"Option 1"},{name:"Departamento",code:"Option 2"},{name:"Local comercial",code:"Option 3"}],this.dropdownItems15=[{name:"IPC (Indice de precios al consumidor)",code:"Option 1"},{name:"ICL (Indice de contratos de locaci\xf3n)",code:"Option 2"}],this.cities1=[],this.cities2=[],this.city1=null,this.city2=null,this.items=[{label:"Home",icon:"pi pi-home"},{label:"Features",icon:"pi pi-star"},{label:"Projects",icon:"pi pi-search",items:[{label:"Components",icon:"pi pi-bolt"},{label:"Blocks",icon:"pi pi-server"},{label:"UI Kit",icon:"pi pi-pencil"},{label:"Templates",icon:"pi pi-palette",items:[{label:"Apollo",icon:"pi pi-palette"},{label:"Ultima",icon:"pi pi-palette"}]}]},{label:"Contact",icon:"pi pi-envelope"}],this.date1=new Date,this.garantes=[{},{}],this.date5=new Date((new Date).setDate(10)),this.value15=6,this.agreement1=new q,console.log("constructor: "+JSON.stringify(this.agreement1))}ngOnInit(){this.getPropertyTypes(),this.getCustomers(),console.log("onInit: "+JSON.stringify(this.agreement1)),this.http.get("http://localhost:8080/api/account").subscribe({next:n=>{this.messageService.add({severity:"success",summary:"",detail:"Contrato registrado correctamente",life:3e3})},error:n=>{0==n&&this.messageService.add({severity:"error",summary:"Error",detail:"Error de conexi\xf3n",life:3e3})}})}onChange(){console.log("onChange: "+JSON.stringify(this.agreement1)),this.agreement1.owner=this.owner}onClear(){this.agreement1.owner=new h,console.log("onClear: "+JSON.stringify(this.agreement1))}customFilterFunction(n,p){p.filter(n)}createAggrement(){this.http.post("https://httpbin.org/post",this.agreement1).subscribe({next:n=>{this.messageService.add({severity:"success",summary:"",detail:"Contrato registrado correctamente",life:3e3})},error:n=>{0==n&&this.messageService.add({severity:"error",summary:"Error",detail:"Error de conexi\xf3n",life:3e3})}})}getPropertyTypes(){this.http.get("assets/demo/data/property-types.json").subscribe(n=>{this.propertyTypes=n})}getCustomers(){this.http.get("assets/demo/data/customer.json").subscribe(n=>{this.owners=n})}getError(){this.http.get("https://httpbin.org/status/404",this.agreement).subscribe({next:n=>console.log(n),error:n=>console.log(n)})}onUpload(n){for(const p of n.files)this.uploadedFiles.push(p)}addItem(){this.garantes.push({})}removeItem(){this.garantes.pop()}static#e=this.\u0275fac=function(p){return new(p||o)(e.Y36(y.eN),e.Y36(s.ez))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([s.ez])],decls:157,vars:35,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["htmlFor","lastname2"],[3,"ngModel","showIcon","ngModelChange"],["htmlFor","zip"],[1,"field","col-12","md:col-6"],["inputId","currency-us","mode","currency","currency","ARS","locale","es-AR",3,"ngModel","ngModelChange"],["dateFormat","dd/mm",3,"ngModel","showIcon","readonlyInput","ngModelChange"],[1,"field","col-12","md:col-12"],["htmlFor","address"],["placeholder","Seleccionar propietario","filterBy","firstName",3,"options","ngModel","showClear","virtualScroll","virtualScrollItemSize","lazy","filter","ngModelChange","onChange","onClear"],["pTemplate","selectedItem"],["pTemplate","item"],["htmlFor","firstname2"],["pInputText","","id","firstname2","type","text",3,"ngModel","ngModelChange"],["htmlFor","city"],["optionLabel","name",3,"options","ngModel","ngModelChange"],[1,"field","col-12","md:col-3"],["optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],[1,"field","col-12","md:col-9"],["pInputText","","id","firstname2","type","text"],["htmlFor","state"],["pButton","","pRipple","","label","Agregar","icon","pi pi-plus",3,"click"],["pInputText","","id","firstname2","type","text","value","1"],[3,"ngModel","ngModelChange"],["name","demo[]","url","./upload.php","accept","image/*",3,"multiple","maxFileSize","onUpload"],["pTemplate","content"],["rows","5","placeholder","","pInputTextarea","",1,"w-full"],["pButton","","pRipple","","label","Guardar","icon","pi pi-save",1,"m-1",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times","routerLink","",1,"p-button-secondary","m-1",3,"click"],["class","flex align-items-center gap-2",4,"ngIf"],[1,"flex","align-items-center","gap-2"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],[1,"pt-1"],["pButton","","pRipple","","label","Quitar","icon","pi pi-trash",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","card"]],template:function(p,t){1&p&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1)(3,"h5"),e._uU(4,"Registrar contrato"),e.qZA(),e.TgZ(5,"div",2)(6,"h5"),e._uU(7,"Contrato"),e.qZA(),e._UZ(8,"hr"),e.TgZ(9,"div",3)(10,"div",4)(11,"label",5),e._uU(12,"Fecha"),e.qZA(),e.TgZ(13,"p-calendar",6),e.NdJ("ngModelChange",function(i){return t.agreement.date=i}),e.qZA()(),e.TgZ(14,"div",4)(15,"label",7),e._uU(16,"Fecha inicio"),e.qZA(),e.TgZ(17,"p-calendar",6),e.NdJ("ngModelChange",function(i){return t.agreement.startDate=i}),e.qZA()(),e.TgZ(18,"div",4)(19,"label",7),e._uU(20,"Fecha vencimiento"),e.qZA(),e.TgZ(21,"p-calendar",6),e.NdJ("ngModelChange",function(i){return t.agreement.endDate=i}),e.qZA()(),e.TgZ(22,"div",8)(23,"label",7),e._uU(24,"Canon locativo"),e.qZA(),e.TgZ(25,"p-inputNumber",9),e.NdJ("ngModelChange",function(i){return t.value1=i}),e.qZA()(),e.TgZ(26,"div",8)(27,"label",5),e._uU(28,"Vencimiento pago mensual"),e.qZA(),e.TgZ(29,"p-calendar",10),e.NdJ("ngModelChange",function(i){return t.date5=i}),e.qZA()()()(),e.TgZ(30,"div",2)(31,"h5"),e._uU(32,"Propietario"),e.qZA(),e._UZ(33,"hr"),e.TgZ(34,"div",3)(35,"div",11)(36,"label",12),e._uU(37,"Propietario"),e.qZA(),e.TgZ(38,"p-dropdown",13),e.NdJ("ngModelChange",function(i){return t.owner=i})("onChange",function(){return t.onChange()})("onClear",function(){return t.onClear()}),e.YNc(39,I,1,1,"ng-template",14)(40,w,3,2,"ng-template",15),e.qZA()(),e.TgZ(41,"div",4)(42,"label",16),e._uU(43,"DNI"),e.qZA(),e.TgZ(44,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.document=i}),e.qZA()(),e.TgZ(45,"div",4)(46,"label",16),e._uU(47,"Nombres"),e.qZA(),e.TgZ(48,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.firstName=i}),e.qZA()(),e.TgZ(49,"div",4)(50,"label",16),e._uU(51,"Apellidos"),e.qZA(),e.TgZ(52,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.lastName=i}),e.qZA()(),e.TgZ(53,"div",8)(54,"label",16),e._uU(55,"Tel\xe9fono"),e.qZA(),e.TgZ(56,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.phone=i}),e.qZA()(),e.TgZ(57,"div",8)(58,"label",16),e._uU(59,"Correo electr\xf3nico"),e.qZA(),e.TgZ(60,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.email=i}),e.qZA()(),e.TgZ(61,"div",11)(62,"label",16),e._uU(63,"Direcci\xf3n"),e.qZA(),e.TgZ(64,"input",17),e.NdJ("ngModelChange",function(i){return t.agreement1.owner.address=i}),e.qZA()()()(),e.TgZ(65,"div",2)(66,"h5"),e._uU(67,"Propiedad"),e.qZA(),e._UZ(68,"hr"),e.TgZ(69,"div",3)(70,"div",11)(71,"label",18),e._uU(72,"Propiedad"),e.qZA(),e.TgZ(73,"p-dropdown",19),e.NdJ("ngModelChange",function(i){return t.selectedState2=i}),e.qZA()(),e.TgZ(74,"div",20)(75,"label",12),e._uU(76,"Tipo"),e.qZA(),e.TgZ(77,"p-dropdown",21),e.NdJ("ngModelChange",function(i){return t.agreement.property.type=i}),e.qZA()(),e.TgZ(78,"div",22)(79,"label",16),e._uU(80,"Direcci\xf3n"),e.qZA(),e._UZ(81,"input",23),e.qZA()()(),e.TgZ(82,"div",2)(83,"h5"),e._uU(84,"Inquilino"),e.qZA(),e._UZ(85,"hr"),e.TgZ(86,"div",3)(87,"div",11)(88,"label",24),e._uU(89,"Inquilino"),e.qZA(),e.TgZ(90,"p-dropdown",19),e.NdJ("ngModelChange",function(i){return t.selectedState3=i}),e.qZA()(),e.TgZ(91,"div",4)(92,"label",16),e._uU(93,"DNI"),e.qZA(),e._UZ(94,"input",23),e.qZA(),e.TgZ(95,"div",4)(96,"label",16),e._uU(97,"Nombres"),e.qZA(),e._UZ(98,"input",23),e.qZA(),e.TgZ(99,"div",4)(100,"label",16),e._uU(101,"Apellidos"),e.qZA(),e._UZ(102,"input",23),e.qZA(),e.TgZ(103,"div",8)(104,"label",16),e._uU(105,"Tel\xe9fono"),e.qZA(),e._UZ(106,"input",23),e.qZA(),e.TgZ(107,"div",8)(108,"label",16),e._uU(109,"Correo electr\xf3nico"),e.qZA(),e._UZ(110,"input",23),e.qZA(),e.TgZ(111,"div",11)(112,"label",16),e._uU(113,"Direcci\xf3n"),e.qZA(),e._UZ(114,"input",23),e.qZA()()(),e.TgZ(115,"div",2)(116,"h5"),e._uU(117,"Garantes"),e.qZA(),e._UZ(118,"hr"),e.SjG(119,M,31,1,"div",40,e.x6l),e.TgZ(121,"button",25),e.NdJ("click",function(){return t.addItem()}),e.qZA()(),e.TgZ(122,"div",2)(123,"h5"),e._uU(124,"Intereses y falta de pago"),e.qZA(),e._UZ(125,"hr"),e.TgZ(126,"div",3)(127,"div",8)(128,"label",16),e._uU(129,"Intereses punitorios (%)"),e.qZA(),e._UZ(130,"input",26),e.qZA()()(),e.TgZ(131,"div",2)(132,"h5"),e._uU(133,"Ajustes de precio"),e.qZA(),e._UZ(134,"hr"),e.TgZ(135,"div",3)(136,"div",8)(137,"label",16),e._uU(138,"Etapa locativa (Meses)"),e.qZA(),e.TgZ(139,"p-inputNumber",27),e.NdJ("ngModelChange",function(i){return t.value15=i}),e.qZA()(),e.TgZ(140,"div",8)(141,"label",12),e._uU(142,"Indice de actualizaci\xf3n"),e.qZA(),e.TgZ(143,"p-dropdown",19),e.NdJ("ngModelChange",function(i){return t.selectedState15=i}),e.qZA()()()(),e.TgZ(144,"div",2)(145,"h5"),e._uU(146,"Archivos"),e.qZA(),e._UZ(147,"hr"),e.TgZ(148,"p-fileUpload",28),e.NdJ("onUpload",function(i){return t.onUpload(i)}),e.YNc(149,P,1,1,"ng-template",29),e.qZA()(),e.TgZ(150,"div",2)(151,"h5"),e._uU(152,"Observaci\xf3nes"),e.qZA(),e._UZ(153,"hr")(154,"textarea",30),e.qZA(),e.TgZ(155,"button",31),e.NdJ("click",function(){return t.createAggrement()}),e.qZA(),e.TgZ(156,"button",32),e.NdJ("click",function(){return t.getError()}),e.qZA()()()),2&p&&(e.xp6(13),e.Q6J("ngModel",t.agreement.date)("showIcon",!0),e.xp6(4),e.Q6J("ngModel",t.agreement.startDate)("showIcon",!0),e.xp6(4),e.Q6J("ngModel",t.agreement.endDate)("showIcon",!0),e.xp6(4),e.Q6J("ngModel",t.value1),e.xp6(4),e.Q6J("ngModel",t.date5)("showIcon",!0)("readonlyInput",!0),e.xp6(9),e.Q6J("options",t.owners)("ngModel",t.owner)("showClear",!0)("virtualScroll",!0)("virtualScrollItemSize",38)("lazy",!0)("filter",!0),e.xp6(6),e.Q6J("ngModel",t.agreement1.owner.document),e.xp6(4),e.Q6J("ngModel",t.agreement1.owner.firstName),e.xp6(4),e.Q6J("ngModel",t.agreement1.owner.lastName),e.xp6(4),e.Q6J("ngModel",t.agreement1.owner.phone),e.xp6(4),e.Q6J("ngModel",t.agreement1.owner.email),e.xp6(4),e.Q6J("ngModel",t.agreement1.owner.address),e.xp6(9),e.Q6J("options",t.dropdownItems2)("ngModel",t.selectedState2),e.xp6(4),e.Q6J("options",t.propertyTypes)("ngModel",t.agreement.property.type)("showClear",!0),e.xp6(13),e.Q6J("options",t.dropdownItems3)("ngModel",t.selectedState3),e.xp6(29),e.wJu(t.garantes),e.xp6(20),e.Q6J("ngModel",t.value15),e.xp6(4),e.Q6J("options",t.dropdownItems15)("ngModel",t.selectedState15),e.xp6(5),e.Q6J("multiple",!0)("maxFileSize",1e6))},dependencies:[c.sg,c.O5,d.rH,g.Fj,g.JJ,g.On,s.jx,Z.f,_.Hq,u.o,C.Lt,A.Rn,T.g,v.p,f.FN],encapsulation:2})}return o})();var b=a(9552);function O(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"div",8)(1,"span",9),e._UZ(2,"i",10),e.TgZ(3,"input",11),e.NdJ("input",function(t){e.CHM(n),e.oxw();const r=e.MAs(6);return e.KtG(r.filterGlobal(t.target.value,"contains"))}),e.qZA()(),e._UZ(4,"button",12),e.qZA()}}function F(o,l){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Id"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Inquilino"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Propietario"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Propiedad"),e.qZA(),e._UZ(9,"th"),e.qZA())}function D(o,l){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",13),e._UZ(11,"button",14)(12,"button",15)(13,"button",16)(14,"button",17),e.qZA()()()),2&o){const n=l.$implicit;e.xp6(2),e.Oqu(n.code),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.category),e.xp6(2),e.Oqu(n.quantity)}}const x=()=>({"min-width":"50rem"}),j=()=>["code","name","category","quantity"];let Q=(()=>{class o{constructor(){this.products=[{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"2",name:"Inquilino 2",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 2",quantity:"Propiedad 2",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"3",name:"Inquilino 3",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 3",quantity:"Propiedad 3",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"4",name:"Inquilino 4",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 4",quantity:"Propiedad 4",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"5",name:"Inquilino 5",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 5",quantity:"Propiedad 5",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"6",name:"Inquilino 6",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 6",quantity:"Propiedad 6",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"7",name:"Inquilino 7",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 7",quantity:"Propiedad 7",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"8",name:"Inquilino 8",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 8",quantity:"Propiedad 8",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"9",name:"Inquilino 9",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 9",quantity:"Propiedad 9",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"10",name:"Inquilino 10",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 10",quantity:"Propiedad 10",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5},{id:"1000",code:"1",name:"Inquilino 1",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Propietario 1",quantity:"Propiedad 1",inventoryStatus:"INSTOCK",rating:5}]}static#e=this.\u0275fac=function(p){return new(p||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:10,vars:7,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[3,"value","tableStyle","paginator","rows","globalFilterFields"],["dt2",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",1,"w-full",3,"input"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus","routerLink","create",1,"mb-2"],[1,"flex","flex-wrap","gap-2"],["pButton","","pRipple","","type","button","icon","pi pi-dollar","routerLink","/payment",1,"p-button-rounded","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-eye",1,"p-button-rounded","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-secondary","p-button-text"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-success","p-button-text"]],template:function(p,t){1&p&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Contratos"),e.qZA(),e.TgZ(4,"div",2)(5,"p-table",3,4),e.YNc(7,O,5,0,"ng-template",5)(8,F,10,0,"ng-template",6)(9,D,15,4,"ng-template",7),e.qZA()()()()),2&p&&(e.xp6(5),e.Q6J("value",t.products)("tableStyle",e.DdM(5,x))("paginator",!0)("rows",10)("globalFilterFields",e.DdM(6,j)))},dependencies:[d.rH,s.jx,_.Hq,u.o,b.iA],encapsulation:2})}return o})(),K=(()=>{class o{static#e=this.\u0275fac=function(p){return new(p||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:Q},{path:"create",component:J}]),d.Bz]})}return o})();var z=a(7327),B=a(1480),E=a(9663),L=a(8062),R=a(4055),$=a(6105);let G=(()=>{class o{static#e=this.\u0275fac=function(p){return new(p||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[c.ez,K,g.u5,z.WN,Z._8,B.Gg,C.kW,E.zz,A.L$,L.XH,R.q4,T.A,u.j,$.W6,b.U$,v.O,f.EV]})}return o})()}}]);