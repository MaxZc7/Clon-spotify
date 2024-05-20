import{r as h,g as I,$ as P}from"./index.CydYXOmc.js";var g={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=h,T=Symbol.for("react.element"),A=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,V=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function b(t,e,r){var n,o={},u=null,s=null;r!==void 0&&(u=""+r),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)F.call(e,n)&&!q.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:T,type:t,key:u,ref:s,props:o,_owner:V.current}}v.Fragment=A;v.jsx=b;v.jsxs=b;g.exports=v;var le=g.exports;const _=t=>{let e;const r=new Set,n=(i,f)=>{const a=typeof i=="function"?i(e):i;if(!Object.is(a,e)){const c=e;e=f??(typeof a!="object"||a===null)?a:Object.assign({},e,a),r.forEach(l=>l(e,c))}},o=()=>e,p={setState:n,getState:o,getInitialState:()=>E,subscribe:i=>(r.add(i),()=>r.delete(i)),destroy:()=>{r.clear()}},E=e=t(n,o,p);return p},W=t=>t?_(t):_;var w={exports:{}},D={},O={exports:{}},$={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=h;function k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var C=typeof Object.is=="function"?Object.is:k,L=d.useState,U=d.useEffect,M=d.useLayoutEffect,B=d.useDebugValue;function z(t,e){var r=e(),n=L({inst:{value:r,getSnapshot:e}}),o=n[0].inst,u=n[1];return M(function(){o.value=r,o.getSnapshot=e,m(o)&&u({inst:o})},[t,r,e]),U(function(){return m(o)&&u({inst:o}),t(function(){m(o)&&u({inst:o})})},[t]),B(r),r}function m(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!C(t,r)}catch{return!0}}function N(t,e){return e()}var X=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N:z;$.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:X;O.exports=$;var Y=O.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=h,J=Y;function G(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var H=typeof Object.is=="function"?Object.is:G,K=J.useSyncExternalStore,Q=y.useRef,Z=y.useEffect,ee=y.useMemo,te=y.useDebugValue;D.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var u=Q(null);if(u.current===null){var s={hasValue:!1,value:null};u.current=s}else s=u.current;u=ee(function(){function p(c){if(!E){if(E=!0,i=c,c=n(c),o!==void 0&&s.hasValue){var l=s.value;if(o(l,c))return f=l}return f=c}if(l=f,H(i,c))return l;var x=n(c);return o!==void 0&&o(l,x)?l:(i=c,f=x)}var E=!1,i,f,a=r===void 0?null:r;return[function(){return p(e())},a===null?void 0:function(){return p(a())}]},[e,r,n,o]);var S=K(t,u[0],u[1]);return Z(function(){s.hasValue=!0,s.value=S},[S]),te(S),S};w.exports=D;var ne=w.exports;const re=I(ne),{useDebugValue:oe}=P,{useSyncExternalStoreWithSelector:ue}=re;const se=t=>t;function ie(t,e=se,r){const n=ue(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,r);return oe(n),n}const R=t=>{const e=typeof t=="function"?W(t):t,r=(n,o)=>ie(e,n,o);return Object.assign(r,e),r},ce=t=>t?R(t):R,fe=ce(t=>({isPlaying:!1,setIsPlaying:e=>t({isPlaying:e}),volume:1,setVolume:e=>t({volume:e}),currentMusic:{playlist:null,musics:null,music:null},setCurrentMusic:e=>t({currentMusic:e})}));export{le as j,fe as u};
