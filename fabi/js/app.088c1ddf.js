(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],s=0,f=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({views:"views"}[e]||e)+"."+{views:"2dbdb378"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={views:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({views:"views"}[e]||e)+"."+{views:"5da91bff"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cc8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("e07b"),c={id:"nav"},u=Object(r["g"])("span",null,"Die 1x1 Reihen: ",-1),a=Object(r["h"])("Rechenspiel"),i={setup:function(e){return function(e,t){var n=Object(r["A"])("router-link"),i=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[u,(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(Object(r["F"])(o["a"]),(function(e){return Object(r["t"])(),Object(r["d"])(n,{key:e,to:"/"+e},{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["E"])(e),1)]})),_:2},1032,["to"])})),128))]),Object(r["i"])(n,{to:"/rechenspiel"},{default:Object(r["I"])((function(){return[a]})),_:1}),Object(r["g"])("main",null,[Object(r["i"])(i)])],64)}}};n("ad7e");const l=i;var s=l,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=n("cf05"),p=n.n(d),b={class:"home"},m=Object(r["g"])("img",{alt:"Vue logo",src:p.a},null,-1),v=[m];function h(e,t,n,o,c,u){return Object(r["t"])(),Object(r["f"])("div",b,v)}var g={name:"Home"},O=n("d959"),j=n.n(O);const y=j()(g,[["render",h]]);var w=y,E=[{path:"/",name:"Home",component:w},{path:"/rechenspiel",name:"Game",component:function(){return n.e("views").then(n.bind(null,"7d36"))}},{path:"/:id",name:"Nummer",component:function(){return n.e("views").then(n.bind(null,"a6b0"))}}],A=Object(f["a"])({history:Object(f["b"])("/"),routes:E}),C=A,T=n("5502"),_=Object(T["a"])({state:{calculated:0,correct:0,wrong:0},mutations:{UPDATE_CALCULATED:function(e){e.calculated++},UPDATE_CORRECT:function(e){e.correct++},UPDATE_WRONG:function(e){e.wrong++}},actions:{updateCalculated:function(e){var t=e.commit;t("UPDATE_CALCULATED")},updateCorrect:function(e){var t=e.commit;t("UPDATE_CORRECT")},updateWrong:function(e){var t=e.commit;t("UPDATE_WRONG")}},modules:{}});Object(r["c"])(s).use(_).use(C).mount("#app")},ad7e:function(e,t,n){"use strict";n("1cc8")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e07b:function(e,t,n){"use strict";var r=[1,2,3,4,5,6,7,8,9,10];t["a"]=r}});
//# sourceMappingURL=app.088c1ddf.js.map