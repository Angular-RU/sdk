import{a as S}from"./chunk-ZRIJDTCU.js";import{c as C}from"./chunk-BRZRYVXF.js";import{a as E}from"./chunk-DQSOQHEP.js";import"./chunk-S5ZAWJKE.js";import{b as y}from"./chunk-4RB6H5BC.js";import"./chunk-AZ7S4D23.js";import"./chunk-ZM5HDEK6.js";import"./chunk-6ILWJSA3.js";import"./chunk-YHPDSTAQ.js";import{r as h}from"./chunk-DP6G2C5M.js";import{Q as b,V as x,W as f,Y as w}from"./chunk-TXL7UZHY.js";import{Ca as m,Nb as g,Ob as s,Pb as t,Qb as d,Zb as u,fb as c,ka as r,mc as n,sb as p}from"./chunk-HR3KBPNQ.js";var I=(()=>{let e=class e{constructor(){this.dialog=r(C),this.data=m([]),this.rowCssClasses={1:["highlight"],3:["highlight"]}}ngOnInit(){E.generator(50,5).then(i=>{this.data.set(i)})}showSample(){this.dialog.open(S,{data:{title:"Overview sortable table",description:"",code:`
<ngx-table-builder
    [source]="data"
    [row-css-classes]="rowCssClasses"
    primary-key="id"
>
    <!-- rowCssClasses === { 1: ['highlight'], 3: ['highlight'] } -->
    <ngx-empty>No data</ngx-empty>
    <ngx-source-null>Loading</ngx-source-null>
    <ngx-options is-sortable></ngx-options>
</ngx-table-builder>
                `}})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["sample-eighteen"]],decls:11,vars:2,consts:[[1,"simple-toolbar"],["mat-raised-button","","type","button",1,"show-simple",3,"click"],["primary-key","id",3,"row-css-classes","source"],["is-sortable",""]],template:function(o,i){o&1&&(s(0,"mat-toolbar",0)(1,"span"),n(2,"Example cell css classes"),t(),s(3,"button",1),u("click",function(){return i.showSample()}),n(4," show code sample "),t()(),s(5,"ngx-table-builder",2)(6,"ngx-empty"),n(7,"No data"),t(),s(8,"ngx-source-null"),n(9,"Loading"),t(),d(10,"ngx-options",3),t()),o&2&&(c(5),g("row-css-classes",i.rowCssClasses)("source",i.data()))},dependencies:[y,h,b,x,f,w],styles:[`.highlight{background:#90ee90}
`],encapsulation:2,changeDetection:0});let a=e;return a})();export{I as default};
