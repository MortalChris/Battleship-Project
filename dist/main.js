(()=>{"use strict";var e={92:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(46),o=r.n(n),a=r(758),l=r.n(a)()(o());l.push([e.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: slategrey;\r\n}\r\n\r\n#ship-box-container{\r\n    margin-top: 2rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\talign-content: stretch;\r\n}\r\n#ship-box-container button{\r\n    padding: 1rem;\r\n    border: none;\r\n    background-color: cyan;\r\n}\r\n#ship-box-container ul{\r\n    list-style-type: none;\r\n    display: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: space-between;\r\n\t/* align-items: flex-start;\r\n\talign-content: stretch; */\r\n    border: .3rem solid black;\r\n}\r\n#VH-Switch:hover{\r\n    background-color: rgb(1, 131, 206);\r\n}\r\n.Ship-List{\r\n    padding: 1rem;\r\n}\r\n.Ship-List:hover{\r\n    color: skyblue;\r\n    cursor: pointer;\r\n}\r\n.Ship-List:active{\r\n    color:blueviolet;\r\n}\r\n\r\n\r\n#turn-text-container{\r\n    margin-top: 2rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\talign-content: stretch;\r\n}\r\n\r\n\r\n#game-board-container{\r\n    display: flex;\r\n\tflex-direction: row;\r\n    margin-top: 6rem;\r\n    margin-right: 33rem;\r\n    margin-left: 33rem;\r\n}\r\n#game-board-container button{\r\n    padding: 1rem;\r\n}\r\n.player1-board-piece{\r\n    background-color: purple;\r\n}\r\n.player2-board-piece{\r\n    background-color: blue;\r\n}\r\n",""]);const c=l},758:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(l[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&l[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},46:e=>{e.exports=function(e){return e[1]}},278:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},l=[],c=0;c<e.length;c++){var i=e[c],s=n.base?i[0]+n.base:i[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=r(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}l.push(u)}return l}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var c=r(a[l]);t[c].references--}for(var i=n(e,o),s=0;s<a.length;s++){var d=r(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},547:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},593:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},604:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},391:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},784:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(278),t=r.n(e),n=r(391),o=r.n(n),a=r(547),l=r.n(a),c=r(604),i=r.n(c),s=r(593),d=r.n(s),u=r(784),p=r.n(u),f=r(92),m={};function h(){return{carrier:{health:5,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:5},battleship:{health:4,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:4},cruiser:{health:3,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:3},submarine:{health:3,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:3},destroyer:{health:2,dmg:0,hit(){this.dmg++},isSunk(){if(this.dmg==this.health)return!0},length:2}}}function y(){const e=h();return{player1:JSON.parse(JSON.stringify(e)),player2:JSON.parse(JSON.stringify(e))}}m.styleTagTransform=p(),m.setAttributes=i(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=h(),{player2:b}=y(),v=function(){const e=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];let t;function r(t,o,a,l,c,i){let s=!0;if("Horizontal"===l){let e=a-1;for(let r=e;r<e+c;r++){if(r>=10||1===t[o][r]||null===t[o][r]){s=!1;break}s=!0}if(s)for(let r=e;r<e+c;r++){t[o][r]=1;let e=r+1;document.addEventListener("DOMContentLoaded",(function(){n(o,e,i)}))}else r(t,Math.floor(9*Math.random()),Math.floor(10*Math.random())+1,l,c,i)}else if("Vertical"===l){for(let e=o;e<o+c;e++){if(e>=10||1===t[e][a]||null===t[e][a]){s=!1;break}s=!0}if(s)for(let e=o;e<o+c;e++)t[e][a-1]=1,document.addEventListener("DOMContentLoaded",(function(){n(e,a,i)}));else r(t,Math.floor(9*Math.random()),Math.floor(10*Math.random())+1,l,c,i)}console.log(e)}function n(e,t,r){const n=document.querySelector(`.player2-board-piece[data-row="${e}"][data-column="${t}"]`);console.log(n),n?(n.dataset.ship=r,console.log(n.dataset.ship),n.style.backgroundColor="purple"):console.log(`Element not found for row ${e} and column ${t}`)}return function(n){let o=["Horizontal","Vertical"];const a=y().player2;for(let l=0;l<5;l++){const c=Math.floor(9*Math.random()),i=Math.floor(10*Math.random())+1,s=o[Math.floor(Math.random()*o.length)];t=Object.keys(n)[l],r(e,c,i,s,a[t].length,t)}}(g),e}();!function(){let e=0,t=1;for(let r=1;r<101;r++){const n=document.getElementById("player1-board"),o=document.createElement("button");o.className="player1-board-piece",o.id="boardPiece1-"+r,o.dataset.row=e,o.dataset.column=t,n.appendChild(o),"10"!=o.dataset.column?t++:"10"!=o.dataset.row?(e++,t=1):e=0}e=0;for(let r=1;r<101;r++){const n=document.getElementById("player2-board"),o=document.createElement("button");o.className="player2-board-piece",o.id="boardPiece2-"+r,o.dataset.row=e,o.dataset.column=t,n.appendChild(o),"10"!=o.dataset.column?t++:"10"!=o.dataset.row?(e++,t=1):e=0}}(),function(){const e=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],t=document.getElementById("VH-Switch");let r;t.addEventListener("click",(()=>{"Horizontal"==t.textContent?t.textContent="Vertical":"Vertical"==t.textContent&&(t.textContent="Horizontal")})),function(){const n=y().player1;document.querySelectorAll(".Ship-List").forEach((e=>{e.addEventListener("click",(()=>{r=e.id}))})),document.querySelectorAll(".player1-board-piece").forEach((o=>{o.addEventListener("click",(()=>{const l=o.dataset.column,c=o.dataset.row;!function(t,r,n,o,l){let c=!0;if("Horizontal"===o){let e=n-1;for(let n=e;n<e+l;n++){if(n>=10||1===t[r][n]||null===t[r][n]){c=!1;break}c=!0}if(c)for(let n=e;n<e+l;n++)t[r][n]=1,a(r,n+1);else console.log("You tried to place the ship horizontally but there is already a ship there")}else if("Vertical"===o){for(let e=r;e<r+l;e++){if(e>=10||1===t[e][n]||null===t[e][n]){c=!1;break}c=!0}if(c)for(let e=r;e<r+l;e++)t[e][n]=1,console.log("Col is "+n),a(e,n);else console.log("You tried to place the ship vertically but there is already a ship there")}console.log(e)}(e,c-0,l,t.textContent,n[r].length)})),o.addEventListener("mouseover",(()=>{const a=o.dataset.column,l=o.dataset.row;!function(e,t,r,n,o){let a=!0;if("Horizontal"===n){let n=r-1;for(let r=n;r<n+o;r++){if(r>=10||1===e[t][r]||null===e[t][r]){a=!1;break}a=!0}if(a)for(let e=n;e<n+o;e++){let r=e+1;document.querySelector(`.player1-board-piece[data-row="${t}"][data-column="${r}"]`).style.backgroundColor="pink"}}else if("Vertical"===n){for(let n=t;n<t+o;n++){if(n>=10||1===e[n][r]||null===e[n][r]){a=!1;break}a=!0}if(a)for(let e=t;e<t+o;e++)document.querySelector(`.player1-board-piece[data-row="${e}"][data-column="${r}"]`).style.backgroundColor="pink"}}(e,l-0,a,t.textContent,n[r].length)})),o.addEventListener("mouseout",(()=>{document.querySelectorAll(".player1-board-piece").forEach((e=>{"red"!=e.style.backgroundColor&&(e.style.backgroundColor="")}))}))}))}();let n=document.querySelector("title"),o=0;function a(e,t){const a=document.querySelector(`.player1-board-piece[data-row="${e}"][data-column="${t}"]`);a.dataset.ship=r,a.style.backgroundColor="red",setTimeout((()=>{!function(){switch(r){case"carrier":document.querySelector("#carrier").id="carrier-Selected",document.querySelector("#carrier-Selected").style.color="gray",r=" ",o+=1,n.id=o;break;case"battleship":document.querySelector("#battleship").id="battleship-Selected",document.querySelector("#battleship-Selected").style.color="gray",r=" ",o+=1,n.id=o;break;case"cruiser":document.querySelector("#cruiser").id="cruiser-Selected",document.querySelector("#cruiser-Selected").style.color="gray",r=" ",o+=1,n.id=o;break;case"submarine":document.querySelector("#submarine").id="submarine-Selected",document.querySelector("#submarine-Selected").style.color="gray",r=" ",o+=1,n.id=o;break;case"destroyer":document.querySelector("#destroyer").id="destroyer-Selected",document.querySelector("#destroyer-Selected").style.color="gray",r=" ",o+=1,n.id=o}}()}),1)}}(),function(){const e=document.getElementById("turn-text");!function(){let t=document.querySelector("title");document.querySelectorAll(".player1-board-piece").forEach((r=>{r.addEventListener("click",(()=>{setTimeout((()=>{5==t.id&&(console.log("Number equals 5"),e.textContent="Its player1's turn",document.querySelectorAll(".player2-board-piece").forEach((e=>{e.addEventListener("click",(()=>{let t=parseInt(e.dataset.column)-1,r=parseInt(e.dataset.row);if(console.log(t+":Col   Row:"+r),console.log(v[r]),1===v[r][t]){const e=document.querySelector(`.player2-board-piece[data-row="${r}"][data-column="${t+1}"]`);let n=e.dataset.ship;console.log(e.dataset.ship),console.log(b),b[n].hit,console.log(b),function(e){e.style.backgroundColor="red"}(e)}else console.log("You Missed")}))})))}),1)}))}))}()}()})()})();