import{u as d}from"./useHistory.d7897cc0.js";import{u as h}from"./useDebounceFn.44f92e25.js";import{m as r,n as u,_ as l,c as p,d as a,t as c,F as f,o as w}from"./app.3968e24d.js";import"./useDebounce.8fd88e11.js";function m(e=null,t=200){const s=u(window.innerWidth),i=u(window.innerHeight);let n=function(o){e&&e.call(this,o),s.value=window.innerWidth,i.value=window.innerHeight};return t&&(n=h(n,t)),d("resize",n),{width:r(s),height:r(i)}}const g={setup(){return m()}};function _(e,t,s,i,n,o){return w(),p(f,null,[a("p",null,"width: "+c(e.width),1),a("p",null,"height: "+c(e.height),1)],64)}var D=l(g,[["render",_]]);export{D as default};