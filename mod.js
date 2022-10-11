// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,p,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),p="get"in f,l="set"in f,s&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,n,f.get),l&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var l=Math.floor,y=Math.ceil;function v(r){return r<0?y(r):l(r)}var g=Number,h=g.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY;function N(r){return r===d||r===h}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return m&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var E=w()?function(r){var n,t,e,i,a;if(null==r)return b.call(r);t=r[_],a=_,n=null!=(i=r)&&A.call(i,a);try{r[_]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[_]=t:delete r[_],e}:function(r){return b.call(r)},k="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var U,I="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(k&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var j=U,x="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var O,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var V=O,$="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,H="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=($&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var W=P,C="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var R,M="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var Z,q={uint16:R,uint8:W};(Z=new q.uint16(1))[0]=4660;var X,Y,z=52===new q.uint8(Z.buffer)[0];!0===z?(X=1,Y=0):(X=0,Y=1);var B={HIGH:X,LOW:Y},D=new V(1),J=new j(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,n){return D[0]=n,r[0]=J[K],r[1]=J[Q],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,ir=!0===z?1:0,ar=new V(1),or=new j(ar.buffer);function ur(r){return ar[0]=r,or[ir]}!0===z?(tr=1,er=0):(tr=0,er=1);var fr={HIGH:tr,LOW:er},cr=new V(1),sr=new j(cr.buffer),pr=fr.HIGH,lr=fr.LOW;function yr(r,n){return sr[pr]=r,sr[lr]=n,cr[0]}var vr=[0,0];function gr(r,n){var t,e;return nr(vr,r),t=vr[0],t&=2147483647,e=ur(n),yr(t|=e&=2147483648,vr[1])}function hr(r){return Math.abs(r)}function dr(r,n){return p(n)||N(n)?(r[0]=n,r[1]=0,r):0!==n&&hr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Nr=[0,0],mr=[0,0];function wr(r,n){var t,e;return 0===n||0===r||p(r)||N(r)?r:(function(r,n){1===arguments.length?dr([0,0],r):dr(r,n)}(Nr,r),n+=Nr[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Nr[0]),n<-1074?gr(0,r):n>1023?r<0?h:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(mr,r),t=mr[0],t&=2148532223,e*yr(t|=n+1023<<20,mr[1])))}function br(r){var n;return p(r)||r===d?r:r===h?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,a,o;return wr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=v(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Ar(r){return l(r)===r}function _r(r){return Ar(r/2)}function Er(r){return _r(r>0?r-1:r+1)}var kr=Math.sqrt,Sr=!0===z?0:1,Ur=new V(1),Ir=new j(Ur.buffer);function jr(r,n){return Ur[0]=r,Ir[Sr]=n>>>0,Ur[0]}function xr(r){return 0|r}var Fr=!0===z?1:0,Or=new V(1),Tr=new j(Or.buffer);function Vr(r,n){return Or[0]=r,Tr[Fr]=n>>>0,Or[0]}var $r=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];var Hr=.6931471805599453;var Wr=1e300,Cr=[0,0],Lr=[0,0];function Rr(r,n){var t,e,i,a,o,u,f,c,s,l,y,v,g,m;if(p(r)||p(n))return NaN;if(nr(Cr,n),o=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return kr(r);if(-.5===n)return 1/kr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(N(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:hr(r)<1==(n===d)?0:d}(r,n)}if(nr(Cr,r),a=Cr[0],0===Cr[1]){if(0===a)return function(r,n){return n===h?d:n===d?0:n>0?Er(n)?r:0:Er(n)?gr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&Er(n))return-1;if(N(r))return r===h?Rr(-0,-n):n<0?0:d}if(r<0&&!1===Ar(n))return(r-r)/(r-r);if(i=hr(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Er(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Wr*Wr:1e-300*u*1e-300;if(t>1072693248)return 0===f?u*Wr*Wr:1e-300*u*1e-300;y=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=jr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Lr,i)}else y=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y,v,g,h,d,N,m,w,b,A,_;return w=0,t<1048576&&(w-=53,t=ur(n*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(b=1048575&t|0),b<=235662?A=0:b<767610?A=1:(A=0,w+=1,t-=1048576),o=jr(i=(N=(n=Vr(n,t))-(c=$r[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Vr(0,e+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=jr(f=3+(a=o*o)+(d+=(u=m*(N-o*f-o*(n-(f-c))))*(o+i)),0),g=(y=-7.028461650952758e-9*(p=jr(p=(N=o*f)+(m=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(m-(p-N))+Pr[A])-((v=jr(v=(l=.9617967009544373*p)+y+(s=Gr[A])+(h=w),0))-h-s-l),r[0]=v,r[1]=g,r}(Lr,i,t);if(l=(n-(c=jr(n,0)))*y[0]+n*y[1],s=c*y[0],nr(Cr,v=l+s),g=xr(Cr[0]),m=xr(Cr[1]),g>=1083179008){if(0!=(g-1083179008|m))return u*Wr*Wr;if(l+8008566259537294e-32>v-s)return u*Wr*Wr}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|m))return 1e-300*u*1e-300;if(l<=v-s)return 1e-300*u*1e-300}return v=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=a=Vr(0,e)),r=xr(r=ur(c=1-((c=(o=.6931471824645996*(a=jr(a=t+n,0)))+(u=(t-(a-n))*Hr+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?wr(c,s):Vr(c,r)}(g,s,l),u*v}function Mr(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=Rr(n,2),1-br(-Rr(r,2)/(2*t)))}function Zr(r){return function(){return r}}function qr(r){return p(r)?Zr(NaN):function(n){if(p(n))return NaN;return n<r?0:1}}function Xr(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function Yr(r){return"number"==typeof r}s((function(r,n){return p(r)||p(n)?NaN:r<n?0:1}),"factory",qr),s(Mr,"factory",(function(r){var n;return p(r)||r<0?Zr(NaN):0===r?qr(0):(n=Rr(r,2),function(r){if(p(r))return NaN;if(r<0)return 0;return 1-br(-Rr(r,2)/(2*n))})}));var zr=g.prototype.toString;var Br=w();function Dr(r){return"object"==typeof r&&(r instanceof g||(Br?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function Jr(r){return Yr(r)||Dr(r)}function Kr(r){return Yr(r)&&r>0}function Qr(r){return Dr(r)&&r.valueOf()>0}function rn(r){return Kr(r)||Qr(r)}s(Jr,"isPrimitive",Yr),s(Jr,"isObject",Dr),s(rn,"isPrimitive",Kr),s(rn,"isObject",Qr);var nn=.6931471803691238,tn=1.9082149292705877e-10;function en(r){var n,t,e,i,a,o,u,f,c,s,l,y;return 0===r?h:p(r)||r<0?NaN:(a=0,(t=ur(r))<1048576&&(a-=54,t=ur(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Vr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*nn+a*tn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*nn-(o-a*tn-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*nn-(n-(s*(n+o)+a*tn)-u)):0===a?u-s*(u-o):a*nn-(s*(u-o)-a*tn-u))))}var an=1.4142135623730951;function on(r){return p(r)||r<=0?NaN:1+en(r/an)+.28860783245076643}var un=3.141592653589793;function fn(r){return p(r)||r<0?NaN:.2450893006876391}function cn(r){return p(r)||r<0?NaN:1.2533141373155003*r}var sn=kr(2*Hr);function pn(r){return p(r)||r<0?NaN:r*sn}function ln(r){return p(r)||r<0?NaN:r}var yn=.5019328882303191/Rr(4-un,1.5);function vn(r){return p(r)||r<0?NaN:yn}var gn=kr(4-un);function hn(r){return p(r)||r<0?NaN:(4-un)*r*r/2}var dn=.6931471803691238,Nn=1.9082149292705877e-10;function mn(r){var n,t,e,i,a,o,u,f,c,s,l,y;if(r===d||p(r))return r;if(r===h)return-1;if(0===r)return r;if(r<0?(t=!0,u=-r):(t=!1,u=r),u>=38.816242111356935){if(t)return-1;if(u>=709.782712893384)return d}if(a=0|ur(u),u>.34657359027997264)u<1.0397207708399179?t?(e=r+dn,i=-Nn,y=-1):(e=r-dn,i=Nn,y=1):(y=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(s=y|=0)*dn,i=s*Nn),c=e-(r=e-i)-i;else{if(a<1016070144)return r;y=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===y?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(u=Vr(u=1-(l-r),e=ur(u)+(y<<20)|0))-1:(s=1,y<20?u=(s=Vr(s,e=1072693248-(2097152>>y)|0))-(l-r):(u=r-(l+(s=Vr(s,e=1023-y<<20|0))),u+=1),Vr(u,e=ur(u)+(y<<20)|0)))}var wn=.6931471803691238,bn=1.9082149292705877e-10;function An(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return h;if(r===d)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(a=(s=((t=ur(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((t=ur(c=r))>>20)-1023,a=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(s+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*wn+(a+=s*bn):s*wn-((f=n*(1-.6666666666666666*i))-(s*bn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*wn-(n-(o*(n+f)+(s*bn+a))-i))}function _n(r,n){var t,e;return p(r)||p(n)||n<0?NaN:0===n?r<0?h:0:r<0?h:(t=Rr(n,2),(e=-Rr(r,2)/(2*t))<-.6931471805599453?An(-br(e)):en(-mn(e)))}function En(r){return p(r)?Zr(NaN):function(n){if(p(n))return NaN;return n<r?h:0}}function kn(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?0===r?d:h:r<0||r===d?h:en(1/(t=Rr(n,2))*r)-Rr(r,2)/(2*t)}function Sn(r){return p(r)?Zr(NaN):function(n){if(p(n))return NaN;return n===r?d:h}}s((function(r,n){return p(r)||p(n)?NaN:r<n?h:0}),"factory",En),s(_n,"factory",(function(r){var n;return p(r)||r<0?Zr(NaN):0===r?En(0):(n=Rr(r,2),function(r){var t;if(p(r))return NaN;if(r<0)return h;return(t=-Rr(r,2)/(2*n))<-.6931471805599453?An(-br(t)):en(-mn(t))})})),s((function(r,n){return p(r)||p(n)?NaN:r===n?d:h}),"factory",Sn),s(kn,"factory",(function(r){var n,t;return p(r)||r<0?Zr(NaN):0===r?Sn(0):(t=Rr(r,2),n=1/t,function(r){if(p(r))return NaN;if(r<0||r===d)return h;return en(n*r)-Rr(r,2)/(2*t)})}));var Un=.8450629115104675;function In(r){var n,t,e,i,a,o,u;return p(r)?NaN:r===d?1:r===h?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),a=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(i/a)):t<1.25?(o=(a=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,u=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?-Un-o/u:Un+o/u):t>=6?n?-1:1:(a=1/(t*t),t<2.857142857142857?(i=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a)):(i=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)),i=br(-(e=jr(t,0))*e-.5625)*br((e-t)*(e+t)+i/a),n?i/t-1:1-i/t))}function jn(r,n){var t,e;return p(r)||p(n)||n<0?NaN:(e=1+(t=r*n)*br(t*t/2),e*=1.2533141373155003*(In(t/an)+1))}function xn(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?0===r?d:0:r<0||r===d?0:1/(t=Rr(n,2))*r*br(-Rr(r,2)/(2*t))}function Fn(r){return p(r)?Zr(NaN):function(n){if(p(n))return NaN;return n===r?d:0}}function On(r,n){return p(n)||n<0||p(r)||r<0||r>1?NaN:0===n?0:kr(-2*(n*n)*An(-r))}function Tn(r){return p(r)?Zr(NaN):function(n){if(p(n)||n<0||n>1)return NaN;return r}}function Vn(r){return"number"==typeof r}function $n(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Gn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+$n(i):$n(i)+r,e&&(r="-"+r)),r}s(jn,"factory",(function(r){return p(r)||r<0?Zr(NaN):function(n){var t,e;if(p(n))return NaN;return e=1+(t=n*r)*br(t*t/2),e*=1.2533141373155003*(In(t/an)+1)}})),s((function(r,n){return p(r)||p(n)?NaN:r===n?d:0}),"factory",Fn),s(xn,"factory",(function(r){var n,t;return p(r)||r<0?Zr(NaN):0===r?Fn(0):(t=Rr(r,2),n=1/t,function(r){if(p(r))return NaN;if(r<0||r===d)return 0;return n*r*br(-Rr(r,2)/(2*t))})})),s((function(r,n){return p(r)||r<0||r>1?NaN:n}),"factory",Tn),s(On,"factory",(function(r){var n;return p(r)||r<0?Zr(NaN):0===r?Tn(0):(n=r*r,function(r){if(p(r)||r<0||r>1)return NaN;return kr(-2*n*An(-r))})}));var Pn=String.prototype.toLowerCase,Hn=String.prototype.toUpperCase;function Wn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Vn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Gn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Gn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Hn.call(r.specifier)?Hn.call(t):Pn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Cn(r){return"string"==typeof r}var Ln=Math.abs,Rn=String.prototype.toLowerCase,Mn=String.prototype.toUpperCase,Zn=String.prototype.replace,qn=/e\+(\d)$/,Xn=/e-(\d)$/,Yn=/^(\d+)$/,zn=/^(\d+)e/,Bn=/\.0$/,Dn=/\.0*e/,Jn=/(\..*[^0])0*e/;function Kn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Vn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Ln(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Zn.call(t,Jn,"$1e"),t=Zn.call(t,Dn,"e"),t=Zn.call(t,Bn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Zn.call(t,qn,"e+0$1"),t=Zn.call(t,Xn,"e-0$1"),r.alternate&&(t=Zn.call(t,Yn,"$1."),t=Zn.call(t,zn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Mn.call(r.specifier)?Mn.call(t):Rn.call(t)}function Qn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function rt(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Qn(e):Qn(e)+r}var nt=String.fromCharCode,tt=isNaN,et=Array.isArray;function it(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function at(r){var n,t,e,i,a,o,u,f,c;if(!et(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Cn(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=it(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,tt(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,tt(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Wn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!tt(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=tt(a)?String(e.arg):nt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Kn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Gn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=rt(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var ot=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ut(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function ft(r){var n,t,e,i;for(t=[],i=0,e=ot.exec(r);e;)(n=r.slice(i,ot.lastIndex-e[0].length)).length&&t.push(n),t.push(ut(e)),i=ot.lastIndex,e=ot.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function ct(r){return"string"==typeof r}function st(r){var n,t,e;if(!ct(r))throw new TypeError(st("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=ft(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return at.apply(null,t)}function pt(){var r;if(!(this instanceof pt))return 0===arguments.length?new pt:new pt(arguments[0]);if(arguments.length){if(!Kr(r=arguments[0]))throw new TypeError(st("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else r=1;return f(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Kr(n))throw new TypeError(st("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}Xr(pt.prototype,"entropy",(function(){return on(this.sigma)})),Xr(pt.prototype,"kurtosis",(function(){return fn(this.sigma)})),Xr(pt.prototype,"mean",(function(){return cn(this.sigma)})),Xr(pt.prototype,"median",(function(){return pn(this.sigma)})),Xr(pt.prototype,"mode",(function(){return ln(this.sigma)})),Xr(pt.prototype,"skewness",(function(){return vn(this.k,this.sigma)})),Xr(pt.prototype,"stdev",(function(){return p(r=this.sigma)||r<0?NaN:gn*r/an;var r})),Xr(pt.prototype,"variance",(function(){return hn(this.sigma)})),s(pt.prototype,"cdf",(function(r){return Mr(r,this.sigma)})),s(pt.prototype,"logcdf",(function(r){return _n(r,this.sigma)})),s(pt.prototype,"logpdf",(function(r){return kn(r,this.sigma)})),s(pt.prototype,"mgf",(function(r){return jn(r,this.sigma)})),s(pt.prototype,"pdf",(function(r){return xn(r,this.sigma)})),s(pt.prototype,"quantile",(function(r){return On(r,this.sigma)}));var lt={};c(lt,"cdf",Mr),c(lt,"Rayleigh",pt),c(lt,"entropy",on),c(lt,"kurtosis",fn),c(lt,"logcdf",_n),c(lt,"logpdf",kn),c(lt,"mean",cn),c(lt,"median",pn),c(lt,"mgf",jn),c(lt,"mode",ln),c(lt,"pdf",xn),c(lt,"quantile",On),c(lt,"skewness",vn),c(lt,"variance",hn);export{pt as Rayleigh,Mr as cdf,lt as default,on as entropy,fn as kurtosis,_n as logcdf,kn as logpdf,cn as mean,pn as median,jn as mgf,ln as mode,xn as pdf,On as quantile,vn as skewness,hn as variance};
//# sourceMappingURL=mod.js.map
