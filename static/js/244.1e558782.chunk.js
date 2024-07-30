/*! For license information please see 244.1e558782.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[244,893],{1320:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893),r=n(2747),s=n(5712),a=n(5146),o=n.n(a),c=n(4929),l=n.n(c);o().use(s.initReactI18next).use(l()((function(e,t,i){n(7535)("./".concat(e,"/").concat(t,".json")).then((function(e){i(null,e)})).catch((function(e){i(e,null)}))}))).init({fallbackLng:"en-US"});var d=o(),x=(0,r.createContext)({}),h=function(e){var t=e.children,n=e.userSettings;return(0,i.jsx)(x.Provider,{value:{userSettings:n},children:t})},p=(0,r.createContext)({}),m=function(e){var t=e.children,n=(0,r.useContext)(x).userSettings;return(0,r.useEffect)((function(){d.changeLanguage(null==n?void 0:n.lang)}),[null==n?void 0:n.lang]),(0,i.jsx)(p.Provider,{value:{userSettings:n},children:(0,i.jsx)(s.I18nextProvider,{i18n:d,children:t})})},u=function(e){var t=e.children,n=e.userSettings;return(0,i.jsx)(h,{userSettings:n,children:(0,i.jsx)(m,{children:t})})}},5204:function(e,t,n){"use strict";var i=n(5893),r=n(2623),s=n(5712);t.Z=function(){var e=(0,s.useTranslation)("settings").i18n.language,t={fontWeight:500,color:"#9c27b0"},n={color:t.color,border:"1px solid ".concat(t.color),display:"inline-flex",padding:"0.25rem 1rem",borderRadius:"3px",marginLeft:"0.5rem",letterSpacing:"1px",fontSize:"14px"},a={color:"#03a9f4"};return(0,i.jsxs)(r.Box,{children:["uk"===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.Box,{sx:{marginBottom:6},children:[(0,i.jsx)(r.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 1 - підключення Uspacy до акаунту LeadBox"}),(0,i.jsxs)(r.Typography,{gutterBottom:!0,component:"div",children:["Зареєструйте акаунт в сервісі"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua",sx:a,target:"_blank",children:"my.leadbox.com.ua"}),", якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua/admin/integrations",sx:a,target:"_blank",children:"Інтеграції"}),"."]}),(0,i.jsx)(r.Typography,{component:"div",children:"Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:"}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ оберіть ",(0,i.jsx)("span",{style:t,children:"Додати інтеграцію"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ оберіть розділ ",(0,i.jsx)("span",{style:t,children:"CRM"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ натисніть ",(0,i.jsx)("span",{style:t,children:"Uspacy"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:"➡️ введіть потрібну вам назву"})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ скопіюте отриманий ",(0,i.jsx)("span",{style:t,children:"Api ключ"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ вставте ключ в форму вище і натисніть",(0,i.jsx)("span",{style:n,children:"Підключити"})]})})})]})]}),(0,i.jsxs)(r.Box,{children:[(0,i.jsx)(r.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 2 - підключення інтеграції Type Form"}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ зайдіть на сторінку інтеграцій в ",(0,i.jsx)("span",{style:t,children:"LeadBox"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ натисніть ",(0,i.jsx)("span",{style:t,children:"Додати інтеграцію"})," та оберіть з переліку"," ",(0,i.jsx)("span",{style:t,children:"Web сайт → Type Form"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:"➡️ Дайте назву інтеграції"})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Заповніть налаштування згідно з цією"," ",(0,i.jsx)(r.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-type-form",sx:a,target:"_blank",children:"інструкцією"}),"."]})})})]})]}),(0,i.jsxs)(r.Box,{sx:{marginTop:4},children:[(0,i.jsxs)(r.Typography,{component:"div",children:["Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримку на"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua",sx:a,target:"_blank",children:"my.leadbox.com.ua"})," ","або:"]}),(0,i.jsxs)(r.Typography,{component:"div",children:["✉️"," ",(0,i.jsx)(r.Link,{href:"mailto:office@leadbox.com.ua",sx:a,children:"office@leadbox.com.ua"})]}),(0,i.jsxs)(r.Typography,{component:"div",children:["📱"," ",(0,i.jsx)(r.Link,{href:"tel:+380933164008",sx:a,children:"+38 (093) 316-40-08"})]})]})]}),"uk"!==e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.Box,{sx:{marginBottom:6},children:[(0,i.jsx)(r.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"STEP 1 - Connecting Uspacy to your LeadBox account:"}),(0,i.jsxs)(r.Typography,{gutterBottom:!0,component:"div",children:["Register an account at"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua",sx:a,target:"_blank",children:"my.leadbox.com.ua"}),". If you already have an account, log in and go to the page Integrations."," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua/admin/integrations",sx:a,target:"_blank",children:"Integrations"}),"."]}),(0,i.jsx)(r.Typography,{component:"div",children:"Select the Uspacy integration (if you created it previously), or create a new one."}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Select ",(0,i.jsx)("span",{style:t,children:"Add Integration"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Choose the ",(0,i.jsx)("span",{style:t,children:"CRM"})," section."]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Click on ",(0,i.jsx)("span",{style:t,children:"Uspacy"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:"➡️  Enter the desired name"})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Fill in the ",(0,i.jsx)("span",{style:t,children:"Api key"})," field with the Secret Key data, which you will get from the Uspacy integration page in the LeadBox service"]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Click",(0,i.jsx)("span",{style:n,children:"Connect"})]})})})]})]}),(0,i.jsxs)(r.Box,{children:[(0,i.jsx)(r.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"STEP 2 - Connecting the Type Form integration:"}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Go to the"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua/admin/integrations",sx:a,target:"_blank",children:"integration"})," ","page in LeadBox"]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Click ",(0,i.jsx)("span",{style:t,children:"Add Integration"})," and select from the list"," ",(0,i.jsx)("span",{style:t,children:"Web сайт → Type Form"})]})})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:"➡️ Give the integration a name"})}),(0,i.jsx)(r.ListItem,{sx:{paddingY:0},children:(0,i.jsx)(r.ListItemText,{primary:(0,i.jsxs)(i.Fragment,{children:["➡️ Complete the settings according to the"," ",(0,i.jsx)(r.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-type-form",sx:a,target:"_blank",children:"instructions"}),"."]})})})]})]}),(0,i.jsxs)(r.Box,{sx:{marginTop:4},children:[(0,i.jsxs)(r.Typography,{component:"div",children:["If you have any questions, please write to us in the support chat in your"," ",(0,i.jsx)(r.Link,{href:"https://my.leadbox.com.ua",sx:a,target:"_blank",children:"my.leadBox.com.ua"})," ","account, or"]}),(0,i.jsxs)(r.Typography,{component:"div",children:["✉️"," ",(0,i.jsx)(r.Link,{href:"mailto:office@leadbox.com.ua",sx:a,children:"office@leadbox.com.ua"})]}),(0,i.jsxs)(r.Typography,{component:"div",children:["📱"," ",(0,i.jsx)(r.Link,{href:"tel:+380933164008",sx:a,children:"+38 (093) 316-40-08"})]})]})]})]})}},970:function(e,t,n){"use strict";n.d(t,{jJ:function(){return s}});var i=n(9310),r=(0,i.openDB)("Uspacy"),s=function(e){return t=void 0,n=void 0,s=function(){return function(e,t){var n,i,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(t){switch(t.label){case 0:return[4,r];case 1:return[4,t.sent().get("tokens",e)];case 2:return[2,t.sent()]}}))},new((i=void 0)||(i=Promise))((function(e,r){function a(e){try{c(s.next(e))}catch(e){r(e)}}function o(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,o)}c((s=s.apply(t,n||[])).next())}));var t,n,i,s}},5251:function(e,t,n){"use strict";var i=n(2747),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},5893:function(e,t,n){"use strict";e.exports=n(5251)},7535:function(e,t,n){var i={"./en-US/settings.json":[8414,852],"./en-US/translation.json":[567,567],"./pl/settings.json":[1441,441],"./pl/translation.json":[450,450],"./pt-BR/settings.json":[2248,248],"./pt-BR/translation.json":[9536,536],"./uk/settings.json":[8480,480],"./uk/translation.json":[2978,978]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,19)}))}r.keys=function(){return Object.keys(i)},r.id=7535,e.exports=r}}]);
//# sourceMappingURL=244.1e558782.chunk.js.map