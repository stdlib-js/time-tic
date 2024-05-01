// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tic=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function h(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,j=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,o,a,u,f,l,s,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return U.apply(null,e)}var T,F=Object.prototype,I=F.toString,O=F.__defineGetter__,V=F.__defineSetter__,L=F.__lookupGetter__,$=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var C=T;function G(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;var Z,M="function"==typeof Symbol?Symbol:void 0,z="function"==typeof M?M.toStringTag:"";Z=W()?function(r){var e,t,n,i,o;if(null==r)return B.call(r);t=r[z],o=z,e=null!=(i=r)&&R.call(i,o);try{r[z]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[z]=t:delete r[z],n}:function(r){return B.call(r)};var D=Z,X=Boolean,Y=Boolean.prototype.toString;var q=W();function J(r){return"object"==typeof r&&(r instanceof X||(q?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function K(r){return P(r)||J(r)}G(K,"isPrimitive",P),G(K,"isObject",J);var Q,rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;function ir(r){if(arguments.length){if(!P(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var or=Q;var ar="function"==typeof Uint32Array;var cr="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr=ur,sr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var yr,dr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr=yr,wr="function"==typeof Uint8Array;var br="function"==typeof Uint8Array?Uint8Array:null;var vr,hr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,256,257]),t=e,r=(wr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var mr=vr,Ar="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null;var _r,Er="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur,Sr={uint16:_r,uint8:mr};(Ur=new Sr.uint16(1))[0]=4660;var kr,xr,Nr=52===new Sr.uint8(Ur.buffer)[0];!0===Nr?(kr=1,xr=0):(kr=0,xr=1);var Tr,Fr,Ir={HIGH:kr,LOW:xr},Or=new gr(1),Vr=new lr(Or.buffer),Lr=Ir.HIGH,$r=Ir.LOW;function Cr(r,e,t,n){return Or[0]=r,e[n]=Vr[Lr],e[n+t]=Vr[$r],e}function Gr(r){return Cr(r,[0,0],1,0)}G(Gr,"assign",Cr),!0===Nr?(Tr=1,Fr=0):(Tr=0,Fr=1);var Pr={HIGH:Tr,LOW:Fr},Hr=new gr(1),Wr=new lr(Hr.buffer),Br=Pr.HIGH,Rr=Pr.LOW;function Zr(r,e){return Wr[Br]=r,Wr[Rr]=e,Hr[0]}var Mr=Number.POSITIVE_INFINITY,zr=1023,Dr=2146435072,Xr=1048575,Yr=4294967295,qr=[0,0];function Jr(r,e,t,n){var i,o,a,c;return r<1?r<0?(Jr(-r,e,t,n),e[n]*=-1,e[n+t]*=-1,e):0===r?(e[n]=r,e[n+t]=r,e):(e[n]=0,e[n+t]=r,e):function(r){return r!=r}(r)?(e[n]=NaN,e[n+t]=NaN,e):r===Mr?(e[n]=Mr,e[n+t]=0,e):(Gr.assign(r,qr,1,0),i=qr[0],o=qr[1],a=(i&Dr)>>20|0,(a-=0|zr)<20?0==(i&(c=Xr>>a|0)|o)?(e[n]=r,e[n+t]=0,e):(c=Zr(i&=~c,0),e[n]=c,e[n+t]=r-c,e):a>51||0==(o&(c=Yr>>>a-20))?(e[n]=r,e[n+t]=0,e):(c=Zr(i,o&=~c),e[n]=c,e[n+t]=r-c,e))}function Kr(r){return Jr(r,[0,0],1,0)}G(Kr,"assign",Jr);var Qr=Math.round,re=/./,ee=ir(),te=ee.document&&ee.document.childNodes,ne=Int8Array;function ie(){return/^\s*function\s*([^(]*)/i}var oe=/^\s*function\s*([^(]*)/i;function ae(r){return null!==r&&"object"==typeof r}G(ie,"REGEXP",oe);var ce=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ae);function ue(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=oe.exec(n.toString()))return e[1]}return ae(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(ae,"isObjectLikeArray",ce);var fe,le="function"==typeof re||"object"==typeof ne||"function"==typeof te?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ue(r).toLowerCase():e};var se,pe,ye=(fe=Date.now,"function"===le(fe))?Date.now:function(){return(new Date).getTime()},de=ir();return pe=function(r){return"object"==typeof r&&null!==r&&!or(r)}(de.performance)?de.performance:{},se=pe.now?pe.now.bind(pe):pe.mozNow?pe.mozNow.bind(pe):pe.msNow?pe.msNow.bind(pe):pe.oNow?pe.oNow.bind(pe):pe.webkitNow?pe.webkitNow.bind(pe):ye,function(){var r;return(r=Kr(se()/1e3))[1]=Qr(1e9*r[1]),r}}));
//# sourceMappingURL=index.js.map