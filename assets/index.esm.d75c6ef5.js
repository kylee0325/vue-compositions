function h(r,n,i,t){var e,a=!1,s=0;function c(){e&&clearTimeout(e)}function m(){c(),a=!0}typeof n!="boolean"&&(t=i,i=n,n=void 0);function o(){for(var p=arguments.length,l=new Array(p),f=0;f<p;f++)l[f]=arguments[f];var w=this,v=Date.now()-s;if(a)return;function u(){s=Date.now(),i.apply(w,l)}function x(){e=void 0}t&&!e&&u(),c(),t===void 0&&v>r?u():n!==!0&&(e=setTimeout(t?x:u,t===void 0?r-v:r))}return o.cancel=m,o}export{h as t};
