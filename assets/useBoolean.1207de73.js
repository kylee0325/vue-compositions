var d=Object.defineProperty;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var _=(e,s,t)=>s in e?d(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,g=(e,s)=>{for(var t in s||(s={}))f.call(s,t)&&_(e,t,s[t]);if(p)for(var t of p(s))v.call(s,t)&&_(e,t,s[t]);return e};import{f as m,g as k,_ as C,r as T,c as $,a as b,t as B,d as r,w as l,F,o as h,b as c}from"./app.bba52c0c.js";const y=(e=!1,s)=>{const t=k(e),n=s===void 0?!e:s,i=a=>{a!==void 0?t.value=a:t.value=t.value===e?n:e},u=()=>{t.value=e},o=()=>{t.value=n};return{state:m(t),setDefault:u,setRight:o,toggle:i}};function N(e=!1){const{state:s,toggle:t}=y(e);return{state:s,toggle:t,setTrue:()=>t(!0),setFalse:()=>t(!1)}}const w={setup(){const e=N();return g({},e)}},D=c("toggle"),j=c("True"),E=c("False");function R(e,s,t,n,i,u){const o=T("a-button");return h(),$(F,null,[b("p",null,B(e.state),1),r(o,{onClick:s[0]||(s[0]=a=>e.toggle())},{default:l(()=>[D]),_:1}),r(o,{type:"primary",onClick:e.setTrue},{default:l(()=>[j]),_:1},8,["onClick"]),r(o,{onClick:e.setFalse},{default:l(()=>[E]),_:1},8,["onClick"])],64)}var x=C(w,[["render",R]]);export{x as default};