// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-global@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-modf@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";var o,m,r=n(Date.now)?Date.now:function(){return(new Date).getTime()},d=e();function a(){var e,s;return s=o()/1e3,(e=t(s))[1]=i(1e9*e[1]),e}m=s(d.performance)?d.performance:{},o=m.now?m.now.bind(m):m.mozNow?m.mozNow.bind(m):m.msNow?m.msNow.bind(m):m.oNow?m.oNow.bind(m):m.webkitNow?m.webkitNow.bind(m):r;export{a as default};
//# sourceMappingURL=index.mjs.map
