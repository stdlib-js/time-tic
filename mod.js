// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,w,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,f,l,s,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function T(r){var e,t,n;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var O,V=Object.prototype,L=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,G=V.__lookupGetter__,P=V.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var H=O;function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var D,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";D=Z()?function(r){var e,t,n,i,o;if(null==r)return M.call(r);t=r[Y],o=Y,e=null!=(i=r)&&z.call(i,o);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)};var q=D,J=Boolean,K=Boolean.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function er(r){return B(r)||rr(r)}function tr(){return new Function("return this;")()}W(er,"isPrimitive",B),W(er,"isObject",rr);var nr,ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ar?ar:null,ur="object"==typeof globalThis?globalThis:null;function fr(r){if(arguments.length){if(!B(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var lr=nr;var sr="function"==typeof Uint32Array;var pr="function"==typeof Uint32Array?Uint32Array:null;var yr,dr="function"==typeof Uint32Array?Uint32Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(sr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr=yr,wr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var br,hr="function"==typeof Float64Array?Float64Array:void 0;br=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(wr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var mr=br,Ar="function"==typeof Uint8Array;var jr="function"==typeof Uint8Array?Uint8Array:null;var _r,Er="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ar&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur=_r,Sr="function"==typeof Uint16Array;var kr="function"==typeof Uint16Array?Uint16Array:null;var xr,Nr="function"==typeof Uint16Array?Uint16Array:void 0;xr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Sr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Fr,Ir={uint16:xr,uint8:Ur};(Fr=new Ir.uint16(1))[0]=4660;var Tr,Or,Vr=52===new Ir.uint8(Fr.buffer)[0];!0===Vr?(Tr=1,Or=0):(Tr=0,Or=1);var Lr,$r,Cr={HIGH:Tr,LOW:Or},Gr=new mr(1),Pr=new gr(Gr.buffer),Hr=Cr.HIGH,Wr=Cr.LOW;function Br(r,e,t,n){return Gr[0]=r,e[n]=Pr[Hr],e[n+t]=Pr[Wr],e}function Rr(r){return Br(r,[0,0],1,0)}W(Rr,"assign",Br),!0===Vr?(Lr=1,$r=0):(Lr=0,$r=1);var Zr={HIGH:Lr,LOW:$r},Mr=new mr(1),zr=new gr(Mr.buffer),Dr=Zr.HIGH,Xr=Zr.LOW;function Yr(r,e){return zr[Dr]=r,zr[Xr]=e,Mr[0]}var qr=Number.POSITIVE_INFINITY,Jr=[0,0];function Kr(r,e,t,n){var i,o,a,c;return r<1?r<0?(Kr(-r,e,t,n),e[n]*=-1,e[n+t]*=-1,e):0===r?(e[n]=r,e[n+t]=r,e):(e[n]=0,e[n+t]=r,e):function(r){return r!=r}(r)?(e[n]=NaN,e[n+t]=NaN,e):r===qr?(e[n]=qr,e[n+t]=0,e):(Rr.assign(r,Jr,1,0),o=Jr[1],a=(2146435072&(i=Jr[0]))>>20|0,(a-=1023)<20?0==(i&(c=1048575>>a|0)|o)?(e[n]=r,e[n+t]=0,e):(c=Yr(i&=~c,0),e[n]=c,e[n+t]=r-c,e):a>51||0==(o&(c=4294967295>>>a-20))?(e[n]=r,e[n+t]=0,e):(c=Yr(i,o&=~c),e[n]=c,e[n+t]=r-c,e))}function Qr(r){return Kr(r,[0,0],1,0)}W(Qr,"assign",Kr);var re=Math.round,ee=/./,te=fr(),ne=te.document&&te.document.childNodes,ie=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ce(r){return null!==r&&"object"==typeof r}W(oe,"REGEXP",ae);var ue=function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ce);function fe(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return ce(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(ce,"isObjectLikeArray",ue);var le,se="function"==typeof ee||"object"==typeof ie||"function"==typeof ne?function(r){return fe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?fe(r).toLowerCase():e};var pe,ye,de=(le=Date.now,"function"===se(le))?Date.now:function(){return(new Date).getTime()},ge=fr();function we(){var r;return(r=Qr(pe()/1e3))[1]=re(1e9*r[1]),r}ye=function(r){return"object"==typeof r&&null!==r&&!lr(r)}(ge.performance)?ge.performance:{},pe=ye.now?ye.now.bind(ye):ye.mozNow?ye.mozNow.bind(ye):ye.msNow?ye.msNow.bind(ye):ye.oNow?ye.oNow.bind(ye):ye.webkitNow?ye.webkitNow.bind(ye):de;export{we as default};
//# sourceMappingURL=mod.js.map
