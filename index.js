// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,u=Object.prototype,i=u.toString,o=u.__defineGetter__,f=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__,y=e,l=function(n,r,t){var e,y,l,N;if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((y="value"in t)&&(a.call(n,r)||c.call(n,r)?(e=n.__proto__,n.__proto__=u,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),l="get"in t,N="set"in t,y&&(l||N))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(n,r,t.get),N&&f&&f.call(n,r,t.set),n},N=t()?y:l,p=N,s=function(n,r,t){p(n,r,{configurable:!1,enumerable:!0,writable:!1,value:t})},v=N,m=function(n,r,t){v(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},b=function(n){return n!=n},g=Math.floor,h=Math.ceil,d=g,w=h,A=function(n){return n<0?w(n):d(n)},_=Number,j=_.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,O=U,S=j,I=function(n){return n===O||n===S},E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),T=function(){return E&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,P=F,H=function(n){return P.call(n)},k=Object.prototype.hasOwnProperty,G=function(n,r){return null!=n&&k.call(n,r)},V="function"==typeof Symbol?Symbol.toStringTag:"",M=G,x=V,L=F,W=H,q=function(n){var r,t,e;if(null==n)return L.call(n);t=n[x],r=M(n,x);try{n[x]=void 0}catch(r){return L.call(n)}return e=L.call(n),r?n[x]=t:delete n[x],e},Y=T()?q:W,C=Y,R="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,B=function(n){return R&&n instanceof Uint32Array||"[object Uint32Array]"===C(n)},D=z,J=function(){var n,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,4294967296,4294967297]),n=B(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},K="function"==typeof Uint32Array?Uint32Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=Y,$="function"==typeof Float64Array,nn="function"==typeof Float64Array?Float64Array:null,rn=function(n){return $&&n instanceof Float64Array||"[object Float64Array]"===Z(n)},tn=nn,en=function(){var n,r;if("function"!=typeof tn)return!1;try{r=new tn([1,3.14,-3.14,NaN]),n=rn(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},un="function"==typeof Float64Array?Float64Array:void 0,on=function(){throw new Error("not implemented")},fn=en()?un:on,an=Y,cn="function"==typeof Uint8Array,yn="function"==typeof Uint8Array?Uint8Array:null,ln=function(n){return cn&&n instanceof Uint8Array||"[object Uint8Array]"===an(n)},Nn=yn,pn=function(){var n,r;if("function"!=typeof Nn)return!1;try{r=new Nn(r=[1,3.14,-3.14,256,257]),n=ln(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},sn="function"==typeof Uint8Array?Uint8Array:void 0,vn=function(){throw new Error("not implemented")},mn=pn()?sn:vn,bn=Y,gn="function"==typeof Uint16Array,hn="function"==typeof Uint16Array?Uint16Array:null,dn=function(n){return gn&&n instanceof Uint16Array||"[object Uint16Array]"===bn(n)},wn=hn,An=function(){var n,r;if("function"!=typeof wn)return!1;try{r=new wn(r=[1,3.14,-3.14,65536,65537]),n=dn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},_n="function"==typeof Uint16Array?Uint16Array:void 0,jn=function(){throw new Error("not implemented")},Un={uint16:An()?_n:jn,uint8:mn};(n=new Un.uint16(1))[0]=4660;var On,Sn,In=52===new Un.uint8(n.buffer)[0];!0===In?(On=1,Sn=0):(On=0,Sn=1);var En,Tn,Fn=X,Pn={HIGH:On,LOW:Sn},Hn=new fn(1),kn=new Fn(Hn.buffer),Gn=Pn.HIGH,Vn=Pn.LOW,Mn=function(n,r){return Hn[0]=r,n[0]=kn[Gn],n[1]=kn[Vn],n},xn=function(n,r){return 1===arguments.length?Mn([0,0],n):Mn(n,r)},Ln=xn,Wn=X,qn=!0===In?1:0,Yn=new fn(1),Cn=new Wn(Yn.buffer),Rn=function(n){return Yn[0]=n,Cn[qn]};!0===In?(En=1,Tn=0):(En=0,Tn=1);var zn=X,Bn={HIGH:En,LOW:Tn},Dn=new fn(1),Jn=new zn(Dn.buffer),Kn=Bn.HIGH,Qn=Bn.LOW,Xn=function(n,r){return Jn[Kn]=n,Jn[Qn]=r,Dn[0]},Zn=Ln,$n=Rn,nr=Xn,rr=[0,0],tr=function(n,r){var t,e;return Zn(rr,n),t=rr[0],t&=2147483647,e=$n(r),nr(t|=e&=2147483648,rr[1])},er=function(n){return Math.abs(n)},ur=I,ir=b,or=er,fr=function(n,r){return ir(r)||ur(r)?(n[0]=r,n[1]=0,n):0!==r&&or(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},ar=function(n,r){return 1===arguments.length?fr([0,0],n):fr(n,r)},cr=Rn,yr=function(n){var r=cr(n);return(r=(2146435072&r)>>>20)-1023|0},lr=U,Nr=j,pr=b,sr=I,vr=tr,mr=ar,br=yr,gr=Ln,hr=Xn,dr=[0,0],wr=[0,0],Ar=function(n,r){var t,e;return 0===r||0===n||pr(n)||sr(n)?n:(mr(dr,n),r+=dr[1],(r+=br(n=dr[0]))<-1074?vr(0,n):r>1023?n<0?Nr:lr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,gr(wr,n),t=wr[0],t&=2148532223,e*hr(t|=r+1023<<20,wr[1])))},_r=Ar,jr=_r,Ur=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Or=b,Sr=A,Ir=j,Er=U,Tr=function(n,r,t){var e,u,i;return i=(e=n-r)-(u=e*e)*Ur(u),jr(1-(r-e*i/(2-i)-n),t)},Fr=1.4426950408889634,Pr=1/(1<<28),Hr=function(n){var r;return Or(n)||n===Er?n:n===Ir?0:n>709.782712893384?Er:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Pr?1+n:(r=Sr(n<0?Fr*n-.5:Fr*n+.5),Tr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},kr=g,Gr=function(n){return kr(n)===n},Vr=Gr,Mr=function(n){return Vr(n/2)},xr=function(n){return Mr(n>0?n-1:n+1)},Lr=Math.sqrt,Wr=X,qr=!0===In?0:1,Yr=new fn(1),Cr=new Wr(Yr.buffer),Rr=function(n,r){return Yr[0]=n,Cr[qr]=r>>>0,Yr[0]},zr=Rr,Br=function(n){return 0|n},Dr=xr,Jr=tr,Kr=j,Qr=U,Xr=function(n,r){return r===Kr?Qr:r===Qr?0:r>0?Dr(r)?n:0:Dr(r)?Jr(Qr,n):Qr},Zr=Rn,$r=function(n,r){return(2147483647&Zr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},nt=er,rt=U,tt=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:nt(n)<1==(r===rt)?0:rt},et=X,ut=!0===In?1:0,it=new fn(1),ot=new et(it.buffer),ft=function(n,r){return it[0]=n,ot[ut]=r>>>0,it[0]},at=ft,ct=Rn,yt=zr,lt=at,Nt=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},pt=1048576,st=[1,1.5],vt=[0,.5849624872207642],mt=[0,1.350039202129749e-8],bt=zr,gt=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},ht=Rn,dt=at,wt=zr,At=Br,_t=_r,jt=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Ut=2147483647,Ot=1048575,St=1048576,It=b,Et=xr,Tt=I,Ft=Gr,Pt=Lr,Ht=er,kt=Ln,Gt=zr,Vt=Br,Mt=j,xt=U,Lt=Xr,Wt=$r,qt=tt,Yt=function(n,r,t){var e,u,i,o,f,a,c,y,l,N,p,s,v,m,b,g,h,d,w,A;return d=0,t<pt&&(d-=53,t=ct(r*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,d+=1,t-=pt),e=524288+(t>>1|536870912),f=(h=1/((r=lt(r,t))+(c=st[A])))*((g=r-c)-(o=yt(u=g*h,0))*(a=lt(0,e+=A<<18))-o*(r-(a-c))),b=(i=u*u)*i*Nt(i),a=yt(a=3+(i=o*o)+(b+=f*(o+u)),0),v=(p=-7.028461650952758e-9*(l=yt(l=(g=o*a)+(h=f*a+(b-(a-3-i))*u),0))+.9617966939259756*(h-(l-g))+mt[A])-((s=yt(s=(N=.9617967009544373*l)+p+(y=vt[A])+(m=d),0))-m-y-N),n[0]=s,n[1]=v,n},Ct=function(n,r){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*gt(u)*1.4426950408889634)-((e=bt(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n},Rt=function(n,r,t){var e,u,i,o,f,a,c,y,l;return l=((y=n&Ut|0)>>20)-1023|0,c=0,y>1071644672&&(u=dt(0,((c=n+(St>>l+1)>>>0)&~(Ot>>(l=((c&Ut)>>20)-1023|0)))>>>0),c=(c&Ot|St)>>20-l>>>0,n<0&&(c=-c),r-=u),f=(o=.6931471805599453*(t-((u=wt(u=t+r,0))-r))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+o)-i),e=a-(u=a*a)*jt(u),n=ht(a=1-(a*e/(e-2)-(f+a*f)-a)),n=At(n),a=(n+=c<<20>>>0)>>20<=0?_t(a,c):dt(a,n)},zt=2147483647,Bt=1083179008,Dt=1e300,Jt=1e-300,Kt=[0,0],Qt=[0,0],Xt=function n(r,t){var e,u,i,o,f,a,c,y,l,N,p,s,v,m;if(It(r)||It(t))return NaN;if(kt(Kt,t),f=Kt[0],0===Kt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Pt(r);if(-.5===t)return 1/Pt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Tt(t))return qt(r,t)}if(kt(Kt,r),o=Kt[0],0===Kt[1]){if(0===o)return Lt(r,t);if(1===r)return 1;if(-1===r&&Et(t))return-1;if(Tt(r))return r===Mt?n(-0,-t):t<0?0:xt}if(r<0&&!1===Ft(t))return(r-r)/(r-r);if(i=Ht(r),e=o&zt|0,u=f&zt|0,c=f>>>31|0,a=(a=o>>>31|0)&&Et(t)?-1:1,u>1105199104){if(u>1139802112)return Wt(r,t);if(e<1072693247)return 1===c?a*Dt*Dt:a*Jt*Jt;if(e>1072693248)return 0===c?a*Dt*Dt:a*Jt*Jt;p=Ct(Qt,i)}else p=Yt(Qt,i,e);if(N=(t-(y=Gt(t,0)))*p[0]+t*p[1],l=y*p[0],kt(Kt,s=N+l),v=Vt(Kt[0]),m=Vt(Kt[1]),v>=Bt){if(0!=(v-Bt|m))return a*Dt*Dt;if(N+8008566259537294e-32>s-l)return a*Dt*Dt}else if((v&zt)>=1083231232){if(0!=(v-3230714880|m))return a*Jt*Jt;if(N<=s-l)return a*Jt*Jt}return a*(s=Rt(v,l,N))},Zt=Xt,$t=b,ne=Hr,re=Zt,te=function(n,r){var t;return $t(n)||$t(r)||r<0?NaN:0===r?n<0?0:1:n<0?0:(t=re(r,2),1-ne(-re(n,2)/(2*t)))},ee=function(n){return function(){return n}},ue=b,ie=ee,oe=b,fe=function(n,r){return ue(n)||ue(r)?NaN:n<r?0:1};m(fe,"factory",(function(n){return oe(n)?ie(NaN):function(r){return oe(r)?NaN:r<n?0:1}}));var ae=ee,ce=fe.factory,ye=b,le=Hr,Ne=Zt,pe=te;m(pe,"factory",(function(n){var r;return ye(n)||n<0?ae(NaN):0===n?ce(0):(r=Ne(n,2),function(n){return ye(n)?NaN:n<0?0:1-le(-Ne(n,2)/(2*r))})}));var se=pe,ve=N,me=function(n,r,t){ve(n,r,{configurable:!1,enumerable:!1,get:t})},be=function(n){return"number"==typeof n},ge=_.prototype.toString,he=Y,de=_,we=function(n){try{return ge.call(n),!0}catch(n){return!1}},Ae=T(),_e=function(n){return"object"==typeof n&&(n instanceof de||(Ae?we(n):"[object Number]"===he(n)))},je=be,Ue=_e,Oe=m,Se=function(n){return je(n)||Ue(n)},Ie=_e;Oe(Se,"isPrimitive",be),Oe(Se,"isObject",Ie);var Ee=Se.isPrimitive,Te=function(n){return Ee(n)&&n>0},Fe=Se.isObject,Pe=function(n){return Fe(n)&&n.valueOf()>0},He=Te,ke=Pe,Ge=m,Ve=function(n){return He(n)||ke(n)},Me=Pe;Ge(Ve,"isPrimitive",Te),Ge(Ve,"isObject",Me);var xe=Ve,Le=Rn,We=at,qe=b,Ye=j,Ce=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Re=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},ze=.6931471803691238,Be=1.9082149292705877e-10,De=1048575,Je=function(n){var r,t,e,u,i,o,f,a,c,y,l;return 0===n?Ye:qe(n)||n<0?NaN:(u=0,(t=Le(n))<1048576&&(u-=54,t=Le(n*=0x40000000000000)),t>=2146435072?n+n:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=De)&1048576|0)>>20|0,o=(n=We(n,t|1072693248^f))-1,(De&2+t)<3?0===o?0===u?0:u*ze+u*Be:(i=o*o*(.5-.3333333333333333*o),0===u?o-i:u*ze-(i-u*Be-o)):(f=t-398458|0,a=440401-t|0,e=(y=(l=(c=o/(2+o))*c)*l)*Ce(y),i=l*Re(y)+e,(f|=a)>0?(r=.5*o*o,0===u?o-(r-c*(r+i)):u*ze-(r-(c*(r+i)+u*Be)-o)):0===u?o-c*(o-i):u*ze-(c*(o-i)-u*Be-o))))},Ke=b,Qe=Je,Xe=function(n){return Ke(n)||n<=0?NaN:1+Qe(n/1.4142135623730951)+.28860783245076643},Ze=3.141592653589793,$e=b,nu=function(n){return $e(n)||n<0?NaN:.2450893006876391},ru=b,tu=function(n){return ru(n)||n<0?NaN:1.2533141373155003*n},eu=b,uu=Lr(1.3862943611198906),iu=function(n){return eu(n)||n<0?NaN:n*uu},ou=b,fu=function(n){return ou(n)||n<0?NaN:n},au=b,cu=Ze,yu=.5019328882303191/Zt(4-cu,1.5),lu=function(n){return au(n)||n<0?NaN:yu},Nu=b,pu=Lr(.8584073464102069),su=function(n){return Nu(n)||n<0?NaN:pu*n/1.4142135623730951},vu=b,mu=function(n){return vu(n)||n<0?NaN:.8584073464102069*n*n/2},bu=b,gu=Rn,hu=at,du=U,wu=j,Au=function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313},_u=.6931471803691238,ju=1.9082149292705877e-10,Uu=1.4426950408889634,Ou=function(n){var r,t,e,u,i,o,f,a,c,y,l,N;if(n===du||bu(n))return n;if(n===wu)return-1;if(0===n)return n;if(n<0?(t=!0,f=-n):(t=!1,f=n),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return du}if(i=0|gu(f),f>.34657359027997264)f<1.0397207708399179?t?(e=n+_u,u=-ju,N=-1):(e=n-_u,u=ju,N=1):(N=t?Uu*n-.5:Uu*n+.5,e=n-(y=N|=0)*_u,u=y*ju),c=e-(n=e-u)-u;else{if(i<1016070144)return n;N=0}return l=(a=n*(r=.5*n))*(((o=1+a*Au(a))-(y=3-o*r))/(6-n*y)),0===N?n-(n*l-a):(l=n*(l-c)-c,l-=a,-1===N?.5*(n-l)-.5:1===N?n<-.25?-2*(l-(n+.5)):1+2*(n-l):N<=-2||N>56?(e=gu(f=1-(l-n))+(N<<20)|0,(f=hu(f,e))-1):(y=1,N<20?f=(y=hu(y,e=1072693248-(2097152>>N)|0))-(l-n):(f=n-(l+(y=hu(y,e=1023-N<<20|0))),f+=1),e=gu(f)+(N<<20)|0,hu(f,e)))},Su=b,Iu=Rn,Eu=at,Tu=U,Fu=j,Pu=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},Hu=.6931471803691238,ku=1.9082149292705877e-10,Gu=function(n){var r,t,e,u,i,o,f,a,c,y;if(n<-1||Su(n))return NaN;if(-1===n)return Fu;if(n===Tu)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,u=n,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Iu(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),i/=c):(y=((t=Iu(c=n))>>20)-1023,i=0),(t&=1048575)<434334?c=Eu(c,1072693248|t):(y+=1,c=Eu(c,1071644672|t),t=1048576-t>>2),u=c-1),r=.5*u*u,0===t?0===u?y*Hu+(i+=y*ku):y*Hu-((a=r*(1-.6666666666666666*u))-(y*ku+i)-u):(a=(f=(o=u/(2+u))*o)*Pu(f),0===y?u-(r-o*(r+a)):y*Hu-(r-(o*(r+a)+(y*ku+i))-u))},Vu=Ou,Mu=b,xu=Gu,Lu=Hr,Wu=Zt,qu=Je,Yu=j,Cu=function(n,r){var t,e;return Mu(n)||Mu(r)||r<0?NaN:0===r?n<0?Yu:0:n<0?Yu:(t=Wu(r,2),(e=-Wu(n,2)/(2*t))<-.6931471805599453?xu(-Lu(e)):qu(-Vu(e)))},Ru=b,zu=j,Bu=ee,Du=b,Ju=j,Ku=function(n,r){return Ru(n)||Ru(r)?NaN:n<r?zu:0};m(Ku,"factory",(function(n){return Du(n)?Bu(NaN):function(r){return Du(r)?NaN:r<n?Ju:0}}));var Qu=ee,Xu=Ku.factory,Zu=Ou,$u=b,ni=Gu,ri=Hr,ti=Zt,ei=Je,ui=j,ii=Cu;m(ii,"factory",(function(n){var r;return $u(n)||n<0?Qu(NaN):0===n?Xu(0):(r=ti(n,2),function(n){var t;return $u(n)?NaN:n<0?ui:(t=-ti(n,2)/(2*r))<-.6931471805599453?ni(-ri(t)):ei(-Zu(t))})}));var oi=ii,fi=b,ai=Zt,ci=Je,yi=U,li=j,Ni=function(n,r){var t;return fi(n)||fi(r)||r<0?NaN:0===r?0===n?yi:li:n<0||n===yi?li:(t=ai(r,2),ci(1/t*n)-ai(n,2)/(2*t))},pi=U,si=j,vi=b,mi=ee,bi=U,gi=j,hi=b,di=function(n,r){return vi(n)||vi(r)?NaN:n===r?pi:si};m(di,"factory",(function(n){return hi(n)?mi(NaN):function(r){return hi(r)?NaN:r===n?bi:gi}}));var wi=ee,Ai=di.factory,_i=b,ji=Zt,Ui=Je,Oi=U,Si=j,Ii=Ni;m(Ii,"factory",(function(n){var r,t;return _i(n)||n<0?wi(NaN):0===n?Ai(0):(t=ji(n,2),r=1/t,function(n){return _i(n)?NaN:n<0||n===Oi?Si:Ui(r*n)-ji(n,2)/(2*t)})}));var Ei=Ii,Ti=b,Fi=Hr,Pi=zr,Hi=U,ki=j,Gi=function(n){return 0===n?-.3250421072470015:n*(n*(-23763016656650163e-21*n-.005770270296489442)-.02848174957559851)-.3250421072470015},Vi=function(n){return 0===n?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+-3960228278775368e-21*n)))},Mi=function(n){return 0===n?.41485611868374833:.41485611868374833+n*(n*(.31834661990116175+n*(n*(.035478304325618236+-.002166375594868791*n)-.11089469428239668))-.3722078760357013)},xi=function(n){return 0===n?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+.011984499846799107*n))))},Li=function(n){return 0===n?-.6938585727071818:n*(n*(n*(n*(n*(-9.814329344169145*n-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Wi=function(n){return 0===n?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+-.0604244152148581*n))))))},qi=function(n){return 0===n?-.799283237680523:n*(n*(n*(n*(-483.5191916086514*n-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Yi=function(n){return 0===n?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+-22.44095244658582*n)))))},Ci=.8450629115104675,Ri=function(n){var r,t,e,u,i,o,f;return Ti(n)?NaN:n===Hi?1:n===ki?-1:0===n?n:(n<0?(r=!0,t=-n):(r=!1,t=n),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*n+1.0270333367641007*n):n+.1283791670955126*n:n+n*((u=.12837916709551256+(e=n*n)*Gi(e))/(i=1+e*Vi(e))):t<1.25?(o=(i=t-1)*Mi(i)-.0023621185607526594,f=1+i*xi(i),r?-Ci-o/f:Ci+o/f):t>=6?r?-1:1:(i=1/(t*t),t<2.857142857142857?(u=i*Li(i)-.009864944034847148,i=1+i*Wi(i)):(u=i*qi(i)-.0098649429247001,i=1+i*Yi(i)),e=Pi(t,0),u=Fi(-e*e-.5625)*Fi((e-t)*(e+t)+u/i),r?u/t-1:1-u/t))},zi=b,Bi=Hr,Di=Ri,Ji=ee,Ki=b,Qi=Hr,Xi=Ri,Zi=function(n,r){var t,e;return zi(n)||zi(r)||r<0?NaN:(e=1+(t=n*r)*Bi(t*t/2),e*=1.2533141373155003*(Di(t/1.4142135623730951)+1))};m(Zi,"factory",(function(n){return Ki(n)||n<0?Ji(NaN):function(r){var t,e;return Ki(r)?NaN:(e=1+(t=r*n)*Qi(t*t/2),e*=1.2533141373155003*(Xi(t/1.4142135623730951)+1))}}));var $i=Zi,no=b,ro=Hr,to=Zt,eo=U,uo=function(n,r){var t;return no(n)||no(r)||r<0?NaN:0===r?0===n?eo:0:n<0||n===eo?0:1/(t=to(r,2))*n*ro(-to(n,2)/(2*t))},io=U,oo=b,fo=ee,ao=U,co=b,yo=function(n,r){return oo(n)||oo(r)?NaN:n===r?io:0};m(yo,"factory",(function(n){return co(n)?fo(NaN):function(r){return co(r)?NaN:r===n?ao:0}}));var lo=ee,No=yo.factory,po=b,so=Hr,vo=Zt,mo=U,bo=uo;m(bo,"factory",(function(n){var r,t;return po(n)||n<0?lo(NaN):0===n?No(0):(t=vo(n,2),r=1/t,function(n){return po(n)?NaN:n<0||n===mo?0:r*n*so(-vo(n,2)/(2*t))})}));var go=bo,ho=b,wo=Gu,Ao=Lr,_o=function(n,r){return ho(r)||r<0||ho(n)||n<0||n>1?NaN:0===r?0:Ao(r*r*-2*wo(-n))},jo=b,Uo=ee,Oo=b,So=function(n,r){return jo(n)||n<0||n>1?NaN:r};m(So,"factory",(function(n){return Oo(n)?Uo(NaN):function(r){return Oo(r)||r<0||r>1?NaN:n}}));var Io=ee,Eo=So.factory,To=b,Fo=Gu,Po=Lr,Ho=_o;m(Ho,"factory",(function(n){var r;return To(n)||n<0?Io(NaN):0===n?Eo(0):(r=n*n,function(n){return To(n)||n<0||n>1?NaN:Po(-2*r*Fo(-n))})}));var ko=Ho,Go=N,Vo=m,Mo=me,xo=xe.isPrimitive,Lo=Xe,Wo=nu,qo=tu,Yo=iu,Co=fu,Ro=lu,zo=su,Bo=mu,Do=se,Jo=oi,Ko=Ei,Qo=$i,Xo=go,Zo=ko;function $o(){var n;if(!(this instanceof $o))return 0===arguments.length?new $o:new $o(arguments[0]);if(arguments.length){if(!xo(n=arguments[0]))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+n+"`")}else n=1;return Go(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!xo(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");n=r}}),this}Mo($o.prototype,"entropy",(function(){return Lo(this.sigma)})),Mo($o.prototype,"kurtosis",(function(){return Wo(this.sigma)})),Mo($o.prototype,"mean",(function(){return qo(this.sigma)})),Mo($o.prototype,"median",(function(){return Yo(this.sigma)})),Mo($o.prototype,"mode",(function(){return Co(this.sigma)})),Mo($o.prototype,"skewness",(function(){return Ro(this.k,this.sigma)})),Mo($o.prototype,"stdev",(function(){return zo(this.sigma)})),Mo($o.prototype,"variance",(function(){return Bo(this.sigma)})),Vo($o.prototype,"cdf",(function(n){return Do(n,this.sigma)})),Vo($o.prototype,"logcdf",(function(n){return Jo(n,this.sigma)})),Vo($o.prototype,"logpdf",(function(n){return Ko(n,this.sigma)})),Vo($o.prototype,"mgf",(function(n){return Qo(n,this.sigma)})),Vo($o.prototype,"pdf",(function(n){return Xo(n,this.sigma)})),Vo($o.prototype,"quantile",(function(n){return Zo(n,this.sigma)}));var nf=$o,rf={};return s(rf,"cdf",se),s(rf,"Rayleigh",nf),s(rf,"entropy",Xe),s(rf,"kurtosis",nu),s(rf,"logcdf",oi),s(rf,"logpdf",Ei),s(rf,"mean",tu),s(rf,"median",iu),s(rf,"mgf",$i),s(rf,"mode",fu),s(rf,"pdf",go),s(rf,"quantile",ko),s(rf,"skewness",lu),s(rf,"variance",mu),rf},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).rayleigh=r();
//# sourceMappingURL=index.js.map
