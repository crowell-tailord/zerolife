function Yx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Nf={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function jx(){if(Jg)return So;Jg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return So.Fragment=e,So.jsx=i,So.jsxs=i,So}var $g;function Zx(){return $g||($g=1,Nf.exports=jx()),Nf.exports}var he=Zx(),Of={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Kx(){if(t_)return te;t_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(N,nt,xt){this.props=N,this.context=nt,this.refs=M,this.updater=xt||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=_.prototype;function L(N,nt,xt){this.props=N,this.context=nt,this.refs=M,this.updater=xt||b}var w=L.prototype=new B;w.constructor=L,R(w,_.prototype),w.isPureReactComponent=!0;var $=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(N,nt,xt){var Y=xt.ref;return{$$typeof:o,type:N,key:nt,ref:Y!==void 0?Y:null,props:xt}}function C(N,nt){return D(N.type,nt,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return nt[xt]})}var st=/\/+/g;function mt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):nt.toString(36)}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,nt,xt,Y,ut){var yt=typeof N;(yt==="undefined"||yt==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(yt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case o:case e:vt=!0;break;case x:return vt=N._init,z(vt(N._payload),nt,xt,Y,ut)}}if(vt)return ut=ut(N),vt=Y===""?"."+mt(N,0):Y,$(ut)?(xt="",vt!=null&&(xt=vt.replace(st,"$&/")+"/"),z(ut,nt,xt,"",function(ee){return ee})):ut!=null&&(H(ut)&&(ut=C(ut,xt+(ut.key==null||N&&N.key===ut.key?"":(""+ut.key).replace(st,"$&/")+"/")+vt)),nt.push(ut)),1;vt=0;var Ft=Y===""?".":Y+":";if($(N))for(var It=0;It<N.length;It++)Y=N[It],yt=Ft+mt(Y,It),vt+=z(Y,nt,xt,yt,ut);else if(It=y(N),typeof It=="function")for(N=It.call(N),It=0;!(Y=N.next()).done;)Y=Y.value,yt=Ft+mt(Y,It++),vt+=z(Y,nt,xt,yt,ut);else if(yt==="object"){if(typeof N.then=="function")return z(gt(N),nt,xt,Y,ut);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Z(N,nt,xt){if(N==null)return N;var Y=[],ut=0;return z(N,Y,"","",function(yt){return nt.call(xt,yt,ut++)}),Y}function j(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var St=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Et={map:Z,forEach:function(N,nt,xt){Z(N,function(){nt.apply(this,arguments)},xt)},count:function(N){var nt=0;return Z(N,function(){nt++}),nt},toArray:function(N){return Z(N,function(nt){return nt})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return te.Activity=v,te.Children=Et,te.Component=_,te.Fragment=i,te.Profiler=l,te.PureComponent=L,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,te.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},te.cache=function(N){return function(){return N.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(N,nt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Y=R({},N.props),ut=N.key;if(nt!=null)for(yt in nt.key!==void 0&&(ut=""+nt.key),nt)!k.call(nt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&nt.ref===void 0||(Y[yt]=nt[yt]);var yt=arguments.length-2;if(yt===1)Y.children=xt;else if(1<yt){for(var vt=Array(yt),Ft=0;Ft<yt;Ft++)vt[Ft]=arguments[Ft+2];Y.children=vt}return D(N.type,ut,Y)},te.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},te.createElement=function(N,nt,xt){var Y,ut={},yt=null;if(nt!=null)for(Y in nt.key!==void 0&&(yt=""+nt.key),nt)k.call(nt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ut[Y]=nt[Y]);var vt=arguments.length-2;if(vt===1)ut.children=xt;else if(1<vt){for(var Ft=Array(vt),It=0;It<vt;It++)Ft[It]=arguments[It+2];ut.children=Ft}if(N&&N.defaultProps)for(Y in vt=N.defaultProps,vt)ut[Y]===void 0&&(ut[Y]=vt[Y]);return D(N,yt,ut)},te.createRef=function(){return{current:null}},te.forwardRef=function(N){return{$$typeof:d,render:N}},te.isValidElement=H,te.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:j}},te.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},te.startTransition=function(N){var nt=O.T,xt={};O.T=xt;try{var Y=N(),ut=O.S;ut!==null&&ut(xt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(F,St)}catch(yt){St(yt)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),O.T=nt}},te.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},te.use=function(N){return O.H.use(N)},te.useActionState=function(N,nt,xt){return O.H.useActionState(N,nt,xt)},te.useCallback=function(N,nt){return O.H.useCallback(N,nt)},te.useContext=function(N){return O.H.useContext(N)},te.useDebugValue=function(){},te.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},te.useEffect=function(N,nt){return O.H.useEffect(N,nt)},te.useEffectEvent=function(N){return O.H.useEffectEvent(N)},te.useId=function(){return O.H.useId()},te.useImperativeHandle=function(N,nt,xt){return O.H.useImperativeHandle(N,nt,xt)},te.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},te.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},te.useMemo=function(N,nt){return O.H.useMemo(N,nt)},te.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},te.useReducer=function(N,nt,xt){return O.H.useReducer(N,nt,xt)},te.useRef=function(N){return O.H.useRef(N)},te.useState=function(N){return O.H.useState(N)},te.useSyncExternalStore=function(N,nt,xt){return O.H.useSyncExternalStore(N,nt,xt)},te.useTransition=function(){return O.H.useTransition()},te.version="19.2.8",te}var e_;function ad(){return e_||(e_=1,Of.exports=Kx()),Of.exports}var dr=ad();const Qx=Yx(dr);var zf={exports:{}},Mo={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Jx(){return n_||(n_=1,(function(o){function e(z,Z){var j=z.length;z.push(Z);t:for(;0<j;){var St=j-1>>>1,Et=z[St];if(0<l(Et,Z))z[St]=Z,z[j]=Et,j=St;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],j=z.pop();if(j!==Z){z[0]=j;t:for(var St=0,Et=z.length,N=Et>>>1;St<N;){var nt=2*(St+1)-1,xt=z[nt],Y=nt+1,ut=z[Y];if(0>l(xt,j))Y<Et&&0>l(ut,xt)?(z[St]=ut,z[Y]=j,St=Y):(z[St]=xt,z[nt]=j,St=nt);else if(Y<Et&&0>l(ut,j))z[St]=ut,z[Y]=j,St=Y;else break t}}return Z}function l(z,Z){var j=z.sortIndex-Z.sortIndex;return j!==0?j:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,S=3,y=!1,b=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function $(z){if(R=!1,w(z),!b)if(i(m)!==null)b=!0,F||(F=!0,lt());else{var Z=i(p);Z!==null&&gt($,Z.startTime-z)}}var F=!1,O=-1,k=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<k)}function H(){if(M=!1,F){var z=o.unstable_now();D=z;var Z=!0;try{t:{b=!1,R&&(R=!1,B(O),O=-1),y=!0;var j=S;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,S=v.priorityLevel;var Et=St(v.expirationTime<=z);if(z=o.unstable_now(),typeof Et=="function"){v.callback=Et,w(z),Z=!0;break e}v===i(m)&&r(m),w(z)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var N=i(p);N!==null&&gt($,N.startTime-z),Z=!1}}break t}finally{v=null,S=j,y=!1}Z=void 0}}finally{Z?lt():F=!1}}}var lt;if(typeof L=="function")lt=function(){L(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=H,lt=function(){mt.postMessage(null)}}else lt=function(){_(H,0)};function gt(z,Z){O=_(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return z()}finally{S=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=S;S=z;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(z,Z,j){var St=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,z){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,z={id:x++,callback:Z,priorityLevel:z,startTime:j,expirationTime:Et,sortIndex:-1},j>St?(z.sortIndex=j,e(p,z),i(m)===null&&z===i(p)&&(R?(B(O),O=-1):R=!0,gt($,j-St))):(z.sortIndex=Et,e(m,z),b||y||(b=!0,F||(F=!0,lt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Z=S;return function(){var j=S;S=Z;try{return z.apply(this,arguments)}finally{S=j}}}})(Bf)),Bf}var i_;function $x(){return i_||(i_=1,Pf.exports=Jx()),Pf.exports}var If={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function tS(){if(a_)return yn;a_=1;var o=ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},yn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},yn.requestFormReset=function(m){r.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},yn.version="19.2.8",yn}var r_;function eS(){if(r_)return If.exports;r_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=tS(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function nS(){if(s_)return Mo;s_=1;var o=$x(),e=ad(),i=eS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case $:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var gt=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function N(t){return{current:t}}function nt(t){0>Et||(t.current=St[Et],St[Et]=null,Et--)}function xt(t,n){Et++,St[Et]=t.current,t.current=n}var Y=N(null),ut=N(null),yt=N(null),vt=N(null);function Ft(t,n){switch(xt(yt,n),xt(ut,t),xt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mg(n),t=yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Y),xt(Y,t)}function It(){nt(Y),nt(ut),nt(yt)}function ee(t){t.memoizedState!==null&&xt(vt,t);var n=Y.current,a=yg(n,t.type);n!==a&&(xt(ut,t),xt(Y,a))}function Le(t){ut.current===t&&(nt(Y),nt(ut)),vt.current===t&&(nt(vt),go._currentValue=j)}var ue,Xe;function W(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",Xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+Xe}var xn=!1;function le(t,n){if(!t||xn)return"";xn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var tt=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){tt=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){tt=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&tt&&typeof rt.stack=="string")return[rt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),J=E.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===J.length)for(s=P.length-1,u=J.length-1;1<=s&&0<=u&&P[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==J[u]){var ct=`
`+P[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=u);break}}}finally{xn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?W(a):""}function de(t,n){switch(t.tag){case 26:case 27:case 5:return W(t.type);case 16:return W("Lazy");case 13:return t.child!==n&&n!==null?W("Suspense Fallback"):W("Suspense");case 19:return W("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return W("Activity");default:return""}}function jt(t){try{var n="",a=null;do n+=de(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ce=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ft=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Ot=o.unstable_LowPriority,pe=o.unstable_IdlePriority,bt=o.log,zt=o.unstable_setDisableYieldValue,Yt=null,kt=null;function Nt(t){if(typeof bt=="function"&&zt(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Yt,t)}catch{}}var Qt=Math.clz32?Math.clz32:G,ie=Math.log,Ne=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(ie(t)/Ne|0)|0}var At=256,ot=262144,_t=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Rt(s):(g&=E,g!==0?u=Rt(g):a||(a=E&~t,a!==0&&(u=Rt(a))))):(E=s&~f,E!==0?u=Rt(E):g!==0?u=Rt(g):a||(a=s&~t,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ke(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function Se(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function hn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-Qt(a),pt=1<<ct;E[ct]=0,P[ct]=-1;var tt=J[ct];if(tt!==null)for(J[ct]=null,ct=0;ct<tt.length;ct++){var rt=tt[ct];rt!==null&&(rt.lane&=-536870913)}a&=~pt}s!==0&&Cs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Cs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Qt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Qt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function xi(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ds(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Wg(t.type))}function ka(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var li=Math.random().toString(36).slice(2),Ye="__reactFiber$"+li,dn="__reactProps$"+li,Di="__reactContainer$"+li,Us="__reactEvents$"+li,Au="__reactListeners$"+li,Ru="__reactHandles$"+li,A="__reactResources$"+li,V="__reactMarker$"+li;function at(t){delete t[Ye],delete t[dn],delete t[Us],delete t[Au],delete t[Ru]}function it(t){var n=t[Ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Di]||a[Ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=wg(t);t!==null;){if(a=t[Ye])return a;t=wg(t)}return n}t=a,a=t.parentNode}return null}function X(t){if(t=t[Ye]||t[Di]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ct(t){var n=t[A];return n||(n=t[A]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function wt(t){t[V]=!0}var Ht=new Set,$t={};function Kt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for($t[t]=n,t=0;t<n.length;t++)Ht.add(n[t])}var xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),we={},Oe={};function Sn(t){return Ce.call(Oe,t)?!0:Ce.call(we,t)?!1:xe.test(t)?Oe[t]=!0:(we[t]=!0,!1)}function _e(t,n,a){if(Sn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Gt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function rn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sa(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pn(t){if(!t._valueTracker){var n=Rn(t)?"checked":"value";t._valueTracker=sa(t,n,""+t[n])}}function oa(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Rn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Re(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zn=/[\n"\\]/g;function un(t){return t.replace(Zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Kn(t,g,ne(n)):a!=null?Kn(t,g,ne(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ne(E):t.removeAttribute("name")}function ui(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){pn(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),pn(t)}function Kn(t,n,a){n==="number"&&Re(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ui(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function gd(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function _d(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(gt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),pn(t)}function Er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Vv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function xd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&vd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&vd(t,f,n[f])}function Cu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return kv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var wu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,br=null;function Sd(t){var n=X(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[dn]||null;if(!u)throw Error(r(90));Mn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&oa(s)}break t;case"textarea":gd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ui(t,!!a.multiple,n,!1)}}}var Uu=!1;function Md(t,n,a){if(Uu)return t(n,a);Uu=!0;try{var s=t(n);return s}finally{if(Uu=!1,(Tr!==null||br!==null)&&(Tl(),Tr&&(n=Tr,t=br,br=Tr=null,Sd(n),t)))for(n=0;n<t.length;n++)Sd(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Ni)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Lu=!1}var la=null,Nu=null,Io=null;function yd(){if(Io)return Io;var t,n=Nu,a=n.length,s,u="value"in la?la.value:la.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Io=u.slice(t,1<s?1-s:void 0)}function Fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Ed(){return!1}function Cn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:Ed,this.isPropagationStopped=Ed,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Cn(Wa),Os=v({},Wa,{view:0,detail:0}),Wv=Cn(Os),Ou,zu,zs,Vo=v({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Ou=t.screenX-zs.screenX,zu=t.screenY-zs.screenY):zu=Ou=0,zs=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Td=Cn(Vo),qv=v({},Vo,{dataTransfer:0}),Yv=Cn(qv),jv=v({},Os,{relatedTarget:0}),Pu=Cn(jv),Zv=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Cn(Zv),Qv=v({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=Cn(Qv),$v=v({},Wa,{data:0}),bd=Cn($v),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=n0[t])?!!n[t]:!1}function Bu(){return i0}var a0=v({},Os,{key:function(t){if(t.key){var n=t0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r0=Cn(a0),s0=v({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Cn(s0),o0=v({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),l0=Cn(o0),u0=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),c0=Cn(u0),f0=v({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Cn(f0),d0=v({},Wa,{newState:0,oldState:0}),p0=Cn(d0),m0=[9,13,27,32],Iu=Ni&&"CompositionEvent"in window,Ps=null;Ni&&"documentMode"in document&&(Ps=document.documentMode);var g0=Ni&&"TextEvent"in window&&!Ps,Rd=Ni&&(!Iu||Ps&&8<Ps&&11>=Ps),Cd=" ",wd=!1;function Dd(t,n){switch(t){case"keyup":return m0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function _0(t,n){switch(t){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(wd=!0,Cd);case"textInput":return t=n.data,t===Cd&&wd?null:t;default:return null}}function v0(t,n){if(Ar)return t==="compositionend"||!Iu&&Dd(t,n)?(t=yd(),Io=Nu=la=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!x0[t.type]:n==="textarea"}function Nd(t,n,a,s){Tr?br?br.push(s):br=[s]:Tr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bs=null,Is=null;function S0(t){mg(t,0)}function Xo(t){var n=Tt(t);if(oa(n))return t}function Od(t,n){if(t==="change")return n}var zd=!1;if(Ni){var Fu;if(Ni){var Hu="oninput"in document;if(!Hu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Hu=typeof Pd.oninput=="function"}Fu=Hu}else Fu=!1;zd=Fu&&(!document.documentMode||9<document.documentMode)}function Bd(){Bs&&(Bs.detachEvent("onpropertychange",Id),Is=Bs=null)}function Id(t){if(t.propertyName==="value"&&Xo(Is)){var n=[];Nd(n,Is,t,Du(t)),Md(S0,n)}}function M0(t,n,a){t==="focusin"?(Bd(),Bs=n,Is=a,Bs.attachEvent("onpropertychange",Id)):t==="focusout"&&Bd()}function y0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Is)}function E0(t,n){if(t==="click")return Xo(n)}function T0(t,n){if(t==="input"||t==="change")return Xo(n)}function b0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Fn=typeof Object.is=="function"?Object.is:b0;function Fs(t,n){if(Fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ce.call(n,u)||!Fn(t[u],n[u]))return!1}return!0}function Fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hd(t,n){var a=Fd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Gd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Re(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Re(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var A0=Ni&&"documentMode"in document&&11>=document.documentMode,Rr=null,Vu=null,Hs=null,Xu=!1;function Xd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||Rr==null||Rr!==Re(s)||(s=Rr,"selectionStart"in s&&Gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Fs(Hs,s)||(Hs=s,s=Ul(Vu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Rr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},ku={},kd={};Ni&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ya(t){if(ku[t])return ku[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in kd)return ku[t]=n[a];return t}var Wd=Ya("animationend"),qd=Ya("animationiteration"),Yd=Ya("animationstart"),R0=Ya("transitionrun"),C0=Ya("transitionstart"),w0=Ya("transitioncancel"),jd=Ya("transitionend"),Zd=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function ci(t,n){Zd.set(t,n),Kt(n,[t])}var ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qn=[],wr=0,qu=0;function Wo(){for(var t=wr,n=qu=wr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Kd(a,u,f)}}function qo(t,n,a,s){Qn[wr++]=t,Qn[wr++]=n,Qn[wr++]=a,Qn[wr++]=s,qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,n,a,s){return qo(t,n,a,s),Yo(t)}function ja(t,n){return qo(t,null,null,n),Yo(t)}function Kd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Qt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<lo)throw lo=0,nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function D0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,a,s){return new D0(t,n,a,s)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Hn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")ju(t)&&(g=1);else if(typeof t=="string")g=zx(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Hn(31,a,n,u),t.elementType=D,t.lanes=f,t;case R:return Za(a.children,u,f,n);case M:g=8,u|=24;break;case _:return t=Hn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case $:return t=Hn(13,a,n,u),t.elementType=$,t.lanes=f,t;case F:return t=Hn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case B:g=9;break t;case w:g=11;break t;case O:g=14;break t;case k:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Hn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Za(t,n,a,s){return t=Hn(7,t,s,n),t.lanes=a,t}function Zu(t,n,a){return t=Hn(6,t,null,n),t.lanes=a,t}function Jd(t){var n=Hn(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,a){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $d=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=$d.get(t);return a!==void 0?a:(n={value:t,source:n,stack:jt(n)},$d.set(t,n),n)}return{value:t,source:n,stack:jt(n)}}var Ur=[],Lr=0,Zo=null,Gs=0,$n=[],ti=0,ua=null,Si=1,Mi="";function zi(t,n){Ur[Lr++]=Gs,Ur[Lr++]=Zo,Zo=t,Gs=n}function tp(t,n,a){$n[ti++]=Si,$n[ti++]=Mi,$n[ti++]=ua,ua=t;var s=Si;t=Mi;var u=32-Qt(s)-1;s&=~(1<<u),a+=1;var f=32-Qt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Si=1<<32-Qt(n)+u|a<<u|s,Mi=f+t}else Si=1<<f|a<<u|s,Mi=t}function Qu(t){t.return!==null&&(zi(t,1),tp(t,1,0))}function Ju(t){for(;t===Zo;)Zo=Ur[--Lr],Ur[Lr]=null,Gs=Ur[--Lr],Ur[Lr]=null;for(;t===ua;)ua=$n[--ti],$n[ti]=null,Mi=$n[--ti],$n[ti]=null,Si=$n[--ti],$n[ti]=null}function ep(t,n){$n[ti++]=Si,$n[ti++]=Mi,$n[ti++]=ua,Si=n.id,Mi=n.overflow,ua=t}var mn=null,Ge=null,ve=!1,ca=null,ei=!1,$u=Error(r(519));function fa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vs(Jn(n,t)),$u}function np(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ye]=t,n[dn]=s,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)fe(co[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),ui(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),_d(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||xg(n.textContent,a)?(s.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),s.onScroll!=null&&fe("scroll",n),s.onScrollEnd!=null&&fe("scrollend",n),s.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||fa(t,!0)}function ip(t){for(mn=t.return;mn;)switch(mn.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:mn=mn.return}}function Nr(t){if(t!==mn)return!1;if(!ve)return ip(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&Ge&&fa(t),ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=Cg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=Cg(t)}else n===27?(n=Ge,ba(t.type)?(t=Ef,Ef=null,Ge=t):Ge=n):Ge=mn?ii(t.stateNode.nextSibling):null;return!0}function Ka(){Ge=mn=null,ve=!1}function tc(){var t=ca;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),ca=null),t}function Vs(t){ca===null?ca=[t]:ca.push(t)}var ec=N(null),Qa=null,Pi=null;function ha(t,n,a){xt(ec,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=ec.current,nt(ec)}function nc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ic(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),nc(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),nc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Or(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;Fn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===vt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(go):t=[go])}u=u.return}t!==null&&ic(n,t,a,s),n.flags|=262144}function Ko(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Qa=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function gn(t){return ap(Qa,t)}function Qo(t,n){return Qa===null&&Ja(t),ap(t,n)}function ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var U0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},L0=o.unstable_scheduleCallback,N0=o.unstable_NormalPriority,Je={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new U0,data:new Map,refCount:0}}function Xs(t){t.refCount--,t.refCount===0&&L0(N0,function(){t.controller.abort()})}var ks=null,rc=0,zr=0,Pr=null;function O0(t,n){if(ks===null){var a=ks=[];rc=0,zr=uf(),Pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return rc++,n.then(rp,rp),n}function rp(){if(--rc===0&&ks!==null){Pr!==null&&(Pr.status="fulfilled");var t=ks;ks=null,zr=0,Pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function z0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var sp=z.S;z.S=function(t,n){Xm=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&O0(t,n),sp!==null&&sp(t,n)};var $a=N(null);function sc(){var t=$a.current;return t!==null?t:He.pooledCache}function Jo(t,n){n===null?xt($a,$a.current):xt($a,n.pool)}function op(){var t=sc();return t===null?null:{parent:Je._currentValue,pool:t}}var Br=Error(r(460)),oc=Error(r(474)),$o=Error(r(542)),tl={then:function(){}};function lp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fp(t),t;default:if(typeof n.status=="string")n.then(Li,Li);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fp(t),t}throw er=n,Br}}function tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(er=a,Br):a}}var er=null;function cp(){if(er===null)throw Error(r(459));var t=er;return er=null,t}function fp(t){if(t===Br||t===$o)throw Error(r(483))}var Ir=null,Ws=0;function el(t){var n=Ws;return Ws+=1,Ir===null&&(Ir=[]),up(Ir,t,n)}function qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hp(t){function n(q,I){if(t){var Q=q.deletions;Q===null?(q.deletions=[I],q.flags|=16):Q.push(I)}}function a(q,I){if(!t)return null;for(;I!==null;)n(q,I),I=I.sibling;return null}function s(q){for(var I=new Map;q!==null;)q.key!==null?I.set(q.key,q):I.set(q.index,q),q=q.sibling;return I}function u(q,I){return q=Oi(q,I),q.index=0,q.sibling=null,q}function f(q,I,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<I?(q.flags|=67108866,I):Q):(q.flags|=67108866,I)):(q.flags|=1048576,I)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,I,Q,ht){return I===null||I.tag!==6?(I=Zu(Q,q.mode,ht),I.return=q,I):(I=u(I,Q),I.return=q,I)}function P(q,I,Q,ht){var Wt=Q.type;return Wt===R?ct(q,I,Q.props.children,ht,Q.key):I!==null&&(I.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===k&&tr(Wt)===I.type)?(I=u(I,Q.props),qs(I,Q),I.return=q,I):(I=jo(Q.type,Q.key,Q.props,null,q.mode,ht),qs(I,Q),I.return=q,I)}function J(q,I,Q,ht){return I===null||I.tag!==4||I.stateNode.containerInfo!==Q.containerInfo||I.stateNode.implementation!==Q.implementation?(I=Ku(Q,q.mode,ht),I.return=q,I):(I=u(I,Q.children||[]),I.return=q,I)}function ct(q,I,Q,ht,Wt){return I===null||I.tag!==7?(I=Za(Q,q.mode,ht,Wt),I.return=q,I):(I=u(I,Q),I.return=q,I)}function pt(q,I,Q){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Zu(""+I,q.mode,Q),I.return=q,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return Q=jo(I.type,I.key,I.props,null,q.mode,Q),qs(Q,I),Q.return=q,Q;case b:return I=Ku(I,q.mode,Q),I.return=q,I;case k:return I=tr(I),pt(q,I,Q)}if(gt(I)||lt(I))return I=Za(I,q.mode,Q,null),I.return=q,I;if(typeof I.then=="function")return pt(q,el(I),Q);if(I.$$typeof===L)return pt(q,Qo(q,I),Q);nl(q,I)}return null}function tt(q,I,Q,ht){var Wt=I!==null?I.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Wt!==null?null:E(q,I,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Wt?P(q,I,Q,ht):null;case b:return Q.key===Wt?J(q,I,Q,ht):null;case k:return Q=tr(Q),tt(q,I,Q,ht)}if(gt(Q)||lt(Q))return Wt!==null?null:ct(q,I,Q,ht,null);if(typeof Q.then=="function")return tt(q,I,el(Q),ht);if(Q.$$typeof===L)return tt(q,I,Qo(q,Q),ht);nl(q,Q)}return null}function rt(q,I,Q,ht,Wt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(Q)||null,E(I,q,""+ht,Wt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return q=q.get(ht.key===null?Q:ht.key)||null,P(I,q,ht,Wt);case b:return q=q.get(ht.key===null?Q:ht.key)||null,J(I,q,ht,Wt);case k:return ht=tr(ht),rt(q,I,Q,ht,Wt)}if(gt(ht)||lt(ht))return q=q.get(Q)||null,ct(I,q,ht,Wt,null);if(typeof ht.then=="function")return rt(q,I,Q,el(ht),Wt);if(ht.$$typeof===L)return rt(q,I,Q,Qo(I,ht),Wt);nl(I,ht)}return null}function Bt(q,I,Q,ht){for(var Wt=null,ye=null,Vt=I,re=I=0,ge=null;Vt!==null&&re<Q.length;re++){Vt.index>re?(ge=Vt,Vt=null):ge=Vt.sibling;var Ee=tt(q,Vt,Q[re],ht);if(Ee===null){Vt===null&&(Vt=ge);break}t&&Vt&&Ee.alternate===null&&n(q,Vt),I=f(Ee,I,re),ye===null?Wt=Ee:ye.sibling=Ee,ye=Ee,Vt=ge}if(re===Q.length)return a(q,Vt),ve&&zi(q,re),Wt;if(Vt===null){for(;re<Q.length;re++)Vt=pt(q,Q[re],ht),Vt!==null&&(I=f(Vt,I,re),ye===null?Wt=Vt:ye.sibling=Vt,ye=Vt);return ve&&zi(q,re),Wt}for(Vt=s(Vt);re<Q.length;re++)ge=rt(Vt,q,re,Q[re],ht),ge!==null&&(t&&ge.alternate!==null&&Vt.delete(ge.key===null?re:ge.key),I=f(ge,I,re),ye===null?Wt=ge:ye.sibling=ge,ye=ge);return t&&Vt.forEach(function(Da){return n(q,Da)}),ve&&zi(q,re),Wt}function Zt(q,I,Q,ht){if(Q==null)throw Error(r(151));for(var Wt=null,ye=null,Vt=I,re=I=0,ge=null,Ee=Q.next();Vt!==null&&!Ee.done;re++,Ee=Q.next()){Vt.index>re?(ge=Vt,Vt=null):ge=Vt.sibling;var Da=tt(q,Vt,Ee.value,ht);if(Da===null){Vt===null&&(Vt=ge);break}t&&Vt&&Da.alternate===null&&n(q,Vt),I=f(Da,I,re),ye===null?Wt=Da:ye.sibling=Da,ye=Da,Vt=ge}if(Ee.done)return a(q,Vt),ve&&zi(q,re),Wt;if(Vt===null){for(;!Ee.done;re++,Ee=Q.next())Ee=pt(q,Ee.value,ht),Ee!==null&&(I=f(Ee,I,re),ye===null?Wt=Ee:ye.sibling=Ee,ye=Ee);return ve&&zi(q,re),Wt}for(Vt=s(Vt);!Ee.done;re++,Ee=Q.next())Ee=rt(Vt,q,re,Ee.value,ht),Ee!==null&&(t&&Ee.alternate!==null&&Vt.delete(Ee.key===null?re:Ee.key),I=f(Ee,I,re),ye===null?Wt=Ee:ye.sibling=Ee,ye=Ee);return t&&Vt.forEach(function(qx){return n(q,qx)}),ve&&zi(q,re),Wt}function Be(q,I,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Wt=Q.key;I!==null;){if(I.key===Wt){if(Wt=Q.type,Wt===R){if(I.tag===7){a(q,I.sibling),ht=u(I,Q.props.children),ht.return=q,q=ht;break t}}else if(I.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===k&&tr(Wt)===I.type){a(q,I.sibling),ht=u(I,Q.props),qs(ht,Q),ht.return=q,q=ht;break t}a(q,I);break}else n(q,I);I=I.sibling}Q.type===R?(ht=Za(Q.props.children,q.mode,ht,Q.key),ht.return=q,q=ht):(ht=jo(Q.type,Q.key,Q.props,null,q.mode,ht),qs(ht,Q),ht.return=q,q=ht)}return g(q);case b:t:{for(Wt=Q.key;I!==null;){if(I.key===Wt)if(I.tag===4&&I.stateNode.containerInfo===Q.containerInfo&&I.stateNode.implementation===Q.implementation){a(q,I.sibling),ht=u(I,Q.children||[]),ht.return=q,q=ht;break t}else{a(q,I);break}else n(q,I);I=I.sibling}ht=Ku(Q,q.mode,ht),ht.return=q,q=ht}return g(q);case k:return Q=tr(Q),Be(q,I,Q,ht)}if(gt(Q))return Bt(q,I,Q,ht);if(lt(Q)){if(Wt=lt(Q),typeof Wt!="function")throw Error(r(150));return Q=Wt.call(Q),Zt(q,I,Q,ht)}if(typeof Q.then=="function")return Be(q,I,el(Q),ht);if(Q.$$typeof===L)return Be(q,I,Qo(q,Q),ht);nl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,I!==null&&I.tag===6?(a(q,I.sibling),ht=u(I,Q),ht.return=q,q=ht):(a(q,I),ht=Zu(Q,q.mode,ht),ht.return=q,q=ht),g(q)):a(q,I)}return function(q,I,Q,ht){try{Ws=0;var Wt=Be(q,I,Q,ht);return Ir=null,Wt}catch(Vt){if(Vt===Br||Vt===$o)throw Vt;var ye=Hn(29,Vt,null,q.mode);return ye.lanes=ht,ye.return=q,ye}finally{}}}var nr=hp(!0),dp=hp(!1),da=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ma(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(be&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Yo(t),Kd(t,null,a),n}return qo(t,s,n,a),Yo(t)}function Ys(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}function cc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fc=!1;function js(){if(fc){var t=Pr;if(t!==null)throw t}}function Zs(t,n,a,s){fc=!1;var u=t.updateQueue;da=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var P=E,J=P.next;P.next=null,g===null?f=J:g.next=J,g=P;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==g&&(E===null?ct.firstBaseUpdate=J:E.next=J,ct.lastBaseUpdate=P))}if(f!==null){var pt=u.baseState;g=0,ct=J=P=null,E=f;do{var tt=E.lane&-536870913,rt=tt!==E.lane;if(rt?(me&tt)===tt:(s&tt)===tt){tt!==0&&tt===zr&&(fc=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Zt=E;tt=n;var Be=a;switch(Zt.tag){case 1:if(Bt=Zt.payload,typeof Bt=="function"){pt=Bt.call(Be,pt,tt);break t}pt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Zt.payload,tt=typeof Bt=="function"?Bt.call(Be,pt,tt):Bt,tt==null)break t;pt=v({},pt,tt);break t;case 2:da=!0}}tt=E.callback,tt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[tt]:rt.push(tt))}else rt={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?(J=ct=rt,P=pt):ct=ct.next=rt,g|=tt;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ct===null&&(P=pt),u.baseState=P,u.firstBaseUpdate=J,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Sa|=g,t.lanes=g,t.memoizedState=pt}}function pp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pp(a[t],n)}var Fr=N(null),il=N(0);function gp(t,n){t=qi,xt(il,t),xt(Fr,n),qi=t|n.baseLanes}function hc(){xt(il,qi),xt(Fr,Fr.current)}function dc(){qi=il.current,nt(Fr),nt(il)}var Gn=N(null),ni=null;function ga(t){var n=t.alternate;xt(Ke,Ke.current&1),xt(Gn,t),ni===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(ni=t)}function pc(t){xt(Ke,Ke.current),xt(Gn,t),ni===null&&(ni=t)}function _p(t){t.tag===22?(xt(Ke,Ke.current),xt(Gn,t),ni===null&&(ni=t)):_a()}function _a(){xt(Ke,Ke.current),xt(Gn,Gn.current)}function Vn(t){nt(Gn),ni===t&&(ni=null),nt(Ke)}var Ke=N(0);function al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mf(a)||yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,ae=null,ze=null,$e=null,rl=!1,Hr=!1,ir=!1,sl=0,Ks=0,Gr=null,P0=0;function je(){throw Error(r(321))}function mc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Fn(t[a],n[a]))return!1;return!0}function gc(t,n,a,s,u,f){return Ii=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?tm:Uc,ir=!1,f=a(s,u),ir=!1,Hr&&(f=xp(n,a,s,u)),vp(t),f}function vp(t){z.H=$s;var n=ze!==null&&ze.next!==null;if(Ii=0,$e=ze=ae=null,rl=!1,Ks=0,Gr=null,n)throw Error(r(300));t===null||tn||(t=t.dependencies,t!==null&&Ko(t)&&(tn=!0))}function xp(t,n,a,s){ae=t;var u=0;do{if(Hr&&(Gr=null),Ks=0,Hr=!1,25<=u)throw Error(r(301));if(u+=1,$e=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=em,f=n(a,s)}while(Hr);return f}function B0(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Qs(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(ae.flags|=1024),n}function _c(){var t=sl!==0;return sl=0,t}function vc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xc(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}Ii=0,$e=ze=ae=null,Hr=!1,Ks=sl=0,Gr=null}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ae.memoizedState=$e=t:$e=$e.next=t,$e}function Qe(){if(ze===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=$e===null?ae.memoizedState:$e.next;if(n!==null)$e=n,ze=t;else{if(t===null)throw ae.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},$e===null?ae.memoizedState=$e=t:$e=$e.next=t}return $e}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qs(t){var n=Ks;return Ks+=1,Gr===null&&(Gr=[]),t=up(Gr,t,n),n=ae,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?tm:Uc),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qs(t);if(t.$$typeof===L)return gn(t)}throw Error(r(438,String(t)))}function Sc(t){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=Qe();return Mc(n,ze,t)}function Mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,P=null,J=n,ct=!1;do{var pt=J.lane&-536870913;if(pt!==J.lane?(me&pt)===pt:(Ii&pt)===pt){var tt=J.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),pt===zr&&(ct=!0);else if((Ii&tt)===tt){J=J.next,tt===zr&&(ct=!0);continue}else pt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=pt,g=f):P=P.next=pt,ae.lanes|=tt,Sa|=tt;pt=J.action,ir&&a(f,pt),f=J.hasEagerState?J.eagerState:a(f,pt)}else tt={lane:pt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=tt,g=f):P=P.next=tt,ae.lanes|=pt,Sa|=pt;J=J.next}while(J!==null&&J!==n);if(P===null?g=f:P.next=E,!Fn(f,t.memoizedState)&&(tn=!0,ct&&(a=Pr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function yc(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Fn(f,n.memoizedState)||(tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Sp(t,n,a){var s=ae,u=Qe(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Fn((ze||u).memoizedState,a);if(g&&(u.memoizedState=a,tn=!0),u=u.queue,bc(Ep.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Vr(9,{destroy:void 0},yp.bind(null,s,u,a,n),null),He===null)throw Error(r(349));f||(Ii&127)!==0||Mp(s,n,a)}return a}function Mp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=ol(),ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function yp(t,n,a,s){n.value=a,n.getSnapshot=s,Tp(n)&&bp(t)}function Ep(t,n,a){return a(function(){Tp(n)&&bp(t)})}function Tp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Fn(t,a)}catch{return!0}}function bp(t){var n=ja(t,2);n!==null&&Nn(n,t,2)}function Ec(t){var n=bn();if(typeof t=="function"){var a=t;if(t=a(),ir){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Ap(t,n,a,s){return t.baseState=a,Mc(t,ze,typeof s=="function"?s:Fi)}function I0(t,n,a,s,u){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Rp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var E=a(u,s),P=z.S;P!==null&&P(g,E),Cp(t,n,E)}catch(J){Tc(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(u,s),Cp(t,n,f)}catch(J){Tc(t,n,J)}}function Cp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){wp(t,n,s)},function(s){return Tc(t,n,s)}):wp(t,n,a)}function wp(t,n,a){n.status="fulfilled",n.value=a,Dp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rp(t,a)))}function Tc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Dp(n),n=n.next;while(n!==s)}t.action=null}function Dp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Up(t,n){return n}function Lp(t,n){if(ve){var a=He.formState;if(a!==null){t:{var s=ae;if(ve){if(Ge){e:{for(var u=Ge,f=ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=ii(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ge=ii(u.nextSibling),s=u.data==="F!";break t}}fa(s)}s=!1}s&&(n=a[0])}}return a=bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=s,a=Qp.bind(null,ae,s),s.dispatch=a,s=Ec(!1),f=Dc.bind(null,ae,!1,s.queue),s=bn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=I0.bind(null,ae,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Np(t){var n=Qe();return Op(n,ze,t)}function Op(t,n,a){if(n=Mc(t,n,Up)[0],t=ul(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Qs(n)}catch(g){throw g===Br?$o:g}else s=n;n=Qe();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,Vr(9,{destroy:void 0},F0.bind(null,u,a),null)),[s,f,t]}function F0(t,n){t.action=n}function zp(t){var n=Qe(),a=ze;if(a!==null)return Op(n,a,t);Qe(),n=n.memoizedState,a=Qe();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ae.updateQueue,n===null&&(n=ol(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Pp(){return Qe().memoizedState}function cl(t,n,a,s){var u=bn();ae.flags|=t,u.memoizedState=Vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function fl(t,n,a,s){var u=Qe();s=s===void 0?null:s;var f=u.memoizedState.inst;ze!==null&&s!==null&&mc(s,ze.memoizedState.deps)?u.memoizedState=Vr(n,f,a,s):(ae.flags|=t,u.memoizedState=Vr(1|n,f,a,s))}function Bp(t,n){cl(8390656,8,t,n)}function bc(t,n){fl(2048,8,t,n)}function H0(t){ae.flags|=4;var n=ae.updateQueue;if(n===null)n=ol(),ae.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ip(t){var n=Qe().memoizedState;return H0({ref:n,nextImpl:t}),function(){if((be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Fp(t,n){return fl(4,2,t,n)}function Hp(t,n){return fl(4,4,t,n)}function Gp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vp(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,Gp.bind(null,n,t),a)}function Ac(){}function Xp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function kp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mc(n,s[1]))return s[0];if(s=t(),ir){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Rc(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wm(),ae.lanes|=t,Sa|=t,a)}function Wp(t,n,a,s){return Fn(a,n)?a:Fr.current!==null?(t=Rc(t,a,s),Fn(t,n)||(tn=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(me&261930)===0?(tn=!0,t.memoizedState=a):(t=Wm(),ae.lanes|=t,Sa|=t,n)}function qp(t,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=z.T,E={};z.T=E,Dc(t,!1,n,a);try{var P=u(),J=z.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=z0(P,s);Js(t,n,ct,Wn(t))}else Js(t,n,s,Wn(t))}catch(pt){Js(t,n,{then:function(){},status:"rejected",reason:pt},Wn())}finally{Z.p=f,g!==null&&E.types!==null&&(g.types=E.types),z.T=g}}function G0(){}function Cc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Yp(t).queue;qp(t,u,n,j,a===null?G0:function(){return jp(t),a(s)})}function Yp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jp(t){var n=Yp(t);n.next===null&&(n=t.alternate.memoizedState),Js(t,n.next.queue,{},Wn())}function wc(){return gn(go)}function Zp(){return Qe().memoizedState}function Kp(){return Qe().memoizedState}function V0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=pa(a);var s=ma(n,t,a);s!==null&&(Nn(s,n,a),Ys(s,n,a)),n={cache:ac()},t.payload=n;return}n=n.return}}function X0(t,n,a){var s=Wn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?Jp(n,a):(a=Yu(t,n,a,s),a!==null&&(Nn(a,t,s),$p(a,n,s)))}function Qp(t,n,a){var s=Wn();Js(t,n,a,s)}function Js(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Jp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Fn(E,g))return qo(t,n,u,0),He===null&&Wo(),!1}catch{}finally{}if(a=Yu(t,n,u,s),a!==null)return Nn(a,t,s),$p(a,n,s),!0}return!1}function Dc(t,n,a,s){if(s={lane:2,revertLane:uf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=Yu(t,a,s,2),n!==null&&Nn(n,t,2)}function hl(t){var n=t.alternate;return t===ae||n!==null&&n===ae}function Jp(t,n){Hr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $p(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}var $s={readContext:gn,use:ll,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};$s.useEffectEvent=je;var tm={readContext:gn,use:ll,useCallback:function(t,n){return bn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:Bp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,Gp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=bn();n=n===void 0?null:n;var s=t();if(ir){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=bn();if(a!==void 0){var u=a(n);if(ir){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=X0.bind(null,ae,t),[s.memoizedState,t]},useRef:function(t){var n=bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ec(t);var n=t.queue,a=Qp.bind(null,ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ac,useDeferredValue:function(t,n){var a=bn();return Rc(a,t,n)},useTransition:function(){var t=Ec(!1);return t=qp.bind(null,ae,t.queue,!0,!1),bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ae,u=bn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(me&127)!==0||Mp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bp(Ep.bind(null,s,f,t),[t]),s.flags|=2048,Vr(9,{destroy:void 0},yp.bind(null,s,f,a,n),null),a},useId:function(){var t=bn(),n=He.identifierPrefix;if(ve){var a=Mi,s=Si;a=(s&~(1<<32-Qt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=P0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wc,useFormState:Lp,useActionState:Lp,useOptimistic:function(t){var n=bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dc.bind(null,ae,!0,a),a.dispatch=n,[t,n]},useMemoCache:Sc,useCacheRefresh:function(){return bn().memoizedState=V0.bind(null,ae)},useEffectEvent:function(t){var n=bn(),a={impl:t};return n.memoizedState=a,function(){if((be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Uc={readContext:gn,use:ll,useCallback:Xp,useContext:gn,useEffect:bc,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:kp,useReducer:ul,useRef:Pp,useState:function(){return ul(Fi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Qe();return Wp(a,ze.memoizedState,t,n)},useTransition:function(){var t=ul(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:wc,useFormState:Np,useActionState:Np,useOptimistic:function(t,n){var a=Qe();return Ap(a,ze,t,n)},useMemoCache:Sc,useCacheRefresh:Kp};Uc.useEffectEvent=Ip;var em={readContext:gn,use:ll,useCallback:Xp,useContext:gn,useEffect:bc,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:kp,useReducer:yc,useRef:Pp,useState:function(){return yc(Fi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Qe();return ze===null?Rc(a,t,n):Wp(a,ze.memoizedState,t,n)},useTransition:function(){var t=yc(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:wc,useFormState:zp,useActionState:zp,useOptimistic:function(t,n){var a=Qe();return ze!==null?Ap(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Kp};em.useEffectEvent=Ip;function Lc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Nc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=pa(s);u.payload=n,a!=null&&(u.callback=a),n=ma(t,u,s),n!==null&&(Nn(n,t,s),Ys(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=pa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ma(t,u,s),n!==null&&(Nn(n,t,s),Ys(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=pa(a);s.tag=2,n!=null&&(s.callback=n),n=ma(t,s,a),n!==null&&(Nn(n,t,a),Ys(n,t,a))}};function nm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Fs(a,s)||!Fs(u,f):!0}function im(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Nc.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function am(t){ko(t)}function rm(t){console.error(t)}function sm(t){ko(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function om(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Oc(t,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function lm(t){return t=pa(t),t.tag=3,t}function um(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){om(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){om(n,a,s),typeof u!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function k0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:return ni===null?bl():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,u)),!1;case 22:return a.flags|=65536,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,u)),!1}throw Error(r(435,a.tag))}return sf(t,s,u),bl(),!1}if(ve)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==$u&&(t=Error(r(422),{cause:s}),Vs(Jn(t,a)))):(s!==$u&&(n=Error(r(423),{cause:s}),Vs(Jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Jn(s,a),u=Oc(t.stateNode,s,u),cc(t,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),oo===null?oo=[f]:oo.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Oc(a.stateNode,s,t),cc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lm(u),um(u,t,a,s),cc(a,u),!1}a=a.return}while(a!==null);return!1}var zc=Error(r(461)),tn=!1;function _n(t,n,a,s){n.child=t===null?dp(n,null,a,s):nr(n,t.child,a,s)}function cm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return Ja(n),s=gc(t,n,a,g,f,u),E=_c(),t!==null&&!tn?(vc(t,n,u),Hi(t,n,u)):(ve&&E&&Qu(n),n.flags|=1,_n(t,n,s,u),n.child)}function fm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!ju(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hm(t,n,f,s,u)):(t=jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Xc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(g,s)&&t.ref===n.ref)return Hi(t,n,u)}return n.flags|=1,t=Oi(f,s),t.ref=n.ref,t.return=n,n.child=t}function hm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Fs(f,s)&&t.ref===n.ref)if(tn=!1,n.pendingProps=s=f,Xc(t,u))(t.flags&131072)!==0&&(tn=!0);else return n.lanes=t.lanes,Hi(t,n,u)}return Pc(t,n,a,s,u)}function dm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return pm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?gp(n,f):hc(),_p(n);else return s=n.lanes=536870912,pm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Jo(n,f.cachePool),gp(n,f),_a(),n.memoizedState=null):(t!==null&&Jo(n,null),hc(),_a());return _n(t,n,u,a),n.child}function to(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pm(t,n,a,s,u){var f=sc();return f=f===null?null:{parent:Je._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Jo(n,null),hc(),_p(n),t!==null&&Or(t,n,s,!0),n.childLanes=u,null}function pl(t,n){return n=gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function mm(t,n,a){return nr(n,t.child,null,a),t=pl(n,n.pendingProps),t.flags|=2,Vn(n),n.memoizedState=null,t}function W0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=pl(n,s),n.lanes=536870912,to(null,t);if(pc(n),(t=Ge)?(t=Rg(t,ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Jd(t),a.return=n,n.child=a,mn=n,Ge=null)):t=null,t===null)throw fa(n);return n.lanes=536870912,null}return pl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(pc(n),u)if(n.flags&256)n.flags&=-257,n=mm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(tn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,tn||u){if(s=He,s!==null&&(g=xi(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ja(t,g),Nn(s,t,g),zc;bl(),n=mm(t,n,a)}else t=f.treeContext,Ge=ii(g.nextSibling),mn=n,ve=!0,ca=null,ei=!1,t!==null&&ep(n,t),n=pl(n,s),n.flags|=4096;return n}return t=Oi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pc(t,n,a,s,u){return Ja(n),a=gc(t,n,a,s,void 0,u),s=_c(),t!==null&&!tn?(vc(t,n,u),Hi(t,n,u)):(ve&&s&&Qu(n),n.flags|=1,_n(t,n,a,u),n.child)}function gm(t,n,a,s,u,f){return Ja(n),n.updateQueue=null,a=xp(n,s,a,u),vp(t),s=_c(),t!==null&&!tn?(vc(t,n,f),Hi(t,n,f)):(ve&&s&&Qu(n),n.flags|=1,_n(t,n,a,f),n.child)}function _m(t,n,a,s,u){if(Ja(n),n.stateNode===null){var f=Dr,g=a.contextType;typeof g=="object"&&g!==null&&(f=gn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?gn(g):Dr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Lc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Nc.enqueueReplaceState(f,f.state,null),Zs(n,s,f,u),js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ar(a,E);f.props=P;var J=f.context,ct=a.contextType;g=Dr,typeof ct=="object"&&ct!==null&&(g=gn(ct));var pt=a.getDerivedStateFromProps;ct=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==g)&&im(n,f,s,g),da=!1;var tt=n.memoizedState;f.state=tt,Zs(n,s,f,u),js(),J=n.memoizedState,E||tt!==J||da?(typeof pt=="function"&&(Lc(n,a,pt,s),J=n.memoizedState),(P=da||nm(n,a,P,s,tt,J,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uc(t,n),g=n.memoizedProps,ct=ar(a,g),f.props=ct,pt=n.pendingProps,tt=f.context,J=a.contextType,P=Dr,typeof J=="object"&&J!==null&&(P=gn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==pt||tt!==P)&&im(n,f,s,P),da=!1,tt=n.memoizedState,f.state=tt,Zs(n,s,f,u),js();var rt=n.memoizedState;g!==pt||tt!==rt||da||t!==null&&t.dependencies!==null&&Ko(t.dependencies)?(typeof E=="function"&&(Lc(n,a,E,s),rt=n.memoizedState),(ct=da||nm(n,a,ct,s,tt,rt,P)||t!==null&&t.dependencies!==null&&Ko(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=P,s=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=nr(n,t.child,null,u),n.child=nr(n,null,a,u)):_n(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Hi(t,n,u),t}function vm(t,n,a,s){return Ka(),n.flags|=256,_n(t,n,a,s),n.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(t){return{baseLanes:t,cachePool:op()}}function Fc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=kn),t}function xm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ke.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?ga(n):_a(),(t=Ge)?(t=Rg(t,ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Jd(t),a.return=n,n.child=a,mn=n,Ge=null)):t=null,t===null)throw fa(n);return yf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(_a(),u=n.mode,E=gl({mode:"hidden",children:E},u),s=Za(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,to(null,s)):(ga(n),Hc(n,E))}var P=t.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=Gc(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),E=s.fallback,u=n.mode,s=gl({mode:"visible",children:s.children},u),E=Za(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,nr(n,t.child,null,a),s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,n=to(null,s));else if(ga(n),yf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,Vs({value:s,source:null,stack:null}),n=Gc(t,n,a)}else if(tn||Or(t,n,a,!1),g=(a&t.childLanes)!==0,tn||g){if(g=He,g!==null&&(s=xi(g,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,ja(t,s),Nn(g,t,s),zc;Mf(E)||bl(),n=Gc(t,n,a)}else Mf(E)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Ge=ii(E.nextSibling),mn=n,ve=!0,ca=null,ei=!1,t!==null&&ep(n,t),n=Hc(n,s.children),n.flags|=4096);return n}return u?(_a(),E=s.fallback,u=n.mode,P=t.child,J=P.sibling,s=Oi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?E=Oi(J,E):(E=Za(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,to(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Ic(a):(u=E.cachePool,u!==null?(P=Je._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=op(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Fc(t,g,a),n.memoizedState=Bc,to(t.child,s)):(ga(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Hc(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Hn(22,t,null,n),t.lanes=0,t}function Gc(t,n,a){return nr(n,t.child,null,a),t=Hc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),nc(t.return,n,a)}function Vc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Mm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Ke.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,xt(Ke,g),_n(t,n,s,a),s=ve?Gs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,a,n);else if(t.tag===19)Sm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Vc(n,!0,a,null,f,s);break;case"together":Vc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Xc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ko(t)))}function q0(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),ha(n,Je,t.memoizedState.cache),Ka();break;case 27:case 5:ee(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(t,n,a):(ga(n),t=Hi(t,n,a),t!==null?t.sibling:null);ga(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Or(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Mm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Ke,Ke.current),s)break;return null;case 22:return n.lanes=0,dm(t,n,a,n.pendingProps);case 24:ha(n,Je,t.memoizedState.cache)}return Hi(t,n,a)}function ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)tn=!0;else{if(!Xc(t,a)&&(n.flags&128)===0)return tn=!1,q0(t,n,a);tn=(t.flags&131072)!==0}else tn=!1,ve&&(n.flags&1048576)!==0&&tp(n,Gs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=tr(n.elementType),n.type=t,typeof t=="function")ju(t)?(s=ar(t,s),n.tag=1,n=_m(null,n,t,s,a)):(n.tag=0,n=Pc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=cm(null,n,t,s,a);break t}else if(u===O){n.tag=14,n=fm(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Pc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ar(s,n.pendingProps),_m(t,n,s,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,uc(t,n),Zs(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ha(n,Je,s),s!==f.cache&&ic(n,[Je],a,!0),js(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=vm(t,n,s,a);break t}else if(s!==u){u=Jn(Error(r(424)),n),Vs(u),n=vm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=ii(t.firstChild),mn=n,ve=!0,ca=null,ei=!0,a=dp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ka(),s===u){n=Hi(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,s=Ll(yt.current).createElement(a),s[Ye]=n,s[dn]=t,vn(s,a,t),wt(s),n.stateNode=s):n.memoizedState=Ng(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&ve&&(s=n.stateNode=Dg(n.type,n.pendingProps,yt.current),mn=n,ei=!0,u=Ge,ba(n.type)?(Ef=u,Ge=ii(s.firstChild)):Ge=u),_n(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=Ge)&&(s=yx(s,n.type,n.pendingProps,ei),s!==null?(n.stateNode=s,mn=n,Ge=ii(s.firstChild),ei=!1,u=!0):u=!1),u||fa(n)),ee(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,vf(u,f)?s=null:g!==null&&vf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=gc(t,n,B0,null,null,a),go._currentValue=u),ml(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ge)&&(a=Ex(a,n.pendingProps,ei),a!==null?(n.stateNode=a,mn=n,Ge=null,t=!0):t=!1),t||fa(n)),null;case 13:return xm(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=nr(n,null,s,a):_n(t,n,s,a),n.child;case 11:return cm(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ha(n,n.type,s.value),_n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Ja(n),u=gn(u),s=s(u),n.flags|=1,_n(t,n,s,a),n.child;case 14:return fm(t,n,n.type,n.pendingProps,a);case 15:return hm(t,n,n.type,n.pendingProps,a);case 19:return Mm(t,n,a);case 31:return W0(t,n,a);case 22:return dm(t,n,a,n.pendingProps);case 24:return Ja(n),s=gn(Je),t===null?(u=sc(),u===null&&(u=He,f=ac(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},lc(n),ha(n,Je,u)):((t.lanes&a)!==0&&(uc(t,n),Zs(n,null,null,a),js()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ha(n,Je,s)):(s=f.cache,ha(n,Je,s),s!==u.cache&&ic(n,[Je],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(t){t.flags|=4}function kc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Zm())t.flags|=8192;else throw er=tl,oc}else t.flags&=-16777217}function Em(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ig(n))if(Zm())t.flags|=8192;else throw er=tl,oc}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?an():536870912,t.lanes|=n,qr|=n)}function eo(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Y0(t,n,a){var s=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(Je),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Nr(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tc())),Ve(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(Ve(n),Em(n,f)):(Ve(n),kc(n,u,null,s,a))):f?f!==t.memoizedState?(Gi(n),Ve(n),Em(n,f)):(Ve(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Gi(n),Ve(n),kc(n,u,t,s,a)),null;case 27:if(Le(n),a=yt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}t=Y.current,Nr(n)?np(n):(t=Dg(u,s,a),n.stateNode=t,Gi(n))}return Ve(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}if(f=Y.current,Nr(n))np(n);else{var g=Ll(yt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[Ye]=n,f[dn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(vn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Gi(n)}}return Ve(n),kc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,Nr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=mn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||xg(t.nodeValue,a)),t||fa(n,!0)}else t=Ll(t).createTextNode(s),t[Ye]=n,n.stateNode=t}return Ve(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Nr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ye]=n}else Ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),t=!1}else a=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ve(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Nr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ye]=n}else Ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),u=!1}else u=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),Ve(n),null);case 4:return It(),t===null&&df(n.stateNode.containerInfo),Ve(n),null;case 10:return Bi(n.type),Ve(n),null;case 19:if(nt(Ke),s=n.memoizedState,s===null)return Ve(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)eo(s,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=al(t),f!==null){for(n.flags|=128,eo(s,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qd(a,t),a=a.sibling;return xt(Ke,Ke.current&1|2),ve&&zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&ft()>yl&&(n.flags|=128,u=!0,eo(s,!1),n.lanes=4194304)}else{if(!u)if(t=al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ve)return Ve(n),null}else 2*ft()-s.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,u=!0,eo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ft(),t.sibling=null,a=Ke.current,xt(Ke,u?a&1|2:a&1),ve&&zi(n,s.treeForkCount),t):(Ve(n),null);case 22:case 23:return Vn(n),dc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt($a),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(Je),Ve(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function j0(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(Je),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(r(340));Ka()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Vn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ka()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Ke),null;case 4:return It(),null;case 10:return Bi(n.type),null;case 22:case 23:return Vn(n),dc(),t!==null&&nt($a),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(Je),null;case 25:return null;default:return null}}function Tm(t,n){switch(Ju(n),n.tag){case 3:Bi(Je),It();break;case 26:case 27:case 5:Le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:nt(Ke);break;case 10:Bi(n.type);break;case 22:case 23:Vn(n),dc(),t!==null&&nt($a);break;case 24:Bi(Je)}}function no(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){Ue(n,n.return,E)}}function va(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var P=a,J=E;try{J()}catch(ct){Ue(u,P,ct)}}}s=s.next}while(s!==f)}}catch(ct){Ue(n,n.return,ct)}}function bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mp(n,a)}catch(s){Ue(t,t.return,s)}}}function Am(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ue(t,n,s)}}function io(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ue(t,n,u)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ue(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ue(t,n,u)}else a.current=null}function Rm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ue(t,t.return,u)}}function Wc(t,n,a){try{var s=t.stateNode;gx(s,t.type,a,n),s[dn]=n}catch(u){Ue(t,t.return,u)}}function Cm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Cm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Yc(t,n,a),t=t.sibling;t!==null;)Yc(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function wm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);vn(n,s,a),n[Ye]=t,n[dn]=a}catch(f){Ue(t,t.return,f)}}var Vi=!1,en=!1,jc=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,cn=null;function Z0(t,n){if(t=t.containerInfo,gf=Fl,t=Vd(t),Gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,P=-1,J=0,ct=0,pt=t,tt=null;e:for(;;){for(var rt;pt!==a||u!==0&&pt.nodeType!==3||(E=g+u),pt!==f||s!==0&&pt.nodeType!==3||(P=g+s),pt.nodeType===3&&(g+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)tt=pt,pt=rt;for(;;){if(pt===t)break e;if(tt===a&&++J===u&&(E=g),tt===f&&++ct===s&&(P=g),(rt=pt.nextSibling)!==null)break;pt=tt,tt=pt.parentNode}pt=rt}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Fl=!1,cn=n;cn!==null;)if(n=cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,cn=t;else for(;cn!==null;){switch(n=cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=ar(a.type,u);t=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Zt){Ue(a,a.return,Zt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,cn=t;break}cn=n.return}}function Um(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),s&4&&no(5,a);break;case 1:if(ki(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ue(a,a.return,g)}else{var u=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ue(a,a.return,g)}}s&64&&bm(a),s&512&&io(a,a.return);break;case 3:if(ki(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mp(t,n)}catch(g){Ue(a,a.return,g)}}break;case 27:n===null&&s&4&&wm(a);case 26:case 5:ki(t,a),n===null&&s&4&&Rm(a),s&512&&io(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),s&4&&Om(t,a);break;case 13:ki(t,a),s&4&&zm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ax.bind(null,a),Tx(t,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||en,u=Vi;var f=en;Vi=s,(en=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Vi=u,en=f}break;case 30:break;default:ki(t,a)}}function Lm(t){var n=t.alternate;n!==null&&(t.alternate=null,Lm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,wn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Nm(t,n,a),a=a.sibling}function Nm(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:en||yi(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||yi(a,n);var s=We,u=wn;ba(a.type)&&(We=a.stateNode,wn=!1),Xi(t,n,a),ho(a.stateNode),We=s,wn=u;break;case 5:en||yi(a,n);case 6:if(s=We,u=wn,We=null,Xi(t,n,a),We=s,wn=u,We!==null)if(wn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:We!==null&&(wn?(t=We,bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ts(t)):bg(We,a.stateNode));break;case 4:s=We,u=wn,We=a.stateNode.containerInfo,wn=!0,Xi(t,n,a),We=s,wn=u;break;case 0:case 11:case 14:case 15:va(2,a,n),en||va(4,a,n),Xi(t,n,a);break;case 1:en||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Am(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:en=(s=en)||a.memoizedState!==null,Xi(t,n,a),en=s;break;default:Xi(t,n,a)}}function Om(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ts(t)}catch(a){Ue(n,n.return,a)}}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ts(t)}catch(a){Ue(n,n.return,a)}}function K0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Dm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Dm),n;default:throw Error(r(435,t.tag))}}function xl(t,n){var a=K0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=rx.bind(null,t,s);s.then(u,u)}})}function Dn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(ba(E.type)){We=E.stateNode,wn=!1;break t}break;case 5:We=E.stateNode,wn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,wn=!0;break t}E=E.return}if(We===null)throw Error(r(160));Nm(f,g,u),We=null,wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Pm(n,t),n=n.sibling}var fi=null;function Pm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dn(n,t),Un(t),s&4&&(va(3,t,t.return),no(3,t),va(5,t,t.return));break;case 1:Dn(n,t),Un(t),s&512&&(en||a===null||yi(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if(Dn(n,t),Un(t),s&512&&(en||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[V]||f[Ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),vn(f,s,a),f[Ye]=t,wt(f),s=f;break t;case"link":var g=Pg("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Pg("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ye]=t,wt(f),s=f}t.stateNode=s}else Bg(u,t.type,t.stateNode);else t.stateNode=zg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Bg(u,t.type,t.stateNode):zg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Wc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Dn(n,t),Un(t),s&512&&(en||a===null||yi(a,a.return)),a!==null&&s&4&&Wc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Dn(n,t),Un(t),s&512&&(en||a===null||yi(a,a.return)),t.flags&32){u=t.stateNode;try{Er(u,"")}catch(Bt){Ue(t,t.return,Bt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Wc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(jc=!0);break;case 6:if(Dn(n,t),Un(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Bt){Ue(t,t.return,Bt)}}break;case 3:if(zl=null,u=fi,fi=Nl(n.containerInfo),Dn(n,t),fi=u,Un(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ts(n.containerInfo)}catch(Bt){Ue(t,t.return,Bt)}jc&&(jc=!1,Bm(t));break;case 4:s=fi,fi=Nl(t.stateNode.containerInfo),Dn(n,t),Un(t),fi=s;break;case 12:Dn(n,t),Un(t);break;case 31:Dn(n,t),Un(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 13:Dn(n,t),Un(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=ft()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 22:u=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Vi,ct=en;if(Vi=J||u,en=ct||P,Dn(n,t),en=ct,Vi=J,Un(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Vi||en||rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var pt=P.memoizedProps.style,tt=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Bt){Ue(P,P.return,Bt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Bt){Ue(P,P.return,Bt)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;u?Ag(rt,!0):Ag(P.stateNode,!1)}catch(Bt){Ue(P,P.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,xl(t,a))));break;case 19:Dn(n,t),Un(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 30:break;case 21:break;default:Dn(n,t),Un(t)}}function Un(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Cm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=qc(t);vl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Er(g,""),a.flags&=-33);var E=qc(t);vl(t,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,J=qc(t);Yc(t,J,P);break;default:throw Error(r(161))}}catch(ct){Ue(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Um(t,n.alternate,n),n=n.sibling}function rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),rr(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Am(n,n.return,a),rr(n);break;case 27:ho(n.stateNode);case 26:case 5:yi(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(u,f,a),no(4,f);break;case 1:if(Wi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ue(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)pp(P[u],E)}catch(J){Ue(s,s.return,J)}}a&&g&64&&bm(f),io(f,f.return);break;case 27:wm(f);case 26:case 5:Wi(u,f,a),a&&s===null&&g&4&&Rm(f),io(f,f.return);break;case 12:Wi(u,f,a);break;case 31:Wi(u,f,a),a&&g&4&&Om(u,f);break;case 13:Wi(u,f,a),a&&g&4&&zm(u,f);break;case 22:f.memoizedState===null&&Wi(u,f,a),io(f,f.return);break;case 30:break;default:Wi(u,f,a)}n=n.sibling}}function Zc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xs(a))}function Kc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xs(t))}function hi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Im(t,n,a,s),n=n.sibling}function Im(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,s),u&2048&&no(9,n);break;case 1:hi(t,n,a,s);break;case 3:hi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xs(t)));break;case 12:if(u&2048){hi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ue(n,n.return,P)}}else hi(t,n,a,s);break;case 31:hi(t,n,a,s);break;case 13:hi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,s):ao(t,n):f._visibility&2?hi(t,n,a,s):(f._visibility|=2,Xr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Zc(g,n);break;case 24:hi(t,n,a,s),u&2048&&Kc(n.alternate,n);break;default:hi(t,n,a,s)}}function Xr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,P=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:Xr(f,g,E,P,u),no(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?Xr(f,g,E,P,u):ao(f,g):(ct._visibility|=2,Xr(f,g,E,P,u)),u&&J&2048&&Zc(g.alternate,g);break;case 24:Xr(f,g,E,P,u),u&&J&2048&&Kc(g.alternate,g);break;default:Xr(f,g,E,P,u)}n=n.sibling}}function ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:ao(a,s),u&2048&&Zc(s.alternate,s);break;case 24:ao(a,s),u&2048&&Kc(s.alternate,s);break;default:ao(a,s)}n=n.sibling}}var ro=8192;function kr(t,n,a){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)Fm(t,n,a),t=t.sibling}function Fm(t,n,a){switch(t.tag){case 26:kr(t,n,a),t.flags&ro&&t.memoizedState!==null&&Px(a,fi,t.memoizedState,t.memoizedProps);break;case 5:kr(t,n,a);break;case 3:case 4:var s=fi;fi=Nl(t.stateNode.containerInfo),kr(t,n,a),fi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=ro,ro=16777216,kr(t,n,a),ro=s):kr(t,n,a));break;default:kr(t,n,a)}}function Hm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function so(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,Vm(s,t)}Hm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gm(t),t=t.sibling}function Gm(t){switch(t.tag){case 0:case 11:case 15:so(t),t.flags&2048&&va(9,t,t.return);break;case 3:so(t);break;case 12:so(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):so(t);break;default:so(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,Vm(s,t)}Hm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:va(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function Vm(t,n){for(;cn!==null;){var a=cn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,cn=s;else t:for(a=t;cn!==null;){s=cn;var u=s.sibling,f=s.return;if(Lm(s),s===a){cn=null;break t}if(u!==null){u.return=f,cn=u;break t}cn=f}}}var Q0={getCacheForType:function(t){var n=gn(Je),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return gn(Je).controller.signal}},J0=typeof WeakMap=="function"?WeakMap:Map,be=0,He=null,ce=null,me=0,De=0,Xn=null,xa=!1,Wr=!1,Qc=!1,qi=0,Ze=0,Sa=0,sr=0,Jc=0,kn=0,qr=0,oo=null,Ln=null,$c=!1,Ml=0,Xm=0,yl=1/0,El=null,Ma=null,sn=0,ya=null,Yr=null,Yi=0,tf=0,ef=null,km=null,lo=0,nf=null;function Wn(){return(be&2)!==0&&me!==0?me&-me:z.T!==null?uf():Ds()}function Wm(){if(kn===0)if((me&536870912)===0||ve){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),kn=t}else kn=536870912;return t=Gn.current,t!==null&&(t.flags|=32),kn}function Nn(t,n,a){(t===He&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Ea(t,me,kn,!1)),hn(t,a),((be&2)===0||t!==He)&&(t===He&&((be&2)===0&&(sr|=a),Ze===4&&Ea(t,me,kn,!1)),Ei(t))}function qm(t,n,a){if((be&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Jt(t,n),u=s?ex(t,n):rf(t,n,!0),f=s;do{if(u===0){Wr&&!s&&Ea(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$0(a)){u=rf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=oo;var P=E.current.memoizedState.isDehydrated;if(P&&(jr(E,g).flags|=256),g=rf(E,g,!1),g!==2){if(Qc&&!P){E.errorRecoveryDisabledLanes|=f,sr|=f,u=4;break t}f=Ln,Ln=u,f!==null&&(Ln===null?Ln=f:Ln.push.apply(Ln,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){jr(t,0),Ea(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,kn,!xa);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ml+300-ft(),10<u)){if(Ea(s,n,kn,!xa),Ut(s,0,!0)!==0)break t;Yi=n,s.timeoutHandle=Eg(Ym.bind(null,s,a,Ln,El,$c,n,kn,sr,qr,xa,f,"Throttled",-0,0),u);break t}Ym(s,a,Ln,El,$c,n,kn,sr,qr,xa,f,null,-0,0)}}break}while(!0);Ei(t)}function Ym(t,n,a,s,u,f,g,E,P,J,ct,pt,tt,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Fm(n,f,pt);var Bt=(f&62914560)===f?Ml-ft():(f&4194048)===f?Xm-ft():0;if(Bt=Bx(pt,Bt),Bt!==null){Yi=f,t.cancelPendingCommit=Bt(eg.bind(null,t,n,f,a,s,u,g,E,P,ct,pt,null,tt,rt)),Ea(t,f,g,!J);return}}eg(t,n,f,a,s,u,g,E,P)}function $0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Fn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(t,n,a,s){n&=~Jc,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Qt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Cs(t,a,n)}function Tl(){return(be&6)===0?(uo(0),!1):!0}function af(){if(ce!==null){if(De===0)var t=ce.return;else t=ce,Pi=Qa=null,xc(t),Ir=null,Ws=0,t=ce;for(;t!==null;)Tm(t.alternate,t),t=t.return;ce=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,af(),He=t,ce=a=Oi(t.current,null),me=n,De=0,Xn=null,xa=!1,Wr=Jt(t,n),Qc=!1,qr=kn=Jc=sr=Sa=Ze=0,Ln=oo=null,$c=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Qt(s),f=1<<u;n|=t[u],s&=~f}return qi=n,Wo(),a}function jm(t,n){ae=null,z.H=$s,n===Br||n===$o?(n=cp(),De=3):n===oc?(n=cp(),De=4):De=n===zc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,ce===null&&(Ze=1,dl(t,Jn(n,t.current)))}function Zm(){var t=Gn.current;return t===null?!0:(me&4194048)===me?ni===null:(me&62914560)===me||(me&536870912)!==0?t===ni:!1}function Km(){var t=z.H;return z.H=$s,t===null?$s:t}function Qm(){var t=z.A;return z.A=Q0,t}function bl(){Ze=4,xa||(me&4194048)!==me&&Gn.current!==null||(Wr=!0),(Sa&134217727)===0&&(sr&134217727)===0||He===null||Ea(He,me,kn,!1)}function rf(t,n,a){var s=be;be|=2;var u=Km(),f=Qm();(He!==t||me!==n)&&(El=null,jr(t,n)),n=!1;var g=Ze;t:do try{if(De!==0&&ce!==null){var E=ce,P=Xn;switch(De){case 8:af(),g=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var J=De;if(De=0,Xn=null,Zr(t,E,P,J),a&&Wr){g=0;break t}break;default:J=De,De=0,Xn=null,Zr(t,E,P,J)}}tx(),g=Ze;break}catch(ct){jm(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Pi=Qa=null,be=s,z.H=u,z.A=f,ce===null&&(He=null,me=0,Wo()),g}function tx(){for(;ce!==null;)Jm(ce)}function ex(t,n){var a=be;be|=2;var s=Km(),u=Qm();He!==t||me!==n?(El=null,yl=ft()+500,jr(t,n)):Wr=Jt(t,n);t:do try{if(De!==0&&ce!==null){n=ce;var f=Xn;e:switch(De){case 1:De=0,Xn=null,Zr(t,n,f,1);break;case 2:case 9:if(lp(f)){De=0,Xn=null,$m(n);break}n=function(){De!==2&&De!==9||He!==t||(De=7),Ei(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:lp(f)?(De=0,Xn=null,$m(n)):(De=0,Xn=null,Zr(t,n,f,7));break;case 5:var g=null;switch(ce.tag){case 26:g=ce.memoizedState;case 5:case 27:var E=ce;if(g?Ig(g):E.stateNode.complete){De=0,Xn=null;var P=E.sibling;if(P!==null)ce=P;else{var J=E.return;J!==null?(ce=J,Al(J)):ce=null}break e}}De=0,Xn=null,Zr(t,n,f,5);break;case 6:De=0,Xn=null,Zr(t,n,f,6);break;case 8:af(),Ze=6;break t;default:throw Error(r(462))}}nx();break}catch(ct){jm(t,ct)}while(!0);return Pi=Qa=null,z.H=s,z.A=u,be=a,ce!==null?0:(He=null,me=0,Wo(),Ze)}function nx(){for(;ce!==null&&!T();)Jm(ce)}function Jm(t){var n=ym(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Al(t):ce=n}function $m(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=gm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=gm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:xc(n);default:Tm(a,n),n=ce=Qd(n,qi),n=ym(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Al(t):ce=n}function Zr(t,n,a,s){Pi=Qa=null,xc(n),Ir=null,Ws=0;var u=n.return;try{if(k0(t,u,n,a,me)){Ze=1,dl(t,Jn(a,t.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;Ze=1,dl(t,Jn(a,t.current)),ce=null;return}n.flags&32768?(ve||s===1?t=!0:Wr||(me&536870912)!==0?t=!1:(xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Gn.current,s!==null&&s.tag===13&&(s.flags|=16384))),tg(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){tg(n,xa);return}t=n.return;var a=Y0(n.alternate,n,qi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);Ze===0&&(Ze=5)}function tg(t,n){do{var a=j0(t.alternate,t);if(a!==null){a.flags&=32767,ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=a}while(t!==null);Ze=6,ce=null}function eg(t,n,a,s,u,f,g,E,P){t.cancelPendingCommit=null;do Rl();while(sn!==0);if((be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=qu,oi(t,a,f,g,E,P),t===He&&(ce=He=null,me=0),Yr=n,ya=t,Yi=a,tf=f,ef=u,km=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sx(Dt,function(){return sg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=Z.p,Z.p=2,g=be,be|=4;try{Z0(t,n,a)}finally{be=g,Z.p=u,z.T=s}}sn=1,ng(),ig(),ag()}}function ng(){if(sn===1){sn=0;var t=ya,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var u=be;be|=4;try{Pm(n,t);var f=_f,g=Vd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Gd(E.ownerDocument.documentElement,E)){if(P!==null&&Gu(E)){var J=P.start,ct=P.end;if(ct===void 0&&(ct=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ct,E.value.length);else{var pt=E.ownerDocument||document,tt=pt&&pt.defaultView||window;if(tt.getSelection){var rt=tt.getSelection(),Bt=E.textContent.length,Zt=Math.min(P.start,Bt),Be=P.end===void 0?Zt:Math.min(P.end,Bt);!rt.extend&&Zt>Be&&(g=Be,Be=Zt,Zt=g);var q=Hd(E,Zt),I=Hd(E,Be);if(q&&I&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==I.node||rt.focusOffset!==I.offset)){var Q=pt.createRange();Q.setStart(q.node,q.offset),rt.removeAllRanges(),Zt>Be?(rt.addRange(Q),rt.extend(I.node,I.offset)):(Q.setEnd(I.node,I.offset),rt.addRange(Q))}}}}for(pt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Fl=!!gf,_f=gf=null}finally{be=u,Z.p=s,z.T=a}}t.current=n,sn=2}}function ig(){if(sn===2){sn=0;var t=ya,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var u=be;be|=4;try{Um(t,n.alternate,n)}finally{be=u,Z.p=s,z.T=a}}sn=3}}function ag(){if(sn===4||sn===3){sn=0,et();var t=ya,n=Yr,a=Yi,s=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?sn=5:(sn=0,Yr=ya=null,rg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ma=null),yr(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{z.T=n,Z.p=u}}(Yi&3)!==0&&Rl(),Ei(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===nf?lo++:(lo=0,nf=t):lo=0,uo(0)}}function rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xs(n)))}function Rl(){return ng(),ig(),ag(),sg()}function sg(){if(sn!==5)return!1;var t=ya,n=tf;tf=0;var a=yr(Yi),s=z.T,u=Z.p;try{Z.p=32>a?32:a,z.T=null,a=ef,ef=null;var f=ya,g=Yi;if(sn=0,Yr=ya=null,Yi=0,(be&6)!==0)throw Error(r(331));var E=be;if(be|=4,Gm(f.current),Im(f,f.current,g,a),be=E,uo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{Z.p=u,z.T=s,rg(t,n)}}function og(t,n,a){n=Jn(a,n),n=Oc(t.stateNode,n,2),t=ma(t,n,2),t!==null&&(hn(t,2),Ei(t))}function Ue(t,n,a){if(t.tag===3)og(t,t,a);else for(;n!==null;){if(n.tag===3){og(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=Jn(a,t),a=lm(2),s=ma(n,a,2),s!==null&&(um(a,s,n,t),hn(s,2),Ei(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new J0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Qc=!0,u.add(a),t=ix.bind(null,t,n,a),n.then(t,t))}function ix(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(me&a)===a&&(Ze===4||Ze===3&&(me&62914560)===me&&300>ft()-Ml?(be&2)===0&&jr(t,0):Jc|=a,qr===me&&(qr=0)),Ei(t)}function lg(t,n){n===0&&(n=an()),t=ja(t,n),t!==null&&(hn(t,n),Ei(t))}function ax(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),lg(t,a)}function rx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),lg(t,a)}function sx(t,n){return qt(t,n)}var Cl=null,Kr=null,of=!1,wl=!1,lf=!1,Ta=0;function Ei(t){t!==Kr&&t.next===null&&(Kr===null?Cl=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,lx())}function uo(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Cl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,hg(s,f))}else f=me,f=Ut(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Jt(s,f)||(a=!0,hg(s,f));s=s.next}while(a);lf=!1}}function ox(){ug()}function ug(){wl=of=!1;var t=0;Ta!==0&&vx()&&(t=Ta);for(var n=ft(),a=null,s=Cl;s!==null;){var u=s.next,f=cg(s,n);f===0?(s.next=null,a===null?Cl=u:a.next=u,u===null&&(Kr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=u}sn!==0&&sn!==5||uo(t),Ta!==0&&(Ta=0)}function cg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Qt(f),E=1<<g,P=u[g];P===-1?((E&a)===0||(E&s)!==0)&&(u[g]=ke(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=me,a=Ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&U(s),yr(a)){case 2:case 8:a=Xt;break;case 32:a=Dt;break;case 268435456:a=pe;break;default:a=Dt}return s=fg.bind(null,t),a=qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&U(s),t.callbackPriority=2,t.callbackNode=null,2}function fg(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=me;return s=Ut(t,t===He?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(qm(t,s,n),cg(t,ft()),t.callbackNode!=null&&t.callbackNode===a?fg.bind(null,t):null)}function hg(t,n){if(Rl())return null;qm(t,n,!0)}function lx(){Sx(function(){(be&6)!==0?qt(dt,ox):ug()})}function uf(){if(Ta===0){var t=zr;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Ta=t}return Ta}function dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function pg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ux(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=dg((u[dn]||null).action),g=s.submitter;g&&(n=(n=g[dn]||null)?dg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Go("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ta!==0){var P=g?pg(u,g):new FormData(u);Cc(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?pg(u,g):new FormData(u),Cc(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var cf=0;cf<Wu.length;cf++){var ff=Wu[cf],cx=ff.toLowerCase(),fx=ff[0].toUpperCase()+ff.slice(1);ci(cx,"on"+fx)}ci(Wd,"onAnimationEnd"),ci(qd,"onAnimationIteration"),ci(Yd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(R0,"onTransitionRun"),ci(C0,"onTransitionStart"),ci(w0,"onTransitionCancel"),ci(jd,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ct){ko(ct)}u.currentTarget=null,f=P}else for(g=0;g<s.length;g++){if(E=s[g],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ct){ko(ct)}u.currentTarget=null,f=P}}}}function fe(t,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var s=t+"__bubble";a.has(s)||(gg(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),gg(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Dl]){t[Dl]=!0,Ht.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,hf("selectionchange",!1,n))}}function gg(t,n,a,s){switch(Wg(n)){case 2:var u=Hx;break;case 8:u=Gx;break;default:u=Cf}a=u.bind(null,n,a,t),u=void 0,!Lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=it(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Md(function(){var J=f,ct=Du(a),pt=[];t:{var tt=Zd.get(t);if(tt!==void 0){var rt=Go,Bt=t;switch(t){case"keypress":if(Fo(a)===0)break t;case"keydown":case"keyup":rt=r0;break;case"focusin":Bt="focus",rt=Pu;break;case"focusout":Bt="blur",rt=Pu;break;case"beforeblur":case"afterblur":rt=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=l0;break;case Wd:case qd:case Yd:rt=Kv;break;case jd:rt=c0;break;case"scroll":case"scrollend":rt=Wv;break;case"wheel":rt=h0;break;case"copy":case"cut":case"paste":rt=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Ad;break;case"toggle":case"beforetoggle":rt=p0}var Zt=(n&4)!==0,Be=!Zt&&(t==="scroll"||t==="scrollend"),q=Zt?tt!==null?tt+"Capture":null:tt;Zt=[];for(var I=J,Q;I!==null;){var ht=I;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||q===null||(ht=Ls(I,q),ht!=null&&Zt.push(fo(I,ht,Q))),Be)break;I=I.return}0<Zt.length&&(tt=new rt(tt,Bt,null,a,ct),pt.push({event:tt,listeners:Zt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",tt&&a!==wu&&(Bt=a.relatedTarget||a.fromElement)&&(it(Bt)||Bt[Di]))break t;if((rt||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,rt?(Bt=a.relatedTarget||a.toElement,rt=J,Bt=Bt?it(Bt):null,Bt!==null&&(Be=c(Bt),Zt=Bt.tag,Bt!==Be||Zt!==5&&Zt!==27&&Zt!==6)&&(Bt=null)):(rt=null,Bt=J),rt!==Bt)){if(Zt=Td,ht="onMouseLeave",q="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=Ad,ht="onPointerLeave",q="onPointerEnter",I="pointer"),Be=rt==null?tt:Tt(rt),Q=Bt==null?tt:Tt(Bt),tt=new Zt(ht,I+"leave",rt,a,ct),tt.target=Be,tt.relatedTarget=Q,ht=null,it(ct)===J&&(Zt=new Zt(q,I+"enter",Bt,a,ct),Zt.target=Q,Zt.relatedTarget=Be,ht=Zt),Be=ht,rt&&Bt)e:{for(Zt=dx,q=rt,I=Bt,Q=0,ht=q;ht;ht=Zt(ht))Q++;ht=0;for(var Wt=I;Wt;Wt=Zt(Wt))ht++;for(;0<Q-ht;)q=Zt(q),Q--;for(;0<ht-Q;)I=Zt(I),ht--;for(;Q--;){if(q===I||I!==null&&q===I.alternate){Zt=q;break e}q=Zt(q),I=Zt(I)}Zt=null}else Zt=null;rt!==null&&_g(pt,tt,rt,Zt,!1),Bt!==null&&Be!==null&&_g(pt,Be,Bt,Zt,!0)}}t:{if(tt=J?Tt(J):window,rt=tt.nodeName&&tt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&tt.type==="file")var ye=Od;else if(Ld(tt))if(zd)ye=T0;else{ye=y0;var Vt=M0}else rt=tt.nodeName,!rt||rt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Cu(J.elementType)&&(ye=Od):ye=E0;if(ye&&(ye=ye(t,J))){Nd(pt,ye,a,ct);break t}Vt&&Vt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&Kn(tt,"number",tt.value)}switch(Vt=J?Tt(J):window,t){case"focusin":(Ld(Vt)||Vt.contentEditable==="true")&&(Rr=Vt,Vu=J,Hs=null);break;case"focusout":Hs=Vu=Rr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Xd(pt,a,ct);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":Xd(pt,a,ct)}var re;if(Iu)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Ar?Dd(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Rd&&a.locale!=="ko"&&(Ar||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ar&&(re=yd()):(la=ct,Nu="value"in la?la.value:la.textContent,Ar=!0)),Vt=Ul(J,ge),0<Vt.length&&(ge=new bd(ge,t,null,a,ct),pt.push({event:ge,listeners:Vt}),re?ge.data=re:(re=Ud(a),re!==null&&(ge.data=re)))),(re=g0?_0(t,a):v0(t,a))&&(ge=Ul(J,"onBeforeInput"),0<ge.length&&(Vt=new bd("onBeforeInput","beforeinput",null,a,ct),pt.push({event:Vt,listeners:ge}),Vt.data=re)),ux(pt,t,J,a,ct)}mg(pt,n)})}function fo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ul(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ls(t,a),u!=null&&s.unshift(fo(t,u,f)),u=Ls(t,n),u!=null&&s.push(fo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function dx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _g(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||J===null||(P=J,u?(J=Ls(a,f),J!=null&&g.unshift(fo(a,J,P))):u||(J=Ls(a,f),J!=null&&g.push(fo(a,J,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(px,`
`).replace(mx,"")}function xg(t,n){return n=vg(n),vg(t)===n}function Pe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Er(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Er(t,""+s);break;case"className":Gt(t,"class",s);break;case"tabIndex":Gt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(t,a,s);break;case"style":xd(t,s,f);break;case"data":if(n!=="object"){Gt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",u.name,u,null),Pe(t,n,"formEncType",u.formEncType,u,null),Pe(t,n,"formMethod",u.formMethod,u,null),Pe(t,n,"formTarget",u.formTarget,u,null)):(Pe(t,n,"encType",u.encType,u,null),Pe(t,n,"method",u.method,u,null),Pe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Li);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":fe("beforetoggle",t),fe("toggle",t),_e(t,"popover",s);break;case"xlinkActuate":rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":rn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":rn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":rn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":rn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":_e(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,_e(t,a,s))}}function mf(t,n,a,s,u,f){switch(a){case"style":xd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Er(t,s):(typeof s=="number"||typeof s=="bigint")&&Er(t,""+s);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$t.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):_e(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,g,a,null)}}u&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":fe("invalid",t);var E=f=g=u=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":g=ct;break;case"checked":P=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ct,a,null)}}ui(t,f,E,P,J,g,u,!1);return;case"select":fe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Pe(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Ui(t,!!s,n,!1):a!=null&&Ui(t,!!s,a,!0);return;case"textarea":fe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Pe(t,n,g,E,a,null)}_d(t,s,u,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,P,s,a,null)}return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(s=0;s<co.length;s++)fe(co[s],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,J,s,a,null)}return;default:if(Cu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&mf(t,n,ct,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Pe(t,n,E,s,a,null))}function gx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,P=null,J=null,ct=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=pt;default:s.hasOwnProperty(rt)||Pe(t,n,rt,null,s,pt)}}for(var tt in s){var rt=s[tt];if(pt=a[tt],s.hasOwnProperty(tt)&&(rt!=null||pt!=null))switch(tt){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ct=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==pt&&Pe(t,n,tt,rt,s,pt)}}Mn(t,g,E,P,J,ct,f,u);return;case"select":rt=g=E=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,P)}for(u in s)if(f=s[u],P=a[u],s.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&Pe(t,n,u,f,s,P)}n=E,a=g,s=rt,tt!=null?Ui(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Ui(t,!!a,n,!0):Ui(t,!!a,a?[]:"",!1));return;case"textarea":rt=tt=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":tt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(t,n,g,u,s,f)}gd(t,tt,rt);return;case"option":for(var Bt in a)if(tt=a[Bt],a.hasOwnProperty(Bt)&&tt!=null&&!s.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:Pe(t,n,Bt,null,s,tt)}for(P in s)if(tt=s[P],rt=a[P],s.hasOwnProperty(P)&&tt!==rt&&(tt!=null||rt!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Pe(t,n,P,tt,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)tt=a[Zt],a.hasOwnProperty(Zt)&&tt!=null&&!s.hasOwnProperty(Zt)&&Pe(t,n,Zt,null,s,tt);for(J in s)if(tt=s[J],rt=a[J],s.hasOwnProperty(J)&&tt!==rt&&(tt!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Pe(t,n,J,tt,s,rt)}return;default:if(Cu(n)){for(var Be in a)tt=a[Be],a.hasOwnProperty(Be)&&tt!==void 0&&!s.hasOwnProperty(Be)&&mf(t,n,Be,void 0,s,tt);for(ct in s)tt=s[ct],rt=a[ct],!s.hasOwnProperty(ct)||tt===rt||tt===void 0&&rt===void 0||mf(t,n,ct,tt,s,rt);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!s.hasOwnProperty(q)&&Pe(t,n,q,null,s,tt);for(pt in s)tt=s[pt],rt=a[pt],!s.hasOwnProperty(pt)||tt===rt||tt==null&&rt==null||Pe(t,n,pt,tt,s,rt)}function Sg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&Sg(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],J=P.startTime;if(J>E)break;var ct=P.transferSize,pt=P.initiatorType;ct&&Sg(pt)&&(P=P.responseEnd,g+=ct*(P<E?1:(E-J)/(P-J)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function vx(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(Mx)}:Eg;function Mx(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function bg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ts(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ho(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[V]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&ho(t.ownerDocument.body);a=u}while(a);ts(n)}function Ag(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yx(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[V])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function Ex(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ii(t.nextSibling),t===null))return null;return t}function Rg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ii(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Tx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ii(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ef=null;function Cg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ii(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Dg(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var ai=new Map,Ug=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=Z.d;Z.d={f:bx,r:Ax,D:Rx,C:Cx,L:wx,m:Dx,X:Lx,S:Ux,M:Nx};function bx(){var t=ji.f(),n=Tl();return t||n}function Ax(t){var n=X(t);n!==null&&n.tag===5&&n.type==="form"?jp(n):ji.r(t)}var Qr=typeof document>"u"?null:document;function Lg(t,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ug.has(u)||(Ug.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),vn(n,"link",t),wt(n),s.head.appendChild(n)))}}function Rx(t){ji.D(t),Lg("dns-prefetch",t,null)}function Cx(t,n){ji.C(t,n),Lg("preconnect",t,n)}function wx(t,n,a){ji.L(t,n,a);var s=Qr;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var f=u;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ai.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(po(f))||n==="script"&&s.querySelector(mo(f))||(n=s.createElement("link"),vn(n,"link",t),wt(n),s.head.appendChild(n)))}}function Dx(t,n){ji.m(t,n);var a=Qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ai.has(f)&&(t=v({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}s=a.createElement("link"),vn(s,"link",t),wt(s),a.head.appendChild(s)}}}function Ux(t,n,a){ji.S(t,n,a);var s=Qr;if(s&&t){var u=Ct(s).hoistableStyles,f=Jr(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(po(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&Tf(t,a);var P=g=s.createElement("link");wt(P),vn(P,"link",t),P._p=new Promise(function(J,ct){P.onload=J,P.onerror=ct}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ol(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function Lx(t,n){ji.X(t,n);var a=Qr;if(a&&t){var s=Ct(a).hoistableScripts,u=$r(t),f=s.get(u);f||(f=a.querySelector(mo(u)),f||(t=v({src:t,async:!0},n),(n=ai.get(u))&&bf(t,n),f=a.createElement("script"),wt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Nx(t,n){ji.M(t,n);var a=Qr;if(a&&t){var s=Ct(a).hoistableScripts,u=$r(t),f=s.get(u);f||(f=a.querySelector(mo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ai.get(u))&&bf(t,n),f=a.createElement("script"),wt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ng(t,n,a,s){var u=(u=yt.current)?Nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=Ct(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=Ct(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(po(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||Ox(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=Ct(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+un(t)+'"'}function po(t){return'link[rel="stylesheet"]['+t+"]"}function Og(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ox(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),wt(n),t.head.appendChild(n))}function $r(t){return'[src="'+un(t)+'"]'}function mo(t){return"script[async]"+t}function zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,wt(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),wt(s),vn(s,"style",u),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":u=Jr(a.href);var f=t.querySelector(po(u));if(f)return n.state.loading|=4,n.instance=f,wt(f),f;s=Og(a),(u=ai.get(u))&&Tf(s,u),f=(t.ownerDocument||t).createElement("link"),wt(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),vn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(u=t.querySelector(mo(f)))?(n.instance=u,wt(u),u):(s=a,(u=ai.get(f))&&(s=v({},a),bf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),wt(u),vn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function Pg(t,n,a){if(zl===null){var s=new Map,u=zl=new Map;u.set(a,s)}else u=zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[V]||f[Ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Bg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ig(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Px(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Jr(s.href),f=n.querySelector(po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,wt(f);return}f=n.ownerDocument||n,s=Og(s),(u=ai.get(u))&&Tf(s,u),f=f.createElement("link"),wt(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),vn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Af=0;function Bx(t,n){return t.stylesheets&&t.count===0&&Il(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Af===0&&(Af=62500*_x());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Af?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Il(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Il(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(Ix,t),Bl=null,Pl.call(t))}function Ix(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Pl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var go={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Fx(t,n,a,s,u,f,g,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Fg(t,n,a,s,u,f,g,E,P,J,ct,pt){return t=new Fx(t,n,a,g,P,J,ct,pt,E),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),t.current=f,f.stateNode=t,n=ac(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lc(f),t}function Hg(t){return t?(t=Dr,t):Dr}function Gg(t,n,a,s,u,f){u=Hg(u),s.context===null?s.context=u:s.pendingContext=u,s=pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ma(t,s,n),a!==null&&(Nn(a,t,n),Ys(a,t,n))}function Vg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rf(t,n){Vg(t,n),(t=t.alternate)&&Vg(t,n)}function Xg(t){if(t.tag===13||t.tag===31){var n=ja(t,67108864);n!==null&&Nn(n,t,67108864),Rf(t,67108864)}}function kg(t){if(t.tag===13||t.tag===31){var n=Wn();n=Xa(n);var a=ja(t,n);a!==null&&Nn(a,t,n),Rf(t,n)}}var Fl=!0;function Hx(t,n,a,s){var u=z.T;z.T=null;var f=Z.p;try{Z.p=2,Cf(t,n,a,s)}finally{Z.p=f,z.T=u}}function Gx(t,n,a,s){var u=z.T;z.T=null;var f=Z.p;try{Z.p=8,Cf(t,n,a,s)}finally{Z.p=f,z.T=u}}function Cf(t,n,a,s){if(Fl){var u=wf(s);if(u===null)pf(t,n,s,Hl,a),qg(t,s);else if(Xx(u,t,n,a,s))s.stopPropagation();else if(qg(t,s),n&4&&-1<Vx.indexOf(t)){for(;u!==null;){var f=X(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Rt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Qt(g);E.entanglements[1]|=P,g&=~P}Ei(f),(be&6)===0&&(yl=ft()+500,uo(0))}}break;case 31:case 13:E=ja(f,2),E!==null&&Nn(E,f,2),Tl(),Rf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Hl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Du(t),Df(t)}var Hl=null;function Df(t){if(Hl=null,t=it(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function Wg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case dt:return 2;case Xt:return 8;case Dt:case Ot:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Uf=!1,Aa=null,Ra=null,Ca=null,_o=new Map,vo=new Map,wa=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function xo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=X(n),n!==null&&Xg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Xx(t,n,a,s,u){switch(n){case"focusin":return Aa=xo(Aa,t,n,a,s,u),!0;case"dragenter":return Ra=xo(Ra,t,n,a,s,u),!0;case"mouseover":return Ca=xo(Ca,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return _o.set(f,xo(_o.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,vo.set(f,xo(vo.get(f)||null,t,n,a,s,u)),!0}return!1}function Yg(t){var n=it(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ka(t.priority,function(){kg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ka(t.priority,function(){kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);wu=s,a.target.dispatchEvent(s),wu=null}else return n=X(a),n!==null&&Xg(n),t.blockedOn=a,!1;n.shift()}return!0}function jg(t,n,a){Gl(t)&&a.delete(n)}function kx(){Uf=!1,Aa!==null&&Gl(Aa)&&(Aa=null),Ra!==null&&Gl(Ra)&&(Ra=null),Ca!==null&&Gl(Ca)&&(Ca=null),_o.forEach(jg),vo.forEach(jg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kx)))}var Xl=null;function Zg(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=X(a);f!==null&&(t.splice(n,3),n-=3,Cc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ts(t){function n(P){return Vl(P,t)}Aa!==null&&Vl(Aa,t),Ra!==null&&Vl(Ra,t),Ca!==null&&Vl(Ca,t),_o.forEach(n),vo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[dn]||null;if(typeof f=="function")g||Zg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[dn]||null)E=g.formAction;else if(Df(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Zg(a)}}}function Kg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Lf(t){this._internalRoot=t}kl.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();Gg(a,s,t,n,null,null)},kl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Gg(t.current,2,null,t,null,null),Tl(),n[Di]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ds();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Yg(t)}};var Qg=e.version;if(Qg!=="19.2.8")throw Error(r(527,Qg,"19.2.8"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Wx={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Yt=Wl.inject(Wx),kt=Wl}catch{}}return Mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=am,f=rm,g=sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Fg(t,1,!1,null,null,a,s,null,u,f,g,Kg),t[Di]=n.current,df(t),new Lf(n)},Mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=am,g=rm,E=sm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Fg(t,1,!0,n,a??null,s,u,P,f,g,E,Kg),n.context=Hg(null),a=n.current,s=Wn(),s=Xa(s),u=pa(s),u.callback=null,ma(a,u,s),a=s,n.current.lanes=a,hn(n,a),Ei(n),t[Di]=n.current,df(t),new kl(n)},Mo.version="19.2.8",Mo}var o_;function iS(){if(o_)return zf.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=nS(),zf.exports}var aS=iS();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="170",rS=0,l_=1,sS=2,uv=1,oS=2,ta=3,Ha=0,Pn=1,ea=2,Ia=0,gs=1,u_=2,c_=3,f_=4,lS=5,gr=100,uS=101,cS=102,fS=103,hS=104,dS=200,pS=201,mS=202,gS=203,_h=204,vh=205,_S=206,vS=207,xS=208,SS=209,MS=210,yS=211,ES=212,TS=213,bS=214,xh=0,Sh=1,Mh=2,xs=3,yh=4,Eh=5,Th=6,bh=7,cv=0,AS=1,RS=2,Fa=0,CS=1,wS=2,DS=3,US=4,LS=5,NS=6,OS=7,fv=300,Ss=301,Ms=302,Ah=303,Rh=304,yu=306,Ch=1e3,vr=1001,wh=1002,vi=1003,zS=1004,ql=1005,bi=1006,Ff=1007,xr=1008,ra=1009,hv=1010,dv=1011,Do=1012,sd=1013,Sr=1014,na=1015,Uo=1016,od=1017,ld=1018,ys=1020,pv=35902,mv=1021,gv=1022,_i=1023,_v=1024,vv=1025,_s=1026,Es=1027,xv=1028,ud=1029,Sv=1030,cd=1031,fd=1033,pu=33776,mu=33777,gu=33778,_u=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Oh=36196,zh=37492,Ph=37496,Bh=37808,Ih=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,Xh=37814,kh=37815,Wh=37816,qh=37817,Yh=37818,jh=37819,Zh=37820,Kh=37821,vu=36492,Qh=36494,Jh=36495,Mv=36283,$h=36284,td=36285,ed=36286,PS=3200,BS=3201,yv=0,IS=1,Ba="",si="srgb",bs="srgb-linear",Eu="linear",Ie="srgb",es=7680,h_=519,FS=512,HS=513,GS=514,Ev=515,VS=516,XS=517,kS=518,WS=519,d_=35044,p_="300 es",ia=2e3,Su=2001;class As{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,nd=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function zn(o,e,i){return Math.max(e,Math.min(i,o))}function qS(o,e){return(o%e+e)%e}function Gf(o,e,i){return(1-i)*o+i*e}function yo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],v=r[7],S=r[2],y=r[5],b=r[8],R=l[0],M=l[3],_=l[6],B=l[1],L=l[4],w=l[7],$=l[2],F=l[5],O=l[8];return c[0]=h*R+d*B+m*$,c[3]=h*M+d*L+m*F,c[6]=h*_+d*w+m*O,c[1]=p*R+x*B+v*$,c[4]=p*M+x*L+v*F,c[7]=p*_+x*w+v*O,c[2]=S*R+y*B+b*$,c[5]=S*M+y*L+b*F,c[8]=S*_+y*w+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-r*c*x+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=x*h-d*p,S=d*m-x*c,y=p*c-h*m,b=i*v+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-x*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=y*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vf.makeScale(e,i)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new se;function Tv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function YS(){const o=Mu("canvas");return o.style.display="block",o}const m_={};function Co(o){o in m_||(m_[o]=!0,console.warn(o))}function jS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function ZS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Me={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Ie&&(o.r=aa(o.r),o.g=aa(o.g),o.b=aa(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Ie&&(o.r=vs(o.r),o.g=vs(o.g),o.b=vs(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ba?Eu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const g_=[.64,.33,.3,.6,.15,.06],__=[.2126,.7152,.0722],v_=[.3127,.329],x_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[bs]:{primaries:g_,whitePoint:v_,transfer:Eu,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:__,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:g_,whitePoint:v_,transfer:Ie,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:__,outputColorSpaceConfig:{drawingBufferColorSpace:si}}});let ns;class QS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=Mu("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=aa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Xf(l[h].image)):c.push(Xf(l[h]))}else c=Xf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?QS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class Bn extends As{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=vr,l=vr,c=bi,h=xr,d=_i,m=ra,p=Bn.DEFAULT_ANISOTROPY,x=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Lo(),this.name="",this.source=new bv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=fv;Bn.DEFAULT_ANISOTROPY=1;class Fe{constructor(e=0,i=0,r=0,l=1){Fe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],v=m[8],S=m[1],y=m[5],b=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(v-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(y+1)/2,$=(_+1)/2,F=(x+S)/4,O=(v+R)/4,k=(b+M)/4;return L>w&&L>$?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=F/r,c=O/r):w>$?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=F/l,c=k/l):$<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt($),r=O/c,l=k/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-b)*(M-b)+(v-R)*(v-R)+(S-x)*(S-x));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(v-R)/B,this.z=(S-x)/B,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends As{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Fe(0,0,e,i),this.scissorTest=!1,this.viewport=new Fe(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new bv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends tM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Av extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],v=r[l+3];const S=c[h+0],y=c[h+1],b=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==S||p!==y||x!==b){let M=1-d;const _=m*S+p*y+x*b+v*R,B=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const $=Math.sqrt(L),F=Math.atan2($,_*B);M=Math.sin(M*F)/$,d=Math.sin(d*F)/$}const w=d*B;if(m=m*M+S*w,p=p*M+y*w,x=x*M+b*w,v=v*M+R*w,M===1-d){const $=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=$,p*=$,x*=$,v*=$}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],v=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+x*v+m*y-p*S,e[i+1]=m*b+x*S+p*v-d*y,e[i+2]=p*b+x*y+d*S-m*v,e[i+3]=x*b-d*v-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),v=d(c/2),S=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*x*v+p*y*b,this._y=p*y*v-S*x*b,this._z=p*x*b+S*y*v,this._w=p*x*v-S*y*b;break;case"YXZ":this._x=S*x*v+p*y*b,this._y=p*y*v-S*x*b,this._z=p*x*b-S*y*v,this._w=p*x*v+S*y*b;break;case"ZXY":this._x=S*x*v-p*y*b,this._y=p*y*v+S*x*b,this._z=p*x*b+S*y*v,this._w=p*x*v-S*y*b;break;case"ZYX":this._x=S*x*v-p*y*b,this._y=p*y*v+S*x*b,this._z=p*x*b-S*y*v,this._w=p*x*v+S*y*b;break;case"YZX":this._x=S*x*v+p*y*b,this._y=p*y*v+S*x*b,this._z=p*x*b-S*y*v,this._w=p*x*v-S*y*b;break;case"XZY":this._x=S*x*v-p*y*b,this._y=p*y*v-S*x*b,this._z=p*x*b+S*y*v,this._w=p*x*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(x-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-r*p,this._z=c*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),v=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),x=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*x,this.y=r+m*x+d*p-c*v,this.z=l+m*v+c*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new K,M_=new No;class Oo{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),jl.subVectors(this.max,Eo),is.subVectors(e.a,Eo),as.subVectors(e.b,Eo),rs.subVectors(e.c,Eo),Ua.subVectors(as,is),La.subVectors(rs,as),or.subVectors(is,rs);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-or.z,or.y,Ua.z,0,-Ua.x,La.z,0,-La.x,or.z,0,-or.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-or.y,or.x,0];return!Wf(i,is,as,rs,jl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,is,as,rs,jl))?!1:(Zl.crossVectors(Ua,La),i=[Zl.x,Zl.y,Zl.z],Wf(i,is,as,rs,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new K,new K,new K,new K,new K,new K,new K,new K],di=new K,Yl=new Oo,is=new K,as=new K,rs=new K,Ua=new K,La=new K,or=new K,Eo=new K,jl=new K,Zl=new K,lr=new K;function Wf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){lr.fromArray(o,c);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=e.dot(lr),p=i.dot(lr),x=r.dot(lr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const nM=new Oo,To=new K,qf=new K;class hd{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(qf)),this.expandByPoint(To.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new K,Yf=new K,Kl=new K,Na=new K,jf=new K,Ql=new K,Zf=new K;class iM{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yf.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Yf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Na.dot(this.direction),m=-Na.dot(Kl),p=Na.lengthSq(),x=Math.abs(1-h*h);let v,S,y,b;if(x>0)if(v=h*m-d,S=h*d-m,b=c*x,v>=0)if(S>=-b)if(S<=b){const R=1/x;v*=R,S*=R,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Yf).addScaledVector(Kl,S),y}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,c){jf.subVectors(i,e),Ql.subVectors(r,e),Zf.crossVectors(jf,Ql);let h=this.direction.dot(Zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const m=d*this.direction.dot(Ql.crossVectors(Na,Ql));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Na));if(p<0||m+p>h)return null;const x=-d*Na.dot(Zf);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,i,r,l,c,h,d,m,p,x,v,S,y,b,R,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,x,v,S,y,b,R,M)}set(e,i,r,l,c,h,d,m,p,x,v,S,y,b,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=v,_[14]=S,_[3]=y,_[7]=b,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),c=1/ss.setFromMatrixColumn(e,1).length(),h=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*x,y=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,y=m*v,b=p*x,R=p*v;i[0]=S+R*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=y*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,y=m*v,b=p*x,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,y=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=b*p-y,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-S*v,i[8]=b*v+y,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=y*v+b,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=S*v+R,i[5]=h*x,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*x,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,rM)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Oa.crossVectors(r,qn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Oa.crossVectors(r,qn)),Oa.normalize(),Jl.crossVectors(qn,Oa),l[0]=Oa.x,l[4]=Jl.x,l[8]=qn.x,l[1]=Oa.y,l[5]=Jl.y,l[9]=qn.y,l[2]=Oa.z,l[6]=Jl.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],v=r[5],S=r[9],y=r[13],b=r[2],R=r[6],M=r[10],_=r[14],B=r[3],L=r[7],w=r[11],$=r[15],F=l[0],O=l[4],k=l[8],D=l[12],C=l[1],H=l[5],lt=l[9],st=l[13],mt=l[2],gt=l[6],z=l[10],Z=l[14],j=l[3],St=l[7],Et=l[11],N=l[15];return c[0]=h*F+d*C+m*mt+p*j,c[4]=h*O+d*H+m*gt+p*St,c[8]=h*k+d*lt+m*z+p*Et,c[12]=h*D+d*st+m*Z+p*N,c[1]=x*F+v*C+S*mt+y*j,c[5]=x*O+v*H+S*gt+y*St,c[9]=x*k+v*lt+S*z+y*Et,c[13]=x*D+v*st+S*Z+y*N,c[2]=b*F+R*C+M*mt+_*j,c[6]=b*O+R*H+M*gt+_*St,c[10]=b*k+R*lt+M*z+_*Et,c[14]=b*D+R*st+M*Z+_*N,c[3]=B*F+L*C+w*mt+$*j,c[7]=B*O+L*H+w*gt+$*St,c[11]=B*k+L*lt+w*z+$*Et,c[15]=B*D+L*st+w*Z+$*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],v=e[6],S=e[10],y=e[14],b=e[3],R=e[7],M=e[11],_=e[15];return b*(+c*m*v-l*p*v-c*d*S+r*p*S+l*d*y-r*m*y)+R*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*x-c*m*x)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*x-r*p*x)+_*(-l*d*x-i*m*v+i*d*S+l*h*v-r*h*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=e[9],S=e[10],y=e[11],b=e[12],R=e[13],M=e[14],_=e[15],B=v*M*p-R*S*p+R*m*y-d*M*y-v*m*_+d*S*_,L=b*S*p-x*M*p-b*m*y+h*M*y+x*m*_-h*S*_,w=x*R*p-b*v*p+b*d*y-h*R*y-x*d*_+h*v*_,$=b*v*m-x*R*m-b*d*S+h*R*S+x*d*M-h*v*M,F=i*B+r*L+l*w+c*$;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=B*O,e[1]=(R*S*c-v*M*c-R*l*y+r*M*y+v*l*_-r*S*_)*O,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*_+r*m*_)*O,e[3]=(v*m*c-d*S*c-v*l*p+r*S*p+d*l*y-r*m*y)*O,e[4]=L*O,e[5]=(x*M*c-b*S*c+b*l*y-i*M*y-x*l*_+i*S*_)*O,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*_-i*m*_)*O,e[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*y+i*m*y)*O,e[8]=w*O,e[9]=(b*v*c-x*R*c-b*r*y+i*R*y+x*r*_-i*v*_)*O,e[10]=(h*R*c-b*d*c+b*r*p-i*R*p-h*r*_+i*d*_)*O,e[11]=(x*d*c-h*v*c-x*r*p+i*v*p+h*r*y-i*d*y)*O,e[12]=$*O,e[13]=(x*R*l-b*v*l+b*r*S-i*R*S-x*r*M+i*v*M)*O,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*O,e[15]=(h*v*l-x*d*l+x*r*m-i*v*m-h*r*S+i*d*S)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,x=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,v=d+d,S=c*p,y=c*x,b=c*v,R=h*x,M=h*v,_=d*v,B=m*p,L=m*x,w=m*v,$=r.x,F=r.y,O=r.z;return l[0]=(1-(R+_))*$,l[1]=(y+w)*$,l[2]=(b-L)*$,l[3]=0,l[4]=(y-w)*F,l[5]=(1-(S+_))*F,l[6]=(M+B)*F,l[7]=0,l[8]=(b+L)*O,l[9]=(M-B)*O,l[10]=(1-(S+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/c,x=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ia){const m=this.elements,p=2*c/(i-e),x=2*c/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,b;if(d===ia)y=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Su)y=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ia){const m=this.elements,p=1/(i-e),x=1/(r-l),v=1/(h-c),S=(i+e)*p,y=(r+l)*x;let b,R;if(d===ia)b=(h+c)*v,R=-2*v;else if(d===Su)b=c*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*x,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new K,pi=new qe,aM=new K(0,0,0),rM=new K(1,1,1),Oa=new K,Jl=new K,qn=new K,y_=new qe,E_=new No;class wi{constructor(e=0,i=0,r=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(zn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-zn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(zn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-zn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const T_=new K,os=new No,Qi=new qe,$l=new K,bo=new K,oM=new K,lM=new No,b_=new K(1,0,0),A_=new K(0,1,0),R_=new K(0,0,1),C_={type:"added"},uM={type:"removed"},ls={type:"childadded",child:null},Kf={type:"childremoved",child:null};class In extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new K,i=new wi,r=new No,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new se}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(A_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(A_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(bo,$l,this.up):Qi.lookAt($l,bo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(Qi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(uM),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}In.DEFAULT_UP=new K(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,Ji=new K,Qf=new K,$i=new K,us=new K,cs=new K,w_=new K,Jf=new K,$f=new K,th=new K,eh=new Fe,nh=new Fe,ih=new Fe;class gi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){mi.subVectors(l,i),Ji.subVectors(r,i),Qf.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(Ji),m=mi.dot(Qf),p=Ji.dot(Ji),x=Ji.dot(Qf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(p*m-d*x)*S,b=(h*x-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(eh,c.x),h.addScaledVector(nh,c.y),h.addScaledVector(ih,c.z),h}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),Ji.subVectors(e,i),mi.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;us.subVectors(l,r),cs.subVectors(c,r),Jf.subVectors(e,r);const m=us.dot(Jf),p=cs.dot(Jf);if(m<=0&&p<=0)return i.copy(r);$f.subVectors(e,l);const x=us.dot($f),v=cs.dot($f);if(x>=0&&v<=x)return i.copy(l);const S=m*v-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(us,h);th.subVectors(e,c);const y=us.dot(th),b=cs.dot(th);if(b>=0&&y<=b)return i.copy(c);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(cs,d);const M=x*b-y*v;if(M<=0&&v-x>=0&&y-b>=0)return w_.subVectors(c,l),d=(v-x)/(v-x+(y-b)),i.copy(l).addScaledVector(w_,d);const _=1/(M+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},tu={h:0,s:0,l:0};function ah(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Me.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Me.workingColorSpace){return this.r=e,this.g=i,this.b=r,Me.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Me.workingColorSpace){if(e=qS(e,1),i=zn(i,0,1),r=zn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=ah(h,c,e+1/3),this.g=ah(h,c,e),this.b=ah(h,c,e-1/3)}return Me.toWorkingColorSpace(this,l),this}setStyle(e,i=si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=Cv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Me.fromWorkingColorSpace(Tn.copy(this),e),Math.round(zn(Tn.r*255,0,255))*65536+Math.round(zn(Tn.g*255,0,255))*256+Math.round(zn(Tn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Me.workingColorSpace){Me.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,c=Tn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Me.workingColorSpace){return Me.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=si){Me.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,r=Tn.g,l=Tn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(tu);const r=Gf(za.h,tu.h,i),l=Gf(za.s,tu.s,i),c=Gf(za.l,tu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Te;Te.NAMES=Cv;let cM=0;class zo extends As{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Lo(),this.name="",this.blending=gs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wv extends zo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new K,eu=new Ae;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=d_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),e}}class Dv extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Uv extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ci extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fM=0;const ri=new qe,rh=new In,fs=new K,Yn=new Oo,Ao=new Oo,fn=new K;class Va extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?Uv:Dv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ci(r,3))}else{for(let r=0,l=i.count;r<l;r++){const c=e[r];i.setXYZ(r,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Yn.min,Ao.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Ao.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Ao.min),Yn.expandByPoint(Ao.max))}Yn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)fn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(fn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)fn.fromBufferAttribute(d,p),m&&(fs.fromBufferAttribute(e,p),fn.add(fs)),l=Math.max(l,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new K,m[k]=new K;const p=new K,x=new K,v=new K,S=new Ae,y=new Ae,b=new Ae,R=new K,M=new K;function _(k,D,C){p.fromBufferAttribute(r,k),x.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),S.fromBufferAttribute(c,k),y.fromBufferAttribute(c,D),b.fromBufferAttribute(c,C),x.sub(p),v.sub(p),y.sub(S),b.sub(S);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(x,-b.x).multiplyScalar(H),d[k].add(R),d[D].add(R),d[C].add(R),m[k].add(M),m[D].add(M),m[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let k=0,D=B.length;k<D;++k){const C=B[k],H=C.start,lt=C.count;for(let st=H,mt=H+lt;st<mt;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new K,w=new K,$=new K,F=new K;function O(k){$.fromBufferAttribute(l,k),F.copy($);const D=d[k];L.copy(D),L.sub($.multiplyScalar($.dot(D))).normalize(),w.crossVectors(F,D);const H=w.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,H)}for(let k=0,D=B.length;k<D;++k){const C=B[k],H=C.start,lt=C.count;for(let st=H,mt=H+lt;st<mt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,x=new K,v=new K;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),R=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(x),m.add(x),p.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)fn.fromBufferAttribute(e,i),fn.normalize(),e.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,v=d.normalized,S=new p.constructor(m.length*x);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*x;for(let _=0;_<x;_++)S[b++]=p[y++]}return new Ri(S,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Va,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,v=p.length;x<v;x++){const S=p[x],y=e(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],v=c[p];for(let S=0,y=v.length;S<y;S++)x.push(v[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new qe,ur=new iM,nu=new hd,U_=new K,iu=new K,au=new K,ru=new K,sh=new K,su=new K,L_=new K,ou=new K;class Ai extends In{constructor(e=new Va,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){su.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],v=c[m];x!==0&&(sh.fromBufferAttribute(v,e),h?su.addScaledVector(sh,x):su.addScaledVector(sh.sub(i),x))}i.add(su)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(c),ur.copy(e.ray).recast(e.near),!(nu.containsPoint(ur.origin)===!1&&(ur.intersectSphere(nu,U_)===null||ur.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(D_.copy(c).invert(),ur.copy(e.ray).applyMatrix4(D_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=B,$=L;w<$;w+=3){const F=d.getX(w),O=d.getX(w+1),k=d.getX(w+2);l=lu(this,_,e,r,p,x,v,F,O,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const B=d.getX(M),L=d.getX(M+1),w=d.getX(M+2);l=lu(this,h,e,r,p,x,v,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=B,$=L;w<$;w+=3){const F=w,O=w+1,k=w+2;l=lu(this,_,e,r,p,x,v,F,O,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const B=M,L=M+1,w=M+2;l=lu(this,h,e,r,p,x,v,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function hM(o,e,i,r,l,c,h,d){let m;if(e.side===Pn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ha,d),m===null)return null;ou.copy(d),ou.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ou);return p<i.near||p>i.far?null:{distance:p,point:ou.clone(),object:o}}function lu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,iu),o.getVertexPosition(m,au),o.getVertexPosition(p,ru);const x=hM(o,e,i,r,iu,au,ru,L_);if(x){const v=new K;gi.getBarycoord(L_,iu,au,ru,v),l&&(x.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new Ae)),c&&(x.uv1=gi.getInterpolatedAttribute(c,d,m,p,v,new Ae)),h&&(x.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};gi.getNormal(iu,au,ru,S.normal),x.face=S,x.barycoord=v}return x}class Po extends Va{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(x,3)),this.setAttribute("uv",new Ci(v,2));function b(R,M,_,B,L,w,$,F,O,k,D){const C=w/O,H=$/k,lt=w/2,st=$/2,mt=F/2,gt=O+1,z=k+1;let Z=0,j=0;const St=new K;for(let Et=0;Et<z;Et++){const N=Et*H-st;for(let nt=0;nt<gt;nt++){const xt=nt*C-lt;St[R]=xt*B,St[M]=N*L,St[_]=mt,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[_]=F>0?1:-1,x.push(St.x,St.y,St.z),v.push(nt/O),v.push(1-Et/k),Z+=1}}for(let Et=0;Et<k;Et++)for(let N=0;N<O;N++){const nt=S+N+gt*Et,xt=S+N+gt*(Et+1),Y=S+(N+1)+gt*(Et+1),ut=S+(N+1)+gt*Et;m.push(nt,xt,ut),m.push(xt,Y,ut),j+=6}d.addGroup(y,j,D),y+=j,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function dM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Lv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Me.workingColorSpace}const pM={clone:Ts,merge:An};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends zo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new K,N_=new Ae,O_=new Ae;class jn extends Nv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ds=1;class _M extends In{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new jn(hs,ds,e,i);l.layers=this.layers,this.add(l);const c=new jn(hs,ds,e,i);c.layers=this.layers,this.add(c);const h=new jn(hs,ds,e,i);h.layers=this.layers,this.add(h);const d=new jn(hs,ds,e,i);d.layers=this.layers,this.add(d);const m=new jn(hs,ds,e,i);m.layers=this.layers,this.add(m);const p=new jn(hs,ds,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(v,S,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ov extends Bn{constructor(e,i,r,l,c,h,d,m,p,x){e=e!==void 0?e:[],i=i!==void 0?i:Ss,super(e,i,r,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ov(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Po(5,5,5),c=new Ga({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Ia});c.uniforms.tEquirect.value=i;const h=new Ai(l,c),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=bi),new _M(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const oh=new K,xM=new K,SM=new se;class pr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=oh.subVectors(r,i).cross(xM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||SM.getNormalMatrix(e),l=this.coplanarPoint(oh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new hd,uu=new K;class dd{constructor(e=new pr,i=new pr,r=new pr,l=new pr,c=new pr,h=new pr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],x=l[5],v=l[6],S=l[7],y=l[8],b=l[9],R=l[10],M=l[11],_=l[12],B=l[13],L=l[14],w=l[15];if(r[0].setComponents(m-c,S-p,M-y,w-_).normalize(),r[1].setComponents(m+c,S+p,M+y,w+_).normalize(),r[2].setComponents(m+h,S+x,M+b,w+B).normalize(),r[3].setComponents(m-h,S-x,M-b,w-B).normalize(),r[4].setComponents(m-d,S-v,M-R,w-L).normalize(),i===ia)r[5].setComponents(m+d,S+v,M+R,w+L).normalize();else if(i===Su)r[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uu.x=l.normal.x>0?e.max.x:e.min.x,uu.y=l.normal.y>0?e.max.y:e.min.y,uu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function MM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<v.length;y++){const b=v[S],R=v[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,v[S]=R)}v.length=S+1;for(let y=0,b=v.length;y<b;y++){const R=v[y];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}class Tu extends Va{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,v=e/d,S=i/m,y=[],b=[],R=[],M=[];for(let _=0;_<x;_++){const B=_*S-h;for(let L=0;L<p;L++){const w=L*v-c;b.push(w,-B,0),R.push(0,0,1),M.push(L/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const L=B+p*_,w=B+p*(_+1),$=B+1+p*(_+1),F=B+1+p*_;y.push(L,w,F),y.push(w,$,F)}this.setIndex(y),this.setAttribute("position",new Ci(b,3)),this.setAttribute("normal",new Ci(R,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,My=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:yM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:bM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:wM,batching_pars_vertex:DM,batching_vertex:UM,begin_vertex:LM,beginnormal_vertex:NM,bsdfs:OM,iridescence_fragment:zM,bumpmap_pars_fragment:PM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:XM,color_vertex:kM,common:WM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:jM,displacementmap_vertex:ZM,emissivemap_fragment:KM,emissivemap_pars_fragment:QM,colorspace_fragment:JM,colorspace_pars_fragment:$M,envmap_fragment:ty,envmap_common_pars_fragment:ey,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:ay,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:oy,fog_pars_fragment:ly,gradientmap_pars_fragment:uy,lightmap_pars_fragment:cy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:hy,lights_pars_begin:dy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:Sy,lights_fragment_begin:My,lights_fragment_maps:yy,lights_fragment_end:Ey,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ry,map_fragment:Cy,map_pars_fragment:wy,map_particle_fragment:Dy,map_particle_pars_fragment:Uy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Ny,morphinstance_vertex:Oy,morphcolor_vertex:zy,morphnormal_vertex:Py,morphtarget_pars_vertex:By,morphtarget_vertex:Iy,normal_fragment_begin:Fy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Vy,normal_vertex:Xy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:jy,opaque_fragment:Zy,packing:Ky,premultiplied_alpha_fragment:Qy,project_vertex:Jy,dithering_fragment:$y,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:uE,skinnormal_vertex:cE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:SE,background_vert:ME,background_frag:yE,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:RE,depth_frag:CE,distanceRGBA_vert:wE,distanceRGBA_frag:DE,equirect_vert:UE,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:zE,meshbasic_frag:PE,meshlambert_vert:BE,meshlambert_frag:IE,meshmatcap_vert:FE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:XE,meshphong_frag:kE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Lt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:An([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:An([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:An([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:An([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:An([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:An([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:An([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:An([Lt.lights,Lt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ti.physical={uniforms:An([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const cu={r:0,b:0,g:0},fr=new wi,eT=new qe;function nT(o,e,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,x,v=null,S=0,y=null;function b(B){let L=B.isScene===!0?B.background:null;return L&&L.isTexture&&(L=(B.backgroundBlurriness>0?i:e).get(L)),L}function R(B){let L=!1;const w=b(B);w===null?_(d,m):w&&w.isColor&&(_(w,1),L=!0);const $=o.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,h):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,L){const w=b(L);w&&(w.isCubeTexture||w.mapping===yu)?(x===void 0&&(x=new Ai(new Po(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:Ts(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function($,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),fr.copy(L.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),x.material.uniforms.envMap.value=w,x.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(fr)),x.material.toneMapped=Me.getTransfer(w.colorSpace)!==Ie,(v!==w||S!==w.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,v=w,S=w.version,y=o.toneMapping),x.layers.enableAll(),B.unshift(x,x.geometry,x.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Ai(new Tu(2,2),new Ga({name:"BackgroundMaterial",uniforms:Ts(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Me.getTransfer(w.colorSpace)!==Ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||S!==w.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=w,S=w.version,y=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function _(B,L){B.getRGB(cu,Lv(o)),r.buffers.color.setClear(cu.r,cu.g,cu.b,L,h)}return{getClearColor:function(){return d},setClearColor:function(B,L=1){d.set(B),m=L,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,_(d,m)},render:R,addToRenderList:M}}function iT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(C,H,lt,st,mt){let gt=!1;const z=v(st,lt,H);c!==z&&(c=z,p(c.object)),gt=y(C,st,lt,mt),gt&&b(C,st,lt,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(gt||h)&&(h=!1,w(C,H,lt,st),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function v(C,H,lt){const st=lt.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let gt=mt[H.id];gt===void 0&&(gt={},mt[H.id]=gt);let z=gt[st];return z===void 0&&(z=S(m()),gt[st]=z),z}function S(C){const H=[],lt=[],st=[];for(let mt=0;mt<i;mt++)H[mt]=0,lt[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,H,lt,st){const mt=c.attributes,gt=H.attributes;let z=0;const Z=lt.getAttributes();for(const j in Z)if(Z[j].location>=0){const Et=mt[j];let N=gt[j];if(N===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Et===void 0||Et.attribute!==N||N&&Et.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==st}function b(C,H,lt,st){const mt={},gt=H.attributes;let z=0;const Z=lt.getAttributes();for(const j in Z)if(Z[j].location>=0){let Et=gt[j];Et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const N={};N.attribute=Et,Et&&Et.data&&(N.data=Et.data),mt[j]=N,z++}c.attributes=mt,c.attributesNum=z,c.index=st}function R(){const C=c.newAttributes;for(let H=0,lt=C.length;H<lt;H++)C[H]=0}function M(C){_(C,0)}function _(C,H){const lt=c.newAttributes,st=c.enabledAttributes,mt=c.attributeDivisors;lt[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),mt[C]!==H&&(o.vertexAttribDivisor(C,H),mt[C]=H)}function B(){const C=c.newAttributes,H=c.enabledAttributes;for(let lt=0,st=H.length;lt<st;lt++)H[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),H[lt]=0)}function L(C,H,lt,st,mt,gt,z){z===!0?o.vertexAttribIPointer(C,H,lt,mt,gt):o.vertexAttribPointer(C,H,lt,st,mt,gt)}function w(C,H,lt,st){R();const mt=st.attributes,gt=lt.getAttributes(),z=H.defaultAttributeValues;for(const Z in gt){const j=gt[Z];if(j.location>=0){let St=mt[Z];if(St===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const Et=St.normalized,N=St.itemSize,nt=e.get(St);if(nt===void 0)continue;const xt=nt.buffer,Y=nt.type,ut=nt.bytesPerElement,yt=Y===o.INT||Y===o.UNSIGNED_INT||St.gpuType===sd;if(St.isInterleavedBufferAttribute){const vt=St.data,Ft=vt.stride,It=St.offset;if(vt.isInstancedInterleavedBuffer){for(let ee=0;ee<j.locationSize;ee++)_(j.location+ee,vt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ee=0;ee<j.locationSize;ee++)M(j.location+ee);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ee=0;ee<j.locationSize;ee++)L(j.location+ee,N/j.locationSize,Y,Et,Ft*ut,(It+N/j.locationSize*ee)*ut,yt)}else{if(St.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)_(j.location+vt,St.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let vt=0;vt<j.locationSize;vt++)M(j.location+vt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let vt=0;vt<j.locationSize;vt++)L(j.location+vt,N/j.locationSize,Y,Et,N*ut,N/j.locationSize*vt*ut,yt)}}else if(z!==void 0){const Et=z[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}B()}function $(){k();for(const C in r){const H=r[C];for(const lt in H){const st=H[lt];for(const mt in st)x(st[mt].object),delete st[mt];delete H[lt]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const lt in H){const st=H[lt];for(const mt in st)x(st[mt].object),delete st[mt];delete H[lt]}delete r[C.id]}function O(C){for(const H in r){const lt=r[H];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const mt in st)x(st[mt].object),delete st[mt];delete lt[C.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:$,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function aT(o,e,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,v){v!==0&&(o.drawArraysInstanced(r,p,x,v),i.update(x,r,v))}function d(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let y=0;for(let b=0;b<v;b++)y+=x[b];i.update(y,r,1)}function m(p,x,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,v);let b=0;for(let R=0;R<v;R++)b+=x[R]*S[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function rT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==_i&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ra&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==na&&!k)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),$=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:$,maxSamples:F}}function sT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new pr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=x(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?x(null):p();else{const B=c?0:r,L=B*4;let w=_.clippingState||null;m.value=w,w=x(b,S,L,y);for(let $=0;$!==L;++$)w[$]=i[$];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,S,y,b){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const _=y+R*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let L=0,w=y;L!==R;++L,w+=4)h.copy(v[L]).applyMatrix4(B,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function oT(o){let e=new WeakMap;function i(h,d){return d===Ah?h.mapping=Ss:d===Rh&&(h.mapping=Ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class lT extends Nv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ms=4,z_=[.125,.215,.35,.446,.526,.582],_r=20,lh=new lT,P_=new Te;let uh=null,ch=0,fh=0,hh=!1;const mr=(1+Math.sqrt(5))/2,ps=1/mr,B_=[new K(-mr,ps,0),new K(mr,ps,0),new K(-ps,0,mr),new K(ps,0,mr),new K(0,mr,-ps),new K(0,mr,ps),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,ch,fh),this._renderer.xr.enabled=hh,e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Uo,format:_i,colorSpace:bs,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(c)),this._blurMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,lh)}_sceneToCubeUV(e,i,r,l){const d=new jn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(P_),x.toneMapping=Fa,x.autoClear=!1;const y=new wv({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),b=new Ai(new Po,y);let R=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,R=!0):(y.color.copy(P_),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;fu(l,B*L,_>2?L:0,L,L),x.setRenderTarget(l),R&&x.render(b,d),x.render(e,d)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=S,x.autoClear=v,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ss||e.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;fu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,lh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=B_[(l-c-1)%B_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new Ai(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*_r-1),R=c/b,M=isFinite(c)?1+Math.floor(x*R):_r;M>_r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_r}`);const _=[];let B=0;for(let O=0;O<_r;++O){const k=O/R,D=Math.exp(-k*k/2);_.push(D),O===0?B+=D:O<M&&(B+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=b,S.mipInt.value=L-r;const w=this._sizeLods[l],$=3*w*(l>L-ms?l-L+ms:0),F=4*(this._cubeSize-w);fu(i,$,F,3*w,2*w),m.setRenderTarget(i),m.render(v,lh)}}function uT(o){const e=[],i=[],r=[];let l=o;const c=o-ms+1+z_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ms?m=z_[h-o+ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),x=-p,v=1+p,S=[x,x,v,x,v,v,x,x,v,v,x,v],y=6,b=6,R=3,M=2,_=1,B=new Float32Array(R*b*y),L=new Float32Array(M*b*y),w=new Float32Array(_*b*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,k=F>2?0:-1,D=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];B.set(D,R*b*F),L.set(S,M*b*F);const C=[F,F,F,F,F,F];w.set(C,_*b*F)}const $=new Va;$.setAttribute("position",new Ri(B,R)),$.setAttribute("uv",new Ri(L,M)),$.setAttribute("faceIndex",new Ri(w,_)),e.push($),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function F_(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function cT(o,e,i){const r=new Float32Array(_r),l=new K(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function H_(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function G_(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,x=m===Ss||m===Ms;if(p||x){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new I_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Co("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function dT(o,e,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const R=S.morphAttributes[b];for(let M=0,_=R.length;M<_;M++)e.remove(R[M])}S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const y=v.morphAttributes;for(const b in y){const R=y[b];for(let M=0,_=R.length;M<_;M++)e.update(R[M],o.ARRAY_BUFFER)}}function p(v){const S=[],y=v.index,b=v.attributes.position;let R=0;if(y!==null){const B=y.array;R=y.version;for(let L=0,w=B.length;L<w;L+=3){const $=B[L+0],F=B[L+1],O=B[L+2];S.push($,F,F,O,O,$)}}else if(b!==void 0){const B=b.array;R=b.version;for(let L=0,w=B.length/3-1;L<w;L+=3){const $=L+0,F=L+1,O=L+2;S.push($,F,F,O,O,$)}}else return;const M=new(Tv(S)?Uv:Dv)(S,1);M.version=R;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function x(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function pT(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,S*h,b),i.update(y,r,b))}function x(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(S,y,b,R){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,R,0,b);let _=0;for(let B=0;B<b;B++)_+=y[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function mT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function gT(o,e,i){const r=new WeakMap,l=new Fe;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),M===!0&&(w=3);let $=d.attributes.position.count*w,F=1;$>e.maxTextureSize&&(F=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*F*4*v),k=new Av(O,$,F,v);k.type=na,k.needsUpdate=!0;const D=w*4;for(let H=0;H<v;H++){const lt=_[H],st=B[H],mt=L[H],gt=$*F*4*H;for(let z=0;z<lt.count;z++){const Z=z*D;b===!0&&(l.fromBufferAttribute(lt,z),O[gt+Z+0]=l.x,O[gt+Z+1]=l.y,O[gt+Z+2]=l.z,O[gt+Z+3]=0),R===!0&&(l.fromBufferAttribute(st,z),O[gt+Z+4]=l.x,O[gt+Z+5]=l.y,O[gt+Z+6]=l.z,O[gt+Z+7]=0),M===!0&&(l.fromBufferAttribute(mt,z),O[gt+Z+8]=l.x,O[gt+Z+9]=l.y,O[gt+Z+10]=l.z,O[gt+Z+11]=mt.itemSize===4?l.w:1)}}S={count:v,texture:k,size:new Ae($,F)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function _T(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,v=e.get(m,x);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class Pv extends Bn{constructor(e,i,r,l,c,h,d,m,p,x=_s){if(x!==_s&&x!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===_s&&(r=Sr),r===void 0&&x===Es&&(r=ys),super(null,l,c,h,d,m,x,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:vi,this.minFilter=m!==void 0?m:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Bv=new Bn,V_=new Pv(1,1),Iv=new Av,Fv=new eM,Hv=new Ov,X_=[],k_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Rs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=X_[l];if(c===void 0&&(c=new Float32Array(l),X_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function bu(o,e){let i=k_[e];i===void 0&&(i=new Int32Array(e),k_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function yT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Y_.set(r),o.uniformMatrix2fv(this.addr,!1,Y_),ln(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;q_.set(r),o.uniformMatrix3fv(this.addr,!1,q_),ln(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;W_.set(r),o.uniformMatrix4fv(this.addr,!1,W_),ln(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(V_.compareFunction=Ev,c=V_):c=Bv,i.setTexture2D(e||c,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Fv,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Hv,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Iv,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return xT;case 35665:return ST;case 35666:return MT;case 35674:return yT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return wT;case 36294:return DT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return PT}}function IT(o,e){o.uniform1fv(this.addr,e)}function FT(o,e){const i=Rs(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Rs(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Rs(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function XT(o,e){const i=Rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kT(o,e){const i=Rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function WT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Bv,c[h])}function tb(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Fv,c[h])}function eb(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Hv,c[h])}function nb(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Iv,c[h])}function ib(o){switch(o){case 5126:return IT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return XT;case 35676:return kT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function j_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(dh.lastIndex=0;;){const c=dh.exec(r),h=dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){j_(i,p===void 0?new ab(d,o,e):new rb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new sb(d),j_(i,v)),i=v}}}class xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);ob(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Z_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let ub=0;function cb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const K_=new se;function fb(o){Me._getMatrix(K_,Me.workingColorSpace,o);const e=`mat3( ${K_.elements.map(i=>i.toFixed(4))} )`;switch(Me.getTransfer(o)){case Eu:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Q_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+cb(o.getShaderSource(e),h)}else return l}function hb(o,e){const i=fb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function db(o,e){let i;switch(e){case CS:i="Linear";break;case wS:i="Reinhard";break;case DS:i="Cineon";break;case US:i="ACESFilmic";break;case NS:i="AgX";break;case OS:i="Neutral";break;case LS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hu=new K;function pb(){Me.getLuminanceCoefficients(hu);const o=hu.x.toFixed(4),e=hu.y.toFixed(4),i=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function wo(o){return o!==""}function J_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(vb,Sb)}const xb=new Map;function Sb(o,e){let i=oe[e];if(i===void 0){const r=xb.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return id(i)}const Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(o){return o.replace(Mb,yb)}function yb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ev(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===oS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case cv:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case RS:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Cb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Eb(i),p=Tb(i),x=bb(i),v=Ab(i),S=Rb(i),y=mb(i),b=gb(c),R=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(M=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?oe.tonemapping_pars_fragment:"",i.toneMapping!==Fa?db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,hb("linearToOutputTexel",i.outputColorSpace),pb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=id(h),h=J_(h,i),h=$_(h,i),d=id(d),d=J_(d,i),d=$_(d,i),h=tv(h),d=tv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=B+M+h,w=B+_+d,$=Z_(l,l.VERTEX_SHADER,L),F=Z_(l,l.FRAGMENT_SHADER,w);l.attachShader(R,$),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(H){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),st=l.getShaderInfoLog($).trim(),mt=l.getShaderInfoLog(F).trim();let gt=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(gt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,$,F);else{const Z=Q_(l,$,"vertex"),j=Q_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+Z+`
`+j)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||mt==="")&&(z=!1);z&&(H.diagnostics={runnable:gt,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:mt,prefix:_}})}l.deleteShader($),l.deleteShader(F),k=new xu(l,R),D=_b(l,R)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,lb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=$,this.fragmentShader=F,this}let wb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Ub(e),i.set(e,r)),r}}class Ub{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Lb(o,e,i,r,l,c,h){const d=new Rv,m=new Db,p=new Set,x=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,H,lt,st){const mt=lt.fog,gt=st.geometry,z=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),j=Z&&Z.mapping===yu?Z.image.height:null,St=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Et=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,N=Et!==void 0?Et.length:0;let nt=0;gt.morphAttributes.position!==void 0&&(nt=1),gt.morphAttributes.normal!==void 0&&(nt=2),gt.morphAttributes.color!==void 0&&(nt=3);let xt,Y,ut,yt;if(St){const Se=Ti[St];xt=Se.vertexShader,Y=Se.fragmentShader}else xt=D.vertexShader,Y=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const vt=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),It=st.isInstancedMesh===!0,ee=st.isBatchedMesh===!0,Le=!!D.map,ue=!!D.matcap,Xe=!!Z,W=!!D.aoMap,xn=!!D.lightMap,le=!!D.bumpMap,de=!!D.normalMap,jt=!!D.displacementMap,Ce=!!D.emissiveMap,qt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,et=D.clearcoat>0,ft=D.dispersion>0,Mt=D.iridescence>0,dt=D.sheen>0,Xt=D.transmission>0,Dt=T&&!!D.anisotropyMap,Ot=et&&!!D.clearcoatMap,pe=et&&!!D.clearcoatNormalMap,bt=et&&!!D.clearcoatRoughnessMap,zt=Mt&&!!D.iridescenceMap,Yt=Mt&&!!D.iridescenceThicknessMap,kt=dt&&!!D.sheenColorMap,Nt=dt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,ie=!!D.specularColorMap,Ne=!!D.specularIntensityMap,G=Xt&&!!D.transmissionMap,At=Xt&&!!D.thicknessMap,ot=!!D.gradientMap,_t=!!D.alphaMap,Rt=D.alphaTest>0,Ut=!!D.alphaHash,Jt=!!D.extensions;let ke=Fa;D.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ke=o.toneMapping);const an={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Y,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:ee,batchingColor:ee&&st._colorsTexture!==null,instancing:It,instancingColor:It&&st.instanceColor!==null,instancingMorph:It&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:bs,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:ue,envMap:Xe,envMapMode:Xe&&Z.mapping,envMapCubeUVHeight:j,aoMap:W,lightMap:xn,bumpMap:le,normalMap:de,displacementMap:S&&jt,emissiveMap:Ce,normalMapObjectSpace:de&&D.normalMapType===IS,normalMapTangentSpace:de&&D.normalMapType===yv,metalnessMap:qt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:et,clearcoatMap:Ot,clearcoatNormalMap:pe,clearcoatRoughnessMap:bt,dispersion:ft,iridescence:Mt,iridescenceMap:zt,iridescenceThicknessMap:Yt,sheen:dt,sheenColorMap:kt,sheenRoughnessMap:Nt,specularMap:Qt,specularColorMap:ie,specularIntensityMap:Ne,transmission:Xt,transmissionMap:G,thicknessMap:At,gradientMap:ot,opaque:D.transparent===!1&&D.blending===gs&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Rt,alphaHash:Ut,combine:D.combine,mapUv:Le&&R(D.map.channel),aoMapUv:W&&R(D.aoMap.channel),lightMapUv:xn&&R(D.lightMap.channel),bumpMapUv:le&&R(D.bumpMap.channel),normalMapUv:de&&R(D.normalMap.channel),displacementMapUv:jt&&R(D.displacementMap.channel),emissiveMapUv:Ce&&R(D.emissiveMap.channel),metalnessMapUv:qt&&R(D.metalnessMap.channel),roughnessMapUv:U&&R(D.roughnessMap.channel),anisotropyMapUv:Dt&&R(D.anisotropyMap.channel),clearcoatMapUv:Ot&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:pe&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(D.sheenRoughnessMap.channel),specularMapUv:Qt&&R(D.specularMap.channel),specularColorMapUv:ie&&R(D.specularColorMap.channel),specularIntensityMapUv:Ne&&R(D.specularIntensityMap.channel),transmissionMapUv:G&&R(D.transmissionMap.channel),thicknessMapUv:At&&R(D.thicknessMap.channel),alphaMapUv:_t&&R(D.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(de||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!gt.attributes.uv&&(Le||_t),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ft,skinning:st.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&Me.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ce&&D.emissiveMap.isVideoTexture===!0&&Me.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Jt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&D.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=p.has(1),an.vertexUv2s=p.has(2),an.vertexUv3s=p.has(3),p.clear(),an}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(B(C,D),L(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let H;if(C){const lt=Ti[C];H=pM.clone(lt.uniforms)}else H=D.uniforms;return H}function $(D,C){let H;for(let lt=0,st=x.length;lt<st;lt++){const mt=x[lt];if(mt.cacheKey===C){H=mt,++H.usedTimes;break}}return H===void 0&&(H=new Cb(o,C,D,c),x.push(H)),H}function F(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function O(D){m.remove(D)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:w,acquireProgram:$,releaseProgram:F,releaseShaderCache:O,programs:x,dispose:k}}function Nb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function nv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function iv(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,b,R,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:R,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,S,y,b,R,M){const _=h(v,S,y,b,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,b,R,M){const _=h(v,S,y,b,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||Ob),r.length>1&&r.sort(S||nv),l.length>1&&l.sort(S||nv)}function x(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function zb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new iv,o.set(r,[h])):l>=c.length?(h=new iv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ib=0;function Fb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o){const e=new Pb,i=Bb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new qe,h=new qe;function d(p){let x=0,v=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,R=0,M=0,_=0,B=0,L=0,w=0,$=0,F=0,O=0;p.sort(Fb);for(let D=0,C=p.length;D<C;D++){const H=p[D],lt=H.color,st=H.intensity,mt=H.distance,gt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=lt.r*st,v+=lt.g*st,S+=lt.b*st;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],st);O++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=gt,r.directionalShadowMatrix[y]=H.shadow.matrix,B++}r.directional[y]=z,y++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(lt).multiplyScalar(st),z.distance=mt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[R]=z;const Z=H.shadow;if(H.map&&(r.spotLightMap[$]=H.map,$++,Z.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[R]=Z.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=gt,w++}R++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(lt).multiplyScalar(st),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=z,M++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=gt,r.pointShadowMatrix[b]=H.shadow.matrix,L++}r.point[b]=z,b++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(st),z.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[_]=z,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const k=r.hash;(k.directionalLength!==y||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==M||k.hemiLength!==_||k.numDirectionalShadows!==B||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==$||k.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+$-F,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,k.directionalLength=y,k.pointLength=b,k.spotLength=R,k.rectAreaLength=M,k.hemiLength=_,k.numDirectionalShadows=B,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=$,k.numLightProbes=O,r.version=Ib++)}function m(p,x){let v=0,S=0,y=0,b=0,R=0;const M=x.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const L=p[_];if(L.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const w=r.point[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function av(o){const e=new Hb(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Gb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new av(o),e.set(l,[d])):c>=h.length?(d=new av(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class Vb extends zo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xb extends zo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qb(o,e,i){let r=new dd;const l=new Ae,c=new Ae,h=new Fe,d=new Vb({depthPacking:BS}),m=new Xb,p={},x=i.maxTextureSize,v={[Ha]:Pn,[Pn]:Ha,[ea]:ea},S=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:kb,fragmentShader:Wb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Va;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ai(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let _=this.type;this.render=function(F,O,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ia),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==ta&&this.type===ta,mt=_===ta&&this.type!==ta;for(let gt=0,z=F.length;gt<z;gt++){const Z=F[gt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),c.copy(j.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/St.x),l.x=c.x*St.x,j.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/St.y),l.y=c.y*St.y,j.mapSize.y=c.y)),j.map===null||st===!0||mt===!0){const N=this.type!==ta?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new Mr(l.x,l.y,N),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let N=0;N<Et;N++){const nt=j.getViewport(N);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),lt.viewport(h),j.updateMatrices(Z,N),r=j.getFrustum(),w(O,k,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ta&&B(j,k),j.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,H)};function B(F,O){const k=e.update(R);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,k,S,R,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,k,y,R,null)}function L(F,O,k,D){let C=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)C=H;else if(C=k.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=C.uuid,st=O.uuid;let mt=p[lt];mt===void 0&&(mt={},p[lt]=mt);let gt=mt[st];gt===void 0&&(gt=C.clone(),mt[st]=gt,O.addEventListener("dispose",$)),C=gt}if(C.visible=O.visible,C.wireframe=O.wireframe,D===ta?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=k}return C}function w(F,O,k,D,C){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ta)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const st=e.update(F),mt=F.material;if(Array.isArray(mt)){const gt=st.groups;for(let z=0,Z=gt.length;z<Z;z++){const j=gt[z],St=mt[j.materialIndex];if(St&&St.visible){const Et=L(F,St,D,C);F.onBeforeShadow(o,F,O,k,st,Et,j),o.renderBufferDirect(k,null,st,Et,F,j),F.onAfterShadow(o,F,O,k,st,Et,j)}}}else if(mt.visible){const gt=L(F,mt,D,C);F.onBeforeShadow(o,F,O,k,st,gt,null),o.renderBufferDirect(k,null,st,gt,F,null),F.onAfterShadow(o,F,O,k,st,gt,null)}}const lt=F.children;for(let st=0,mt=lt.length;st<mt;st++)w(lt[st],O,k,D,C)}function $(F){F.target.removeEventListener("dispose",$);for(const k in p){const D=p[k],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Yb={[xh]:Sh,[Mh]:Th,[yh]:bh,[xs]:Eh,[Sh]:xh,[Th]:Mh,[bh]:yh,[Eh]:xs};function jb(o,e){function i(){let G=!1;const At=new Fe;let ot=null;const _t=new Fe(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!G&&(o.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,Ut,Jt,ke,an){an===!0&&(Rt*=ke,Ut*=ke,Jt*=ke),At.set(Rt,Ut,Jt,ke),_t.equals(At)===!1&&(o.clearColor(Rt,Ut,Jt,ke),_t.copy(At))},reset:function(){G=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let G=!1,At=!1,ot=null,_t=null,Rt=null;return{setReversed:function(Ut){if(At!==Ut){const Jt=e.get("EXT_clip_control");At?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const ke=Rt;Rt=null,this.setClear(ke)}At=Ut},getReversed:function(){return At},setTest:function(Ut){Ut?vt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!G&&(o.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(At&&(Ut=Yb[Ut]),_t!==Ut){switch(Ut){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case xs:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ut}},setLocked:function(Ut){G=Ut},setClear:function(Ut){Rt!==Ut&&(At&&(Ut=1-Ut),o.clearDepth(Ut),Rt=Ut)},reset:function(){G=!1,ot=null,_t=null,Rt=null,At=!1}}}function l(){let G=!1,At=null,ot=null,_t=null,Rt=null,Ut=null,Jt=null,ke=null,an=null;return{setTest:function(Se){G||(Se?vt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(Se){At!==Se&&!G&&(o.stencilMask(Se),At=Se)},setFunc:function(Se,hn,oi){(ot!==Se||_t!==hn||Rt!==oi)&&(o.stencilFunc(Se,hn,oi),ot=Se,_t=hn,Rt=oi)},setOp:function(Se,hn,oi){(Ut!==Se||Jt!==hn||ke!==oi)&&(o.stencilOp(Se,hn,oi),Ut=Se,Jt=hn,ke=oi)},setLocked:function(Se){G=Se},setClear:function(Se){an!==Se&&(o.clearStencil(Se),an=Se)},reset:function(){G=!1,At=null,ot=null,_t=null,Rt=null,Ut=null,Jt=null,ke=null,an=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},S=new WeakMap,y=[],b=null,R=!1,M=null,_=null,B=null,L=null,w=null,$=null,F=null,O=new Te(0,0,0),k=0,D=!1,C=null,H=null,lt=null,st=null,mt=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Z>=2);let St=null,Et={};const N=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),xt=new Fe().fromArray(N),Y=new Fe().fromArray(nt);function ut(G,At,ot,_t){const Rt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(G,Ut),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<ot;Jt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(At+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return Ut}const yt={};yt[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(xs),le(!1),de(l_),vt(o.CULL_FACE),W(Ia);function vt(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function Ft(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function It(G,At){return v[G]!==At?(o.bindFramebuffer(G,At),v[G]=At,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(G,At){let ot=y,_t=!1;if(G){ot=S.get(At),ot===void 0&&(ot=[],S.set(At,ot));const Rt=G.textures;if(ot.length!==Rt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,Jt=Rt.length;Ut<Jt;Ut++)ot[Ut]=o.COLOR_ATTACHMENT0+Ut;ot.length=Rt.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Le(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const ue={[gr]:o.FUNC_ADD,[uS]:o.FUNC_SUBTRACT,[cS]:o.FUNC_REVERSE_SUBTRACT};ue[fS]=o.MIN,ue[hS]=o.MAX;const Xe={[dS]:o.ZERO,[pS]:o.ONE,[mS]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[MS]:o.SRC_ALPHA_SATURATE,[xS]:o.DST_COLOR,[_S]:o.DST_ALPHA,[gS]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[SS]:o.ONE_MINUS_DST_COLOR,[vS]:o.ONE_MINUS_DST_ALPHA,[yS]:o.CONSTANT_COLOR,[ES]:o.ONE_MINUS_CONSTANT_COLOR,[TS]:o.CONSTANT_ALPHA,[bS]:o.ONE_MINUS_CONSTANT_ALPHA};function W(G,At,ot,_t,Rt,Ut,Jt,ke,an,Se){if(G===Ia){R===!0&&(Ft(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),G!==lS){if(G!==M||Se!==D){if((_!==gr||w!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,w=gr),Se)switch(G){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.ONE,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case f_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}B=null,L=null,$=null,F=null,O.set(0,0,0),k=0,M=G,D=Se}return}Rt=Rt||At,Ut=Ut||ot,Jt=Jt||_t,(At!==_||Rt!==w)&&(o.blendEquationSeparate(ue[At],ue[Rt]),_=At,w=Rt),(ot!==B||_t!==L||Ut!==$||Jt!==F)&&(o.blendFuncSeparate(Xe[ot],Xe[_t],Xe[Ut],Xe[Jt]),B=ot,L=_t,$=Ut,F=Jt),(ke.equals(O)===!1||an!==k)&&(o.blendColor(ke.r,ke.g,ke.b,an),O.copy(ke),k=an),M=G,D=!1}function xn(G,At){G.side===ea?Ft(o.CULL_FACE):vt(o.CULL_FACE);let ot=G.side===Pn;At&&(ot=!ot),le(ot),G.blending===gs&&G.transparent===!1?W(Ia):W(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const _t=G.stencilWrite;d.setTest(_t),_t&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function de(G){G!==rS?(vt(o.CULL_FACE),G!==H&&(G===l_?o.cullFace(o.BACK):G===sS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),H=G}function jt(G){G!==lt&&(z&&o.lineWidth(G),lt=G)}function Ce(G,At,ot){G?(vt(o.POLYGON_OFFSET_FILL),(st!==At||mt!==ot)&&(o.polygonOffset(At,ot),st=At,mt=ot)):Ft(o.POLYGON_OFFSET_FILL)}function qt(G){G?vt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function U(G){G===void 0&&(G=o.TEXTURE0+gt-1),St!==G&&(o.activeTexture(G),St=G)}function T(G,At,ot){ot===void 0&&(St===null?ot=o.TEXTURE0+gt-1:ot=St);let _t=Et[ot];_t===void 0&&(_t={type:void 0,texture:void 0},Et[ot]=_t),(_t.type!==G||_t.texture!==At)&&(St!==ot&&(o.activeTexture(ot),St=ot),o.bindTexture(G,At||yt[G]),_t.type=G,_t.texture=At)}function et(){const G=Et[St];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(G){xt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),xt.copy(G))}function Nt(G){Y.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Y.copy(G))}function Qt(G,At){let ot=p.get(At);ot===void 0&&(ot=new WeakMap,p.set(At,ot));let _t=ot.get(G);_t===void 0&&(_t=o.getUniformBlockIndex(At,G.name),ot.set(G,_t))}function ie(G,At){const _t=p.get(At).get(G);m.get(At)!==_t&&(o.uniformBlockBinding(At,_t,G.__bindingPointIndex),m.set(At,_t))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},St=null,Et={},v={},S=new WeakMap,y=[],b=null,R=!1,M=null,_=null,B=null,L=null,w=null,$=null,F=null,O=new Te(0,0,0),k=0,D=!1,C=null,H=null,lt=null,st=null,mt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:Ft,bindFramebuffer:It,drawBuffers:ee,useProgram:Le,setBlending:W,setMaterial:xn,setFlipSided:le,setCullFace:de,setLineWidth:jt,setPolygonOffset:Ce,setScissorTest:qt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:ft,compressedTexImage3D:Mt,texImage2D:zt,texImage3D:Yt,updateUBOMapping:Qt,uniformBlockBinding:ie,texStorage2D:pe,texStorage3D:bt,texSubImage2D:dt,texSubImage3D:Xt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ot,scissor:kt,viewport:Nt,reset:Ne}}function rv(o,e,i,r){const l=Zb(r);switch(i){case mv:return o*e;case _v:return o*e;case vv:return o*e*2;case xv:return o*e/l.components*l.byteLength;case ud:return o*e/l.components*l.byteLength;case Sv:return o*e*2/l.components*l.byteLength;case cd:return o*e*2/l.components*l.byteLength;case gv:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case fd:return o*e*4/l.components*l.byteLength;case pu:case mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gu:case _u:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(e,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(e,8)/2;case Oh:case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case vu:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Mv:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zb(o){switch(o){case ra:case hv:return{byteLength:1,components:1};case Do:case dv:case Uo:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case Sr:case sd:case na:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Kb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,x=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return y?new OffscreenCanvas(U,T):Mu("canvas")}function R(U,T,et){let ft=1;const Mt=qt(U);if((Mt.width>et||Mt.height>et)&&(ft=et/Math.max(Mt.width,Mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ft*Mt.width),Xt=Math.floor(ft*Mt.height);v===void 0&&(v=b(dt,Xt));const Dt=T?b(dt,Xt):v;return Dt.width=dt,Dt.height=Xt,Dt.getContext("2d").drawImage(U,0,0,dt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+dt+"x"+Xt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,et,ft,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===o.RED&&(et===o.FLOAT&&(dt=o.R32F),et===o.HALF_FLOAT&&(dt=o.R16F),et===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.R8UI),et===o.UNSIGNED_SHORT&&(dt=o.R16UI),et===o.UNSIGNED_INT&&(dt=o.R32UI),et===o.BYTE&&(dt=o.R8I),et===o.SHORT&&(dt=o.R16I),et===o.INT&&(dt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(dt=o.RG32F),et===o.HALF_FLOAT&&(dt=o.RG16F),et===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RG8UI),et===o.UNSIGNED_SHORT&&(dt=o.RG16UI),et===o.UNSIGNED_INT&&(dt=o.RG32UI),et===o.BYTE&&(dt=o.RG8I),et===o.SHORT&&(dt=o.RG16I),et===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),et===o.UNSIGNED_INT&&(dt=o.RGB32UI),et===o.BYTE&&(dt=o.RGB8I),et===o.SHORT&&(dt=o.RGB16I),et===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),et===o.UNSIGNED_INT&&(dt=o.RGBA32UI),et===o.BYTE&&(dt=o.RGBA8I),et===o.SHORT&&(dt=o.RGBA16I),et===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const Xt=Mt?Eu:Me.getTransfer(ft);et===o.FLOAT&&(dt=o.RGBA32F),et===o.HALF_FLOAT&&(dt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(dt=Xt===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function w(U,T){let et;return U?T===null||T===Sr||T===ys?et=o.DEPTH24_STENCIL8:T===na?et=o.DEPTH32F_STENCIL8:T===Do&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Sr||T===ys?et=o.DEPTH_COMPONENT24:T===na?et=o.DEPTH_COMPONENT32F:T===Do&&(et=o.DEPTH_COMPONENT16),et}function $(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==vi&&U.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),k(T),T.isVideoTexture&&x.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),C(T)}function k(U){const T=r.get(U);if(T.__webglInit===void 0)return;const et=U.source,ft=S.get(et);if(ft){const Mt=ft[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(U),Object.keys(ft).length===0&&S.delete(et)}r.remove(U)}function D(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,ft=S.get(et);delete ft[T.__cacheKey],h.memory.textures--}function C(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let Mt=0;Mt<T.__webglFramebuffer[ft].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let ft=0,Mt=et.length;ft<Mt;ft++){const dt=r.get(et[ft]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(et[ft])}r.remove(U)}let H=0;function lt(){H=0}function st(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function mt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function gt(U,T){const et=r.get(U);if(U.isVideoTexture&&jt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,U,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function z(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function j(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){ut(et,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const St={[Ch]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},Et={[vi]:o.NEAREST,[zS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},N={[FS]:o.NEVER,[WS]:o.ALWAYS,[HS]:o.LESS,[Ev]:o.LEQUAL,[GS]:o.EQUAL,[kS]:o.GEQUAL,[VS]:o.GREATER,[XS]:o.NOTEQUAL};function nt(U,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bi||T.magFilter===Ff||T.magFilter===ql||T.magFilter===xr||T.minFilter===bi||T.minFilter===Ff||T.minFilter===ql||T.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vi||T.minFilter!==ql&&T.minFilter!==xr||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xt(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const ft=T.source;let Mt=S.get(ft);Mt===void 0&&(Mt={},S.set(ft,Mt));const dt=mt(T);if(dt!==U.__cacheKey){Mt[dt]===void 0&&(Mt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[dt].usedTimes++;const Xt=Mt[U.__cacheKey];Xt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),U.__cacheKey=dt,U.__webglTexture=Mt[dt].texture}return et}function Y(U,T,et){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const Mt=xt(U,T),dt=T.source;i.bindTexture(ft,U.__webglTexture,o.TEXTURE0+et);const Xt=r.get(dt);if(dt.version!==Xt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Me.getPrimaries(Me.workingColorSpace),Ot=T.colorSpace===Ba?null:Me.getPrimaries(T.colorSpace),pe=T.colorSpace===Ba||Dt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let bt=R(T.image,!1,l.maxTextureSize);bt=Ce(T,bt);const zt=c.convert(T.format,T.colorSpace),Yt=c.convert(T.type);let kt=L(T.internalFormat,zt,Yt,T.colorSpace,T.isVideoTexture);nt(ft,T);let Nt;const Qt=T.mipmaps,ie=T.isVideoTexture!==!0,Ne=Xt.__version===void 0||Mt===!0,G=dt.dataReady,At=$(T,bt);if(T.isDepthTexture)kt=w(T.format===Es,T.type),Ne&&(ie?i.texStorage2D(o.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,zt,Yt,null));else if(T.isDataTexture)if(Qt.length>0){ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,kt,Qt[0].width,Qt[0].height);for(let ot=0,_t=Qt.length;ot<_t;ot++)Nt=Qt[ot],ie?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,kt,Nt.width,Nt.height,0,zt,Yt,Nt.data);T.generateMipmaps=!1}else ie?(Ne&&i.texStorage2D(o.TEXTURE_2D,At,kt,bt.width,bt.height),G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,Yt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,zt,Yt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,kt,Qt[0].width,Qt[0].height,bt.depth);for(let ot=0,_t=Qt.length;ot<_t;ot++)if(Nt=Qt[ot],T.format!==_i)if(zt!==null)if(ie){if(G)if(T.layerUpdates.size>0){const Rt=rv(Nt.width,Nt.height,T.format,T.type);for(const Ut of T.layerUpdates){const Jt=Nt.data.subarray(Ut*Rt/Nt.data.BYTES_PER_ELEMENT,(Ut+1)*Rt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Ut,Nt.width,Nt.height,1,zt,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,kt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,Yt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,kt,Nt.width,Nt.height,bt.depth,0,zt,Yt,Nt.data)}else{ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,kt,Qt[0].width,Qt[0].height);for(let ot=0,_t=Qt.length;ot<_t;ot++)Nt=Qt[ot],T.format!==_i?zt!==null?ie?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,kt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,kt,Nt.width,Nt.height,0,zt,Yt,Nt.data)}else if(T.isDataArrayTexture)if(ie){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,kt,bt.width,bt.height,bt.depth),G)if(T.layerUpdates.size>0){const ot=rv(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Rt=bt.data.subarray(_t*ot/bt.data.BYTES_PER_ELEMENT,(_t+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,zt,Yt,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,zt,Yt,bt.data);else if(T.isData3DTexture)ie?(Ne&&i.texStorage3D(o.TEXTURE_3D,At,kt,bt.width,bt.height,bt.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,zt,Yt,bt.data);else if(T.isFramebufferTexture){if(Ne)if(ie)i.texStorage2D(o.TEXTURE_2D,At,kt,bt.width,bt.height);else{let ot=bt.width,_t=bt.height;for(let Rt=0;Rt<At;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,kt,ot,_t,0,zt,Yt,null),ot>>=1,_t>>=1}}else if(Qt.length>0){if(ie&&Ne){const ot=qt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,At,kt,ot.width,ot.height)}for(let ot=0,_t=Qt.length;ot<_t;ot++)Nt=Qt[ot],ie?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,zt,Yt,Nt):i.texImage2D(o.TEXTURE_2D,ot,kt,zt,Yt,Nt);T.generateMipmaps=!1}else if(ie){if(Ne){const ot=qt(bt);i.texStorage2D(o.TEXTURE_2D,At,kt,ot.width,ot.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,kt,zt,Yt,bt);M(T)&&_(ft),Xt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ut(U,T,et){if(T.image.length!==6)return;const ft=xt(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const dt=r.get(Mt);if(Mt.version!==dt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Xt=Me.getPrimaries(Me.workingColorSpace),Dt=T.colorSpace===Ba?null:Me.getPrimaries(T.colorSpace),Ot=T.colorSpace===Ba||Xt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!pe&&!bt?zt[_t]=R(T.image[_t],!0,l.maxCubemapSize):zt[_t]=bt?T.image[_t].image:T.image[_t],zt[_t]=Ce(T,zt[_t]);const Yt=zt[0],kt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),Qt=L(T.internalFormat,kt,Nt,T.colorSpace),ie=T.isVideoTexture!==!0,Ne=dt.__version===void 0||ft===!0,G=Mt.dataReady;let At=$(T,Yt);nt(o.TEXTURE_CUBE_MAP,T);let ot;if(pe){ie&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ot=zt[_t].mipmaps;for(let Rt=0;Rt<ot.length;Rt++){const Ut=ot[Rt];T.format!==_i?kt!==null?ie?G&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,Ut.width,Ut.height,kt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,Ut.width,Ut.height,kt,Nt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Qt,Ut.width,Ut.height,0,kt,Nt,Ut.data)}}}else{if(ot=T.mipmaps,ie&&Ne){ot.length>0&&At++;const _t=qt(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ie?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,kt,Nt,zt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,zt[_t].width,zt[_t].height,0,kt,Nt,zt[_t].data);for(let Rt=0;Rt<ot.length;Rt++){const Jt=ot[Rt].image[_t].image;ie?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Jt.width,Jt.height,kt,Nt,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Qt,Jt.width,Jt.height,0,kt,Nt,Jt.data)}}else{ie?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Nt,zt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,kt,Nt,zt[_t]);for(let Rt=0;Rt<ot.length;Rt++){const Ut=ot[Rt];ie?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,kt,Nt,Ut.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Qt,kt,Nt,Ut.image[_t])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),dt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function yt(U,T,et,ft,Mt,dt){const Xt=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Ot=L(et.internalFormat,Xt,Dt,et.colorSpace),pe=r.get(T),bt=r.get(et);if(bt.__renderTarget=T,!pe.__hasExternalTextures){const zt=Math.max(1,T.width>>dt),Yt=Math.max(1,T.height>>dt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,dt,Ot,zt,Yt,T.depth,0,Xt,Dt,null):i.texImage2D(Mt,dt,Ot,zt,Yt,0,Xt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,0,le(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const ft=T.depthTexture,Mt=ft&&ft.isDepthTexture?ft.type:null,dt=w(T.stencilBuffer,Mt),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=le(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,dt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const ft=T.textures;for(let Mt=0;Mt<ft.length;Mt++){const dt=ft[Mt],Xt=c.convert(dt.format,dt.colorSpace),Dt=c.convert(dt.type),Ot=L(dt.internalFormat,Xt,Dt,dt.colorSpace),pe=le(T);et&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Ot,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Ot,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt(T.depthTexture,0);const Mt=ft.__webglTexture,dt=le(T);if(T.depthTexture.format===_s)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Es)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function It(U){const T=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",Mt)};ft.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ft}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ft(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),vt(T.__webglDepthbuffer[ft],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),vt(T.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(U,T,et){const ft=r.get(U);T!==void 0&&yt(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&It(U)}function Le(U){const T=U.texture,et=r.get(U),ft=r.get(T);U.addEventListener("dispose",O);const Mt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)et.__webglFramebuffer[Dt][Ot]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Dt=0,Ot=Mt.length;Dt<Ot;Dt++){const pe=r.get(Mt[Dt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Ot=Mt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const pe=c.convert(Ot.format,Ot.colorSpace),bt=c.convert(Ot.type),zt=L(Ot.internalFormat,pe,bt,Ot.colorSpace,U.isXRRenderTarget===!0),Yt=le(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,zt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),nt(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)yt(et.__webglFramebuffer[Dt][Ot],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ot);else yt(et.__webglFramebuffer[Dt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Dt=0,Ot=Mt.length;Dt<Ot;Dt++){const pe=Mt[Dt],bt=r.get(pe);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),nt(o.TEXTURE_2D,pe),yt(et.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(pe)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),nt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)yt(et.__webglFramebuffer[Ot],U,T,o.COLOR_ATTACHMENT0,Dt,Ot);else yt(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Dt,0);M(T)&&_(Dt),i.unbindTexture()}U.depthBuffer&&It(U)}function ue(U){const T=U.textures;for(let et=0,ft=T.length;et<ft;et++){const Mt=T[et];if(M(Mt)){const dt=B(U),Xt=r.get(Mt).__webglTexture;i.bindTexture(dt,Xt),_(dt),i.unbindTexture()}}}const Xe=[],W=[];function xn(U){if(U.samples>0){if(de(U)===!1){const T=U.textures,et=U.width,ft=U.height;let Mt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(U),Dt=T.length>1;if(Dt)for(let Ot=0;Ot<T.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ot=0;Ot<T.length;Ot++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ot]);const pe=r.get(T[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,Mt,o.NEAREST),m===!0&&(Xe.length=0,W.length=0,Xe.push(o.COLOR_ATTACHMENT0+Ot),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Xe.push(dt),W.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Xe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Ot=0;Ot<T.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ot]);const pe=r.get(T[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function le(U){return Math.min(l.maxSamples,U.samples)}function de(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(U){const T=h.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Ce(U,T){const et=U.colorSpace,ft=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==bs&&et!==Ba&&(Me.getTransfer(et)===Ie?(ft!==_i||Mt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=gt,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=de}function Qb(o,e){function i(r,l=Ba){let c;const h=Me.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hv)return o.BYTE;if(r===dv)return o.SHORT;if(r===Do)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===_i)return o.RGBA;if(r===_v)return o.LUMINANCE;if(r===vv)return o.LUMINANCE_ALPHA;if(r===_s)return o.DEPTH_COMPONENT;if(r===Es)return o.DEPTH_STENCIL;if(r===xv)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===Sv)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===pu||r===mu||r===gu||r===_u)if(h===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Dh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===zh||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Oh||r===zh)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ph)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vu||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===vu)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mv||r===$h||r===td||r===ed)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===vu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ys?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class Jb extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class du extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=x.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($b)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Bn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ga({vertexShader:tA,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Tu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends As{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,S=null,y=null,b=null;const R=new nA,M=i.getContextAttributes();let _=null,B=null;const L=[],w=[],$=new Ae;let F=null;const O=new jn;O.viewport=new Fe;const k=new jn;k.viewport=new Fe;const D=[O,k],C=new Jb;let H=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=L[Y];return ut===void 0&&(ut=new ph,L[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=L[Y];return ut===void 0&&(ut=new ph,L[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=L[Y];return ut===void 0&&(ut=new ph,L[Y]=ut),ut.getHandSpace()};function st(Y){const ut=w.indexOf(Y.inputSource);if(ut===-1)return;const yt=L[ut];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,p||h),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function mt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",gt);for(let Y=0;Y<L.length;Y++){const ut=w[Y];ut!==null&&(w[Y]=null,L[Y].disconnect(ut))}H=null,lt=null,R.reset(),e.setRenderTarget(_),y=null,S=null,v=null,l=null,B=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",gt),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize($),l.renderState.layers===void 0){const ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Mr(y.framebufferWidth,y.framebufferHeight,{format:_i,type:ra,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ut=null,yt=null,vt=null;M.depth&&(vt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=M.stencil?Es:_s,yt=M.stencil?ys:Sr);const Ft={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Ft),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Mr(S.textureWidth,S.textureHeight,{format:_i,type:ra,depthTexture:new Pv(S.textureWidth,S.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function gt(Y){for(let ut=0;ut<Y.removed.length;ut++){const yt=Y.removed[ut],vt=w.indexOf(yt);vt>=0&&(w[vt]=null,L[vt].disconnect(yt))}for(let ut=0;ut<Y.added.length;ut++){const yt=Y.added[ut];let vt=w.indexOf(yt);if(vt===-1){for(let It=0;It<L.length;It++)if(It>=w.length){w.push(yt),vt=It;break}else if(w[It]===null){w[It]=yt,vt=It;break}if(vt===-1)break}const Ft=L[vt];Ft&&Ft.connect(yt)}}const z=new K,Z=new K;function j(Y,ut,yt){z.setFromMatrixPosition(ut.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const vt=z.distanceTo(Z),Ft=ut.projectionMatrix.elements,It=yt.projectionMatrix.elements,ee=Ft[14]/(Ft[10]-1),Le=Ft[14]/(Ft[10]+1),ue=(Ft[9]+1)/Ft[5],Xe=(Ft[9]-1)/Ft[5],W=(Ft[8]-1)/Ft[0],xn=(It[8]+1)/It[0],le=ee*W,de=ee*xn,jt=vt/(-W+xn),Ce=jt*-W;if(ut.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(jt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=ee+jt,U=Le+jt,T=le-Ce,et=de+(vt-Ce),ft=ue*Le/U*qt,Mt=Xe*Le/U*qt;Y.projectionMatrix.makePerspective(T,et,ft,Mt,qt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ut=Y.near,yt=Y.far;R.texture!==null&&(R.depthNear>0&&(ut=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),C.near=k.near=O.near=ut,C.far=k.far=O.far=yt,(H!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,lt=C.far),O.layers.mask=Y.layers.mask|2,k.layers.mask=Y.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const vt=Y.parent,Ft=C.cameras;St(C,vt);for(let It=0;It<Ft.length;It++)St(Ft[It],vt);Ft.length===2?j(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),Et(Y,C,vt)};function Et(Y,ut,yt){yt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(Y){m=Y,S!==null&&(S.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let N=null;function nt(Y,ut){if(x=ut.getViewerPose(p||h),b=ut,x!==null){const yt=x.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let vt=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let It=0;It<yt.length;It++){const ee=yt[It];let Le=null;if(y!==null)Le=y.getViewport(ee);else{const Xe=v.getViewSubImage(S,ee);Le=Xe.viewport,It===0&&(e.setRenderTargetTextures(B,Xe.colorTexture,S.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(B))}let ue=D[It];ue===void 0&&(ue=new jn,ue.layers.enable(It),ue.viewport=new Fe,D[It]=ue),ue.matrix.fromArray(ee.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ee.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),It===0&&(C.matrix.copy(ue.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(ue)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const It=v.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&R.init(e,It,l.renderState)}}for(let yt=0;yt<L.length;yt++){const vt=w[yt],Ft=L[yt];vt!==null&&Ft!==void 0&&Ft.update(vt,ut,p||h)}N&&N(Y,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const xt=new zv;xt.setAnimationLoop(nt),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const hr=new wi,aA=new qe;function rA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Lv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,L,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),x(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,w)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,B,L):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Pn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Pn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=e.get(_),L=B.envMap,w=B.envMapRotation;L&&(M.envMap.value=L,hr.copy(w),hr.x*=-1,hr.y*=-1,hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),M.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(hr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,B,L){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=L*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const B=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function sA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const w=L.program;r.uniformBlockBinding(B,w)}function p(B,L){let w=l[B.id];w===void 0&&(b(B),w=x(B),l[B.id]=w,B.addEventListener("dispose",M));const $=L.program;r.updateUBOMapping(B,$);const F=e.render.frame;c[B.id]!==F&&(S(B),c[B.id]=F)}function x(B){const L=v();B.__bindingPointIndex=L;const w=o.createBuffer(),$=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,$,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const L=l[B.id],w=B.uniforms,$=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,O=w.length;F<O;F++){const k=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,C=k.length;D<C;D++){const H=k[D];if(y(H,F,D,$)===!0){const lt=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let gt=0;gt<st.length;gt++){const z=st[gt],Z=R(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,lt+mt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,mt),mt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,L,w,$){const F=B.value,O=L+"_"+w;if($[O]===void 0)return typeof F=="number"||typeof F=="boolean"?$[O]=F:$[O]=F.clone(),!0;{const k=$[O];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return $[O]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(B){const L=B.uniforms;let w=0;const $=16;for(let O=0,k=L.length;O<k;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,H=D.length;C<H;C++){const lt=D[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let mt=0,gt=st.length;mt<gt;mt++){const z=st[mt],Z=R(z),j=w%$,St=j%Z.boundary,Et=j+St;w+=St,Et!==0&&$-Et<Z.storage&&(w+=$-Et),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const F=w%$;return F>0&&(w+=$-F),B.__size=w,B.__cache={},this}function R(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function M(B){const L=B.target;L.removeEventListener("dispose",M);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class oA{constructor(e={}){const{canvas:i=YS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=Fa,this.toneMappingExposure=1;const w=this;let $=!1,F=0,O=0,k=null,D=-1,C=null;const H=new Fe,lt=new Fe;let st=null;const mt=new Te(0);let gt=0,z=i.width,Z=i.height,j=1,St=null,Et=null;const N=new Fe(0,0,z,Z),nt=new Fe(0,0,z,Z);let xt=!1;const Y=new dd;let ut=!1,yt=!1;const vt=new qe,Ft=new qe,It=new K,ee=new Fe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Xe(){return k===null?j:1}let W=r;function xn(A,V){return i.getContext(A,V)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),W===null){const V="webgl2";if(W=xn(V,A),W===null)throw xn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let le,de,jt,Ce,qt,U,T,et,ft,Mt,dt,Xt,Dt,Ot,pe,bt,zt,Yt,kt,Nt,Qt,ie,Ne,G;function At(){le=new hT(W),le.init(),ie=new Qb(W,le),de=new rT(W,le,e,ie),jt=new jb(W,le),de.reverseDepthBuffer&&S&&jt.buffers.depth.setReversed(!0),Ce=new mT(W),qt=new Nb,U=new Kb(W,le,jt,qt,de,ie,Ce),T=new oT(w),et=new fT(w),ft=new MM(W),Ne=new iT(W,ft),Mt=new dT(W,ft,Ce,Ne),dt=new _T(W,Mt,ft,Ce),kt=new gT(W,de,U),bt=new sT(qt),Xt=new Lb(w,T,et,le,de,Ne,bt),Dt=new rA(w,qt),Ot=new zb,pe=new Gb(le),Yt=new nT(w,T,et,jt,dt,y,m),zt=new qb(w,dt,de),G=new sA(W,Ce,de,jt),Nt=new aT(W,le,Ce),Qt=new pT(W,le,Ce),Ce.programs=Xt.programs,w.capabilities=de,w.extensions=le,w.properties=qt,w.renderLists=Ot,w.shadowMap=zt,w.state=jt,w.info=Ce}At();const ot=new iA(w,W);this.xr=ot,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,V,at=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=V,i.width=Math.floor(A*j),i.height=Math.floor(V*j),at===!0&&(i.style.width=A+"px",i.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(z*j,Z*j).floor()},this.setDrawingBufferSize=function(A,V,at){z=A,Z=V,j=at,i.width=Math.floor(A*at),i.height=Math.floor(V*at),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,V,at,it){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,V,at,it),jt.viewport(H.copy(N).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,V,at,it){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,V,at,it),jt.scissor(lt.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){jt.setScissorTest(xt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,V=!0,at=!0){let it=0;if(A){let X=!1;if(k!==null){const Tt=k.texture.format;X=Tt===fd||Tt===cd||Tt===ud}if(X){const Tt=k.texture.type,Ct=Tt===ra||Tt===Sr||Tt===Do||Tt===ys||Tt===od||Tt===ld,wt=Yt.getClearColor(),Ht=Yt.getClearAlpha(),$t=wt.r,Kt=wt.g,Pt=wt.b;Ct?(b[0]=$t,b[1]=Kt,b[2]=Pt,b[3]=Ht,W.clearBufferuiv(W.COLOR,0,b)):(R[0]=$t,R[1]=Kt,R[2]=Pt,R[3]=Ht,W.clearBufferiv(W.COLOR,0,R))}else it|=W.COLOR_BUFFER_BIT}V&&(it|=W.DEPTH_BUFFER_BIT),at&&(it|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Ot.dispose(),pe.dispose(),qt.dispose(),T.dispose(),et.dispose(),dt.dispose(),Ne.dispose(),G.dispose(),Xt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Cs),ot.removeEventListener("sessionend",ws),xi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const A=Ce.autoReset,V=zt.enabled,at=zt.autoUpdate,it=zt.needsUpdate,X=zt.type;At(),Ce.autoReset=A,zt.enabled=V,zt.autoUpdate=at,zt.needsUpdate=it,zt.type=X}function Ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const V=A.target;V.removeEventListener("dispose",Jt),ke(V)}function ke(A){an(A),qt.remove(A)}function an(A){const V=qt.get(A).programs;V!==void 0&&(V.forEach(function(at){Xt.releaseProgram(at)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,at,it,X,Tt){V===null&&(V=Le);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,wt=Us(A,V,at,it,X);jt.setMaterial(it,Ct);let Ht=at.index,$t=1;if(it.wireframe===!0){if(Ht=Mt.getWireframeAttribute(at),Ht===void 0)return;$t=2}const Kt=at.drawRange,Pt=at.attributes.position;let xe=Kt.start*$t,we=(Kt.start+Kt.count)*$t;Tt!==null&&(xe=Math.max(xe,Tt.start*$t),we=Math.min(we,(Tt.start+Tt.count)*$t)),Ht!==null?(xe=Math.max(xe,0),we=Math.min(we,Ht.count)):Pt!=null&&(xe=Math.max(xe,0),we=Math.min(we,Pt.count));const Oe=we-xe;if(Oe<0||Oe===1/0)return;Ne.setup(X,it,wt,at,Ht);let Sn,_e=Nt;if(Ht!==null&&(Sn=ft.get(Ht),_e=Qt,_e.setIndex(Sn)),X.isMesh)it.wireframe===!0?(jt.setLineWidth(it.wireframeLinewidth*Xe()),_e.setMode(W.LINES)):_e.setMode(W.TRIANGLES);else if(X.isLine){let Gt=it.linewidth;Gt===void 0&&(Gt=1),jt.setLineWidth(Gt*Xe()),X.isLineSegments?_e.setMode(W.LINES):X.isLineLoop?_e.setMode(W.LINE_LOOP):_e.setMode(W.LINE_STRIP)}else X.isPoints?_e.setMode(W.POINTS):X.isSprite&&_e.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)_e.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Gt=X._multiDrawStarts,rn=X._multiDrawCounts,ne=X._multiDrawCount,Rn=Ht?ft.get(Ht).bytesPerElement:1,sa=qt.get(it).currentProgram.getUniforms();for(let pn=0;pn<ne;pn++)sa.setValue(W,"_gl_DrawID",pn),_e.render(Gt[pn]/Rn,rn[pn])}else if(X.isInstancedMesh)_e.renderInstances(xe,Oe,X.count);else if(at.isInstancedBufferGeometry){const Gt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,rn=Math.min(at.instanceCount,Gt);_e.renderInstances(xe,Oe,rn)}else _e.render(xe,Oe)};function Se(A,V,at){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Ye(A,V,at),A.side=Ha,A.needsUpdate=!0,Ye(A,V,at),A.side=ea):Ye(A,V,at)}this.compile=function(A,V,at=null){at===null&&(at=A),_=pe.get(at),_.init(V),L.push(_),at.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),A!==at&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const it=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Tt=X.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];Se(wt,at,X),it.add(wt)}else Se(Tt,at,X),it.add(Tt)}),L.pop(),_=null,it},this.compileAsync=function(A,V,at=null){const it=this.compile(A,V,at);return new Promise(X=>{function Tt(){if(it.forEach(function(Ct){qt.get(Ct).currentProgram.isReady()&&it.delete(Ct)}),it.size===0){X(A);return}setTimeout(Tt,10)}le.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let hn=null;function oi(A){hn&&hn(A)}function Cs(){xi.stop()}function ws(){xi.start()}const xi=new zv;xi.setAnimationLoop(oi),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){hn=A,ot.setAnimationLoop(A),A===null?xi.stop():xi.start()},ot.addEventListener("sessionstart",Cs),ot.addEventListener("sessionend",ws),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(V),V=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,V,k),_=pe.get(A,L.length),_.init(V),L.push(_),Ft.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(Ft),yt=this.localClippingEnabled,ut=bt.init(this.clippingPlanes,yt),M=Ot.get(A,B.length),M.init(),B.push(M),ot.enabled===!0&&ot.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,V,-1/0,w.sortObjects)}Xa(A,V,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,Et),ue=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ue&&Yt.addToRenderList(M,A),this.info.render.frame++,ut===!0&&bt.beginShadows();const at=_.state.shadowsArray;zt.render(at,A,V),ut===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=M.opaque,X=M.transmissive;if(_.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(X.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const Ht=Tt[Ct];Ds(it,X,A,Ht)}ue&&Yt.render(A);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const Ht=Tt[Ct];yr(M,A,Ht,Ht.viewport)}}else X.length>0&&Ds(it,X,A,V),ue&&Yt.render(A),yr(M,A,V);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(w,A,V),Ne.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ut===!0&&bt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Xa(A,V,at,it){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){it&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ft);const Ct=dt.update(A),wt=A.material;wt.visible&&M.push(A,Ct,wt,at,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Ct=dt.update(A),wt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ee.copy(Ct.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(Ft)),Array.isArray(wt)){const Ht=Ct.groups;for(let $t=0,Kt=Ht.length;$t<Kt;$t++){const Pt=Ht[$t],xe=wt[Pt.materialIndex];xe&&xe.visible&&M.push(A,Ct,xe,at,ee.z,Pt)}}else wt.visible&&M.push(A,Ct,wt,at,ee.z,null)}}const Tt=A.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Xa(Tt[Ct],V,at,it)}function yr(A,V,at,it){const X=A.opaque,Tt=A.transmissive,Ct=A.transparent;_.setupLightsView(at),ut===!0&&bt.setGlobalState(w.clippingPlanes,at),it&&jt.viewport(H.copy(it)),X.length>0&&ka(X,V,at),Tt.length>0&&ka(Tt,V,at),Ct.length>0&&ka(Ct,V,at),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Ds(A,V,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[it.id]===void 0&&(_.state.transmissionRenderTarget[it.id]=new Mr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Uo:ra,minFilter:xr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[it.id],Ct=it.viewport||H;Tt.setSize(Ct.z,Ct.w);const wt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(mt),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),ue&&Yt.render(at);const Ht=w.toneMapping;w.toneMapping=Fa;const $t=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),_.setupLightsView(it),ut===!0&&bt.setGlobalState(w.clippingPlanes,it),ka(A,at,it),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Pt=0,xe=V.length;Pt<xe;Pt++){const we=V[Pt],Oe=we.object,Sn=we.geometry,_e=we.material,Gt=we.group;if(_e.side===ea&&Oe.layers.test(it.layers)){const rn=_e.side;_e.side=Pn,_e.needsUpdate=!0,li(Oe,at,it,Sn,_e,Gt),_e.side=rn,_e.needsUpdate=!0,Kt=!0}}Kt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}w.setRenderTarget(wt),w.setClearColor(mt,gt),$t!==void 0&&(it.viewport=$t),w.toneMapping=Ht}function ka(A,V,at){const it=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Tt=A.length;X<Tt;X++){const Ct=A[X],wt=Ct.object,Ht=Ct.geometry,$t=it===null?Ct.material:it,Kt=Ct.group;wt.layers.test(at.layers)&&li(wt,V,at,Ht,$t,Kt)}}function li(A,V,at,it,X,Tt){A.onBeforeRender(w,V,at,it,X,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(w,V,at,it,A,Tt),X.transparent===!0&&X.side===ea&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,w.renderBufferDirect(at,V,it,X,A,Tt),X.side=Ha,X.needsUpdate=!0,w.renderBufferDirect(at,V,it,X,A,Tt),X.side=ea):w.renderBufferDirect(at,V,it,X,A,Tt),A.onAfterRender(w,V,at,it,X,Tt)}function Ye(A,V,at){V.isScene!==!0&&(V=Le);const it=qt.get(A),X=_.state.lights,Tt=_.state.shadowsArray,Ct=X.state.version,wt=Xt.getParameters(A,X.state,Tt,V,at),Ht=Xt.getProgramCacheKey(wt);let $t=it.programs;it.environment=A.isMeshStandardMaterial?V.environment:null,it.fog=V.fog,it.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,it.programs=$t);let Kt=$t.get(Ht);if(Kt!==void 0){if(it.currentProgram===Kt&&it.lightsStateVersion===Ct)return Di(A,wt),Kt}else wt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(wt,w),Kt=Xt.acquireProgram(wt,Ht),$t.set(Ht,Kt),it.uniforms=wt.uniforms;const Pt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=bt.uniform),Di(A,wt),it.needsLights=Ru(A),it.lightsStateVersion=Ct,it.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.directionalShadowMap.value=X.state.directionalShadowMap,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotShadowMap.value=X.state.spotShadowMap,Pt.spotLightMatrix.value=X.state.spotLightMatrix,Pt.spotLightMap.value=X.state.spotLightMap,Pt.pointShadowMap.value=X.state.pointShadowMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix),it.currentProgram=Kt,it.uniformsList=null,Kt}function dn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=xu.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Di(A,V){const at=qt.get(A);at.outputColorSpace=V.outputColorSpace,at.batching=V.batching,at.batchingColor=V.batchingColor,at.instancing=V.instancing,at.instancingColor=V.instancingColor,at.instancingMorph=V.instancingMorph,at.skinning=V.skinning,at.morphTargets=V.morphTargets,at.morphNormals=V.morphNormals,at.morphColors=V.morphColors,at.morphTargetsCount=V.morphTargetsCount,at.numClippingPlanes=V.numClippingPlanes,at.numIntersection=V.numClipIntersection,at.vertexAlphas=V.vertexAlphas,at.vertexTangents=V.vertexTangents,at.toneMapping=V.toneMapping}function Us(A,V,at,it,X){V.isScene!==!0&&(V=Le),U.resetTextureUnits();const Tt=V.fog,Ct=it.isMeshStandardMaterial?V.environment:null,wt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:bs,Ht=(it.isMeshStandardMaterial?et:T).get(it.envMap||Ct),$t=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Pt=!!at.morphAttributes.position,xe=!!at.morphAttributes.normal,we=!!at.morphAttributes.color;let Oe=Fa;it.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Oe=w.toneMapping);const Sn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,_e=Sn!==void 0?Sn.length:0,Gt=qt.get(it),rn=_.state.lights;if(ut===!0&&(yt===!0||A!==C)){const Mn=A===C&&it.id===D;bt.setState(it,A,Mn)}let ne=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==rn.state.version||Gt.outputColorSpace!==wt||X.isBatchedMesh&&Gt.batching===!1||!X.isBatchedMesh&&Gt.batching===!0||X.isBatchedMesh&&Gt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Gt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Gt.instancing===!1||!X.isInstancedMesh&&Gt.instancing===!0||X.isSkinnedMesh&&Gt.skinning===!1||!X.isSkinnedMesh&&Gt.skinning===!0||X.isInstancedMesh&&Gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Gt.instancingMorph===!1&&X.morphTexture!==null||Gt.envMap!==Ht||it.fog===!0&&Gt.fog!==Tt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==bt.numPlanes||Gt.numIntersection!==bt.numIntersection)||Gt.vertexAlphas!==$t||Gt.vertexTangents!==Kt||Gt.morphTargets!==Pt||Gt.morphNormals!==xe||Gt.morphColors!==we||Gt.toneMapping!==Oe||Gt.morphTargetsCount!==_e)&&(ne=!0):(ne=!0,Gt.__version=it.version);let Rn=Gt.currentProgram;ne===!0&&(Rn=Ye(it,V,X));let sa=!1,pn=!1,oa=!1;const Re=Rn.getUniforms(),Zn=Gt.uniforms;if(jt.useProgram(Rn.program)&&(sa=!0,pn=!0,oa=!0),it.id!==D&&(D=it.id,pn=!0),sa||C!==A){jt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),ZS(vt),KS(vt),Re.setValue(W,"projectionMatrix",vt)):Re.setValue(W,"projectionMatrix",A.projectionMatrix),Re.setValue(W,"viewMatrix",A.matrixWorldInverse);const ui=Re.map.cameraPosition;ui!==void 0&&ui.setValue(W,It.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&Re.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Re.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,pn=!0,oa=!0)}if(X.isSkinnedMesh){Re.setOptional(W,X,"bindMatrix"),Re.setOptional(W,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Re.setValue(W,"boneTexture",Mn.boneTexture,U))}X.isBatchedMesh&&(Re.setOptional(W,X,"batchingTexture"),Re.setValue(W,"batchingTexture",X._matricesTexture,U),Re.setOptional(W,X,"batchingIdTexture"),Re.setValue(W,"batchingIdTexture",X._indirectTexture,U),Re.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&Re.setValue(W,"batchingColorTexture",X._colorsTexture,U));const un=at.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&kt.update(X,at,Rn),(pn||Gt.receiveShadow!==X.receiveShadow)&&(Gt.receiveShadow=X.receiveShadow,Re.setValue(W,"receiveShadow",X.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Zn.envMap.value=Ht,Zn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&V.environment!==null&&(Zn.envMapIntensity.value=V.environmentIntensity),pn&&(Re.setValue(W,"toneMappingExposure",w.toneMappingExposure),Gt.needsLights&&Au(Zn,oa),Tt&&it.fog===!0&&Dt.refreshFogUniforms(Zn,Tt),Dt.refreshMaterialUniforms(Zn,it,j,Z,_.state.transmissionRenderTarget[A.id]),xu.upload(W,dn(Gt),Zn,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(xu.upload(W,dn(Gt),Zn,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Re.setValue(W,"center",X.center),Re.setValue(W,"modelViewMatrix",X.modelViewMatrix),Re.setValue(W,"normalMatrix",X.normalMatrix),Re.setValue(W,"modelMatrix",X.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Mn=it.uniformsGroups;for(let ui=0,Kn=Mn.length;ui<Kn;ui++){const Ui=Mn[ui];G.update(Ui,Rn),G.bind(Ui,Rn)}}return Rn}function Au(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ru(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,V,at){qt.get(A.texture).__webglTexture=V,qt.get(A.depthTexture).__webglTexture=at;const it=qt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=at===void 0,it.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const at=qt.get(A);at.__webglFramebuffer=V,at.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,at=0){k=A,F=V,O=at;let it=!0,X=null,Tt=!1,Ct=!1;if(A){const Ht=qt.get(A);if(Ht.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(W.FRAMEBUFFER,null),it=!1;else if(Ht.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Ht.__hasExternalTextures)U.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pt=A.depthTexture;if(Ht.__boundDepthTexture!==Pt){if(Pt!==null&&qt.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Kt=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?X=Kt[V][at]:X=Kt[V],Tt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?X=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[at]:X=Kt,H.copy(A.viewport),lt.copy(A.scissor),st=A.scissorTest}else H.copy(N).multiplyScalar(j).floor(),lt.copy(nt).multiplyScalar(j).floor(),st=xt;if(jt.bindFramebuffer(W.FRAMEBUFFER,X)&&it&&jt.drawBuffers(A,X),jt.viewport(H),jt.scissor(lt),jt.setScissorTest(st),Tt){const Ht=qt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ht.__webglTexture,at)}else if(Ct){const Ht=qt.get(A.texture),$t=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ht.__webglTexture,at||0,$t)}D=-1},this.readRenderTargetPixels=function(A,V,at,it,X,Tt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){jt.bindFramebuffer(W.FRAMEBUFFER,wt);try{const Ht=A.texture,$t=Ht.format,Kt=Ht.type;if(!de.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-it&&at>=0&&at<=A.height-X&&W.readPixels(V,at,it,X,ie.convert($t),ie.convert(Kt),Tt)}finally{const Ht=k!==null?qt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(W.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,V,at,it,X,Tt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){const Ht=A.texture,$t=Ht.format,Kt=Ht.type;if(!de.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-it&&at>=0&&at<=A.height-X){jt.bindFramebuffer(W.FRAMEBUFFER,wt);const Pt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Pt),W.bufferData(W.PIXEL_PACK_BUFFER,Tt.byteLength,W.STREAM_READ),W.readPixels(V,at,it,X,ie.convert($t),ie.convert(Kt),0);const xe=k!==null?qt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(W.FRAMEBUFFER,xe);const we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await jS(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Pt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Tt),W.deleteBuffer(Pt),W.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,at=0){A.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-at),X=Math.floor(A.image.width*it),Tt=Math.floor(A.image.height*it),Ct=V!==null?V.x:0,wt=V!==null?V.y:0;U.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,at,0,0,Ct,wt,X,Tt),jt.unbindTexture()},this.copyTextureToTexture=function(A,V,at=null,it=null,X=0){A.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],V=arguments[2],X=arguments[3]||0,at=null);let Tt,Ct,wt,Ht,$t,Kt,Pt,xe,we;const Oe=A.isCompressedTexture?A.mipmaps[X]:A.image;at!==null?(Tt=at.max.x-at.min.x,Ct=at.max.y-at.min.y,wt=at.isBox3?at.max.z-at.min.z:1,Ht=at.min.x,$t=at.min.y,Kt=at.isBox3?at.min.z:0):(Tt=Oe.width,Ct=Oe.height,wt=Oe.depth||1,Ht=0,$t=0,Kt=0),it!==null?(Pt=it.x,xe=it.y,we=it.z):(Pt=0,xe=0,we=0);const Sn=ie.convert(V.format),_e=ie.convert(V.type);let Gt;V.isData3DTexture?(U.setTexture3D(V,0),Gt=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(U.setTexture2DArray(V,0),Gt=W.TEXTURE_2D_ARRAY):(U.setTexture2D(V,0),Gt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const rn=W.getParameter(W.UNPACK_ROW_LENGTH),ne=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Rn=W.getParameter(W.UNPACK_SKIP_PIXELS),sa=W.getParameter(W.UNPACK_SKIP_ROWS),pn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Oe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Oe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ht),W.pixelStorei(W.UNPACK_SKIP_ROWS,$t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Kt);const oa=A.isDataArrayTexture||A.isData3DTexture,Re=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Zn=qt.get(A),un=qt.get(V),Mn=qt.get(Zn.__renderTarget),ui=qt.get(un.__renderTarget);jt.bindFramebuffer(W.READ_FRAMEBUFFER,Mn.__webglFramebuffer),jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Kn=0;Kn<wt;Kn++)oa&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(A).__webglTexture,X,Kt+Kn),A.isDepthTexture?(Re&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(V).__webglTexture,X,we+Kn),W.blitFramebuffer(Ht,$t,Tt,Ct,Pt,xe,Tt,Ct,W.DEPTH_BUFFER_BIT,W.NEAREST)):Re?W.copyTexSubImage3D(Gt,X,Pt,xe,we+Kn,Ht,$t,Tt,Ct):W.copyTexSubImage2D(Gt,X,Pt,xe,we+Kn,Ht,$t,Tt,Ct);jt.bindFramebuffer(W.READ_FRAMEBUFFER,null),jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Re?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Gt,X,Pt,xe,we,Tt,Ct,wt,Sn,_e,Oe.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Gt,X,Pt,xe,we,Tt,Ct,wt,Sn,Oe.data):W.texSubImage3D(Gt,X,Pt,xe,we,Tt,Ct,wt,Sn,_e,Oe):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,Pt,xe,Tt,Ct,Sn,_e,Oe.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,Pt,xe,Oe.width,Oe.height,Sn,Oe.data):W.texSubImage2D(W.TEXTURE_2D,X,Pt,xe,Tt,Ct,Sn,_e,Oe);W.pixelStorei(W.UNPACK_ROW_LENGTH,rn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ne),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Rn),W.pixelStorei(W.UNPACK_SKIP_ROWS,sa),W.pixelStorei(W.UNPACK_SKIP_IMAGES,pn),X===0&&V.generateMipmaps&&W.generateMipmap(Gt),jt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,at=null,it=null,X=0){return A.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,it=arguments[1]||null,A=arguments[2],V=arguments[3],X=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,at,it,X)},this.initRenderTarget=function(A){qt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),jt.unbindTexture()},this.resetState=function(){F=0,O=0,k=null,jt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Me._getDrawingBufferColorSpace(e),i.unpackColorSpace=Me._getUnpackColorSpace()}}class lA extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class md extends Va{constructor(e=1,i=.4,r=64,l=8,c=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:r,radialSegments:l,p:c,q:h},r=Math.floor(r),l=Math.floor(l);const d=[],m=[],p=[],x=[],v=new K,S=new K,y=new K,b=new K,R=new K,M=new K,_=new K;for(let L=0;L<=r;++L){const w=L/r*c*Math.PI*2;B(w,c,h,e,y),B(w+.01,c,h,e,b),M.subVectors(b,y),_.addVectors(b,y),R.crossVectors(M,_),_.crossVectors(R,M),R.normalize(),_.normalize();for(let $=0;$<=l;++$){const F=$/l*Math.PI*2,O=-i*Math.cos(F),k=i*Math.sin(F);v.x=y.x+(O*_.x+k*R.x),v.y=y.y+(O*_.y+k*R.y),v.z=y.z+(O*_.z+k*R.z),m.push(v.x,v.y,v.z),S.subVectors(v,y).normalize(),p.push(S.x,S.y,S.z),x.push(L/r),x.push($/l)}}for(let L=1;L<=r;L++)for(let w=1;w<=l;w++){const $=(l+1)*(L-1)+(w-1),F=(l+1)*L+(w-1),O=(l+1)*L+w,k=(l+1)*(L-1)+w;d.push($,F,k),d.push(F,O,k)}this.setIndex(d),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(p,3)),this.setAttribute("uv",new Ci(x,2));function B(L,w,$,F,O){const k=Math.cos(L),D=Math.sin(L),C=$/w*L,H=Math.cos(C);O.x=F*(2+H)*.5*k,O.y=F*(2+H)*D*.5,O.z=F*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class uA extends zo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gv extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const mh=new qe,sv=new K,ov=new K;class cA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;sv.setFromMatrixPosition(e.matrixWorld),i.position.copy(sv),ov.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ov),i.updateMatrixWorld(),mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lv=new qe,Ro=new K,gh=new K;class fA extends cA{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ro),gh.copy(r.position),gh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(gh),r.updateMatrixWorld(),l.makeTranslation(-Ro.x,-Ro.y,-Ro.z),lv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lv)}}class hA extends Gv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new fA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dA extends Gv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);function pA(){const o=dr.useRef(null),[e,i]=dr.useState(1),[r,l]=dr.useState("#10b981"),[c,h]=dr.useState(!0),[d,m]=dr.useState("Cyber Core"),p=[{name:"Cyber Core",desc:"Central processing engine of the matrix.",price:"$29.99"},{name:"Neon Visor",desc:"HUD visor for tactical digital analysis.",price:"$49.99"},{name:"Quantum Cell",desc:"Sub-atomic power storage container.",price:"$89.99"}];dr.useEffect(()=>{if(!o.current)return;const v=o.current.clientWidth,S=o.current.clientHeight,y=new lA,b=new jn(75,v/S,.1,1e3);b.position.z=3.5;const R=new oA({antialias:!0,alpha:!0});R.setSize(v,S);const M=Math.min(window.devicePixelRatio,2);R.setPixelRatio(M),o.current.appendChild(R.domElement);const _=new md(1,.3,100,16),B=new uA({color:new Te(r),roughness:.1,metalness:.8,wireframe:!0}),L=new Ai(_,B);y.add(L);const w=new dA(16777215,.6);y.add(w);const $=new hA(16777215,1.5,100);$.position.set(5,5,5),y.add($);const F=()=>{if(!o.current)return;const D=o.current.clientWidth,C=o.current.clientHeight;b.aspect=D/C,b.updateProjectionMatrix(),R.setSize(D,C)};window.addEventListener("resize",F);let O;const k=()=>{O=requestAnimationFrame(k),c&&(L.rotation.x+=.005*e,L.rotation.y+=.01*e),R.render(y,b)};return k(),()=>{cancelAnimationFrame(O),window.removeEventListener("resize",F),R.domElement&&o.current&&o.current.removeChild(R.domElement),_.dispose(),B.dispose(),R.dispose()}},[e,r,c]);const x=v=>{l(v)};return he.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-slate-100",children:[he.jsxs("div",{className:"relative w-full aspect-square bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center",children:[he.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full"}),he.jsxs("div",{className:"absolute top-4 left-4 font-mono text-xs bg-slate-900/90 p-3 rounded border border-slate-700 space-y-1",children:[he.jsx("p",{className:"text-emerald-400 font-bold",children:"// SYSTEM ACTIVE"}),he.jsx("p",{children:"FPS: 60.00"}),he.jsx("p",{children:"OBJECT: TORUS KNOT"}),he.jsxs("p",{children:["GEAR: ",d.toUpperCase()]})]})]}),he.jsxs("div",{className:"space-y-6",children:[he.jsxs("div",{className:"space-y-2",children:[he.jsx("span",{className:"text-xs uppercase tracking-widest font-mono text-emerald-400 font-bold",children:"ZEROLIFE MODULE // V1.0.0"}),he.jsx("h1",{className:"text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-rose-400 bg-clip-text text-transparent",children:"Equip Your Digital Reality"}),he.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"Configure, inspect, and purchase high-fidelity cybernetic modules directly into your neural net. High-performance, edge-rendered graphics."})]}),he.jsxs("div",{className:"bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80 space-y-4",children:[he.jsx("h2",{className:"text-md font-mono font-semibold text-slate-300",children:"// PARAMETERS CONFIG"}),he.jsxs("div",{className:"space-y-2",children:[he.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400",children:[he.jsx("span",{children:"ROTATION VELOCITY"}),he.jsxs("span",{children:[e.toFixed(1),"x"]})]}),he.jsx("input",{type:"range",min:"0",max:"4",step:"0.1",value:e,onChange:v=>i(parseFloat(v.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"})]}),he.jsxs("div",{className:"space-y-2",children:[he.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"SPECTRUM TINT"}),he.jsx("div",{className:"flex gap-3",children:[{hex:"#10b981",label:"Emerald"},{hex:"#f43f5e",label:"Rose"},{hex:"#3b82f6",label:"Azure"},{hex:"#eab308",label:"Amber"}].map(v=>he.jsx("button",{onClick:()=>x(v.hex),className:`w-8 h-8 rounded-full border-2 transition-all ${r===v.hex?"border-white scale-110":"border-transparent opacity-70 hover:opacity-100"}`,style:{backgroundColor:v.hex},title:v.label},v.hex))})]}),he.jsxs("div",{className:"flex items-center justify-between pt-2",children:[he.jsx("span",{className:"text-xs font-mono text-slate-400",children:"ANIMATE SYSTEM ROTATION"}),he.jsx("button",{onClick:()=>h(!c),className:`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${c?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/50":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:c?"ACTIVE":"PAUSED"})]})]}),he.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:p.map(v=>he.jsxs("button",{onClick:()=>m(v.name),className:`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${d===v.name?"bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10":"bg-slate-900/30 border-slate-800 hover:border-slate-700"}`,children:[he.jsxs("div",{children:[he.jsx("h3",{className:"font-semibold text-sm",children:v.name}),he.jsx("p",{className:"text-slate-500 text-xs mt-1 line-clamp-2",children:v.desc})]}),he.jsx("p",{className:"text-emerald-400 font-mono text-xs font-bold mt-3",children:v.price})]},v.name))}),he.jsx("div",{className:"flex gap-4 pt-2",children:he.jsx("button",{className:"flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]",children:"DEPLOY SELECTION // [ADD TO CART]"})})]})]})}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("landing-game-root");o&&aS.createRoot(o).render(he.jsx(Qx.StrictMode,{children:he.jsx(pA,{})}))});
