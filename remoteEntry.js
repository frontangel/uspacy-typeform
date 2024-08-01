var LeadBox;!function(){"use strict";var n,e,t,r,u,o,i,c,f,a,l,d,s,h,p,b,m,v,g,y,w={8694:function(n,e,t){var r={"./app":function(){return Promise.all([t.e(747),t.e(158),t.e(775)]).then((function(){return function(){return t(4775)}}))},"./settings":function(){return Promise.all([t.e(747),t.e(158),t.e(244),t.e(969)]).then((function(){return function(){return t(3969)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},P={};function x(n){var e=P[n];if(void 0!==e)return e.exports;var t=P[n]={id:n,loaded:!1,exports:{}};return w[n](t,t.exports,x),t.loaded=!0,t.exports}x.m=w,x.c=P,x.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return x.d(e,{a:e}),e},e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},x.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var u=Object.create(null);x.r(u);var o={};n=n||[null,e({}),e([]),e(e)];for(var i=2&r&&t;"object"==typeof i&&!~n.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((function(n){o[n]=function(){return t[n]}}));return o.default=function(){return t},x.d(u,o),u},x.d=function(n,e){for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.f={},x.e=function(n){return Promise.all(Object.keys(x.f).reduce((function(e,t){return x.f[t](n,e),e}),[]))},x.u=function(n){return"static/js/"+n+"."+{16:"58f623f9",56:"75402bb1",72:"46a90fbc",131:"02cc6ed2",152:"2352f7bf",158:"966cde67",170:"12e071e9",199:"3b219bf0",244:"01977416",248:"57a887dc",269:"a2c40350",280:"6f09d618",294:"4fca81f3",301:"f6ae04d1",362:"0e604a4c",404:"63570fee",441:"bf78a3a0",450:"aedca4f6",480:"f0d2c4d0",536:"b9eb62ef",550:"94990433",567:"4c2f8036",592:"8b375193",609:"2c3c713b",706:"c6cc4d8b",747:"8d3683ef",751:"24602333",775:"d8e296c0",852:"40144782",893:"11fa3533",932:"a6963d55",935:"b2654abc",945:"cf6347e3",969:"471f1122",978:"3fc3ae42"}[n]+".chunk.js"},x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),x.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t={},r="container:",x.l=function(n,e,u,o){if(t[n])t[n].push(e);else{var i,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var l=f[a];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+u){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",r+u),i.src=n),t[n]=[e];var d=function(e,r){i.onerror=i.onload=null,clearTimeout(s);var u=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach((function(n){return n(r)})),e)return e(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},x.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},x.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){x.S={};var n={},e={};x.I=function(t,r){r||(r=[]);var u=e[t];if(u||(u=e[t]={}),!(r.indexOf(u)>=0)){if(r.push(u),n[t])return n[t];x.o(x.S,t)||(x.S[t]={});var o=x.S[t],i="container",c=function(n,e,t,r){var u=o[n]=o[n]||{},c=u[e];(!c||!c.loaded&&(!r!=!c.eager?r:i>c.from))&&(u[e]={get:t,from:i,eager:!!r})},f=[];return"default"===t&&(c("@emotion/react","11.11.1",(function(){return Promise.all([x.e(751),x.e(747),x.e(550)]).then((function(){return function(){return x(3550)}}))})),c("@emotion/styled","11.11.0",(function(){return Promise.all([x.e(747),x.e(170),x.e(404)]).then((function(){return function(){return x(932)}}))})),c("@mui/material","5.14.7",(function(){return Promise.all([x.e(751),x.e(945),x.e(747),x.e(56),x.e(170),x.e(301),x.e(893)]).then((function(){return function(){return x(7945)}}))})),c("@reduxjs/toolkit","1.9.7",(function(){return x.e(152).then((function(){return function(){return x(4152)}}))})),c("@uspacy/sdk","0.0.93",(function(){return x.e(199).then((function(){return function(){return x(1199)}}))})),c("@uspacy/store","0.0.66",(function(){return Promise.all([x.e(362),x.e(747),x.e(592),x.e(280)]).then((function(){return function(){return x(3362)}}))})),c("i18next-resources-to-backend","1.1.4",(function(){return x.e(16).then((function(){return function(){return x(7016)}}))})),c("i18next","23.4.6",(function(){return x.e(609).then((function(){return function(){return x(6609)}}))})),c("idb","8.0.0",(function(){return x.e(269).then((function(){return function(){return x(6269)}}))})),c("react-dom","18.2.0",(function(){return Promise.all([x.e(935),x.e(747)]).then((function(){return function(){return x(3935)}}))})),c("react-i18next","13.2.2",(function(){return Promise.all([x.e(72),x.e(747)]).then((function(){return function(){return x(1072)}}))})),c("react-redux","8.1.3",(function(){return Promise.all([x.e(706),x.e(747),x.e(56)]).then((function(){return function(){return x(6706)}}))})),c("react","18.2.0",(function(){return x.e(294).then((function(){return function(){return x(7294)}}))}))),n[t]=f.length?Promise.all(f).then((function(){return n[t]=1})):1}}}(),function(){var n;x.g.importScripts&&(n=x.g.location+"");var e=x.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=n}(),u=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},o=function(n,e){n=u(n),e=u(e);for(var t=0;;){if(t>=n.length)return t<e.length&&"u"!=(typeof e[t])[0];var r=n[t],o=(typeof r)[0];if(t>=e.length)return"u"==o;var i=e[t],c=(typeof i)[0];if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;if("o"!=o&&"u"!=o&&r!=i)return r<i;t++}},i=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var r=1,u=1;u<n.length;u++)r--,t+="u"==(typeof(c=n[u]))[0]?"-":(r>0?".":"")+(r=2,c);return t}var o=[];for(u=1;u<n.length;u++){var c=n[u];o.push(0===c?"not("+f()+")":1===c?"("+f()+" || "+f()+")":2===c?o.pop()+" "+o.pop():i(c))}return f();function f(){return o.pop().replace(/^\((.+)\)$/,"$1")}},c=function(n,e){if(0 in n){e=u(e);var t=n[0],r=t<0;r&&(t=-t-1);for(var o=0,i=1,f=!0;;i++,o++){var a,l,d=i<n.length?(typeof n[i])[0]:"";if(o>=e.length||"o"==(l=(typeof(a=e[o]))[0]))return!f||("u"==d?i>t&&!r:""==d!=r);if("u"==l){if(!f||"u"!=d)return!1}else if(f)if(d==l)if(i<=t){if(a!=n[i])return!1}else{if(r?a>n[i]:a<n[i])return!1;a!=n[i]&&(f=!1)}else if("s"!=d&&"n"!=d){if(r||i<=t)return!1;f=!1,i--}else{if(i<=t||l<d!=r)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,i--)}}var s=[],h=s.pop.bind(s);for(o=1;o<n.length;o++){var p=n[o];s.push(1==p?h()|h():2==p?h()&h():p?c(p,e):!h())}return!!h()},f=function(n,e){var t=n[e];return Object.keys(t).reduce((function(n,e){return!n||!t[n].loaded&&o(n,e)?e:n}),0)},a=function(n,e,t,r){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+i(r)+")"},l=function(n,e,t,r){var u=f(n,t);return c(r,u)||s(a(n,t,u,r)),h(n[t][u])},d=function(n,e,t){var r=n[e];return(e=Object.keys(r).reduce((function(n,e){return!c(t,e)||n&&!o(n,e)?n:e}),0))&&r[e]},s=function(n){"undefined"!=typeof console&&console.warn&&console.warn(n)},h=function(n){return n.loaded=1,n.get()},b=(p=function(n){return function(e,t,r,u){var o=x.I(e);return o&&o.then?o.then(n.bind(n,e,x.S[e],t,r,u)):n(e,x.S[e],t,r,u)}})((function(n,e,t,r,u){return e&&x.o(e,t)?l(e,0,t,r):u()})),m=p((function(n,e,t,r,u){var o=e&&x.o(e,t)&&d(e,t,r);return o?h(o):u()})),v={},g={2747:function(){return b("default","react",[4,18,2,0],(function(){return x.e(294).then((function(){return function(){return x(7294)}}))}))},2170:function(){return b("default","@emotion/react",[1,11,11,0],(function(){return Promise.all([x.e(751),x.e(131)]).then((function(){return function(){return x(3550)}}))}))},56:function(){return b("default","react-dom",[4,18,2,0],(function(){return x.e(935).then((function(){return function(){return x(3935)}}))}))},4301:function(){return b("default","@emotion/styled",[1,11,11,0],(function(){return x.e(932).then((function(){return function(){return x(932)}}))}))},3501:function(){return b("default","@reduxjs/toolkit",[1,1,9,7],(function(){return x.e(152).then((function(){return function(){return x(4152)}}))}))},6028:function(){return b("default","@uspacy/sdk",[3,0,0,93],(function(){return x.e(199).then((function(){return function(){return x(1199)}}))}))},9238:function(){return b("default","react-redux",[1,8,1,3],(function(){return Promise.all([x.e(706),x.e(56)]).then((function(){return function(){return x(6706)}}))}))},2623:function(){return b("default","@mui/material",[1,5,13,0],(function(){return Promise.all([x.e(751),x.e(945),x.e(56),x.e(170),x.e(301)]).then((function(){return function(){return x(7945)}}))}))},4929:function(){return m("default","i18next-resources-to-backend",[1,1,1,4],(function(){return x.e(16).then((function(){return function(){return x(7016)}}))}))},5146:function(){return m("default","i18next",[1,23,4,6],(function(){return x.e(609).then((function(){return function(){return x(6609)}}))}))},5712:function(){return m("default","react-i18next",[1,13,2,2],(function(){return x.e(72).then((function(){return function(){return x(1072)}}))}))},9310:function(){return m("default","idb",[1,8,0,0],(function(){return x.e(269).then((function(){return function(){return x(6269)}}))}))}},y={56:[56],158:[2623,4929,5146,5712],170:[2170],244:[9310],301:[4301],592:[3501,6028,9238],747:[2747]},x.f.consumes=function(n,e){x.o(y,n)&&y[n].forEach((function(n){if(x.o(v,n))return e.push(v[n]);var t=function(e){v[n]=0,x.m[n]=function(t){delete x.c[n],t.exports=e()}},r=function(e){delete v[n],x.m[n]=function(t){throw delete x.c[n],e}};try{var u=g[n]();u.then?e.push(v[n]=u.then(t).catch(r)):t(u)}catch(n){r(n)}}))},function(){var n={722:0};x.f.j=function(e,t){var r=x.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(158|170|301|56|592|747)$/.test(e))n[e]=0;else{var u=new Promise((function(t,u){r=n[e]=[t,u]}));t.push(r[2]=u);var o=x.p+x.u(e),i=new Error;x.l(o,(function(t){if(x.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,r[1](i)}}),"chunk-"+e,e)}};var e=function(e,t){var r,u,o=t[0],i=t[1],c=t[2],f=0;if(o.some((function(e){return 0!==n[e]}))){for(r in i)x.o(i,r)&&(x.m[r]=i[r]);c&&c(x)}for(e&&e(t);f<o.length;f++)u=o[f],x.o(n,u)&&n[u]&&n[u][0](),n[u]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var j=x(8694);LeadBox=j}();
//# sourceMappingURL=remoteEntry.js.map