// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,i=e.toString,a=e.__defineGetter__,o=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,n,t.get),p&&o&&o.call(r,n,t.set),r};function s(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var y=Math.floor,g=Math.ceil;function v(r){return r<0?g(r):y(r)}var d=Number,h=d.NEGATIVE_INFINITY,N=Number.POSITIVE_INFINITY,m=1023;function b(r){return r===N||r===h}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return w&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",U=A()?function(r){var n,t,e,i,a;if(null==r)return E.call(r);t=r[S],a=S,n=null!=(i=r)&&k.call(i,a);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e}:function(r){return E.call(r)},j="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var F,T=_,O="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var $,G=F,H="function"==typeof Uint8Array,R="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C,L=$,M="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:C,uint8:L};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new T(K.buffer),rr=J.HIGH,nr=J.LOW;function tr(r,n){return K[0]=n,r[0]=Q[rr],r[1]=Q[nr],r}function er(r,n){return 1===arguments.length?tr([0,0],r):tr(r,n)}var ir,ar,or=!0===D?1:0,ur=new G(1),fr=new T(ur.buffer);function cr(r){return ur[0]=r,fr[or]}!0===D?(ir=1,ar=0):(ir=0,ar=1);var sr={HIGH:ir,LOW:ar},lr=new G(1),pr=new T(lr.buffer),yr=sr.HIGH,gr=sr.LOW;function vr(r,n){return pr[yr]=r,pr[gr]=n,lr[0]}var dr=[0,0];function hr(r,n){var t,e;return er(dr,r),t=dr[0],t&=2147483647,e=cr(n),vr(t|=e&=2147483648,dr[1])}function Nr(r){return Math.abs(r)}function mr(r,n){return p(n)||b(n)?(r[0]=n,r[1]=0,r):0!==n&&Nr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var br=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||p(r)||b(r)?r:(function(r,n){1===arguments.length?mr([0,0],r):mr(r,n)}(br,r),n+=br[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-m|0}(r=br[0]),n<-1074?hr(0,r):n>1023?r<0?h:N:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er(wr,r),t=wr[0],t&=2148532223,e*vr(t|=n+m<<20,wr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function kr(r){var n;return p(r)||r===N?r:r===h?0:r>709.782712893384?N:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,i,a,o;return Ar(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=v(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}function Sr(r){return y(r)===r}function Ur(r){return Sr(r/2)}function jr(r){return Ur(r>0?r-1:r+1)}var xr=Math.sqrt,Ir=!0===D?0:1,Fr=new G(1),Tr=new T(Fr.buffer);function Or(r,n){return Fr[0]=r,Tr[Ir]=n>>>0,Fr[0]}function Vr(r){return 0|r}var Pr=!0===D?1:0,$r=new G(1),Gr=new T($r.buffer);function Hr(r,n){return $r[0]=r,Gr[Pr]=n>>>0,$r[0]}var Rr=1048576,Wr=[1,1.5],Cr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8],Mr=.6931471805599453,Zr=2147483647,qr=1048575,Xr=1048576,Yr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,i,a,o,u,f,c,s,l,y,g,v,d;if(p(r)||p(n))return NaN;if(er(Jr,n),o=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return xr(r);if(-.5===n)return 1/xr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(b(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(n===N)?0:N}(r,n)}if(er(Jr,r),a=Jr[0],0===Jr[1]){if(0===a)return function(r,n){return n===h?N:n===N?0:n>0?jr(n)?r:0:jr(n)?hr(N,r):N}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(b(r))return r===h?Qr(-0,-n):n<0?0:N}if(r<0&&!1===Sr(n))return(r-r)/(r-r);if(i=Nr(r),t=a&Yr|0,e=o&Yr|0,f=o>>>31|0,u=(u=a>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&cr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Br*Br:u*Dr*Dr;if(t>1072693248)return 0===f?u*Br*Br:u*Dr*Dr;y=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Or(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Kr,i)}else y=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,g,v,d,h,N,b,w,A,_,E;return w=0,t<Rr&&(w-=53,t=cr(n*=9007199254740992)),w+=(t>>20)-m|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=Rr),o=Or(i=(N=(n=Hr(n,t))-(c=Wr[_]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Hr(0,e+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Or(f=3+(a=o*o)+(h+=(u=b*(N-o*f-o*(n-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=Or(l=(N=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-N))+Lr[_])-((g=Or(g=(p=.9617967009544373*l)+y+(s=Cr[_])+(d=w),0))-d-s-p),r[0]=g,r[1]=v,r}(Kr,i,t);if(l=(n-(c=Or(n,0)))*y[0]+n*y[1],s=c*y[0],er(Jr,g=l+s),v=Vr(Jr[0]),d=Vr(Jr[1]),v>=zr){if(0!=(v-zr|d))return u*Br*Br;if(l+8008566259537294e-32>g-s)return u*Br*Br}else if((v&Yr)>=1083231232){if(0!=(v-3230714880|d))return u*Dr*Dr;if(l<=g-s)return u*Dr*Dr}return g=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&Zr|0)>>20)-m|0,c=0,s>1071644672&&(i=Hr(0,((c=r+(Xr>>l+1)>>>0)&~(qr>>(l=((c&Zr)>>20)-m|0)))>>>0),c=(c&qr|Xr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Vr(r=cr(f=1-((f=(a=.6931471824645996*(i=Or(i=t+n,0)))+(o=(t-(i-n))*Mr+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ar(f,c):Hr(f,r)}(v,s,l),u*g}function rn(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=Qr(n,2),1-kr(-Qr(r,2)/(2*t)))}function nn(r){return function(){return r}}function tn(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n<r?0:1}}function en(r,n,t){c(r,n,{configurable:!1,enumerable:!1,get:t})}function an(r){return"number"==typeof r}l((function(r,n){return p(r)||p(n)?NaN:r<n?0:1}),"factory",tn),l(rn,"factory",(function(r){var n;return p(r)||r<0?nn(NaN):0===r?tn(0):(n=Qr(r,2),function(r){return p(r)?NaN:r<0?0:1-kr(-Qr(r,2)/(2*n))})}));var on=d.prototype.toString,un=A();function fn(r){return"object"==typeof r&&(r instanceof d||(un?function(r){try{return on.call(r),!0}catch(r){return!1}}(r):"[object Number]"===U(r)))}function cn(r){return an(r)||fn(r)}function sn(r){return an(r)&&r>0}function ln(r){return fn(r)&&r.valueOf()>0}function pn(r){return sn(r)||ln(r)}l(cn,"isPrimitive",an),l(cn,"isObject",fn),l(pn,"isPrimitive",sn),l(pn,"isObject",ln);var yn=.6931471803691238,gn=1.9082149292705877e-10,vn=1048575;function dn(r){var n,t,e,i,a,o,u,f,c,s,l,y;return 0===r?h:p(r)||r<0?NaN:(a=0,(t=cr(r))<1048576&&(a-=54,t=cr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-m|0,a+=(f=614244+(t&=vn)&1048576|0)>>20|0,u=(r=Hr(r,t|1072693248^f))-1,(vn&2+t)<3?0===u?0===a?0:a*yn+a*gn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*yn-(o-a*gn-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*yn-(n-(s*(n+o)+a*gn)-u)):0===a?u-s*(u-o):a*yn-(s*(u-o)-a*gn-u))))}var hn=1.4142135623730951;function Nn(r){return p(r)||r<=0?NaN:1+dn(r/hn)+.28860783245076643}var mn=3.141592653589793;function bn(r){return p(r)||r<0?NaN:.2450893006876391}var wn=1.2533141373155003;function An(r){return p(r)||r<0?NaN:r*wn}var _n=xr(2*Mr);function En(r){return p(r)||r<0?NaN:r*_n}function kn(r){return p(r)||r<0?NaN:r}var Sn=.5019328882303191/Qr(4-mn,1.5);function Un(r){return p(r)||r<0?NaN:Sn}var jn=xr(4-mn);function xn(r){return p(r)||r<0?NaN:(4-mn)*r*r/2}var In=.6931471803691238,Fn=1.9082149292705877e-10,Tn=1.4426950408889634;function On(r){var n,t,e,i,a,o,u,f,c,s,l,y;if(r===N||p(r))return r;if(r===h)return-1;if(0===r)return r;if(r<0?(t=!0,u=-r):(t=!1,u=r),u>=38.816242111356935){if(t)return-1;if(u>=709.782712893384)return N}if(a=0|cr(u),u>.34657359027997264)u<1.0397207708399179?t?(e=r+In,i=-Fn,y=-1):(e=r-In,i=Fn,y=1):(y=t?Tn*r-.5:Tn*r+.5,e=r-(s=y|=0)*In,i=s*Fn),c=e-(r=e-i)-i;else{if(a<1016070144)return r;y=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===y?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(u=Hr(u=1-(l-r),e=cr(u)+(y<<20)|0))-1:(s=1,y<20?u=(s=Hr(s,e=1072693248-(2097152>>y)|0))-(l-r):(u=r-(l+(s=Hr(s,e=m-y<<20|0))),u+=1),Hr(u,e=cr(u)+(y<<20)|0)))}var Vn=.6931471803691238,Pn=1.9082149292705877e-10;function $n(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return h;if(r===N)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(a=(s=((t=cr(c=1+r))>>20)-m)>0?1-(c-r):r-(c-1),a/=c):(s=((t=cr(c=r))>>20)-m,a=0),(t&=1048575)<434334?c=Hr(c,1072693248|t):(s+=1,c=Hr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Vn+(a+=s*Pn):s*Vn-((f=n*(1-.6666666666666666*i))-(s*Pn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Vn-(n-(o*(n+f)+(s*Pn+a))-i))}var Gn=-.6931471805599453;function Hn(r,n){var t,e;return p(r)||p(n)||n<0?NaN:0===n?r<0?h:0:r<0?h:(t=Qr(n,2),(e=-Qr(r,2)/(2*t))<Gn?$n(-kr(e)):dn(-On(e)))}function Rn(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n<r?h:0}}function Wn(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?0===r?N:h:r<0||r===N?h:dn(1/(t=Qr(n,2))*r)-Qr(r,2)/(2*t)}function Cn(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n===r?N:h}}l((function(r,n){return p(r)||p(n)?NaN:r<n?h:0}),"factory",Rn),l(Hn,"factory",(function(r){var n;return p(r)||r<0?nn(NaN):0===r?Rn(0):(n=Qr(r,2),function(r){var t;return p(r)?NaN:r<0?h:(t=-Qr(r,2)/(2*n))<Gn?$n(-kr(t)):dn(-On(t))})})),l((function(r,n){return p(r)||p(n)?NaN:r===n?N:h}),"factory",Cn),l(Wn,"factory",(function(r){var n,t;return p(r)||r<0?nn(NaN):0===r?Cn(0):(t=Qr(r,2),n=1/t,function(r){return p(r)?NaN:r<0||r===N?h:dn(n*r)-Qr(r,2)/(2*t)})}));var Ln=.8450629115104675;function Mn(r){var n,t,e,i,a,o,u;return p(r)?NaN:r===N?1:r===h?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),a=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(i/a)):t<1.25?(o=(a=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,u=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?-Ln-o/u:Ln+o/u):t>=6?n?-1:1:(a=1/(t*t),t<2.857142857142857?(i=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a)):(i=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)),i=kr(-(e=Or(t,0))*e-.5625)*kr((e-t)*(e+t)+i/a),n?i/t-1:1-i/t))}function Zn(r,n){var t,e;return p(r)||p(n)||n<0?NaN:(e=1+(t=r*n)*kr(t*t/2),e*=wn*(Mn(t/hn)+1))}function qn(r,n){var t;return p(r)||p(n)||n<0?NaN:0===n?0===r?N:0:r<0||r===N?0:1/(t=Qr(n,2))*r*kr(-Qr(r,2)/(2*t))}function Xn(r){return p(r)?nn(NaN):function(n){return p(n)?NaN:n===r?N:0}}function Yn(r,n){return p(n)||n<0||p(r)||r<0||r>1?NaN:0===n?0:xr(n*n*-2*$n(-r))}function zn(r){return p(r)?nn(NaN):function(n){return p(n)||n<0||n>1?NaN:r}}function Bn(r){return"number"==typeof r}function Dn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Jn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+Dn(i):Dn(i)+r,e&&(r="-"+r)),r}l(Zn,"factory",(function(r){return p(r)||r<0?nn(NaN):function(n){var t,e;return p(n)?NaN:(e=1+(t=n*r)*kr(t*t/2),e*=wn*(Mn(t/hn)+1))}})),l((function(r,n){return p(r)||p(n)?NaN:r===n?N:0}),"factory",Xn),l(qn,"factory",(function(r){var n,t;return p(r)||r<0?nn(NaN):0===r?Xn(0):(t=Qr(r,2),n=1/t,function(r){return p(r)?NaN:r<0||r===N?0:n*r*kr(-Qr(r,2)/(2*t))})})),l((function(r,n){return p(r)||r<0||r>1?NaN:n}),"factory",zn),l(Yn,"factory",(function(r){var n;return p(r)||r<0?nn(NaN):0===r?zn(0):(n=r*r,function(r){return p(r)||r<0||r>1?NaN:xr(-2*n*$n(-r))})}));var Kn=String.prototype.toLowerCase,Qn=String.prototype.toUpperCase;function rt(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Bn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Jn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Jn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Qn.call(r.specifier)?Qn.call(t):Kn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function nt(r){return"string"==typeof r}var tt=Math.abs,et=String.prototype.toLowerCase,it=String.prototype.toUpperCase,at=String.prototype.replace,ot=/e\+(\d)$/,ut=/e-(\d)$/,ft=/^(\d+)$/,ct=/^(\d+)e/,st=/\.0$/,lt=/\.0*e/,pt=/(\..*[^0])0*e/;function yt(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Bn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":tt(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=at.call(t,pt,"$1e"),t=at.call(t,lt,"e"),t=at.call(t,st,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=at.call(t,ot,"e+0$1"),t=at.call(t,ut,"e-0$1"),r.alternate&&(t=at.call(t,ft,"$1."),t=at.call(t,ct,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===it.call(r.specifier)?it.call(t):et.call(t)}function gt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function vt(r,n,t){var e=n-r.length;return e<0?r:r=t?r+gt(e):gt(e)+r}var dt=String.fromCharCode,ht=isNaN,Nt=Array.isArray;function mt(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function bt(r){var n,t,e,i,a,o,u,f,c;if(!Nt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(nt(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=mt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,ht(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,ht(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=rt(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!ht(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=ht(a)?String(e.arg):dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=yt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Jn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=vt(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function At(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function _t(r){var n,t,e,i;for(t=[],i=0,e=wt.exec(r);e;)(n=r.slice(i,wt.lastIndex-e[0].length)).length&&t.push(n),t.push(At(e)),i=wt.lastIndex,e=wt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Et(r){return"string"==typeof r}function kt(r){var n,t,e;if(!Et(r))throw new TypeError(kt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=_t(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return bt.apply(null,t)}function St(){var r;if(!(this instanceof St))return 0===arguments.length?new St:new St(arguments[0]);if(arguments.length){if(!sn(r=arguments[0]))throw new TypeError(kt("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else r=1;return c(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!sn(n))throw new TypeError(kt("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}en(St.prototype,"entropy",(function(){return Nn(this.sigma)})),en(St.prototype,"kurtosis",(function(){return bn(this.sigma)})),en(St.prototype,"mean",(function(){return An(this.sigma)})),en(St.prototype,"median",(function(){return En(this.sigma)})),en(St.prototype,"mode",(function(){return kn(this.sigma)})),en(St.prototype,"skewness",(function(){return Un(this.k,this.sigma)})),en(St.prototype,"stdev",(function(){return p(r=this.sigma)||r<0?NaN:jn*r/hn;var r})),en(St.prototype,"variance",(function(){return xn(this.sigma)})),l(St.prototype,"cdf",(function(r){return rn(r,this.sigma)})),l(St.prototype,"logcdf",(function(r){return Hn(r,this.sigma)})),l(St.prototype,"logpdf",(function(r){return Wn(r,this.sigma)})),l(St.prototype,"mgf",(function(r){return Zn(r,this.sigma)})),l(St.prototype,"pdf",(function(r){return qn(r,this.sigma)})),l(St.prototype,"quantile",(function(r){return Yn(r,this.sigma)}));var Ut={};s(Ut,"cdf",rn),s(Ut,"Rayleigh",St),s(Ut,"entropy",Nn),s(Ut,"kurtosis",bn),s(Ut,"logcdf",Hn),s(Ut,"logpdf",Wn),s(Ut,"mean",An),s(Ut,"median",En),s(Ut,"mgf",Zn),s(Ut,"mode",kn),s(Ut,"pdf",qn),s(Ut,"quantile",Yn),s(Ut,"skewness",Un),s(Ut,"variance",xn),r.Rayleigh=St,r.cdf=rn,r.default=Ut,r.entropy=Nn,r.kurtosis=bn,r.logcdf=Hn,r.logpdf=Wn,r.mean=An,r.median=En,r.mgf=Zn,r.mode=kn,r.pdf=qn,r.quantile=Yn,r.skewness=Un,r.variance=xn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).rayleigh={});
//# sourceMappingURL=browser.js.map
