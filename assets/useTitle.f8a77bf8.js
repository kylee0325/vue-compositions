import{t as r}from"./useHistory.d7897cc0.js";import{n as a,j as u,_ as d,r as p,c as f,p as m,v as _,d as T,a as v,w as x,F as h,o as k,e as w}from"./app.3968e24d.js";function C(o,t=!1){const n=document.title,e=a(o);return u(()=>{document.title=e.value}),t&&r(()=>{document.title=n}),s=>{e.value=s}}const V={setup(){const o=C("title",!0),t=a("title");return{title:t,updateTitle:()=>{o(t.value)}}}},j=w("\u66F4\u65B0\u6807\u9898");function B(o,t,n,e,l,s){const c=p("a-button");return k(),f(h,null,[m(T("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.title=i)},null,512),[[_,e.title]]),v(c,{onClick:e.updateTitle},{default:x(()=>[j]),_:1},8,["onClick"])],64)}var y=d(V,[["render",B]]);export{y as default};