(()=>{"use strict";var e={92:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(46),a=r.n(n),o=r(758),i=r.n(o)()(a());i.push([e.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#container{\r\n    margin-top: 10rem;\r\n    display: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\talign-content: stretch;\r\n}\r\n\r\n\r\n\r\n#game-board-container{\r\n    display: flex;\r\n\tflex-direction: row;\r\n    margin-right: 33rem;\r\n    margin-left: 33rem;\r\n}\r\n#game-board-container button{\r\n    padding: 1rem;\r\n}\r\n.player1-board-piece{\r\n    background-color: purple;\r\n}\r\n.player2-board-piece{\r\n    background-color: blue;\r\n}",""]);const s=i},758:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);n&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},46:e=>{e.exports=function(e){return e[1]}},278:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),d=0;d<o.length;d++){var u=r(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},547:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},593:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},604:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},391:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},784:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(278),t=r.n(e),n=r(391),a=r.n(n),o=r(547),i=r.n(o),s=r(604),c=r.n(s),d=r(593),u=r.n(d),l=r(784),p=r.n(l),f=r(92),h={};function m(){return{playerName:e=>({name:e}),carrier:{health:5,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:5},battleship:{health:4,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:4},cruiser:{health:3,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:3},submarine:{health:3,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:3},destroyer:{health:2,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:2}}}h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,m(),function(){let e=["A","B","C","D","E","F","G","H","I","J"],t=0,r=1;for(let n=1;n<101;n++){const a=document.getElementById("player1-board"),o=document.createElement("button");o.className="player1-board-piece",o.id="boardPiece1-"+n,o.dataset.column=e[t],o.dataset.row=r,a.appendChild(o),"10"!=o.dataset.row?r++:(t++,r=1)}for(let n=1;n<101;n++){const a=document.getElementById("player2-board"),o=document.createElement("button");o.className="player2-board-piece",o.id="boardPiece2-"+n,o.dataset.column=e[t],o.dataset.row=r,a.appendChild(o),"10"!=o.dataset.row?r++:(t++,r=1)}}(),function(){const e=m();JSON.parse(JSON.stringify(e)),JSON.parse(JSON.stringify(e))}()})()})();