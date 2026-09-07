"use strict";const Ie=require("vue");const el="185",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Od=0,zc=1,Bd=2,zp=3,kp=0,Cr=1,zd=2,Ws=3,Qn=0,pn=1,Hn=2,jn=0,os=1,kc=2,Vc=3,Gc=4,kd=5,Vp=6,Ri=100,Vd=101,Gd=102,Hd=103,Wd=104,Xd=200,qd=201,Yd=202,Zd=203,lo=204,co=205,Jd=206,Kd=207,$d=208,jd=209,Qd=210,tf=211,ef=212,nf=213,sf=214,ho=0,uo=1,fo=2,cs=3,po=4,mo=5,go=6,_o=7,Qr=0,rf=1,af=2,Xn=0,ih=1,sh=2,rh=3,ah=4,oh=5,lh=6,ch=7,Hc="attached",of="detached",nl=300,ti=301,Ui=302,qs=303,Rr=304,or=306,js=1e3,dn=1001,Qs=1002,Oe=1003,il=1004,Gp=1004,ns=1005,Hp=1005,Ce=1006,Ys=1007,Wp=1007,Wn=1008,Xp=1008,yn=1009,hh=1010,uh=1011,tr=1012,sl=1013,Dn=1014,fn=1015,ei=1016,rl=1017,al=1018,er=1020,dh=35902,fh=35899,ph=1021,mh=1022,an=1023,ni=1026,Pi=1027,ol=1028,ta=1029,Fi=1030,ll=1031,qp=1032,cl=1033,Zs=33776,Pr=33777,Js=33778,Ks=33779,xo=35840,vo=35841,yo=35842,Mo=35843,Fr=36196,So=37492,bo=37496,To=37488,Eo=37489,Or=37490,Ao=37491,wo=37808,Co=37809,Ro=37810,Po=37811,Io=37812,Lo=37813,Do=37814,No=37815,Uo=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Vo=36492,Br=36494,zr=36495,Go=36283,Ho=36284,kr=36285,Wo=36286,lf=2200,cf=2201,hf=2202,nr=2300,Vr=2301,so=2302,Xo=2303,is=2400,ss=2401,Gr=2402,hl=2500,gh=2501,uf=0,df=1,ff=2,pf=3200,Yp=3201,Zp=3202,Jp=3203,gi=0,mf=1,fi="",rn="srgb",hs="srgb-linear",Hr="linear",_e="srgb",Kp="",$p="rg",jp="ga",Qp=0,Qi=7680,tm=7681,em=7682,nm=7683,im=34055,sm=34056,rm=5386,am=512,om=513,lm=514,cm=515,hm=516,um=517,dm=518,Wc=519,gf=512,_f=513,xf=514,ul=515,vf=516,yf=517,dl=518,Mf=519,Wr=35044,fm=35048,pm=35040,mm=35045,gm=35049,_m=35041,xm=35046,vm=35050,ym=35042,Mm="100",Xc="300 es",Tn=2e3,us=2001,Sm={COMPUTE:"compute",RENDER:"render"},bm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Tm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Em={TEXTURE_COMPARE:"depthTextureCompare"};function Am(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const wm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xs(s,t){return new wm[s](t)}function Sf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){const s=Xr("canvas");return s.style.display="block",s}const eu={};let Oi=null;function Cm(s){Oi=s}function Rm(){return Oi}function qr(...s){const t="THREE."+s.shift();Oi?Oi("log",t,...s):console.log(t,...s)}function Tf(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=Tf(s);const t="THREE."+s.shift();if(Oi)Oi("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ft(...s){s=Tf(s);const t="THREE."+s.shift();if(Oi)Oi("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ni(...s){const t=s.join(" ");t in eu||(eu[t]=!0,mt(...s))}function Pm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Im={[ho]:uo,[fo]:go,[po]:_o,[cs]:mo,[uo]:ho,[go]:fo,[_o]:po,[mo]:cs};class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nu=1234567;const ls=Math.PI/180,ir=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function _h(s,t){return(s%t+t)%t}function Lm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dm(s,t,e){return s!==t?(e-s)/(t-s):0}function Ir(s,t,e){return(1-e)*s+e*t}function Nm(s,t,e,n){return Ir(s,t,1-Math.exp(-e*n))}function Um(s,t=1){return t-Math.abs(_h(s,t*2)-t)}function Fm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Om(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Bm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zm(s,t){return s+Math.random()*(t-s)}function km(s){return s*(.5-Math.random())}function Vm(s){s!==void 0&&(nu=s);let t=nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(s){return s*ls}function Hm(s){return s*ir}function Wm(s){return(s&s-1)===0&&s!==0}function Xm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ym(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xh={DEG2RAD:ls,RAD2DEG:ir,generateUUID:En,clamp:Jt,euclideanModulo:_h,mapLinear:Lm,inverseLerp:Dm,lerp:Ir,damp:Nm,pingpong:Um,smoothstep:Fm,smootherstep:Om,randInt:Bm,randFloat:zm,randFloatSpread:km,seededRandom:Vm,degToRad:Gm,radToDeg:Hm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Ym,normalize:se,denormalize:hn},Jh=class Jh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jh.prototype.isVector2=!0;let tt=Jh;class Ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,o=Math.sin(o*M)/S,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kh=class Kh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;let C=Kh;const Zl=new C,iu=new Ze,$h=class $h{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],S=i[4],x=i[7],A=i[2],T=i[5],R=i[8];return r[0]=a*_+o*M+l*A,r[3]=a*m+o*S+l*T,r[6]=a*g+o*x+l*R,r[1]=c*_+h*M+d*A,r[4]=c*m+h*S+d*T,r[7]=c*g+h*x+d*R,r[2]=u*_+f*M+p*A,r[5]=u*m+f*S+p*T,r[8]=u*g+f*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let Qt=$h;const Jl=new Qt,su=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zm(){const s={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Hr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[hs]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}const le=Zm();function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Ef{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=Xr("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jm=0;class Ii{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Kl(i[a].image)):r.push(Kl(i[a]))}else r=Kl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let Km=0;const $l=new C;class Pe extends qn{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=dn,i=dn,r=Ce,a=Wn,o=an,l=yn,c=Pe.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=En(),this.name="",this.source=new Ii(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){mt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){mt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=nl;Pe.DEFAULT_ANISOTROPY=1;const jh=class jh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,A=(g+1)/2,T=(h+u)/4,R=(d+_)/4,v=(p+m)/4;return S>x&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=R/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=v/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jh.prototype.isVector4=!0;let xe=jh;class vh extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Pe(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ii(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fl extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends An{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new fl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class pl extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jm extends An{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new pl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const tl=class tl{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,p=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,p=o*h,_=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,tg)}lookAt(t,e,n){const i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Si.crossVectors(n,Sn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Si.crossVectors(n,Sn)),Si.normalize(),da.crossVectors(Sn,Si),i[0]=Si.x,i[4]=da.x,i[8]=Sn.x,i[1]=Si.y,i[5]=da.y,i[9]=Sn.y,i[2]=Si.z,i[6]=da.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],S=n[7],x=n[11],A=n[15],T=i[0],R=i[4],v=i[8],E=i[12],P=i[1],I=i[5],N=i[9],W=i[13],Y=i[2],B=i[6],q=i[10],z=i[14],j=i[3],at=i[7],ut=i[11],ht=i[15];return r[0]=a*T+o*P+l*Y+c*j,r[4]=a*R+o*I+l*B+c*at,r[8]=a*v+o*N+l*q+c*ut,r[12]=a*E+o*W+l*z+c*ht,r[1]=h*T+d*P+u*Y+f*j,r[5]=h*R+d*I+u*B+f*at,r[9]=h*v+d*N+u*q+f*ut,r[13]=h*E+d*W+u*z+f*ht,r[2]=p*T+_*P+m*Y+g*j,r[6]=p*R+_*I+m*B+g*at,r[10]=p*v+_*N+m*q+g*ut,r[14]=p*E+_*W+m*z+g*ht,r[3]=M*T+S*P+x*Y+A*j,r[7]=M*R+S*I+x*B+A*at,r[11]=M*v+S*N+x*q+A*ut,r[15]=M*E+S*W+x*z+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],M=l*f-c*u,S=o*f-c*d,x=o*u-l*d,A=a*f-c*h,T=a*u-l*h,R=a*d-o*h;return e*(_*M-m*S+g*x)-n*(p*M-m*A+g*T)+i*(p*S-_*A+g*R)-r*(p*x-_*T+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],M=e*o-n*a,S=e*l-i*a,x=e*c-r*a,A=n*l-i*o,T=n*c-r*o,R=i*c-r*l,v=h*_-d*p,E=h*m-u*p,P=h*g-f*p,I=d*m-u*_,N=d*g-f*_,W=u*g-f*m,Y=M*W-S*N+x*I+A*P-T*E+R*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Y;return t[0]=(o*W-l*N+c*I)*B,t[1]=(i*N-n*W-r*I)*B,t[2]=(_*R-m*T+g*A)*B,t[3]=(u*T-d*R-f*A)*B,t[4]=(l*P-a*W-c*E)*B,t[5]=(e*W-i*P+r*E)*B,t[6]=(m*x-p*R-g*S)*B,t[7]=(h*R-u*x+f*S)*B,t[8]=(a*N-o*P+c*v)*B,t[9]=(n*P-e*N-r*v)*B,t[10]=(p*T-_*x+g*M)*B,t[11]=(d*x-h*T-f*M)*B,t[12]=(o*E-a*I-l*v)*B,t[13]=(e*I-n*E+i*v)*B,t[14]=(_*S-p*A-m*M)*B,t[15]=(h*A-d*S+u*M)*B,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,_=a*h,m=a*d,g=o*d,M=l*c,S=l*h,x=l*d,A=n.x,T=n.y,R=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+x)*A,i[2]=(p-S)*A,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+g))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(p+S)*R,i[9]=(m-M)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ts.set(i[0],i[1],i[2]).length();const o=Ts.set(i[4],i[5],i[6]).length(),l=Ts.set(i[8],i[9],i[10]).length();r<0&&(a=-a),zn.copy(this);const c=1/a,h=1/o,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Tn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===us)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Tn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===us)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};tl.prototype.isMatrix4=!0;let Kt=tl;const Ts=new C,zn=new Kt,Qm=new C(0,0,0),tg=new C(1,1,1),Si=new C,da=new C,Sn=new C,au=new Kt,ou=new Ze;class Nn{constructor(t=0,e=0,n=0,i=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const lu=new C,Es=new Ze,ai=new Kt,fa=new C,ur=new C,ng=new C,ig=new Ze,cu=new C(1,0,0),hu=new C(0,1,0),uu=new C(0,0,1),du={type:"added"},sg={type:"removed"},As={type:"childadded",child:null},jl={type:"childremoved",child:null};class de extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new C,e=new Nn,n=new Ze,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ur,fa,this.up):ai.lookAt(fa,ur,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(ai),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),As.child=t,this.dispatchEvent(As),As.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new C(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Ql(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=_h(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ql(a,r,t+1/3),this.g=Ql(a,r,t),this.b=Ql(a,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&mt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:mt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);mt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):mt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return le.workingToColorSpace(nn.copy(this),t),Math.round(Jt(nn.r*255,0,255))*65536+Math.round(Jt(nn.g*255,0,255))*256+Math.round(Jt(nn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=rn){le.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(pa);const n=Ir(bi.h,pa.h,e),i=Ir(bi.s,pa.s,e),r=Ir(bi.l,pa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ct;Ct.NAMES=Af;class gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _l{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xl extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kn=new C,oi=new C,tc=new C,li=new C,ws=new C,Cs=new C,fu=new C,ec=new C,nc=new C,ic=new C,sc=new xe,rc=new xe,ac=new xe;class un{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){kn.subVectors(i,e),oi.subVectors(n,e),tc.subVectors(t,e);const a=kn.dot(kn),o=kn.dot(oi),l=kn.dot(tc),c=oi.dot(oi),h=oi.dot(tc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(sc,r.x),a.addScaledVector(rc,r.y),a.addScaledVector(ac,r.z),a}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),oi.subVectors(t,e),kn.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ws.subVectors(i,n),Cs.subVectors(r,n),ec.subVectors(t,n);const l=ws.dot(ec),c=Cs.dot(ec);if(l<=0&&c<=0)return e.copy(n);nc.subVectors(t,i);const h=ws.dot(nc),d=Cs.dot(nc);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ws,a);ic.subVectors(t,r);const f=ws.dot(ic),p=Cs.dot(ic);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Cs,o);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return fu.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(fu,o);const g=1/(m+_+u);return a=_*g,o=u*g,e.copy(n).addScaledVector(ws,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Je{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),ga.subVectors(this.max,dr),Rs.subVectors(t.a,dr),Ps.subVectors(t.b,dr),Is.subVectors(t.c,dr),Ti.subVectors(Ps,Rs),Ei.subVectors(Is,Ps),Vi.subVectors(Rs,Is);let e=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!oc(e,Rs,Ps,Is,ga)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,Rs,Ps,Is,ga))?!1:(_a.crossVectors(Ti,Ei),e=[_a.x,_a.y,_a.z],oc(e,Rs,Ps,Is,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,ma=new Je,Rs=new C,Ps=new C,Is=new C,Ti=new C,Ei=new C,Vi=new C,dr=new C,ga=new C,_a=new C,Gi=new C;function oc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);const o=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pi=ag();function ag(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function vn(s){Math.abs(s)>65504&&mt("DataUtils.toHalfFloat(): Value out of range."),s=Jt(s,-65504,65504),pi.floatView[0]=s;const t=pi.uint32View[0],e=t>>23&511;return pi.baseTable[e]+((t&8388607)>>pi.shiftTable[e])}function Er(s){const t=s>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[t]+(s&1023)]+pi.exponentTable[t],pi.floatView[0]}class og{static toHalfFloat(t){return vn(t)}static fromHalfFloat(t){return Er(t)}}const Ve=new C,xa=new tt;let lg=0;class Me extends qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wr,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wr&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class wf extends Me{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Cf extends Me{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class cg extends Me{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Rf extends Me{constructor(t,e,n){super(new Int16Array(t),e,n)}}class vl extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pf extends Me{constructor(t,e,n){super(new Int32Array(t),e,n)}}class yl extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hg extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Er(this.array[t*this.itemSize]);return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=vn(e),this}getY(t){let e=Er(this.array[t*this.itemSize+1]);return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=vn(e),this}getZ(t){let e=Er(this.array[t*this.itemSize+2]);return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=vn(e),this}getW(t){let e=Er(this.array[t*this.itemSize+3]);return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=vn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this.array[t+3]=vn(r),this}}class Pt extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ug=new Je,fr=new C,lc=new C;class Ke{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ug.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(lc)),this.expandByPoint(fr.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dg=0;const Pn=new Kt,cc=new de,Ls=new C,bn=new Je,pr=new Je,Ye=new C;class te extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Am(t)?yl:vl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(bn.min,pr.min),bn.expandByPoint(Ye),Ye.addVectors(bn.max,pr.max),bn.expandByPoint(Ye)):(bn.expandByPoint(pr.min),bn.expandByPoint(pr.max))}bn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),Ye.add(Ls)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new C,l[v]=new C;const c=new C,h=new C,d=new C,u=new tt,f=new tt,p=new tt,_=new C,m=new C;function g(v,E,P){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[v].add(_),o[E].add(_),o[P].add(_),l[v].add(m),l[E].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,E=M.length;v<E;++v){const P=M[v],I=P.start,N=P.count;for(let W=I,Y=I+N;W<Y;W+=3)g(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const S=new C,x=new C,A=new C,T=new C;function R(v){A.fromBufferAttribute(i,v),T.copy(A);const E=o[v];S.copy(E),S.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(T,E);const I=x.dot(l[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,E=M.length;v<E;++v){const P=M[v],I=P.start,N=P.count;for(let W=I,Y=I+N;W<Y;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Me(u,h,d)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wr,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new C;class Bi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fg=0;class $e extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=En(),this.name="",this.type="Material",this.blending=os,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){mt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){mt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ml extends $e{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const mr=new C,Ns=new C,Us=new C,Fs=new tt,gr=new tt,If=new Kt,va=new C,_r=new C,ya=new C,pu=new tt,hc=new tt,mu=new tt;class Lr extends de{constructor(t=new Ml){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Bi(n,3,0,!1)),Ds.setAttribute("uv",new Bi(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new tt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ma(va.set(-.5,-.5,0),Us,a,Ns,i,r),Ma(_r.set(.5,-.5,0),Us,a,Ns,i,r),Ma(ya.set(.5,.5,0),Us,a,Ns,i,r),pu.set(0,0),hc.set(1,0),mu.set(1,1);let o=t.ray.intersectTriangle(va,_r,ya,!1,mr);if(o===null&&(Ma(_r.set(-.5,.5,0),Us,a,Ns,i,r),hc.set(0,1),o=t.ray.intersectTriangle(va,ya,_r,!1,mr),o===null))return;const l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:un.getInterpolation(mr,va,_r,ya,pu,hc,mu,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ma(s,t,e,n,i,r){Fs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(gr.x=r*Fs.x-i*Fs.y,gr.y=i*Fs.x+r*Fs.y):gr.copy(Fs),s.copy(t),s.x+=gr.x,s.y+=gr.y,s.applyMatrix4(If)}const Sa=new C,gu=new C;class Lf extends de{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Sa.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Sa);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Sa.setFromMatrixPosition(t.matrixWorld),gu.setFromMatrixPosition(this.matrixWorld);const n=Sa.distanceTo(gu)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const hi=new C,uc=new C,ba=new C,Ai=new C,dc=new C,Ta=new C,fc=new C;class gs{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){uc.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(uc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ba),o=Ai.dot(this.direction),l=-Ai.dot(ba),c=Ai.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uc).addScaledVector(ba,u),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,i,r){dc.subVectors(e,t),Ta.subVectors(n,t),fc.crossVectors(dc,Ta);let a=this.direction.dot(fc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,t);const l=o*this.direction.dot(Ta.crossVectors(Ai,Ta));if(l<0)return null;const c=o*this.direction.dot(dc.cross(Ai));if(c<0||l+c>a)return null;const h=-o*Ai.dot(fc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class si extends $e{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _u=new Kt,Hi=new gs,Ea=new Ke,xu=new C,Aa=new C,wa=new C,Ca=new C,pc=new C,Ra=new C,vu=new C,Pa=new C;class De extends de{constructor(t=new te,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(pc.fromBufferAttribute(d,t),a?Ra.addScaledVector(pc,h):Ra.addScaledVector(pc.sub(e),h))}e.add(Ra)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Ea.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ea,xu)===null||Hi.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=S;x<A;x+=3){const T=o.getX(x),R=o.getX(x+1),v=o.getX(x+2);i=Ia(this,g,t,n,c,h,d,T,R,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=Ia(this,a,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=S;x<A;x+=3){const T=x,R=x+1,v=x+2;i=Ia(this,g,t,n,c,h,d,T,R,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=m,S=m+1,x=m+2;i=Ia(this,a,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function pg(s,t,e,n,i,r,a,o){let l;if(t.side===pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Qn,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Aa),s.getVertexPosition(l,wa),s.getVertexPosition(c,Ca);const h=pg(s,t,e,n,Aa,wa,Ca,vu);if(h){const d=new C;un.getBarycoord(vu,Aa,wa,Ca,d),i&&(h.uv=un.getInterpolatedAttribute(i,o,l,c,d,new tt)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,l,c,d,new tt)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};un.getNormal(Aa,wa,Ca,u.normal),h.face=u,h.barycoord=d}return h}const xr=new xe,yu=new xe,Mu=new xe,mg=new xe,Su=new Kt,La=new C,mc=new Ke,bu=new Kt,gc=new gs;class yh extends De{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hc,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Je),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ke),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),t.ray.intersectsSphere(mc)!==!1&&(bu.copy(i).invert(),gc.copy(t.ray).applyMatrix4(bu),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():mt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;yu.fromBufferAttribute(i.attributes.skinIndex,t),Mu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(xr.copy(e),e.set(0,0,0,0)):(xr.set(...e,1),e.set(0,0,0)),xr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Mu.getComponent(r);if(a!==0){const o=yu.getComponent(r);Su.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(mg.copy(xr).applyMatrix4(Su),a)}}return e.isVector4&&(e.w=xr.w),e.applyMatrix4(this.bindMatrixInverse)}}class Sl extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ln extends Pe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Oe,h=Oe,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Kt,gg=new Kt;class na{constructor(t=[],e=[]){this.uuid=En(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){mt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:gg;Tu.multiplyMatrices(o,e[r]),Tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ln(e,t,t,an,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(mt("Skeleton: No bone found with UUID:",r),a=new Sl),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class ds extends Me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new Kt,Eu=new Kt,Da=[],Au=new Je,_g=new Kt,vr=new De,yr=new Ke;class Mh extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_g)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Au.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(Au)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ke),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),yr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Os),Eu.multiplyMatrices(n,Os),vr.matrixWorld=Eu,vr.raycast(t,Da);for(let a=0,o=Da.length;a<o;a++){const l=Da[a];l.instanceId=r,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ln(new Float32Array(i*this.count),i,this.count,ol,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _c=new C,xg=new C,vg=new Qt;class di{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_c.subVectors(n,e).cross(xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vg.getNormalMatrix(t),i=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Ke,yg=new tt(.5,.5),Na=new C;class fs{constructor(t=new di,e=new di,n=new di,i=new di,r=new di,a=new di){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],S=r[13],x=r[14],A=r[15];if(i[0].setComponents(c-a,f-h,g-p,A-M).normalize(),i[1].setComponents(c+a,f+h,g+p,A+M).normalize(),i[2].setComponents(c+o,f+d,g+_,A+S).normalize(),i[3].setComponents(c-o,f-d,g-_,A-S).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,f-u,g-m,A-x).normalize();else if(i[4].setComponents(c-l,f-u,g-m,A-x).normalize(),e===Tn)i[5].setComponents(c+l,f+u,g+m,A+x).normalize();else if(e===us)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);const e=yg.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Na.x=i.normal.x>0?t.max.x:t.min.x,Na.y=i.normal.y>0?t.max.y:t.min.y,Na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const wu=new Kt;class bl{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];wu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new fs),n[i].setFromProjectionMatrix(wu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new fs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new bl().copy(this)}}function xc(s,t){return s-t}function Mg(s,t){return s.z-t.z}function Sg(s,t){return t.z-s.z}class bg{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const _n=new Kt,Tg=new Ct(1,1,1),Eg=new fs,Ag=new bl,Ua=new Je,Xi=new Ke,Mr=new C,Cu=new C,wg=new C,vc=new bg,sn=new De,Fa=[];function Cg(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function qi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Df extends De{constructor(t,e,n=e*2,i){super(new te,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Ln(e,t,t,an,fn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Ln(e,t,t,ta,Dn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Ln(e,t,t,an,fn);n.colorSpace=le.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new Me(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Me(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingBoxAt(r,Ua).applyMatrix4(_n),t.union(Ua)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,_n),this.getBoundingSphereAt(r,Xi).applyMatrix4(_n),t.union(Xi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(xc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;_n.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Tg.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(xc),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);Cg(d,u,l);const f=d.itemSize;for(let p=d.count,_=c;p<_;p++){const m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,_=t-d;for(let m=h;m<h+u;m++)p[m]=p[m]+_;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:_,itemSize:m}=p;_.copyWithin(t*m,h*m,(h+d)*m),p.addUpdateRange(t*m,d*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new Je,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Mr.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Ke;this.getBoundingBoxAt(t,Ua),Ua.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Mr.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(Mr))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(xc);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);qi(this._multiDrawCounts,i),qi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),qi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),qi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),qi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new te,this._initializeGeometry(r));const a=this.geometry;r.index&&qi(r.index.array,a.index.array);for(const o in r.attributes)qi(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;sn.material=this.material,sn.geometry.index=a.index,sn.geometry.attributes=a.attributes,sn.geometry.boundingBox===null&&(sn.geometry.boundingBox=new Je),sn.geometry.boundingSphere===null&&(sn.geometry.boundingSphere=new Ke);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];sn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,sn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,sn.geometry.boundingBox),this.getBoundingSphereAt(c,sn.geometry.boundingSphere),sn.raycast(t,Fa);for(let d=0,u=Fa.length;d<u;d++){const f=Fa[d];f.object=this,f.batchId=o,e.push(f)}Fa.length=0}sn.material=null,sn.geometry.index=null,sn.geometry.attributes={},sn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?Ag:Eg;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(_n.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(_n,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){_n.copy(this.matrixWorld).invert(),Mr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(_n),Cu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(_n);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){const T=c[x].geometryIndex;this.getMatrixAt(x,_n),this.getBoundingSphereAt(T,Xi).applyMatrix4(_n);let R=!1;if(f&&(R=!m.intersectsSphere(Xi)),!R){const v=u[T],E=wg.subVectors(Xi.center,Mr).dot(Cu);vc.push(v.start,v.count,E,x)}}const M=vc.list,S=this.customSort;S===null?M.sort(r.transparent?Sg:Mg):S.call(this,M,n);for(let x=0,A=M.length;x<A;x++){const T=M[x];h[g]=T.start*o*l,d[g]=T.count*l,_[g]=T.index,g++}vc.reset()}else for(let M=0,S=c.length;M<S;M++)if(c[M].visible&&c[M].active){const x=c[M].geometryIndex;let A=!1;if(f&&(this.getMatrixAt(M,_n),this.getBoundingSphereAt(x,Xi).applyMatrix4(_n),A=!m.intersectsSphere(Xi)),!A){const T=u[x];h[g]=T.start*o*l,d[g]=T.count*l,_[g]=M,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class on extends $e{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qo=new C,Yo=new C,Ru=new Kt,Sr=new gs,Oa=new Ke,yc=new C,Pu=new C;class _i extends de{constructor(t=new te,e=new on){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)qo.fromBufferAttribute(e,i-1),Yo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new Pt(n,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Ru.copy(i).invert(),Sr.copy(t.ray).applyMatrix4(Ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),M=h.getX(_+1),S=Ba(this,t,Sr,l,g,M,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=Ba(this,t,Sr,l,_,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=Ba(this,t,Sr,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=Ba(this,t,Sr,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ba(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(qo.fromBufferAttribute(o,i),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Yo,yc,Pu)>n)return;yc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yc);if(!(c<t.near||c>t.far))return{distance:c,point:Pu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Iu=new C,Lu=new C;class Yn extends _i{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Iu.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Iu.distanceTo(Lu);t.setAttribute("lineDistance",new Pt(n,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sh extends _i{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Tl extends $e{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Du=new Kt,qc=new gs,za=new Ke,ka=new C;class bh extends de{constructor(t=new te,e=new Tl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=r,t.ray.intersectsSphere(za)===!1)return;Du.copy(i).invert(),qc.copy(t.ray).applyMatrix4(Du);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,_=f;p<_;p++){const m=c.getX(p);ka.fromBufferAttribute(d,m),Nu(ka,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,_=f;p<_;p++)ka.fromBufferAttribute(d,p),Nu(ka,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nu(s,t,e,n,i,r,a){const o=qc.distanceSqToPoint(s);if(o<e){const l=new C;qc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Nf extends Pe{constructor(t,e,n,i,r=Ce,a=Ce,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Rg extends Nf{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class Pg extends Pe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Oe,this.minFilter=Oe,this.generateMipmaps=!1,this.needsUpdate=!0}}class El extends Pe{constructor(t,e,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ig extends El{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=dn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends El{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ti),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class ia extends Pe{constructor(t=[],e=ti,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends Pe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ng extends Pe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class ps extends Pe{constructor(t,e,n=Dn,i,r,a,o=Oe,l=Oe,c,h=ni,d=1){if(h!==ni&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ii(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uf extends ps{constructor(t,e=Dn,n=ti,i,r,a=Oe,o=Oe,l,c=ni){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _s extends te{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2));function p(_,m,g,M,S,x,A,T,R,v,E){const P=x/R,I=A/v,N=x/2,W=A/2,Y=T/2,B=R+1,q=v+1;let z=0,j=0;const at=new C;for(let ut=0;ut<q;ut++){const ht=ut*I-W;for(let At=0;At<B;At++){const qt=At*P-N;at[_]=qt*M,at[m]=ht*S,at[g]=Y,c.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[g]=T>0?1:-1,h.push(at.x,at.y,at.z),d.push(At/R),d.push(1-ut/v),z+=1}}for(let ut=0;ut<v;ut++)for(let ht=0;ht<R;ht++){const At=u+ht+B*ut,qt=u+ht+B*(ut+1),jt=u+(ht+1)+B*(ut+1),ce=u+(ht+1)+B*ut;l.push(At,qt,ce),l.push(qt,jt,ce),j+=6}o.addGroup(f,j,E),f+=j,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Al extends te{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,_=i+1,m=new C,g=new C;for(let M=0;M<=p;M++){let S=0,x=0,A=0,T=0;if(M<=n){const E=M/n,P=E*Math.PI/2;x=-h-t*Math.cos(P),A=t*Math.sin(P),T=-t*Math.cos(P),S=E*d}else if(M<=n+r){const E=(M-n)/r;x=-h+E*e,A=t,T=0,S=d+E*u}else{const E=(M-n-r)/n,P=E*Math.PI/2;x=h+t*Math.sin(P),A=t*Math.cos(P),T=t*Math.sin(P),S=d+u+E*d}const R=Math.max(0,Math.min(1,S/f));let v=0;M===0?v=.5/i:M===p&&(v=-.5/i);for(let E=0;E<=i;E++){const P=E/i,I=P*Math.PI*2,N=Math.sin(I),W=Math.cos(I);g.x=-A*W,g.y=x,g.z=A*N,o.push(g.x,g.y,g.z),m.set(-A*W,T,A*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,R)}if(M>0){const E=(M-1)*_;for(let P=0;P<i;P++){const I=E+P,N=E+P+1,W=M*_+P,Y=M*_+P+1;a.push(I,N,W),a.push(N,Y,W)}}}this.setIndex(a),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class wl extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sa extends te{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const _=[],m=n/2;let g=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function M(){const x=new C,A=new C;let T=0;const R=(e-t)/n;for(let v=0;v<=r;v++){const E=[],P=v/r,I=P*(e-t)+t;for(let N=0;N<=i;N++){const W=N/i,Y=W*l+o,B=Math.sin(Y),q=Math.cos(Y);A.x=I*B,A.y=-P*n+m,A.z=I*q,d.push(A.x,A.y,A.z),x.set(B,R,q).normalize(),u.push(x.x,x.y,x.z),f.push(W,1-P),E.push(p++)}_.push(E)}for(let v=0;v<i;v++)for(let E=0;E<r;E++){const P=_[E][v],I=_[E+1][v],N=_[E+1][v+1],W=_[E][v+1];(t>0||E!==0)&&(h.push(P,I,W),T+=3),(e>0||E!==r-1)&&(h.push(I,N,W),T+=3)}c.addGroup(g,T,0),g+=T}function S(x){const A=p,T=new tt,R=new C;let v=0;const E=x===!0?t:e,P=x===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),p++;const I=p;for(let N=0;N<=i;N++){const Y=N/i*l+o,B=Math.cos(Y),q=Math.sin(Y);R.x=E*q,R.y=m*P,R.z=E*B,d.push(R.x,R.y,R.z),u.push(0,P,0),T.x=B*.5+.5,T.y=q*.5*P+.5,f.push(T.x,T.y),p++}for(let N=0;N<i;N++){const W=A+N,Y=I+N;x===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),v+=3}c.addGroup(g,v,x===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends sa{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ra(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zi extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new C,x=new C,A=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],x),f(e[T+2],A),l(S,x,A,M)}function l(M,S,x,A){const T=A+1,R=[];for(let v=0;v<=T;v++){R[v]=[];const E=M.clone().lerp(x,v/T),P=S.clone().lerp(x,v/T),I=T-v;for(let N=0;N<=I;N++)N===0&&v===T?R[v][N]=E:R[v][N]=E.clone().lerp(P,N/I)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){const P=Math.floor(E/2);E%2===0?(u(R[v][P+1]),u(R[v+1][P]),u(R[v][P])):(u(R[v][P+1]),u(R[v+1][P+1]),u(R[v+1][P]))}}function c(M){const S=new C;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(M),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const M=new C;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const x=m(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;a.push(x,1-A)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){const S=a[M+0],x=a[M+2],A=a[M+4],T=Math.max(S,x,A),R=Math.min(S,x,A);T>.9&&R<.1&&(S<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,S){const x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function p(){const M=new C,S=new C,x=new C,A=new C,T=new tt,R=new tt,v=new tt;for(let E=0,P=0;E<r.length;E+=9,P+=6){M.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),A.copy(M).add(S).add(x).divideScalar(3);const I=m(A);_(T,P+0,M,I),_(R,P+2,S,I),_(v,P+4,x,I)}}function _(M,S,x,A){A<0&&M.x===1&&(a[S]=M.x-1),x.x===0&&x.z===0&&(a[S]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.vertices,t.indices,t.radius,t.detail)}}class Cl extends zi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cl(t.radius,t.detail)}}const Va=new C,Ga=new C,Mc=new C,Ha=new un;class Ff extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(ls*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=Ha;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ha.getNormal(Mc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const S=(M+1)%3,x=d[M],A=d[S],T=Ha[h[M]],R=Ha[h[S]],v=`${x}_${A}`,E=`${A}_${x}`;E in u&&u[E]?(Mc.dot(u[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),u[E]=null):v in u||(u[v]={index0:c[M],index1:c[S],normal:Mc.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:m}=u[p];Va.fromBufferAttribute(o,_),Ga.fromBufferAttribute(o,m),f.push(Va.x,Va.y,Va.z),f.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new Pt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new tt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new Kt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends Fn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Of extends Rl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Uu=new C,Fu=new C,Sc=new Eh,bc=new Eh,Tc=new Eh;class Bf extends Fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Fu.subVectors(i[0],i[1]).add(i[0]),c=Fu);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Uu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Sc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),bc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),Tc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),bc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Tc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Sc.calc(l),bc.calc(l),Tc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ou(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ug(s,t){const e=1-s;return e*e*t}function Fg(s,t){return 2*(1-s)*s*t}function Og(s,t){return s*s*t}function Dr(s,t,e,n){return Ug(s,t)+Fg(s,e)+Og(s,n)}function Bg(s,t){const e=1-s;return e*e*e*t}function zg(s,t){const e=1-s;return 3*e*e*s*t}function kg(s,t){return 3*(1-s)*s*s*t}function Vg(s,t){return s*s*s*t}function Nr(s,t,e,n,i){return Bg(s,t)+zg(s,e)+kg(s,n)+Vg(s,i)}class Ah extends Fn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zf extends Fn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y),Nr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wh extends Fn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends Fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends Fn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,i.x,r.x,a.x),Dr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends Fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,i.x,r.x,a.x),Dr(t,i.y,r.y,a.y),Dr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ou(o,l.x,c.x,h.x,d.x),Ou(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new tt().fromArray(i))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:Of,CatmullRomCurve3:Bf,CubicBezierCurve:Ah,CubicBezierCurve3:zf,EllipseCurve:Rl,LineCurve:wh,LineCurve3:kf,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Rh,SplineCurve:Ph});class Vf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zo[i.type]().fromJSON(i))}return this}}class Yr extends Vf{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wh(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ch(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Ah(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Rl(t,e,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class aa extends Yr{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Yr().fromJSON(i))}return this}}function Gg(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Gf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Yg(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Zr(r,a,e,o,l,c,0),a}function Gf(s,t,e,n,i){let r;if(i===s_(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bu(a/n|0,s[a],s[a+1],r);return r&&sr(r,r.next)&&(Kr(r),r=r.next),r}function ms(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||Le(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&jg(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Wg(s,n,i,r):Hg(s)){t.push(l.i,s.i,c.i),Kr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Xg(ms(s),t),Zr(s,t,e,n,i,r,2)):a===2&&qg(s,t,e,n,i,r):Zr(ms(s),t,e,n,i,r,1);break}}}function Hg(s){const t=s.prev,e=s,n=s.next;if(Le(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ar(i,o,r,l,a,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Le(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),g=Yc(f,p,t,e,n),M=Yc(_,m,t,e,n);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=g&&x&&x.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&Ar(o,h,l,d,c,u,S.x,S.y)&&Le(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&Ar(o,h,l,d,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&Ar(o,h,l,d,c,u,S.x,S.y)&&Le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&Ar(o,h,l,d,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Xg(s,t){let e=s;do{const n=e.prev,i=e.next.next;!sr(n,i)&&Wf(n,e,e.next,i)&&Jr(n,i)&&Jr(i,n)&&(t.push(n.i,e.i,i.i),Kr(e),Kr(e.next),e=s=i),e=e.next}while(e!==s);return ms(e)}function qg(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&e_(a,o)){let l=Xf(a,o);a=ms(a,a.next),l=ms(l,l.next),Zr(a,t,e,n,i,r,0),Zr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Yg(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Gf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(t_(c))}i.sort(Zg);for(let r=0;r<i.length;r++)e=Jg(i[r],e);return e}function Zg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Jg(s,t){const e=Kg(s,t);if(!e)return t;const n=Xf(e,s);return ms(n,n.next),ms(e,e.next)}function Kg(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(sr(s,e))return e;do{if(sr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Jr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&$g(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function $g(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function jg(s,t,e,n){let i=s;do i.z===0&&(i.z=Yc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qg(i)}function Qg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Yc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function t_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hf(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ar(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Hf(s,t,e,n,i,r,a,o)}function e_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!n_(s,t)&&(Jr(s,t)&&Jr(t,s)&&i_(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||sr(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function sr(s,t){return s.x===t.x&&s.y===t.y}function Wf(s,t,e,n){const i=Xa(Le(s,t,e)),r=Xa(Le(s,t,n)),a=Xa(Le(e,n,s)),o=Xa(Le(e,n,t));return!!(i!==r&&a!==o||i===0&&Wa(s,e,t)||r===0&&Wa(s,n,t)||a===0&&Wa(e,s,n)||o===0&&Wa(e,t,n))}function Wa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xa(s){return s>0?1:s<0?-1:0}function n_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Jr(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function i_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xf(s,t){const e=Zc(s.i,s.x,s.y),n=Zc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(s,t,e,n){const i=Zc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s_(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class r_{static triangulate(t,e,n=2){return Gg(t,e,n)}}class In{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return In.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];zu(t),ku(n,t);let a=t.length;e.forEach(zu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ku(n,e[l]);const o=r_.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ku(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Pl extends te{constructor(t=new aa([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Pt(i,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:a_;let S,x=!1,A,T,R,v;if(g){S=g.getSpacedPoints(h),x=!0,u=!1;const et=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,et),T=new C,R=new C,v=new C}u||(m=0,f=0,p=0,_=0);const E=o.extractPoints(c);let P=E.shape;const I=E.holes;if(!In.isClockWise(P)){P=P.reverse();for(let et=0,st=I.length;et<st;et++){const rt=I[et];In.isClockWise(rt)&&(I[et]=rt.reverse())}}function W(et){const rt=10000000000000001e-36;let Mt=et[0];for(let _t=1;_t<=et.length;_t++){const kt=_t%et.length,Dt=et[kt],Xt=Dt.x-Mt.x,$t=Dt.y-Mt.y,L=Xt*Xt+$t*$t,ge=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(Mt.x),Math.abs(Mt.y)),ne=rt*ge*ge;if(L<=ne){et.splice(kt,1),_t--;continue}Mt=Dt}}W(P),I.forEach(W);const Y=I.length,B=P;for(let et=0;et<Y;et++){const st=I[et];P=P.concat(st)}function q(et,st,rt){return st||Ft("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(st,rt)}const z=P.length;function j(et,st,rt){let Mt,_t,kt;const Dt=et.x-st.x,Xt=et.y-st.y,$t=rt.x-et.x,L=rt.y-et.y,ge=Dt*Dt+Xt*Xt,ne=Dt*L-Xt*$t;if(Math.abs(ne)>Number.EPSILON){const w=Math.sqrt(ge),y=Math.sqrt($t*$t+L*L),O=st.x-Xt/w,k=st.y+Dt/w,Z=rt.x-L/y,ct=rt.y+$t/y,dt=((Z-O)*L-(ct-k)*$t)/(Dt*L-Xt*$t);Mt=O+Dt*dt-et.x,_t=k+Xt*dt-et.y;const J=Mt*Mt+_t*_t;if(J<=2)return new tt(Mt,_t);kt=Math.sqrt(J/2)}else{let w=!1;Dt>Number.EPSILON?$t>Number.EPSILON&&(w=!0):Dt<-Number.EPSILON?$t<-Number.EPSILON&&(w=!0):Math.sign(Xt)===Math.sign(L)&&(w=!0),w?(Mt=-Xt,_t=Dt,kt=Math.sqrt(ge)):(Mt=Dt,_t=Xt,kt=Math.sqrt(ge/2))}return new tt(Mt/kt,_t/kt)}const at=[];for(let et=0,st=B.length,rt=st-1,Mt=et+1;et<st;et++,rt++,Mt++)rt===st&&(rt=0),Mt===st&&(Mt=0),at[et]=j(B[et],B[rt],B[Mt]);const ut=[];let ht,At=at.concat();for(let et=0,st=Y;et<st;et++){const rt=I[et];ht=[];for(let Mt=0,_t=rt.length,kt=_t-1,Dt=Mt+1;Mt<_t;Mt++,kt++,Dt++)kt===_t&&(kt=0),Dt===_t&&(Dt=0),ht[Mt]=j(rt[Mt],rt[kt],rt[Dt]);ut.push(ht),At=At.concat(ht)}let qt;if(m===0)qt=In.triangulateShape(B,I);else{const et=[],st=[];for(let rt=0;rt<m;rt++){const Mt=rt/m,_t=f*Math.cos(Mt*Math.PI/2),kt=p*Math.sin(Mt*Math.PI/2)+_;for(let Dt=0,Xt=B.length;Dt<Xt;Dt++){const $t=q(B[Dt],at[Dt],kt);Bt($t.x,$t.y,-_t),Mt===0&&et.push($t)}for(let Dt=0,Xt=Y;Dt<Xt;Dt++){const $t=I[Dt];ht=ut[Dt];const L=[];for(let ge=0,ne=$t.length;ge<ne;ge++){const w=q($t[ge],ht[ge],kt);Bt(w.x,w.y,-_t),Mt===0&&L.push(w)}Mt===0&&st.push(L)}}qt=In.triangulateShape(et,st)}const jt=qt.length,ce=p+_;for(let et=0;et<z;et++){const st=u?q(P[et],At[et],ce):P[et];x?(R.copy(A.normals[0]).multiplyScalar(st.x),T.copy(A.binormals[0]).multiplyScalar(st.y),v.copy(S[0]).add(R).add(T),Bt(v.x,v.y,v.z)):Bt(st.x,st.y,0)}for(let et=1;et<=h;et++)for(let st=0;st<z;st++){const rt=u?q(P[st],At[st],ce):P[st];x?(R.copy(A.normals[et]).multiplyScalar(rt.x),T.copy(A.binormals[et]).multiplyScalar(rt.y),v.copy(S[et]).add(R).add(T),Bt(v.x,v.y,v.z)):Bt(rt.x,rt.y,d/h*et)}for(let et=m-1;et>=0;et--){const st=et/m,rt=f*Math.cos(st*Math.PI/2),Mt=p*Math.sin(st*Math.PI/2)+_;for(let _t=0,kt=B.length;_t<kt;_t++){const Dt=q(B[_t],at[_t],Mt);Bt(Dt.x,Dt.y,d+rt)}for(let _t=0,kt=I.length;_t<kt;_t++){const Dt=I[_t];ht=ut[_t];for(let Xt=0,$t=Dt.length;Xt<$t;Xt++){const L=q(Dt[Xt],ht[Xt],Mt);x?Bt(L.x,L.y+S[h-1].y,S[h-1].x+rt):Bt(L.x,L.y,d+rt)}}}K(),ft();function K(){const et=i.length/3;if(u){let st=0,rt=z*st;for(let Mt=0;Mt<jt;Mt++){const _t=qt[Mt];Yt(_t[2]+rt,_t[1]+rt,_t[0]+rt)}st=h+m*2,rt=z*st;for(let Mt=0;Mt<jt;Mt++){const _t=qt[Mt];Yt(_t[0]+rt,_t[1]+rt,_t[2]+rt)}}else{for(let st=0;st<jt;st++){const rt=qt[st];Yt(rt[2],rt[1],rt[0])}for(let st=0;st<jt;st++){const rt=qt[st];Yt(rt[0]+z*h,rt[1]+z*h,rt[2]+z*h)}}n.addGroup(et,i.length/3-et,0)}function ft(){const et=i.length/3;let st=0;ot(B,st),st+=B.length;for(let rt=0,Mt=I.length;rt<Mt;rt++){const _t=I[rt];ot(_t,st),st+=_t.length}n.addGroup(et,i.length/3-et,1)}function ot(et,st){let rt=et.length;for(;--rt>=0;){const Mt=rt;let _t=rt-1;_t<0&&(_t=et.length-1);for(let kt=0,Dt=h+m*2;kt<Dt;kt++){const Xt=z*kt,$t=z*(kt+1),L=st+Mt+Xt,ge=st+_t+Xt,ne=st+_t+$t,w=st+Mt+$t;Ht(L,ge,ne,w)}}}function Bt(et,st,rt){l.push(et),l.push(st),l.push(rt)}function Yt(et,st,rt){fe(et),fe(st),fe(rt);const Mt=i.length/3,_t=M.generateTopUV(n,i,Mt-3,Mt-2,Mt-1);Zt(_t[0]),Zt(_t[1]),Zt(_t[2])}function Ht(et,st,rt,Mt){fe(et),fe(st),fe(Mt),fe(st),fe(rt),fe(Mt);const _t=i.length/3,kt=M.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);Zt(kt[0]),Zt(kt[1]),Zt(kt[3]),Zt(kt[1]),Zt(kt[2]),Zt(kt[3])}function fe(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function Zt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return o_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Zo[i.type]().fromJSON(i)),new Pl(n,t.options)}}const a_={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(r,a),new tt(o,l),new tt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-d),new tt(u,1-p),new tt(_,1-g)]:[new tt(o,1-l),new tt(h,1-d),new tt(f,1-p),new tt(m,1-g)]}};function o_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Il extends zi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Il(t.radius,t.detail)}}class Ll extends te{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,u=new tt,f=new C,p=new C,_=new C;let m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){const S=n+M*h*i,x=Math.sin(S),A=Math.cos(S);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*x,d.y=t[T].y,d.z=t[T].x*A,a.push(d.x,d.y,d.z),u.x=M/e,u.y=T/(t.length-1),o.push(u.x,u.y);const R=l[3*T+0]*x,v=l[3*T+1],E=l[3*T+0]*A;c.push(R,v,E)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const x=S+M*t.length,A=x,T=x+t.length,R=x+t.length+1,v=x+1;r.push(A,T,v),r.push(R,v,T)}this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("uv",new Pt(o,2)),this.setAttribute("normal",new Pt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends zi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class lr extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const M=g*u-a;for(let S=0;S<c;S++){const x=S*d-r;p.push(x,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const S=M+c*g,x=M+c*(g+1),A=M+1+c*(g+1),T=M+1+c*g;f.push(S,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dl extends te{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new C,p=new tt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const M=g+m,S=M,x=M+n+1,A=M+n+2,T=M+1;o.push(S,x,T),o.push(x,A,T)}}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nl extends te{constructor(t=new aa([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pt(i,3)),this.setAttribute("normal",new Pt(r,3)),this.setAttribute("uv",new Pt(a,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;In.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];In.isClockWise(M)===!0&&(p[m]=M.reverse())}const _=In.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){const M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,g=_.length;m<g;m++){const M=_[m],S=M[0]+d,x=M[1]+d,A=M[2]+d;n.push(S,x,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return l_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Nl(n,t.curveSegments)}}function l_(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class la extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const M=[],S=g/n,x=a+S*o,A=t*Math.cos(x),T=Math.sqrt(t*t-A*A);let R=0;g===0&&a===0?R=.5/e:g===n&&l===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){const E=v/e,P=i+E*r;d.x=-T*Math.cos(P),d.y=A,d.z=T*Math.sin(P),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+R,1-S),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const S=h[g][M+1],x=h[g][M],A=h[g+1][M],T=h[g+1][M+1];(g!==0||a>0)&&f.push(S,x,T),(g!==n-1||l<Math.PI)&&f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ul extends zi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ul(t.radius,t.detail)}}class Fl extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new C,f=new C,p=new C;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const M=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,x=(i+1)*_+m;l.push(g,M,x),l.push(M,S,x)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ol extends te{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,p=new C,_=new C,m=new C,g=new C;for(let S=0;S<=n;++S){const x=S/n*r*Math.PI*2;M(x,r,a,t,f),M(x+.01,r,a,t,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let A=0;A<=i;++A){const T=A/i*Math.PI*2,R=-e*Math.cos(T),v=e*Math.sin(T);d.x=f.x+(R*g.x+v*_.x),d.y=f.y+(R*g.y+v*_.y),d.z=f.z+(R*g.z+v*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(S/n),h.push(A/i)}}for(let S=1;S<=n;S++)for(let x=1;x<=i;x++){const A=(i+1)*(S-1)+(x-1),T=(i+1)*S+(x-1),R=(i+1)*S+x,v=(i+1)*(S-1)+x;o.push(A,T,v),o.push(T,R,v)}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(h,2));function M(S,x,A,T,R){const v=Math.cos(S),E=Math.sin(S),P=A/x*S,I=Math.cos(P);R.x=T*(2+I)*.5*v,R.y=T*(2+I)*E*.5,R.z=T*Math.sin(P)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Bl extends te{constructor(t=new Rh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new tt;let h=new C;const d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),M(),g()}function m(S){h=t.getPointAt(S/e,h);const x=a.normals[S],A=a.binormals[S];for(let T=0;T<=i;T++){const R=T/i*Math.PI*2,v=Math.sin(R),E=-Math.cos(R);l.x=E*x.x+v*A.x,l.y=E*x.y+v*A.y,l.z=E*x.z+v*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=e;S++)for(let x=1;x<=i;x++){const A=(i+1)*(S-1)+(x-1),T=(i+1)*S+(x-1),R=(i+1)*S+x,v=(i+1)*(S-1)+x;p.push(A,T,v),p.push(T,R,v)}}function M(){for(let S=0;S<=e;S++)for(let x=0;x<=i;x++)c.x=S/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bl(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class qf extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new C,r=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),M=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,M),Vu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Vu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Vu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Gu=Object.freeze({__proto__:null,BoxGeometry:_s,CapsuleGeometry:Al,CircleGeometry:wl,ConeGeometry:ra,CylinderGeometry:sa,DodecahedronGeometry:Cl,EdgesGeometry:Ff,ExtrudeGeometry:Pl,IcosahedronGeometry:Il,LatheGeometry:Ll,OctahedronGeometry:oa,PlaneGeometry:lr,PolyhedronGeometry:zi,RingGeometry:Dl,ShapeGeometry:Nl,SphereGeometry:la,TetrahedronGeometry:Ul,TorusGeometry:Fl,TorusKnotGeometry:Ol,TubeGeometry:Bl,WireframeGeometry:qf});class Yf extends $e{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function rr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Hu(i))i.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Hu(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){const t={};for(let e=0;e<s.length;e++){const n=rr(s[e]);for(const i in n)t[i]=n[i]}return t}function Hu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function c_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Jf={clone:rr,merge:cn};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends $e{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=c_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ih extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ca extends $e{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lh extends ca{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zl extends $e{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kf extends $e{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class $f extends $e{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Dh extends $e{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nh extends $e{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uh extends $e{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jf extends $e{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qf extends on{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function rs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function tp(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Jc(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function ep(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function d_(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=rs(d,c.times.constructor),c.values=rs(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function f_(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const g=h,M=d-h;_=o.values.slice(g,M)}else if(r>=o.times[p]){const g=p*d+h,M=g+d-h;_=o.values.slice(g,M)}else{const g=o.createInterpolant(),M=h,S=d-h;g.evaluate(r),_=g.resultBuffer.slice(M,S)}l==="quaternion"&&new Ze().fromArray(_).normalize().conjugate().toArray(_);const m=c.times.length;for(let g=0;g<m;++g){const M=g*f+u;if(l==="quaternion")Ze.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{const S=f-u*2;for(let x=0;x<S;++x)c.values[M+x]-=_[x]}}}return s.blendMode=gh,s}class p_{static convertArray(t,e){return rs(t,e)}static isTypedArray(t){return Sf(t)}static getKeyframeOrder(t){return tp(t)}static sortedArray(t,e,n){return Jc(t,e,n)}static flattenJSON(t,e,n,i){ep(t,e,n,i)}static subclip(t,e,n,i,r=30){return d_(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return f_(t,e,n,i)}}class xs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class np extends xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ss:r=t,o=2*e-n;break;case Gr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ss:a=t,l=2*n-e;break;case Gr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+M*a[c+A]+S*a[l+A]+x*a[d+A];return r}}class Fh extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class ip extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class sp extends xs{interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}const u=o*2,f=t-1;for(let p=0;p!==o;++p){const _=a[c+p],m=a[l+p],g=f*u+p*2,M=d[g],S=d[g+1],x=t*u+p*2,A=h[x],T=h[x+1];let R=(n-e)/(i-e),v,E,P,I,N;for(let W=0;W<8;W++){v=R*R,E=v*R,P=1-R,I=P*P,N=I*P;const B=N*e+3*I*R*M+3*P*v*A+E*i-n;if(Math.abs(B)<1e-10)break;const q=3*I*(M-e)+6*P*R*(A-M)+3*v*(i-A);if(Math.abs(q)<1e-10)break;R=R-B/q,R=Math.max(0,Math.min(1,R))}r[p]=N*_+3*I*R*S+3*P*v*T+E*m}return r}}class On{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new np(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new sp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case Xo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return mt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ft("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Sf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Vr;class vs extends On{constructor(t,e,n){super(t,e,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=nr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Oh extends On{constructor(t,e,n,i){super(t,e,n,i)}}Oh.prototype.ValueTypeName="color";class ha extends On{constructor(t,e,n,i){super(t,e,n,i)}}ha.prototype.ValueTypeName="number";class rp extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Ze.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ua extends On{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rp(this.times,this.values,this.getValueSize(),t)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends On{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=nr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class kl extends On{constructor(t,e,n,i){super(t,e,n,i)}}kl.prototype.ValueTypeName="vector";class ar{constructor(t="",e=-1,n=[],i=hl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(g_(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=tp(l);l=Jc(l,1,h),c=Jc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ha(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function m_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ha;case"vector":case"vector2":case"vector3":case"vector4":return kl;case"color":return Oh;case"quaternion":return ua;case"bool":case"boolean":return vs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function g_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=m_(s.type);if(s.times===void 0){const e=[],n=[];ep(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const $n={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Wu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Wu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Wu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Vl{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bh=new Vl;class mn{constructor(t){this.manager=t!==void 0?t:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}mn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class __ extends Error{constructor(t,e){super(t),this.response=e}}class ii extends mn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=$n.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ui[t]!==void 0){ui[t].push({onLoad:e,onProgress:n,onError:i});return}ui[t]=[],ui[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&mt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:S,value:x})=>{if(S)g.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){const v=h[T];v.onProgress&&v.onProgress(A)}g.enqueue(x),M()}},S=>{g.error(S)})}}});return new Response(m)}else throw new __(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{$n.add(`file:${t}`,c);const h=ui[t];delete ui[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ui[t];if(h===void 0)throw this.manager.itemError(t),c;delete ui[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class x_ extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ft(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=ar.parse(t[n]);e.push(i)}return e}}class ap extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new El,l=new ii(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ce),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ce),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}const Bs=new WeakMap;class $r extends mn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$n.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Bs.get(a);d===void 0&&(d=[],Bs.set(a,d)),d.push({onLoad:e,onError:i})}return a}const o=Xr("img");function l(){h(),e&&e(this);const d=Bs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Bs.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),$n.remove(`image:${t}`);const u=Bs.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}Bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class v_ extends mn{constructor(t){super(t)}load(t,e,n,i){const r=new ia;r.colorSpace=rn;const a=new $r(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class op extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Ln,o=new ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ft(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){const e=new Ln;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:dn,t.wrapT=e.wrapT!==void 0?e.wrapT:dn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ce,t.minFilter=e.minFilter!==void 0?e.minFilter:Ce,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Wn),e.mipmapCount===1&&(t.minFilter=Ce),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class Jo extends mn{constructor(t){super(t)}load(t,e,n,i){const r=new Pe,a=new $r(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ki extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class zh extends ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ec=new Kt,Xu=new C,qu=new C;class kh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===us||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qa=new C,Ya=new Ze,Jn=new C;class Gl extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,Ya,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qa,Ya,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new C,Yu=new tt,Zu=new tt;class We extends Gl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,Zu),e.subVectors(Zu,Yu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class y_ extends kh{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ir*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Vh extends ki{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class M_ extends kh{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}}class jr extends ki{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new M_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class cr extends Gl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class S_ extends kh{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new S_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Wl extends ki{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lp extends ki{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Gh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class cp extends ki{constructor(t=new Gh,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Ju={};class Xl extends mn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new ii(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ft(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Xl.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:Yf,SpriteMaterial:Ml,RawShaderMaterial:Ih,ShaderMaterial:Un,PointsMaterial:Tl,MeshPhysicalMaterial:Lh,MeshStandardMaterial:ca,MeshPhongMaterial:zl,MeshToonMaterial:Kf,MeshNormalMaterial:$f,MeshLambertMaterial:Dh,MeshDepthMaterial:Nh,MeshDistanceMaterial:Uh,MeshBasicMaterial:si,MeshMatcapMaterial:jf,LineDashedMaterial:Qf,LineBasicMaterial:on,Material:$e,...Ju}[t];let i;return n===void 0?(Ni(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new $e):i=new n,i}static registerMaterial(t,e){Ju[t]=e}}class Ko{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class hp extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class up extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ft(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),M=Xs(m.type,g),S=new ea(M,m.stride);return S.uuid=m.uuid,e[p]=S,S}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=t.isInstancedBufferGeometry?new hp:new te,o=t.data.index;if(o!==void 0){const f=Xs(o.type,o.array);a.setIndex(new Me(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const m=i(t.data,p.data);_=new Bi(m,p.itemSize,p.offset,p.normalized)}else{const m=Xs(p.type,p.array),g=p.isInstancedBufferAttribute?ds:Me;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let m=0,g=p.length;m<g;m++){const M=p[m];let S;if(M.isInterleavedBufferAttribute){const x=i(t.data,M.data);S=new Bi(x,M.itemSize,M.offset,M.normalized)}else{const x=Xs(M.type,M.array);S=new Me(x,M.itemSize,M.normalized)}M.name!==void 0&&(S.name=M.name),_.push(S)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Ke().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const Ac={};class dp extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?Ko.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),Ft("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Ft("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Ko.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new ii(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Ac[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new aa().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new na().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new up;for(let r=0,a=t.length;r<a;r++){let o;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Gu?o=Gu[l.type].fromJSON(l,e):l.type in Ac?o=Ac[l.type].fromJSON(l,e):mt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Xl;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=ar.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Xs(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Vl(e);r=new $r(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const m=u[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new Ln(g.data,g.width,g.height)))}i[d.uuid]=new Ii(f)}else{const f=o(d.url);i[d.uuid]=new Ii(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Xs(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new $r(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Ln(p.data,p.width,p.height)))}n[l.uuid]=new Ii(h)}else{const h=await r(l.url);n[l.uuid]=new Ii(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(mt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&mt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&mt("ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new ia,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Ln:h=new Pe,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,b_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Ku),h.wrapT=n(o.wrap[1],Ku)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,$u)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,$u)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(u){return e[u]===void 0&&mt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const m=u[p];n[m]===void 0&&mt("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&mt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&mt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":a=new xl,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Ct(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new _l(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new gl(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new We(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new cr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Wl(t.color,t.intensity);break;case"DirectionalLight":a=new Hl(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new jr(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new lp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Vh(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new zh(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Gh().fromArray(t.sh);a=new cp(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new yh(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new De(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,_=t.instanceColor;a=new Mh(h,d,f),a.instanceMatrix=new ds(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new ds(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new Df(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(m=>{let g=null,M=null;return m.boundingBox!==void 0&&(g=new Je().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(M=new Ke().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:M}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Ke().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Je().fromJSON(t.boundingBox));break;case"LOD":a=new Lf;break;case"Line":a=new _i(o(t.geometry),l(t.material));break;case"LineLoop":a=new Sh(o(t.geometry),l(t.material));break;case"LineSegments":a=new Yn(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new bh(o(t.geometry),l(t.material));break;case"Sprite":a=new Lr(l(t.material));break;case"Group":a=new Li;break;case"Bone":a=new Sl;break;default:a=new de}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new C().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?mt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new de}})}}const b_={UVMapping:nl,CubeReflectionMapping:ti,CubeRefractionMapping:Ui,EquirectangularReflectionMapping:qs,EquirectangularRefractionMapping:Rr,CubeUVReflectionMapping:or},Ku={RepeatWrapping:js,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:Qs},$u={NearestFilter:Oe,NearestMipmapNearestFilter:il,NearestMipmapLinearFilter:ns,LinearFilter:Ce,LinearMipmapNearestFilter:Ys,LinearMipmapLinearFilter:Wn},wc=new WeakMap;class fp extends mn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&mt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&mt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$n.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{wc.has(a)===!0?(i&&i(wc.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){$n.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){i&&i(c),wc.set(l,c),$n.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});$n.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Za;class Hh{static getContext(){return Za===void 0&&(Za=new(window.AudioContext||window.webkitAudioContext)),Za}static setContext(t){Za=t}}class T_ extends mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0),h=Hh.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Ft(l),r.manager.itemError(t)}}}const ju=new Kt,Qu=new Kt,Yi=new Kt;class E_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new We,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new We,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Yi.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(ls*e.fov*.5)/e.zoom;let o,l;Qu.elements[12]=-i,ju.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,Yi.elements[0]=2*e.near/(l-o),Yi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Yi),o=-a*e.aspect-r,l=a*e.aspect-r,Yi.elements[0]=2*e.near/(l-o),Yi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Yi)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Qu),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(ju),this.cameraR.matrixWorldNeedsUpdate=!0}}const zs=-90,ks=1;class pp extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(zs,ks,t,e);i.layers=this.layers,this.add(i);const r=new We(zs,ks,t,e);r.layers=this.layers,this.add(r);const a=new We(zs,ks,t,e);a.layers=this.layers,this.add(a);const o=new We(zs,ks,t,e);o.layers=this.layers,this.add(o);const l=new We(zs,ks,t,e);l.layers=this.layers,this.add(l);const c=new We(zs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class mp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class gp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=A_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function A_(){this._document.hidden===!1&&this.reset()}const Zi=new C,Cc=new Ze,w_=new C,Ji=new C,Ki=new C;class C_ extends de{constructor(){super(),this.type="AudioListener",this.context=Hh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new gp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Zi,Cc,w_),Ji.set(0,0,-1).applyQuaternion(Cc),Ki.set(0,1,0).applyQuaternion(Cc),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Zi.x,n),e.positionY.linearRampToValueAtTime(Zi.y,n),e.positionZ.linearRampToValueAtTime(Zi.z,n),e.forwardX.linearRampToValueAtTime(Ji.x,n),e.forwardY.linearRampToValueAtTime(Ji.y,n),e.forwardZ.linearRampToValueAtTime(Ji.z,n),e.upX.linearRampToValueAtTime(Ki.x,n),e.upY.linearRampToValueAtTime(Ki.y,n),e.upZ.linearRampToValueAtTime(Ki.z,n)}else e.setPosition(Zi.x,Zi.y,Zi.z),e.setOrientation(Ji.x,Ji.y,Ji.z,Ki.x,Ki.y,Ki.z)}}class _p extends de{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){mt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(mt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(mt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const $i=new C,td=new Ze,R_=new C,ji=new C;class P_ extends _p{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose($i,td,R_),ji.set(0,0,1).applyQuaternion(td);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime($i.x,n),e.positionY.linearRampToValueAtTime($i.y,n),e.positionZ.linearRampToValueAtTime($i.z,n),e.orientationX.linearRampToValueAtTime(ji.x,n),e.orientationY.linearRampToValueAtTime(ji.y,n),e.orientationZ.linearRampToValueAtTime(ji.z,n)}else e.setPosition($i.x,$i.y,$i.z),e.setOrientation(ji.x,ji.y,ji.z)}}class I_{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class xp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ze.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Ze.multiplyQuaternionsFlat(t,a,t,e,t,n),Ze.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Wh="\\[\\]\\.:\\/",L_=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",D_="[^"+Wh.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",Xh),U_=/(WCOD+)?/.source.replace("WCOD",D_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),B_=new RegExp("^"+N_+U_+F_+O_+"$"),z_=["material","materials","bones","map"];class k_{constructor(t,e,n){const i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ue{constructor(t,e,n){this.path=e,this.parsedPath=n||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,n):new ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(t){const e=B_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=k_;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class V_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=En(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let _=0,m=a;_!==m;++_)r[_].push(new ue(u,n[_],i[_]))}else if(p<c){o=t[p];const _=--c,m=t[_];e[m.uuid]=p,t[p]=m,e[f]=_,t[_]=u;for(let g=0,M=a;g!==M;++g){const S=r[g],x=S[_];let A=S[p];S[p]=x,A===void 0&&(A=new ue(u,n[g],i[g])),S[_]=A}}else t[p]!==o&&Ft("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const _=n[f],m=_[d],g=_[h];_[h]=m,_[d]=g}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--a,_=t[p];e[f.uuid]=d,t[d]=f,e[_.uuid]=u,t[u]=_,t.pop();for(let m=0,g=i;m!==g;++m){const M=n[m],S=M[u],x=M[p];M[d]=S,M[u]=x,M.pop()}}else{const u=--a,f=t[u];u>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new ue(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class vp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:is,endingEnd:is};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=cf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case hl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===hf;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===lf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(t?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Gr,e?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Gr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const G_=new Float32Array(1);class ao extends qn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;p=new xp(ue.create(n,f,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Fh(new Float32Array(2),new Float32Array(2),1,G_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?ar.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=hl),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new vp(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?ar.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class H_ extends vh{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new pl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class qh{constructor(t){this.value=t}clone(){return new qh(this.value.clone===void 0?this.value:this.value.clone())}}let W_=0;class X_ extends qn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.usage=Wr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class q_ extends ea{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Y_{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const ed=new Kt;class yp{constructor(t,e,n=0,i=1/0){this.ray=new gs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ft("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ed.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(nd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kc(t[i],this,n,e);return n.sort(nd),n}}function nd(s,t){return s.distance-t.distance}function Kc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Kc(r[a],t,e,!0)}}class Mp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,mt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class $c{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Z_{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Qh=class Qh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Qh.prototype.isMatrix2=!0;let jc=Qh;const id=new tt;class Sp{constructor(t=new tt(1/0,1/0),e=new tt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=id.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,id).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sd=new C,Ja=new C,Vs=new C,Gs=new C,Rc=new C,J_=new C,K_=new C;class $_{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sd.subVectors(t,this.start),Ja.subVectors(this.end,this.start);const n=Ja.dot(Ja);if(n===0)return 0;let r=Ja.dot(sd)/n;return e&&(r=Jt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=J_,n=K_){const i=10000000000000001e-32;let r,a;const o=this.start,l=t.start,c=this.end,h=t.end;Vs.subVectors(c,o),Gs.subVectors(h,l),Rc.subVectors(o,l);const d=Vs.dot(Vs),u=Gs.dot(Gs),f=Gs.dot(Rc);if(d<=i&&u<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,a=f/u,a=Jt(a,0,1);else{const p=Vs.dot(Rc);if(u<=i)a=0,r=Jt(-p/d,0,1);else{const _=Vs.dot(Gs),m=d*u-_*_;m!==0?r=Jt((_*f-p*u)/m,0,1):r=0,a=(_*r+f)/u,a<0?(a=0,r=Jt(-p/d,0,1)):a>1&&(a=1,r=Jt((_-p)/d,0,1))}}return e.copy(o).addScaledVector(Vs,r),n.copy(l).addScaledVector(Gs,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const rd=new C;class j_ extends de{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new te,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Pt(i,3));const r=new on({fog:!1,toneMapped:!1});this.cone=new Yn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),rd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ci=new C,Ka=new Kt,Pc=new Kt;class Q_ extends Yn{constructor(t){const e=bp(t),n=new te,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Pt(i,3)),n.setAttribute("color",new Pt(r,3));const a=new on({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new Ct(255),l=new Ct(65280);this.setColors(o,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Pc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Ka.multiplyMatrices(Pc,o.matrixWorld),Ci.setFromMatrixPosition(Ka),i.setXYZ(a,Ci.x,Ci.y,Ci.z),Ka.multiplyMatrices(Pc,o.parent.matrixWorld),Ci.setFromMatrixPosition(Ka),i.setXYZ(a+1,Ci.x,Ci.y,Ci.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function bp(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...bp(s.children[e]));return t}class t0 extends De{constructor(t,e,n){const i=new la(e,4,2),r=new si({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const e0=new C,ad=new Ct,od=new Ct;class n0 extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new oa(e);i.rotateY(Math.PI*.5),this.material=new si({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Me(a,3)),this.add(new De(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");ad.copy(this.light.color),od.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?ad:od;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(e0.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Tp extends Yn{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ct(n),i=new Ct(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=u===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new te;h.setAttribute("position",new Pt(l,3)),h.setAttribute("color",new Pt(c,3));const d=new on({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class i0 extends Yn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new Ct(r),a=new Ct(a);const o=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);const _=d&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const u=d&1?r:a,f=t-t/n*d;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f;o.push(m,0,g),l.push(u.r,u.g,u.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f,o.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new te;c.setAttribute("position",new Pt(o,3)),c.setAttribute("color",new Pt(l,3));const h=new on({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ld=new C,$a=new C,cd=new C;class s0 extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new te;i.setAttribute("position",new Pt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new on({fog:!1,toneMapped:!1});this.lightPlane=new _i(i,r),this.add(this.lightPlane),i=new te,i.setAttribute("position",new Pt([0,0,0,0,0,1],3)),this.targetLine=new _i(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ld.setFromMatrixPosition(this.light.matrixWorld),$a.setFromMatrixPosition(this.light.target.matrixWorld),cd.subVectors($a,ld),this.lightPlane.lookAt($a),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt($a),this.targetLine.scale.z=cd.length()}}const ja=new C,Fe=new Gl;class r0 extends Yn{constructor(t){const e=new te,n=new on({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Pt(i,3)),e.setAttribute("color",new Pt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ct(16755200),h=new Ct(16711680),d=new Ct(43775),u=new Ct(16777215),f=new Ct(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,a;if(Fe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Tn)r=-1,a=1;else if(this.camera.coordinateSystem===us)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);ke("c",e,t,Fe,0,0,r),ke("t",e,t,Fe,0,0,a),ke("n1",e,t,Fe,-n,-i,r),ke("n2",e,t,Fe,n,-i,r),ke("n3",e,t,Fe,-n,i,r),ke("n4",e,t,Fe,n,i,r),ke("f1",e,t,Fe,-n,-i,a),ke("f2",e,t,Fe,n,-i,a),ke("f3",e,t,Fe,-n,i,a),ke("f4",e,t,Fe,n,i,a),ke("u1",e,t,Fe,n*.7,i*1.1,r),ke("u2",e,t,Fe,-n*.7,i*1.1,r),ke("u3",e,t,Fe,0,i*2,r),ke("cf1",e,t,Fe,-n,0,a),ke("cf2",e,t,Fe,n,0,a),ke("cf3",e,t,Fe,0,-i,a),ke("cf4",e,t,Fe,0,i,a),ke("cn1",e,t,Fe,-n,0,r),ke("cn2",e,t,Fe,n,0,r),ke("cn3",e,t,Fe,0,-i,r),ke("cn4",e,t,Fe,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ke(s,t,e,n,i,r,a){ja.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ja.x,ja.y,ja.z)}}const Qa=new Je;class a0 extends Yn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new te;r.setIndex(new Me(n,1)),r.setAttribute("position",new Me(i,3)),super(r,new on({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Qa.setFromObject(this.object),Qa.isEmpty())return;const t=Qa.min,e=Qa.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class o0 extends Yn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new te;r.setIndex(new Me(n,1)),r.setAttribute("position",new Pt(i,3)),super(r,new on({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class l0 extends _i{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new te;a.setAttribute("position",new Pt(r,3)),a.computeBoundingSphere(),super(a,new on({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new te;l.setAttribute("position",new Pt(o,3)),l.computeBoundingSphere(),this.add(new De(l,new si({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const hd=new C;let to,Ic;class c0 extends de{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",to===void 0&&(to=new te,to.setAttribute("position",new Pt([0,0,0,0,1,0],3)),Ic=new ra(.5,1,5,1),Ic.translate(0,-.5,0)),this.position.copy(e),this.line=new _i(to,new on({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new De(Ic,new si({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{hd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(hd,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ep extends Yn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new te;i.setAttribute("position",new Pt(e,3)),i.setAttribute("color",new Pt(n,3));const r=new on({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Ct,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class h0{constructor(){this.type="ShapePath",this.color=new Ct,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Yr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new tt);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const _=l[p],m=l[(p+1)%f];if(_.y>d!=m.y>d){const g=_.x+(d-_.y)*(m.x-_.x)/(m.y-_.y);u.push(g)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(mt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=In.area(c);if(h===0)continue;const d=new Sp;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let h=0;for(let d=l-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new aa;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new Yr;h.curves=l.subPath.curves,c.holes.push(h)}return a}}class Ap extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){mt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function u0(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function d0(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function f0(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Qc(s,t,e,n){const i=p0(n);switch(e){case ph:return s*t;case ol:return s*t/i.components*i.byteLength;case ta:return s*t/i.components*i.byteLength;case Fi:return s*t*2/i.components*i.byteLength;case ll:return s*t*2/i.components*i.byteLength;case mh:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case cl:return s*t*4/i.components*i.byteLength;case Zs:case Pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Js:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vo:case Mo:return Math.max(s,16)*Math.max(t,8)/4;case xo:case yo:return Math.max(s,8)*Math.max(t,8)/2;case Fr:case So:case To:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bo:case Or:case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Br:case zr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Go:case Ho:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kr:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(s){switch(s){case yn:case hh:return{byteLength:1,components:1};case tr:case uh:case ei:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case Dn:case sl:case fn:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class m0{static contain(t,e){return u0(t,e)}static cover(t,e){return d0(t,e)}static fill(t){return f0(t)}static getByteLength(t,e,n,i){return Qc(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);function wp(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function g0(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,mx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gx=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,nv=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
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
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Uv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zv=`#define PHONG
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
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Hv=`#define TOON
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
}`,Wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Jv=`uniform float rotation;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:_0,alphahash_pars_fragment:x0,alphamap_fragment:v0,alphamap_pars_fragment:y0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:b0,aomap_pars_fragment:T0,batching_pars_vertex:E0,batching_vertex:A0,begin_vertex:w0,beginnormal_vertex:C0,bsdfs:R0,iridescence_fragment:P0,bumpmap_pars_fragment:I0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:z0,common:k0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:G0,displacementmap_pars_vertex:H0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:K0,envmap_pars_fragment:$0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:cx,envmap_vertex:Q0,fog_vertex:tx,fog_pars_vertex:ex,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ax,lights_lambert_pars_fragment:ox,lights_pars_begin:lx,lights_toon_fragment:hx,lights_toon_pars_fragment:ux,lights_phong_fragment:dx,lights_phong_pars_fragment:fx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:_x,lights_fragment_end:xx,lightprobes_pars_fragment:vx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:bx,map_fragment:Tx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:wx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Px,morphcolor_vertex:Ix,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Nx,normal_fragment_begin:Ux,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:Bx,normal_vertex:zx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:Zx,dithering_fragment:Jx,dithering_pars_fragment:Kx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:tv,shadowmap_vertex:ev,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:av,specularmap_fragment:ov,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:hv,transmission_fragment:uv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:_v,background_frag:xv,backgroundCube_vert:vv,backgroundCube_frag:yv,cube_vert:Mv,cube_frag:Sv,depth_vert:bv,depth_frag:Tv,distance_vert:Ev,distance_frag:Av,equirect_vert:wv,equirect_frag:Cv,linedashed_vert:Rv,linedashed_frag:Pv,meshbasic_vert:Iv,meshbasic_frag:Lv,meshlambert_vert:Dv,meshlambert_frag:Nv,meshmatcap_vert:Uv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:kv,meshphysical_vert:Vv,meshphysical_frag:Gv,meshtoon_vert:Hv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:Zv,sprite_vert:Jv,sprite_frag:Kv},St={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Gn={basic:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ct(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([St.points,St.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([St.common,St.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([St.sprite,St.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:cn([St.common,St.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:cn([St.lights,St.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Gn.physical={uniforms:cn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const eo={r:0,b:0,g:0},$v=new Kt,Cp=new Qt;Cp.set(-1,0,0,0,1,0,0,0,1);function jv(s,t,e,n,i,r){const a=new Ct(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const x=M.backgroundBlurriness>0;S=t.get(S,x)}return S}function p(M){let S=!1;const x=f(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,S){const x=f(S);x&&(x.isCubeTexture||x.mapping===or)?(c===void 0&&(c=new De(new _s(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:rr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cp),c.material.toneMapped=le.getTransfer(x.colorSpace)!==_e,(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new De(new lr(2,2),new Un({name:"BackgroundMaterial",uniforms:rr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=le.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(eo,Zf(s)),e.buffers.color.setClear(eo.r,eo.g,eo.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Qv(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(I,N,W,Y,B){let q=!1;const z=d(I,Y,W,N);r!==z&&(r=z,c(r.object)),q=f(I,Y,W,B),q&&p(I,Y,W,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,N,W,Y),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,N,W,Y){const B=Y.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const z=I.isInstancedMesh===!0?I.id:0;let j=q[z];j===void 0&&(j={},q[z]=j);let at=j[W.id];at===void 0&&(at={},j[W.id]=at);let ut=at[B];return ut===void 0&&(ut=u(l()),at[B]=ut),ut}function u(I){const N=[],W=[],Y=[];for(let B=0;B<e;B++)N[B]=0,W[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Y,object:I,attributes:{},index:null}}function f(I,N,W,Y){const B=r.attributes,q=N.attributes;let z=0;const j=W.getAttributes();for(const at in j)if(j[at].location>=0){const ht=B[at];let At=q[at];if(At===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),ht===void 0||ht.attribute!==At||At&&ht.data!==At.data)return!0;z++}return r.attributesNum!==z||r.index!==Y}function p(I,N,W,Y){const B={},q=N.attributes;let z=0;const j=W.getAttributes();for(const at in j)if(j[at].location>=0){let ht=q[at];ht===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor));const At={};At.attribute=ht,ht&&ht.data&&(At.data=ht.data),B[at]=At,z++}r.attributes=B,r.attributesNum=z,r.index=Y}function _(){const I=r.newAttributes;for(let N=0,W=I.length;N<W;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){const W=r.newAttributes,Y=r.enabledAttributes,B=r.attributeDivisors;W[I]=1,Y[I]===0&&(s.enableVertexAttribArray(I),Y[I]=1),B[I]!==N&&(s.vertexAttribDivisor(I,N),B[I]=N)}function M(){const I=r.newAttributes,N=r.enabledAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]!==I[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function S(I,N,W,Y,B,q,z){z===!0?s.vertexAttribIPointer(I,N,W,B,q):s.vertexAttribPointer(I,N,W,Y,B,q)}function x(I,N,W,Y){_();const B=Y.attributes,q=W.getAttributes(),z=N.defaultAttributeValues;for(const j in q){const at=q[j];if(at.location>=0){let ut=B[j];if(ut===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){const ht=ut.normalized,At=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;const jt=qt.buffer,ce=qt.type,K=qt.bytesPerElement,ft=ce===s.INT||ce===s.UNSIGNED_INT||ut.gpuType===sl;if(ut.isInterleavedBufferAttribute){const ot=ut.data,Bt=ot.stride,Yt=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<at.locationSize;Ht++)g(at.location+Ht,ot.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<at.locationSize;Ht++)m(at.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Ht=0;Ht<at.locationSize;Ht++)S(at.location+Ht,At/at.locationSize,ce,ht,Bt*K,(Yt+At/at.locationSize*Ht)*K,ft)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<at.locationSize;ot++)g(at.location+ot,ut.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<at.locationSize;ot++)m(at.location+ot);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let ot=0;ot<at.locationSize;ot++)S(at.location+ot,At/at.locationSize,ce,ht,At*K,At/at.locationSize*ot*K,ft)}}else if(z!==void 0){const ht=z[j];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(at.location,ht);break;case 3:s.vertexAttrib3fv(at.location,ht);break;case 4:s.vertexAttrib4fv(at.location,ht);break;default:s.vertexAttrib1fv(at.location,ht)}}}}M()}function A(){E();for(const I in n){const N=n[I];for(const W in N){const Y=N[W];for(const B in Y){const q=Y[B];for(const z in q)h(q[z].object),delete q[z];delete Y[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const W in N){const Y=N[W];for(const B in Y){const q=Y[B];for(const z in q)h(q[z].object),delete q[z];delete Y[B]}}delete n[I.id]}function R(I){for(const N in n){const W=n[N];for(const Y in W){const B=W[Y];if(B[I.id]===void 0)continue;const q=B[I.id];for(const z in q)h(q[z].object),delete q[z];delete B[I.id]}}}function v(I){for(const N in n){const W=n[N],Y=I.isInstancedMesh===!0?I.id:0,B=W[Y];if(B!==void 0){for(const q in B){const z=B[q];for(const j in z)h(z[j].object),delete z[j];delete B[q]}delete W[Y],Object.keys(W).length===0&&delete n[N]}}}function E(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function ty(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ey(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==an&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==yn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!v)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(mt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:A,samples:T}}function ny(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new di,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let x=g.clippingState||null;l.value=x,x=h(p,u,S,f);for(let A=0;A!==S;++A)x[A]=e[A];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,x=f;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Di=4,ud=[.125,.215,.35,.446,.526,.582],ts=20,iy=256,br=new cr,dd=new Ct;let Lc=null,Dc=0,Nc=0,Uc=!1;const sy=new C;class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=sy}=r;Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Dc,Nc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:ei,format:an,colorSpace:hs,depthBuffer:!1},i=fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ry(r)),this._blurMaterial=oy(r,t,e),this._ggxMaterial=ay(r,t,e)}return i}_compileMaterial(t){const e=new De(new te,t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,n,i,r){const l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(dd),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new _s,new si({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(dd),g=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const A=this._cubeSize;Hs(i,x*A,S>2?A:0,A,A),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ti||t.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Di?n-p+Di:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Hs(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(o,br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Hs(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(o,br)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):ts;m>ts&&mt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const g=[];let M=0;for(let R=0;R<ts;++R){const v=R/_,E=Math.exp(-v*v/2);g.push(E),R===0?M+=E:R<m&&(M+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;const x=this._sizeLods[i],A=3*x*(i>S-Di?i-S+Di:0),T=4*(this._cubeSize-x);Hs(e,A,T,3*x,2*x),l.setRenderTarget(e),l.render(d,br)}}function ry(s){const t=[],e=[],n=[];let i=s;const r=s-Di+1+ud.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Di?l=ud[a-s+Di-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,m=2,g=1,M=new Float32Array(_*p*f),S=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,v=T>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];M.set(E,_*p*T),S.set(u,m*p*T);const P=[T,T,T,T,T,T];x.set(P,g*p*T)}const A=new te;A.setAttribute("position",new Me(M,_)),A.setAttribute("uv",new Me(S,m)),A.setAttribute("faceIndex",new Me(x,g)),n.push(new De(A,null)),i>Di&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function fd(s,t,e){const n=new An(s,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ay(s,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function oy(s,t,e){const n=new Float32Array(ts),i=new C(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ql(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function pd(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function md(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}class Yh extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ia(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _s(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:jn});r.uniforms.tEquirect.value=e;const a=new De(i,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Ce),new pp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function ly(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===qs||f===Rr)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new Yh(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===qs||f===Rr,_=f===ti||f===Ui;if(p||_){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new th(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new th(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===qs?u.mapping=ti:f===Rr&&(u.mapping=Ui),u}function l(u){let f=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function cy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ni("WebGLRenderer: "+n+" extension not supported."),i}}}function hy(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){const A=M[S+0],T=M[S+1],R=M[S+2];u.push(A,T,T,R,R,A)}}else{const M=p.array;_=p.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const A=S+0,T=S+1,R=S+2;u.push(A,T,T,R,R,A)}}const m=new(p.count>=65535?yl:vl)(u,1);m.version=_;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function uy(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fy(s,t,e){const n=new WeakMap,i=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*A*4*d),R=new fl(T,x,A,d);R.type=fn,R.needsUpdate=!0;const v=S*4;for(let P=0;P<d;P++){const I=m[P],N=g[P],W=M[P],Y=x*A*4*P;for(let B=0;B<I.count;B++){const q=B*v;f===!0&&(i.fromBufferAttribute(I,B),T[Y+q+0]=i.x,T[Y+q+1]=i.y,T[Y+q+2]=i.z,T[Y+q+3]=0),p===!0&&(i.fromBufferAttribute(N,B),T[Y+q+4]=i.x,T[Y+q+5]=i.y,T[Y+q+6]=i.z,T[Y+q+7]=0),_===!0&&(i.fromBufferAttribute(W,B),T[Y+q+8]=i.x,T[Y+q+9]=i.y,T[Y+q+10]=i.z,T[Y+q+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new tt(x,A)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function py(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const my={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[ch]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function gy(s,t,e,n,i,r){const a=new An(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new ps(t,e):void 0}),o=new An(t,e,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new te;l.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const c=new Ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new De(l,c),d=new cr(-1,1,1,-1,0,1);let u=null,f=null,p=!1,_,m=null,g=[],M=!1;this.setSize=function(S,x){a.setSize(S,x),o.setSize(S,x);for(let A=0;A<g.length;A++){const T=g[A];T.setSize&&T.setSize(S,x)}},this.setEffects=function(S){g=S,M=g.length>0&&g[0].isRenderPass===!0;const x=a.width,A=a.height;for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(x,A)}},this.begin=function(S,x){if(p||S.toneMapping===Xn&&g.length===0)return!1;if(m=x,x!==null){const A=x.width,T=x.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return M===!1&&S.setRenderTarget(a),_=S.toneMapping,S.toneMapping=Xn,!0},this.hasRenderPass=function(){return M},this.end=function(S,x){S.toneMapping=_,p=!0;let A=a,T=o;for(let R=0;R<g.length;R++){const v=g[R];if(v.enabled!==!1&&(v.render(S,T,A,x),v.needsSwap!==!1)){const E=A;A=T,T=E}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},le.getTransfer(u)===_e&&(c.defines.SRGB_TRANSFER="");const R=my[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(m),S.render(h,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Rp=new Pe,eh=new ps(1,1),Pp=new fl,Ip=new pl,Lp=new ia,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function hr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=gd[i];if(r===void 0&&(r=new Float32Array(i),gd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Yl(s,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _y(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function vy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function My(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;yd.set(n),s.uniformMatrix2fv(this.addr,!1,yd),qe(e,n)}}function Sy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;vd.set(n),s.uniformMatrix3fv(this.addr,!1,vd),qe(e,n)}}function by(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;xd.set(n),s.uniformMatrix4fv(this.addr,!1,xd),qe(e,n)}}function Ty(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function Ay(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function Cy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ry(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function Py(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function Iy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function Ly(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=e.isReversedDepthBuffer()?dl:ul,r=eh):r=Rp,e.setTexture2D(t||r,i)}function Dy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ip,i)}function Ny(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lp,i)}function Uy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pp,i)}function Fy(s){switch(s){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return Ty;case 35667:case 35671:return Ey;case 35668:case 35672:return Ay;case 35669:case 35673:return wy;case 5125:return Cy;case 36294:return Ry;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(s,t){s.uniform1fv(this.addr,t)}function By(s,t){const e=hr(t,this.size,2);s.uniform2fv(this.addr,e)}function zy(s,t){const e=hr(t,this.size,3);s.uniform3fv(this.addr,e)}function ky(s,t){const e=hr(t,this.size,4);s.uniform4fv(this.addr,e)}function Vy(s,t){const e=hr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Gy(s,t){const e=hr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hy(s,t){const e=hr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wy(s,t){s.uniform1iv(this.addr,t)}function Xy(s,t){s.uniform2iv(this.addr,t)}function qy(s,t){s.uniform3iv(this.addr,t)}function Yy(s,t){s.uniform4iv(this.addr,t)}function Zy(s,t){s.uniform1uiv(this.addr,t)}function Jy(s,t){s.uniform2uiv(this.addr,t)}function Ky(s,t){s.uniform3uiv(this.addr,t)}function $y(s,t){s.uniform4uiv(this.addr,t)}function jy(s,t,e){const n=this.cache,i=t.length,r=Yl(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=eh:a=Rp;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Qy(s,t,e){const n=this.cache,i=t.length,r=Yl(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ip,r[a])}function tM(s,t,e){const n=this.cache,i=t.length,r=Yl(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Lp,r[a])}function eM(s,t,e){const n=this.cache,i=t.length,r=Yl(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Pp,r[a])}function nM(s){switch(s){case 5126:return Oy;case 35664:return By;case 35665:return zy;case 35666:return ky;case 35674:return Vy;case 35675:return Gy;case 35676:return Hy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return Zy;case 36294:return Jy;case 36295:return Ky;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class rM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Md(s,t){s.seq.push(t),s.map[t.id]=t}function aM(s,t,e){const n=s.name,i=n.length;for(Fc.lastIndex=0;;){const r=Fc.exec(n),a=Fc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Md(e,c===void 0?new iM(o,s,t):new sM(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new rM(o),Md(e,d)),e=d}}}class oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);aM(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Sd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const oM=37297;let lM=0;function cM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bd=new Qt;function hM(s){le._getMatrix(bd,le.workingColorSpace,s);const t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Hr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Td(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cM(s.getShaderSource(t),o)}else return r}function uM(s,t){const e=hM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dM={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[ah]:"ACESFilmic",[lh]:"AgX",[ch]:"Neutral",[oh]:"Custom"};function fM(s,t){const e=dM[t];return e===void 0?(mt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const no=new C;function pM(){le.getLuminanceCoefficients(no);const s=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function gM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _M(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function wr(s){return s!==""}function Ed(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(s){return s.replace(xM,yM)}const vM=new Map;function yM(s,t){let e=re[t];if(e===void 0){const n=vM.get(t);if(n!==void 0)e=re[n],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nh(e)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(s){return s.replace(MM,SM)}function SM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const bM={[Cr]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function TM(s){return bM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EM={[ti]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE_UV"};function AM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":EM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const wM={[Ui]:"ENVMAP_MODE_REFRACTION"};function CM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RM={[Qr]:"ENVMAP_BLENDING_MULTIPLY",[rf]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function PM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":RM[s.combine]||"ENVMAP_BLENDING_NONE"}function IM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function LM(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=TM(e),c=AM(e),h=CM(e),d=PM(e),u=IM(e),f=mM(e),p=gM(r),_=i.createProgram();let m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wr).join(`
`),g.length>0&&(g+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),g=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?re.tonemapping_pars_fragment:"",e.toneMapping!==Xn?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=nh(a),a=Ed(a,e),a=Ad(a,e),o=nh(o),o=Ed(o,e),o=Ad(o,e),a=wd(a),o=wd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=M+m+a,x=M+g+o,A=Sd(i,i.VERTEX_SHADER,S),T=Sd(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(I){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",W=i.getShaderInfoLog(A)||"",Y=i.getShaderInfoLog(T)||"",B=N.trim(),q=W.trim(),z=Y.trim();let j=!0,at=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const ut=Td(i,A,"vertex"),ht=Td(i,T,"fragment");Ft("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ut+`
`+ht)}else B!==""?mt("WebGLProgram: Program Info Log:",B):(q===""||z==="")&&(at=!1);at&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(T),v=new oo(i,_),E=_M(i,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,oM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let DM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UM(t),e.set(t,n)),n}}class UM{constructor(t){this.id=DM++,this.code=t,this.usedTimes=0}}function FM(s){return s===Fi||s===Or||s===kr}function OM(s,t,e,n,i,r){const a=new ml,o=new NM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,P,I,N,W){const Y=I.fog,B=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||q,z),at=j&&j.mapping===or?j.image.height:null,ut=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&mt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,At=ht!==void 0?ht.length:0;let qt=0;B.morphAttributes.position!==void 0&&(qt=1),B.morphAttributes.normal!==void 0&&(qt=2),B.morphAttributes.color!==void 0&&(qt=3);let jt,ce,K,ft;if(ut){const Lt=Gn[ut];jt=Lt.vertexShader,ce=Lt.fragmentShader}else{jt=v.vertexShader,ce=v.fragmentShader;const Lt=o.getVertexShaderStage(v),Re=o.getFragmentShaderStage(v);o.update(v,Lt,Re),K=Lt.id,ft=Re.id}const ot=s.getRenderTarget(),Bt=s.state.buffers.depth.getReversed(),Yt=N.isInstancedMesh===!0,Ht=N.isBatchedMesh===!0,fe=!!v.map,Zt=!!v.matcap,et=!!j,st=!!v.aoMap,rt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,kt=!!v.displacementMap,Dt=!!v.emissiveMap,Xt=!!v.metalnessMap,$t=!!v.roughnessMap,L=v.anisotropy>0,ge=v.clearcoat>0,ne=v.dispersion>0,w=v.iridescence>0,y=v.sheen>0,O=v.transmission>0,k=L&&!!v.anisotropyMap,Z=ge&&!!v.clearcoatMap,ct=ge&&!!v.clearcoatNormalMap,dt=ge&&!!v.clearcoatRoughnessMap,J=w&&!!v.iridescenceMap,$=w&&!!v.iridescenceThicknessMap,gt=y&&!!v.sheenColorMap,Ot=y&&!!v.sheenRoughnessMap,yt=!!v.specularMap,xt=!!v.specularColorMap,Vt=!!v.specularIntensityMap,Wt=O&&!!v.transmissionMap,ee=O&&!!v.thicknessMap,D=!!v.gradientMap,pt=!!v.alphaMap,Q=v.alphaTest>0,vt=!!v.alphaHash,bt=!!v.extensions;let nt=Xn;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Nt={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:ce,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ht,batchingColor:Ht&&N._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&N.instanceColor!==null,instancingMorph:Yt&&N.morphTexture!==null,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:Zt,envMap:et,envMapMode:et&&j.mapping,envMapCubeUVHeight:at,aoMap:st,lightMap:rt,bumpMap:Mt,normalMap:_t,displacementMap:kt,emissiveMap:Dt,normalMapObjectSpace:_t&&v.normalMapType===mf,normalMapTangentSpace:_t&&v.normalMapType===gi,packedNormalMap:_t&&v.normalMapType===gi&&FM(v.normalMap.format),metalnessMap:Xt,roughnessMap:$t,anisotropy:L,anisotropyMap:k,clearcoat:ge,clearcoatMap:Z,clearcoatNormalMap:ct,clearcoatRoughnessMap:dt,dispersion:ne,iridescence:w,iridescenceMap:J,iridescenceThicknessMap:$,sheen:y,sheenColorMap:gt,sheenRoughnessMap:Ot,specularMap:yt,specularColorMap:xt,specularIntensityMap:Vt,transmission:O,transmissionMap:Wt,thicknessMap:ee,gradientMap:D,opaque:v.transparent===!1&&v.blending===os&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:vt,combine:v.combine,mapUv:fe&&p(v.map.channel),aoMapUv:st&&p(v.aoMap.channel),lightMapUv:rt&&p(v.lightMap.channel),bumpMapUv:Mt&&p(v.bumpMap.channel),normalMapUv:_t&&p(v.normalMap.channel),displacementMapUv:kt&&p(v.displacementMap.channel),emissiveMapUv:Dt&&p(v.emissiveMap.channel),metalnessMapUv:Xt&&p(v.metalnessMap.channel),roughnessMapUv:$t&&p(v.roughnessMap.channel),anisotropyMapUv:k&&p(v.anisotropyMap.channel),clearcoatMapUv:Z&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&p(v.sheenRoughnessMap.channel),specularMapUv:yt&&p(v.specularMap.channel),specularColorMapUv:xt&&p(v.specularColorMap.channel),specularIntensityMapUv:Vt&&p(v.specularIntensityMap.channel),transmissionMapUv:Wt&&p(v.transmissionMap.channel),thicknessMapUv:ee&&p(v.thicknessMap.channel),alphaMapUv:pt&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||L),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(fe||pt),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Bt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:bt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&v.extensions.multiDraw===!0||Ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(g(E,v),M(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const E=f[v.type];let P;if(E){const I=Gn[E];P=Jf.clone(I.uniforms)}else P=v.uniforms;return P}function x(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new LM(s,E,v,i),c.push(P),h.set(E,P)),P}function A(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function BM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Rd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,m,g){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,_,m,g){const M=o(u,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(u,f,p,_,m,g){const M=o(u,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f,p){e.length>1&&e.sort(u||zM),n.length>1&&n.sort(f||Rd),i.length>1&&i.sort(f||Rd),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function kM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Pd,s.set(n,[a])):i>=r.length?(a=new Pd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function VM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ct};break;case"SpotLight":e={position:new C,direction:new C,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function GM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let HM=0;function WM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function XM(s){const t=new VM,e=GM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Kt,a=new Kt;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,S=0,x=0,A=0,T=0,R=0;c.sort(WM);for(let E=0,P=c.length;E<P;E++){const I=c[E],N=I.color,W=I.intensity,Y=I.distance;let B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*W,d+=N.g*W,u+=N.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],W);R++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,j=e.get(I);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=q,f++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(W),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;const z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const j=e.get(I);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=B,x++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(N).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const z=I.shadow,j=e.get(I);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=q,p++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[g]=q,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==M||v.numPointShadows!==S||v.numSpotShadows!==x||v.numSpotMaps!==A||v.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,v.directionalLength=f,v.pointLength=p,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=M,v.numPointShadows=S,v.numSpotShadows=x,v.numSpotMaps=A,v.numLightProbes=R,n.version=HM++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const S=c[g];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Id(s){const t=new XM(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qM(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Id(s),t.set(i,[o])):r>=a.length?(o=new Id(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],KM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ld=new Kt,Tr=new C,Oc=new C;function $M(s,t,e){let n=new fs;const i=new tt,r=new tt,a=new xe,o=new Nh,l=new Uh,c={},h=e.maxTextureSize,d={[Qn]:pn,[pn]:Qn,[Hn]:Hn},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:YM,fragmentShader:ZM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new te;p.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let g=this.type;this.render=function(T,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===zd&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cr);const E=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=g!==this.type;W&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=T.length;Y<B;Y++){const q=T[Y],z=q.shadow;if(z===void 0){mt("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const j=z.getFrameExtents();i.multiply(j),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,z.mapSize.y=r.y));const at=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=at,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ws){if(q.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(i.x,i.y,{format:Fi,type:ei,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new ps(i.x,i.y,fn),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe}else q.isPointLight?(z.map=new Yh(i.x),z.map.depthTexture=new Uf(i.x,Dn)):(z.map=new An(i.x,i.y),z.map.depthTexture=new ps(i.x,i.y,Dn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=ni,this.type===Cr?(z.map.depthTexture.compareFunction=at?dl:ul,z.map.depthTexture.minFilter=Ce,z.map.depthTexture.magFilter=Ce):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe);z.camera.updateProjectionMatrix()}const ut=z.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ut;ht++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,ht),s.clear();else{ht===0&&(s.setRenderTarget(z.map),s.clear());const At=z.getViewport(ht);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),N.viewport(a)}if(q.isPointLight){const At=z.camera,qt=z.matrix,jt=q.distance||At.far;jt!==At.far&&(At.far=jt,At.updateProjectionMatrix()),Tr.setFromMatrixPosition(q.matrixWorld),At.position.copy(Tr),Oc.copy(At.position),Oc.add(JM[ht]),At.up.copy(KM[ht]),At.lookAt(Oc),At.updateMatrixWorld(),qt.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Ld.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ld,At.coordinateSystem,At.reversedDepth)}else z.updateMatrices(q);n=z.getFrustum(),x(R,v,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Ws&&M(z,v),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,P,I)};function M(T,R){const v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(i.x,i.y,{format:Fi,type:ei})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,v,f,_,null)}function S(T,R,v,E){let P=null;const I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=P.uuid,W=R.uuid;let Y=c[N];Y===void 0&&(Y={},c[N]=Y);let B=Y[W];B===void 0&&(B=P.clone(),Y[W]=B,R.addEventListener("dispose",A)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,E===Ws?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=s.properties.get(P);N.light=v}return P}function x(T,R,v,E,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ws)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const W=t.update(T),Y=T.material;if(Array.isArray(Y)){const B=W.groups;for(let q=0,z=B.length;q<z;q++){const j=B[q],at=Y[j.materialIndex];if(at&&at.visible){const ut=S(T,at,E,P);T.onBeforeShadow(s,T,R,v,W,ut,j),s.renderBufferDirect(v,null,W,ut,T,j),T.onAfterShadow(s,T,R,v,W,ut,j)}}}else if(Y.visible){const B=S(T,Y,E,P);T.onBeforeShadow(s,T,R,v,W,B,null),s.renderBufferDirect(v,null,W,B,T,null),T.onAfterShadow(s,T,R,v,W,B,null)}}const N=T.children;for(let W=0,Y=N.length;W<Y;W++)x(N[W],R,v,E,P)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const E=c[v],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function jM(s,t){function e(){let D=!1;const pt=new xe;let Q=null;const vt=new xe(0,0,0,0);return{setMask:function(bt){Q!==bt&&!D&&(s.colorMask(bt,bt,bt,bt),Q=bt)},setLocked:function(bt){D=bt},setClear:function(bt,nt,Nt,Lt,Re){Re===!0&&(bt*=Lt,nt*=Lt,Nt*=Lt),pt.set(bt,nt,Nt,Lt),vt.equals(pt)===!1&&(s.clearColor(bt,nt,Nt,Lt),vt.copy(pt))},reset:function(){D=!1,Q=null,vt.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,Q=null,vt=null,bt=null;return{setReversed:function(nt){if(pt!==nt){const Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;const Lt=bt;bt=null,this.setClear(Lt)}},getReversed:function(){return pt},setTest:function(nt){nt?ot(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!D&&(s.depthMask(nt),Q=nt)},setFunc:function(nt){if(pt&&(nt=Im[nt]),vt!==nt){switch(nt){case ho:s.depthFunc(s.NEVER);break;case uo:s.depthFunc(s.ALWAYS);break;case fo:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case po:s.depthFunc(s.EQUAL);break;case mo:s.depthFunc(s.GEQUAL);break;case go:s.depthFunc(s.GREATER);break;case _o:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=nt}},setLocked:function(nt){D=nt},setClear:function(nt){bt!==nt&&(bt=nt,pt&&(nt=1-nt),s.clearDepth(nt))},reset:function(){D=!1,Q=null,vt=null,bt=null,pt=!1}}}function i(){let D=!1,pt=null,Q=null,vt=null,bt=null,nt=null,Nt=null,Lt=null,Re=null;return{setTest:function(ve){D||(ve?ot(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(ve){pt!==ve&&!D&&(s.stencilMask(ve),pt=ve)},setFunc:function(ve,wn,H){(Q!==ve||vt!==wn||bt!==H)&&(s.stencilFunc(ve,wn,H),Q=ve,vt=wn,bt=H)},setOp:function(ve,wn,H){(nt!==ve||Nt!==wn||Lt!==H)&&(s.stencilOp(ve,wn,H),nt=ve,Nt=wn,Lt=H)},setLocked:function(ve){D=ve},setClear:function(ve){Re!==ve&&(s.clearStencil(ve),Re=ve)},reset:function(){D=!1,pt=null,Q=null,vt=null,bt=null,nt=null,Nt=null,Lt=null,Re=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,x=null,A=null,T=null,R=null,v=new Ct(0,0,0),E=0,P=!1,I=null,N=null,W=null,Y=null,B=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const at=s.getParameter(s.VERSION);at.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(at)[1]),z=j>=1):at.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),z=j>=2);let ut=null,ht={};const At=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),jt=new xe().fromArray(At),ce=new xe().fromArray(qt);function K(D,pt,Q,vt){const bt=new Uint8Array(4),nt=s.createTexture();s.bindTexture(D,nt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Q;Nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(pt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return nt}const ft={};ft[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(cs),Mt(!1),_t(zc),ot(s.CULL_FACE),st(jn);function ot(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Bt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Yt(D,pt){return u[D]!==pt?(s.bindFramebuffer(D,pt),u[D]=pt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ht(D,pt){let Q=p,vt=!1;if(D){Q=f.get(pt),Q===void 0&&(Q=[],f.set(pt,Q));const bt=D.textures;if(Q.length!==bt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,Nt=bt.length;nt<Nt;nt++)Q[nt]=s.COLOR_ATTACHMENT0+nt;Q.length=bt.length,vt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,vt=!0);vt&&s.drawBuffers(Q)}function fe(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const Zt={[Ri]:s.FUNC_ADD,[Vd]:s.FUNC_SUBTRACT,[Gd]:s.FUNC_REVERSE_SUBTRACT};Zt[Hd]=s.MIN,Zt[Wd]=s.MAX;const et={[Xd]:s.ZERO,[qd]:s.ONE,[Yd]:s.SRC_COLOR,[lo]:s.SRC_ALPHA,[Qd]:s.SRC_ALPHA_SATURATE,[$d]:s.DST_COLOR,[Jd]:s.DST_ALPHA,[Zd]:s.ONE_MINUS_SRC_COLOR,[co]:s.ONE_MINUS_SRC_ALPHA,[jd]:s.ONE_MINUS_DST_COLOR,[Kd]:s.ONE_MINUS_DST_ALPHA,[tf]:s.CONSTANT_COLOR,[ef]:s.ONE_MINUS_CONSTANT_COLOR,[nf]:s.CONSTANT_ALPHA,[sf]:s.ONE_MINUS_CONSTANT_ALPHA};function st(D,pt,Q,vt,bt,nt,Nt,Lt,Re,ve){if(D===jn){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(ot(s.BLEND),m=!0),D!==kd){if(D!==g||ve!==P){if((M!==Ri||A!==Ri)&&(s.blendEquation(s.FUNC_ADD),M=Ri,A=Ri),ve)switch(D){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kc:s.blendFunc(s.ONE,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",D);break}else switch(D){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vc:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",D);break}S=null,x=null,T=null,R=null,v.set(0,0,0),E=0,g=D,P=ve}return}bt=bt||pt,nt=nt||Q,Nt=Nt||vt,(pt!==M||bt!==A)&&(s.blendEquationSeparate(Zt[pt],Zt[bt]),M=pt,A=bt),(Q!==S||vt!==x||nt!==T||Nt!==R)&&(s.blendFuncSeparate(et[Q],et[vt],et[nt],et[Nt]),S=Q,x=vt,T=nt,R=Nt),(Lt.equals(v)===!1||Re!==E)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Re),v.copy(Lt),E=Re),g=D,P=!1}function rt(D,pt){D.side===Hn?Bt(s.CULL_FACE):ot(s.CULL_FACE);let Q=D.side===pn;pt&&(Q=!Q),Mt(Q),D.blending===os&&D.transparent===!1?st(jn):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const vt=D.stencilWrite;o.setTest(vt),vt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(D){I!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),I=D)}function _t(D){D!==Od?(ot(s.CULL_FACE),D!==N&&(D===zc?s.cullFace(s.BACK):D===Bd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),N=D}function kt(D){D!==W&&(z&&s.lineWidth(D),W=D)}function Dt(D,pt,Q){D?(ot(s.POLYGON_OFFSET_FILL),(Y!==pt||B!==Q)&&(Y=pt,B=Q,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,Q))):Bt(s.POLYGON_OFFSET_FILL)}function Xt(D){D?ot(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function $t(D){D===void 0&&(D=s.TEXTURE0+q-1),ut!==D&&(s.activeTexture(D),ut=D)}function L(D,pt,Q){Q===void 0&&(ut===null?Q=s.TEXTURE0+q-1:Q=ut);let vt=ht[Q];vt===void 0&&(vt={type:void 0,texture:void 0},ht[Q]=vt),(vt.type!==D||vt.texture!==pt)&&(ut!==Q&&(s.activeTexture(Q),ut=Q),s.bindTexture(D,pt||ft[D]),vt.type=D,vt.texture=pt)}function ge(){const D=ht[ut];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{s.compressedTexImage2D(...arguments)}catch(D){Ft("WebGLState:",D)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(D){Ft("WebGLState:",D)}}function y(){try{s.texSubImage2D(...arguments)}catch(D){Ft("WebGLState:",D)}}function O(){try{s.texSubImage3D(...arguments)}catch(D){Ft("WebGLState:",D)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Ft("WebGLState:",D)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Ft("WebGLState:",D)}}function ct(){try{s.texStorage2D(...arguments)}catch(D){Ft("WebGLState:",D)}}function dt(){try{s.texStorage3D(...arguments)}catch(D){Ft("WebGLState:",D)}}function J(){try{s.texImage2D(...arguments)}catch(D){Ft("WebGLState:",D)}}function $(){try{s.texImage3D(...arguments)}catch(D){Ft("WebGLState:",D)}}function gt(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function Ot(D,pt){d[D]!==pt&&(s.pixelStorei(D,pt),d[D]=pt)}function yt(D){jt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),jt.copy(D))}function xt(D){ce.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function Vt(D,pt){let Q=c.get(pt);Q===void 0&&(Q=new WeakMap,c.set(pt,Q));let vt=Q.get(D);vt===void 0&&(vt=s.getUniformBlockIndex(pt,D.name),Q.set(D,vt))}function Wt(D,pt){const vt=c.get(pt).get(D);l.get(pt)!==vt&&(s.uniformBlockBinding(pt,vt,D.__bindingPointIndex),l.set(pt,vt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ut=null,ht={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,x=null,A=null,T=null,R=null,v=new Ct(0,0,0),E=0,P=!1,I=null,N=null,W=null,Y=null,B=null,jt.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Bt,bindFramebuffer:Yt,drawBuffers:Ht,useProgram:fe,setBlending:st,setMaterial:rt,setFlipSided:Mt,setCullFace:_t,setLineWidth:kt,setPolygonOffset:Dt,setScissorTest:Xt,activeTexture:$t,bindTexture:L,unbindTexture:ge,compressedTexImage2D:ne,compressedTexImage3D:w,texImage2D:J,texImage3D:$,pixelStorei:Ot,getParameter:gt,updateUBOMapping:Vt,uniformBlockBinding:Wt,texStorage2D:ct,texStorage3D:dt,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:yt,viewport:xt,reset:ee}}function QM(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return p?new OffscreenCanvas(w,y):Xr("canvas")}function m(w,y,O){let k=1;const Z=ne(w);if((Z.width>O||Z.height>O)&&(k=O/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ct=Math.floor(k*Z.width),dt=Math.floor(k*Z.height);u===void 0&&(u=_(ct,dt));const J=y?_(ct,dt):u;return J.width=ct,J.height=dt,J.getContext("2d").drawImage(w,0,0,ct,dt),mt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ct+"x"+dt+")."),J}else return"data"in w&&mt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function g(w){return w.generateMipmaps}function M(w){s.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(w,y,O,k,Z,ct=!1){if(w!==null){if(s[w]!==void 0)return s[w];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let dt;k&&(dt=t.get("EXT_texture_norm16"),dt||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===s.RED&&(O===s.FLOAT&&(J=s.R32F),O===s.HALF_FLOAT&&(J=s.R16F),O===s.UNSIGNED_BYTE&&(J=s.R8),O===s.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),O===s.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.R8UI),O===s.UNSIGNED_SHORT&&(J=s.R16UI),O===s.UNSIGNED_INT&&(J=s.R32UI),O===s.BYTE&&(J=s.R8I),O===s.SHORT&&(J=s.R16I),O===s.INT&&(J=s.R32I)),y===s.RG&&(O===s.FLOAT&&(J=s.RG32F),O===s.HALF_FLOAT&&(J=s.RG16F),O===s.UNSIGNED_BYTE&&(J=s.RG8),O===s.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),O===s.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RG8UI),O===s.UNSIGNED_SHORT&&(J=s.RG16UI),O===s.UNSIGNED_INT&&(J=s.RG32UI),O===s.BYTE&&(J=s.RG8I),O===s.SHORT&&(J=s.RG16I),O===s.INT&&(J=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGB8UI),O===s.UNSIGNED_SHORT&&(J=s.RGB16UI),O===s.UNSIGNED_INT&&(J=s.RGB32UI),O===s.BYTE&&(J=s.RGB8I),O===s.SHORT&&(J=s.RGB16I),O===s.INT&&(J=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),O===s.UNSIGNED_INT&&(J=s.RGBA32UI),O===s.BYTE&&(J=s.RGBA8I),O===s.SHORT&&(J=s.RGBA16I),O===s.INT&&(J=s.RGBA32I)),y===s.RGB&&(O===s.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),O===s.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),y===s.RGBA){const $=ct?Hr:le.getTransfer(Z);O===s.FLOAT&&(J=s.RGBA32F),O===s.HALF_FLOAT&&(J=s.RGBA16F),O===s.UNSIGNED_BYTE&&(J=$===_e?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),O===s.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function A(w,y){let O;return w?y===null||y===Dn||y===er?O=s.DEPTH24_STENCIL8:y===fn?O=s.DEPTH32F_STENCIL8:y===tr&&(O=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Dn||y===er?O=s.DEPTH_COMPONENT24:y===fn?O=s.DEPTH_COMPONENT32F:y===tr&&(O=s.DEPTH_COMPONENT16),O}function T(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Oe&&w.minFilter!==Ce?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){const y=w.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(w){const y=w.target;y.removeEventListener("dispose",v),I(y)}function E(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,k=f.get(O);if(k){const Z=k[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(k).length===0&&f.delete(O)}n.remove(w)}function P(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const O=w.source,k=f.get(O);delete k[y.__cacheKey],a.memory.textures--}function I(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let Z=0;Z<y.__webglFramebuffer[k].length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[k][Z]);else s.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)s.deleteFramebuffer(y.__webglFramebuffer[k]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let k=0,Z=O.length;k<Z;k++){const ct=n.get(O[k]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(w)}let N=0;function W(){N=0}function Y(){return N}function B(w){N=w}function q(){const w=N;return w>=i.maxTextures&&mt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function z(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function j(w,y){const O=n.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const k=w.image;if(k===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function at(w,y){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Bt(O,w,y);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function ut(w,y){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Bt(O,w,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function ht(w,y){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Yt(O,w,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const At={[js]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[Qs]:s.MIRRORED_REPEAT},qt={[Oe]:s.NEAREST,[il]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[Ce]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},jt={[gf]:s.NEVER,[Mf]:s.ALWAYS,[_f]:s.LESS,[ul]:s.LEQUAL,[xf]:s.EQUAL,[dl]:s.GEQUAL,[vf]:s.GREATER,[yf]:s.NOTEQUAL};function ce(w,y){if(y.type===fn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ce||y.magFilter===Ys||y.magFilter===ns||y.magFilter===Wn||y.minFilter===Ce||y.minFilter===Ys||y.minFilter===ns||y.minFilter===Wn)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,At[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,At[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,At[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,qt[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,qt[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,jt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Oe||y.minFilter!==ns&&y.minFilter!==Wn||y.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));const k=y.source;let Z=f.get(k);Z===void 0&&(Z={},f.set(k,Z));const ct=z(y);if(ct!==w.__cacheKey){Z[ct]===void 0&&(Z[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ct].usedTimes++;const dt=Z[w.__cacheKey];dt!==void 0&&(Z[w.__cacheKey].usedTimes--,dt.usedTimes===0&&P(y)),w.__cacheKey=ct,w.__webglTexture=Z[ct].texture}return O}function ft(w,y,O){return Math.floor(Math.floor(w/O)/y)}function ot(w,y,O,k){const ct=w.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,O,k,y.data);else{ct.sort((Ot,yt)=>Ot.start-yt.start);let dt=0;for(let Ot=1;Ot<ct.length;Ot++){const yt=ct[dt],xt=ct[Ot],Vt=yt.start+yt.count,Wt=ft(xt.start,y.width,4),ee=ft(yt.start,y.width,4);xt.start<=Vt+1&&Wt===ee&&ft(xt.start+xt.count-1,y.width,4)===Wt?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++dt,ct[dt]=xt)}ct.length=dt+1;const J=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ot=0,yt=ct.length;Ot<yt;Ot++){const xt=ct[Ot],Vt=Math.floor(xt.start/4),Wt=Math.ceil(xt.count/4),ee=Vt%y.width,D=Math.floor(Vt/y.width),pt=Wt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,ee,D,pt,Q,O,k,y.data)}w.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function Bt(w,y,O){let k=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=s.TEXTURE_3D);const Z=K(w,y),ct=y.source;e.bindTexture(k,w.__webglTexture,s.TEXTURE0+O);const dt=n.get(ct);if(ct.version!==dt.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Q=le.getPrimaries(le.workingColorSpace),vt=y.colorSpace===fi?null:le.getPrimaries(y.colorSpace),bt=y.colorSpace===fi||Q===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let $=m(y.image,!1,i.maxTextureSize);$=ge(y,$);const gt=r.convert(y.format,y.colorSpace),Ot=r.convert(y.type);let yt=x(y.internalFormat,gt,Ot,y.normalized,y.colorSpace,y.isVideoTexture);ce(k,y);let xt;const Vt=y.mipmaps,Wt=y.isVideoTexture!==!0,ee=dt.__version===void 0||Z===!0,D=ct.dataReady,pt=T(y,$);if(y.isDepthTexture)yt=A(y.format===Pi,y.type),ee&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,yt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,yt,$.width,$.height,0,gt,Ot,null));else if(y.isDataTexture)if(Vt.length>0){Wt&&ee&&e.texStorage2D(s.TEXTURE_2D,pt,yt,Vt[0].width,Vt[0].height);for(let Q=0,vt=Vt.length;Q<vt;Q++)xt=Vt[Q],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,xt.width,xt.height,0,gt,Ot,xt.data);y.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(s.TEXTURE_2D,pt,yt,$.width,$.height),D&&ot(y,$,gt,Ot)):e.texImage2D(s.TEXTURE_2D,0,yt,$.width,$.height,0,gt,Ot,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,yt,Vt[0].width,Vt[0].height,$.depth);for(let Q=0,vt=Vt.length;Q<vt;Q++)if(xt=Vt[Q],y.format!==an)if(gt!==null)if(Wt){if(D)if(y.layerUpdates.size>0){const bt=Qc(xt.width,xt.height,y.format,y.type);for(const nt of y.layerUpdates){const Nt=xt.data.subarray(nt*bt/xt.data.BYTES_PER_ELEMENT,(nt+1)*bt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,nt,xt.width,xt.height,1,gt,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,xt.width,xt.height,$.depth,gt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,yt,xt.width,xt.height,$.depth,0,xt.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,xt.width,xt.height,$.depth,gt,Ot,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,yt,xt.width,xt.height,$.depth,0,gt,Ot,xt.data)}else{Wt&&ee&&e.texStorage2D(s.TEXTURE_2D,pt,yt,Vt[0].width,Vt[0].height);for(let Q=0,vt=Vt.length;Q<vt;Q++)xt=Vt[Q],y.format!==an?gt!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,yt,xt.width,xt.height,0,xt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,xt.width,xt.height,gt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,xt.width,xt.height,0,gt,Ot,xt.data)}else if(y.isDataArrayTexture)if(Wt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,yt,$.width,$.height,$.depth),D)if(y.layerUpdates.size>0){const Q=Qc($.width,$.height,y.format,y.type);for(const vt of y.layerUpdates){const bt=$.data.subarray(vt*Q/$.data.BYTES_PER_ELEMENT,(vt+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,$.width,$.height,1,gt,Ot,bt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,gt,Ot,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,$.width,$.height,$.depth,0,gt,Ot,$.data);else if(y.isData3DTexture)Wt?(ee&&e.texStorage3D(s.TEXTURE_3D,pt,yt,$.width,$.height,$.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,gt,Ot,$.data)):e.texImage3D(s.TEXTURE_3D,0,yt,$.width,$.height,$.depth,0,gt,Ot,$.data);else if(y.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(s.TEXTURE_2D,pt,yt,$.width,$.height);else{let Q=$.width,vt=$.height;for(let bt=0;bt<pt;bt++)e.texImage2D(s.TEXTURE_2D,bt,yt,Q,vt,0,gt,Ot,null),Q>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),d.add(y),Q.onpaint=vt=>{const bt=vt.changedElements;for(const nt of d)bt.includes(nt.image)&&(nt.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{const bt=s.RGBA,nt=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,nt,Nt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(Wt&&ee){const Q=ne(Vt[0]);e.texStorage2D(s.TEXTURE_2D,pt,yt,Q.width,Q.height)}for(let Q=0,vt=Vt.length;Q<vt;Q++)xt=Vt[Q],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt,Ot,xt):e.texImage2D(s.TEXTURE_2D,Q,yt,gt,Ot,xt);y.generateMipmaps=!1}else if(Wt){if(ee){const Q=ne($);e.texStorage2D(s.TEXTURE_2D,pt,yt,Q.width,Q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ot,$)}else e.texImage2D(s.TEXTURE_2D,0,yt,gt,Ot,$);g(y)&&M(k),dt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Yt(w,y,O){if(y.image.length!==6)return;const k=K(w,y),Z=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);const ct=n.get(Z);if(Z.version!==ct.__version||k===!0){e.activeTexture(s.TEXTURE0+O);const dt=le.getPrimaries(le.workingColorSpace),J=y.colorSpace===fi?null:le.getPrimaries(y.colorSpace),$=y.colorSpace===fi||dt===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const gt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ot=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let nt=0;nt<6;nt++)!gt&&!Ot?yt[nt]=m(y.image[nt],!0,i.maxCubemapSize):yt[nt]=Ot?y.image[nt].image:y.image[nt],yt[nt]=ge(y,yt[nt]);const xt=yt[0],Vt=r.convert(y.format,y.colorSpace),Wt=r.convert(y.type),ee=x(y.internalFormat,Vt,Wt,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,pt=ct.__version===void 0||k===!0,Q=Z.dataReady;let vt=T(y,xt);ce(s.TEXTURE_CUBE_MAP,y);let bt;if(gt){D&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ee,xt.width,xt.height);for(let nt=0;nt<6;nt++){bt=yt[nt].mipmaps;for(let Nt=0;Nt<bt.length;Nt++){const Lt=bt[Nt];y.format!==an?Vt!==null?D?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Lt.width,Lt.height,Vt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,ee,Lt.width,Lt.height,0,Lt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Lt.width,Lt.height,Vt,Wt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,ee,Lt.width,Lt.height,0,Vt,Wt,Lt.data)}}}else{if(bt=y.mipmaps,D&&pt){bt.length>0&&vt++;const nt=ne(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ee,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Ot){D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,yt[nt].width,yt[nt].height,Vt,Wt,yt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,yt[nt].width,yt[nt].height,0,Vt,Wt,yt[nt].data);for(let Nt=0;Nt<bt.length;Nt++){const Re=bt[Nt].image[nt].image;D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Re.width,Re.height,Vt,Wt,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,ee,Re.width,Re.height,0,Vt,Wt,Re.data)}}else{D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Vt,Wt,yt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,Vt,Wt,yt[nt]);for(let Nt=0;Nt<bt.length;Nt++){const Lt=bt[Nt];D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Vt,Wt,Lt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,ee,Vt,Wt,Lt.image[nt])}}}g(y)&&M(s.TEXTURE_CUBE_MAP),ct.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ht(w,y,O,k,Z,ct){const dt=r.convert(O.format,O.colorSpace),J=r.convert(O.type),$=x(O.internalFormat,dt,J,O.normalized,O.colorSpace),gt=n.get(y),Ot=n.get(O);if(Ot.__renderTarget=y,!gt.__hasExternalTextures){const yt=Math.max(1,y.width>>ct),xt=Math.max(1,y.height>>ct);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ct,$,yt,xt,y.depth,0,dt,J,null):e.texImage2D(Z,ct,$,yt,xt,0,dt,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),$t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,Z,Ot.__webglTexture,0,Xt(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,Z,Ot.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(w,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const k=y.depthTexture,Z=k&&k.isDepthTexture?k.type:null,ct=A(y.stencilBuffer,Z),dt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),ct,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),ct,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ct,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,w)}else{const k=y.textures;for(let Z=0;Z<k.length;Z++){const ct=k[Z],dt=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),$=x(ct.internalFormat,dt,J,ct.normalized,ct.colorSpace);$t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),$,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(w,y,O){const k=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(s.TEXTURE_CUBE_MAP,y.depthTexture);const gt=r.convert(y.depthTexture.format),Ot=r.convert(y.depthTexture.type);let yt;y.depthTexture.format===ni?yt=s.DEPTH_COMPONENT24:y.depthTexture.format===Pi&&(yt=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,y.width,y.height,0,gt,Ot,null)}}else j(y.depthTexture,0);const ct=Z.__webglTexture,dt=Xt(y),J=k?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,$=y.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ni)$t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,$,J,ct,0);else if(y.depthTexture.format===Pi)$t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,$,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=k}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Zt(y.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?Zt(y.__webglFramebuffer[0],w,0):Zt(y.__webglFramebuffer,w,0)}else if(O){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=s.createRenderbuffer(),fe(y.__webglDepthbuffer[k],w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ct)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),fe(y.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(w,y,O){const k=n.get(w);y!==void 0&&Ht(k.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&et(w)}function rt(w){const y=w.texture,O=n.get(w),k=n.get(y);w.addEventListener("dispose",v);const Z=w.textures,ct=w.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=y.version,a.memory.textures++),ct){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let $=0;$<y.mipmaps.length;$++)O.__webglFramebuffer[J][$]=s.createFramebuffer()}else O.__webglFramebuffer[J]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[J]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(dt)for(let J=0,$=Z.length;J<$;J++){const gt=n.get(Z[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&$t(w)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const $=Z[J];O.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const gt=r.convert($.format,$.colorSpace),Ot=r.convert($.type),yt=x($.internalFormat,gt,Ot,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),xt=Xt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,yt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,O.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),ce(s.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Ht(O.__webglFramebuffer[J][$],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else Ht(O.__webglFramebuffer[J],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(y)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,$=Z.length;J<$;J++){const gt=Z[J],Ot=n.get(gt);let yt=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),ce(yt,gt),Ht(O.__webglFramebuffer,w,gt,s.COLOR_ATTACHMENT0+J,yt,0),g(gt)&&M(yt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),ce(J,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Ht(O.__webglFramebuffer[$],w,y,s.COLOR_ATTACHMENT0,J,$);else Ht(O.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,J,0);g(y)&&M(J),e.unbindTexture()}w.depthBuffer&&et(w)}function Mt(w){const y=w.textures;for(let O=0,k=y.length;O<k;O++){const Z=y[O];if(g(Z)){const ct=S(w),dt=n.get(Z).__webglTexture;e.bindTexture(ct,dt),M(ct),e.unbindTexture()}}}const _t=[],kt=[];function Dt(w){if(w.samples>0){if($t(w)===!1){const y=w.textures,O=w.width,k=w.height;let Z=s.COLOR_BUFFER_BIT;const ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=n.get(w),J=y.length>1;if(J)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);const $=w.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);const Ot=n.get(y[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,O,k,0,0,O,k,Z,s.NEAREST),l===!0&&(_t.length=0,kt.length=0,_t.push(s.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push(ct),kt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);const Ot=n.get(y[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Xt(w){return Math.min(i.maxSamples,w.samples)}function $t(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function ge(w,y){const O=w.colorSpace,k=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==hs&&O!==fi&&(le.getTransfer(O)===_e?(k!==an||Z!==yn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",O)),y}function ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=at,this.setTexture3D=ut,this.setTextureCube=ht,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dp(s,t){function e(n,i=fi){let r;const a=le.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return s.BYTE;if(n===uh)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===Dn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===ei)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===an)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===ol)return s.RED;if(n===ta)return s.RED_INTEGER;if(n===Fi)return s.RG;if(n===ll)return s.RG_INTEGER;if(n===cl)return s.RGBA_INTEGER;if(n===Zs||n===Pr||n===Js||n===Ks)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===So||n===bo||n===To||n===Eo||n===Or||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===So)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Br||n===zr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===kr||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eS=`
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

}`;class nS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:tS,fragmentShader:eS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iS extends qn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new nS,g={},M=e.getContextAttributes();let S=null,x=null;const A=[],T=[],R=new tt;let v=null;const E=new We;E.viewport=new xe;const P=new We;P.viewport=new xe;const I=[E,P],N=new mp;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=A[K];return ft===void 0&&(ft=new ro,A[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=A[K];return ft===void 0&&(ft=new ro,A[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=A[K];return ft===void 0&&(ft=new ro,A[K]=ft),ft.getHandSpace()};function B(K){const ft=T.indexOf(K.inputSource);if(ft===-1)return;const ot=A[ft];ot!==void 0&&(ot.update(K.inputSource,K.frame,c||a),ot.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",z);for(let K=0;K<A.length;K++){const ft=T[K];ft!==null&&(T[K]=null,A[K].disconnect(ft))}W=null,Y=null,m.reset();for(const K in g)delete g[K];t.setRenderTarget(S),f=null,u=null,d=null,i=null,x=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Bt=null,Yt=null;M.depth&&(Yt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=M.stencil?Pi:ni,Bt=M.stencil?er:Dn);const Ht={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new An(u.textureWidth,u.textureHeight,{format:an,type:yn,depthTexture:new ps(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new An(f.framebufferWidth,f.framebufferHeight,{format:an,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(K){for(let ft=0;ft<K.removed.length;ft++){const ot=K.removed[ft],Bt=T.indexOf(ot);Bt>=0&&(T[Bt]=null,A[Bt].disconnect(ot))}for(let ft=0;ft<K.added.length;ft++){const ot=K.added[ft];let Bt=T.indexOf(ot);if(Bt===-1){for(let Ht=0;Ht<A.length;Ht++)if(Ht>=T.length){T.push(ot),Bt=Ht;break}else if(T[Ht]===null){T[Ht]=ot,Bt=Ht;break}if(Bt===-1)break}const Yt=A[Bt];Yt&&Yt.connect(ot)}}const j=new C,at=new C;function ut(K,ft,ot){j.setFromMatrixPosition(ft.matrixWorld),at.setFromMatrixPosition(ot.matrixWorld);const Bt=j.distanceTo(at),Yt=ft.projectionMatrix.elements,Ht=ot.projectionMatrix.elements,fe=Yt[14]/(Yt[10]-1),Zt=Yt[14]/(Yt[10]+1),et=(Yt[9]+1)/Yt[5],st=(Yt[9]-1)/Yt[5],rt=(Yt[8]-1)/Yt[0],Mt=(Ht[8]+1)/Ht[0],_t=fe*rt,kt=fe*Mt,Dt=Bt/(-rt+Mt),Xt=Dt*-rt;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xt),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Yt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const $t=fe+Dt,L=Zt+Dt,ge=_t-Xt,ne=kt+(Bt-Xt),w=et*Zt/L*$t,y=st*Zt/L*$t;K.projectionMatrix.makePerspective(ge,ne,w,y,$t,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ft=K.near,ot=K.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),N.near=P.near=E.near=ft,N.far=P.far=E.far=ot,(W!==N.near||Y!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,Y=N.far),N.layers.mask=K.layers.mask|6,E.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const Bt=K.parent,Yt=N.cameras;ht(N,Bt);for(let Ht=0;Ht<Yt.length;Ht++)ht(Yt[Ht],Bt);Yt.length===2?ut(N,E,P):N.projectionMatrix.copy(E.projectionMatrix),At(K,N,Bt)};function At(K,ft,ot){ot===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(ot.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return g[K]};let qt=null;function jt(K,ft){if(h=ft.getViewerPose(c||a),p=ft,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Bt=!1;ot.length!==N.cameras.length&&(N.cameras.length=0,Bt=!0);for(let Zt=0;Zt<ot.length;Zt++){const et=ot[Zt];let st=null;if(f!==null)st=f.getViewport(et);else{const Mt=d.getViewSubImage(u,et);st=Mt.viewport,Zt===0&&(t.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(x))}let rt=I[Zt];rt===void 0&&(rt=new We,rt.layers.enable(Zt),rt.viewport=new xe,I[Zt]=rt),rt.matrix.fromArray(et.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(et.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),Zt===0&&(N.matrix.copy(rt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Bt===!0&&N.cameras.push(rt)}const Yt=i.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Zt=d.getDepthInformation(ot[0]);Zt&&Zt.isValid&&Zt.texture&&m.init(Zt,i.renderState)}if(Yt&&Yt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Zt=0;Zt<ot.length;Zt++){const et=ot[Zt].camera;if(et){let st=g[et];st||(st=new Th,g[et]=st);const rt=d.getCameraImage(et);st.sourceTexture=rt}}}}for(let ot=0;ot<A.length;ot++){const Bt=T[ot],Yt=A[ot];Bt!==null&&Yt!==void 0&&Yt.update(Bt,ft,c||a)}qt&&qt(K,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),p=null}const ce=new wp;ce.setAnimationLoop(jt),this.setAnimationLoop=function(K){qt=K},this.dispose=function(){}}}const sS=new Kt,Np=new Qt;Np.set(-1,0,0,0,1,0,0,0,1);function rS(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Zf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Np),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aS(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){const T=A.program;n.uniformBlockBinding(x,T)}function c(x,A){let T=i[x.id];T===void 0&&(m(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",M));const R=A.program;n.updateUBOMapping(x,R);const v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const A=d();x.__bindingPointIndex=A;const T=s.createBuffer(),R=x.__size,v=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const A=i[x.id],T=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let v=0,E=T.length;v<E;v++){const P=T[v];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],v,I,R);else f(P,v,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,A,T,R){if(_(x,A,T,R)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){const N=E[I],W=g(N);p(N,x.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,x.__data)}}function p(x,A,T){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,T)}function _(x,A,T,R){const v=x.value,E=A+"_"+T;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const P=R[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(x){const A=x.uniforms;let T=0;const R=16;for(let E=0,P=A.length;E<P;E++){const I=Array.isArray(A[E])?A[E]:[A[E]];for(let N=0,W=I.length;N<W;N++){const Y=I[N],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,z=B.length;q<z;q++){const j=B[q],at=g(j),ut=T%R,ht=ut%at.boundary,At=ut+ht;T+=ht,At!==0&&R-At<at.storage&&(T+=R-At),Y.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=at.storage}}}const v=T%R;return v>0&&(T+=R-v),x.__size=T,x.__cache={},this}function g(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",x),A}function M(x){const A=x.target;A.removeEventListener("dispose",M);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function S(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:S}}const oS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function lS(){return Kn===null&&(Kn=new Ln(oS,16,16,Fi,ei),Kn.name="DFG_LUT",Kn.minFilter=Ce,Kn.magFilter=Ce,Kn.wrapS=dn,Kn.wrapT=dn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Up{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([cl,ll,ta]),g=new Set([yn,Dn,tr,er,rl,al]),M=new Uint32Array(4),S=new Int32Array(4),x=new C;let A=null,T=null;const R=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,N=null,W=null,Y=null,B=null;this._outputColorSpace=rn;let q=0,z=0,j=null,at=-1,ut=null;const ht=new xe,At=new xe;let qt=null;const jt=new Ct(0);let ce=0,K=e.width,ft=e.height,ot=1,Bt=null,Yt=null;const Ht=new xe(0,0,K,ft),fe=new xe(0,0,K,ft);let Zt=!1;const et=new fs;let st=!1,rt=!1;const Mt=new Kt,_t=new C,kt=new xe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function $t(){return j===null?ot:1}let L=n;function ge(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${el}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",wn,!1),L===null){const F="webgl2";if(L=ge(F,b),L===null)throw ge(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ft("WebGLRenderer: "+b.message),b}let ne,w,y,O,k,Z,ct,dt,J,$,gt,Ot,yt,xt,Vt,Wt,ee,D,pt,Q,vt,bt,nt;function Nt(){ne=new cy(L),ne.init(),vt=new Dp(L,ne),w=new ey(L,ne,t,vt),y=new jM(L,ne),w.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),W=L.createFramebuffer(),Y=L.createFramebuffer(),B=L.createFramebuffer(),O=new dy(L),k=new BM,Z=new QM(L,ne,y,k,w,vt,O),ct=new ly(P),dt=new g0(L),bt=new Qv(L,dt),J=new hy(L,dt,O,bt),$=new py(L,J,dt,bt,O),D=new fy(L,w,Z),Vt=new ny(k),gt=new OM(P,ct,ne,w,bt,Vt),Ot=new rS(P,k),yt=new kM,xt=new qM(ne),ee=new jv(P,ct,y,$,p,l),Wt=new $M(P,$,w),nt=new aS(L,O,w,y),pt=new ty(L,ne,O),Q=new uy(L,ne,O),O.programs=gt.programs,P.capabilities=w,P.extensions=ne,P.properties=k,P.renderLists=yt,P.shadowMap=Wt,P.state=y,P.info=O}Nt(),_!==yn&&(E=new gy(_,e.width,e.height,o,i,r));const Lt=new iS(P,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(b){b!==void 0&&(ot=b,this.setSize(K,ft,!1))},this.getSize=function(b){return b.set(K,ft)},this.setSize=function(b,F,X=!0){if(Lt.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ft=F,e.width=Math.floor(b*ot),e.height=Math.floor(F*ot),X===!0&&(e.style.width=b+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(K*ot,ft*ot).floor()},this.setDrawingBufferSize=function(b,F,X){K=b,ft=F,ot=X,e.width=Math.floor(b*X),e.height=Math.floor(F*X),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===yn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ht)},this.getViewport=function(b){return b.copy(Ht)},this.setViewport=function(b,F,X,V){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,F,X,V),y.viewport(ht.copy(Ht).multiplyScalar(ot).round())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,F,X,V){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,F,X,V),y.scissor(At.copy(fe).multiplyScalar(ot).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){y.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){Bt=b},this.setTransparentSort=function(b){Yt=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,X=!0){let V=0;if(b){let G=!1;if(j!==null){const Et=j.texture.format;G=m.has(Et)}if(G){const Et=j.texture.type,It=g.has(Et),Tt=ee.getClearColor(),Ut=ee.getClearAlpha(),zt=Tt.r,ie=Tt.g,oe=Tt.b;It?(M[0]=zt,M[1]=ie,M[2]=oe,M[3]=Ut,L.clearBufferuiv(L.COLOR,0,M)):(S[0]=zt,S[1]=ie,S[2]=oe,S[3]=Ut,L.clearBufferiv(L.COLOR,0,S))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",wn,!1),ee.dispose(),yt.dispose(),xt.dispose(),k.dispose(),ct.dispose(),$.dispose(),bt.dispose(),nt.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",he),Lt.removeEventListener("sessionend",pe),Ae.stop()};function Re(b){b.preventDefault(),qr("WebGLRenderer: Context Lost."),I=!0}function ve(){qr("WebGLRenderer: Context Restored."),I=!1;const b=O.autoReset,F=Wt.enabled,X=Wt.autoUpdate,V=Wt.needsUpdate,G=Wt.type;Nt(),O.autoReset=b,Wt.enabled=F,Wt.autoUpdate=X,Wt.needsUpdate=V,Wt.type=G}function wn(b){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function H(b){const F=b.target;F.removeEventListener("dispose",H),U(F)}function U(b){it(b),k.remove(b)}function it(b){const F=k.get(b).programs;F!==void 0&&(F.forEach(function(X){gt.releaseProgram(X)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,X,V,G,Et){F===null&&(F=Dt);const It=G.isMesh&&G.matrixWorld.determinantAffine()<0,Tt=Bn(b,F,X,V,G);y.setMaterial(V,It);let Ut=X.index,zt=1;if(V.wireframe===!0){if(Ut=J.getWireframeAttribute(X),Ut===void 0)return;zt=2}const ie=X.drawRange,oe=X.attributes.position;let Gt=ie.start*zt,Se=(ie.start+ie.count)*zt;Et!==null&&(Gt=Math.max(Gt,Et.start*zt),Se=Math.min(Se,(Et.start+Et.count)*zt)),Ut!==null?(Gt=Math.max(Gt,0),Se=Math.min(Se,Ut.count)):oe!=null&&(Gt=Math.max(Gt,0),Se=Math.min(Se,oe.count));const Be=Se-Gt;if(Be<0||Be===1/0)return;bt.setup(G,V,Tt,X,Ut);let Ue,Te=pt;if(Ut!==null&&(Ue=dt.get(Ut),Te=Q,Te.setIndex(Ue)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*$t()),Te.setMode(L.LINES)):Te.setMode(L.TRIANGLES);else if(G.isLine){let tn=V.linewidth;tn===void 0&&(tn=1),y.setLineWidth(tn*$t()),G.isLineSegments?Te.setMode(L.LINES):G.isLineLoop?Te.setMode(L.LINE_LOOP):Te.setMode(L.LINE_STRIP)}else G.isPoints?Te.setMode(L.POINTS):G.isSprite&&Te.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tn=G._multiDrawStarts,Rt=G._multiDrawCounts,Mn=G._multiDrawCount,me=Ut?dt.get(Ut).bytesPerElement:1,Rn=k.get(V).currentProgram.getUniforms();for(let Zn=0;Zn<Mn;Zn++)Rn.setValue(L,"_gl_DrawID",Zn),Te.render(tn[Zn]/me,Rt[Zn])}else if(G.isInstancedMesh)Te.renderInstances(Gt,Be,G.count);else if(X.isInstancedBufferGeometry){const tn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,tn);Te.renderInstances(Gt,Be,Rt)}else Te.render(Gt,Be)};function lt(b,F,X){b.transparent===!0&&b.side===Hn&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,ye(b,F,X),b.side=Qn,b.needsUpdate=!0,ye(b,F,X),b.side=Hn):ye(b,F,X)}this.compile=function(b,F,X=null){X===null&&(X=b),T=xt.get(X),T.init(F),v.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const V=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Et=G.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){const Tt=Et[It];lt(Tt,X,G),V.add(Tt)}else lt(Et,X,G),V.add(Et)}),T=v.pop(),V},this.compileAsync=function(b,F,X=null){const V=this.compile(b,F,X);return new Promise(G=>{function Et(){if(V.forEach(function(It){k.get(It).currentProgram.isReady()&&V.delete(It)}),V.size===0){G(b);return}setTimeout(Et,10)}ne.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let wt=null;function ae(b){wt&&wt(b)}function he(){Ae.stop()}function pe(){Ae.start()}const Ae=new wp;Ae.setAnimationLoop(ae),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(b){wt=b,Lt.setAnimationLoop(b),b===null?Ae.stop():Ae.start()},Lt.addEventListener("sessionstart",he),Lt.addEventListener("sessionend",pe),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,F);const X=Lt.enabled===!0&&Lt.isPresenting===!0,V=E!==null&&(j===null||X)&&E.begin(P,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(F),F=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,F,j),T=xt.get(b,v.length),T.init(F),T.state.textureUnits=Z.getTextureUnits(),v.push(T),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(Mt,Tn,F.reversedDepth),rt=this.localClippingEnabled,st=Vt.init(this.clippingPlanes,rt),A=yt.get(b,R.length),A.init(),R.push(A),Lt.enabled===!0&&Lt.isPresenting===!0){const It=P.xr.getDepthSensingMesh();It!==null&&je(It,F,-1/0,P.sortObjects)}je(b,F,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Bt,Yt,F.reversedDepth),Xt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Xt&&ee.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Vt.beginShadows();const G=T.state.shadowsArray;if(Wt.render(G,b,F),st===!0&&Vt.endShadows(),(V&&E.hasRenderPass())===!1){const It=A.opaque,Tt=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Ut=F.cameras;if(Tt.length>0)for(let zt=0,ie=Ut.length;zt<ie;zt++){const oe=Ut[zt];Cn(It,Tt,b,oe)}Xt&&ee.render(b);for(let zt=0,ie=Ut.length;zt<ie;zt++){const oe=Ut[zt];gn(A,b,oe,oe.viewport)}}else Tt.length>0&&Cn(It,Tt,b,F),Xt&&ee.render(b),gn(A,b,F)}j!==null&&z===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),V&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,F),bt.resetDefaultState(),at=-1,ut=null,v.pop(),v.length>0?(T=v[v.length-1],Z.setTextureUnits(T.state.textureUnits),st===!0&&Vt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,N!==null&&N.renderEnd()};function je(b,F,X,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){V&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const It=$.update(b),Tt=b.material;Tt.visible&&A.push(b,It,Tt,X,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const It=$.update(b),Tt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),kt.copy(It.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(Tt)){const Ut=It.groups;for(let zt=0,ie=Ut.length;zt<ie;zt++){const oe=Ut[zt],Gt=Tt[oe.materialIndex];Gt&&Gt.visible&&A.push(b,It,Gt,X,kt.z,oe)}}else Tt.visible&&A.push(b,It,Tt,X,kt.z,null)}}const Et=b.children;for(let It=0,Tt=Et.length;It<Tt;It++)je(Et[It],F,X,V)}function gn(b,F,X,V){const{opaque:G,transmissive:Et,transparent:It}=b;T.setupLightsView(X),st===!0&&Vt.setGlobalState(P.clippingPlanes,X),V&&y.viewport(ht.copy(V)),G.length>0&&Ge(G,F,X),Et.length>0&&Ge(Et,F,X),It.length>0&&Ge(It,F,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Cn(b,F,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Gt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new An(1,1,{generateMipmaps:!0,type:Gt?ei:yn,minFilter:Wn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Et=T.state.transmissionRenderTarget[V.id],It=V.viewport||ht;Et.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);const Tt=P.getRenderTarget(),Ut=P.getActiveCubeFace(),zt=P.getActiveMipmapLevel();P.setRenderTarget(Et),P.getClearColor(jt),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),Xt&&ee.render(X);const ie=P.toneMapping;P.toneMapping=Xn;const oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),st===!0&&Vt.setGlobalState(P.clippingPlanes,V),Ge(b,X,V),Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Se=0,Be=F.length;Se<Be;Se++){const Ue=F[Se],{object:Te,geometry:tn,material:Rt,group:Mn}=Ue;if(Rt.side===Hn&&Te.layers.test(V.layers)){const me=Rt.side;Rt.side=pn,Rt.needsUpdate=!0,Ne(Te,X,V,tn,Rt,Mn),Rt.side=me,Rt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et))}P.setRenderTarget(Tt,Ut,zt),P.setClearColor(jt,ce),oe!==void 0&&(V.viewport=oe),P.toneMapping=ie}function Ge(b,F,X){const V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Et=b.length;G<Et;G++){const It=b[G],{object:Tt,geometry:Ut,group:zt}=It;let ie=It.material;ie.allowOverride===!0&&V!==null&&(ie=V),Tt.layers.test(X.layers)&&Ne(Tt,F,X,Ut,ie,zt)}}function Ne(b,F,X,V,G,Et){b.onBeforeRender(P,F,X,V,G,Et),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,F,X,V,b,Et),G.transparent===!0&&G.side===Hn&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,P.renderBufferDirect(X,F,V,G,b,Et),G.side=Qn,G.needsUpdate=!0,P.renderBufferDirect(X,F,V,G,b,Et),G.side=Hn):P.renderBufferDirect(X,F,V,G,b,Et),b.onAfterRender(P,F,X,V,G,Et)}function ye(b,F,X){F.isScene!==!0&&(F=Dt);const V=k.get(b),G=T.state.lights,Et=T.state.shadowsArray,It=G.state.version,Tt=gt.getParameters(b,G.state,Et,F,X,T.state.lightProbeGridArray),Ut=gt.getProgramCacheKey(Tt);let zt=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=ct.get(b.envMap||V.environment,ie),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",H),zt=new Map,V.programs=zt);let oe=zt.get(Ut);if(oe!==void 0){if(V.currentProgram===oe&&V.lightsStateVersion===It)return ri(b,Tt),oe}else Tt.uniforms=gt.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,X,Tt),b.onBeforeCompile(Tt,P),oe=gt.acquireProgram(Tt,Ut),zt.set(Ut,oe),V.uniforms=Tt.uniforms;const Gt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),ri(b,Tt),V.needsLights=Bp(b),V.lightsStateVersion=It,V.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=oe,V.uniformsList=null,oe}function Qe(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=oo.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ri(b,F){const X=k.get(b);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function xi(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let X=0,V=b.length;X<V;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function Bn(b,F,X,V,G){F.isScene!==!0&&(F=Dt),Z.resetTextureUnits();const Et=F.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Tt=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:le.workingColorSpace,Ut=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,zt=ct.get(V.envMap||It,Ut),ie=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,oe=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!X.morphAttributes.position,Se=!!X.morphAttributes.normal,Be=!!X.morphAttributes.color;let Ue=Xn;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=P.toneMapping);const Te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tn=Te!==void 0?Te.length:0,Rt=k.get(V),Mn=T.state.lights;if(st===!0&&(rt===!0||b!==ut)){const we=b===ut&&V.id===at;Vt.setState(V,b,we)}let me=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Mn.state.version||Rt.outputColorSpace!==Tt||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==zt||V.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Vt.numPlanes||Rt.numIntersection!==Vt.numIntersection)||Rt.vertexAlphas!==ie||Rt.vertexTangents!==oe||Rt.morphTargets!==Gt||Rt.morphNormals!==Se||Rt.morphColors!==Be||Rt.toneMapping!==Ue||Rt.morphTargetsCount!==tn||!!Rt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Rt.__version=V.version);let Rn=Rt.currentProgram;me===!0&&(Rn=ye(V,F,G),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Rn,Rt));let Zn=!1,vi=!1,Ms=!1;const Ee=Rn.getUniforms(),ze=Rt.uniforms;if(y.useProgram(Rn.program)&&(Zn=!0,vi=!0,Ms=!0),V.id!==at&&(at=V.id,vi=!0),Rt.needsLights){const we=xi(T.state.lightProbeGridArray,G);Rt.lightProbeGrid!==we&&(Rt.lightProbeGrid=we,vi=!0)}if(Zn||ut!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ee.setValue(L,"projectionMatrix",b.projectionMatrix),Ee.setValue(L,"viewMatrix",b.matrixWorldInverse);const Mi=Ee.map.cameraPosition;Mi!==void 0&&Mi.setValue(L,_t.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&Ee.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),ut!==b&&(ut=b,vi=!0,Ms=!0)}if(Rt.needsLights&&(Mn.state.directionalShadowMap.length>0&&Ee.setValue(L,"directionalShadowMap",Mn.state.directionalShadowMap,Z),Mn.state.spotShadowMap.length>0&&Ee.setValue(L,"spotShadowMap",Mn.state.spotShadowMap,Z),Mn.state.pointShadowMap.length>0&&Ee.setValue(L,"pointShadowMap",Mn.state.pointShadowMap,Z)),G.isSkinnedMesh){Ee.setOptional(L,G,"bindMatrix"),Ee.setOptional(L,G,"bindMatrixInverse");const we=G.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Ee.setValue(L,"boneTexture",we.boneTexture,Z))}G.isBatchedMesh&&(Ee.setOptional(L,G,"batchingTexture"),Ee.setValue(L,"batchingTexture",G._matricesTexture,Z),Ee.setOptional(L,G,"batchingIdTexture"),Ee.setValue(L,"batchingIdTexture",G._indirectTexture,Z),Ee.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(L,"batchingColorTexture",G._colorsTexture,Z));const yi=X.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&D.update(G,X,Rn),(vi||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,Ee.setValue(L,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(ze.envMapIntensity.value=F.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=lS()),vi){if(Ee.setValue(L,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&Op(ze,Ms),Et&&V.fog===!0&&Ot.refreshFogUniforms(ze,Et),Ot.refreshMaterialUniforms(ze,V,ot,ft,T.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){const we=Rt.lightProbeGrid;ze.probesSH.value=we.texture,ze.probesMin.value.copy(we.boundingBox.min),ze.probesMax.value.copy(we.boundingBox.max),ze.probesResolution.value.copy(we.resolution)}oo.upload(L,Qe(Rt),ze,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(oo.upload(L,Qe(Rt),ze,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(L,"center",G.center),Ee.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(L,"normalMatrix",G.normalMatrix),Ee.setValue(L,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const we=V.uniformsGroups;for(let Mi=0,Ss=we.length;Mi<Ss;Mi++){const tu=we[Mi];nt.update(tu,Rn),nt.bind(tu,Rn)}}return Rn}function Op(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Bp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,F,X){const V=k.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=F,k.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const X=k.get(b);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,X=0){j=b,q=F,z=X;let V=null,G=!1,Et=!1;if(b){const Tt=k.get(b);if(Tt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Tt.__webglFramebuffer),ht.copy(b.viewport),At.copy(b.scissor),qt=b.scissorTest,y.viewport(ht),y.scissor(At),y.setScissorTest(qt),at=-1;return}else if(Tt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(Tt.__hasExternalTextures)Z.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ie=b.depthTexture;if(Tt.__boundDepthTexture!==ie){if(ie!==null&&k.has(ie)&&(b.width!==ie.image.width||b.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Et=!0);const zt=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?V=zt[F][X]:V=zt[F],G=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?V=k.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[X]:V=zt,ht.copy(b.viewport),At.copy(b.scissor),qt=b.scissorTest}else ht.copy(Ht).multiplyScalar(ot).floor(),At.copy(fe).multiplyScalar(ot).floor(),qt=Zt;if(X!==0&&(V=W),y.bindFramebuffer(L.FRAMEBUFFER,V)&&y.drawBuffers(b,V),y.viewport(ht),y.scissor(At),y.setScissorTest(qt),G){const Tt=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,X)}else if(Et){const Tt=F;for(let Ut=0;Ut<b.textures.length;Ut++){const zt=k.get(b.textures[Ut]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,X,Tt)}}else if(b!==null&&X!==0){const Tt=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,X)}at=-1},this.readRenderTargetPixels=function(b,F,X,V,G,Et,It,Tt=0){if(!(b&&b.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){y.bindFramebuffer(L.FRAMEBUFFER,Ut);try{const zt=b.textures[Tt],ie=zt.format,oe=zt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt),!w.textureFormatReadable(ie)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(oe)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&X>=0&&X<=b.height-G&&L.readPixels(F,X,V,G,vt.convert(ie),vt.convert(oe),Et)}finally{const zt=j!==null?k.get(j).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,F,X,V,G,Et,It,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(F>=0&&F<=b.width-V&&X>=0&&X<=b.height-G){y.bindFramebuffer(L.FRAMEBUFFER,Ut);const zt=b.textures[Tt],ie=zt.format,oe=zt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt),!w.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Gt),L.bufferData(L.PIXEL_PACK_BUFFER,Et.byteLength,L.STREAM_READ),L.readPixels(F,X,V,G,vt.convert(ie),vt.convert(oe),0);const Se=j!==null?k.get(j).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Se);const Be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pm(L,Be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Et),L.deleteBuffer(Gt),L.deleteSync(Be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,X=0){const V=Math.pow(2,-X),G=Math.floor(b.image.width*V),Et=Math.floor(b.image.height*V),It=F!==null?F.x:0,Tt=F!==null?F.y:0;Z.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,It,Tt,G,Et),y.unbindTexture()},this.copyTextureToTexture=function(b,F,X=null,V=null,G=0,Et=0){let It,Tt,Ut,zt,ie,oe,Gt,Se,Be;const Ue=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(X!==null)It=X.max.x-X.min.x,Tt=X.max.y-X.min.y,Ut=X.isBox3?X.max.z-X.min.z:1,zt=X.min.x,ie=X.min.y,oe=X.isBox3?X.min.z:0;else{const ze=Math.pow(2,-G);It=Math.floor(Ue.width*ze),Tt=Math.floor(Ue.height*ze),b.isDataArrayTexture?Ut=Ue.depth:b.isData3DTexture?Ut=Math.floor(Ue.depth*ze):Ut=1,zt=0,ie=0,oe=0}V!==null?(Gt=V.x,Se=V.y,Be=V.z):(Gt=0,Se=0,Be=0);const Te=vt.convert(F.format),tn=vt.convert(F.type);let Rt;F.isData3DTexture?(Z.setTexture3D(F,0),Rt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Rt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Rt=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Mn=y.getParameter(L.UNPACK_ROW_LENGTH),me=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=y.getParameter(L.UNPACK_SKIP_PIXELS),Zn=y.getParameter(L.UNPACK_SKIP_ROWS),vi=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),y.pixelStorei(L.UNPACK_SKIP_ROWS,ie),y.pixelStorei(L.UNPACK_SKIP_IMAGES,oe);const Ms=b.isDataArrayTexture||b.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const ze=k.get(b),yi=k.get(F),we=k.get(ze.__renderTarget),Mi=k.get(yi.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,we.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ss=0;Ss<Ut;Ss++)Ms&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(b).__webglTexture,G,oe+Ss),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(F).__webglTexture,Et,Be+Ss)),L.blitFramebuffer(zt,ie,It,Tt,Gt,Se,It,Tt,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||k.has(b)){const ze=k.get(b),yi=k.get(F);y.bindFramebuffer(L.READ_FRAMEBUFFER,Y),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let we=0;we<Ut;we++)Ms?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,G,oe+we):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,G),Ee?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yi.__webglTexture,Et,Be+we):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yi.__webglTexture,Et),G!==0?L.blitFramebuffer(zt,ie,It,Tt,Gt,Se,It,Tt,L.COLOR_BUFFER_BIT,L.NEAREST):Ee?L.copyTexSubImage3D(Rt,Et,Gt,Se,Be+we,zt,ie,It,Tt):L.copyTexSubImage2D(Rt,Et,Gt,Se,zt,ie,It,Tt);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Rt,Et,Gt,Se,Be,It,Tt,Ut,Te,tn,Ue.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,Et,Gt,Se,Be,It,Tt,Ut,Te,Ue.data):L.texSubImage3D(Rt,Et,Gt,Se,Be,It,Tt,Ut,Te,tn,Ue):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Et,Gt,Se,It,Tt,Te,tn,Ue.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Et,Gt,Se,Ue.width,Ue.height,Te,Ue.data):L.texSubImage2D(L.TEXTURE_2D,Et,Gt,Se,It,Tt,Te,tn,Ue);y.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),y.pixelStorei(L.UNPACK_SKIP_ROWS,Zn),y.pixelStorei(L.UNPACK_SKIP_IMAGES,vi),Et===0&&F.generateMipmaps&&L.generateMipmap(Rt),y.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){q=0,z=0,j=null,y.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const cS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ah,AddEquation:Ri,AddOperation:af,AdditiveAnimationBlendMode:gh,AdditiveBlending:kc,AgXToneMapping:lh,AlphaFormat:ph,AlwaysCompare:Mf,AlwaysDepth:uo,AlwaysStencilFunc:Wc,AmbientLight:Wl,AnimationAction:vp,AnimationClip:ar,AnimationLoader:x_,AnimationMixer:ao,AnimationObjectGroup:V_,AnimationUtils:p_,ArcCurve:Of,ArrayCamera:mp,ArrowHelper:c0,AttachedBindMode:Hc,Audio:_p,AudioAnalyser:I_,AudioContext:Hh,AudioListener:C_,AudioLoader:T_,AxesHelper:Ep,BackSide:pn,BasicDepthPacking:pf,BasicShadowMap:kp,BatchedMesh:Df,BezierInterpolant:sp,Bone:Sl,BooleanKeyframeTrack:vs,Box2:Sp,Box3:Je,Box3Helper:o0,BoxGeometry:_s,BoxHelper:a0,BufferAttribute:Me,BufferGeometry:te,BufferGeometryLoader:up,ByteType:hh,Cache:$n,Camera:Gl,CameraHelper:r0,CanvasTexture:Dg,CapsuleGeometry:Al,CatmullRomCurve3:Bf,CineonToneMapping:rh,CircleGeometry:wl,ClampToEdgeWrapping:dn,Clock:Mp,Color:Ct,ColorKeyframeTrack:Oh,ColorManagement:le,Compatibility:Em,CompressedArrayTexture:Ig,CompressedCubeTexture:Lg,CompressedTexture:El,CompressedTextureLoader:ap,ConeGeometry:ra,ConstantAlphaFactor:nf,ConstantColorFactor:tf,Controls:Ap,CubeCamera:pp,CubeDepthTexture:Uf,CubeReflectionMapping:ti,CubeRefractionMapping:Ui,CubeTexture:ia,CubeTextureLoader:v_,CubeUVReflectionMapping:or,CubicBezierCurve:Ah,CubicBezierCurve3:zf,CubicInterpolant:np,CullFaceBack:zc,CullFaceFront:Bd,CullFaceFrontBack:zp,CullFaceNone:Od,Curve:Fn,CurvePath:Vf,CustomBlending:kd,CustomToneMapping:oh,CylinderGeometry:sa,Cylindrical:Z_,Data3DTexture:pl,DataArrayTexture:fl,DataTexture:Ln,DataTextureLoader:op,DataUtils:og,DecrementStencilOp:nm,DecrementWrapStencilOp:sm,DefaultLoadingManager:Bh,DepthFormat:ni,DepthStencilFormat:Pi,DepthTexture:ps,DetachedBindMode:of,DirectionalLight:Hl,DirectionalLightHelper:s0,DiscreteInterpolant:ip,DodecahedronGeometry:Cl,DoubleSide:Hn,DstAlphaFactor:Jd,DstColorFactor:$d,DynamicCopyUsage:vm,DynamicDrawUsage:fm,DynamicReadUsage:gm,EdgesGeometry:Ff,EllipseCurve:Rl,EqualCompare:xf,EqualDepth:po,EqualStencilFunc:lm,EquirectangularReflectionMapping:qs,EquirectangularRefractionMapping:Rr,Euler:Nn,EventDispatcher:qn,ExternalTexture:Th,ExtrudeGeometry:Pl,FileLoader:ii,Float16BufferAttribute:hg,Float32BufferAttribute:Pt,FloatType:fn,Fog:_l,FogExp2:gl,FramebufferTexture:Pg,FrontSide:Qn,Frustum:fs,FrustumArray:bl,GLBufferAttribute:Y_,GLSL1:Mm,GLSL3:Xc,GreaterCompare:vf,GreaterDepth:go,GreaterEqualCompare:dl,GreaterEqualDepth:mo,GreaterEqualStencilFunc:dm,GreaterStencilFunc:hm,GridHelper:Tp,Group:Li,HTMLTexture:Ng,HalfFloatType:ei,HemisphereLight:zh,HemisphereLightHelper:n0,IcosahedronGeometry:Il,ImageBitmapLoader:fp,ImageLoader:$r,ImageUtils:Ef,IncrementStencilOp:em,IncrementWrapStencilOp:im,InstancedBufferAttribute:ds,InstancedBufferGeometry:hp,InstancedInterleavedBuffer:q_,InstancedMesh:Mh,Int16BufferAttribute:Rf,Int32BufferAttribute:Pf,Int8BufferAttribute:wf,IntType:sl,InterleavedBuffer:ea,InterleavedBufferAttribute:Bi,Interpolant:xs,InterpolateBezier:Xo,InterpolateDiscrete:nr,InterpolateLinear:Vr,InterpolateSmooth:so,InterpolationSamplingMode:Tm,InterpolationSamplingType:bm,InvertStencilOp:rm,KeepStencilOp:Qi,KeyframeTrack:On,LOD:Lf,LatheGeometry:Ll,Layers:ml,LessCompare:_f,LessDepth:fo,LessEqualCompare:ul,LessEqualDepth:cs,LessEqualStencilFunc:cm,LessStencilFunc:om,Light:ki,LightProbe:cp,Line:_i,Line3:$_,LineBasicMaterial:on,LineCurve:wh,LineCurve3:kf,LineDashedMaterial:Qf,LineLoop:Sh,LineSegments:Yn,LinearFilter:Ce,LinearInterpolant:Fh,LinearMipMapLinearFilter:Xp,LinearMipMapNearestFilter:Wp,LinearMipmapLinearFilter:Wn,LinearMipmapNearestFilter:Ys,LinearSRGBColorSpace:hs,LinearToneMapping:ih,LinearTransfer:Hr,Loader:mn,LoaderUtils:Ko,LoadingManager:Vl,LoopOnce:lf,LoopPingPong:hf,LoopRepeat:cf,MOUSE:as,Material:$e,MaterialBlending:Vp,MaterialLoader:Xl,MathUtils:xh,Matrix2:jc,Matrix3:Qt,Matrix4:Kt,MaxEquation:Wd,Mesh:De,MeshBasicMaterial:si,MeshDepthMaterial:Nh,MeshDistanceMaterial:Uh,MeshLambertMaterial:Dh,MeshMatcapMaterial:jf,MeshNormalMaterial:$f,MeshPhongMaterial:zl,MeshPhysicalMaterial:Lh,MeshStandardMaterial:ca,MeshToonMaterial:Kf,MinEquation:Hd,MirroredRepeatWrapping:Qs,MixOperation:rf,MultiplyBlending:Gc,MultiplyOperation:Qr,NearestFilter:Oe,NearestMipMapLinearFilter:Hp,NearestMipMapNearestFilter:Gp,NearestMipmapLinearFilter:ns,NearestMipmapNearestFilter:il,NeutralToneMapping:ch,NeverCompare:gf,NeverDepth:ho,NeverStencilFunc:am,NoBlending:jn,NoColorSpace:fi,NoNormalPacking:Kp,NoToneMapping:Xn,NormalAnimationBlendMode:hl,NormalBlending:os,NormalGAPacking:jp,NormalRGPacking:$p,NotEqualCompare:yf,NotEqualDepth:_o,NotEqualStencilFunc:um,NumberKeyframeTrack:ha,Object3D:de,ObjectLoader:dp,ObjectSpaceNormalMap:mf,OctahedronGeometry:oa,OneFactor:qd,OneMinusConstantAlphaFactor:sf,OneMinusConstantColorFactor:ef,OneMinusDstAlphaFactor:Kd,OneMinusDstColorFactor:jd,OneMinusSrcAlphaFactor:co,OneMinusSrcColorFactor:Zd,OrthographicCamera:cr,PCFShadowMap:Cr,PCFSoftShadowMap:zd,PMREMGenerator:th,Path:Yr,PerspectiveCamera:We,Plane:di,PlaneGeometry:lr,PlaneHelper:l0,PointLight:jr,PointLightHelper:t0,Points:bh,PointsMaterial:Tl,PolarGridHelper:i0,PolyhedronGeometry:zi,PositionalAudio:P_,PropertyBinding:ue,PropertyMixer:xp,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Rh,Quaternion:Ze,QuaternionKeyframeTrack:ua,QuaternionLinearInterpolant:rp,R11_EAC_Format:To,RED_GREEN_RGTC2_Format:kr,RED_RGTC1_Format:Go,REVISION:el,RG11_EAC_Format:Or,RGBADepthPacking:Yp,RGBAFormat:an,RGBAIntegerFormat:cl,RGBA_ASTC_10x10_Format:Bo,RGBA_ASTC_10x5_Format:Uo,RGBA_ASTC_10x6_Format:Fo,RGBA_ASTC_10x8_Format:Oo,RGBA_ASTC_12x10_Format:zo,RGBA_ASTC_12x12_Format:ko,RGBA_ASTC_4x4_Format:wo,RGBA_ASTC_5x4_Format:Co,RGBA_ASTC_5x5_Format:Ro,RGBA_ASTC_6x5_Format:Po,RGBA_ASTC_6x6_Format:Io,RGBA_ASTC_8x5_Format:Lo,RGBA_ASTC_8x6_Format:Do,RGBA_ASTC_8x8_Format:No,RGBA_BPTC_Format:Vo,RGBA_ETC2_EAC_Format:bo,RGBA_PVRTC_2BPPV1_Format:Mo,RGBA_PVRTC_4BPPV1_Format:yo,RGBA_S3TC_DXT1_Format:Pr,RGBA_S3TC_DXT3_Format:Js,RGBA_S3TC_DXT5_Format:Ks,RGBDepthPacking:Zp,RGBFormat:mh,RGBIntegerFormat:qp,RGB_BPTC_SIGNED_Format:Br,RGB_BPTC_UNSIGNED_Format:zr,RGB_ETC1_Format:Fr,RGB_ETC2_Format:So,RGB_PVRTC_2BPPV1_Format:vo,RGB_PVRTC_4BPPV1_Format:xo,RGB_S3TC_DXT1_Format:Zs,RGDepthPacking:Jp,RGFormat:Fi,RGIntegerFormat:ll,RawShaderMaterial:Ih,Ray:gs,Raycaster:yp,RectAreaLight:lp,RedFormat:ol,RedIntegerFormat:ta,ReinhardToneMapping:sh,RenderTarget:vh,RenderTarget3D:H_,RepeatWrapping:js,ReplaceStencilOp:tm,ReverseSubtractEquation:Gd,RingGeometry:Dl,SIGNED_R11_EAC_Format:Eo,SIGNED_RED_GREEN_RGTC2_Format:Wo,SIGNED_RED_RGTC1_Format:Ho,SIGNED_RG11_EAC_Format:Ao,SRGBColorSpace:rn,SRGBTransfer:_e,Scene:xl,ShaderChunk:re,ShaderLib:Gn,ShaderMaterial:Un,ShadowMaterial:Yf,Shape:aa,ShapeGeometry:Nl,ShapePath:h0,ShapeUtils:In,ShortType:uh,Skeleton:na,SkeletonHelper:Q_,SkinnedMesh:yh,Source:Ii,Sphere:Ke,SphereGeometry:la,Spherical:$c,SphericalHarmonics3:Gh,SplineCurve:Ph,SpotLight:Vh,SpotLightHelper:j_,Sprite:Lr,SpriteMaterial:Ml,SrcAlphaFactor:lo,SrcAlphaSaturateFactor:Qd,SrcColorFactor:Yd,StaticCopyUsage:xm,StaticDrawUsage:Wr,StaticReadUsage:mm,StereoCamera:E_,StreamCopyUsage:ym,StreamDrawUsage:pm,StreamReadUsage:_m,StringKeyframeTrack:ys,SubtractEquation:Vd,SubtractiveBlending:Vc,TOUCH:es,TangentSpaceNormalMap:gi,TetrahedronGeometry:Ul,Texture:Pe,TextureLoader:Jo,TextureUtils:m0,Timer:gp,TimestampQuery:Sm,TorusGeometry:Fl,TorusKnotGeometry:Ol,Triangle:un,TriangleFanDrawMode:ff,TriangleStripDrawMode:df,TrianglesDrawMode:uf,TubeGeometry:Bl,UVMapping:nl,Uint16BufferAttribute:vl,Uint32BufferAttribute:yl,Uint8BufferAttribute:Cf,Uint8ClampedBufferAttribute:cg,Uniform:qh,UniformsGroup:X_,UniformsLib:St,UniformsUtils:Jf,UnsignedByteType:yn,UnsignedInt101111Type:fh,UnsignedInt248Type:er,UnsignedInt5999Type:dh,UnsignedIntType:Dn,UnsignedShort4444Type:rl,UnsignedShort5551Type:al,UnsignedShortType:tr,VSMShadowMap:Ws,Vector2:tt,Vector3:C,Vector4:xe,VectorKeyframeTrack:kl,VideoFrameTexture:Rg,VideoTexture:Nf,WebGL3DRenderTarget:jm,WebGLArrayRenderTarget:$m,WebGLCoordinateSystem:Tn,WebGLCubeRenderTarget:Yh,WebGLRenderTarget:An,WebGLRenderer:Up,WebGLUtils:Dp,WebGPUCoordinateSystem:us,WebXRController:ro,WireframeGeometry:qf,WrapAroundEnding:Gr,ZeroCurvatureEnding:is,ZeroFactor:Xd,ZeroSlopeEnding:ss,ZeroStencilOp:Qp,createCanvasElement:bf,error:Ft,getConsoleFunction:Rm,log:qr,setConsoleFunction:Cm,warn:mt,warnOnce:Ni},Symbol.toStringTag,{value:"Module"})),Dd={type:"change"},Zh={type:"start"},Fp={type:"end"},io=new gs,Nd=new di,hS=Math.cos(70*xh.DEG2RAD),He=new C,xn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bc=1e-6;class uS extends Ap{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ze,this._lastTargetPosition=new C,this._quat=new Ze().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $c,this._sphericalDelta=new $c,this._scale=1,this._panOffset=new C,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new C,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fS.bind(this),this._onPointerDown=dS.bind(this),this._onPointerUp=pS.bind(this),this._onContextMenu=MS.bind(this),this._onMouseWheel=_S.bind(this),this._onKeyDown=xS.bind(this),this._onTouchStart=vS.bind(this),this._onTouchMove=yS.bind(this),this._onMouseDown=mS.bind(this),this._onMouseMove=gS.bind(this),this._interceptControlDown=SS.bind(this),this._interceptControlUp=bS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dd),this.update(),this.state=be.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=He.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(io.origin.copy(this.object.position),io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(io.direction))<hS?this.object.lookAt(this.target):(Nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),io.intersectPlane(Nd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bc||this._lastTargetPosition.distanceToSquared(this.target)>Bc?(this.dispatchEvent(Dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;He.copy(i).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dS(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fS(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function pS(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=be.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mS(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=be.DOLLY;break;case as.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=be.ROTATE}break;case as.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Zh)}function gS(s){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _S(s){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(s.preventDefault(),this.dispatchEvent(Zh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Fp))}function xS(s){this.enabled!==!1&&this._handleKeyDown(s)}function vS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=be.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=be.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Zh)}function yS(s){switch(this._trackPointer(s),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=be.NONE}}function MS(s){this.enabled!==!1&&s.preventDefault()}function SS(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bS(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ur=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++s%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var d=0;d<t.children.length;d++)t.children[d].style.display=d===h?"block":"none";s=h}var i=(performance||Date).now(),r=i,a=0,o=e(new Ur.Panel("FPS","#0ff","#002")),l=e(new Ur.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Ur.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-i,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:t,setMode:n}};Ur.Panel=function(s,t,e){var n=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,d=3*a,u=15*a,f=74*a,p=30*a,_=document.createElement("canvas");_.width=o,_.height=l,_.style.cssText="width:80px;height:48px";var m=_.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,o,l),m.fillStyle=t,m.fillText(s,c,h),m.fillRect(d,u,f,p),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(d,u,f,p),{dom:_,update:function(g,M){n=Math.min(n,g),i=Math.max(i,g),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,o,u),m.fillStyle=t,m.fillText(r(g)+" "+s+" ("+r(n)+"-"+r(i)+")",c,h),m.drawImage(_,d+a,u,f-a,p,d,u,f-a,p),m.fillRect(d+f-a,u,a,p),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(d+f-a,u,a,r((1-g/M)*p))}}};const $o=new Je,jo=new Vl,Ud=new Map;let Fd=!1;async function TS(){if(Fd)return;const[{DDSLoader:s},{TGALoader:t}]=await Promise.all([Promise.resolve().then(()=>require("./DDSLoader-6ZjshBbD.js")),Promise.resolve().then(()=>require("./TGALoader-RAoWPsmf.js"))]);jo.addHandler(/\.dds$/i,new s),jo.addHandler(/\.tga$/i,new t),Fd=!0}function ES(s){return $o.setFromObject(s),$o.getSize(new C)}function AS(s){return $o.setFromObject(s),$o.getCenter(new C)}function wS(s){const t=s.split(".");return t.length<=1?"":t.pop().toLowerCase()}const CS="assets/draco/gltf/";async function RS(s,t,e,n,i){let r=t||wS(s);r==="glb"&&(r="gltf"),await TS();const a=r==="gltf"?`gltf:${e}`:r;let o=Ud.get(a);return o||(o=PS(r,e,n,i),Ud.set(a,o)),(await o)(jo)}async function PS(s,t,e,n){switch(s){case"dae":{const{ColladaLoader:i}=await Promise.resolve().then(()=>require("./ColladaLoader-CJbgONxx.js"));return r=>({loader:new i(r),getObject:a=>a.scene})}case"fbx":{const{FBXLoader:i}=await Promise.resolve().then(()=>require("./FBXLoader-Bd-4zMZ4.js"));return r=>({loader:new i(r)})}case"gltf":{const i=await Promise.resolve().then(()=>require("./GLTFLoader-_E5MuL3N.js")),{DRACOLoader:r}=t?await Promise.resolve().then(()=>require("./DRACOLoader-Dqc_gLVF.js")):{DRACOLoader:null};return a=>{const o=new i.GLTFLoader(a);if(t&&r){const l=new r;l.setDecoderPath(n||CS),o.setDRACOLoader(l)}return{loader:o,getObject:l=>{const c=l.scene;return l.animations&&(c.animations=l.animations),c}}}}case"obj":{const{OBJLoader:i}=await Promise.resolve().then(()=>require("./OBJLoader-BZC6Boep.js"));return r=>({loader:new i(r)})}case"ply":{const{PLYLoader:i}=await Promise.resolve().then(()=>require("./PLYLoader-CVBZmhzD.js"));return r=>({loader:new i(r),getObject:a=>(a.computeVertexNormals(),new De(a,e==="MeshStandardMaterial"?new ca:new si({vertexColors:!0})))})}case"stl":{const{STLLoader:i}=await Promise.resolve().then(()=>require("./STLLoader-BvocymFY.js"));return r=>({loader:new i(r),getObject:a=>new De(a,new zl)})}case"json":return i=>({loader:new dp(i)});default:throw new Error(`Unsupported model file type: "${s||"unknown"}"`)}}async function IS(){const{MTLLoader:s}=await Promise.resolve().then(()=>require("./MTLLoader-CykfozIg.js"));return new s(jo)}const LS=Ie.defineComponent({name:"vue3dLoader",__name:"vue3dLoader",props:{filePath:{},fileType:{},width:{},height:{},position:{},rotation:{},scale:{},lights:{default:()=>[{type:"AmbientLight",color:11184810,intensity:2},{type:"DirectionalLight",position:{x:1,y:1,z:1},color:16777215,intensity:3}]},cameraPosition:{default:()=>({x:0,y:0,z:0})},cameraRotation:{},cameraUp:{},cameraLookAt:{},backgroundColor:{default:()=>16777215},backgroundAlpha:{default:()=>1},controlsOptions:{},crossOrigin:{default:"anonymous"},requestHeader:{},outputEncoding:{default:()=>"linear"},webGLRendererOptions:{default:()=>({})},mtlPath:{default:""},showFps:{type:Boolean,default:!1},textureImage:{default:""},clearScene:{type:Boolean,default:!1},parallelLoad:{type:Boolean,default:!1},labels:{default:()=>[]},autoPlay:{type:Boolean,default:!0},enableDraco:{type:Boolean,default:!1},dracoDir:{},intersectRecursive:{type:Boolean,default:!1},enableDamping:{type:Boolean},dampingFactor:{},verticalCtrl:{type:[Boolean,Object],default:!1},horizontalCtrl:{type:[Boolean,Object],default:!1},plyMaterial:{default:"MeshStandardMaterial"},enableAxesHelper:{type:Boolean,default:!1},axesHelperSize:{default:100},enableGridHelper:{type:Boolean,default:!1},minDistance:{default:0},maxDistance:{default:1/0},pointLightFollowCamera:{type:Boolean},enableShadowMap:{type:Boolean,default:!1}},emits:["mousedown","mousemove","mouseup","click","dblclick","load","process","error"],setup(s,{expose:t,emit:e}){const n=s;let i=null;const r=new yp,a=new tt,o=new We(45,1,.1,1e5),l=new Mp;let c=new xl,h=null,d=null,u=[],f=null,p=0,_=null,m=null,g=null,M=null,S=null,x=null,A=null,T=!0,R=!1,v=!1,E=0,P=!1,I=!1,N=null,W=0,Y="";const B=new C,q=new Ct,z=Ie.ref({width:n.width||0,height:n.height||0}),j=Ie.ref(0),at=Ie.ref(!1),ut=Ie.ref(!1),ht=Ie.ref(null),At=Ie.ref(null);Ie.onMounted(()=>{rt(),Bt()}),Ie.onBeforeUnmount(()=>{Zt(),x&&(x.disconnect(),x=null),A&&(A.disconnect(),A=null),document.removeEventListener("visibilitychange",ot)}),Ie.watch([()=>n.autoPlay],()=>{nt(),jt()}),Ie.watch([()=>n.width,()=>n.height],()=>{z.value={width:n.width||0,height:n.height||0}}),Ie.watch([()=>n.enableAxesHelper,()=>n.axesHelperSize,()=>n.enableGridHelper],()=>{ve(),jt()}),Ie.watch([()=>n.minDistance,()=>n.maxDistance],()=>{Re(),jt()}),Ie.watch([()=>n.filePath,()=>n.fileType,()=>n.mtlPath,()=>n.clearScene,()=>n.backgroundAlpha,()=>n.backgroundColor],H=>{const U=JSON.stringify([n.filePath,n.fileType,n.mtlPath]);U!==Y&&(Y=U,(H[0]||H[1])&&fe(),H[2]&&dt()),H[3]&&Wt(),(H[4]||H[5])&&O()},{deep:!0}),Ie.watch([()=>n.rotation,()=>n.position,()=>n.scale,()=>n.lights],H=>{const U=["rotation","position","scale"];H.forEach((it,lt)=>{lt<3&&it?(ee(U[lt],it),jt()):Z()})},{deep:!0}),Ie.watch([()=>z],()=>{k(!0),O(),jt()},{deep:!0}),Ie.watch([()=>n.controlsOptions],()=>{ct(),jt()},{deep:!0}),Ie.watch([()=>n.cameraRotation,()=>n.cameraPosition],()=>{k(),jt()},{deep:!0}),Ie.watch([()=>n.labels],()=>{pt(),jt()},{deep:!0});const qt=e;function jt(){v=!0,ce()}function ce(){R||!ft()||!h||(R=!0,l.getDelta(),Yt())}function K(){R=!1,p&&(cancelAnimationFrame(p),p=0)}function ft(){return T&&document.visibilityState!=="hidden"}function ot(){ft()?(v=!0,ce()):K()}function Bt(){const H=ht.value;H&&typeof IntersectionObserver<"u"&&(A=new IntersectionObserver(U=>{const it=U[0];it&&(T=it.isIntersecting),ot()}),A.observe(H)),document.addEventListener("visibilitychange",ot)}function Yt(){if(!R)return;p=requestAnimationFrame(Yt);const H=l.getDelta();let U=!1;m&&m instanceof ao&&m.update(H),m&&m instanceof Array&&m.forEach(it=>{it.update(H)}),I&&(U=!0),d&&(d.enableDamping||d.autoRotate)&&(d.update(),U=!0),(v||U)&&(v=!1,Ht()),n.showFps&&(_&&_.update(),U=!0),U||K()}function Ht(){h&&(z.value.width===0||z.value.height===0||(wn(),h.render(c,o)))}function fe(){Zt(),rt()}function Zt(){K(),P=!0,W&&(cancelAnimationFrame(W),W=0,N=null),h&&h.dispose(),d&&(d.dispose(),d=null),et();const H=ht.value;H?.removeEventListener("mousedown",Dt,!1),H?.removeEventListener("mousemove",Xt,!1),H?.removeEventListener("mouseup",$t,!1),H?.removeEventListener("click",L,!1),H?.removeEventListener("dblclick",ge,!1),E&&(cancelAnimationFrame(E),E=0),window.removeEventListener("resize",kt,!1),c&&(c.traverse(U=>st(U)),c.clear()),_&&(_.dom&&_.dom.parentNode&&_.dom.parentNode.removeChild(_.dom),_=null),i=null,f=null,g=null,at.value=!1,j.value=0}function et(){m&&(Array.isArray(m)?m:[m]).forEach(U=>{U&&U.stopAllAction()}),m=null,I=!1}function st(H){const U=H;U.geometry&&U.geometry.dispose();const it=U.material;it&&(Array.isArray(it)?it:[it]).forEach(wt=>{if(wt){for(const ae in wt){const he=wt[ae];he&&he.isTexture&&he.dispose()}wt.dispose()}})}function rt(){P=!1,Y=JSON.stringify([n.filePath,n.fileType,n.mtlPath]);const{filePath:H,outputEncoding:U,webGLRendererOptions:it,showFps:lt,enableDamping:wt,dampingFactor:ae,labels:he,enableShadowMap:pe}=n;H&&typeof H=="object"&&(ut.value=!0);const Ae=ht.value;Mt(Ae),kt();const gn=Object.assign({},{antialias:!0,alpha:!0},it,{canvas:At.value});if(!h){h=new Up(gn),h.shadowMap.enabled=pe;const Cn=U==="linear"?hs:rn;h.outputColorSpace=Cn}d||(d=new uS(o,Ae),wt&&(d.enableDamping=!0,ae!=null&&(d.dampingFactor=ae))),Re(),ve(),dt(),w(),_t(!0),Ae.addEventListener("mousedown",Dt,!1),Ae.addEventListener("mouseup",$t,!1),Ae.addEventListener("click",L,!1),Ae.addEventListener("dblclick",ge,!1),window.addEventListener("resize",kt,!1),x||(x=new ResizeObserver(()=>kt()),x.observe(Ae)),lt&&(_=new Ur,Ae.appendChild(_.dom)),jt(),he&&he.length>0&&pt()}function Mt(H){const{width:U,height:it}=n;U&&(H.style.width=`${U}px`),it&&(H.style.height=`${it}px`)}function _t(H){const U=ht.value;H?U.addEventListener("mousemove",Xt,!1):U.removeEventListener("mousemove",Xt,!1)}function kt(){const{width:H,height:U}=n;if(H&&U){z.value={width:H,height:U};return}E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{E=0;const it=ht.value;if(!it)return;const lt=H||it.offsetWidth,wt=U||it.offsetHeight;(lt!==z.value.width||wt!==z.value.height)&&(z.value={width:lt,height:wt})})}function Dt(H){_t(!1);const U=ne(H.clientX,H.clientY);qt("mousedown",H,U)}function Xt(H){N=H,!W&&(W=requestAnimationFrame(()=>{W=0;const U=N;if(N=null,!U)return;const it=ne(U.clientX,U.clientY);qt("mousemove",U,it),jt()}))}function $t(H){const U=ne(H.clientX,H.clientY);qt("mouseup",H,U),_t(!0),jt()}function L(H){const U=ne(H.clientX,H.clientY);qt("click",H,U),jt()}function ge(H){const U=ne(H.clientX,H.clientY);qt("dblclick",H,U),jt()}function ne(H,U){const it=D();if(!it||!ht.value)return null;const lt=ht.value.getBoundingClientRect();H-=lt.left,U-=lt.top,a.x=H/z.value.width*2-1,a.y=-(U/z.value.height)*2+1,r.setFromCamera(a,o);const wt=r.intersectObject(it,n.intersectRecursive);return(wt&&wt.length)>0?wt[0]:null}function w(){O(),k(),Z(),ct()}function y(){if(!i)return;const H=ut.value?bt(i):null,{position:U,rotation:it,scale:lt}=n;U&&(U instanceof Array?H!=null?i.position.set(U[H].x,U[H].y,U[H].z):i.position.set(0,0,0):i.position.set(U.x,U.y,U.z)),it&&(it instanceof Array?H!=null?i.rotation.set(it[H].x,it[H].y,it[H].z):i.rotation.set(0,0,0):i.rotation.set(it.x,it.y,it.z)),lt&&(lt instanceof Array?H!=null?i.scale.set(lt[H].x,lt[H].y,lt[H].z):i.scale.set(1,1,1):i.scale.set(lt.x,lt.y,lt.z))}function O(){const{backgroundColor:H,backgroundAlpha:U}=n;h.setSize(z.value.width,z.value.height),h.setPixelRatio(window.devicePixelRatio||1),q.set(H),h.setClearColor(q,U)}function k(H){const{cameraPosition:U,cameraRotation:it,cameraUp:lt,cameraLookAt:wt}=n;if(o.aspect=z.value.width/z.value.height,o.updateProjectionMatrix(),!H)if(!wt||!lt){if(!i)return;const ae=ES(i).length();o.position.set(U.x,U.y,U.z),it&&o.rotation.set(it.x,it.y,it.z),U.x===0&&U.y===0&&U.z===0&&(o.position.z=ae),B.set(0,0,0),o.lookAt(B)}else o.position.set(U.x,U.y,U.z),it&&o.rotation.set(it.x,it.y,it.z),o.up.set(lt.x,lt.y,lt.z),B.set(wt.x,wt.y,wt.z),o.lookAt(B)}function Z(){const{lights:H}=n;c.remove(...u),u.forEach(U=>st(U)),u=[],H.forEach(U=>{if(!U.type)return;const it=U.type.toLowerCase();let lt=null;if(it==="ambient"||it==="ambientlight"){const wt=U.color===0?U.color:U.color||4210752,ae=U.intensity===0?U.intensity:U.intensity||2;lt=new Wl(wt,ae)}if(it==="point"||it==="pointlight"){const wt=U.color===0?U.color:U.color||16777215,ae=U.intensity===0?U.intensity:U.intensity||1,he=U.distance||0,pe=U.decay===0?U.decay:U.decay||2;lt=new jr(wt,ae,he,pe),U.position&&lt.position.copy(U.position)}if(it==="directional"||it==="directionallight"){const wt=U.color===0?U.color:U.color||16777215,ae=U.intensity===0?U.intensity:U.intensity||3;lt=new Hl(wt,ae),U.position&&lt.position.copy(U.position),U.target&&lt.target.copy(U.target)}if(it==="hemisphere"||it==="hemispherelight"){const wt=U.skyColor===0?U.skyColor:U.skyColor||16777215,ae=U.groundColor===0?U.groundColor:U.groundColor||16777215,he=U.intensity===0?U.intensity:U.intensity||1;lt=new zh(wt,ae,he),U.position&&lt.position.copy(U.position)}lt&&(u.push(lt),c.add(lt))}),jt()}function ct(){const{controlsOptions:H}=n;H&&Object.assign(d,H)}function dt(){const{filePath:H,parallelLoad:U}=n;U&&ut.value?H.forEach((it,lt)=>{J(lt)}):J()}async function J(H){const{filePath:U,fileType:it,crossOrigin:lt,requestHeader:wt,mtlPath:ae,enableDraco:he,dracoDir:pe,plyMaterial:Ae}=n;if(!U||P)return;const je=H??j.value,gn=ut.value?U[je]:U,Cn=typeof it=="string"?it:it?it[je]:"",Ge=await RS(gn,Cn,he,Ae,pe).catch(ye=>(qt("error",ye),null));if(!Ge)return;f=Ge.loader;const Ne=Ge.getObject?Ge.getObject:Ot;if(i&&je===0&&c.remove(i),wt)try{f.setRequestHeader(wt)}catch{}if(lt){const ye=f;typeof ye.setCrossOrigin=="function"?ye.setCrossOrigin(lt):ye.crossOrigin!==void 0&&(ye.crossOrigin=lt)}if(ae)if(!(typeof ae=="object"))gt(gn,Ne,je);else{if(!ae[je]){$(gn,Ne,je);return}gt(gn,Ne,je)}else $(gn,Ne,je)}function $(H,U,it){const{textureImage:lt,parallelLoad:wt,crossOrigin:ae}=n;f.load(H,(...he)=>{if(P)return;if(i=U(...he),yt(i,H),lt){const Ae=typeof lt=="string"?lt:lt[it];Ae&&Vt(i,Ae)}qt("load",c)},he=>{wt||xt(he);const pe=j.value+1;qt("process",he,pe)},he=>{qt("error",he)})}async function gt(H,U,it){const{crossOrigin:lt,requestHeader:wt,mtlPath:ae}=n,he=await IS();lt&&typeof he.setCrossOrigin=="function"&&he.setCrossOrigin(lt),wt&&he.setRequestHeader(wt);const pe=typeof ae=="string"?ae:ae[it],Ae=/^(.*\/)([^/]*)$/.exec(pe),je=Ae[1],gn=Ae[2];he.setPath(je).load(gn,Cn=>{Cn.preload(),f.setMaterials(Cn),$(H,U,it)})}function Ot(H){return H}function yt(H,U){const it=AS(H);at.value||(c.position.copy(it.negate()),at.value=!0),i=H;let lt=U.split("/");lt=lt[lt.length-1],i.fileName=lt,c.add(i),k(),y(),nt(),jt()}function xt(H){const{filePath:U}=n;Math.floor(H.loaded/H.total*100)===100&&(ut.value&&U.length>j.value?Ie.nextTick(()=>{if(j.value++,j.value===U.length){j.value=0;return}J()}):j.value=0)}function Vt(H,U){g||(g=new Jo,n.crossOrigin&&(g.crossOrigin=n.crossOrigin)),H.traverse(it=>{it.isMesh&&g.load(U,lt=>{it.material.map=lt,it.material.needsUpdate=!0},()=>{},lt=>{qt("error",lt)})}),jt()}function Wt(){et(),c&&(c.traverse(H=>st(H)),c.clear(),u=[],i=null),jt()}function ee(H,U){const it=D();if(it){if(ut.value){it.children.forEach(lt=>{const wt=bt(lt),ae=H==="scale"?1:0;U[wt]?lt[H].set(U[wt].x,U[wt].y,U[wt].z):lt[H].set(ae,ae,ae)});return}it[H].set(U.x,U.y,U.z)}}function D(){return ut.value?c:i}function pt(){const{labels:H}=n;if(!H||H.length<=0)return;Q();const U=ut.value?c:i;if(!U)return;const it=wt=>(g||(g=new Jo,n.crossOrigin&&(g.crossOrigin=n.crossOrigin)),g.load(wt)),lt=(wt,ae)=>{const he=vt(wt,ae),pe=new Pe(he);return pe.needsUpdate=!0,pe};H.forEach(wt=>{const ae=wt.image?it(wt.image):lt(wt.text,wt.textStyle||{}),he=new Ml({map:ae,color:wt.spriteMaterialColor||16777215}),pe=new Lr(he);wt.scale?pe.scale.set(wt.scale.x||1,wt.scale.y||1,wt.scale.z||0):pe.scale.set(1,1,0),wt.position&&pe.position.set(wt.position.x,wt.position.y,wt.position.z),wt.sid&&(pe.sid=wt.sid),U.add(pe)}),jt()}function Q(){const H=c.children;for(let U=H.length-1;U>=0;U--){const it=H[U];it&&(it instanceof Li&&it.children&&(c.children[U].children=it.children.map(lt=>lt instanceof Lr?(st(lt),null):lt).filter(lt=>lt)),it instanceof Lr&&(st(it),c.remove(it)))}}function vt(H,U){const it=(Ne,ye,Qe,ri,xi,Bn)=>{Ne.beginPath(),Ne.moveTo(ye+Bn,Qe),Ne.lineTo(ye+ri-Bn,Qe),Ne.quadraticCurveTo(ye+ri,Qe,ye+ri,Qe+Bn),Ne.lineTo(ye+ri,Qe+xi-Bn),Ne.quadraticCurveTo(ye+ri,Qe+xi,ye+ri-Bn,Qe+xi),Ne.lineTo(ye+Bn,Qe+xi),Ne.quadraticCurveTo(ye,Qe+xi,ye,Qe+xi-Bn),Ne.lineTo(ye,Qe+Bn),Ne.quadraticCurveTo(ye,Qe,ye+Bn,Qe),Ne.closePath(),Ne.fill(),Ne.stroke()},lt=U.fontFamily||"Arial",wt=U.fontSize===0||U.fontSize?U.fontSize:18,ae=U.color||"#ffffff",he=U.fontWeight||"normal",pe=U.borderWidth===0||U.borderWidth?U.borderWidth:4,Ae=U.borderColor||"rgba(0,0,0,1)",je=U.borderRadius===0||U.borderRadius?U.borderRadius:4,gn=U.backgroundColor||"rgba(255, 255, 255, 1)",Cn=document.createElement("canvas"),Ge=Cn.getContext("2d");if(Ge){Ge.font=`${he} ${wt}px ${lt}`;const ye=Ge.measureText(H).width;Ge.fillStyle=gn,Ge.strokeStyle=Ae,Ge.lineWidth=pe,it(Ge,pe/2,pe/2,ye+pe,wt*1.4+pe,je),Ge.fillStyle=ae,Ge.fillText(H,pe,wt+pe)}return Cn}function bt(H){const{filePath:U}=n;let it;return U instanceof Array&&(it=U.map((lt,wt)=>{if(lt.indexOf(H.fileName)>-1)return wt}).filter(lt=>lt!=null)[0]),it}function nt(){const{autoPlay:H}=n,U=D();if(U){if(ut.value){Lt(U);return}Nt(U)}}function Nt(H){const{autoPlay:U}=n;m=new ao(H),H.animations&&H.animations.length>0&&H.animations.forEach(it=>{if(it){const lt=m.clipAction(it);U?lt.play():lt.stop()}}),I=!!(H.animations&&H.animations.length>0)&&U}function Lt(H){const{autoPlay:U}=n;m=[];let it=!1;H.children.forEach((lt,wt)=>{m.push(new ao(lt));const ae=!!(lt.animations&&lt.animations.length>0);it=it||ae&&U,ae&&lt.animations.forEach(he=>{if(he){const pe=m[wt].clipAction(he);U?pe.play():pe.stop()}})}),I=it}function Re(){if(!d)return;const{verticalCtrl:H,horizontalCtrl:U,minDistance:it,maxDistance:lt}=n;H&&typeof H=="boolean"&&(d.minAzimuthAngle=-2*Math.PI,d.maxAzimuthAngle=-2*Math.PI),H&&typeof H=="object"&&(d.minAzimuthAngle=H.min,d.maxAzimuthAngle=H.max),U&&typeof U=="boolean"&&(d.minPolarAngle=1,d.maxPolarAngle=1),U&&typeof U=="object"&&(d.minPolarAngle=U.min,d.maxPolarAngle=U.max),it!=0&&typeof it=="number"&&(d.minDistance=it),lt!=1/0&&typeof lt=="number"&&(d.maxDistance=lt)}function ve(){const{enableAxesHelper:H,enableGridHelper:U,axesHelperSize:it}=n;H?M||(M=new Ep(it),c.add(M)):M&&(c.remove(M),M=null),U?S||(S=new Tp(2e3,100),c.add(S)):S&&(c.remove(S),S=null)}function wn(){if(!n.pointLightFollowCamera)return;const H=o.position.clone();c.children.forEach(U=>{U instanceof jr&&U.position.set(H.x,H.y,H.z)})}return t({camera:o,scene:c}),(H,U)=>(Ie.openBlock(),Ie.createElementBlock("div",{ref_key:"containerElement",ref:ht,class:"viewer-container"},[Ie.createElementVNode("canvas",{ref_key:"canvasElement",ref:At,class:"viewer-canvas"},null,512)],512))}}),DS=(s,t)=>{const e=s.__vccOpts||s;for(const[n,i]of t)e[n]=i;return e},Qo=DS(LS,[["__scopeId","data-v-a4ab4ddc"]]),NS=s=>{s.component(Qo.name??"vue3dLoader",Qo)},US={install:NS,vue3dLoader:Qo};exports.AmbientLight=Wl;exports.AnimationClip=ar;exports.Bone=Sl;exports.Box3=Je;exports.BufferAttribute=Me;exports.BufferGeometry=te;exports.ClampToEdgeWrapping=dn;exports.Color=Ct;exports.ColorManagement=le;exports.CompressedTextureLoader=ap;exports.Curve=Fn;exports.DataTextureLoader=op;exports.DefaultLoadingManager=Bh;exports.DirectionalLight=Hl;exports.DoubleSide=Hn;exports.EquirectangularReflectionMapping=qs;exports.Euler=Nn;exports.FileLoader=ii;exports.Float32BufferAttribute=Pt;exports.FrontSide=Qn;exports.Group=Li;exports.ImageBitmapLoader=fp;exports.InstancedBufferAttribute=ds;exports.InstancedMesh=Mh;exports.Int16BufferAttribute=Rf;exports.Int32BufferAttribute=Pf;exports.Int8BufferAttribute=wf;exports.InterleavedBuffer=ea;exports.InterleavedBufferAttribute=Bi;exports.Interpolant=xs;exports.InterpolateBezier=Xo;exports.InterpolateDiscrete=nr;exports.InterpolateLinear=Vr;exports.Line=_i;exports.LineBasicMaterial=on;exports.LineLoop=Sh;exports.LineSegments=Yn;exports.LinearFilter=Ce;exports.LinearMipmapLinearFilter=Wn;exports.LinearMipmapNearestFilter=Ys;exports.LinearSRGBColorSpace=hs;exports.Loader=mn;exports.LoaderUtils=Ko;exports.Material=$e;exports.MathUtils=xh;exports.Matrix3=Qt;exports.Matrix4=Kt;exports.Mesh=De;exports.MeshBasicMaterial=si;exports.MeshLambertMaterial=Dh;exports.MeshPhongMaterial=zl;exports.MeshPhysicalMaterial=Lh;exports.MeshStandardMaterial=ca;exports.MirroredRepeatWrapping=Qs;exports.NearestFilter=Oe;exports.NearestMipmapLinearFilter=ns;exports.NearestMipmapNearestFilter=il;exports.NumberKeyframeTrack=ha;exports.Object3D=de;exports.OrthographicCamera=cr;exports.PerspectiveCamera=We;exports.PointLight=jr;exports.Points=bh;exports.PointsMaterial=Tl;exports.PropertyBinding=ue;exports.Quaternion=Ze;exports.QuaternionKeyframeTrack=ua;exports.RGBAFormat=an;exports.RGBA_S3TC_DXT3_Format=Js;exports.RGBA_S3TC_DXT5_Format=Ks;exports.RGB_BPTC_SIGNED_Format=Br;exports.RGB_BPTC_UNSIGNED_Format=zr;exports.RGB_ETC1_Format=Fr;exports.RGB_S3TC_DXT1_Format=Zs;exports.RepeatWrapping=js;exports.SRGBColorSpace=rn;exports.Scene=xl;exports.ShapeUtils=In;exports.Skeleton=na;exports.SkinnedMesh=yh;exports.Sphere=Ke;exports.SpotLight=Vh;exports.Texture=Pe;exports.TextureLoader=Jo;exports.Triangle=un;exports.TriangleFanDrawMode=ff;exports.TriangleStripDrawMode=df;exports.TrianglesDrawMode=uf;exports.Uint16BufferAttribute=vl;exports.Uint32BufferAttribute=yl;exports.Uint8BufferAttribute=Cf;exports.Vector2=tt;exports.Vector3=C;exports.Vector4=xe;exports.VectorKeyframeTrack=kl;exports.index=US;exports.three_module=cS;exports.vue3dLoader=Qo;
