// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,y,l;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,l="set"in t,v&&(y||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,n,t.get),l&&i&&i.call(r,n,t.set),r},y=n()?c:v,l=y;var s=function(r,n,t){l(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},N=y;var p=function(r,n,t){N(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var m=function(r){return r!=r},b=Math.floor,g=Math.ceil,h=b,d=g;var w=function(r){return r<0?d(r):h(r)},A=Number,_=A.NEGATIVE_INFINITY,j=Number.POSITIVE_INFINITY,U=j,O=_;var S=function(r){return r===U||r===O};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return I&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,P=F;var T=function(r){return P.call(r)},k=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&k.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",V=H,M=G,q=F;var L=T,W=function(r){var n,t,e;if(null==r)return q.call(r);t=r[M],n=V(r,M);try{r[M]=void 0}catch(n){return q.call(r)}return e=q.call(r),n?r[M]=t:delete r[M],e},x=E()?W:L,R=x,Y="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===R(r)},B=C;var D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,X=x,Z="function"==typeof Float64Array;var $="function"==typeof Float64Array?Float64Array:null,rr=function(r){return Z&&r instanceof Float64Array||"[object Float64Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr([1,3.14,-3.14,NaN]),r=rr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var er="function"==typeof Float64Array?Float64Array:void 0,ur=function(){throw new Error("not implemented")},ar=tr()?er:ur,ir=x,or="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null,cr=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ir(r)},vr=fr;var yr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),r=cr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,sr=function(){throw new Error("not implemented")},Nr=yr()?lr:sr,pr=x,mr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,gr=function(r){return mr&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},hr=br;var dr=function(){var r,n;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,65536,65537]),r=gr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var wr,Ar="function"==typeof Uint16Array?Uint16Array:void 0,_r=function(){throw new Error("not implemented")},jr={uint16:dr()?Ar:_r,uint8:Nr};(wr=new jr.uint16(1))[0]=4660;var Ur,Or,Sr=52===new jr.uint8(wr.buffer)[0];!0===Sr?(Ur=1,Or=0):(Ur=0,Or=1);var Ir=Q,Er={HIGH:Ur,LOW:Or},Fr=new ar(1),Pr=new Ir(Fr.buffer),Tr=Er.HIGH,kr=Er.LOW;var Hr=function(r,n){return Fr[0]=n,r[0]=Pr[Tr],r[1]=Pr[kr],r};var Gr=function(r,n){return 1===arguments.length?Hr([0,0],r):Hr(r,n)},Vr=Q,Mr=!0===Sr?1:0,qr=new ar(1),Lr=new Vr(qr.buffer);var Wr,xr,Rr=function(r){return qr[0]=r,Lr[Mr]};!0===Sr?(Wr=1,xr=0):(Wr=0,xr=1);var Yr=Q,Cr={HIGH:Wr,LOW:xr},zr=new ar(1),Br=new Yr(zr.buffer),Dr=Cr.HIGH,Jr=Cr.LOW;var Kr=function(r,n){return Br[Dr]=r,Br[Jr]=n,zr[0]},Qr=Gr,Xr=Rr,Zr=Kr,$r=[0,0];var rn=function(r,n){var t,e;return Qr($r,r),t=$r[0],t&=2147483647,e=Xr(n),Zr(t|=e&=2147483648,$r[1])};var nn=function(r){return Math.abs(r)},tn=S,en=m,un=nn;var an=function(r,n){return en(n)||tn(n)?(r[0]=n,r[1]=0,r):0!==n&&un(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var on=Rr;var fn=function(r){var n=on(r);return(n=(2146435072&n)>>>20)-1023|0},cn=j,vn=_,yn=m,ln=S,sn=rn,Nn=function(r,n){return 1===arguments.length?an([0,0],r):an(r,n)},pn=fn,mn=Gr,bn=Kr,gn=[0,0],hn=[0,0];var dn=function(r,n){var t,e;return 0===n||0===r||yn(r)||ln(r)?r:(Nn(gn,r),n+=gn[1],(n+=pn(r=gn[0]))<-1074?sn(0,r):n>1023?r<0?vn:cn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mn(hn,r),t=hn[0],t&=2148532223,e*bn(t|=n+1023<<20,hn[1])))},wn=dn;var An=wn,_n=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var jn=m,Un=w,On=_,Sn=j,In=function(r,n,t){var e,u,a;return a=(e=r-n)-(u=e*e)*_n(u),An(1-(n-e*a/(2-a)-r),t)};var En=function(r){var n;return jn(r)||r===Sn?r:r===On?0:r>709.782712893384?Sn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Un(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),In(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Fn=b;var Pn=function(r){return Fn(r)===r},Tn=Pn;var kn=function(r){return Tn(r/2)};var Hn=function(r){return kn(r>0?r-1:r+1)},Gn=Math.sqrt,Vn=Q,Mn=!0===Sr?0:1,qn=new ar(1),Ln=new Vn(qn.buffer);var Wn=function(r,n){return qn[0]=r,Ln[Mn]=n>>>0,qn[0]},xn=Wn;var Rn=function(r){return 0|r},Yn=Hn,Cn=rn,zn=_,Bn=j;var Dn=function(r,n){return n===zn?Bn:n===Bn?0:n>0?Yn(n)?r:0:Yn(n)?Cn(Bn,r):Bn},Jn=Rr;var Kn=function(r,n){return(2147483647&Jn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Qn=nn,Xn=j;var Zn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Qn(r)<1==(n===Xn)?0:Xn},$n=Q,rt=!0===Sr?1:0,nt=new ar(1),tt=new $n(nt.buffer);var et=function(r,n){return nt[0]=r,tt[rt]=n>>>0,nt[0]},ut=et;var at=Rr,it=xn,ot=ut,ft=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ct=[1,1.5],vt=[0,.5849624872207642],yt=[0,1.350039202129749e-8];var lt=xn,st=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nt=Rr,pt=ut,mt=xn,bt=Rn,gt=wn,ht=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var dt=m,wt=Hn,At=S,_t=Pn,jt=Gn,Ut=nn,Ot=Gr,St=xn,It=Rn,Et=_,Ft=j,Pt=Dn,Tt=Kn,kt=Zn,Ht=function(r,n,t){var e,u,a,i,o,f,c,v,y,l,s,N,p,m,b,g,h,d,w,A;return d=0,t<1048576&&(d-=53,t=at(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,d+=1,t-=1048576),e=524288+(t>>1|536870912),o=(h=1/((n=ot(n,t))+(c=ct[A])))*((g=n-c)-(i=it(u=g*h,0))*(f=ot(0,e+=A<<18))-i*(n-(f-c))),b=(a=u*u)*a*ft(a),f=it(f=3+(a=i*i)+(b+=o*(i+u)),0),p=(s=-7.028461650952758e-9*(y=it(y=(g=i*f)+(h=o*f+(b-(f-3-a))*u),0))+.9617966939259756*(h-(y-g))+yt[A])-((N=it(N=(l=.9617967009544373*y)+s+(v=vt[A])+(m=d),0))-m-v-l),r[0]=N,r[1]=p,r},Gt=function(r,n){var t,e,u,a,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*st(u)))-((e=lt(e=(a=1.4426950216293335*u)+i,0))-a),r[0]=e,r[1]=t,r},Vt=function(r,n,t){var e,u,a,i,o,f,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=a=pt(0,e)),f=(o=.6931471805599453*(t-((a=mt(a=t+n,0))-n))+-1.904654299957768e-9*a)-((c=(i=.6931471824645996*a)+o)-i),u=c-(a=c*c)*ht(a),r=Nt(c=1-(c*u/(u-2)-(f+c*f)-c)),r=bt(r),c=(r+=v<<20>>>0)>>20<=0?gt(c,v):pt(c,r)},Mt=1e300,qt=[0,0],Lt=[0,0];var Wt=function r(n,t){var e,u,a,i,o,f,c,v,y,l,s,N,p,m;if(dt(n)||dt(t))return NaN;if(Ot(qt,t),o=qt[0],0===qt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return jt(n);if(-.5===t)return 1/jt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(At(t))return kt(n,t)}if(Ot(qt,n),i=qt[0],0===qt[1]){if(0===i)return Pt(n,t);if(1===n)return 1;if(-1===n&&wt(t))return-1;if(At(n))return n===Et?r(-0,-t):t<0?0:Ft}if(n<0&&!1===_t(t))return(n-n)/(n-n);if(a=Ut(n),e=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,f=(f=i>>>31|0)&&wt(t)?-1:1,u>1105199104){if(u>1139802112)return Tt(n,t);if(e<1072693247)return 1===c?f*Mt*Mt:1e-300*f*1e-300;if(e>1072693248)return 0===c?f*Mt*Mt:1e-300*f*1e-300;s=Gt(Lt,a)}else s=Ht(Lt,a,e);if(l=(t-(v=St(t,0)))*s[0]+t*s[1],y=v*s[0],Ot(qt,N=l+y),p=It(qt[0]),m=It(qt[1]),p>=1083179008){if(0!=(p-1083179008|m))return f*Mt*Mt;if(l+8008566259537294e-32>N-y)return f*Mt*Mt}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|m))return 1e-300*f*1e-300;if(l<=N-y)return 1e-300*f*1e-300}return f*(N=Vt(p,y,l))},xt=Wt,Rt=m,Yt=En,Ct=xt;var zt=function(r,n){var t;return Rt(r)||Rt(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=Ct(n,2),1-Yt(-Ct(r,2)/(2*t)))};var Bt=function(r){return function(){return r}},Dt=m;var Jt=Bt,Kt=m;var Qt=function(r,n){return Dt(r)||Dt(n)?NaN:r<n?0:1};p(Qt,"factory",(function(r){return Kt(r)?Jt(NaN):function(n){if(Kt(n))return NaN;return n<r?0:1}}));var Xt=Bt,Zt=Qt.factory,$t=m,re=En,ne=xt;var te=zt;p(te,"factory",(function(r){var n;return $t(r)||r<0?Xt(NaN):0===r?Zt(0):(n=ne(r,2),function(r){if($t(r))return NaN;if(r<0)return 0;return 1-re(-ne(r,2)/(2*n))})}));var ee=te,ue=y;var ae=function(r,n,t){ue(r,n,{configurable:!1,enumerable:!1,get:t})};var ie=function(r){return"number"==typeof r},oe=A.prototype.toString;var fe=x,ce=A,ve=function(r){try{return oe.call(r),!0}catch(r){return!1}},ye=E();var le=function(r){return"object"==typeof r&&(r instanceof ce||(ye?ve(r):"[object Number]"===fe(r)))},se=ie,Ne=le;var pe=p,me=function(r){return se(r)||Ne(r)},be=le;pe(me,"isPrimitive",ie),pe(me,"isObject",be);var ge=me.isPrimitive;var he=function(r){return ge(r)&&r>0},de=me.isObject;var we=function(r){return de(r)&&r.valueOf()>0},Ae=he,_e=we;var je=p,Ue=function(r){return Ae(r)||_e(r)},Oe=we;je(Ue,"isPrimitive",he),je(Ue,"isObject",Oe);var Se=Ue;var Ie=Rr,Ee=ut,Fe=m,Pe=_,Te=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ke=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},He=.6931471803691238,Ge=1.9082149292705877e-10;var Ve=function(r){var n,t,e,u,a,i,o,f,c,v,y;return 0===r?Pe:Fe(r)||r<0?NaN:(u=0,(t=Ie(r))<1048576&&(u-=54,t=Ie(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=Ee(r,t|1072693248^o))-1,(1048575&2+t)<3?0===i?0===u?0:u*He+u*Ge:(a=i*i*(.5-.3333333333333333*i),0===u?i-a:u*He-(a-u*Ge-i)):(o=t-398458|0,f=440401-t|0,e=(v=(y=(c=i/(2+i))*c)*y)*Te(v),a=y*ke(v)+e,(o|=f)>0?(n=.5*i*i,0===u?i-(n-c*(n+a)):u*He-(n-(c*(n+a)+u*Ge)-i)):0===u?i-c*(i-a):u*He-(c*(i-a)-u*Ge-i))))},Me=m,qe=Ve;var Le=function(r){return Me(r)||r<=0?NaN:1+qe(r/1.4142135623730951)+.28860783245076643},We=3.141592653589793,xe=m;var Re=function(r){return xe(r)||r<0?NaN:.2450893006876391},Ye=m;var Ce=function(r){return Ye(r)||r<0?NaN:1.2533141373155003*r},ze=m,Be=Gn(1.3862943611198906);var De=function(r){return ze(r)||r<0?NaN:r*Be},Je=m;var Ke=function(r){return Je(r)||r<0?NaN:r},Qe=m,Xe=We,Ze=.5019328882303191/xt(4-Xe,1.5);var $e=function(r){return Qe(r)||r<0?NaN:Ze},ru=m,nu=Gn(.8584073464102069);var tu=function(r){return ru(r)||r<0?NaN:nu*r/1.4142135623730951},eu=m;var uu=function(r){return eu(r)||r<0?NaN:.8584073464102069*r*r/2};var au=m,iu=Rr,ou=ut,fu=j,cu=_,vu=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},yu=.6931471803691238,lu=1.9082149292705877e-10;var su=function(r){var n,t,e,u,a,i,o,f,c,v,y,l;if(r===fu||au(r))return r;if(r===cu)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return fu}if(a=0|iu(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+yu,u=-lu,l=-1):(e=r-yu,u=lu,l=1):(l=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(v=l|=0)*yu,u=v*lu),c=e-(r=e-u)-u;else{if(a<1016070144)return r;l=0}return y=(f=r*(n=.5*r))*(((i=1+f*vu(f))-(v=3-i*n))/(6-r*v)),0===l?r-(r*y-f):(y=r*(y-c)-c,y-=f,-1===l?.5*(r-y)-.5:1===l?r<-.25?-2*(y-(r+.5)):1+2*(r-y):l<=-2||l>56?(e=iu(o=1-(y-r))+(l<<20)|0,(o=ou(o,e))-1):(v=1,l<20?o=(v=ou(v,e=1072693248-(2097152>>l)|0))-(y-r):(o=r-(y+(v=ou(v,e=1023-l<<20|0))),o+=1),e=iu(o)+(l<<20)|0,ou(o,e)))};var Nu=m,pu=Rr,mu=ut,bu=j,gu=_,hu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},du=.6931471803691238,wu=1.9082149292705877e-10;var Au=function(r){var n,t,e,u,a,i,o,f,c,v;if(r<-1||Nu(r))return NaN;if(-1===r)return gu;if(r===bu)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(a=(v=((t=pu(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(v=((t=pu(c=r))>>20)-1023,a=0),(t&=1048575)<434334?c=mu(c,1072693248|t):(v+=1,c=mu(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*du+(a+=v*wu):v*du-((f=n*(1-.6666666666666666*u))-(v*wu+a)-u):(f=(o=(i=u/(2+u))*i)*hu(o),0===v?u-(n-i*(n+f)):v*du-(n-(i*(n+f)+(v*wu+a))-u))},_u=su,ju=m,Uu=Au,Ou=En,Su=xt,Iu=Ve,Eu=_;var Fu=function(r,n){var t,e;return ju(r)||ju(n)||n<0?NaN:0===n?r<0?Eu:0:r<0?Eu:(t=Su(n,2),(e=-Su(r,2)/(2*t))<-.6931471805599453?Uu(-Ou(e)):Iu(-_u(e)))},Pu=m,Tu=_;var ku=Bt,Hu=m,Gu=_;var Vu=function(r,n){return Pu(r)||Pu(n)?NaN:r<n?Tu:0};p(Vu,"factory",(function(r){return Hu(r)?ku(NaN):function(n){if(Hu(n))return NaN;return n<r?Gu:0}}));var Mu=Bt,qu=Vu.factory,Lu=su,Wu=m,xu=Au,Ru=En,Yu=xt,Cu=Ve,zu=_;var Bu=Fu;p(Bu,"factory",(function(r){var n;return Wu(r)||r<0?Mu(NaN):0===r?qu(0):(n=Yu(r,2),function(r){var t;if(Wu(r))return NaN;if(r<0)return zu;return(t=-Yu(r,2)/(2*n))<-.6931471805599453?xu(-Ru(t)):Cu(-Lu(t))})}));var Du=Bu,Ju=m,Ku=xt,Qu=Ve,Xu=j,Zu=_;var $u=function(r,n){var t;return Ju(r)||Ju(n)||n<0?NaN:0===n?0===r?Xu:Zu:r<0||r===Xu?Zu:(t=Ku(n,2),Qu(1/t*r)-Ku(r,2)/(2*t))},ra=j,na=_,ta=m;var ea=Bt,ua=j,aa=_,ia=m;var oa=function(r,n){return ta(r)||ta(n)?NaN:r===n?ra:na};p(oa,"factory",(function(r){return ia(r)?ea(NaN):function(n){if(ia(n))return NaN;return n===r?ua:aa}}));var fa=Bt,ca=oa.factory,va=m,ya=xt,la=Ve,sa=j,Na=_;var pa=$u;p(pa,"factory",(function(r){var n,t;return va(r)||r<0?fa(NaN):0===r?ca(0):(t=ya(r,2),n=1/t,function(r){if(va(r))return NaN;if(r<0||r===sa)return Na;return la(n*r)-ya(r,2)/(2*t)})}));var ma=pa;var ba=m,ga=En,ha=xn,da=j,wa=_,Aa=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},_a=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},ja=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},Ua=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Oa=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Sa=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},Ia=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Ea=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Fa=.8450629115104675;var Pa=function(r){var n,t,e,u,a,i,o;return ba(r)?NaN:r===da?1:r===wa?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:r+r*((u=.12837916709551256+(e=r*r)*Aa(e))/(a=1+e*_a(e))):t<1.25?(i=(a=t-1)*ja(a)-.0023621185607526594,o=1+a*Ua(a),n?-Fa-i/o:Fa+i/o):t>=6?n?-1:1:(a=1/(t*t),t<2.857142857142857?(u=a*Oa(a)-.009864944034847148,a=1+a*Sa(a)):(u=a*Ia(a)-.0098649429247001,a=1+a*Ea(a)),e=ha(t,0),u=ga(-e*e-.5625)*ga((e-t)*(e+t)+u/a),n?u/t-1:1-u/t))},Ta=m,ka=En,Ha=Pa;var Ga=Bt,Va=m,Ma=En,qa=Pa;var La=function(r,n){var t,e;return Ta(r)||Ta(n)||n<0?NaN:(e=1+(t=r*n)*ka(t*t/2),e*=1.2533141373155003*(Ha(t/1.4142135623730951)+1))};p(La,"factory",(function(r){return Va(r)||r<0?Ga(NaN):function(n){var t,e;if(Va(n))return NaN;return e=1+(t=n*r)*Ma(t*t/2),e*=1.2533141373155003*(qa(t/1.4142135623730951)+1)}}));var Wa=La,xa=m,Ra=En,Ya=xt,Ca=j;var za=function(r,n){var t;return xa(r)||xa(n)||n<0?NaN:0===n?0===r?Ca:0:r<0||r===Ca?0:1/(t=Ya(n,2))*r*Ra(-Ya(r,2)/(2*t))},Ba=j,Da=m;var Ja=Bt,Ka=j,Qa=m;var Xa=function(r,n){return Da(r)||Da(n)?NaN:r===n?Ba:0};p(Xa,"factory",(function(r){return Qa(r)?Ja(NaN):function(n){if(Qa(n))return NaN;return n===r?Ka:0}}));var Za=Bt,$a=Xa.factory,ri=m,ni=En,ti=xt,ei=j;var ui=za;p(ui,"factory",(function(r){var n,t;return ri(r)||r<0?Za(NaN):0===r?$a(0):(t=ti(r,2),n=1/t,function(r){if(ri(r))return NaN;if(r<0||r===ei)return 0;return n*r*ni(-ti(r,2)/(2*t))})}));var ai=ui,ii=m,oi=Au,fi=Gn;var ci=function(r,n){return ii(n)||n<0||ii(r)||r<0||r>1?NaN:0===n?0:fi(-2*(n*n)*oi(-r))},vi=m;var yi=Bt,li=m;var si=function(r,n){return vi(r)||r<0||r>1?NaN:n};p(si,"factory",(function(r){return li(r)?yi(NaN):function(n){if(li(n)||n<0||n>1)return NaN;return r}}));var Ni=Bt,pi=si.factory,mi=m,bi=Au,gi=Gn;var hi=ci;p(hi,"factory",(function(r){var n;return mi(r)||r<0?Ni(NaN):0===r?pi(0):(n=r*r,function(r){if(mi(r)||r<0||r>1)return NaN;return gi(-2*n*bi(-r))})}));var di=hi,wi=y,Ai=p,_i=ae,ji=Se.isPrimitive,Ui=Le,Oi=Re,Si=Ce,Ii=De,Ei=Ke,Fi=$e,Pi=tu,Ti=uu,ki=ee,Hi=Du,Gi=ma,Vi=Wa,Mi=ai,qi=di;function Li(){var r;if(!(this instanceof Li))return 0===arguments.length?new Li:new Li(arguments[0]);if(arguments.length){if(!ji(r=arguments[0]))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+r+"`")}else r=1;return wi(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!ji(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");r=n}}),this}_i(Li.prototype,"entropy",(function(){return Ui(this.sigma)})),_i(Li.prototype,"kurtosis",(function(){return Oi(this.sigma)})),_i(Li.prototype,"mean",(function(){return Si(this.sigma)})),_i(Li.prototype,"median",(function(){return Ii(this.sigma)})),_i(Li.prototype,"mode",(function(){return Ei(this.sigma)})),_i(Li.prototype,"skewness",(function(){return Fi(this.k,this.sigma)})),_i(Li.prototype,"stdev",(function(){return Pi(this.sigma)})),_i(Li.prototype,"variance",(function(){return Ti(this.sigma)})),Ai(Li.prototype,"cdf",(function(r){return ki(r,this.sigma)})),Ai(Li.prototype,"logcdf",(function(r){return Hi(r,this.sigma)})),Ai(Li.prototype,"logpdf",(function(r){return Gi(r,this.sigma)})),Ai(Li.prototype,"mgf",(function(r){return Vi(r,this.sigma)})),Ai(Li.prototype,"pdf",(function(r){return Mi(r,this.sigma)})),Ai(Li.prototype,"quantile",(function(r){return qi(r,this.sigma)}));var Wi=Li,xi={};s(xi,"cdf",ee),s(xi,"Rayleigh",Wi),s(xi,"entropy",Le),s(xi,"kurtosis",Re),s(xi,"logcdf",Du),s(xi,"logpdf",ma),s(xi,"mean",Ce),s(xi,"median",De),s(xi,"mgf",Wa),s(xi,"mode",Ke),s(xi,"pdf",ai),s(xi,"quantile",di),s(xi,"skewness",$e),s(xi,"variance",uu);export{Wi as Rayleigh,ee as cdf,xi as default,Le as entropy,Re as kurtosis,Du as logcdf,ma as logpdf,Ce as mean,De as median,Wa as mgf,Ke as mode,ai as pdf,di as quantile,$e as skewness,uu as variance};
//# sourceMappingURL=mod.js.map
