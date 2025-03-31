// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,N=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,N,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var b=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,u,a,f,c,s,p,l,v,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(u=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):b(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,v=e.width,g=e.padRight,y=void 0,(y=v-l.length)<0?l:l=g?l+w(y):w(y)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){var n,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return S.apply(null,n)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||$.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&O&&O.call(r,n,t.get),a&&T&&T.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function H(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function R(r){return r<0?L(r):C(r)}var M=Number,Z=M.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647;var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof er?er.toStringTag:"";var ur=rr()?function(r){var n,t,e,i,u;if(null==r)return nr.call(r);t=r[ir],u=ir,n=null!=(i=r)&&tr.call(i,u);try{r[ir]=void 0}catch(n){return nr.call(r)}return e=nr.call(r),n?r[ir]=t:delete r[ir],e}:function(r){return nr.call(r)},ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var fr,cr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===ur(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr=fr,pr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var vr,gr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,t;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,NaN]),t=n,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===ur(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var yr=vr,dr="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var hr,mr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===ur(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr=hr,br="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var _r,Er="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===ur(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Sr,kr={uint16:_r,uint8:wr};(Sr=new kr.uint16(1))[0]=4660;var Ur,Ir,jr=52===new kr.uint8(Sr.buffer)[0];!0===jr?(Ur=1,Ir=0):(Ur=0,Ir=1);var xr={HIGH:Ur,LOW:Ir},Fr=new yr(1),Or=new sr(Fr.buffer),Tr=xr.HIGH,Vr=xr.LOW;function $r(r,n,t,e){return Fr[0]=r,n[e]=Or[Tr],n[e+t]=Or[Vr],n}function Gr(r){return $r(r,[0,0],1,0)}H(Gr,"assign",$r);var Pr,Hr,Wr=!0===jr?1:0,Cr=new yr(1),Lr=new sr(Cr.buffer);function Rr(r){return Cr[0]=r,Lr[Wr]}!0===jr?(Pr=1,Hr=0):(Pr=0,Hr=1);var Mr={HIGH:Pr,LOW:Hr},Zr=new yr(1),qr=new sr(Zr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function zr(r,n){return qr[Xr]=r,qr[Yr]=n,Zr[0]}var Br=[0,0];function Dr(r,n){var t,e;return Gr.assign(r,Br,1,0),t=Br[0],t&=K,e=Rr(n),zr(t|=e&=J,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function rn(r,n,t,e){return W(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<Jr?(n[e]=r*Qr,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}H((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=2146435072;var tn=2220446049250313e-31,en=2148532223,un=[0,0],an=[0,0];function on(r,n){var t,e;return 0===n||0===r||W(r)||D(r)?r:(rn(r,un,1,0),r=un[0],n+=un[1],n+=function(r){var n=Rr(r);return(n=(n&nn)>>>20)-X|0}(r),n<B?Dr(0,r):n>Y?r<0?Z:q:(n<=z?(n+=52,e=tn):e=1,Gr.assign(r,an,1,0),t=an[0],t&=en,e*zr(t|=n+X<<20,an[1])))}var fn=.6931471803691238,cn=1.9082149292705877e-10,sn=1.4426950408889634,pn=709.782712893384,ln=-745.1332191019411,vn=1/(1<<28),gn=-vn;function yn(r){var n;return W(r)||r===q?r:r===Z?0:r>pn?q:r<ln?0:r>gn&&r<vn?1+r:function(r,n,t){var e,i,u,a;return on(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-(n=R(r<0?sn*r-.5:sn*r+.5))*fn,n*cn,n)}function dn(r){return C(r)===r}function Nn(r){return dn(r/2)}function hn(r){return Nn(r>0?r-1:r+1)}var mn=Math.sqrt,wn=!0===jr?0:1,bn=new yr(1),An=new sr(bn.buffer);function _n(r,n){return bn[0]=r,An[wn]=n>>>0,bn[0]}function En(r){return 0|r}var Sn=1072693247,kn=1e300,Un=1e-300;var In=!0===jr?1:0,jn=new yr(1),xn=new sr(jn.buffer);function Fn(r,n){return jn[0]=r,xn[In]=n>>>0,jn[0]}var On=1048575,Tn=1048576,Vn=1072693248,$n=536870912,Gn=524288,Pn=20,Hn=9007199254740992,Wn=.9617966939259756,Cn=.9617967009544373,Ln=-7.028461650952758e-9,Rn=[1,1.5],Mn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8];var qn=1.4426950408889634,Xn=1.4426950216293335,Yn=1.9259629911266175e-8;var zn=.6931471805599453,Bn=1048575;var Dn=1048576,Jn=1071644672,Kn=20,Qn=.6931471824645996,rt=-1.904654299957768e-9;var nt=1072693247,tt=1105199104,et=1139802112,it=1083179008,ut=1072693248,at=1083231232,ot=3230714880,ft=31,ct=1e300,st=1e-300,pt=8008566259537294e-32,lt=[0,0],vt=[0,0];function gt(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,g,y;if(W(r)||W(n))return NaN;if(Gr.assign(n,lt,1,0),a=lt[0],0===lt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mn(r);if(-.5===n)return 1/mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if(Gr.assign(r,lt,1,0),u=lt[0],0===lt[1]){if(0===u)return function(r,n){return n===Z?q:n===q?0:n>0?hn(n)?r:0:hn(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&hn(n))return-1;if(D(r))return r===Z?gt(-0,-n):n<0?0:q}if(r<0&&!1===dn(n))return(r-r)/(r-r);if(i=Kr(r),t=u&K|0,e=a&K|0,f=a>>>ft|0,o=(o=u>>>ft|0)&&hn(n)?-1:1,e>tt){if(e>et)return function(r,n){return(Rr(r)&K)<=Sn?n<0?kn*kn:Un*Un:n>0?kn*kn:Un*Un}(r,n);if(t<nt)return 1===f?o*ct*ct:o*st*st;if(t>ut)return 0===f?o*ct*ct:o*st*st;l=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Yn-u*qn)-((e=_n(e=(a=Xn*i)+o,0))-a),r[0]=e,r[1]=t,r}(vt,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,d,N,h,m,w,b,A,_;return w=0,t<Tn&&(w-=53,t=Rr(n*=Hn)),w+=(t>>Pn)-X|0,t=(b=t&On|0)|Vn|0,b<=235662?A=0:b<767610?A=1:(A=0,w+=1,t-=Tn),a=_n(i=(h=(n=Fn(n,t))-(c=Rn[A]))*(m=1/(n+c)),0),e=(t>>1|$n)+Gn,f=Fn(0,e+=A<<18),N=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=_n(f=3+(u=a*a)+(N+=(o=m*(h-a*f-a*(n-(f-c))))*(a+i)),0),p=_n(p=(h=a*f)+(m=o*f+(N-(f-3-u))*i),0),l=Cn*p,y=(v=Ln*p+(m-(p-h))*Wn+Zn[A])-((g=_n(g=l+v+(s=Mn[A])+(d=w),0))-d-s-l),r[0]=g,r[1]=y,r}(vt,i,t);if(v=(p=(n-(c=_n(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Gr.assign(v,lt,1,0),g=En(lt[0]),y=En(lt[1]),g>=it){if(0!=(g-it|y))return o*ct*ct;if(p+pt>v-s)return o*ct*ct}else if((g&K)>=at){if(0!=(g-ot|y))return o*st*st;if(p<=v-s)return o*st*st}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&K|0)>>Kn)-X|0,c=0,s>Jn&&(i=Fn(0,((c=r+(Dn>>p+1)>>>0)&~(Bn>>(p=((c&K)>>Kn)-X|0)))>>>0),c=(c&Bn|Dn)>>Kn-p>>>0,r<0&&(c=-c),n-=i),r=En(r=Rr(f=1-((f=(u=(i=_n(i=t+n,0))*Qn)+(a=(t-(i-n))*zn+i*rt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<Kn>>>0)>>Kn<=0?on(f,c):Fn(f,r)}(g,s,p),o*v}function yt(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=gt(n,2),1-yn(-gt(r,2)/(2*t)))}function dt(r){return function(){return r}}function Nt(r){return W(r)?dt(NaN):function(n){if(W(n))return NaN;return n<r?0:1}}function ht(r,n,t){G(r,n,{configurable:!1,enumerable:!1,get:t})}function mt(r){return"number"==typeof r}H((function(r,n){return W(r)||W(n)?NaN:r<n?0:1}),"factory",Nt),H(yt,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?Nt(0):(n=gt(r,2),function(r){if(W(r))return NaN;if(r<0)return 0;return 1-yn(-gt(r,2)/(2*n))})}));var wt=M.prototype.toString;var bt=rr();function At(r){return"object"==typeof r&&(r instanceof M||(bt?function(r){try{return wt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ur(r)))}function _t(r){return mt(r)||At(r)}function Et(r){return mt(r)&&r>0}function St(r){return At(r)&&r.valueOf()>0}function kt(r){return Et(r)||St(r)}H(_t,"isPrimitive",mt),H(_t,"isObject",At),H(kt,"isPrimitive",Et),H(kt,"isObject",St);var Ut=.6931471803691238,It=1.9082149292705877e-10,jt=0x40000000000000,xt=.3333333333333333,Ft=1048575,Ot=2146435072,Tt=1048576,Vt=1072693248;function $t(r){var n,t,e,i,u,a,o,f,c,s,p,l;return 0===r?Z:W(r)||r<0?NaN:(u=0,(t=Rr(r))<Tt&&(u-=54,t=Rr(r*=jt)),t>=Ot?r+r:(u+=(t>>20)-X|0,u+=(f=(t&=Ft)+614244&1048576|0)>>20|0,o=(r=Fn(r,t|f^Vt))-1,(Ft&2+t)<3?0===o?0===u?0:u*Ut+u*It:(a=o*o*(.5-xt*o),0===u?o-a:u*Ut-(a-u*It-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*Ut-(n-(s*(n+a)+u*It)-o)):0===u?o-s*(o-a):u*Ut-(s*(o-a)-u*It-o))))}var Gt=1.4142135623730951;function Pt(r){return W(r)||r<=0?NaN:1+$t(r/Gt)+.28860783245076643}var Ht=3.141592653589793;function Wt(r){return W(r)||r<0?NaN:.2450893006876391}var Ct=1.2533141373155003;function Lt(r){return W(r)||r<0?NaN:r*Ct}var Rt=mn(2*zn);function Mt(r){return W(r)||r<0?NaN:r*Rt}function Zt(r){return W(r)||r<0?NaN:r}function qt(r){return Nn(r>0?r-1:r+1)}var Xt=1072693247,Yt=1e300,zt=1e-300;var Bt=1048575,Dt=1048576,Jt=1072693248,Kt=536870912,Qt=524288,re=20,ne=9007199254740992,te=.9617966939259756,ee=.9617967009544373,ie=-7.028461650952758e-9,ue=[1,1.5],ae=[0,.5849624872207642],oe=[0,1.350039202129749e-8];var fe=1.4426950408889634,ce=1.4426950216293335,se=1.9259629911266175e-8;var pe=1048576,le=1071644672,ve=20,ge=.6931471824645996,ye=-1.904654299957768e-9;var de=1083179008,Ne=1e300,he=1e-300,me=[0,0],we=[0,0];var be=.5019328882303191/function r(n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,d;if(W(n)||W(t))return NaN;if(Gr.assign(t,me,1,0),o=me[0],0===me[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return mn(n);if(-.5===t)return 1/mn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(D(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(n,t)}if(Gr.assign(n,me,1,0),a=me[0],0===me[1]){if(0===a)return function(r,n){return n===Z?q:n===q?0:n>0?qt(n)?r:0:qt(n)?Dr(q,r):q}(n,t);if(1===n)return 1;if(-1===n&&qt(t))return-1;if(D(n))return n===Z?r(-0,-t):t<0?0:q}if(n<0&&!1===dn(t))return(n-n)/(n-n);if(u=Kr(n),e=a&K|0,i=o&K|0,c=o>>>31|0,f=(f=a>>>31|0)&&qt(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(Rr(r)&K)<=Xt?n<0?Yt*Yt:zt*zt:n>0?Yt*Yt:zt*zt}(n,t);if(e<1072693247)return 1===c?f*Ne*Ne:f*he*he;if(e>1072693248)return 0===c?f*Ne*Ne:f*he*he;v=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*se-u*fe)-((e=_n(e=(a=ce*i)+o,0))-a),r[0]=e,r[1]=t,r}(we,u)}else v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,d,N,h,m,w,b,A,_;return w=0,t<Dt&&(w-=53,t=Rr(n*=ne)),w+=(t>>re)-X|0,t=(b=t&Bt|0)|Jt|0,b<=235662?A=0:b<767610?A=1:(A=0,w+=1,t-=Dt),a=_n(i=(h=(n=Fn(n,t))-(c=ue[A]))*(m=1/(n+c)),0),e=(t>>1|Kt)+Qt,f=Fn(0,e+=A<<18),N=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=_n(f=3+(u=a*a)+(N+=(o=m*(h-a*f-a*(n-(f-c))))*(a+i)),0),p=_n(p=(h=a*f)+(m=o*f+(N-(f-3-u))*i),0),l=ee*p,y=(v=ie*p+(m-(p-h))*te+oe[A])-((g=_n(g=l+v+(s=ae[A])+(d=w),0))-d-s-l),r[0]=g,r[1]=y,r}(we,u,e);if(g=(l=(t-(s=_n(t,0)))*v[0]+t*v[1])+(p=s*v[0]),Gr.assign(g,me,1,0),y=En(me[0]),d=En(me[1]),y>=de){if(0!=(y-de|d))return f*Ne*Ne;if(l+8008566259537294e-32>g-p)return f*Ne*Ne}else if((y&K)>=1083231232){if(0!=(y-3230714880|d))return f*he*he;if(l<=g-p)return f*he*he}return g=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&K|0)>>ve)-X|0,c=0,s>le&&(i=Fn(0,((c=r+(pe>>p+1)>>>0)&~(Bn>>(p=((c&K)>>ve)-X|0)))>>>0),c=(c&Bn|pe)>>ve-p>>>0,r<0&&(c=-c),n-=i),r=En(r=Rr(f=1-((f=(u=(i=_n(i=t+n,0))*ge)+(a=(t-(i-n))*zn+i*ye))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<ve>>>0)>>ve<=0?on(f,c):Fn(f,r)}(y,p,l),f*g}(4-Ht,1.5);function Ae(r){return W(r)||r<0?NaN:be}var _e=mn(4-Ht);function Ee(r){return W(r)||r<0?NaN:_e*r/Gt}function Se(r){return W(r)||r<0?NaN:(4-Ht)*r*r/2}var ke=.34657359027997264;var Ue=709.782712893384,Ie=.6931471803691238,je=1.9082149292705877e-10,xe=1.4426950408889634,Fe=38.816242111356935,Oe=1.0397207708399179;function Te(r){var n,t,e,i,u,a,o,f,c,s,p,l,v;if(r===q||W(r))return r;if(r===Z)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=Fe){if(e)return-1;if(f>=Ue)return q}if(a=0|Rr(f),f>ke)f<Oe?e?(i=r+Ie,u=-je,v=-1):(i=r-Ie,u=je,v=1):(v=e?xe*r-.5:xe*r+.5,i=r-(p=v|=0)*Ie,u=p*je),s=i-(r=i-u)-u;else{if(a<1016070144)return r;v=0}return o=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((o-(p=3-o*n))/(6-r*p)),0===v?r-(r*l-c):(t=zr(X+v<<20,0),l=r*(l-s)-s,l-=c,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(f=1-(l-r),1024===v?f=Fn(f,i=Rr(f)+(v<<20)|0):f*=t,f-1):(p=1,v<20?f=(p=Fn(p,i=1072693248-(2097152>>v)|0))-(l-r):(f=r-(l+(p=Fn(p,i=X-v<<20|0))),f+=1),f*=t))}var Ve=.6931471803691238,$e=1.9082149292705877e-10,Ge=.41421356237309503,Pe=-.2928932188134525,He=1.862645149230957e-9,We=5551115123125783e-32,Ce=9007199254740992,Le=.6666666666666666;function Re(r){var n,t,e,i,u,a,o,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return Z;if(r===q)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Ge){if(e<He)return e<We?r:r-r*r*.5;r>Pe&&(s=0,i=r,t=1)}return 0!==s&&(e<Ce?(u=(s=((t=Rr(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),u/=c):(s=((t=Rr(c=r))>>20)-X,u=0),(t&=1048575)<434334?c=Fn(c,1072693248|t):(s+=1,c=Fn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Ve+(u+=s*$e):s*Ve-((f=n*(1-Le*i))-(s*$e+u)-i):(f=(o=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(n-a*(n+f)):s*Ve-(n-(a*(n+f)+(s*$e+u))-i))}var Me=-.6931471805599453;function Ze(r,n){var t,e;return W(r)||W(n)||n<0?NaN:0===n?r<0?Z:0:r<0?Z:(t=gt(n,2),(e=-gt(r,2)/(2*t))<Me?Re(-yn(e)):$t(-Te(e)))}function qe(r){return W(r)?dt(NaN):function(n){if(W(n))return NaN;return n<r?Z:0}}function Xe(r){return Nn(r>0?r-1:r+1)}H((function(r,n){return W(r)||W(n)?NaN:r<n?Z:0}),"factory",qe),H(Ze,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?qe(0):(n=gt(r,2),function(r){var t;if(W(r))return NaN;if(r<0)return Z;return(t=-gt(r,2)/(2*n))<Me?Re(-yn(t)):$t(-Te(t))})}));var Ye=1072693247,ze=1e300,Be=1e-300;var De=1048575,Je=1048576,Ke=1072693248,Qe=536870912,ri=524288,ni=20,ti=9007199254740992,ei=.9617966939259756,ii=.9617967009544373,ui=-7.028461650952758e-9,ai=[1,1.5],oi=[0,.5849624872207642],fi=[0,1.350039202129749e-8];var ci=1.4426950408889634,si=1.4426950216293335,pi=1.9259629911266175e-8;var li=1048576,vi=1071644672,gi=20,yi=.6931471824645996,di=-1.904654299957768e-9;var Ni=1072693247,hi=1105199104,mi=1139802112,wi=1083179008,bi=1072693248,Ai=1083231232,_i=3230714880,Ei=31,Si=1e300,ki=1e-300,Ui=8008566259537294e-32,Ii=[0,0],ji=[0,0];function xi(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,g,y;if(W(r)||W(n))return NaN;if(Gr.assign(n,Ii,1,0),a=Ii[0],0===Ii[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mn(r);if(-.5===n)return 1/mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if(Gr.assign(r,Ii,1,0),u=Ii[0],0===Ii[1]){if(0===u)return function(r,n){return n===Z?q:n===q?0:n>0?Xe(n)?r:0:Xe(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&Xe(n))return-1;if(D(r))return r===Z?xi(-0,-n):n<0?0:q}if(r<0&&!1===dn(n))return(r-r)/(r-r);if(i=Kr(r),t=u&K|0,e=a&K|0,f=a>>>Ei|0,o=(o=u>>>Ei|0)&&Xe(n)?-1:1,e>hi){if(e>mi)return function(r,n){return(Rr(r)&K)<=Ye?n<0?ze*ze:Be*Be:n>0?ze*ze:Be*Be}(r,n);if(t<Ni)return 1===f?o*Si*Si:o*ki*ki;if(t>bi)return 0===f?o*Si*Si:o*ki*ki;l=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*pi-u*ci)-((e=_n(e=(a=si*i)+o,0))-a),r[0]=e,r[1]=t,r}(ji,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,d,N,h,m,w,b,A,_;return w=0,t<Je&&(w-=53,t=Rr(n*=ti)),w+=(t>>ni)-X|0,t=(b=t&De|0)|Ke|0,b<=235662?A=0:b<767610?A=1:(A=0,w+=1,t-=Je),a=_n(i=(h=(n=Fn(n,t))-(c=ai[A]))*(m=1/(n+c)),0),e=(t>>1|Qe)+ri,f=Fn(0,e+=A<<18),N=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=_n(f=3+(u=a*a)+(N+=(o=m*(h-a*f-a*(n-(f-c))))*(a+i)),0),p=_n(p=(h=a*f)+(m=o*f+(N-(f-3-u))*i),0),l=ii*p,y=(v=ui*p+(m-(p-h))*ei+fi[A])-((g=_n(g=l+v+(s=oi[A])+(d=w),0))-d-s-l),r[0]=g,r[1]=y,r}(ji,i,t);if(v=(p=(n-(c=_n(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Gr.assign(v,Ii,1,0),g=En(Ii[0]),y=En(Ii[1]),g>=wi){if(0!=(g-wi|y))return o*Si*Si;if(p+Ui>v-s)return o*Si*Si}else if((g&K)>=Ai){if(0!=(g-_i|y))return o*ki*ki;if(p<=v-s)return o*ki*ki}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&K|0)>>gi)-X|0,c=0,s>vi&&(i=Fn(0,((c=r+(li>>p+1)>>>0)&~(Bn>>(p=((c&K)>>gi)-X|0)))>>>0),c=(c&Bn|li)>>gi-p>>>0,r<0&&(c=-c),n-=i),r=En(r=Rr(f=1-((f=(u=(i=_n(i=t+n,0))*yi)+(a=(t-(i-n))*zn+i*di))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<gi>>>0)>>gi<=0?on(f,c):Fn(f,r)}(g,s,p),o*v}function Fi(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?0===r?q:Z:r<0||r===q?Z:$t(1/(t=xi(n,2))*r)-xi(r,2)/(2*t)}function Oi(r){return W(r)?dt(NaN):function(n){if(W(n))return NaN;return n===r?q:Z}}H((function(r,n){return W(r)||W(n)?NaN:r===n?q:Z}),"factory",Oi),H(Fi,"factory",(function(r){var n,t;return W(r)||r<0?dt(NaN):0===r?Oi(0):(t=xi(r,2),n=1/t,function(r){if(W(r))return NaN;if(r<0||r===q)return Z;return $t(n*r)-xi(r,2)/(2*t)})}));var Ti=1e-300,Vi=2848094538889218e-321,$i=3.725290298461914e-9,Gi=.8450629115104675,Pi=.1283791670955126,Hi=1.0270333367641007,Wi=.12837916709551256,Ci=1,Li=-.0023621185607526594,Ri=1,Mi=-.009864944034847148,Zi=1,qi=-.0098649429247001,Xi=1;function Yi(r){var n,t,e,i,u,a,o;return W(r)?NaN:r===q?1:r===Z?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<$i?t<Vi?.125*(8*r+Hi*r):r+Pi*r:(i=Wi+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=Ci+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(i/u)):t<1.25?(a=Li+(u=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u),o=Ri+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),n?-Gi-a/o:Gi+a/o):t>=6?n?Ti-1:1-Ti:(u=1/(t*t),t<2.857142857142857?(i=Mi+u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u),u=Zi+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u)):(i=qi+u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u),u=Xi+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)),i=yn(-(e=_n(t,0))*e-.5625)*yn((e-t)*(e+t)+i/u),n?i/t-1:1-i/t))}function zi(r,n){var t,e;return W(r)||W(n)||n<0?NaN:(e=1+(t=r*n)*yn(t*t/2),e*=Ct*(Yi(t/Gt)+1))}function Bi(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?0===r?q:0:r<0||r===q?0:1/(t=gt(n,2))*r*yn(-gt(r,2)/(2*t))}function Di(r){return W(r)?dt(NaN):function(n){if(W(n))return NaN;return n===r?q:0}}function Ji(r,n){return W(n)||n<0||W(r)||r<0||r>1?NaN:0===n?0:mn(-2*(n*n)*Re(-r))}function Ki(r){return W(r)?dt(NaN):function(n){if(W(n)||n<0||n>1)return NaN;return r}}function Qi(){var r;if(!(this instanceof Qi))return 0===arguments.length?new Qi:new Qi(arguments[0]);if(arguments.length){if(!Et(r=arguments[0]))throw new TypeError(j("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else r=1;return G(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Et(n))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}H(zi,"factory",(function(r){return W(r)||r<0?dt(NaN):function(n){var t,e;if(W(n))return NaN;return e=1+(t=n*r)*yn(t*t/2),e*=Ct*(Yi(t/Gt)+1)}})),H((function(r,n){return W(r)||W(n)?NaN:r===n?q:0}),"factory",Di),H(Bi,"factory",(function(r){var n,t;return W(r)||r<0?dt(NaN):0===r?Di(0):(t=gt(r,2),n=1/t,function(r){if(W(r))return NaN;if(r<0||r===q)return 0;return n*r*yn(-gt(r,2)/(2*t))})})),H((function(r,n){return W(r)||r<0||r>1?NaN:n}),"factory",Ki),H(Ji,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?Ki(0):(n=r*r,function(r){if(W(r)||r<0||r>1)return NaN;return mn(-2*n*Re(-r))})})),ht(Qi.prototype,"entropy",(function(){return Pt(this.sigma)})),ht(Qi.prototype,"kurtosis",(function(){return Wt(this.sigma)})),ht(Qi.prototype,"mean",(function(){return Lt(this.sigma)})),ht(Qi.prototype,"median",(function(){return Mt(this.sigma)})),ht(Qi.prototype,"mode",(function(){return Zt(this.sigma)})),ht(Qi.prototype,"skewness",(function(){return Ae(this.k,this.sigma)})),ht(Qi.prototype,"stdev",(function(){return Ee(this.sigma)})),ht(Qi.prototype,"variance",(function(){return Se(this.sigma)})),H(Qi.prototype,"cdf",(function(r){return yt(r,this.sigma)})),H(Qi.prototype,"logcdf",(function(r){return Ze(r,this.sigma)})),H(Qi.prototype,"logpdf",(function(r){return Fi(r,this.sigma)})),H(Qi.prototype,"mgf",(function(r){return zi(r,this.sigma)})),H(Qi.prototype,"pdf",(function(r){return Bi(r,this.sigma)})),H(Qi.prototype,"quantile",(function(r){return Ji(r,this.sigma)}));var ru={};P(ru,"cdf",yt),P(ru,"Rayleigh",Qi),P(ru,"entropy",Pt),P(ru,"kurtosis",Wt),P(ru,"logcdf",Ze),P(ru,"logpdf",Fi),P(ru,"mean",Lt),P(ru,"median",Mt),P(ru,"mgf",zi),P(ru,"mode",Zt),P(ru,"pdf",Bi),P(ru,"quantile",Ji),P(ru,"skewness",Ae),P(ru,"stdev",Ee),P(ru,"variance",Se);export{Qi as Rayleigh,yt as cdf,ru as default,Pt as entropy,Wt as kurtosis,Ze as logcdf,Fi as logpdf,Lt as mean,Mt as median,zi as mgf,Zt as mode,Bi as pdf,Ji as quantile,Ae as skewness,Ee as stdev,Se as variance};
//# sourceMappingURL=mod.js.map
