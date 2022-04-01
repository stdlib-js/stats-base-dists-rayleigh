// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).rayleigh=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,y,l;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,l="set"in t,v&&(y||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),l&&a&&a.call(r,n,t.set),r},y=n()?c:v,l=y;var N=function(r,n,t){l(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},p=y;var s=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var m=function(r){return r!=r},b=Math.floor,g=Math.ceil,h=b,d=g;var w=function(r){return r<0?d(r):h(r)},A=Number,_=A.NEGATIVE_INFINITY,j=Number.POSITIVE_INFINITY,U=j,O=_;var S=function(r){return r===U||r===O};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return I&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,F=T;var P=function(r){return F.call(r)},H=Object.prototype.hasOwnProperty;var k=function(r,n){return null!=r&&H.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",V=k,M=G,x=T;var L=P,W=function(r){var n,t,e;if(null==r)return x.call(r);t=r[M],n=V(r,M);try{r[M]=void 0}catch(n){return x.call(r)}return e=x.call(r),n?r[M]=t:delete r[M],e},q=E()?W:L,Y=q,C="function"==typeof Uint32Array;var R="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return C&&r instanceof Uint32Array||"[object Uint32Array]"===Y(r)},B=R;var D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,X=q,Z="function"==typeof Float64Array;var $="function"==typeof Float64Array?Float64Array:null,rr=function(r){return Z&&r instanceof Float64Array||"[object Float64Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr([1,3.14,-3.14,NaN]),r=rr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var er="function"==typeof Float64Array?Float64Array:void 0,ur=function(){throw new Error("not implemented")},ir=tr()?er:ur,ar=q,or="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null,cr=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ar(r)},vr=fr;var yr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),r=cr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,Nr=function(){throw new Error("not implemented")},pr=yr()?lr:Nr,sr=q,mr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,gr=function(r){return mr&&r instanceof Uint16Array||"[object Uint16Array]"===sr(r)},hr=br;var dr=function(){var r,n;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,65536,65537]),r=gr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var wr,Ar="function"==typeof Uint16Array?Uint16Array:void 0,_r=function(){throw new Error("not implemented")},jr={uint16:dr()?Ar:_r,uint8:pr};(wr=new jr.uint16(1))[0]=4660;var Ur,Or,Sr=52===new jr.uint8(wr.buffer)[0];!0===Sr?(Ur=1,Or=0):(Ur=0,Or=1);var Ir=Q,Er={HIGH:Ur,LOW:Or},Tr=new ir(1),Fr=new Ir(Tr.buffer),Pr=Er.HIGH,Hr=Er.LOW;var kr=function(r,n){return Tr[0]=n,r[0]=Fr[Pr],r[1]=Fr[Hr],r};var Gr=function(r,n){return 1===arguments.length?kr([0,0],r):kr(r,n)},Vr=Gr,Mr=Q,xr=!0===Sr?1:0,Lr=new ir(1),Wr=new Mr(Lr.buffer);var qr,Yr,Cr=function(r){return Lr[0]=r,Wr[xr]};!0===Sr?(qr=1,Yr=0):(qr=0,Yr=1);var Rr=Q,zr={HIGH:qr,LOW:Yr},Br=new ir(1),Dr=new Rr(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;var Qr=function(r,n){return Dr[Jr]=r,Dr[Kr]=n,Br[0]},Xr=Vr,Zr=Cr,$r=Qr,rn=[0,0];var nn=function(r,n){var t,e;return Xr(rn,r),t=rn[0],t&=2147483647,e=Zr(n),$r(t|=e&=2147483648,rn[1])};var tn=function(r){return Math.abs(r)},en=S,un=m,an=tn;var on=function(r,n){return un(n)||en(n)?(r[0]=n,r[1]=0,r):0!==n&&an(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var fn=function(r,n){return 1===arguments.length?on([0,0],r):on(r,n)},cn=Cr;var vn=function(r){var n=cn(r);return(n=(2146435072&n)>>>20)-1023|0},yn=j,ln=_,Nn=m,pn=S,sn=nn,mn=fn,bn=vn,gn=Vr,hn=Qr,dn=[0,0],wn=[0,0];var An=function(r,n){var t,e;return 0===n||0===r||Nn(r)||pn(r)?r:(mn(dn,r),n+=dn[1],(n+=bn(r=dn[0]))<-1074?sn(0,r):n>1023?r<0?ln:yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,gn(wn,r),t=wn[0],t&=2148532223,e*hn(t|=n+1023<<20,wn[1])))},_n=An;var jn=_n,Un=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var On=m,Sn=w,In=_,En=j,Tn=function(r,n,t){var e,u,i;return i=(e=r-n)-(u=e*e)*Un(u),jn(1-(n-e*i/(2-i)-r),t)},Fn=1.4426950408889634,Pn=1/(1<<28);var Hn=function(r){var n;return On(r)||r===En?r:r===In?0:r>709.782712893384?En:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Pn?1+r:(n=Sn(r<0?Fn*r-.5:Fn*r+.5),Tn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},kn=b;var Gn=function(r){return kn(r)===r},Vn=Gn;var Mn=function(r){return Vn(r/2)};var xn=function(r){return Mn(r>0?r-1:r+1)},Ln=Math.sqrt,Wn=Q,qn=!0===Sr?0:1,Yn=new ir(1),Cn=new Wn(Yn.buffer);var Rn=function(r,n){return Yn[0]=r,Cn[qn]=n>>>0,Yn[0]},zn=Rn;var Bn=function(r){return 0|r},Dn=xn,Jn=nn,Kn=_,Qn=j;var Xn=function(r,n){return n===Kn?Qn:n===Qn?0:n>0?Dn(n)?r:0:Dn(n)?Jn(Qn,r):Qn},Zn=Cr;var $n=function(r,n){return(2147483647&Zn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},rt=tn,nt=j;var tt=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:rt(r)<1==(n===nt)?0:nt},et=Q,ut=!0===Sr?1:0,it=new ir(1),at=new et(it.buffer);var ot=function(r,n){return it[0]=r,at[ut]=n>>>0,it[0]},ft=ot;var ct=Cr,vt=zn,yt=ft,lt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Nt=1048576,pt=[1,1.5],st=[0,.5849624872207642],mt=[0,1.350039202129749e-8];var bt=zn,gt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ht=Cr,dt=ft,wt=zn,At=Bn,_t=_n,jt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ut=2147483647,Ot=1048575,St=1048576;var It=m,Et=xn,Tt=S,Ft=Gn,Pt=Ln,Ht=tn,kt=Vr,Gt=zn,Vt=Bn,Mt=_,xt=j,Lt=Xn,Wt=$n,qt=tt,Yt=function(r,n,t){var e,u,i,a,o,f,c,v,y,l,N,p,s,m,b,g,h,d,w,A;return d=0,t<Nt&&(d-=53,t=ct(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,d+=1,t-=Nt),e=524288+(t>>1|536870912),o=(h=1/((n=yt(n,t))+(c=pt[A])))*((g=n-c)-(a=vt(u=g*h,0))*(f=yt(0,e+=A<<18))-a*(n-(f-c))),b=(i=u*u)*i*lt(i),f=vt(f=3+(i=a*a)+(b+=o*(a+u)),0),s=(N=-7.028461650952758e-9*(y=vt(y=(g=a*f)+(h=o*f+(b-(f-3-i))*u),0))+.9617966939259756*(h-(y-g))+mt[A])-((p=vt(p=(l=.9617967009544373*y)+N+(v=st[A])+(m=d),0))-m-v-l),r[0]=p,r[1]=s,r},Ct=function(r,n){var t,e,u,i,a;return t=(a=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*gt(u)))-((e=bt(e=(i=1.4426950216293335*u)+a,0))-i),r[0]=e,r[1]=t,r},Rt=function(r,n,t){var e,u,i,a,o,f,c,v,y;return y=((v=r&Ut|0)>>20)-1023|0,c=0,v>1071644672&&(u=dt(0,((c=r+(St>>y+1)>>>0)&~(Ot>>(y=((c&Ut)>>20)-1023|0)))>>>0),c=(c&Ot|St)>>20-y>>>0,r<0&&(c=-c),n-=u),o=(a=.6931471805599453*(t-((u=wt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((f=(i=.6931471824645996*u)+a)-i),e=f-(u=f*f)*jt(u),r=ht(f=1-(f*e/(e-2)-(o+f*o)-f)),r=At(r),f=(r+=c<<20>>>0)>>20<=0?_t(f,c):dt(f,r)},zt=2147483647,Bt=1083179008,Dt=1e300,Jt=1e-300,Kt=[0,0],Qt=[0,0];var Xt=function r(n,t){var e,u,i,a,o,f,c,v,y,l,N,p,s,m;if(It(n)||It(t))return NaN;if(kt(Kt,t),o=Kt[0],0===Kt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Pt(n);if(-.5===t)return 1/Pt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Tt(t))return qt(n,t)}if(kt(Kt,n),a=Kt[0],0===Kt[1]){if(0===a)return Lt(n,t);if(1===n)return 1;if(-1===n&&Et(t))return-1;if(Tt(n))return n===Mt?r(-0,-t):t<0?0:xt}if(n<0&&!1===Ft(t))return(n-n)/(n-n);if(i=Ht(n),e=a&zt|0,u=o&zt|0,c=o>>>31|0,f=(f=a>>>31|0)&&Et(t)?-1:1,u>1105199104){if(u>1139802112)return Wt(n,t);if(e<1072693247)return 1===c?f*Dt*Dt:f*Jt*Jt;if(e>1072693248)return 0===c?f*Dt*Dt:f*Jt*Jt;N=Ct(Qt,i)}else N=Yt(Qt,i,e);if(l=(t-(v=Gt(t,0)))*N[0]+t*N[1],y=v*N[0],kt(Kt,p=l+y),s=Vt(Kt[0]),m=Vt(Kt[1]),s>=Bt){if(0!=(s-Bt|m))return f*Dt*Dt;if(l+8008566259537294e-32>p-y)return f*Dt*Dt}else if((s&zt)>=1083231232){if(0!=(s-3230714880|m))return f*Jt*Jt;if(l<=p-y)return f*Jt*Jt}return f*(p=Rt(s,y,l))},Zt=Xt,$t=m,re=Hn,ne=Zt;var te=function(r,n){var t;return $t(r)||$t(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=ne(n,2),1-re(-ne(r,2)/(2*t)))};var ee=function(r){return function(){return r}},ue=m;var ie=ee,ae=m;var oe=function(r,n){return ue(r)||ue(n)?NaN:r<n?0:1};s(oe,"factory",(function(r){return ae(r)?ie(NaN):function(n){if(ae(n))return NaN;return n<r?0:1}}));var fe=ee,ce=oe.factory,ve=m,ye=Hn,le=Zt;var Ne=te;s(Ne,"factory",(function(r){var n;return ve(r)||r<0?fe(NaN):0===r?ce(0):(n=le(r,2),function(r){if(ve(r))return NaN;if(r<0)return 0;return 1-ye(-le(r,2)/(2*n))})}));var pe=Ne,se=y;var me=function(r,n,t){se(r,n,{configurable:!1,enumerable:!1,get:t})};var be=function(r){return"number"==typeof r},ge=A.prototype.toString;var he=q,de=A,we=function(r){try{return ge.call(r),!0}catch(r){return!1}},Ae=E();var _e=function(r){return"object"==typeof r&&(r instanceof de||(Ae?we(r):"[object Number]"===he(r)))},je=be,Ue=_e;var Oe=s,Se=function(r){return je(r)||Ue(r)},Ie=_e;Oe(Se,"isPrimitive",be),Oe(Se,"isObject",Ie);var Ee=Se.isPrimitive;var Te=function(r){return Ee(r)&&r>0},Fe=Se.isObject;var Pe=function(r){return Fe(r)&&r.valueOf()>0},He=Te,ke=Pe;var Ge=s,Ve=function(r){return He(r)||ke(r)},Me=Pe;Ge(Ve,"isPrimitive",Te),Ge(Ve,"isObject",Me);var xe=Ve;var Le=Cr,We=ft,qe=m,Ye=_,Ce=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Re=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ze=.6931471803691238,Be=1.9082149292705877e-10,De=1048575;var Je=function(r){var n,t,e,u,i,a,o,f,c,v,y;return 0===r?Ye:qe(r)||r<0?NaN:(u=0,(t=Le(r))<1048576&&(u-=54,t=Le(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=De)+614244&1048576|0)>>20|0,a=(r=We(r,t|1072693248^o))-1,(De&2+t)<3?0===a?0===u?0:u*ze+u*Be:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*ze-(i-u*Be-a)):(o=t-398458|0,f=440401-t|0,e=(v=(y=(c=a/(2+a))*c)*y)*Ce(v),i=y*Re(v)+e,(o|=f)>0?(n=.5*a*a,0===u?a-(n-c*(n+i)):u*ze-(n-(c*(n+i)+u*Be)-a)):0===u?a-c*(a-i):u*ze-(c*(a-i)-u*Be-a))))},Ke=m,Qe=Je;var Xe=function(r){return Ke(r)||r<=0?NaN:1+Qe(r/1.4142135623730951)+.28860783245076643},Ze=3.141592653589793,$e=m;var ru=function(r){return $e(r)||r<0?NaN:.2450893006876391},nu=m;var tu=function(r){return nu(r)||r<0?NaN:1.2533141373155003*r},eu=m,uu=Ln(1.3862943611198906);var iu=function(r){return eu(r)||r<0?NaN:r*uu},au=m;var ou=function(r){return au(r)||r<0?NaN:r},fu=m,cu=Ze,vu=.5019328882303191/Zt(4-cu,1.5);var yu=function(r){return fu(r)||r<0?NaN:vu},lu=m,Nu=Ln(.8584073464102069);var pu=function(r){return lu(r)||r<0?NaN:Nu*r/1.4142135623730951},su=m;var mu=function(r){return su(r)||r<0?NaN:.8584073464102069*r*r/2};var bu=m,gu=Cr,hu=ft,du=j,wu=_,Au=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},_u=.6931471803691238,ju=1.9082149292705877e-10,Uu=1.4426950408889634;var Ou=function(r){var n,t,e,u,i,a,o,f,c,v,y,l;if(r===du||bu(r))return r;if(r===wu)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return du}if(i=0|gu(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+_u,u=-ju,l=-1):(e=r-_u,u=ju,l=1):(l=t?Uu*r-.5:Uu*r+.5,e=r-(v=l|=0)*_u,u=v*ju),c=e-(r=e-u)-u;else{if(i<1016070144)return r;l=0}return y=(f=r*(n=.5*r))*(((a=1+f*Au(f))-(v=3-a*n))/(6-r*v)),0===l?r-(r*y-f):(y=r*(y-c)-c,y-=f,-1===l?.5*(r-y)-.5:1===l?r<-.25?-2*(y-(r+.5)):1+2*(r-y):l<=-2||l>56?(e=gu(o=1-(y-r))+(l<<20)|0,(o=hu(o,e))-1):(v=1,l<20?o=(v=hu(v,e=1072693248-(2097152>>l)|0))-(y-r):(o=r-(y+(v=hu(v,e=1023-l<<20|0))),o+=1),e=gu(o)+(l<<20)|0,hu(o,e)))};var Su=m,Iu=Cr,Eu=ft,Tu=j,Fu=_,Pu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Hu=.6931471803691238,ku=1.9082149292705877e-10;var Gu=function(r){var n,t,e,u,i,a,o,f,c,v;if(r<-1||Su(r))return NaN;if(-1===r)return Fu;if(r===Tu)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(i=(v=((t=Iu(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(v=((t=Iu(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=Eu(c,1072693248|t):(v+=1,c=Eu(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*Hu+(i+=v*ku):v*Hu-((f=n*(1-.6666666666666666*u))-(v*ku+i)-u):(f=(o=(a=u/(2+u))*a)*Pu(o),0===v?u-(n-a*(n+f)):v*Hu-(n-(a*(n+f)+(v*ku+i))-u))},Vu=Ou,Mu=m,xu=Gu,Lu=Hn,Wu=Zt,qu=Je,Yu=_;var Cu=function(r,n){var t,e;return Mu(r)||Mu(n)||n<0?NaN:0===n?r<0?Yu:0:r<0?Yu:(t=Wu(n,2),(e=-Wu(r,2)/(2*t))<-.6931471805599453?xu(-Lu(e)):qu(-Vu(e)))},Ru=m,zu=_;var Bu=ee,Du=m,Ju=_;var Ku=function(r,n){return Ru(r)||Ru(n)?NaN:r<n?zu:0};s(Ku,"factory",(function(r){return Du(r)?Bu(NaN):function(n){if(Du(n))return NaN;return n<r?Ju:0}}));var Qu=ee,Xu=Ku.factory,Zu=Ou,$u=m,ri=Gu,ni=Hn,ti=Zt,ei=Je,ui=_;var ii=Cu;s(ii,"factory",(function(r){var n;return $u(r)||r<0?Qu(NaN):0===r?Xu(0):(n=ti(r,2),function(r){var t;if($u(r))return NaN;if(r<0)return ui;return(t=-ti(r,2)/(2*n))<-.6931471805599453?ri(-ni(t)):ei(-Zu(t))})}));var ai=ii,oi=m,fi=Zt,ci=Je,vi=j,yi=_;var li=function(r,n){var t;return oi(r)||oi(n)||n<0?NaN:0===n?0===r?vi:yi:r<0||r===vi?yi:(t=fi(n,2),ci(1/t*r)-fi(r,2)/(2*t))},Ni=j,pi=_,si=m;var mi=ee,bi=j,gi=_,hi=m;var di=function(r,n){return si(r)||si(n)?NaN:r===n?Ni:pi};s(di,"factory",(function(r){return hi(r)?mi(NaN):function(n){if(hi(n))return NaN;return n===r?bi:gi}}));var wi=ee,Ai=di.factory,_i=m,ji=Zt,Ui=Je,Oi=j,Si=_;var Ii=li;s(Ii,"factory",(function(r){var n,t;return _i(r)||r<0?wi(NaN):0===r?Ai(0):(t=ji(r,2),n=1/t,function(r){if(_i(r))return NaN;if(r<0||r===Oi)return Si;return Ui(n*r)-ji(r,2)/(2*t)})}));var Ei=Ii;var Ti=m,Fi=Hn,Pi=zn,Hi=j,ki=_,Gi=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Vi=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Mi=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},xi=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Li=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Wi=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},qi=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Yi=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Ci=.8450629115104675;var Ri=function(r){var n,t,e,u,i,a,o;return Ti(r)?NaN:r===Hi?1:r===ki?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:r+r*((u=.12837916709551256+(e=r*r)*Gi(e))/(i=1+e*Vi(e))):t<1.25?(a=(i=t-1)*Mi(i)-.0023621185607526594,o=1+i*xi(i),n?-Ci-a/o:Ci+a/o):t>=6?n?-1:1:(i=1/(t*t),t<2.857142857142857?(u=i*Li(i)-.009864944034847148,i=1+i*Wi(i)):(u=i*qi(i)-.0098649429247001,i=1+i*Yi(i)),e=Pi(t,0),u=Fi(-e*e-.5625)*Fi((e-t)*(e+t)+u/i),n?u/t-1:1-u/t))},zi=m,Bi=Hn,Di=Ri;var Ji=ee,Ki=m,Qi=Hn,Xi=Ri;var Zi=function(r,n){var t,e;return zi(r)||zi(n)||n<0?NaN:(e=1+(t=r*n)*Bi(t*t/2),e*=1.2533141373155003*(Di(t/1.4142135623730951)+1))};s(Zi,"factory",(function(r){return Ki(r)||r<0?Ji(NaN):function(n){var t,e;if(Ki(n))return NaN;return e=1+(t=n*r)*Qi(t*t/2),e*=1.2533141373155003*(Xi(t/1.4142135623730951)+1)}}));var $i=Zi,ra=m,na=Hn,ta=Zt,ea=j;var ua=function(r,n){var t;return ra(r)||ra(n)||n<0?NaN:0===n?0===r?ea:0:r<0||r===ea?0:1/(t=ta(n,2))*r*na(-ta(r,2)/(2*t))},ia=j,aa=m;var oa=ee,fa=j,ca=m;var va=function(r,n){return aa(r)||aa(n)?NaN:r===n?ia:0};s(va,"factory",(function(r){return ca(r)?oa(NaN):function(n){if(ca(n))return NaN;return n===r?fa:0}}));var ya=ee,la=va.factory,Na=m,pa=Hn,sa=Zt,ma=j;var ba=ua;s(ba,"factory",(function(r){var n,t;return Na(r)||r<0?ya(NaN):0===r?la(0):(t=sa(r,2),n=1/t,function(r){if(Na(r))return NaN;if(r<0||r===ma)return 0;return n*r*pa(-sa(r,2)/(2*t))})}));var ga=ba,ha=m,da=Gu,wa=Ln;var Aa=function(r,n){return ha(n)||n<0||ha(r)||r<0||r>1?NaN:0===n?0:wa(-2*(n*n)*da(-r))},_a=m;var ja=ee,Ua=m;var Oa=function(r,n){return _a(r)||r<0||r>1?NaN:n};s(Oa,"factory",(function(r){return Ua(r)?ja(NaN):function(n){if(Ua(n)||n<0||n>1)return NaN;return r}}));var Sa=ee,Ia=Oa.factory,Ea=m,Ta=Gu,Fa=Ln;var Pa=Aa;s(Pa,"factory",(function(r){var n;return Ea(r)||r<0?Sa(NaN):0===r?Ia(0):(n=r*r,function(r){if(Ea(r)||r<0||r>1)return NaN;return Fa(-2*n*Ta(-r))})}));var Ha=Pa,ka=y,Ga=s,Va=me,Ma=xe.isPrimitive,xa=Xe,La=ru,Wa=tu,qa=iu,Ya=ou,Ca=yu,Ra=pu,za=mu,Ba=pe,Da=ai,Ja=Ei,Ka=$i,Qa=ga,Xa=Ha;function Za(){var r;if(!(this instanceof Za))return 0===arguments.length?new Za:new Za(arguments[0]);if(arguments.length){if(!Ma(r=arguments[0]))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+r+"`")}else r=1;return ka(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Ma(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");r=n}}),this}Va(Za.prototype,"entropy",(function(){return xa(this.sigma)})),Va(Za.prototype,"kurtosis",(function(){return La(this.sigma)})),Va(Za.prototype,"mean",(function(){return Wa(this.sigma)})),Va(Za.prototype,"median",(function(){return qa(this.sigma)})),Va(Za.prototype,"mode",(function(){return Ya(this.sigma)})),Va(Za.prototype,"skewness",(function(){return Ca(this.k,this.sigma)})),Va(Za.prototype,"stdev",(function(){return Ra(this.sigma)})),Va(Za.prototype,"variance",(function(){return za(this.sigma)})),Ga(Za.prototype,"cdf",(function(r){return Ba(r,this.sigma)})),Ga(Za.prototype,"logcdf",(function(r){return Da(r,this.sigma)})),Ga(Za.prototype,"logpdf",(function(r){return Ja(r,this.sigma)})),Ga(Za.prototype,"mgf",(function(r){return Ka(r,this.sigma)})),Ga(Za.prototype,"pdf",(function(r){return Qa(r,this.sigma)})),Ga(Za.prototype,"quantile",(function(r){return Xa(r,this.sigma)}));var $a=Za,ro=N,no={};return ro(no,"cdf",pe),ro(no,"Rayleigh",$a),ro(no,"entropy",Xe),ro(no,"kurtosis",ru),ro(no,"logcdf",ai),ro(no,"logpdf",Ei),ro(no,"mean",tu),ro(no,"median",iu),ro(no,"mgf",$i),ro(no,"mode",ou),ro(no,"pdf",ga),ro(no,"quantile",Ha),ro(no,"skewness",yu),ro(no,"variance",mu),no}));
//# sourceMappingURL=bundle.js.map
