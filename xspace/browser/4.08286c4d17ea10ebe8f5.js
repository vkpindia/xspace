(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ld4U:function(t,e,s){"use strict";s.r(e),s.d(e,"SpaceXModule",(function(){return L}));var a=s("ofXK"),r=s("tyNb");const c=[{filterHeading:"Launch Year",type:"launch_year",filterBase:["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]},{filterHeading:"Successful Launch",type:"launch_success",filterBase:["true","false"]},{filterHeading:"Successful Landing",type:"land_success",filterBase:["true","false"]}];var n=s("fXoL"),i=s("tk/3"),b=s("HDdC"),o=s("lJxs"),u=s("JIr8"),l=s("AytR");let p=(()=>{class t{constructor(t){this._http=t,this._apiUrl=l.a.BASE_API_URL,this.httpOptions={headers:new i.c({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Back-end returned code ${t.status}, body was: `+t.error),new b.a(t=>t.error("Something bad happened; please try again later."))}extractData(t){return t||{}}getSpaceXData(t){let e=this._apiUrl+"launches?limit=100";return e+=t,this._http.get(e).pipe(Object(o.a)(t=>t),Object(u.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(i.a))},t.\u0275prov=n.zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=function(t){return{active:t}};function d(t,e){if(1&t){const t=n.Jb();n.Ib(0,"li"),n.Ib(1,"span",10),n.Ob("click",(function(){n.Wb(t);const s=e.$implicit,a=n.Qb().$implicit;return n.Qb(2).setQueryParams(a.type,s)})),n.ac(2),n.Rb(3,"titlecase"),n.Hb(),n.Hb()}if(2&t){const t=e.$implicit,s=n.Qb().$implicit,a=n.Qb(2);n.ub(1),n.Tb("ngClass",n.Ub(4,h,a.selectedFilter==t&&a.selectedFilterType==s.type)),n.ub(1),n.bc(n.Sb(3,2,t))}}function f(t,e){if(1&t&&(n.Gb(0),n.Ib(1,"div",8),n.Ib(2,"span",9),n.ac(3),n.Rb(4,"titlecase"),n.Hb(),n.Ib(5,"ul"),n.Zb(6,d,4,6,"li",5),n.Hb(),n.Hb(),n.Fb()),2&t){const t=e.$implicit;n.ub(3),n.bc(n.Sb(4,2,t.filterHeading)),n.ub(3),n.Tb("ngForOf",t.filterBase)}}function g(t,e){if(1&t&&(n.Ib(0,"div",6),n.Ib(1,"div",7),n.Ib(2,"h4"),n.ac(3,"Filters"),n.Hb(),n.Zb(4,f,7,4,"ng-container",5),n.Hb(),n.Hb()),2&t){const t=n.Qb();n.ub(4),n.Tb("ngForOf",t.filterData)}}function m(t,e){1&t&&(n.Ib(0,"h4",11),n.ac(1,"Loading..."),n.Hb())}function I(t,e){1&t&&(n.Ib(0,"h3",11),n.ac(1,"SpaceX Programs not found."),n.Hb())}function H(t,e){if(1&t&&(n.Ib(0,"li"),n.ac(1),n.Hb()),2&t){const t=e.$implicit;n.ub(1),n.bc(t)}}function y(t,e){if(1&t&&(n.Gb(0),n.Ib(1,"div",12),n.Ib(2,"div",13),n.Eb(3,"img",14),n.Hb(),n.Ib(4,"div",15),n.Ib(5,"span"),n.ac(6),n.Hb(),n.Hb(),n.Ib(7,"div",16),n.Ib(8,"p"),n.Ib(9,"strong"),n.ac(10,"Mission Ids: "),n.Hb(),n.Hb(),n.Ib(11,"ul"),n.Zb(12,H,2,1,"li",5),n.Hb(),n.Ib(13,"table"),n.Ib(14,"tr"),n.Ib(15,"td"),n.Ib(16,"strong"),n.ac(17,"Launch Year: "),n.Hb(),n.Hb(),n.Ib(18,"td",17),n.ac(19),n.Hb(),n.Hb(),n.Ib(20,"tr"),n.Ib(21,"td"),n.Ib(22,"strong"),n.ac(23,"Successful Launch: "),n.Hb(),n.Hb(),n.Ib(24,"td",17),n.ac(25),n.Hb(),n.Hb(),n.Ib(26,"tr"),n.Ib(27,"td"),n.Ib(28,"strong"),n.ac(29,"Successful Landing: "),n.Hb(),n.Hb(),n.Ib(30,"td",17),n.ac(31),n.Hb(),n.Hb(),n.Hb(),n.Hb(),n.Hb(),n.Fb()),2&t){const t=e.$implicit;n.ub(3),n.Tb("src",t.links.mission_patch_small,n.Xb),n.ub(3),n.bc(t.mission_name+" #"+t.flight_number),n.ub(6),n.Tb("ngForOf",t.mission_id),n.ub(7),n.bc(t.launch_success),n.ub(6),n.bc(t.launch_success),n.ub(6),n.cc(" ",t.launch_year,"")}}const _=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.ss=e}ngOnInit(){this.filterData=c,this.isLoading=!0,this.queryParam={launch_year:"",launch_success:"",land_success:""},this.getSpaceXData()}setQueryParams(t,e){this.selectedFilter=e,this.selectedFilterType=t,this.queryParam[t]=e,this.getSpaceXData()}getSpaceXData(){let t="";this.queryParam.launch_success&&(t=t+"&launch_success="+this.queryParam.launch_success),this.queryParam.land_success&&(t=t+"&land_success="+this.queryParam.land_success),this.queryParam.launch_year&&(t=t+"&launch_year="+this.queryParam.launch_year),t&&this.router.navigate(["spaceX"],{queryParams:{url:t}}),this.ss.getSpaceXData(t).subscribe(t=>{t&&(this.spaceXProgramList=t,this.isLoading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(n.Db(r.a),n.Db(p))},t.\u0275cmp=n.xb({type:t,selectors:[["app-space-x"]],decls:9,vars:4,consts:[[1,"block-copnatiner"],[1,"spx-block"],["class","spx-filter",4,"ngIf"],[1,"spx-programs"],["class","loading",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"spx-filter"],[1,"filter-inner"],[1,"filter-block"],[1,"filter-heading"],[3,"ngClass","click"],[1,"loading"],[1,"program-card"],[1,"program-img"],["alt","",3,"src"],[1,"mission"],[1,"program-details"],[1,"launch-info"]],template:function(t,e){1&t&&(n.Ib(0,"div",0),n.Ib(1,"h2"),n.ac(2,"SpaceX Launch Programs"),n.Hb(),n.Ib(3,"div",1),n.Zb(4,g,5,1,"div",2),n.Ib(5,"div",3),n.Zb(6,m,2,0,"h4",4),n.Zb(7,I,2,0,"h3",4),n.Zb(8,y,32,6,"ng-container",5),n.Hb(),n.Hb(),n.Hb()),2&t&&(n.ub(4),n.Tb("ngIf",!e.isLoading),n.ub(2),n.Tb("ngIf",e.isLoading),n.ub(1),n.Tb("ngIf",e.spaceXProgramList&&0==e.spaceXProgramList.length),n.ub(1),n.Tb("ngForOf",e.spaceXProgramList))},directives:[a.j,a.i,a.h],pipes:[a.m],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=n.Bb({type:t}),t.\u0275inj=n.Ab({factory:function(e){return new(e||t)},imports:[[r.b.forChild(_)],r.b]}),t})(),L=(()=>{class t{}return t.\u0275mod=n.Bb({type:t}),t.\u0275inj=n.Ab({factory:function(e){return new(e||t)},imports:[[a.b,v]]}),t})()}}]);