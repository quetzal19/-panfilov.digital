var panfilov_digital;!function(){var n={705:function(n){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);i&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},738:function(n){"use strict";n.exports=function(n){return n[1]}},315:function(n,t,e){"use strict";var i=e(738),r=e.n(i),o=e(705),a=e.n(o)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Syne&display=swap);"]),a.push([n.id,'.panfilov-digital-sign{color:var(--panfilov-digital-sign__currentTextColor);text-decoration:none;display:flex;flex-wrap:wrap;font-size:14px}.panfilov-digital-sign._small{flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._small>.text{margin-top:5px}.panfilov-digital-sign._medium{align-items:center}.panfilov-digital-sign._large{align-items:center}.panfilov-digital-sign._large .wrapper{margin-left:8px;display:flex;flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._large .text{margin-top:5px}.panfilov-digital-sign .text{font-family:inherit;font-size:1em;transition:.2s}.panfilov-digital-sign .icon{color:var(--panfilov-digital-sign__currentSVGColor);font-family:"Syne",sans-serif;display:flex;transition:.2s;font-size:1.14em}.panfilov-digital-sign .icon-anim{transition:.2s}.panfilov-digital-sign:hover{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon-anim{color:var(--panfilov-digital-sign__hoverSVGColor)}',""]),t.Z=a},379:function(n){"use strict";var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var l=n[s],c=i.base?l[0]+i.base:l[0],p=o[c]||0,u="".concat(c," ").concat(p);o[c]=p+1;var f=e(u),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var v=r(d,i);i.byIndex=s,t.splice(s,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);t[s].references--}for(var l=i(n,r),c=0;c<o.length;c++){var p=e(o[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=l}}},569:function(n){"use strict";var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:function(n){"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:function(n,t,e){"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:function(n){"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,r&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:function(n){"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},60:function(n){n.exports='<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z" fill="white"></path><path d="M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496" fill="#262934"></path></svg>'},323:function(n){n.exports='<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z" fill="#7248BD"></path><path d="M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496" fill="white"></path></svg>'}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};!function(){"use strict";e.r(i),e.d(i,{PanfilovDigitalSign:function(){return x}});var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),s=e.n(a),l=e(565),c=e.n(l),p=e(216),u=e.n(p),f=e(589),d=e.n(f),v=e(315),g={};g.styleTagTransform=d(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),t()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;var m=function(){return m=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},m.apply(this,arguments)},h=e(323),C=e(60),y={url:"https://panfilov.digital",mode:"medium",darkTheme:!1,colors:{text:{current:"#262934",hover:"#010101"},svg:{current:"#262934",hover:"#7248BD"}}},x=function(n){var t=n.el,e=n.options,i=m(m({},y),e);t.innerHTML=function(n){var t=n.url,e=n.mode,i=n.darkTheme;return'\n  <a href="'.concat(t,'" target="_blank" class="panfilov-digital-sign" :class="[`_').concat(e,'`]">\n    ').concat("small"===e?'\n  <span class="text">Разработка сайта</span>\n  <span class="icon">panfilov.<span class="icon-anim">digital</span></span>\n':"","\n    ").concat("medium"===e?'\n  <span class="text">Разработка сайта &mdash;&nbsp;</span>\n  <span class="icon">panfilov.<span class="icon-anim">digital</span></span>\n':"","\n    ").concat("large"===e?function(n){var t=n.darkTheme;return"\n  ".concat(t?"":h,"  \n  ").concat(t?C:"",'\n  <div class="wrapper">\n    <span class="text">Разработка сайта</span>\n    <span class="icon">panfilov.<span class="icon-anim">digital</span></span>\n  </div>\n')}({darkTheme:i}):"","\n  </a>\n")}(i);var r=document.documentElement;r.style.setProperty("--panfilov-digital-sign__currentTextColor",e.colors.text.current),r.style.setProperty("--panfilov-digital-sign__hoverTextColor",e.colors.text.hover),r.style.setProperty("--panfilov-digital-sign__currentSVGColor",e.colors.svg.current),r.style.setProperty("--panfilov-digital-sign__hoverSVGColor",e.colors.svg.hover)}}(),panfilov_digital=i}();