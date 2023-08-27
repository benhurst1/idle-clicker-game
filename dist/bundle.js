(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n    margin:0px;\n}\n\n#content {\n    height: 100vh;\n}\n\n#info {\n    background-color: chocolate;\n    height: 100px;\n}\n\n#playing-area {\n    height:100%;\n    background-color: brown;\n}\n\n.tabs {\n    gap:2px;\n    justify-content: center;\n    flex-direction: row;\n    display: flex;\n    background-color: chocolate;\n}\n\n.tabs .active{\n    background-color: grey\n}\n\n.tab {\n    border-radius: 5px 5px 0px 0px;\n    font-size: 18px;\n    color: antiquewhite;\n    border: none;\n    height:30px;\n    width: 80px;\n    background-color: black\n}\n\n.tab:hover {\n    cursor: pointer;\n}\n\n.tab-panes .tab-pane{\n    display: none\n}\n.tab-panes .active{\n    padding: 20px 50px;\n    background-color: grey;\n    align-items: start;\n    gap:10px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    display: flex\n}\n\n\n.resource {\n    color: antiquewhite;\n    gap:10px;\n    align-items: center;\n    font-size: 25px;\n    flex-direction: row;\n    display: flex;\n}\n\n.resource button {\n    /* align-content: start; */\n    text-align: left;\n    font-size: 15px;\n    height: 50px;\n    width:150px;\n}\n\n.resource button p {\n    text-align: right;\n    font-size: 10px;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var p=t(i[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){document.getElementById(e.name).childNodes[0].textContent=e.count}document.getElementById("resources");class n{constructor(e,n,t){this.name=e,this.count=0,this.require=n,this.category=t}createButton(){(function(e){const n=document.createElement("div");n.setAttribute("id",e.name),n.setAttribute("class","resource");const t=document.createElement("button");t.setAttribute("id",`${e.name}-button`);const r=document.createElement("p");return n.appendChild(r),n.appendChild(t),t.textContent=e.name,r.textContent=e.count,e.require.forEach((e=>{let n=document.createElement("p");n.textContent=`${e.count} ${e.name}`,t.appendChild(n)})),document.getElementById(e.category).appendChild(n),t})(this).addEventListener("click",(()=>{(0==this.require.length||this.checkBuild())&&this.buildItem()}))}checkBuild(){let n=this.require.length;if(this.require.forEach((e=>{r.find((({name:n})=>n==e.name)).count>=e.count&&(n-=1)})),0==n)return this.require.forEach((n=>{const t=r.find((({name:e})=>e==n.name));t.count-=n.count,e(t)})),!0}buildItem(){const n=r.find((({name:e})=>e==this.name));n.count+=1,e(n)}}const r=[];function o(e,t,o){const i=new n(e,t,o);r.push(i),i.createButton()}class i extends n{constructor(e,n,t,r,o){super(e,n,t),this.produce=r,this.craftSpeed=o}producer(){this.count>0?(this.produce.forEach((e=>{let n=r.find((({name:n})=>n==e.name));n.checkBuild()&&n.buildItem()})),setTimeout((()=>{this.producer()}),1e3/this.count*this.craftSpeed)):setTimeout((()=>{this.producer()}),1e3)}}const a=function(e,n,t,o,a){const c=new i(e,n,t,o,a);r.push(c),c.producer(),c.createButton()},c="raw",s="lower-intermediates",u="buildings";function p(e){const n=[];return e.forEach((e=>{const t=Object.keys(e),r=Object.values(e);n.push({name:t,count:r})})),n}var l,d=t(379),f=t.n(d),h=t(795),m=t.n(h),b=t(569),g=t.n(b),v=t(565),x=t.n(v),y=t(216),k=t.n(y),w=t(589),E=t.n(w),C=t(426),I={};I.styleTagTransform=E(),I.setAttributes=x(),I.insert=g().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=k(),f()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals,o("iron ore",[],c),o("copper ore",[],c),o("stone",[],c),o("coal",[],c),o("iron plate",p([{"iron ore":5},{coal:1}]),c),o("copper plate",p([{"iron ore":5},{coal:1}]),c),o("brick",p([{stone:5},{coal:1}]),c),o("iron gears",p([{"iron plate":1}]),s),o("copper wire",p([{"copper plate":1}]),s),o("red science",p([{"iron gears":3},{"copper plate":1}]),"science"),a("iron miner",p([{brick:3},{"iron plate":2},{"iron gears":3}]),u,p([{"iron ore":1}]),1),a("copper miner",p([{brick:3},{"iron plate":2},{"iron gears":3}]),u,p([{"copper ore":1}]),1),a("stone miner",p([{brick:3},{"iron plate":2},{"iron gears":3}]),u,p([{stone:1}]),1),a("coal miner",p([{brick:3},{"iron plate":2},{"iron gears":3}]),u,p([{coal:1}]),1),a("iron furnace",p([{brick:5},{"iron plate":2}]),u,p([{"iron plate":1}]),1),a("copper furnace",p([{brick:5},{"iron plate":2}]),u,p([{"copper plate":1}]),1),a("brick furnace",p([{brick:5},{"iron plate":2}]),u,p([{brick:1}]),1),a("iron gear assembly",p([{brick:2},{"iron plate":5},{"iron gears":2}]),u,p([{"iron gear":1}]),1),a("copper wire assembly",p([{brick:2},{"iron plate":5},{"iron gears":2}]),u,p([{"copper wire":1}]),1),a("red science assembly",p([{brick:2},{"iron plate":5},{"iron gears":2}]),u,p([{"red science":1}]),1),l=document.querySelector(".tab-container"),tabs(l)})()})();