(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(6637);t.exports=o("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},1318:(t,e,r)=>{var n=r(5656),o=r(7466),a=r(1400),i=function(t){return function(e,r,i){var c,u=n(e),l=o(u.length),s=a(i,l);if(t&&r!=r){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},2092:(t,e,r)=>{var n=r(244),o=r(8361),a=r(7908),i=r(7466),c=r(5417),u=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,s=4==t,f=6==t,v=5==t||f;return function(d,p,h,g){for(var y,m,b=a(d),x=o(b),L=n(p,h,3),S=i(x.length),A=0,E=g||c,w=e?E(d,S):r?E(d,0):void 0;S>A;A++)if((v||A in x)&&(m=L(y=x[A],A,b),t))if(e)w[A]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return A;case 2:u.call(w,y)}else if(s)return!1;return f?-1:l||s?s:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},5417:(t,e,r)=>{var n=r(111),o=r(3157),a=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},244:(t,e,r)=>{var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e){for(var r=o(e),c=i.f,u=a.f,l=0;l<r.length;l++){var s=r[l];n(t,s)||c(t,s,u(e,s))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},317:(t,e,r)=>{var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),u=r(9920),l=r(4705);t.exports=function(t,e){var r,s,f,v,d,p=t.target,h=t.global,g=t.stat;if(r=h?n:g?n[p]||c(p,{}):(n[p]||{}).prototype)for(s in e){if(v=e[s],f=t.noTargetGet?(d=o(r,s))&&d.value:r[s],!l(h?s:p+(g?".":"#")+s,t.forced)&&void 0!==f){if(typeof v==typeof f)continue;u(v,f)}(t.sham||f&&f.sham)&&a(v,"sham",!0),i(r,s,v,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t])||a(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||Function("return this")()},6656:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(2309),o=Function.toString;t.exports=n("inspectSource",(function(t){return o.call(t)}))},9909:(t,e,r)=>{var n,o,a,i=r(8536),c=r(7854),u=r(111),l=r(8880),s=r(6656),f=r(6200),v=r(3501),d=c.WeakMap;if(i){var p=new d,h=p.get,g=p.has,y=p.set;n=function(t,e){return y.call(p,t,e),e},o=function(t){return h.call(p,t)||{}},a=function(t){return g.call(p,t)}}else{var m=f("state");v[m]=!0,n=function(t,e){return l(t,m,e),e},o=function(t){return s(t,m)?t[m]:{}},a=function(t){return s(t,m)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,a=function(t,e){var r=c[i(t)];return r==l||r!=u&&("function"==typeof e?n(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),a=n.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3070:(t,e,r)=>{var n=r(9781),o=r(4664),a=r(9670),i=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(a(t),e=i(e,!0),a(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),a=r(9114),i=r(5656),c=r(7593),u=r(6656),l=r(4664),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=i(t),e=c(e,!0),l)try{return s(t,e)}catch(t){}if(u(t,e))return a(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),a=r(1318).indexOf,i=r(3501);t.exports=function(t,e){var r,c=o(t),u=0,l=[];for(r in c)!n(i,r)&&n(c,r)&&l.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~a(l,r)||l.push(r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),a=r(5181),i=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=a.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),a=r(6656),i=r(3505),c=r(2788),u=r(9909),l=u.get,s=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||a(r,"name")||o(r,"name",e),s(r).source=f.join("string"==typeof e?e:"")),t!==n?(u?!v&&t[e]&&(l=!0):delete t[e],l?t[e]=r:o(t,e,r)):l?t[e]=r:i(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.5",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},6637:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol()},5112:(t,e,r)=>{var n=r(7854),o=r(2309),a=r(6656),i=r(9711),c=r(133),u=r(3307),l=o("wks"),s=n.Symbol,f=u?s:i;t.exports=function(t){return a(l,t)||(c&&a(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},9554:(t,e,r)=>{"use strict";var n=r(2109),o=r(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),a=r(8533),i=r(8880);for(var c in o){var u=n[c],l=u&&u.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(t){l.forEach=a}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(9554),r(4747),function(){var t=document.querySelector(".tic-tac"),e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=!1,n=0,o=document.querySelector(".complexity"),a=localStorage.getItem("level")?localStorage.getItem("level"):"easy",i=document.querySelector(".restart"),c=document.querySelector(".modal"),u=document.querySelector(".modal__text"),l=document.querySelector(".modal__btn");function s(){n=0,t.children.forEach((function(t){t.innerHTML="",t.setAttribute("data-value","")})),r=!1,c.classList.remove("active")}function f(t){!t.target.classList.contains("tic-tac__place")||t.target.getAttribute("data-value")||r||(d(t.target),n++,h()||(g(a),n++,h()))}function v(t){!t.target.classList.contains("tic-tac__place")||t.target.getAttribute("data-value")||r||(n%2==0?d(t.target):p(t.target),n++,h())}function d(t){var e=document.createElement("div");e.classList.add("cross");var r=document.createElement("span"),n=document.createElement("span");e.append(r),e.append(n),t.append(e),t.setAttribute("data-value","cross")}function p(t){var e=document.createElement("div");e.classList.add("zero"),t.append(e),t.setAttribute("data-value","zero")}function h(){for(var o=0;o<e.length;o++){if("cross"===t.children[e[o][0]].getAttribute("data-value")&&"cross"===t.children[e[o][1]].getAttribute("data-value")&&"cross"===t.children[e[o][2]].getAttribute("data-value"))return console.log("Win"),r=!0,c.classList.add("active"),u.textContent="Победили_крестики!",!0;if("zero"===t.children[e[o][0]].getAttribute("data-value")&&"zero"===t.children[e[o][1]].getAttribute("data-value")&&"zero"===t.children[e[o][2]].getAttribute("data-value"))return console.log("Win"),r=!0,c.classList.add("active"),u.textContent="Победили_нолики!",!0}if(n>=9)return r=!0,c.classList.add("active"),u.textContent="Ничья!",!0}function g(r){if(!("medium"===r&&function(){for(var r=0;r<e.length;r++){var n=0,o=-1;if("cross"===t.children[e[r][0]].getAttribute("data-value")?n++:o=e[r][0],"cross"===t.children[e[r][1]].getAttribute("data-value")?n++:o=e[r][1],"cross"===t.children[e[r][2]].getAttribute("data-value")?n++:o=e[r][2],n>=2&&!t.children[o].getAttribute("data-value"))return p(t.children[o]),!0}for(var a=0;a<e.length;a++){var i=0,c=-1;if("zero"===t.children[e[a][0]].getAttribute("data-value")?i++:c=e[a][0],"zero"===t.children[e[a][1]].getAttribute("data-value")?i++:c=e[a][1],"zero"===t.children[e[a][2]].getAttribute("data-value")?i++:c=e[a][2],i>=2&&!t.children[c].getAttribute("data-value"))return p(t.children[c]),!0}}()||"hard"===r&&function(){for(var r=[],n=[0,0,0,0,0,0,0,0,0],o=0;o<e.length;o++)"cross"!==t.children[e[o][0]].getAttribute("data-value")&&"cross"!==t.children[e[o][1]].getAttribute("data-value")&&"cross"!==t.children[e[o][2]].getAttribute("data-value")&&r.push(e[o]);r.forEach((function(t){n[t[0]]+=1,n[t[1]]+=1,n[t[2]]+=1})),console.log(r),console.log([]),console.log(n,[0,0,0,0,0,0,0,0,0]);for(var a=0;a<e.length;a++){var i=0,c=-1;if("zero"===t.children[e[a][0]].getAttribute("data-value")?i++:c=e[a][0],"zero"===t.children[e[a][1]].getAttribute("data-value")?i++:c=e[a][1],"zero"===t.children[e[a][2]].getAttribute("data-value")?i++:c=e[a][2],i>=2&&!t.children[c].getAttribute("data-value"))return p(t.children[c]),!0}for(var u=0;u<e.length;u++){var l=0,s=-1;if("cross"===t.children[e[u][0]].getAttribute("data-value")?l++:s=e[u][0],"cross"===t.children[e[u][1]].getAttribute("data-value")?l++:s=e[u][1],"cross"===t.children[e[u][2]].getAttribute("data-value")?l++:s=e[u][2],l>=2&&!t.children[s].getAttribute("data-value"))return p(t.children[s]),!0}if(!t.children[4].getAttribute("data-value"))return p(t.children[4]),!0;for(var f=[],v=0;v<n.length;v++){var d=Math.max.apply(null,n);n[v]>=d&&f.push(v)}var h=Math.round(Math.random()*(f.length-1));return console.log(f,h),t.children[f[h]].getAttribute("data-value")?void 0:(p(t.children[f[h]]),!0)}())){var n=Math.round(8*Math.random());t.children[n].getAttribute("data-value")?(n=Math.round(8*Math.random()),g()):p(t.children[n])}}o.children.forEach((function(t){t.classList.remove("active"),t.getAttribute("id")===a&&t.classList.add("active")})),"human"===a&&(t.removeEventListener("click",f),t.removeEventListener("click",v),t.addEventListener("click",v)),l.addEventListener("click",(function(){s()})),i.addEventListener("click",(function(){s()})),o.addEventListener("click",(function(e){o.children.forEach((function(t){t.classList.remove("active")})),e.target.classList.add("active"),t.removeEventListener("click",f),t.removeEventListener("click",v),t.addEventListener("click",f),e.target.classList.contains("easy")&&(a="easy",localStorage.setItem("level",a)),e.target.classList.contains("medium")&&(a="medium",localStorage.setItem("level",a)),e.target.classList.contains("hard")&&(a="hard",localStorage.setItem("level",a)),e.target.classList.contains("human")&&(a="human",localStorage.setItem("level",a),t.removeEventListener("click",f),t.addEventListener("click",v))})),t.addEventListener("click",f)}()})()})();