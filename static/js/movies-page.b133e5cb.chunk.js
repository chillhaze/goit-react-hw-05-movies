(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{55:function(t,n,e){"use strict";e.d(n,"e",(function(){return h})),e.d(n,"b",(function(){return p})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return g}));var r=e(56),o=e.n(r);function i(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}var c="https://api.themoviedb.org/3",u="501ee89e0c17f106a2023a872eb6ff32";function s(){return l.apply(this,arguments)}function l(){return l=a(o.a.mark((function t(){var n,e,r,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",e=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(n,e);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("carrrramba! nothing found!"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}var h=function(){return s("".concat(c,"/trending/movie/week?api_key=").concat(u))},p=function(t){return s("".concat(c,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"))},f=function(t){return s("".concat(c,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1"))},d=function(t){return s("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u))},g=function(t){return s("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u))}},56:function(t,n,e){t.exports=e(57)},57:function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(T){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof v?n:v,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,n,e){var r=h;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===g)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===h)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=f;var u=l(t,n,e);if("normal"===u.type){if(r=e.done?d:p,u.arg===g)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",g={};function v(){}function y(){}function b(){}var x={};u(x,i,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(N([])));w&&w!==e&&r.call(w,i)&&(x=w);var j=b.prototype=v.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=b,u(j,"constructor",b),u(b,"constructor",y),y.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new k(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(j),u(j,c,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},58:function(t,n,e){"use strict";n.a=e.p+"static/media/poster-not-available.b93b25a7.jpg"},62:function(t,n,e){"use strict";e.r(n);var r,o,i,a,c,u,s,l,h,p,f=e(17),d=e(0),g=e(55),v=e(4),y=e(8),b=e(58),x=e(16),m=e.n(x),w=e(9),j=e(10),O=j.a.div(r||(r=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),k=j.a.div(o||(o=Object(w.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),L=j.a.form(i||(i=Object(w.a)(["\n  margin: 20px 10px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  background-color: #fff;\n  border: 1px solid #aba7a7;\n  border-radius: 3px;\n  /* box-shadow: 1px 3px 10px -4px #050505; */\n  overflow: hidden;\n"]))),E=j.a.input(a||(a=Object(w.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  :placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),_=j.a.button(c||(c=Object(w.a)(["\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  ::hover {\n    opacity: 1;\n  }\n"]))),S=j.a.span(u||(u=Object(w.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),N=j.a.ul(s||(s=Object(w.a)(["\n  padding-top: 25px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),P=j.a.li(l||(l=Object(w.a)(["\n  max-width: 180px;\n  /* border: 1px solid #222222; */\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),T=j.a.img(h||(h=Object(w.a)(["\n  min-width: 180px;\n  width: 100%;\n  height: 270px;\n"]))),G=j.a.p(p||(p=Object(w.a)(["\n  overflow: hidden;\n  /* margin-top: 10px; */\n  padding: 10px 0;\n  font-size: 12px;\n  text-align: center;\n  line-height: 24px;\n  font-weight: 600;\n"]))),F=e(1);n.default=function(t){var n=t.onClick,e=Object(d.useState)(""),r=Object(f.a)(e,2),o=r[0],i=r[1],a=Object(d.useState)(null),c=Object(f.a)(a,2),u=c[0],s=c[1],l=Object(d.useState)(""),h=Object(f.a)(l,2),p=h[0],x=h[1],w=Object(d.useState)("idle"),j=Object(f.a)(w,2),C=j[0],z=j[1],I=Object(v.g)(),R=Object(v.i)().url;Object(d.useEffect)((function(){""!==o&&(z("pending"),g.c(o).then((function(t){s(t.results),z("resolved"),i("")})).catch((function(t){console.log(t),z("rejected")})),z("idle"))}),[o]);var A=function(t){t.preventDefault(),""!==p.trim()?i(p):console.log("empty field")};return Object(F.jsxs)(k,{children:[Object(F.jsxs)(L,{onSubmit:A,children:[Object(F.jsx)(E,{value:p,onChange:function(t){x(t.currentTarget.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(F.jsx)(_,{type:"submit",onClick:A,children:Object(F.jsx)(S,{children:"Search"})})]}),"pending"===C&&Object(F.jsx)(O,{children:Object(F.jsx)(m.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===C&&Object(F.jsx)(N,{children:u.map((function(t){var e=t.id,r=t.original_title,o=t.title,i=t.name,a=t.poster_path,c="https://image.tmdb.org/t/p/w500/".concat(a);return null===a&&(c=b.a),Object(F.jsx)(P,{children:Object(F.jsxs)(y.b,{to:{pathname:"".concat(R,"/").concat(e),state:{from:{location:I,label:"Back to search"}}},onClick:function(){return n(e)},name:e,children:[Object(F.jsx)(T,{src:c,alt:o}),Object(F.jsx)(G,{children:o||(r||i)})]})},e)}))})]})}}}]);
//# sourceMappingURL=movies-page.b133e5cb.chunk.js.map