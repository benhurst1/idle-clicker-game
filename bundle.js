(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"* {\n    margin:0px;\n}\n\n#content {\n    height: 100vh;\n}\n\n#info {\n    background-color: chocolate;\n    height: 100px;\n}\n\n#playing-area {\n    height:100%;\n    background-color: brown;\n}\n\n.tabs {\n    gap:2px;\n    justify-content: center;\n    flex-direction: row;\n    display: flex;\n    background-color: chocolate;\n}\n\n.tabs .active{\n    background-color: grey\n}\n\n.tab {\n    border-radius: 5px 5px 0px 0px;\n    font-size: 18px;\n    color: antiquewhite;\n    border: none;\n    height:30px;\n    width: 80px;\n    background-color: black\n}\n\n.tab:hover {\n    cursor: pointer;\n}\n\n.tab-panes .tab-pane{\n    display: none\n}\n.tab-panes .active{\n    padding: 20px 50px;\n    background-color: grey;\n    align-items: start;\n    gap:10px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    display: flex\n}\n\n\n.resource {\n    color: antiquewhite;\n    gap:10px;\n    align-items: center;\n    font-size: 25px;\n    flex-direction: row;\n    display: flex;\n}\n\n.resource button {\n    /* align-content: start; */\n    text-align: left;\n    font-size: 15px;\n    height: 50px;\n    width:150px;\n}\n\n.resource button p {\n    text-align: right;\n    font-size: 10px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),u=0;u<c.length;u++){var d=t(c[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){document.getElementById(e.name).childNodes[0].textContent=e.count}document.getElementById("resources");class n{constructor(e,n,t){this.name=e,this.count=0,this.require=n,this.category=t}createButton(){(function(e){const n=document.createElement("div");n.setAttribute("id",e.name),n.setAttribute("class","resource");const t=document.createElement("button");t.setAttribute("id",`${e.name}-button`);const r=document.createElement("p");return n.appendChild(r),n.appendChild(t),t.textContent=e.name,r.textContent=e.count,e.require.forEach((e=>{let n=document.createElement("p");n.textContent=`${e.count} ${e.name}`,t.appendChild(n)})),document.getElementById(e.category).appendChild(n),t})(this).addEventListener("click",(()=>{(0==this.require.length||this.checkBuild())&&this.buildItem()}))}checkBuild(){let n=this.require.length;if(this.require.forEach((e=>{r.find((({name:n})=>n==e.name)).count>=e.count&&(n-=1)})),0==n)return this.require.forEach((n=>{const t=r.find((({name:e})=>e==n.name));t.count-=n.count,e(t)})),!0}buildItem(){const n=r.find((({name:e})=>e==this.name));n.count+=1,e(n)}}const r=[];function o(e,t,o){const c=new n(e,t,o);r.push(c),c.createButton()}class c extends n{constructor(e,n,t,r,o){super(e,n,t),this.produce=r,this.craftSpeed=o}producer(){this.count>0?(this.produce.forEach((e=>{let n=r.find((({name:n})=>n==e.name));n.checkBuild()&&n.buildItem()})),setTimeout((()=>{this.producer()}),1e3/this.count*this.craftSpeed)):setTimeout((()=>{this.producer()}),1e3)}}const a="raw";function i(e){const n=[];return e.forEach((e=>{const t=Object.keys(e),r=Object.values(e);n.push({name:t,count:r})})),n}var s,u=t(379),d=t.n(u),l=t(795),p=t.n(l),f=t(569),h=t.n(f),m=t(565),v=t.n(m),b=t(216),g=t.n(b),x=t(589),y=t.n(x),w=t(426),E={};E.styleTagTransform=y(),E.setAttributes=v(),E.insert=h().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=g(),d()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals,o("wood",[],a),o("stone",[],a),o("coal",[],a),o("brick",i([{stone:1},{coal:1}]),"lower-intermediates"),o("iron ore",[],a),function(e,n,t,o,a){const i=new c(e,n,t,o,a);r.push(i),i.producer(),i.createButton()}("stone miner",i([{brick:5}]),"buildings",i([{stone:1}]),5),s=document.querySelector(".tab-container"),tabs(s)})()})();