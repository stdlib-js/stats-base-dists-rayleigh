// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,N=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,N,"$1e"),e=p.call(e,h,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function b(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var w=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function k(r){var n,t,e,a,o,f,c,s,p,l,y,g,v;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):w(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,v=void 0,(v=y-l.length)<0?l:l=g?l+b(v):b(v)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return k.apply(null,n)}var x=Object.prototype,F=x.toString,T=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||$.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,n,t.get),o&&O&&O.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function H(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function R(r){return r<0?L(r):C(r)}var M=Number,Z=M.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr,tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var n,t,e,i,a;if(null==r)return tr.call(r);t=r[ar],a=ar,n=null!=(i=r)&&er.call(i,a);try{r[ar]=void 0}catch(n){return tr.call(r)}return e=tr.call(r),n?r[ar]=t:delete r[ar],e}:function(r){return tr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,pr=nr,lr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr,dr=sr,hr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var br,wr=vr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,n,t;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var kr,Sr={uint16:br,uint8:wr};(kr=new Sr.uint16(1))[0]=4660;var Ur,jr,Ir=52===new Sr.uint8(kr.buffer)[0];!0===Ir?(Ur=1,jr=0):(Ur=0,jr=1);var xr={HIGH:Ur,LOW:jr},Fr=new dr(1),Tr=new pr(Fr.buffer),Or=xr.HIGH,Vr=xr.LOW;function $r(r,n,t,e){return Fr[0]=r,n[e]=Tr[Or],n[e+t]=Tr[Vr],n}function Gr(r){return $r(r,[0,0],1,0)}H(Gr,"assign",$r);var Pr,Hr,Wr=!0===Ir?1:0,Cr=new dr(1),Lr=new pr(Cr.buffer);function Rr(r){return Cr[0]=r,Lr[Wr]}!0===Ir?(Pr=1,Hr=0):(Pr=0,Hr=1);var Mr={HIGH:Pr,LOW:Hr},Zr=new dr(1),qr=new pr(Zr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function zr(r,n){return qr[Xr]=r,qr[Yr]=n,Zr[0]}var Br=[0,0];function Dr(r,n){var t,e;return Gr.assign(r,Br,1,0),t=Br[0],t&=K,e=Rr(n),zr(t|=e&=J,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function rn(r,n,t,e){return W(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<Jr?(n[e]=r*Qr,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}H((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=2146435072,tn=2220446049250313e-31,en=2148532223,an=[0,0],on=[0,0];function un(r,n){var t,e;return 0===n||0===r||W(r)||D(r)?r:(rn(r,an,1,0),r=an[0],n+=an[1],n+=function(r){var n=Rr(r);return(n=(n&nn)>>>20)-X|0}(r),n<B?Dr(0,r):n>Y?r<0?Z:q:(n<=z?(n+=52,e=tn):e=1,Gr.assign(r,on,1,0),t=on[0],t&=en,e*zr(t|=n+X<<20,on[1])))}var fn=.6931471803691238,cn=1.9082149292705877e-10,sn=1.4426950408889634,pn=709.782712893384,ln=-745.1332191019411,yn=1/(1<<28),gn=-yn;function vn(r){var n;return W(r)||r===q?r:r===Z?0:r>pn?q:r<ln?0:r>gn&&r<yn?1+r:function(r,n,t){var e,i,a,o;return un(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(n=R(r<0?sn*r-.5:sn*r+.5))*fn,n*cn,n)}function dn(r){return C(r)===r}function hn(r){return dn(r/2)}function Nn(r){return hn(r>0?r-1:r+1)}var mn=Math.sqrt,bn=!0===Ir?0:1,wn=new dr(1),An=new pr(wn.buffer);function _n(r,n){return wn[0]=r,An[bn]=n>>>0,wn[0]}function En(r){return 0|r}var kn=1072693247,Sn=1e300,Un=1e-300,jn=!0===Ir?1:0,In=new dr(1),xn=new pr(In.buffer);function Fn(r,n){return In[0]=r,xn[jn]=n>>>0,In[0]}var Tn=1048575,On=1048576,Vn=1072693248,$n=536870912,Gn=524288,Pn=20,Hn=9007199254740992,Wn=.9617966939259756,Cn=.9617967009544373,Ln=-7.028461650952758e-9,Rn=[1,1.5],Mn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8],qn=1.4426950408889634,Xn=1.4426950216293335,Yn=1.9259629911266175e-8,zn=.6931471805599453,Bn=1048575,Dn=1048576,Jn=1071644672,Kn=20,Qn=.6931471824645996,rt=-1.904654299957768e-9,nt=1072693247,tt=1105199104,et=1139802112,it=1083179008,at=1072693248,ot=1083231232,ut=3230714880,ft=31,ct=1e300,st=1e-300,pt=8008566259537294e-32,lt=[0,0],yt=[0,0];function gt(r,n){var t,e,i,a,o,u,f,c,s,p,l,y,g,v;if(W(r)||W(n))return NaN;if(Gr.assign(n,lt,1,0),o=lt[0],0===lt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mn(r);if(-.5===n)return 1/mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if(Gr.assign(r,lt,1,0),a=lt[0],0===lt[1]){if(0===a)return function(r,n){return n===Z?q:n===q?0:n>0?Nn(n)?r:0:Nn(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&Nn(n))return-1;if(D(r))return r===Z?gt(-0,-n):n<0?0:q}if(r<0&&!1===dn(n))return(r-r)/(r-r);if(i=Kr(r),t=a&K|0,e=o&K|0,f=o>>>ft|0,u=(u=a>>>ft|0)&&Nn(n)?-1:1,e>tt){if(e>et)return function(r,n){return(Rr(r)&K)<=kn?n<0?Sn*Sn:Un*Un:n>0?Sn*Sn:Un*Un}(r,n);if(t<nt)return 1===f?u*ct*ct:u*st*st;if(t>at)return 0===f?u*ct*ct:u*st*st;l=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Yn-a*qn)-((e=_n(e=(o=Xn*i)+u,0))-o),r[0]=e,r[1]=t,r}(yt,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y,g,v,d,h,N,m,b,w,A,_;return b=0,t<On&&(b-=53,t=Rr(n*=Hn)),b+=(t>>Pn)-X|0,t=(w=t&Tn|0)|Vn|0,w<=235662?A=0:w<767610?A=1:(A=0,b+=1,t-=On),o=_n(i=(N=(n=Fn(n,t))-(c=Rn[A]))*(m=1/(n+c)),0),e=(t>>1|$n)+Gn,f=Fn(0,e+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=_n(f=3+(a=o*o)+(h+=(u=m*(N-o*f-o*(n-(f-c))))*(o+i)),0),p=_n(p=(N=o*f)+(m=u*f+(h-(f-3-a))*i),0),l=Cn*p,v=(y=Ln*p+(m-(p-N))*Wn+Zn[A])-((g=_n(g=l+y+(s=Mn[A])+(d=b),0))-d-s-l),r[0]=g,r[1]=v,r}(yt,i,t);if(y=(p=(n-(c=_n(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Gr.assign(y,lt,1,0),g=En(lt[0]),v=En(lt[1]),g>=it){if(0!=(g-it|v))return u*ct*ct;if(p+pt>y-s)return u*ct*ct}else if((g&K)>=ot){if(0!=(g-ut|v))return u*st*st;if(p<=y-s)return u*st*st}return y=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&K|0)>>Kn)-X|0,c=0,s>Jn&&(i=Fn(0,((c=r+(Dn>>p+1)>>>0)&~(Bn>>(p=((c&K)>>Kn)-X|0)))>>>0),c=(c&Bn|Dn)>>Kn-p>>>0,r<0&&(c=-c),n-=i),r=En(r=Rr(f=1-((f=(a=(i=_n(i=t+n,0))*Qn)+(o=(t-(i-n))*zn+i*rt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Kn>>>0)>>Kn<=0?un(f,c):Fn(f,r)}(g,s,p),u*y}function vt(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=gt(n,2),1-vn(-gt(r,2)/(2*t)))}function dt(r){return function(){return r}}function ht(r){return W(r)?dt(NaN):function(n){return W(n)?NaN:n<r?0:1}}function Nt(r,n,t){G(r,n,{configurable:!1,enumerable:!1,get:t})}function mt(r){return"number"==typeof r}H((function(r,n){return W(r)||W(n)?NaN:r<n?0:1}),"factory",ht),H(vt,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?ht(0):(n=gt(r,2),function(r){return W(r)?NaN:r<0?0:1-vn(-gt(r,2)/(2*n))})}));var bt=M.prototype.toString,wt=rr();function At(r){return"object"==typeof r&&(r instanceof M||(wt?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function _t(r){return mt(r)||At(r)}function Et(r){return mt(r)&&r>0}function kt(r){return At(r)&&r.valueOf()>0}function St(r){return Et(r)||kt(r)}H(_t,"isPrimitive",mt),H(_t,"isObject",At),H(St,"isPrimitive",Et),H(St,"isObject",kt);var Ut=.6931471803691238,jt=1.9082149292705877e-10,It=0x40000000000000,xt=.3333333333333333,Ft=1048575,Tt=2146435072,Ot=1048576,Vt=1072693248;function $t(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Z:W(r)||r<0?NaN:(a=0,(t=Rr(r))<Ot&&(a-=54,t=Rr(r*=It)),t>=Tt?r+r:(a+=(t>>20)-X|0,a+=(f=614244+(t&=Ft)&1048576|0)>>20|0,u=(r=Fn(r,t|f^Vt))-1,(Ft&2+t)<3?0===u?0===a?0:a*Ut+a*jt:(o=u*u*(.5-xt*u),0===a?u-o:a*Ut-(o-a*jt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Ut-(n-(s*(n+o)+a*jt)-u)):0===a?u-s*(u-o):a*Ut-(s*(u-o)-a*jt-u))))}var Gt=1.4142135623730951;function Pt(r){return W(r)||r<=0?NaN:1+$t(r/Gt)+.28860783245076643}var Ht=3.141592653589793;function Wt(r){return W(r)||r<0?NaN:.2450893006876391}var Ct=1.2533141373155003;function Lt(r){return W(r)||r<0?NaN:r*Ct}var Rt=mn(2*zn);function Mt(r){return W(r)||r<0?NaN:r*Rt}function Zt(r){return W(r)||r<0?NaN:r}var qt=.5019328882303191/gt(4-Ht,1.5);function Xt(r){return W(r)||r<0?NaN:qt}var Yt=mn(4-Ht);function zt(r){return W(r)||r<0?NaN:Yt*r/Gt}function Bt(r){return W(r)||r<0?NaN:(4-Ht)*r*r/2}var Dt=.34657359027997264,Jt=709.782712893384,Kt=.6931471803691238,Qt=1.9082149292705877e-10,re=1.4426950408889634,ne=38.816242111356935,te=1.0397207708399179;function ee(r){var n,t,e,i,a,o,u,f,c,s,p,l,y;if(r===q||W(r))return r;if(r===Z)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=ne){if(e)return-1;if(f>=Jt)return q}if(o=0|Rr(f),f>Dt)f<te?e?(i=r+Kt,a=-Qt,y=-1):(i=r-Kt,a=Qt,y=1):(y=e?re*r-.5:re*r+.5,i=r-(p=y|=0)*Kt,a=p*Qt),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((u-(p=3-u*n))/(6-r*p)),0===y?r-(r*l-c):(t=zr(X+y<<20,0),l=r*(l-s)-s,l-=c,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(f=1-(l-r),1024===y?f=Fn(f,i=Rr(f)+(y<<20)|0):f*=t,f-1):(p=1,y<20?f=(p=Fn(p,i=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(p=Fn(p,i=X-y<<20|0))),f+=1),f*=t))}var ie=.6931471803691238,ae=1.9082149292705877e-10,oe=.41421356237309503,ue=-.2928932188134525,fe=1.862645149230957e-9,ce=5551115123125783e-32,se=9007199254740992,pe=.6666666666666666;function le(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return Z;if(r===q)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<oe){if(e<fe)return e<ce?r:r-r*r*.5;r>ue&&(s=0,i=r,t=1)}return 0!==s&&(e<se?(a=(s=((t=Rr(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),a/=c):(s=((t=Rr(c=r))>>20)-X,a=0),(t&=1048575)<434334?c=Fn(c,1072693248|t):(s+=1,c=Fn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*ie+(a+=s*ae):s*ie-((f=n*(1-pe*i))-(s*ae+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ie-(n-(o*(n+f)+(s*ae+a))-i))}var ye=-.6931471805599453;function ge(r,n){var t,e;return W(r)||W(n)||n<0?NaN:0===n?r<0?Z:0:r<0?Z:(t=gt(n,2),(e=-gt(r,2)/(2*t))<ye?le(-vn(e)):$t(-ee(e)))}function ve(r){return W(r)?dt(NaN):function(n){return W(n)?NaN:n<r?Z:0}}function de(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?0===r?q:Z:r<0||r===q?Z:$t(1/(t=gt(n,2))*r)-gt(r,2)/(2*t)}function he(r){return W(r)?dt(NaN):function(n){return W(n)?NaN:n===r?q:Z}}H((function(r,n){return W(r)||W(n)?NaN:r<n?Z:0}),"factory",ve),H(ge,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?ve(0):(n=gt(r,2),function(r){var t;return W(r)?NaN:r<0?Z:(t=-gt(r,2)/(2*n))<ye?le(-vn(t)):$t(-ee(t))})})),H((function(r,n){return W(r)||W(n)?NaN:r===n?q:Z}),"factory",he),H(de,"factory",(function(r){var n,t;return W(r)||r<0?dt(NaN):0===r?he(0):(t=gt(r,2),n=1/t,function(r){return W(r)?NaN:r<0||r===q?Z:$t(n*r)-gt(r,2)/(2*t)})}));var Ne=1e-300,me=2848094538889218e-321,be=3.725290298461914e-9,we=.8450629115104675,Ae=.1283791670955126,_e=1.0270333367641007,Ee=.12837916709551256,ke=1,Se=-.0023621185607526594,Ue=1,je=-.009864944034847148,Ie=1,xe=-.0098649429247001,Fe=1;function Te(r){var n,t,e,i,a,o,u;return W(r)?NaN:r===q?1:r===Z?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<be?t<me?.125*(8*r+_e*r):r+Ae*r:(i=Ee+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),a=ke+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(i/a)):t<1.25?(o=Se+(a=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a),u=Ue+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?-we-o/u:we+o/u):t>=6?n?Ne-1:1-Ne:(a=1/(t*t),t<2.857142857142857?(i=je+a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a),a=Ie+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a)):(i=xe+a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a),a=Fe+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)),i=vn(-(e=_n(t,0))*e-.5625)*vn((e-t)*(e+t)+i/a),n?i/t-1:1-i/t))}function Oe(r,n){var t,e;return W(r)||W(n)||n<0?NaN:(e=1+(t=r*n)*vn(t*t/2),e*=Ct*(Te(t/Gt)+1))}function Ve(r,n){var t;return W(r)||W(n)||n<0?NaN:0===n?0===r?q:0:r<0||r===q?0:1/(t=gt(n,2))*r*vn(-gt(r,2)/(2*t))}function $e(r){return W(r)?dt(NaN):function(n){return W(n)?NaN:n===r?q:0}}function Ge(r,n){return W(n)||n<0||W(r)||r<0||r>1?NaN:0===n?0:mn(n*n*-2*le(-r))}function Pe(r){return W(r)?dt(NaN):function(n){return W(n)||n<0||n>1?NaN:r}}function He(){var r;if(!(this instanceof He))return 0===arguments.length?new He:new He(arguments[0]);if(arguments.length){if(!Et(r=arguments[0]))throw new TypeError(I("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else r=1;return G(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Et(n))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}H(Oe,"factory",(function(r){return W(r)||r<0?dt(NaN):function(n){var t,e;return W(n)?NaN:(e=1+(t=n*r)*vn(t*t/2),e*=Ct*(Te(t/Gt)+1))}})),H((function(r,n){return W(r)||W(n)?NaN:r===n?q:0}),"factory",$e),H(Ve,"factory",(function(r){var n,t;return W(r)||r<0?dt(NaN):0===r?$e(0):(t=gt(r,2),n=1/t,function(r){return W(r)?NaN:r<0||r===q?0:n*r*vn(-gt(r,2)/(2*t))})})),H((function(r,n){return W(r)||r<0||r>1?NaN:n}),"factory",Pe),H(Ge,"factory",(function(r){var n;return W(r)||r<0?dt(NaN):0===r?Pe(0):(n=r*r,function(r){return W(r)||r<0||r>1?NaN:mn(-2*n*le(-r))})})),Nt(He.prototype,"entropy",(function(){return Pt(this.sigma)})),Nt(He.prototype,"kurtosis",(function(){return Wt(this.sigma)})),Nt(He.prototype,"mean",(function(){return Lt(this.sigma)})),Nt(He.prototype,"median",(function(){return Mt(this.sigma)})),Nt(He.prototype,"mode",(function(){return Zt(this.sigma)})),Nt(He.prototype,"skewness",(function(){return Xt(this.k,this.sigma)})),Nt(He.prototype,"stdev",(function(){return zt(this.sigma)})),Nt(He.prototype,"variance",(function(){return Bt(this.sigma)})),H(He.prototype,"cdf",(function(r){return vt(r,this.sigma)})),H(He.prototype,"logcdf",(function(r){return ge(r,this.sigma)})),H(He.prototype,"logpdf",(function(r){return de(r,this.sigma)})),H(He.prototype,"mgf",(function(r){return Oe(r,this.sigma)})),H(He.prototype,"pdf",(function(r){return Ve(r,this.sigma)})),H(He.prototype,"quantile",(function(r){return Ge(r,this.sigma)}));var We={};return P(We,"cdf",vt),P(We,"Rayleigh",He),P(We,"entropy",Pt),P(We,"kurtosis",Wt),P(We,"logcdf",ge),P(We,"logpdf",de),P(We,"mean",Lt),P(We,"median",Mt),P(We,"mgf",Oe),P(We,"mode",Zt),P(We,"pdf",Ve),P(We,"quantile",Ge),P(We,"skewness",Xt),P(We,"stdev",zt),P(We,"variance",Bt),We},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).rayleigh=n();
//# sourceMappingURL=browser.js.map
