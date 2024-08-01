"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[969],{3969:function(e,n,t){t.r(n);var o=t(5893),r=t(2623),i=t(2747),a=t(5712),c=t(970),s=t(1320),u=t(5204),l=function(){return l=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)},d=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((o=o.apply(e,n||[])).next())}))},p=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};function f(e){var n="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===n.length)return n.pop().split(";").shift()}function h(){var e=window.location.href;return new URL(e).hostname}var v,b=(v=h()).endsWith("staging.uspacy.tech")?"https://auth.dev.leadbox.com.ua":"localhost"===v?"http://localhost:6904":"https://auth.leadbox.com.ua",x="typeform",g=function(){var e,n,t,s=(0,i.useState)({installed:!1,apiKey:"",isConnected:!1}),v=s[0],g=s[1],y=(0,i.useState)(!1),m=y[0],w=y[1],j=(0,i.useState)(!1),k=j[0],C=j[1],S=(0,i.useState)(""),K=S[0],B=S[1],T=(0,a.useTranslation)("settings").t,L=function(e,n,t){return d(void 0,void 0,void 0,(function(){return p(this,(function(o){return[2,new Promise((function(o){var r={"Accept-Language":"uk","Content-Type":"application/json"};n&&(r.Authorization="Bearer ".concat(n)),fetch(e,l({headers:r},t)).then((function(e){return e.json()})).then(o).catch((function(){o({apiKey:"",isConnected:!1,installed:!1})}))}))]}))}))},P=function(){return d(void 0,void 0,void 0,(function(){var e,n,t;return p(this,(function(o){switch(o.label){case 0:return"localhost"===h()?[2,f("usAppToken")]:[4,(0,c.jJ)("token")];case 1:return e=o.sent(),[4,L("/apps/v1/apps?code[]=do_it_well_lead_box",e)];case 2:return n=o.sent(),[4,_()];case 3:return o.sent(),[2,(null===(t=null==n?void 0:n.data[0])||void 0===t?void 0:t.integration_token)||""]}}))}))},_=function(e){return void 0===e&&(e=1e3),new Promise((function(n){return setTimeout(n,e)}))};(0,i.useEffect)((function(){d(void 0,void 0,void 0,(function(){var e,n;return p(this,(function(t){switch(t.label){case 0:return w(!0),[4,P()];case 1:return e=t.sent(),[4,L("".concat(b,"/uspacy/").concat(x,"/settings"),e)];case 2:return n=t.sent(),g(n),w(!1),[2]}}))}))}),[]);var A=m?{backgroundColor:"#efefef",color:"#a6a6a8"}:(null==v?void 0:v.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,o.jsxs)(r.Box,{children:[(0,o.jsxs)(r.Box,{children:[(0,o.jsx)(r.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,o.jsx)(r.Typography,{sx:l(l({},A),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:m?T("loading"):(null==v?void 0:v.isConnected)?T("connected"):T("notConnected")})}),(0,o.jsx)(r.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:T("LABEL_API_KEY")}),(0,o.jsxs)(r.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return d(void 0,void 0,void 0,(function(){var n,t,o;return p(this,(function(r){switch(r.label){case 0:return e.preventDefault(),w(!0),[4,P()];case 1:return n=r.sent(),[4,L("".concat(b,"/uspacy/").concat(x,"/settings"),n,{method:"POST",body:JSON.stringify({apiKey:null===(o=v.apiKey)||void 0===o?void 0:o.trim()})})];case 2:return(t=r.sent()).error?B(t.message):g(t),w(!1),C(!1),[2]}}))}))},children:[(0,o.jsx)(r.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:m,placeholder:T("integrationApiKey"),value:v.apiKey||"",onChange:function(e){B(""),g(l(l({},v),{apiKey:e.target.value})),C(!0)}}),(0,o.jsxs)(r.Button,{disableElevation:!0,variant:(null===(e=v.apiKey)||void 0===e?void 0:e.trim())&&k?"contained":"outlined",type:"submit",disabled:m||!(null===(n=v.apiKey)||void 0===n?void 0:n.trim())||!k,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(t=v.apiKey)||void 0===t?void 0:t.trim())&&k?"#d2f7b6":"transparent",color:m?"#a6a6a8":"#58ca00",borderColor:m?"#a6a6a8":"#58ca00"}},children:[T("connect"),m&&(0,o.jsx)(r.CircularProgress,{size:22,sx:{color:"#a6a6a8",position:"absolute",zIndex:1}})]})]}),(0,o.jsx)(r.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:(0,o.jsx)(r.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:T(K)})&&K})]}),(0,o.jsx)(u.Z,{})]})};n.default=function(e){var n=e.userSettings;return(0,o.jsx)(s.Z,{userSettings:n,children:(0,o.jsx)(g,{})})}}}]);
//# sourceMappingURL=969.63563d9e.chunk.js.map