(()=>{"use strict";var e,r,t={287:(e,r,t)=>{t(865)}},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="vsch-template:",o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var p=s[f];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+a){u=p;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var c=(r,n)=>{u.onerror=u.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),l&&document.head.appendChild(u)}},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a,i,u,l,s=r[t];if(s||(s=r[t]={}),!(n.indexOf(s)>=0)){if(n.push(s),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var f=o.S[t],p="vsch-template",c=[];switch(t){case"default":a="17.0.1",u=f.react=f.react||{},(!(l=u[a])||!l.loaded&&(1!=!l.eager?i:p>l.from))&&(u[a]={get:()=>o.e(294).then((()=>()=>o(294))),from:p,eager:!1})}return e[t]=c.length?Promise.all(c).then((()=>e[t]=1)):1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{if(1===e.length)return"*";if(0 in e){var t="",n=e[0];t+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():r(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(r,t)=>{if(0 in r){t=e(t);var n=r[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,p=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(f=(typeof(s=t[i]))[0]))return!l||("u"==p?u>n&&!o:""==p!=o);if("u"==f){if(!l||"u"!=p)return!1}else if(l)if(p==f)if(u<=n){if(s!=r[u])return!1}else{if(o?s>r[u]:s<r[u])return!1;s!=r[u]&&(l=!1)}else if("s"!=p&&"n"!=p){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<p!=o)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,u--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var d=r[i];c.push(1==d?h()|h():2==d?h()&h():d?a(d,t):!h())}return!!h()},i=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},u=(e,t,n,o)=>{var u=i(e,n);return a(o,u)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+r(n)+")")(n,u,o)),l(e[n][u])},l=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,a){var i=o.I(r);return i&&i.then?i.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,a)=>r&&o.o(r,t)?u(r,0,t,n):a())),f={},p={865:()=>s("default","react",[1,17,0,1],(()=>o.e(294).then((()=>()=>o(294)))))};[865].forEach((e=>{t[e]=r=>{f[e]=0,delete n[e];var t=p[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var c={};o.f.consumes=(e,r)=>{o.o(c,e)&&c[e].forEach((e=>{if(o.o(f,e))return r.push(f[e]);var a=r=>{f[e]=0,t[e]=t=>{delete n[e],t.exports=r()}},i=r=>{delete f[e],t[e]=t=>{throw delete n[e],r}};try{var u=p[e]();u.then?r.push(f[e]=u.then(a).catch(i)):a(u)}catch(e){i(e)}}))}})(),(()=>{var e={179:0,287:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=a);var i=o.p+o.u(r),u=new Error;o.l(i,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[i,u,l]=t,s=0,f=[];s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(n in u)o.o(u,n)&&(o.m[n]=u[n]);for(l&&l(o),r&&r(t);f.length;)f.shift()()},t=self.webpackChunkvsch_template=self.webpackChunkvsch_template||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o(287)})();