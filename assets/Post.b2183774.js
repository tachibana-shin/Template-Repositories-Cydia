import{d as re,v as W,x as Ee,p as ye,o as O,c as w,m as X,u as d,e as U,a as H,b as R,t as b,f as Oe,F as ne,h as Qe,y as et,l as tt,z as rt,r as Le,A as nt,B as st,w as he}from"./vendor.fe7f9515.js";import{u as ae,i as se,b as pe,c as me,d as Ne,e as T,_ as it,f as at,g as ot,h as ct,j as lt}from"./app.e3317944.js";const ut=re({props:{frontmatter:null},setup(v){return(a,o)=>W(a.$slots,"default")}}),ft={class:"title"},Et={class:"alert alert-info text-center"},ht=Oe(" packages this in section."),pt=R("br",null,null,-1),mt=re({props:{frontmatter:null},setup(v){const{frontmatter:a}=v,I=Ee().meta.packageInfo,p=I.packages.map(L=>({name:L.name,icon:ae(L.icon,I.name),version:L.lastVersion,to:se?`https://tachibana-shin.github.io/repo/package/${L.packageID}`:`/package/${L.packageID}`}));return ye({title:a.title||I.name,meta:[{charset:"utf-8"},{name:"description",hid:"description",content:`Packages in section ${I.name}`},{property:"og:title",hid:"og:title",content:a.title||I.name},{property:"og:description",hid:"og:description",content:`Packages in section ${I.name}`},{property:"og:image",hid:"og:image",content:ae(void 0,I.name)},{name:"twitter:title",hid:"twitter:title",content:a.title||I.name},{name:"twitter:description",hid:"twitter:description",content:`Packages in section ${I.name}`},{name:"twitter:image",hid:"twitter:image",content:ae(void 0,I.name)}]}),(L,h)=>{const s=me,n=Ne;return O(),w(ne,null,[X(s,{items:[{name:"Back",icon:d(pe)("back.png"),onclick:()=>L.$router.back()}]},null,8,["items"]),d(se)?H("",!0):(O(),U(n,{key:0})),R("h6",ft,b(d(I).name),1),R("div",Et,[R("strong",null,b(d(I).packages.length),1),ht,pt,Oe(" Last update at "+b(new Date(d(I).packages.sort((_,f)=>_.birthtimeMs-f.birthtimeMs).reverse()[0].birthtimeMs).toLocaleString()),1)]),X(s,{items:d(p)},null,8,["items"])],64)}}});function _t(v){switch(v){case"../../pages/package/git.shin.complications/control.json":return T(()=>import("./control.6819ab4d.js"),[]);case"../../pages/package/git.shin.copiedlabel/control.json":return T(()=>import("./control.452d37d9.js"),[]);case"../../pages/package/git.shin.cosmos/control.json":return T(()=>import("./control.c20ea4f5.js"),[]);case"../../pages/package/git.shin.cosmos13/control.json":return T(()=>import("./control.6edf8c7f.js"),[]);case"../../pages/package/git.shin.cozybadges/control.json":return T(()=>import("./control.c24f3645.js"),[]);case"../../pages/package/git.shin.cracktool2/control.json":return T(()=>import("./control.6e9ba03b.js"),[]);case"../../pages/package/git.shin.cracktool4/control.json":return T(()=>import("./control.4da2f87b.js"),[]);case"../../pages/package/git.shin.cukey/control.json":return T(()=>import("./control.ccbd6d6a.js"),[]);case"../../pages/package/git.shin.curl/control.json":return T(()=>import("./control.2c2c15e8.js"),[]);case"../../pages/package/git.shin.curl32/control.json":return T(()=>import("./control.d1bdea62.js"),[]);case"../../pages/package/git.shin.customdia/control.json":return T(()=>import("./control.0fb6795b.js"),[]);case"../../pages/package/git.shin.customloadingtext/control.json":return T(()=>import("./control.be7b9163.js"),[]);case"../../pages/package/git.shin.custompods/control.json":return T(()=>import("./control.50ed68b2.js"),[]);case"../../pages/package/git.shin.customsw/control.json":return T(()=>import("./control.67ca820a.js"),[]);case"../../pages/package/git.shin.cyanea/control.json":return T(()=>import("./control.b9558fe9.js"),[]);case"../../pages/package/git.shin.cydiacoolstar/control.json":return T(()=>import("./control.49ff01a9.js"),[]);case"../../pages/package/git.shin.cydiainstall/control.json":return T(()=>import("./control.743cdf42.js"),[]);case"../../pages/package/git.shin.cydiatimeoutcmd/control.json":return T(()=>import("./control.62941648.js"),[]);case"../../pages/package/git.shin.cylinder/control.json":return T(()=>import("./control.2cfacb07.js"),[]);case"../../pages/package/git.shin.cyplay/control.json":return T(()=>import("./control.f7a0b24f.js"),[]);case"../../pages/package/git.shin.impactor/control.json":return T(()=>import("./control.917a5af5.js"),[]);case"../../pages/package/git.shin.impactor10/control.json":return T(()=>import("./control.601830d8.js"),[]);default:return new Promise(function(a,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+v)))})}}const dt={class:"title"},It=re({props:{frontmatter:null},setup(v){var I;const a=(I=Ee().path.match(/\/package\/([^/]+)\//))==null?void 0:I[1],o=Qe("");return _t(`../../pages/package/${a}/control.json`).then(p=>{o.value=p.default[0].control.Name}).catch(()=>{}),(p,L)=>{const h=me,s=Ne;return O(),w(ne,null,[X(h,{items:[{name:"Back",icon:d(pe)("back.png"),onclick:()=>p.$router.back()}]},null,8,["items"]),d(se)?H("",!0):(O(),U(s,{key:0,"package-id":d(a)},null,8,["package-id"])),R("h6",dt,"Changelog: "+b(o.value),1),W(p.$slots,"default")],64)}}});var Rt=[{name:"Tweaks",to:"/section/Tweaks"},{name:"Utilities",to:"/section/Utilities"},{name:"Networking",to:"/section/Networking"},{name:"Cydia Custom",to:"/section/Cydia+Custom"}];const gt=re({setup(v){const a=Rt.map(o=>({name:`${o.name} (${o.countPackage})`,icon:ae(void 0,o.name),to:o.to}));return(o,I)=>{const p=me;return O(),U(p,{name:"Sections",items:d(a)},null,8,["items"])}}});var _e={exports:{}};(function(v,a){a=v.exports=E;var o;typeof process=="object"&&process.env&&{}.NODE_DEBUG&&/\bsemver\b/i.test({}.NODE_DEBUG)?o=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:o=function(){},a.SEMVER_SPEC_VERSION="2.0.0";var I=256,p=Number.MAX_SAFE_INTEGER||9007199254740991,L=16,h=a.re=[],s=a.src=[],n=a.tokens={},_=0;function f(e){n[e]=_++}f("NUMERICIDENTIFIER"),s[n.NUMERICIDENTIFIER]="0|[1-9]\\d*",f("NUMERICIDENTIFIERLOOSE"),s[n.NUMERICIDENTIFIERLOOSE]="[0-9]+",f("NONNUMERICIDENTIFIER"),s[n.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",f("MAINVERSION"),s[n.MAINVERSION]="("+s[n.NUMERICIDENTIFIER]+")\\.("+s[n.NUMERICIDENTIFIER]+")\\.("+s[n.NUMERICIDENTIFIER]+")",f("MAINVERSIONLOOSE"),s[n.MAINVERSIONLOOSE]="("+s[n.NUMERICIDENTIFIERLOOSE]+")\\.("+s[n.NUMERICIDENTIFIERLOOSE]+")\\.("+s[n.NUMERICIDENTIFIERLOOSE]+")",f("PRERELEASEIDENTIFIER"),s[n.PRERELEASEIDENTIFIER]="(?:"+s[n.NUMERICIDENTIFIER]+"|"+s[n.NONNUMERICIDENTIFIER]+")",f("PRERELEASEIDENTIFIERLOOSE"),s[n.PRERELEASEIDENTIFIERLOOSE]="(?:"+s[n.NUMERICIDENTIFIERLOOSE]+"|"+s[n.NONNUMERICIDENTIFIER]+")",f("PRERELEASE"),s[n.PRERELEASE]="(?:-("+s[n.PRERELEASEIDENTIFIER]+"(?:\\."+s[n.PRERELEASEIDENTIFIER]+")*))",f("PRERELEASELOOSE"),s[n.PRERELEASELOOSE]="(?:-?("+s[n.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+s[n.PRERELEASEIDENTIFIERLOOSE]+")*))",f("BUILDIDENTIFIER"),s[n.BUILDIDENTIFIER]="[0-9A-Za-z-]+",f("BUILD"),s[n.BUILD]="(?:\\+("+s[n.BUILDIDENTIFIER]+"(?:\\."+s[n.BUILDIDENTIFIER]+")*))",f("FULL"),f("FULLPLAIN"),s[n.FULLPLAIN]="v?"+s[n.MAINVERSION]+s[n.PRERELEASE]+"?"+s[n.BUILD]+"?",s[n.FULL]="^"+s[n.FULLPLAIN]+"$",f("LOOSEPLAIN"),s[n.LOOSEPLAIN]="[v=\\s]*"+s[n.MAINVERSIONLOOSE]+s[n.PRERELEASELOOSE]+"?"+s[n.BUILD]+"?",f("LOOSE"),s[n.LOOSE]="^"+s[n.LOOSEPLAIN]+"$",f("GTLT"),s[n.GTLT]="((?:<|>)?=?)",f("XRANGEIDENTIFIERLOOSE"),s[n.XRANGEIDENTIFIERLOOSE]=s[n.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",f("XRANGEIDENTIFIER"),s[n.XRANGEIDENTIFIER]=s[n.NUMERICIDENTIFIER]+"|x|X|\\*",f("XRANGEPLAIN"),s[n.XRANGEPLAIN]="[v=\\s]*("+s[n.XRANGEIDENTIFIER]+")(?:\\.("+s[n.XRANGEIDENTIFIER]+")(?:\\.("+s[n.XRANGEIDENTIFIER]+")(?:"+s[n.PRERELEASE]+")?"+s[n.BUILD]+"?)?)?",f("XRANGEPLAINLOOSE"),s[n.XRANGEPLAINLOOSE]="[v=\\s]*("+s[n.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[n.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[n.XRANGEIDENTIFIERLOOSE]+")(?:"+s[n.PRERELEASELOOSE]+")?"+s[n.BUILD]+"?)?)?",f("XRANGE"),s[n.XRANGE]="^"+s[n.GTLT]+"\\s*"+s[n.XRANGEPLAIN]+"$",f("XRANGELOOSE"),s[n.XRANGELOOSE]="^"+s[n.GTLT]+"\\s*"+s[n.XRANGEPLAINLOOSE]+"$",f("COERCE"),s[n.COERCE]="(^|[^\\d])(\\d{1,"+L+"})(?:\\.(\\d{1,"+L+"}))?(?:\\.(\\d{1,"+L+"}))?(?:$|[^\\d])",f("COERCERTL"),h[n.COERCERTL]=new RegExp(s[n.COERCE],"g"),f("LONETILDE"),s[n.LONETILDE]="(?:~>?)",f("TILDETRIM"),s[n.TILDETRIM]="(\\s*)"+s[n.LONETILDE]+"\\s+",h[n.TILDETRIM]=new RegExp(s[n.TILDETRIM],"g");var z="$1~";f("TILDE"),s[n.TILDE]="^"+s[n.LONETILDE]+s[n.XRANGEPLAIN]+"$",f("TILDELOOSE"),s[n.TILDELOOSE]="^"+s[n.LONETILDE]+s[n.XRANGEPLAINLOOSE]+"$",f("LONECARET"),s[n.LONECARET]="(?:\\^)",f("CARETTRIM"),s[n.CARETTRIM]="(\\s*)"+s[n.LONECARET]+"\\s+",h[n.CARETTRIM]=new RegExp(s[n.CARETTRIM],"g");var $="$1^";f("CARET"),s[n.CARET]="^"+s[n.LONECARET]+s[n.XRANGEPLAIN]+"$",f("CARETLOOSE"),s[n.CARETLOOSE]="^"+s[n.LONECARET]+s[n.XRANGEPLAINLOOSE]+"$",f("COMPARATORLOOSE"),s[n.COMPARATORLOOSE]="^"+s[n.GTLT]+"\\s*("+s[n.LOOSEPLAIN]+")$|^$",f("COMPARATOR"),s[n.COMPARATOR]="^"+s[n.GTLT]+"\\s*("+s[n.FULLPLAIN]+")$|^$",f("COMPARATORTRIM"),s[n.COMPARATORTRIM]="(\\s*)"+s[n.GTLT]+"\\s*("+s[n.LOOSEPLAIN]+"|"+s[n.XRANGEPLAIN]+")",h[n.COMPARATORTRIM]=new RegExp(s[n.COMPARATORTRIM],"g");var G="$1$2$3";f("HYPHENRANGE"),s[n.HYPHENRANGE]="^\\s*("+s[n.XRANGEPLAIN]+")\\s+-\\s+("+s[n.XRANGEPLAIN]+")\\s*$",f("HYPHENRANGELOOSE"),s[n.HYPHENRANGELOOSE]="^\\s*("+s[n.XRANGEPLAINLOOSE]+")\\s+-\\s+("+s[n.XRANGEPLAINLOOSE]+")\\s*$",f("STAR"),s[n.STAR]="(<|>)?=?\\s*\\*";for(var y=0;y<_;y++)o(y,s[y]),h[y]||(h[y]=new RegExp(s[y]));a.parse=D;function D(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof E)return e;if(typeof e!="string"||e.length>I)return null;var r=t.loose?h[n.LOOSE]:h[n.FULL];if(!r.test(e))return null;try{return new E(e,t)}catch{return null}}a.valid=M;function M(e,t){var r=D(e,t);return r?r.version:null}a.clean=x;function x(e,t){var r=D(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}a.SemVer=E;function E(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof E){if(e.loose===t.loose)return e;e=e.version}else if(typeof e!="string")throw new TypeError("Invalid Version: "+e);if(e.length>I)throw new TypeError("version is longer than "+I+" characters");if(!(this instanceof E))return new E(e,t);o("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?h[n.LOOSE]:h[n.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>p||this.major<0)throw new TypeError("Invalid major version");if(this.minor>p||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>p||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(i){if(/^[0-9]+$/.test(i)){var c=+i;if(c>=0&&c<p)return c}return i}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}E.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},E.prototype.toString=function(){return this.version},E.prototype.compare=function(e){return o("SemVer.compare",this.version,this.options,e),e instanceof E||(e=new E(e,this.options)),this.compareMain(e)||this.comparePre(e)},E.prototype.compareMain=function(e){return e instanceof E||(e=new E(e,this.options)),A(this.major,e.major)||A(this.minor,e.minor)||A(this.patch,e.patch)},E.prototype.comparePre=function(e){if(e instanceof E||(e=new E(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(o("prerelease compare",t,r,i),r===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(r===void 0)return-1;if(r===i)continue;return A(r,i)}while(++t)},E.prototype.compareBuild=function(e){e instanceof E||(e=new E(e,this.options));var t=0;do{var r=this.build[t],i=e.build[t];if(o("prerelease compare",t,r,i),r===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(r===void 0)return-1;if(r===i)continue;return A(r,i)}while(++t)},E.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)typeof this.prerelease[r]=="number"&&(this.prerelease[r]++,r=-2);r===-1&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},a.inc=Y;function Y(e,t,r,i){typeof r=="string"&&(i=r,r=void 0);try{return new E(e,r).inc(t,i).version}catch{return null}}a.diff=Q;function Q(e,t){if(Ie(e,t))return null;var r=D(e),i=D(t),c="";if(r.prerelease.length||i.prerelease.length){c="pre";var l="prerelease"}for(var u in r)if((u==="major"||u==="minor"||u==="patch")&&r[u]!==i[u])return c+u;return l}a.compareIdentifiers=A;var F=/^[0-9]+$/;function A(e,t){var r=F.test(e),i=F.test(t);return r&&i&&(e=+e,t=+t),e===t?0:r&&!i?-1:i&&!r?1:e<t?-1:1}a.rcompareIdentifiers=ee;function ee(e,t){return A(t,e)}a.major=Z;function Z(e,t){return new E(e,t).major}a.minor=K;function K(e,t){return new E(e,t).minor}a.patch=oe;function oe(e,t){return new E(e,t).patch}a.compare=k;function k(e,t,r){return new E(e,r).compare(new E(t,r))}a.compareLoose=ce;function ce(e,t){return k(e,t,!0)}a.compareBuild=de;function de(e,t,r){var i=new E(e,r),c=new E(t,r);return i.compare(c)||i.compareBuild(c)}a.rcompare=De;function De(e,t,r){return k(t,e,r)}a.sort=Pe;function Pe(e,t){return e.sort(function(r,i){return a.compareBuild(r,i,t)})}a.rsort=be;function be(e,t){return e.sort(function(r,i){return a.compareBuild(i,r,t)})}a.gt=ie;function ie(e,t,r){return k(e,t,r)>0}a.lt=le;function le(e,t,r){return k(e,t,r)<0}a.eq=Ie;function Ie(e,t,r){return k(e,t,r)===0}a.neq=Ae;function Ae(e,t,r){return k(e,t,r)!==0}a.gte=Re;function Re(e,t,r){return k(e,t,r)>=0}a.lte=ge;function ge(e,t,r){return k(e,t,r)<=0}a.cmp=ue;function ue(e,t,r,i){switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return Ie(e,r,i);case"!=":return Ae(e,r,i);case">":return ie(e,r,i);case">=":return Re(e,r,i);case"<":return le(e,r,i);case"<=":return ge(e,r,i);default:throw new TypeError("Invalid operator: "+t)}}a.Comparator=C;function C(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof C){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof C))return new C(e,t);o("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===te?this.value="":this.value=this.operator+this.semver.version,o("comp",this)}var te={};C.prototype.parse=function(e){var t=this.options.loose?h[n.COMPARATORLOOSE]:h[n.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new E(r[2],this.options.loose):this.semver=te},C.prototype.toString=function(){return this.value},C.prototype.test=function(e){if(o("Comparator.test",e,this.options.loose),this.semver===te||e===te)return!0;if(typeof e=="string")try{e=new E(e,this.options)}catch{return!1}return ue(e,this.operator,this.semver,this.options)},C.prototype.intersects=function(e,t){if(!(e instanceof C))throw new TypeError("a Comparator is required");(!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1});var r;if(this.operator==="")return this.value===""?!0:(r=new N(e.value,t),fe(this.value,r,t));if(e.operator==="")return e.value===""?!0:(r=new N(this.value,t),fe(e.semver,r,t));var i=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),c=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),l=this.semver.version===e.semver.version,u=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),g=ue(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),m=ue(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return i||c||l&&u||g||m},a.Range=N;function N(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof N)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new N(e.raw,t);if(e instanceof C)return new N(e.value,t);if(!(this instanceof N))return new N(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}N.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},N.prototype.toString=function(){return this.range},N.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?h[n.HYPHENRANGELOOSE]:h[n.HYPHENRANGE];e=e.replace(r,Me),o("hyphen replace",e),e=e.replace(h[n.COMPARATORTRIM],G),o("comparator trim",e,h[n.COMPARATORTRIM]),e=e.replace(h[n.TILDETRIM],z),e=e.replace(h[n.CARETTRIM],$),e=e.split(/\s+/).join(" ");var i=t?h[n.COMPARATORLOOSE]:h[n.COMPARATOR],c=e.split(" ").map(function(l){return Ce(l,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(c=c.filter(function(l){return!!l.match(i)})),c=c.map(function(l){return new C(l,this.options)},this),c},N.prototype.intersects=function(e,t){if(!(e instanceof N))throw new TypeError("a Range is required");return this.set.some(function(r){return Se(r,t)&&e.set.some(function(i){return Se(i,t)&&r.every(function(c){return i.every(function(l){return c.intersects(l,t)})})})})};function Se(e,t){for(var r=!0,i=e.slice(),c=i.pop();r&&i.length;)r=i.every(function(l){return c.intersects(l,t)}),c=i.pop();return r}a.toComparators=ke;function ke(e,t){return new N(e,t).set.map(function(r){return r.map(function(i){return i.value}).join(" ").trim().split(" ")})}function Ce(e,t){return o("comp",e,t),e=Ge(e,t),o("caret",e),e=je(e,t),o("tildes",e),e=Ve(e,t),o("xrange",e),e=Ue(e,t),o("stars",e),e}function S(e){return!e||e.toLowerCase()==="x"||e==="*"}function je(e,t){return e.trim().split(/\s+/).map(function(r){return $e(r,t)}).join(" ")}function $e(e,t){var r=t.loose?h[n.TILDELOOSE]:h[n.TILDE];return e.replace(r,function(i,c,l,u,g){o("tilde",e,i,c,l,u,g);var m;return S(c)?m="":S(l)?m=">="+c+".0.0 <"+(+c+1)+".0.0":S(u)?m=">="+c+"."+l+".0 <"+c+"."+(+l+1)+".0":g?(o("replaceTilde pr",g),m=">="+c+"."+l+"."+u+"-"+g+" <"+c+"."+(+l+1)+".0"):m=">="+c+"."+l+"."+u+" <"+c+"."+(+l+1)+".0",o("tilde return",m),m})}function Ge(e,t){return e.trim().split(/\s+/).map(function(r){return Fe(r,t)}).join(" ")}function Fe(e,t){o("caret",e,t);var r=t.loose?h[n.CARETLOOSE]:h[n.CARET];return e.replace(r,function(i,c,l,u,g){o("caret",e,i,c,l,u,g);var m;return S(c)?m="":S(l)?m=">="+c+".0.0 <"+(+c+1)+".0.0":S(u)?c==="0"?m=">="+c+"."+l+".0 <"+c+"."+(+l+1)+".0":m=">="+c+"."+l+".0 <"+(+c+1)+".0.0":g?(o("replaceCaret pr",g),c==="0"?l==="0"?m=">="+c+"."+l+"."+u+"-"+g+" <"+c+"."+l+"."+(+u+1):m=">="+c+"."+l+"."+u+"-"+g+" <"+c+"."+(+l+1)+".0":m=">="+c+"."+l+"."+u+"-"+g+" <"+(+c+1)+".0.0"):(o("no pr"),c==="0"?l==="0"?m=">="+c+"."+l+"."+u+" <"+c+"."+l+"."+(+u+1):m=">="+c+"."+l+"."+u+" <"+c+"."+(+l+1)+".0":m=">="+c+"."+l+"."+u+" <"+(+c+1)+".0.0"),o("caret return",m),m})}function Ve(e,t){return o("replaceXRanges",e,t),e.split(/\s+/).map(function(r){return Be(r,t)}).join(" ")}function Be(e,t){e=e.trim();var r=t.loose?h[n.XRANGELOOSE]:h[n.XRANGE];return e.replace(r,function(i,c,l,u,g,m){o("xRange",e,i,c,l,u,g,m);var V=S(l),B=V||S(u),j=B||S(g),P=j;return c==="="&&P&&(c=""),m=t.includePrerelease?"-0":"",V?c===">"||c==="<"?i="<0.0.0-0":i="*":c&&P?(B&&(u=0),g=0,c===">"?(c=">=",B?(l=+l+1,u=0,g=0):(u=+u+1,g=0)):c==="<="&&(c="<",B?l=+l+1:u=+u+1),i=c+l+"."+u+"."+g+m):B?i=">="+l+".0.0"+m+" <"+(+l+1)+".0.0"+m:j&&(i=">="+l+"."+u+".0"+m+" <"+l+"."+(+u+1)+".0"+m),o("xRange return",i),i})}function Ue(e,t){return o("replaceStars",e,t),e.trim().replace(h[n.STAR],"")}function Me(e,t,r,i,c,l,u,g,m,V,B,j,P){return S(r)?t="":S(i)?t=">="+r+".0.0":S(c)?t=">="+r+"."+i+".0":t=">="+t,S(m)?g="":S(V)?g="<"+(+m+1)+".0.0":S(B)?g="<"+m+"."+(+V+1)+".0":j?g="<="+m+"."+V+"."+B+"-"+j:g="<="+g,(t+" "+g).trim()}N.prototype.test=function(e){if(!e)return!1;if(typeof e=="string")try{e=new E(e,this.options)}catch{return!1}for(var t=0;t<this.set.length;t++)if(Xe(this.set[t],e,this.options))return!0;return!1};function Xe(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(o(e[i].semver),e[i].semver!==te&&e[i].semver.prerelease.length>0){var c=e[i].semver;if(c.major===t.major&&c.minor===t.minor&&c.patch===t.patch)return!0}return!1}return!0}a.satisfies=fe;function fe(e,t,r){try{t=new N(t,r)}catch{return!1}return t.test(e)}a.maxSatisfying=He;function He(e,t,r){var i=null,c=null;try{var l=new N(t,r)}catch{return null}return e.forEach(function(u){l.test(u)&&(!i||c.compare(u)===-1)&&(i=u,c=new E(i,r))}),i}a.minSatisfying=ze;function ze(e,t,r){var i=null,c=null;try{var l=new N(t,r)}catch{return null}return e.forEach(function(u){l.test(u)&&(!i||c.compare(u)===1)&&(i=u,c=new E(i,r))}),i}a.minVersion=Ye;function Ye(e,t){e=new N(e,t);var r=new E("0.0.0");if(e.test(r)||(r=new E("0.0.0-0"),e.test(r)))return r;r=null;for(var i=0;i<e.set.length;++i){var c=e.set[i];c.forEach(function(l){var u=new E(l.semver.version);switch(l.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!r||ie(r,u))&&(r=u);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+l.operator)}})}return r&&e.test(r)?r:null}a.validRange=qe;function qe(e,t){try{return new N(e,t).range||"*"}catch{return null}}a.ltr=xe;function xe(e,t,r){return ve(e,t,"<",r)}a.gtr=Ze;function Ze(e,t,r){return ve(e,t,">",r)}a.outside=ve;function ve(e,t,r,i){e=new E(e,i),t=new N(t,i);var c,l,u,g,m;switch(r){case">":c=ie,l=ge,u=le,g=">",m=">=";break;case"<":c=le,l=Re,u=ie,g="<",m="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(fe(e,t,i))return!1;for(var V=0;V<t.set.length;++V){var B=t.set[V],j=null,P=null;if(B.forEach(function(q){q.semver===te&&(q=new C(">=0.0.0")),j=j||q,P=P||q,c(q.semver,j.semver,i)?j=q:u(q.semver,P.semver,i)&&(P=q)}),j.operator===g||j.operator===m||(!P.operator||P.operator===g)&&l(e,P.semver))return!1;if(P.operator===m&&u(e,P.semver))return!1}return!0}a.prerelease=Ke;function Ke(e,t){var r=D(e,t);return r&&r.prerelease.length?r.prerelease:null}a.intersects=We;function We(e,t,r){return e=new N(e,r),t=new N(t,r),e.intersects(t)}a.coerce=Je;function Je(e,t){if(e instanceof E)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};var r=null;if(!t.rtl)r=e.match(h[n.COERCE]);else{for(var i;(i=h[n.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||i.index+i[0].length!==r.index+r[0].length)&&(r=i),h[n.COERCERTL].lastIndex=i.index+i[1].length+i[2].length;h[n.COERCERTL].lastIndex=-1}return r===null?null:D(r[2]+"."+(r[3]||"0")+"."+(r[4]||"0"),t)}})(_e,_e.exports);var vt=et(()=>{var a,o,I;const v=typeof navigator!="undefined"?(o=(a=navigator.appVersion.split("OS "))==null?void 0:a[1])==null?void 0:o.split(" ")[0].replace("_","."):"";return _e.exports.valid(v)?v:((I=_e.exports.coerce(v))==null?void 0:I.version)||null});/**
 * filesize
 *
 * @copyright 2021 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 8.0.6
 */const Ot=/^(b|B)$/,we={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},Lt={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},Nt={floor:Math.floor,ceil:Math.ceil};function Te(v,a={}){let o=[],I=0,p,L,h,s,n,_,f,z,$,G,y,D,M,x,E,Y,Q,F,A,ee,Z;if(isNaN(v))throw new TypeError("Invalid number");if(h=a.bits===!0,E=a.unix===!0,D=a.pad===!0,L=a.base||10,M=a.round!==void 0?a.round:E?1:2,f=a.locale!==void 0?a.locale:"",z=a.localeOptions||{},Y=a.separator!==void 0?a.separator:"",Q=a.spacer!==void 0?a.spacer:E?"":" ",A=a.symbols||{},F=L===2?a.standard||"iec":"jedec",y=a.output||"string",n=a.fullform===!0,_=a.fullforms instanceof Array?a.fullforms:[],p=a.exponent!==void 0?a.exponent:-1,ee=Nt[a.roundingMethod]||Math.round,G=Number(v),$=G<0,s=L>2?1e3:1024,Z=isNaN(a.precision)===!1?parseInt(a.precision,10):0,$&&(G=-G),(p===-1||isNaN(p))&&(p=Math.floor(Math.log(G)/Math.log(s)),p<0&&(p=0)),p>8&&(Z>0&&(Z+=8-p),p=8),y==="exponent")return p;if(G===0)o[0]=0,x=o[1]=E?"":we[F][h?"bits":"bytes"][p];else{I=G/(L===2?Math.pow(2,p*10):Math.pow(1e3,p)),h&&(I=I*8,I>=s&&p<8&&(I=I/s,p++));const K=Math.pow(10,p>0?M:0);o[0]=ee(I*K)/K,o[0]===s&&p<8&&a.exponent===void 0&&(o[0]=1,p++),x=o[1]=L===10&&p===1?h?"kbit":"kB":we[F][h?"bits":"bytes"][p],E&&(o[1]=o[1].charAt(0),Ot.test(o[1])&&(o[0]=Math.floor(o[0]),o[1]=""))}if($&&(o[0]=-o[0]),Z>0&&(o[0]=o[0].toPrecision(Z)),o[1]=A[o[1]]||o[1],f===!0?o[0]=o[0].toLocaleString():f.length>0?o[0]=o[0].toLocaleString(f,z):Y.length>0&&(o[0]=o[0].toString().replace(".",Y)),D&&Number.isInteger(o[0])===!1&&M>0){const K=Y||".",oe=o[0].toString().split(K),k=oe[1]||"",ce=k.length,de=M-ce;o[0]=`${oe[0]}${K}${k.padEnd(ce+de,"0")}`}return n&&(o[1]=_[p]?_[p]:Lt[F][p]+(h?"bit":"byte")+(o[0]===1?"":"s")),y==="array"?o:y==="object"?{value:o[0],symbol:o[1],exponent:p,unit:x}:o.join(Q)}Te.partial=v=>a=>Te(a,v);const J=v=>(nt("data-v-8fd97d9c"),v=v(),st(),v),Tt={key:1,class:"tweak-header"},At=["src"],St={class:"info"},yt={class:"name h6"},wt={class:"d-flex justify-content-between w-100"},Dt={class:"text-secondary"},Pt={class:"text-secondary"},bt=J(()=>R("div",{id:"google-translate",class:"text-center"},null,-1)),kt=["innerHTML"],Ct=J(()=>R("h6",{class:"title"},"Package Example",-1)),jt={key:0,class:"alert alert-success text-center mb-0"},$t={class:"small text-secondary text-center mt-1"},Gt=J(()=>R("h6",{class:"title"},"Description",-1)),Ft={class:"bg-white border-custom px-3"},Vt={key:5,class:"mt-3"},Bt={class:"alert alert-info text-center",style:{"background-color":"#c5e8fe"}},Ut=Oe(" This tweak open source. "),Mt=["href"],Xt={key:6,class:"mt-3 screenshots"},Ht=J(()=>R("h6",{class:"title"},"Screenshots",-1)),zt={class:"border-custom bg-white"},Yt=["href"],qt=["src"],xt={class:"mt-3"},Zt=J(()=>R("h6",{class:"title"},"Package info",-1)),Kt={class:"properties bg-white border-custom"},Wt={class:"propName"},Jt={class:"value"},Qt={class:"mt-3"},er=J(()=>R("h6",{class:"title"},"Old version",-1)),tr={class:"bg-white border-custom py-3"},rr=J(()=>R("br",null,null,-1)),nr={class:"text-secondary"},sr=re({props:{frontmatter:null},setup(v){const{frontmatter:a}=v,o=Ee(),I=a.notification,p=a.screenshots||o.meta.screenshots||[],L=a["source-code"],h=o.meta.existsChangelog,s=o.meta.compatible,n=o.meta.packageInfo,_=n[0],f={Name:_.control.Name,Package:_.control.Package,Author:_.control.Author,Version:_.control.Version,Section:_.control.Section,Depends:_.control.Depends,Conflicts:_.control.Conflicts,Architecture:_.control.Architecture,MD5sum:_.MD5sum,SHA256sum:_.SHA256sum,SHA512sum:_.SHA512sum,Size:Te(_.size),"Last Update":tt(_.birthtimeMs,"en_US",{relativeDate:Date.now()}),uid:_.uid,tag:_.control.tag,dev:_.control.dev};for(const $ in f)f[$]==null&&delete f[$];const z=ae(_.control.Icon,_.control.Section);return ye({title:a.title||_.control.Name,meta:[{charset:"utf-8"},{name:"description",hid:"description",content:_.control.Description},{property:"og:title",hid:"og:title",content:a.title||_.control.Name},{property:"og:description",hid:"og:description",content:_.control.Description},{property:"og:image",hid:"og:image",content:z},{name:"twitter:title",hid:"twitter:title",content:a.title||_.control.Name},{name:"twitter:description",hid:"twitter:description",content:_.control.Description},{name:"twitter:image",hid:"twitter:image",content:z}]}),($,G)=>{var F;const y=Ne,D=me,M=at,x=ot,E=gt,Y=ct,Q=lt;return O(),w(ne,null,[d(se)?H("",!0):(O(),U(y,{key:0,"package-id":d(_).control.Package},null,8,["package-id"])),d(se)?H("",!0):(O(),w("div",Tt,[R("img",{class:"icon",src:d(z)},null,8,At),R("div",St,[R("h1",yt,b(d(_).control.Name),1),R("div",wt,[R("h6",Dt,b(d(_).control.Version),1),R("h6",Pt,b(f.Size),1)])])])),d(se)?H("",!0):(O(),U(D,{key:2,items:[{name:"Author",icon:d(pe)("email.png"),after:d(_).control.Author.replace(/<[^>]+?>/,""),to:`mailto:${(F=d(_).control.Author.match(/<([^>]+?)>/))==null?void 0:F[1]}`}]},null,8,["items"])),d(h)?(O(),U(D,{key:3,items:[{name:"Changelog",icon:d(pe)("changelog.png"),to:`${d(o).path}/changelog`.replace(/\/{2,}/g,"/")}]},null,8,["items"])):H("",!0),X(M),bt,d(I)?(O(),w("div",{key:4,class:rt(["my-3 alert",[`alert-${d(I).type}`]]),innerHTML:d(I).html},null,10,kt)):H("",!0),R("div",null,[Ct,(O(),w("div",jt," Compatible with "+b(d(s)||"unknown"),1)),R("p",$t," Current iOS "+b(d(vt)),1)]),R("div",null,[Gt,R("div",Ft,[W($.$slots,"default",{},void 0,!0)])]),d(L)?(O(),w("div",Vt,[R("div",Bt,[Ut,R("a",{href:d(L),target:"_blank"},"Source Code",8,Mt)])])):H("",!0),d(p).length>0?(O(),w("div",Xt,[Ht,R("ul",zt,[R("li",null,[R("div",null,[(O(!0),w(ne,null,Le(d(p),A=>(O(),w("a",{href:A},[R("img",{src:A},null,8,qt)],8,Yt))),256))])])])])):H("",!0),R("div",xt,[Zt,R("ul",Kt,[(O(!0),w(ne,null,Le(Object.entries(f),([A,ee])=>(O(),w("li",{key:A},[R("span",Wt,b(A),1),R("span",Jt,b(ee),1)]))),128))])]),R("div",Qt,[er,R("ul",tr,[(O(!0),w(ne,null,Le(d(n),A=>(O(),w("li",{key:A.control.Version},[R("strong",null,b(A.control.Version),1),rr,R("small",nr,b(A.MD5sum),1)]))),128))])]),X(x),X(E),X(M),X(Y),X(Q)],64)}}});var ir=it(sr,[["__scopeId","data-v-8fd97d9c"]]);const cr=re({props:{frontmatter:null},setup(v){const a=Ee();return(o,I)=>{const p=ir,L=It,h=mt,s=ut;return d(a).path.startsWith("/package/")&&d(a).path.includes("/changelog")===!1?(O(),U(p,{key:0,frontmatter:v.frontmatter},{default:he(()=>[W(o.$slots,"default")]),_:3},8,["frontmatter"])):d(a).path.startsWith("/package/")&&d(a).path.includes("/changelog")?(O(),U(L,{key:1,frontmatter:v.frontmatter},{default:he(()=>[W(o.$slots,"default")]),_:3},8,["frontmatter"])):d(a).path.startsWith("/section/")?(O(),U(h,{key:2,frontmatter:v.frontmatter},{default:he(()=>[W(o.$slots,"default")]),_:3},8,["frontmatter"])):(O(),U(s,{key:3,frontmatter:v.frontmatter},{default:he(()=>[W(o.$slots,"default")]),_:3},8,["frontmatter"]))}}});export{cr as _};
