/*! For license information please see 775.d8e296c0.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[775,893],{1320:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),i=n(2747),s=n(5712),o=n(5146),a=n.n(o),c=n(4929),l=n.n(c);a().use(s.initReactI18next).use(l()((function(e,t,r){n(7535)("./".concat(e,"/").concat(t,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});var u=a(),x=(0,i.createContext)({}),d=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(x.Provider,{value:{userSettings:n},children:t})},h=(0,i.createContext)({}),p=function(e){var t=e.children,n=(0,i.useContext)(x).userSettings;return(0,i.useEffect)((function(){u.changeLanguage(null==n?void 0:n.lang)}),[null==n?void 0:n.lang]),(0,r.jsx)(h.Provider,{value:{userSettings:n},children:(0,r.jsx)(s.I18nextProvider,{i18n:u,children:t})})},j=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(d,{userSettings:n,children:(0,r.jsx)(p,{children:t})})}},4775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),i=n(2623),s=n(2747),o=n(5712),a=n(1320),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)},l=function(e){var t=e.children,n=e.value,s=e.index,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["children","value","index"]);return(0,r.jsx)(i.Box,c({role:"tabpanel",hidden:n!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s)},o,{children:n===s&&(0,r.jsx)(i.Box,{sx:{p:3},children:(0,r.jsx)(i.Typography,{children:t})})}))},u=function(e){var t=e.value;return(0,r.jsxs)(l,{value:t,index:0,children:[(0,r.jsx)(i.Typography,{sx:{marginBottom:"2rem"},children:"Цей застосунок дозволить вам без написання коду налаштувати Smart-передачу лідів з будь якого вашого джерела лідогенерації в Uspacy відправивши дані на Webhook."}),(0,r.jsx)(i.Typography,{sx:{marginBottom:"2rem"},children:["Більшість CMS, платформ конструкторів сайтів та квізів, онлайн чатів та","інших сервісів мають вбудований функціонал відправки даних по запиту","клієнта на Webhook. Відповідно всі ці сервіси можна інтегрувати з Uspacy через даний застосунок."].join(" ")}),(0,r.jsx)(i.Typography,{children:"Функціонал застосунку:"}),(0,r.jsxs)(i.List,{sx:{marginBottom:"2rem"},children:[(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"Створювати лід або контакт та угоду із кожної заявки, яку ви отримуєте з джерела лідогенерації"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:["При створені ліда або контакту з угодою виключити можливість створення","дубля клієнта за рахунок перевірки наявності телефону / емейлу в Uspacy"].join(" ")})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"Обрати сценарій створення повторної угоди по наявному клієнту"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"Створити схему розподілу нових замовлень на менеджерів під кожний окремий Webhook"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"Зручно, без написання коду, обрати в які поля Uspacy ви хочете передати інформацію по ліду"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:["Оновлювати дані у вже наявних угодах / контактах додатковою інформацією (наприклад про джерело трафіку)","з новий замовлень клієнта"].join(" ")})})]}),(0,r.jsx)(i.Typography,{sx:{marginBottom:"2rem"},children:"І все це можливо налаштувати через адмін панель сервісу LeadBox і змінювати в подальшому швидко та зручно."}),(0,r.jsx)(i.Typography,{children:"Окрім даних самого ліда та його запиту ви можете отримати на Webhook:"}),(0,r.jsxs)(i.List,{sx:{marginBottom:"2rem"},children:[(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"дані по джерелу трафіка (utm-мітки)"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"автоматично заповнити джерело в Uspacy"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"обрати назву створюваного ліда / угоди"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{children:"в подальшому відправити дані з Uspacy в Google Analytics"})})]}),(0,r.jsx)(i.Typography,{children:"Серед інших вбудованих інтеграцій сервісу LeadBox:"}),(0,r.jsx)(i.Typography,{sx:{marginBottom:"2rem"},children:["Google Analytucs / Meta лід-форми / TypeForms / Коллтрекінг Binotel / Weblium / Хорошоп","/ Tilda / WordPress / Sendpulse Чат-боти та багато інших."].join(" ")}),(0,r.jsxs)(i.Typography,{sx:{marginBottom:"2rem"},children:["Встановлюй будь які з них оплачуючи тільки обраний тарифний. Детальніше на сайті LeadBox (посилання на сайт)."," "]}),(0,r.jsx)(i.Typography,{sx:{marginBottom:"2rem"},children:["Якщо вам не вистачає функціоналу в даній інтеграції чи є запитання - пишіть office@leadbox.com.ua","або дзвоніть +380933164008 (даний номер також є в телеграм)."].join(" ")})]})},x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},x.apply(this,arguments)};function d(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var h=function(){var e=(0,o.useTranslation)().t,t=(0,s.useState)(0),n=t[0],a=t[1],c={width:"100%",maxWidth:"50%",textTransform:"none",letterSpacing:"1px"};return(0,r.jsxs)(i.Box,{sx:{width:"100%"},children:[(0,r.jsx)(i.Box,{sx:{borderBottom:1,borderColor:"divider",width:"100%"},children:(0,r.jsxs)(i.Tabs,{sx:{width:"100%"},value:n,onChange:function(e,t){a(t)},"aria-label":"basic tabs example",children:[(0,r.jsx)(i.Tab,x({sx:c,label:e("aboutApp")},d(0))),(0,r.jsx)(i.Tab,x({sx:c,label:e("settingsApp")},d(1)))]})}),(0,r.jsx)(u,{value:n}),(0,r.jsx)(l,{value:n,index:1,children:"Item Two"})]})},p=function(e){var t=e.userSettings;return(0,r.jsx)(a.Z,{userSettings:t,children:(0,r.jsx)(h,{})})}},5251:function(e,t,n){"use strict";var r=n(2747),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},5893:function(e,t,n){"use strict";e.exports=n(5251)},7535:function(e,t,n){var r={"./en-US/settings.json":[8414,852],"./en-US/translation.json":[567,567],"./pl/settings.json":[1441,441],"./pl/translation.json":[450,450],"./pt-BR/settings.json":[2248,248],"./pt-BR/translation.json":[9536,536],"./uk/settings.json":[8480,480],"./uk/translation.json":[2978,978]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,19)}))}i.keys=function(){return Object.keys(r)},i.id=7535,e.exports=i}}]);
//# sourceMappingURL=775.d8e296c0.chunk.js.map