function e(e,t,a,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,a,o):n(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new Map;class n{constructor(e,t){if(this._$cssResult$=!0,t!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1]),e[0]);return new n(i,a)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",a))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const s=window.trustedTypes,c=s?s.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},m=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,a)=>{const i=this._$Eh(a,t);void 0!==i&&(this._$Eu.set(i,a),e.push(i))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const a="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,a,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const a of t)this.createProperty(a,e[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eh(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,a;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(a=e.hostConnected)||void 0===a||a.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const a=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{t?e.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):a.forEach((t=>{const a=document.createElement("style"),i=window.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=t.cssText,e.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ES(e,t,a=p){var i,n;const r=this.constructor._$Eh(e,a);if(void 0!==r&&!0===a.reflect){const o=(null!==(n=null===(i=a.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:u.toAttribute)(t,a.type);this._$Ei=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(e,t){var a,i,n;const r=this.constructor,o=r._$Eu.get(e);if(void 0!==o&&this._$Ei!==o){const e=r.getPropertyOptions(o),l=e.converter,s=null!==(n=null!==(i=null===(a=l)||void 0===a?void 0:a.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=o,this[o]=s(t,e.type),this._$Ei=null}}requestUpdate(e,t,a){let i=!0;void 0!==e&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,a))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(a)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(a)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:_}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,h=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,y=`<${b}>`,k=document,A=(e="")=>k.createComment(e),x=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,S=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,C=/"/g,T=/^(?:script|style|textarea|title)$/i,$=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),N=$(1),R=$(2),j=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),L=new WeakMap,I=k.createTreeWalker(k,129,null,!1),D=(e,t)=>{const a=e.length-1,i=[];let n,r=2===t?"<svg>":"",o=E;for(let t=0;t<a;t++){const a=e[t];let l,s,c=-1,d=0;for(;d<a.length&&(o.lastIndex=d,s=o.exec(a),null!==s);)d=o.lastIndex,o===E?"!--"===s[1]?o=w:void 0!==s[1]?o=S:void 0!==s[2]?(T.test(s[2])&&(n=RegExp("</"+s[2],"g")),o=P):void 0!==s[3]&&(o=P):o===P?">"===s[0]?(o=null!=n?n:E,c=-1):void 0===s[1]?c=-2:(c=o.lastIndex-s[2].length,l=s[1],o=void 0===s[3]?P:'"'===s[3]?C:M):o===C||o===M?o=P:o===w||o===S?o=E:(o=P,n=void 0);const u=o===P&&e[t+1].startsWith("/>")?" ":"";r+=o===E?a+y:c>=0?(i.push(l),a.slice(0,c)+"$lit$"+a.slice(c)+f+u):a+f+(-2===c?(i.push(void 0),t):u)}const l=r+(e[a]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==h?h.createHTML(l):l,i]};class U{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let n=0,r=0;const o=e.length-1,l=this.parts,[s,c]=D(e,t);if(this.el=U.createElement(s,a),I.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=I.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(f)){const a=c[r++];if(e.push(t),void 0!==a){const e=i.getAttribute(a.toLowerCase()+"$lit$").split(f),t=/([.?@])?(.*)/.exec(a);l.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?K:"@"===t[1]?q:Z})}else l.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(T.test(i.tagName)){const e=i.textContent.split(f),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],A()),I.nextNode(),l.push({type:2,index:++n});i.append(e[t],A())}}}else if(8===i.nodeType)if(i.data===b)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(f,e+1));)l.push({type:7,index:n}),e+=f.length-1}n++}}static createElement(e,t){const a=k.createElement("template");return a.innerHTML=e,a}}function F(e,t,a=e,i){var n,r,o,l;if(t===j)return t;let s=void 0!==i?null===(n=a._$Cl)||void 0===n?void 0:n[i]:a._$Cu;const c=x(t)?void 0:t._$litDirective$;return(null==s?void 0:s.constructor)!==c&&(null===(r=null==s?void 0:s._$AO)||void 0===r||r.call(s,!1),void 0===c?s=void 0:(s=new c(e),s._$AT(e,a,i)),void 0!==i?(null!==(o=(l=a)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=s:a._$Cu=s),void 0!==s&&(t=F(e,s._$AS(e,t.values),s,i)),t}class V{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:a},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:k).importNode(a,!0);I.currentNode=n;let r=I.nextNode(),o=0,l=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new H(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new B(r,this,e)),this.v.push(t),s=i[++l]}o!==(null==s?void 0:s.index)&&(r=I.nextNode(),o++)}return n}m(e){let t=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class H{constructor(e,t,a,i){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),x(e)?e===O||null==e||""===e?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==j&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return z(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==O&&x(this._$AH)?this._$AA.nextSibling.data=e:this.k(k.createTextNode(e)),this._$AH=e}T(e){var t;const{values:a,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=U.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(a);else{const e=new V(n,this),t=e.p(this.options);e.m(a),this.k(t),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new U(e)),t}S(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const n of e)i===t.length?t.push(a=new H(this.M(A()),this.M(A()),this,this.options)):a=t[i],a._$AI(n),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,a,i,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,a,i){const n=this.strings;let r=!1;if(void 0===n)e=F(this,e,t,0),r=!x(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const i=e;let o,l;for(e=n[0],o=0;o<n.length-1;o++)l=F(this,i[a+o],t,o),l===j&&(l=this._$AH[o]),r||(r=!x(l)||l!==this._$AH[o]),l===O?e=O:e!==O&&(e+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.C(e)}C(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends Z{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===O?void 0:e}}const X=v?v.emptyScript:"";class K extends Z{constructor(){super(...arguments),this.type=4}C(e){e&&e!==O?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class q extends Z{constructor(e,t,a,i,n){super(e,t,a,i,n),this.type=5}_$AI(e,t=this){var a;if((e=null!==(a=F(this,e,t,0))&&void 0!==a?a:O)===j)return;const i=this._$AH,n=e===O&&i!==O||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==O&&(i===O||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==a?a:this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,J;null==Y||Y(U,H),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.3");class Q extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const a=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=a.firstChild),a}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,a)=>{var i,n;const r=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:t;let o=r._$litPart$;if(void 0===o){const e=null!==(n=null==a?void 0:a.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new H(t.insertBefore(A(),e),e,void 0,null!=a?a:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return j}}Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:a,elements:i}=t;return{kind:a,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(a){a.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(a){a.createProperty(t.key,e)}};function ie(e){return(t,a)=>void 0!==a?((e,t,a)=>{t.constructor.createProperty(a,e)})(e,t,a):ae(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ne(e){return ie({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,oe,le;null===(re=window.HTMLSlotElement)||void 0===re||re.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(oe||(oe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(le||(le={}));var se=["closed","locked","off"],ce=function(e,t,a,i){i=i||{},a=null==a?{}:a;var n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=a,e.dispatchEvent(n),n},de=function(e){ce(window,"haptic",e)},ue=function(e,t,a,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(de("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(a.entity||a.camera_image)&&ce(e,"hass-more-info",{entityId:a.entity?a.entity:a.camera_image});break;case"navigate":i.navigation_path&&function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),ce(window,"location-changed",{replace:a})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":a.entity&&(function(e,t){(function(e,t,a){void 0===a&&(a=!0);var i,n=function(e){return e.substr(0,e.indexOf("."))}(t),r="group"===n?"homeassistant":n;switch(n){case"lock":i=a?"unlock":"lock";break;case"cover":i=a?"open_cover":"close_cover";break;default:i=a?"turn_on":"turn_off"}e.callService(r,i,{entity_id:t})})(e,t,se.includes(e.states[t].state))}(t,a.entity),de("success"));break;case"call-service":if(!i.service)return void de("failure");var n=i.service.split(".",2);t.callService(n[0],n[1],i.service_data,i.target),de("success");break;case"fire-dom-event":ce(e,"ll-custom",i)}};function me(e){return void 0!==e&&"none"!==e.action}var pe={version:"Verze",invalid_configuration:"Neplatn?? konfigurace {0}",description:"Karta pomoc?? kter?? m????ete ovl??dat v???? vysava??",old_configuration:"Detekov??na zastaral?? konfigurace. Upravte pros??m konfiguraci nebo kartu vytvo??te znovu od za????tku.",old_configuration_migration_link:"N??vod na ??pravu konfigurace"},_e={invalid:"Neplatn?? ??ablona",vacuum_goto:"P??esun na bod",vacuum_goto_predefined:"P??esun na bod ze seznamu",vacuum_clean_segment:"??klid m??stnosti",vacuum_clean_point:"??klid bodu",vacuum_clean_point_predefined:"??klid bodu ze seznamu",vacuum_clean_zone:"??klid oblasti",vacuum_clean_zone_predefined:"??klid oblasti ze seznamu",vacuum_follow_path:"Trasa"},ge={preset:{entity:{missing:'Chyb??j??c?? polo??ka "entity"'},preset_name:{missing:'Chyb??j??c?? polo??ka "preset_name"'},platform:{invalid:"Neplatn?? platforma vysava??e: {0}"},map_source:{missing:'Chyb??j??c?? polo??ka "map_source"',none_provided:"Chyb??j??c?? odkaz na kameru nebo obr??zek s mapou",ambiguous:"Povolen pouze jeden zdroj mapy"},calibration_source:{missing:'Chyb??j??c?? polo??ka "calibration_source"',ambiguous:"Povolen pouze jeden zdroj kalibrace",none_provided:"Chyb??j??c?? zdroj kalibrace",calibration_points:{invalid_number:"Po??adov??ny 3 nebo 4 kalibra??n?? body",missing_map:"Ka??d?? kalibra??n?? bod mus?? obsahovat sou??adnice mapy",missing_vacuum:"Ka??d?? kalibra??n?? bod mus?? obsahovat sou??adnice vysava??e",missing_coordinate:'Sou??adnice mapy i vysava??e mus?? v??dy obsahovat polo??ku "x" a "y"'}},icons:{invalid:'Neplatn?? konfigurace pro polo??ku "icons"',icon:{missing:'Ka??d?? z??znam v seznamu ikon mus?? v??dy obsahovat polo??ku "icon"'}},tiles:{invalid:'Neplatn?? konfigurace pro polo??ku "tiles"',entity:{missing:'Ka??d?? z??znam v seznamu dla??dic mus?? v??dy obsahovat polo??ku "entity"'},label:{missing:'Ka??d?? z??znam v seznamu dla??dic mus?? v??dy obsahovat polo??ku "label"'}},map_modes:{invalid:'Neplatn?? konfigurace pro polo??ku "map_modes"',icon:{missing:"Chyb??j??c?? ikona pro mapov?? re??im"},name:{missing:"Chyb??j??c?? n??zev pro mapov?? re??im"},template:{invalid:"Neplatn?? ??ablona: {0}"},predefined_selections:{not_applicable:"Re??im {0} nepodporuje v??b??r z p??ednastaven??ch mo??nost??",zones:{missing:"Chyb??j??c?? konfigurace oblast??",invalid_parameters_number:"Ka??d?? oblast mus?? m??t 4 parametry"},points:{position:{missing:"Chyb??j??c?? konfigurace bod??",invalid_parameters_number:"Ka??d?? bod mus?? m??t 2 parametry"}},rooms:{id:{missing:"Chyb??j??c?? identifik??tor m??stnosti",invalid_format:"Neplatn?? identifik??tor m??stnosti: {0}"},outline:{invalid_parameters_number:"Ka??d?? bod ohrani??en?? m??stnosti mus?? m??t 2 parametry"}},label:{x:{missing:'Popisek mus?? m??t polo??ku "x"'},y:{missing:'Popisek mus?? m??t polo??ku "y"'},text:{missing:'Popisek mus?? m??t polo??ku "text"'}},icon:{x:{missing:'Ikona mus?? m??t polo??ku "x"'},y:{missing:'Ikona mus?? m??t polo??ku "y"'},name:{missing:'Ikona mus?? m??t polo??ku "name"'}}},service_call_schema:{missing:"Chyb??j??c?? form??t vol??n?? slu??by",service:{missing:'Form??t vol??n?? slu??by mus?? obsahovat polo??ku "service"',invalid:"Neplatn?? slu??ba: {0}"}}}},invalid_entities:"Neplatn?? entity:",invalid_calibration:"Neplatn?? kalibrace, pros??m zkontrolujte konfiguraci"},ve={status:{label:"Stav",value:{Starting:"Zap??n??n??","Charger disconnected":"Nab??je??ka odpojena",Idle:"Ne??inn??","Remote control active":"D??lkov?? ovl??d??n?? aktivn??",Cleaning:"Ukl??zen??","Returning home":"N??vrat do z??kladny","Manual mode":"Manu??ln?? re??im",Charging:"Nab??jen??","Charging problem":"Probl??m s nab??jen??m",Paused:"Pozastaven","Spot cleaning":"Ukl??zen?? bodu",Error:"Chyba","Shutting down":"Vyp??n??n??",Updating:"Prob??h?? aktualizace",Docking:"Parkov??n??","Going to target":"P??esun na bod","Zoned cleaning":"Ukl??zen?? oblasti","Segment cleaning":"Ukl??zen?? m??stnosti","Emptying the bin":"Vyprazd??ov??n?? z??sobn??ku","Charging complete":"Nab??jen?? dokon??eno","Device offline":"Za????zen?? je nedostupn??"}},battery_level:{label:"Baterie"},fan_speed:{label:"Stupe?? vys??v??n??",value:{Silent:"Tich??",Standard:"Standardn??",Medium:"St??edn??",Turbo:"Turbo",Auto:"Automatick??",Gentle:"Slab??"}},sensor_dirty_left:{label:"??istota senzor??"},filter_left:{label:"??ivotnost filtru"},main_brush_left:{label:"??ivotnost hlavn??ho kart????e"},side_brush_left:{label:"??ivotnost bo??n??ch kart??????"},cleaning_count:{label:"Po??et ??klid??"},cleaned_area:{label:"Uklizen?? plocha"},cleaning_time:{label:"Doba ukl??zen??"},mop_left:{label:"??ivotnost mopu"}},he={vacuum_start:"Zah??jit ??klid",vacuum_pause:"Pozastavit ??klid",vacuum_stop:"Ukon??it ??klid",vacuum_return_to_base:"N??vrat do z??kladny",vacuum_clean_spot:"Uklidit bod",vacuum_locate:"Naj??t",vacuum_set_fan_speed:"Nastavit stupe?? vys??v??n??"},fe={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},be={success:"Vol??n?? slu??by bylo ??sp????n??",no_selection:"Nebyl proveden ????dn?? v??b??r",failed:"Vol??n?? slu??by selhalo"},ye={description:{before_link:"Tento editor podporuje pouze z??kladn?? konfiguraci s pou??it??m entity kamera vytvo??en?? pomoc?? ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Pro pokro??il?? nastaven?? pou??ijte editor k??du."},label:{name:"Titulek (voliteln?? polo??ka)",entity:"Entita vysava??e (povinn?? polo??ka)",camera:"Entita kamery (povinn?? polo??ka)",vacuum_platform:"Platforma vysava??e (povinn?? polo??ka)",map_locked:"Uzam??en?? mapy",two_finger_pan:"Posuv mapy dv??ma prsty"}},ke={common:pe,map_mode:_e,validation:ge,tile:ve,icon:he,unit:fe,popups:be,editor:ye},Ae=Object.freeze({__proto__:null,common:pe,map_mode:_e,validation:ge,tile:ve,icon:he,unit:fe,popups:be,editor:ye,default:ke}),xe={version:"Version",invalid_configuration:"Ugyldig konfiguration {0}",description:"Et kort som lader dig styre din robotst??vsuger",old_configuration:"Gammel ops??tning fundet. Juster dine indstillinger til det seneste format, eller lav et nyt kort fra bunden.",old_configuration_migration_link:"Migrerings vejledning"},ze={invalid:"Ugyldigt template!",vacuum_goto:"Klik & G??",vacuum_goto_predefined:"Punkter",vacuum_clean_segment:"Rum",vacuum_clean_zone:"Zone reng??ring",vacuum_clean_zone_predefined:"Zoner",vacuum_follow_path:"Sti"},Ee={preset:{entity:{missing:"Mangler indstilling: entity"},preset_name:{missing:"Mangler indstilling: preset_name"},platform:{invalid:"Ugyldig st??vsuger platform: {0}"},map_source:{missing:"Mangler indstilling: map_source",none_provided:"Intet kamera eller billede er angivet",ambiguous:"Kun en kort-kilde tilladt"},calibration_source:{missing:"Mangler indstilling: calibration_source",ambiguous:"Kun en kalibrerings-kilde tilladt",none_provided:"Ingen kalibrerings kilde angivet",calibration_points:{invalid_number:"N??jagtigt 3 eller 4 kalibreringspunkter p??kr??vet",missing_map:"Alle kalibreringspunkter skal indeholde kort koordinater",missing_vacuum:"Alle kalibreringspunkter skal indeholde st??vsuger koordinater",missing_coordinate:"Kort og st??vsugers kalibreringspunkter skal indeholde b??de x og y koordinater"}},icons:{invalid:"Fejl i konfiguration: icons",icon:{missing:"Alle punkter i icons listen skal indeholde icon egenskaben"}},tiles:{invalid:"Fejl i konfiguration: tiles",entity:{missing:"Alle punkter i tiles listen skal indehold entity egenskaben"},label:{missing:"Alle punkter i tiles listen skal indehold label egenskaben"}},map_modes:{invalid:"Fejl i konfiguration: map_modes",icon:{missing:"Ikon mangler"},name:{missing:"Navn mangler"},template:{invalid:"Ugyldigt template: {0}"},predefined_selections:{not_applicable:"Mode {0} underst??tter ikke predefinerede valg",zones:{missing:"Zone konfiguration mangler",invalid_parameters_number:"En zone skal indeholde 4 parametre."},points:{position:{missing:"Punkt konfiguration mangler",invalid_parameters_number:"Et punkt skal indeholde 2 parametre"}},rooms:{id:{missing:"Rummets id mangler",invalid_format:"Ugyldigt rum id: {0}"},outline:{invalid_parameters_number:"Et punkt i rummets kant skal indeholde 2 parametre"}},label:{x:{missing:"Label skal indeholde egenskaben x"},y:{missing:"Label skal indeholde egenskaben y"},text:{missing:"Label skal indeholde egenskaben text"}},icon:{x:{missing:"Icon skal indeholde egenskaben x"},y:{missing:"Icon skal indeholde egenskaben y"},name:{missing:"Icon skal indeholde egenskaben name"}}},service_call_schema:{missing:"Service-kald indstillingerne mangler",service:{missing:"Service-kald indstillinger skal indeholde en service",invalid:"Ugyldig service: {0}"}}}},invalid_entities:"Ugyldige entiteter:",invalid_calibration:"Ugyldig kalibrering, du bedes gennemg?? din konfiguration"},we={status:{label:"Status",value:{Starting:"Starter","Charger disconnected":"Oplader koblet fra",Idle:"Ledig","Remote control active":"Fjernstyring aktivt",Cleaning:"Reng??rer","Returning home":"Vender hjem","Manual mode":"Manuel tilstand",Charging:"Oplader","Charging problem":"Opladnings-problem",Paused:"Sat p?? pause","Spot cleaning":"Spot reng??ring",Error:"Fejl","Shutting down":"Slukker",Updating:"Opdaterer",Docking:"Docker","Going to target":"G??r til m??l","Zoned cleaning":"Zone reng??ring","Segment cleaning":"Segment reng??ring","Emptying the bin":"T??mmes","Charging complete":"Fuldt opladt","Device offline":"Enhed offline"}},battery_level:{label:"Batteri"},fan_speed:{label:"Hastighed",value:{Silent:"Stille",Standard:"Standard",Medium:"Medium",Turbo:"Turbo",Auto:"Auto",Gentle:"Mild"}},sensor_dirty_left:{label:"Sensor vedl."},filter_left:{label:"Filter vedl."},main_brush_left:{label:"Hovedb??rste vedl."},side_brush_left:{label:"Sideb??rste vedl."},cleaning_count:{label:"Reng??ringst??ller"},cleaned_area:{label:"Rengjort areal"},cleaning_time:{label:"Reng??rings tid"}},Se={vacuum_start:"Start",vacuum_pause:"Pause",vacuum_stop:"Stop",vacuum_return_to_base:"Returner",vacuum_clean_spot:"Spotreng??r",vacuum_locate:"Find",vacuum_set_fan_speed:"Skift hastighed"},Pe={hour_shortcut:"t",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},Me={success:"Succes!",no_selection:"Intet valg angivet",failed:"Service-kald fejlede"},Ce={description:{before_link:"Den visuelle editor underst??tter kun kun en konfiguration med en kamera entitet lavet med ",link_text:"Xiaomi Cloud Map Extractor",after_link:". For en mere advanceret konfiguration, brug YAML mode."},label:{name:"Titel (valgfrit)",entity:"St??vsuger entitet (p??kr??vet)",camera:"Kamera entitet (p??kr??vet)",vacuum_platform:"St??vsuger platform (p??kr??vet)",map_locked:"Kort l??st (valgfrit)",two_finger_pan:"To-finger panorering (valgfrit)"}},Te={common:xe,map_mode:ze,validation:Ee,tile:we,icon:Se,unit:Pe,popups:Me,editor:Ce},$e={version:"Version",invalid_configuration:"Ung??ltige Konfiguration {0}",description:"Eine Karte, mit der Sie Ihren Staubsauger kontrollieren k??nnen.",old_configuration:"Es wurde eine alte Konfiguration erkannt. Passen Sie Ihre Konfiguration an das neueste Schema an oder erstellen Sie eine neue Karte von Grund auf.",old_configuration_migration_link:"Migrationsanleitung"},Ne={invalid:"Ung??ltige Vorlage!",vacuum_goto:"Pin & Go",vacuum_goto_predefined:"Punkte",vacuum_clean_segment:"R??ume",vacuum_clean_point:"Reinige Punkte",vacuum_clean_point_predefined:"Punkte",vacuum_clean_zone:"Zone reinigen",vacuum_clean_zone_predefined:"Zonenliste",vacuum_follow_path:"Pfad"},Re={preset:{entity:{missing:"Fehlende Eigenschaft: entity"},preset_name:{missing:"Fehlende Eigenschaft: preset_name,"},platform:{invalid:"Ung??ltige Staubsauger-Plattform: {0}"},map_source:{missing:"Fehlende Eigenschaft: map_source",none_provided:"Keine Kamera und kein Bild vorhanden",ambiguous:"Nur eine Kartenquelle erlaubt"},calibration_source:{missing:"Fehlende Eigenschaft: calibration_source",ambiguous:"Nur eine Kalibrierungsquelle erlaubt",none_provided:"Keine Kalibrierungsquelle vorhanden",calibration_points:{invalid_number:"Genau 3 oder 4 Kalibrierungspunkte erforderlich",missing_map:"Jeder Kalibrierungspunkt muss Kartenkoordinaten enthalten",missing_vacuum:"Jeder Kalibrierungspunkt muss Stabsauger-Koordinaten enthalten",missing_coordinate:"Karten- und Vakuumkalibrierungspunkte m??ssen sowohl x- als auch y-Koordinaten enthalten"}},icons:{invalid:"Fehler in der Konfiguration: icons",icon:{missing:"Jeder Eintrag der Icon-Liste muss die Ikoneneigenschaft"}},tiles:{invalid:"Fehler in der Konfiguration: tiles",entity:{missing:"Jeder Eintrag der Kachel-Liste muss eine Entit??t enthalten"},label:{missing:"Jeder Eintrag der Kachel-Liste muss ein Label enthalten"}},map_modes:{invalid:"Fehler in der Konfiguration: map_modes",icon:{missing:"Fehlendes Symbol f??r den Kartenmodus"},name:{missing:"Fehlender Name f??r den Kartenmodus"},template:{invalid:"Ung??ltige Vorlage: {0}"},predefined_selections:{not_applicable:"Modus {0} unterst??tzt keine vordefinierte Auswahl",zones:{missing:"Fehlende Zonenkonfiguration",invalid_parameters_number:"Jede Zone muss 4 Parameter haben"},points:{position:{missing:"Konfiguration der fehlenden Punkte",invalid_parameters_number:"Jeder Punkt muss 2 Parameter haben"}},rooms:{id:{missing:"Fehlende Raum ID",invalid_format:"Ung??ltige Raum ID: {0}"},outline:{invalid_parameters_number:"Jeder Punkt des Raumes muss 2 Parameter haben."}},label:{x:{missing:"Das Label muss die Eigenschaft x haben"},y:{missing:"Das Label muss die Eigenschaft y haben"},text:{missing:"Das Label muss eine Text-Eigenschaft haben"}},icon:{x:{missing:"Das Icon muss die Eigenschaft x haben"},y:{missing:"Das Icon muss die Eigenschaft y haben"},name:{missing:"Das Icon muss eine Text-Eigenschaft haben"}}},service_call_schema:{missing:"Fehlendes Schema des Service-Aufrufs",service:{missing:"Schema des Service-Aufrufs muss Dienst enthalten",invalid:"Ung??ltiger Service: {0}"}}}},invalid_entities:"Ung??ltige Entit??ten:",invalid_calibration:"Ung??ltige Kalibrierung, bitte ??berpr??fen Sie Ihre Konfiguration"},je={status:{label:"Status",value:{Starting:"Starte","Charger disconnected":"Ladeger??t getrennt",Idle:"Inaktiv","Remote control active":"Fernsteuerung aktiv",Cleaning:"S??ubern","Returning home":"Kehre zur Ladestation zur??ck","Manual mode":"Manueller Modus",Charging:"Lade","Charging problem":"Lade-Problem",Paused:"Pause","Spot cleaning":"Spot-Reinigung",Error:"Fehler","Shutting down":"Herunterfahren",Updating:"Aktualisiere",Docking:"Andocken","Going to target":"Fahre zum Ziel","Zoned cleaning":"Zonen-Reinigung","Segment cleaning":"Segment-Reinigung","Emptying the bin":"Leere den Staubbeh??lter","Charging complete":"Ladung vollst??ndig","Device offline":"Ger??t offline"}},battery_level:{label:"Batterie"},fan_speed:{label:"L??ftergeschwindigkeit",value:{Silent:"Leise",Standard:"Standard",Medium:"Medium",Turbo:"Turbo",Auto:"Auto",Gentle:"Sanft"}},sensor_dirty_left:{label:"Sensoren verbleibend"},filter_left:{label:"Filter verbleibend"},main_brush_left:{label:"Hauptb??rste verbleibend"},side_brush_left:{label:"Seitenb??rste verbleibend"},cleaning_count:{label:"Anzahl der Reinigungen"},cleaned_area:{label:"Gereinigte Fl??che"},cleaning_time:{label:"Zeit der Reinigung"}},Oe={vacuum_start:"Start",vacuum_pause:"Pause",vacuum_stop:"Stop",vacuum_return_to_base:"R??ckkehr zur Basis",vacuum_clean_spot:"Reinige Stelle",vacuum_locate:"Finden",vacuum_set_fan_speed:"L??ftergeschwindigkeit ??ndern"},Le={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},Ie={success:"Erfolg!",no_selection:"Keine Auswahl vorgesehen",failed:"Der Dienst konnte nicht aufgerufen werden"},De={description:{before_link:"Dieser visuelle Editor unterst??tzt nur eine einfache Konfiguration mit einer Kameraeinheit, die mit ",link_text:"Xiaomi Cloud Map Extractor",after_link:". F??r erweiterte Einstellungen verwenden Sie den YAML-Modus."},label:{name:"Titel (optional)",entity:"Staubsauger Entit??t (required)",camera:"Kamera Entit??t (required)",vacuum_platform:"Staubsauger-Plattform (required)",map_locked:"Karte gesperrt (optional)",two_finger_pan:"Zwei-Finger-Pan (optional)"}},Ue={common:$e,map_mode:Ne,validation:Re,tile:je,icon:Oe,unit:Le,popups:Ie,editor:De},Fe={version:"????????????",invalid_configuration:"???? ?????????????????? ?????????????????? {0}",description:"?????? ?????????? ?????? ?????? ?????????????????? ???? ???????????????? ?????? ???????????? ??????",old_configuration:"???????????????????????? ???????????? ??????????????????. ?????????????????????? ?????? ?????????????????? ?????? ?????? ?????? ???????????????? ?????????????? ?? ???????????????????????? ?????? ?????? ?????????? ?????? ?????? ????????.",old_configuration_migration_link:"???????????? ???????????????????? ???????????? ??????????????????"},Ve={invalid:"???? ???????????????? ??????????????!",vacuum_goto:"?????????????? ??????",vacuum_goto_predefined:"????????????",vacuum_clean_segment:"??????????????",vacuum_clean_point:"?????????????????? ???? ????????????",vacuum_clean_point_predefined:"????????????",vacuum_clean_zone:"?????????????????? ???? ????????",vacuum_clean_zone_predefined:"?????????? ?????????? ????????????????????",vacuum_follow_path:"????????????????"},He={preset:{entity:{missing:"???????????? ?? ????????????????: entity"},preset_name:{missing:"???????????? ?? ????????????????: preset_name"},platform:{invalid:"???? ???????????????? ?????????????????? ??????????????: {0}"},map_source:{missing:"???????????? ?? ????????????????: map_source",none_provided:"?????? ???????????????????? ???????? ???????????? ???????? ????????????",ambiguous:"?????????????????????? ???????? ?????? ???????? ??????????"},calibration_source:{missing:"???????????? ?? ????????????????: calibration_source",ambiguous:"?????????????????????? ???????? ?????? ???????? ????????????????????????",none_provided:"?????? ???????????????????? ???????? ????????????????????????",calibration_points:{invalid_number:"?????????????????????? ?????????????? 3 ?? 4 ???????????? ????????????????????????",missing_map:"???????? ???????????? ???????????????????????? ???????????? ???? ???????????????? ?????????????????????????? ?????? ??????????",missing_vacuum:"???????? ???????????? ???????????????????????? ???????????? ???? ???????????????? ?????????????????????????? ?????? ??????????????",missing_coordinate:"???? ???????????? ???????????????????????? ?????? ?????????? ?????? ?????? ?????????????? ???????????? ???? ?????????????????? ?????????????????????????? x ?????? y"}},icons:{invalid:"?????????? ???????? ??????????????????: icons",icon:{missing:"???????? ?????????????? icon ???????????? ???? ???????????????? ?????? ???????????????? icon"}},tiles:{invalid:"?????????? ???????? ??????????????????: tiles",entity:{missing:"???????? ?????????????? tile ???????????? ???? ???????????????? entity"},label:{missing:"???????? ?????????????? tile ???????????? ???? ???????????????? label"}},map_modes:{invalid:"?????????? ???????? ??????????????????: map_modes",icon:{missing:"???????????? ???? ?????????????????? ?????? ???????????? ?????????????????????? ??????????"},name:{missing:"???????????? ???? ?????????? ?????? ???????????? ?????????????????????? ??????????"},template:{invalid:"???? ???????????????? ??????????????: {0}"},predefined_selections:{not_applicable:"?? ???????????????????? {0} ?????? ?????????????????????? ?????????????????????????????? ????????????????",zones:{missing:"???????????? ?? ?????????????? ?????????? ????????????????????",invalid_parameters_number:"???????? ???????? ???????????????????? ???????????? ???? ???????? 4 ??????????????????????"},points:{position:{missing:"???????????? ?? ?????????????? ??????????????",invalid_parameters_number:"Each point must have 2 parameters"}},rooms:{id:{missing:"???????????? ???? ?????????????????????????? ?????? ????????????????",invalid_format:"?????????? ?????????????????????????? ????????????????: {0}"},outline:{invalid_parameters_number:"???????? ???????????? ?????? ?????????????????????????? ?????? ???????????????? ???????????? ???? ???????? 2 ??????????????????????"}},label:{x:{missing:"?? ?????????????? ???????????? ???? ???????? ???????????????? x"},y:{missing:"?? ?????????????? ???????????? ???? ???????? ???????????????? y"},text:{missing:"?? ?????????????? ???????????? ???? ???????? ???????????????? ????????????????"}},icon:{x:{missing:"???? ?????????????????? ???????????? ???? ???????? ???????????????? x"},y:{missing:"???? ?????????????????? ???????????? ???? ???????? ???????????????? y"},name:{missing:"???? ?????????????????? ???????????? ???? ???????? ???????????????? ????????????????"}}},service_call_schema:{missing:"???????????? ???? ?????????????? ???????????? ??????????????????",service:{missing:"???? ?????????????? ???????????? ?????????????????? ???????????? ???? ???????????????????? ????????????????",invalid:"???? ???????????? ????????????????: {0}"}}}},invalid_entities:"?????????? ??????????????????:",invalid_calibration:"?????????? ??????????????????????, ???????????????? ?????????????? ?????? ?????????????????? ??????"},Ze={status:{label:"??????????????????",value:{Starting:"?????????????? ????????????????","Charger disconnected":"???????????????????????? ?????? ???? ??????????????",Idle:"???? ????????????????","Remote control active":"???????????????????????? ?????????????? ??????????????",Cleaning:"?????????????? ????????????????????","Returning home":"?????????????????? ?????? ????????","Manual mode":"?????????????????????? ????????????????????",Charging:"???? ??????????????","Charging problem":"???????????????? ????????????????",Paused:"???? ??????????","Spot cleaning":"???????????????????? ??????????????",Error:"????????????","Shutting down":"?????????????? ??????????????????????",Updating:"?????????????? ????????????????????",Docking:"?????????????? ?????? ????????","Going to target":"???????????? ???????? ??????????????????","Zoned cleaning":"???????????????????? ??????????","Segment cleaning":"???????????????????? ????????????????","Emptying the bin":"???????????????? ??????????","Charging complete":"?????????????? ????????????","Device offline":"?????????????? ?????????? ??????????????"}},battery_level:{label:"????????????????"},fan_speed:{label:"???????????????? ????????????????????",value:{Silent:"??????????????",Standard:"????????????",Medium:"????????????",Turbo:"??????????????",Auto:"????????????????",Gentle:"????????"}},sensor_dirty_left:{label:"?????????????????? ????????????????????"},filter_left:{label:"?????????????????? ??????????????"},main_brush_left:{label:"?????????????????? ???????????? ????????????????"},side_brush_left:{label:"?????????????????? ?????????????? ????????????????"},cleaning_count:{label:"?????????????? ????????????????????????"},cleaned_area:{label:"???????????? ?????? ??????????????????????"},cleaning_time:{label:"???????????? ????????????????????"},mop_left:{label:"?????????????????? ????????????????????????????"}},Ge={vacuum_start:"????????????",vacuum_pause:"??????????",vacuum_stop:"??????????????",vacuum_return_to_base:"?????????????????? ?????? ????????",vacuum_clean_spot:"???????????????????? ??????????????",vacuum_locate:"????????????????????",vacuum_set_fan_speed:"???????????? ?????????????????? ????????????????????"},Xe={hour_shortcut:"??",meter_shortcut:"??",meter_squared_shortcut:"??.??.",minute_shortcut:"??????"},Ke={success:"????????????????!",no_selection:"?????? ???????????? ??????????????",failed:"???????????????? ???????????? ??????????????????"},qe={description:{before_link:"???????? ?? ???????????? ?????????????? ???????????????????????? ?????????????????????? ???????? ?????????????? ?????????????????? ???? ?????? ???????????????? ?????????????? ?????? ?????????????????????????? ?????????????????????????????? ",link_text:"Xiaomi Cloud Map Extractor",after_link:". ?????? ?????? ?????????????????????? ?????????????????? ???????????????????????????? ???? ???????????? ???????????????????????? ?????????????? YAML."},label:{name:"???????????? (??????????????????????)",entity:"???????????????? ?????????????? (????????????????????)",camera:"???????????????? ?????????????? (????????????????????)",vacuum_platform:"?????????????????? ?????????????? (????????????????????)",map_locked:"???????????????? ?????????? (??????????????????????)",two_finger_pan:"???????????????????? ???? ?????? ?????????????? (??????????????????????)"}},Be={common:Fe,map_mode:Ve,validation:He,tile:Ze,icon:Ge,unit:Xe,popups:Ke,editor:qe},Ye={version:"Version",invalid_configuration:"Invalid configuration {0}",description:"A card that lets you control your vacuum",old_configuration:"Old configuration detected. Adjust your config to the latest schema or create a new card from the scratch.",old_configuration_migration_link:"Migration guide"},We={invalid:"Invalid template!",vacuum_goto:"Pin & Go",vacuum_goto_predefined:"Points",vacuum_clean_segment:"Rooms",vacuum_clean_point:"Clean point",vacuum_clean_point_predefined:"Points",vacuum_clean_zone:"Zone cleanup",vacuum_clean_zone_predefined:"Zones list",vacuum_follow_path:"Path"},Je={preset:{entity:{missing:"Missing property: entity"},preset_name:{missing:"Missing property: preset_name"},platform:{invalid:"Invalid vacuum platform: {0}"},map_source:{missing:"Missing property: map_source",none_provided:"No camera neither image provided",ambiguous:"Only one map source allowed"},calibration_source:{missing:"Missing property: calibration_source",ambiguous:"Only one calibration source allowed",none_provided:"No calibration source provided",calibration_points:{invalid_number:"Exactly 3 or 4 calibration points required",missing_map:"Each calibration point must contain map coordinates",missing_vacuum:"Each calibration point must contain vacuum coordinates",missing_coordinate:"Map and vacuum calibration points must contain both x and y coordinate"}},icons:{invalid:"Error in configuration: icons",icon:{missing:"Each entry of icons list must contain icon property"}},tiles:{invalid:"Error in configuration: tiles",entity:{missing:"Each entry of tiles list must contain entity"},label:{missing:"Each entry of tiles list must contain label"}},map_modes:{invalid:"Error in configuration: map_modes",icon:{missing:"Missing icon of map mode"},name:{missing:"Missing name of map mode"},template:{invalid:"Invalid template: {0}"},predefined_selections:{not_applicable:"Mode {0} does not support predefined selections",zones:{missing:"Missing zones configuration",invalid_parameters_number:"Each zone must have 4 parameters"},points:{position:{missing:"Missing points configuration",invalid_parameters_number:"Each point must have 2 parameters"}},rooms:{id:{missing:"Missing room id",invalid_format:"Invalid room id: {0}"},outline:{invalid_parameters_number:"Each point of room outline must have 2 parameters"}},label:{x:{missing:"Label must have x property"},y:{missing:"Label must have y property"},text:{missing:"Label must have text property"}},icon:{x:{missing:"Icon must have x property"},y:{missing:"Icon must have y property"},name:{missing:"Icon must have name property"}}},service_call_schema:{missing:"Missing service call schema",service:{missing:"Service call schema must contain service",invalid:"Invalid service: {0}"}}}},invalid_entities:"Invalid entities:",invalid_calibration:"Invalid calibration, please check your configuration"},Qe={status:{label:"Status",value:{Starting:"Starting","Charger disconnected":"Charger disconnected",Idle:"Idle","Remote control active":"Remote control active",Cleaning:"Cleaning","Returning home":"Returning home","Manual mode":"Manual mode",Charging:"Charging","Charging problem":"Charging problem",Paused:"Paused","Spot cleaning":"Spot cleaning",Error:"Error","Shutting down":"Shutting down",Updating:"Updating",Docking:"Docking","Going to target":"Going to target","Zoned cleaning":"Zoned cleaning","Segment cleaning":"Segment cleaning","Emptying the bin":"Emptying the bin","Charging complete":"Charging complete","Device offline":"Device offline"}},battery_level:{label:"Battery"},fan_speed:{label:"Fan speed",value:{Silent:"Silent",Standard:"Standard",Medium:"Medium",Turbo:"Turbo",Auto:"Auto",Gentle:"Gentle"}},sensor_dirty_left:{label:"Sensors left"},filter_left:{label:"Filter left"},main_brush_left:{label:"Main brush left"},side_brush_left:{label:"Side brush left"},cleaning_count:{label:"Cleaning count"},cleaned_area:{label:"Cleaned area"},cleaning_time:{label:"Cleaning time"},mop_left:{label:"Mop left"}},et={vacuum_start:"Start",vacuum_pause:"Pause",vacuum_stop:"Stop",vacuum_return_to_base:"Return to base",vacuum_clean_spot:"Clean spot",vacuum_locate:"Locate",vacuum_set_fan_speed:"Change fan speed"},tt={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},at={success:"Success!",no_selection:"No selection provided",failed:"Failed to call service"},it={description:{before_link:"This visual editor supports only a basic configuration with a camera entity created using ",link_text:"Xiaomi Cloud Map Extractor",after_link:". For more advanced setup use YAML mode."},label:{name:"Title (optional)",entity:"Vacuum entity (required)",camera:"Camera entity (required)",vacuum_platform:"Vacuum platform (required)",map_locked:"Map locked (optional)",two_finger_pan:"Two finger pan (optional)"}},nt={common:Ye,map_mode:We,validation:Je,tile:Qe,icon:et,unit:tt,popups:at,editor:it},rt={version:"Version",invalid_configuration:"Configuraci??n inv??lida {0}",description:"Una tarjeta para controlar tu aspiradora",old_configuration:"Configuraci??n antigua detectada. Ajusta la configuraci??n al formato actual o crea una nueva tarjeta.",old_configuration_migration_link:"Gu??a de migrado."},ot={invalid:"Plantilla inv??lida!",vacuum_goto:"Marcar e ir",vacuum_goto_predefined:"Puntos",vacuum_clean_segment:"Habitaciones",vacuum_clean_point:"Punto limpio",vacuum_clean_point_predefined:"Puntos",vacuum_clean_zone:"Limpiar zona",vacuum_clean_zone_predefined:"Lista de zonas",vacuum_follow_path:"Ruta"},lt={preset:{entity:{missing:"Propiedad no encontrada: entity"},preset_name:{missing:"Propiedad no encontrada: preset_name"},platform:{invalid:"Plataforma de aspiradora inv??lida: {0}"},map_source:{missing:"Propiedad no encontrada: map_source",none_provided:"Sin c??mara ni imagen proporcionada",ambiguous:"Solo se permite una fuente de mapa"},calibration_source:{missing:"Propiedad no encontrada: calibration_source",ambiguous:"Solo se permite una fuente de calibraci??n",none_provided:"No se proporciona fuente de calibraci??n",calibration_points:{invalid_number:"Se requieren 3 o 4 puntos de calibraci??n",missing_map:"Cada punto de calibraci??n debe contener las coordenadas del mapa",missing_vacuum:"Cada punto de calibraci??n debe contener las coordenadas de la aspiradora",missing_coordinate:"Los puntos de calibraci??n de la aspiradora y del mapa deben contener las coordenadas x e y"}},icons:{invalid:"Error en la configuraci??n: icons",icon:{missing:"Cada entrada de la lista de iconos debe contener la propiedad del icono."}},tiles:{invalid:"Error en la configuraci??n: tiles",entity:{missing:"Cada entrada de la lista de mosaicos debe contener la entidad."},label:{missing:"Cada entrada de la lista de mosaicos debe contener una etiqueta."}},map_modes:{invalid:"Error en la configuraci??n: map_modes",icon:{missing:"Falta el icono del modo de mapa"},name:{missing:"Falta el nombre del modo de mapa"},template:{invalid:"Plantilla inv??lida: {0}"},predefined_selections:{not_applicable:"El modo {0} no admite selecciones predefinidas",zones:{missing:"Faltan configuraciones de zonas",invalid_parameters_number:"Cada zona debe tener 4 par??metros"},points:{position:{missing:"Faltan configuraciones de puntos",invalid_parameters_number:"Cada punto debe tener 2 par??metros"}},rooms:{id:{missing:"Falta la identificaci??n de la habitaci??n",invalid_format:"Identificaci??n de la habitaci??n inv??lida: {0}"},outline:{invalid_parameters_number:"Cada punto del contorno de la habitaci??n debe tener 2 par??metros"}},label:{x:{missing:"La etiqueta debe tener la propiedad x"},y:{missing:"La etiqueta debe tener la propiedad y"},text:{missing:"La etiqueta debe tener la propiedad text"}},icon:{x:{missing:"El ??cono debe tener la propiedad x"},y:{missing:"El ??cono debe tener la propiedad y"},name:{missing:"El ??cono debe tener la propiedad name"}}},service_call_schema:{missing:"Falta un esquema de llamada de servicio",service:{missing:"El esquema de llamada de servicio debe contener service",invalid:"Servicio inv??lido: {0}"}}}},invalid_entities:"Entidades inv??lidas:",invalid_calibration:"Calibraci??n inv??lida, verifique la configuraci??n."},st={status:{label:"Estado",value:{Starting:"Comenzando","Charger disconnected":"Cargador desconectado",Idle:"Inactivo","Remote control active":"Control remoto activo",Cleaning:"Limpiando","Returning home":"Volviendo a la base","Manual mode":"Modo manual",Charging:"Cargando","Charging problem":"Error de carga",Paused:"Pausado","Spot cleaning":"Limpieza de manchas",Error:"Error","Shutting down":"Apagando",Updating:"Actualizando",Docking:"Docking","Going to target":"Ir al objetivo","Zoned cleaning":"Limpieza por zonas","Segment cleaning":"Limpieza por segmentos","Emptying the bin":"Vaciando el dep??sito de mugre","Charging complete":"Carga completa","Device offline":"Dispositivo desconectado"}},battery_level:{label:"Bater??a"},fan_speed:{label:"Velocidad del ventilador",value:{Silent:"Silencioso",Standard:"Normal",Medium:"Medio",Turbo:"Turbo",Auto:"Autom??tico",Gentle:"Suave"}},sensor_dirty_left:{label:"Sensor izquierdo"},filter_left:{label:"Filtro derecho"},main_brush_left:{label:"Cepillo principal izquierdo"},side_brush_left:{label:"Cepillo lateral izquierdo"},cleaning_count:{label:"Contador de limpieza"},cleaned_area:{label:"??rea limpia"},cleaning_time:{label:"Tiempo de limpieza"},mop_left:{label:"Mopa izquierda"}},ct={vacuum_start:"Comenzar",vacuum_pause:"Pausar",vacuum_stop:"Detener",vacuum_return_to_base:"Volver a la base",vacuum_clean_spot:"Punto limpio",vacuum_locate:"Localizar",vacuum_set_fan_speed:"Cambiar la velocidad del ventilador"},dt={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},ut={success:"Listo!",no_selection:"No se ha proporcionado ninguna selecci??n",failed:"No se pudo llamar al servicio"},mt={description:{before_link:"Este editor visual solo admite una configuraci??n b??sica con una entidad de c??mara creada utilizando ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Para una configuraci??n m??s avanzada, utilice el modo YAML."},label:{name:"T??tulo (opcional)",entity:"Entidad de la aspiradora (requerido)",camera:"Entidad de la c??mara (requerido)",vacuum_platform:"Plataforma de la aspiradora (requerido)",map_locked:"Bloquear mapa (opcional)",two_finger_pan:"Mover con dos dedos (opcional)"}},pt={common:rt,map_mode:ot,validation:lt,tile:st,icon:ct,unit:dt,popups:ut,editor:mt},_t={version:"Version",invalid_configuration:"Configuration invalide {0}",description:"Une carte qui vous permet de contr??ler votre robot aspirateur",old_configuration:"Ancienne configuration d??tect??e. Ajustez votre configuration ?? la nouvelle version ou r??cr??ez totalement une nouvelle carte.",old_configuration_migration_link:"Guide de migration"},gt={invalid:"Template incorrect !",vacuum_goto:"Cible",vacuum_goto_predefined:"Points",vacuum_clean_segment:"Pi??ces",vacuum_clean_point:"Nettoyage cibl??",vacuum_clean_point_predefined:"Points",vacuum_clean_zone:"Nettoyage de zone",vacuum_clean_zone_predefined:"Liste des zones",vacuum_follow_path:"Chemin"},vt={preset:{entity:{missing:"Param??tre manquant : entity"},preset_name:{missing:"Param??tre manquant : preset_name"},platform:{invalid:"Plateforme incorrecte : {0}"},map_source:{missing:"Param??tre manquant : map_source",none_provided:"Aucune cam??ra ou image fournie",ambiguous:"Une seule source de carte autoris??e"},calibration_source:{missing:"Param??tre manquant : calibration_source",ambiguous:"Une seule source de calibration autoris??e",none_provided:"Aucune source de calibration fournie",calibration_points:{invalid_number:"3 ou 4 points de calibration sont n??cessaires",missing_map:"Chaque point de calibration doit avoir des coordonn??es de carte",missing_vacuum:"Chaque point de calibration doit avoir des coordonn??es de robot",missing_coordinate:"Tous les points de calibration doivent avoir des coordonn??es x et y"}},icons:{invalid:"Erreur de configuration : ic??nes",icon:{missing:"Chaque ??l??ment de la liste d'ic??nes doit avoir une propri??t?? ?? icon ??"}},tiles:{invalid:"Erreur de configuration : tuiles",entity:{missing:"Chaque ??l??ment de la liste de tuiles doit avoir une propri??t?? ?? entity ??"},label:{missing:"Chaque ??l??ment de la liste de tuiles doit avoir une propri??t?? ?? label ??"}},map_modes:{invalid:"Erreur de configuration : modes de carte",icon:{missing:"Ic??ne de mode de carte manquante"},name:{missing:"Nom de mode de carte manquant"},template:{invalid:"Template incorrect : {0}"},predefined_selections:{not_applicable:"Ce mode {0} ne supporte pas les s??lections pr??d??finies",zones:{missing:"Configuration des zones manquante",invalid_parameters_number:"Chaque zone doit avoir 4 param??tres"},points:{position:{missing:"Configuration des points manquante",invalid_parameters_number:"Chaque point doit avoir 2 param??tres"}},rooms:{id:{missing:"id de pi??ce manquant",invalid_format:"id de pi??ce incorrect : {0}"},outline:{invalid_parameters_number:"Chaque point de contour de pi??ce doit avoir 2 param??tres"}},label:{x:{missing:"L'??tiquette doit avoir une propri??t?? ?? x ??"},y:{missing:"L'??tiquette doit avoir une propri??t?? ?? y ??"},text:{missing:"L'??tiquette doit avoir une propri??t?? ?? text ??"}},icon:{x:{missing:"L'ic??ne doit avoir une propri??t?? x property"},y:{missing:"L'ic??ne doit avoir une propri??t?? y property"},name:{missing:"L'ic??ne doit avoir une propri??t?? ?? name ??"}}},service_call_schema:{missing:"Schema d'appel du service manquant",service:{missing:"Le schema doit contenir un service",invalid:"Service incorrect : {0}"}}}},invalid_entities:"Entit??s incorrectes :",invalid_calibration:"Calibration incorrecte, v??rifiez votre configuration"},ht={status:{label:"Statut",value:{Starting:"D??marrage...","Charger disconnected":"Chargeur d??connect??",Idle:"Inactif","Remote control active":"T??l??commande active",Cleaning:"Nettoyage","Returning home":"Retour ?? la station","Manual mode":"Mode manuel",Charging:"En charge","Charging problem":"Probl??me de chargement",Paused:"En pause","Spot cleaning":"Nettoyage cibl??",Error:"Erreur","Shutting down":"Arr??t en cours...",Updating:"Mise ?? jour",Docking:"Retour ?? la station","Going to target":"En route vers la cible","Zoned cleaning":"Nettoyage de zone","Segment cleaning":"Nettoyage de pi??ce","Emptying the bin":"Vidage du r??servoir","Charging complete":"Chargement termin??","Device offline":"Hors ligne"}},battery_level:{label:"Batterie"},fan_speed:{label:"Puissance",value:{Silent:"Silencieux",Standard:"Standard",Medium:"Moyen",Turbo:"Turbo",Auto:"Auto",Gentle:"Calme"}},sensor_dirty_left:{label:"Capteurs"},filter_left:{label:"Filtre"},main_brush_left:{label:"Brosse principale"},side_brush_left:{label:"Brosse lat??rale"},cleaning_count:{label:"Nombre de nettoyages"},cleaned_area:{label:"Surface nettoy??e"},cleaning_time:{label:"Dur??e de nettoyage"},mop_left:{label:"Serpill??re"}},ft={vacuum_start:"D??marrage",vacuum_pause:"Pause",vacuum_stop:"Stop",vacuum_return_to_base:"Retour ?? la station",vacuum_clean_spot:"Nettoyage cibl??",vacuum_locate:"Localiser",vacuum_set_fan_speed:"Changer la puissance"},bt={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},yt={success:"R??ussi !",no_selection:"S??lection non fournie",failed:"L'appel au service a ??chou??"},kt={description:{before_link:"Cet ??diteur visuel ne permet qu'une configuration de base avec une entit?? cam??ra cr????e avec ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Pour un param??trage plus avanc??, utilisez le mode YAML."},label:{name:"Titre (optionnel)",entity:"Entit?? de l'aspirateur (obligatoire)",camera:"Entit?? de la cam??ra (obligatoire)",vacuum_platform:"Plateforme (obligatoire)",map_locked:"Carte verrouill??e (optionnel)",two_finger_pan:"D??placement ?? deux doigts (optionnel)"}},At={common:_t,map_mode:gt,validation:vt,tile:ht,icon:ft,unit:bt,popups:yt,editor:kt},xt={version:"??????????",invalid_configuration:"?????????? ???? ?????????? {0}",description:"?????????? ???????????? ???? ?????????? ?????????? ??????",old_configuration:"?????????? ?????????? ????????. ???????? ???? ???????????? ?????? ?????????? ?????????????? ?????????? ???? ?????? ?????????? ?????? ??????????????.",old_configuration_migration_link:"?????????? ????????????"},zt={invalid:"?????????? ???? ??????????!",vacuum_goto:"?????? ??????",vacuum_goto_predefined:"????????????",vacuum_clean_segment:"??????????",vacuum_clean_point:"?????? ??????????",vacuum_clean_point_predefined:"????????????",vacuum_clean_zone:"?????????? ????????",vacuum_clean_zone_predefined:"?????????? ????????????",vacuum_follow_path:"????????"},Et={preset:{entity:{missing:"?????? ??????: ????????"},preset_name:{missing:"?????? ????????????: preset_name"},platform:{invalid:"???????????????? ???????? ???? ??????????: {0}"},map_source:{missing:"?????? ??????: map_source",none_provided:"???? ?????????? ???? ??????????",ambiguous:"???????? ???? ???????? ?????? ??????"},calibration_source:{missing:"?????? ????????????: calibration_source",ambiguous:"???????? ???? ???????? ???????? ??????",none_provided:"???? ???????? ???????? ????????",calibration_points:{invalid_number:"???????????? ?????????? 3 ???? 4 ???????????? ????????",missing_map:"???? ?????????? ???????? ?????????? ?????????? ?????????????????????? ??????",missing_vacuum:"???? ?????????? ???????? ?????????? ?????????? ?????????????????????? ????????",missing_coordinate:"???????????? ???????? ???????? ???????????? ???????????? ?????????? ???? ?????????????????????? x ?????? y"}},icons:{invalid:"?????????? ????????????: ??????????????",icon:{missing:"???? ?????????? ???? ?????????? ???????????????? ?????????? ?????????? ???????????? ??????????"}},tiles:{invalid:"?????????? ????????????: ????????????",entity:{missing:"???? ?????? ???? ?????????? ???????????? ???????? ?????????? ????????"},label:{missing:"???? ?????????? ???? ?????????? ???????????? ?????????? ?????????? ??????????"}},map_modes:{invalid:"?????????? ????????????: map_modes",icon:{missing:"?????? ?????????? ???? ?????? ??????"},name:{missing:"?????? ???? ???? ?????? ??????"},template:{invalid:"?????????? ???? ??????????: {0}"},predefined_selections:{not_applicable:"?????? {0} ???????? ???????? ?????????????? ?????????????? ????????",zones:{missing:"?????????? ???????????? ??????????",invalid_parameters_number:"???? ???????? ???????? ?????????? 4 ??????????????"},points:{position:{missing:"?????????? ???????????? ??????????",invalid_parameters_number:"?????? ?????????? ?????????? ?????????? 2 ??????????????"}},rooms:{id:{missing:"???????? ?????? ??????",invalid_format:"???????? ?????? ???? ????????: {0}"},outline:{invalid_parameters_number:"???? ?????????? ???? ???????? ???????? ?????????? ?????????? ???????? 2 ??????????????"}},label:{x:{missing:"???????? ?????????? ???????????? x ????????????"},y:{missing:"???????? ?????????? ???????????? y ????????????"},text:{missing:"???????? ?????????? ???????????? ???? ????????????"}},icon:{x:{missing:"???????? ?????????? ???????????? x ????????????"},y:{missing:"???????? ?????????? ???????????? y ????????????"},name:{missing:"???????? ?????????? ???????????? ???? ????????????"}}},service_call_schema:{missing:"?????????? ?????????? ?????????? ????????",service:{missing:"?????????? ?????????? ???????????? ?????????? ?????????? ??????????",invalid:"?????????? ???? ????????: {0}"}}}},invalid_entities:"???????????? ???? ????????????:",invalid_calibration:"???????? ???? ????????, ?????? ???????? ???? ???????????? ??????"},wt={status:{label:"??????????"},battery_level:{label:"??????????"},fan_speed:{label:"???????????? ????????????"},sensor_dirty_left:{label:"???????? ????????????????"},filter_left:{label:"???????? ??????????"},main_brush_left:{label:"???????? ???????????? ??????????"},side_brush_left:{label:"???????? ???????????? ????"},cleaning_count:{label:"???????? ??????????????"},cleaned_area:{label:"?????? ??????????"},cleaning_time:{label:"?????? ????????????"},mop_left:{label:"???????? ????????????"}},St={vacuum_start:"????????",vacuum_pause:"????????",vacuum_stop:"????????",vacuum_return_to_base:"???????? ?????????? ??????????",vacuum_clean_spot:"?????????? ??????????",vacuum_locate:"??????????",vacuum_set_fan_speed:"?????? ???????????? ????????????"},Pt={hour_shortcut:"??",meter_shortcut:"??",meter_squared_shortcut:"m??",minute_shortcut:"????"},Mt={success:"??????????!",no_selection:"???? ?????????? ??????????",failed:"?????????????? ???????????? ??????????"},Ct={description:{before_link:"???????? ?????????? ???? ???????? ???? ???????????? ???????????? ???? ???????? ?????????? ???????????? ?????????????? ",link_text:"Xiaomi Cloud Map Extractor",after_link:". ???????????? ???????????? ???????? ?????????? ???????? YAML."},label:{name:"?????????? (??????????????????)",entity:"?????????? ???????? (????????)",camera:"?????????? ?????????? (????????)",vacuum_platform:"???????????????? ???????? (????????)",map_locked:"?????????? ?????? (??????????????????)",two_finger_pan:"?????????? ?????? ???????????? (??????????????????)"}},Tt={common:xt,map_mode:zt,validation:Et,tile:wt,icon:St,unit:Pt,popups:Mt,editor:Ct},$t={version:"Verzi??",invalid_configuration:"??rv??nytelen konfigur??ci?? {0}",description:"Egy k??rtya, amely lehet??v?? teszi a v??kuum szab??lyoz??s??t",old_configuration:"R??gi konfigur??ci?? ??szlelve. ??ll??tsa be a konfigur??ci??t a leg??jabb s??m??hoz, vagy hozzon l??tre egy ??j k??rty??t.",old_configuration_migration_link:"Migr??ci??s ??tmutat??"},Nt={invalid:"??rv??nytelen sablon!",vacuum_goto:"Pin & Go",vacuum_goto_predefined:"Pontok",vacuum_clean_segment:"Szob??k",vacuum_clean_zone:"Z??na takar??t??s",vacuum_clean_zone_predefined:"Z??n??k list??ja",vacuum_follow_path:"P??lya"},Rt={preset:{entity:{missing:"Hi??nyz?? tulajdons??g: entity"},preset_name:{missing:"Hi??nyz?? tulajdons??g: preset_name"},platform:{invalid:"??rv??nytelen v??kuumplatform: {0}"},map_source:{missing:"Hi??nyz?? tulajdons??g: map_source",none_provided:"Nincs kamera ??s k??p sem biztos??tott",ambiguous:"Csak egy t??rk??pforr??s enged??lyezett"},calibration_source:{missing:"Hi??nyz?? tulajdons??g: calibration_source",ambiguous:"Csak egy kalibr??ci??s forr??s enged??lyezett",none_provided:"Nincs megadva kalibr??ci??s forr??s",calibration_points:{invalid_number:"Pontosan 3 vagy 4 kalibr??ci??s pont sz??ks??ges",missing_map:"Minden kalibr??ci??s pontnak tartalmaznia kell a t??rk??p koordin??t??it",missing_vacuum:"Minden kalibr??ci??s pontnak v??kuumkoordin??t??kat kell tartalmaznia",missing_coordinate:"A t??rk??pi ??s v??kuumkalibr??ci??s pontoknak x ??s y koordin??t??t is tartalmazniuk kell"}},icons:{invalid:"Hiba a konfigur??ci??ban: icons",icon:{missing:"Az ikonlista minden bejegyz??s??nek tartalmaznia kell az ikon tulajdons??got"}},tiles:{invalid:"Hiba a konfigur??ci??ban: tiles",entity:{missing:"A csempelista minden bejegyz??s??nek tartalmaznia kell entit??st"},label:{missing:"A csempelista minden bejegyz??s??nek tartalmaznia kell egy c??mk??t"}},map_modes:{invalid:"Hiba a konfigur??ci??ban: map_modes",icon:{missing:"Hi??nyzik a t??rk??p m??d ikonja"},name:{missing:"A t??rk??pm??d neve hi??nyzik"},template:{invalid:"??rv??nytelen sablon: {0}"},predefined_selections:{not_applicable:"A(z) {0} m??d nem t??mogatja az el??re meghat??rozott kijel??l??seket",zones:{missing:"Hi??nyz?? z??n??k konfigur??ci??ja",invalid_parameters_number:"Minden z??n??nak 4 param??terrel kell rendelkeznie"},points:{position:{missing:"Hi??nyz?? pontok konfigur??ci??ja",invalid_parameters_number:"Minden pontnak 2 param??terrel kell rendelkeznie"}},rooms:{id:{missing:"Hi??nyz?? szoba id",invalid_format:"??rv??nytelen szoba id: {0}"},outline:{invalid_parameters_number:"A helyis??g k??rvonal??nak minden pontj??n 2 param??terrel kell rendelkeznie"}},label:{x:{missing:"A c??mk??nek x tulajdons??ggal kell rendelkeznie"},y:{missing:"A c??mk??nek y tulajdons??ggal kell rendelkeznie"},text:{missing:"A c??mk??nek sz??vegtulajdons??ggal kell rendelkeznie"}},icon:{x:{missing:"Az ikonnak x tulajdons??ggal kell rendelkeznie"},y:{missing:"Az ikonnak y tulajdons??ggal kell rendelkeznie"},name:{missing:"Az ikonnak n??v tulajdons??ggal kell rendelkeznie"}}},service_call_schema:{missing:"Hi??nyz?? szolg??ltat??sh??v??si s??ma",service:{missing:"A szolg??ltat??sh??v??si s??m??nak tartalmaznia kell a szolg??ltat??st",invalid:"??rv??nytelen szolg??ltat??s: {0}"}}}},invalid_entities:"??rv??nytelen entit??sok:",invalid_calibration:"??rv??nytelen kalibr??ci??, ellen??rizze a konfigur??ci??t"},jt={status:{label:"St??tusz"},battery_level:{label:"Akkumul??tor"},fan_speed:{label:"Ventil??tor ??zemm??d"},sensor_dirty_left:{label:"Szenzorok"},filter_left:{label:"Sz??r??"},main_brush_left:{label:"F?? kefe"},side_brush_left:{label:"Oldalkefe"},cleaning_count:{label:"Takar??t??s sz??ml??l??"},cleaned_area:{label:"Tiszt??tott ter??let"},cleaning_time:{label:"Takar??t??si id??"}},Ot={vacuum_start:"Ind??t??s",vacuum_pause:"Sz??net",vacuum_stop:"??lljon meg",vacuum_return_to_base:"Vissza a b??zisra",vacuum_clean_spot:"Clean spot",vacuum_locate:"Robot megkeres??se",vacuum_set_fan_speed:"Ventil??tor ??zemm??dj??nak m??dos??t??sa"},Lt={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},It={success:"Siker!",no_selection:"Nincs kiv??lasztva",failed:"Nem siker??lt megh??vni a szolg??ltat??st"},Dt={description:{before_link:"Ez a vizu??lis szerkeszt?? csak az alapkonfigur??ci??t t??mogatja a seg??ts??g??vel l??trehozott kameraentit??ssal ",link_text:"Xiaomi Cloud Map Extractor",after_link:". A fejlettebb be??ll??t??shoz haszn??lja a YAML m??dot."},label:{name:"C??m (nem k??telez??)",entity:"V??kuum entit??s (k??telez??)",camera:"Kamera entit??s (k??telez??)",vacuum_platform:"V??kuumos platform (sz??ks??ges)",map_locked:"T??rk??p z??rolva (opcion??lis)",two_finger_pan:"K??tujjas p??szt??z??s (opcion??lis)"}},Ut={common:$t,map_mode:Nt,validation:Rt,tile:jt,icon:Ot,unit:Lt,popups:It,editor:Dt},Ft={version:"??tg??fa",invalid_configuration:"??gildar stillingar {0}",description:"Spjald sem leyfir ????r a?? stj??rna ryksuguv??lmenni ????nu",old_configuration:"Gamlar stillingar fundust. Uppf??r??u stillingarnar fyrir n??justu ??tg??fu e??a b????u til n??tt spjald fr?? grunni.",old_configuration_migration_link:"A??l??gunar lei??beiningar"},Vt={invalid:"??gilt sni??m??t!",vacuum_goto:"Velja og af sta??!",vacuum_goto_predefined:"Deplar",vacuum_clean_segment:"Herbergi",vacuum_clean_point:"Hreinn depill",vacuum_clean_point_predefined:"Deplar",vacuum_clean_zone:"??r??fa sv????i",vacuum_clean_zone_predefined:"Sv????islistar",vacuum_follow_path:"Ferill"},Ht={preset:{entity:{missing:"Vantar einingu: entity"},preset_name:{missing:"Vantar einingu: preset_name"},platform:{invalid:"Rangt ryksugu sni??m??t: {0}"},map_source:{missing:"Vantar einingu: map_source",none_provided:"Enginn myndav??l n?? mynd er skr????",ambiguous:"A??eins einn uppruni fyrir kort leyf??ur"},calibration_source:{missing:"Vantar einindi: calibration_source",ambiguous:"A??eins ein kv??r??unar stilling leyf??",none_provided:"Engin kv??r??unarstilling er skilgreind",calibration_points:{invalid_number:":???? ver??ur a?? skilagreina n??kv??mlega 3 e??a 4 kv??r??unar punkta",missing_map:"Hver punktur ver??ur a?? vera hnit ?? kortinu",missing_vacuum:"Hver punktur ?? kortinu ver??ur a?? vera hnit fyrir ryksuguna.",missing_coordinate:"Kort og ryksugu stillingar ver??a a?? innihalda x og y hnit"}},icons:{invalid:"Villa ?? stillingum: icons",icon:{missing:'Hver f??rsla fyrir sm??mynd ver??ur a?? innihalda "icon" stillingu'}},tiles:{invalid:"Villa ?? stillingum: tiles",entity:{missing:'Hver f??rsla ?? lista ver??ur a?? innihalda "entity"'},label:{missing:'Hver f??rsla ?? lista ver??ur a?? innihalda "label"'}},map_modes:{invalid:"Villa ?? stillingum: map_modes",icon:{missing:'??a?? vantar "icon" fyrir kortaham'},name:{missing:'??a?? vantar "name" einindi?? fyrir kortaham'},template:{invalid:"Rangt sni??m??t: {0}"},predefined_selections:{not_applicable:"Hamur {0} sty??ur ekki fyrirfram skilgreint val",zones:{missing:"??a?? vantar skilgreiningar fyrir sv????i",invalid_parameters_number:"Hvert sv????i ver??ur a?? hafa 4 f??ribreytur"},points:{position:{missing:"??a?? vantar stillingar fyrir hnit",invalid_parameters_number:"Hvert hnit ver??ur a?? hafa 2 f??ribreytur"}},rooms:{id:{missing:"??a?? vantar au??kenni herbergis",invalid_format:"Vitlaust au??kenni : {0}"},outline:{invalid_parameters_number:"Hvert hnit ?? ??tl??num fyrir herbergi ver??ur a?? innihalda 2 f??ribreytur"}},label:{x:{missing:"Merkimi??i ver??ur a?? innihalda x einingu"},y:{missing:"Merkimi??i ver??ur a?? innihalda y einingu"},text:{missing:'Merkimi??i ver??ur a?? innihalda "text" einingu'}},icon:{x:{missing:"Sm??mynd ver??ur a?? innihalda x einingu"},y:{missing:"Sm??mynd ver??ur a?? innihalda y einingu"},name:{missing:'Sm??mynd ver??ur a?? innihalda "name" einingu'}}},service_call_schema:{missing:"Skema fyrir ??j??nustukall vantar",service:{missing:'Skema fyrir ??j??nustukall ver??ur a?? innihalda "service"',invalid:"R??ng ??j??nusta: {0}"}}}},invalid_entities:"R??ng einindi:",invalid_calibration:"R??ng kv??r??un, athuga??u stillingarnar ????nar"},Zt={status:{label:"Sta??a",value:{Starting:"R??si","Charger disconnected":"Hle??slut??ki aftengt",Idle:"A??ger??arlaus","Remote control active":"Fjarst??ring virk",Cleaning:"A?? ??r??fa","Returning home":"?? lei??inni heim","Manual mode":"Handvirk st??ring",Charging:"?? hle??slu","Charging problem":"Vandam??l vi?? hle??slu",Paused:"?? bi??","Spot cleaning":"Hreinsa blett",Error:"Villa","Shutting down":"Slekk ??",Updating:"Uppf??ri",Docking:"Vi?? hle??slust????","Going to target":"Fer ?? skotmark","Zoned cleaning":"??r??fa sv????i","Segment cleaning":"??r??fa herbergi","Emptying the bin":"T??ma ruslatunnu","Charging complete":"Hle??slu loki??","Device offline":"T??ki er ??tengt"}},battery_level:{label:"Rafhla??a"},fan_speed:{label:"Viftuhra??i",value:{Silent:"Hlj????l??tur",Standard:"Venjulegur",Medium:"Mi??lungs",Turbo:"T??rb??",Auto:"Sj??lfvirkt",Gentle:"????gilegur"}},sensor_dirty_left:{label:"Vegg og fallskynjarar eftir"},filter_left:{label:"S??a eftir"},main_brush_left:{label:"A??albursti eftir"},side_brush_left:{label:"Hli??arbursti eftir"},cleaning_count:{label:"Fj??ldi ??rifa"},cleaned_area:{label:"Sv????i ??rifi??"},cleaning_time:{label:"??rift??mi"},mop_left:{label:"Moppa eftir"}},Gt={vacuum_start:"R??sa",vacuum_pause:"Gera hl??",vacuum_stop:"Stoppa",vacuum_return_to_base:"Tilbaka ?? st????",vacuum_clean_spot:"Hreinsa blett",vacuum_locate:"Finna",vacuum_set_fan_speed:"Breyta viftuhra??a"},Xt={hour_shortcut:"k",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"m??n"},Kt={success:"Virka??i!",no_selection:"Ekkert val",failed:"Villa vi?? ??j??nustukall"},qt={description:{before_link:'Sj??nr??nn ritill sty??ur a??eins grunn stillingar me?? "camera" einingunni sem notar ',link_text:"Xiaomi Cloud Map Extractor",after_link:". Fyrir ??tarstillingar, nota??u YAML ham."},label:{name:"Titill (valkv??tt)",entity:"Vacuum eining (nau??synlegt)",camera:"Camera eining (nau??synlegt)",vacuum_platform:"Vacuum platform (nau??synlegt)",map_locked:"L??sa korti (valkv??tt)",two_finger_pan:"Val me?? 2 fingrum (valkv??tt)"}},Bt={common:Ft,map_mode:Vt,validation:Ht,tile:Zt,icon:Gt,unit:Xt,popups:Kt,editor:qt},Yt={version:"Versione",invalid_configuration:"Configurazione non valida {0}",description:"Una card per controllare il tuo robot aspirapolvere",old_configuration:"Trovata una vecchia configurazione. Correggi la configurazione all'ultima possibile o crea una nuova card.",old_configuration_migration_link:"Guida Migrazione"},Wt={invalid:"Template non valido!",vacuum_goto:"Pin & Go",vacuum_goto_predefined:"Punti",vacuum_clean_segment:"Stanze",vacuum_clean_zone:"Pulizia a Zone",vacuum_clean_zone_predefined:"Lista Zone",vacuum_follow_path:"Percorso"},Jt={preset:{entity:{missing:"Propriet?? Mancante: entity"},preset_name:{missing:"Propriet?? Mancante: preset_name"},platform:{invalid:"Piattaforma aspirapolvere non valida: {0}"},map_source:{missing:"Propriet?? Mancante: map_source",none_provided:"Inserire camera o immagine",ambiguous:"?? consentita una sola sorgente della mappa"},calibration_source:{missing:"Propriet?? Mancante: calibration_source",ambiguous:"?? consentita una solo una sorgente di calibrazione",none_provided:"Nessuna fonte di calibrazione fornita",calibration_points:{invalid_number:"Esattamente 3 o 4 punti di calibrazione richiesti",missing_map:"Ogni punto di calibrazione deve contenere le coordinate della mappa",missing_vacuum:"Ciascun punto di calibrazione deve contenere le coordinate dell'aspirapolvere",missing_coordinate:"I punti di calibrazione della mappa e dell'aspirapolvere devono contenere sia le coordinate x che y"}},icons:{invalid:"Errore nella configurazione: icons",icon:{missing:"Ogni voce dell'elenco delle icone deve contenere la propriet?? dell'icona"}},tiles:{invalid:"Errore nella configurazione: tiles",entity:{missing:"Ogni voce dell'elenco 'tile' deve contenere una entity"},label:{missing:"Ogni voce dell'elenco 'tile' deve contenere una label"}},map_modes:{invalid:"Errore nella configurazione: map_modes",icon:{missing:"Icona della modalit?? mappa mancante"},name:{missing:"Nome della modalit?? mappa mancante"},template:{invalid:"Template non valido: {0}"},predefined_selections:{not_applicable:"Modalit?? {0} non supporta le selezioni predefinite",zones:{missing:"Configurazione zone mancante",invalid_parameters_number:"Ogni zona deve avere 4 parametri"},points:{position:{missing:"Configurazione punti mancante",invalid_parameters_number:"Ogni punto deve avere 2 parametri"}},rooms:{id:{missing:"ID stanza mancante",invalid_format:"ID stanza non valido: {0}"},outline:{invalid_parameters_number:"Ogni punto del contorno della stanza deve avere 2 parametri"}},label:{x:{missing:"Label deve avere la propriet?? x"},y:{missing:"Label deve avere la propriet?? y"},text:{missing:"Label deve avere la propriet?? text"}},icon:{x:{missing:"Icon deve avere la propriet?? x"},y:{missing:"Icon deve avere la propriet?? y"},name:{missing:"Icon deve avere la propriet?? name"}}},service_call_schema:{missing:"Schema della chiamata al servizio mancante",service:{missing:"La chiamata al servizio deve contenere un servizio",invalid:"Servizio non valido: {0}"}}}},invalid_entities:"Entit?? non valide:",invalid_calibration:"Calibrazione non valida, per favore controlla la configurazione"},Qt={status:{label:"Stato",value:{Starting:"Avvio","Charger disconnected":"Caricabatterie scollegato",Idle:"Riposo","Remote control active":"Controllo remoto attivo",Cleaning:"Pulizia","Returning home":"Ritorno alla base","Manual mode":"Modalit?? Manuale",Charging:"Caricamento","Charging problem":"Problema di ricarica",Paused:"Pausa","Spot cleaning":"Pulizia a punti",Error:"Errore","Shutting down":"Spegnimento",Updating:"Aggiornamento in corso",Docking:"In base","Going to target":"Andando al punto","Zoned cleaning":"Pulizia a zone","Segment cleaning":"Pulizia segmenti","Emptying the bin":"Svuotare il contenitore","Charging complete":"Carica Completata","Device offline":"Device offline"}},battery_level:{label:"Batteria"},fan_speed:{label:"Velocit?? Ventola",value:{Silent:"Silenzioso",Standard:"Standard",Medium:"Media",Turbo:"Turbo",Auto:"Auto",Gentle:"Delicato"}},sensor_dirty_left:{label:"Sensori"},filter_left:{label:"Filtro"},main_brush_left:{label:"Spazzola Principale"},side_brush_left:{label:"Spazzola laterale"},cleaning_count:{label:"Conteggio pulizia"},cleaned_area:{label:"Area pulita"},cleaning_time:{label:"Tempo di pulizia"},mop_left:{label:"Panno"}},ea={vacuum_start:"Avvia",vacuum_pause:"Pausa",vacuum_stop:"Stop",vacuum_return_to_base:"Ritorna alla base",vacuum_clean_spot:"Pulizia spot",vacuum_locate:"Localizza",vacuum_set_fan_speed:"Cambia velocit?? ventola"},ta={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},aa={success:"Confermato!",no_selection:"Nessuna Selezione",failed:"Chiamata al servizio fallita"},ia={description:{before_link:"Questo editor visivo supporta solo una configurazione di base con un'entit?? telecamera creata utilizzando ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Per una configurazione pi?? avanzata usa la modalit?? YAML."},label:{name:"Titolo (opzionale)",entity:"Entit?? Aspirapolvere (obbligatorio)",camera:"Entit?? camera (obbligatorio)",vacuum_platform:"Piattaforma aspirapolvere (obbligatorio)",map_locked:"Blocco mappa (opzionale)",two_finger_pan:"Zoom a due dita (opzionale)"}},na={common:Yt,map_mode:Wt,validation:Jt,tile:Qt,icon:ea,unit:ta,popups:aa,editor:ia},ra={version:"Versie",invalid_configuration:"Ongeldige configuratie {0}",description:"Een kaart waarmee je jouw robotstofzuiger kunt bedienen.",old_configuration:"Oude configuratie gevonden. Pas je configuratie aan op basis van de nieuwe versie of maak een volledig nieuwe kaart.",old_configuration_migration_link:"Uitleg configuratie aanpassen"},oa={invalid:"Ongeldig sjabloon!",vacuum_goto:"Pin & Go",vacuum_goto_predefined:"Punten",vacuum_clean_segment:"Kamers",vacuum_clean_point:"Schoonmaak punten",vacuum_clean_point_predefined:"Punten",vacuum_clean_zone:"Zone schoonmaak",vacuum_clean_zone_predefined:"Zone lijst",vacuum_follow_path:"Pad"},la={preset:{entity:{missing:"Ontbrekende parameter: entity"},preset_name:{missing:"Ontbrekende parameter: preset_name"},platform:{invalid:"Ongeldig stofzuigerplatform: {0}"},map_source:{missing:"Ontbrekende parameter: map_source",none_provided:"Geen camera of afbeelding opgegeven",ambiguous:"Slechts ????n kaartbron toegestaan"},calibration_source:{missing:"Ontbrekende parameter: calibration_source",ambiguous:"Slechts ????n kalibratiebron toegestaan",none_provided:"Geen kalibratiebron opgegeven",calibration_points:{invalid_number:"Precies 3 of 4 kalibratiepunten vereist",missing_map:"Elk kalibratiepunt moet kaart co??rdinaten bevatten",missing_vacuum:"Elk kalibratiepunt moet stofzuiger co??rdinaten bevatten",missing_coordinate:"Kaart en stofzuiger kalibratiepunten moeten zowel een x als y co??dinaat bevatten"}},icons:{invalid:"Fout in configuratie: icons",icon:{missing:"Elk item in de lijst moet de eigenschap ?? icon ?? bevatten"}},tiles:{invalid:"Fout in configuratie: tiles",entity:{missing:"Elk item in de lijst moet de eigenschap ?? entity ?? bevatten"},label:{missing:"Elk item in de lijst moet de eigenschap ?? label ?? bevatten"}},map_modes:{invalid:"Fout in configuratie: map_modes",icon:{missing:"Pictogram van kaartmodus ontbreekt"},name:{missing:"Naam van kaartmodus ontbreekt"},template:{invalid:"Ongeldig sjabloon: {0}"},predefined_selections:{not_applicable:"Modus {0} ondersteunt geen vooraf gedefinieerde selecties",zones:{missing:"Zone configuratie ontbreekt",invalid_parameters_number:"Elke zone moet 4 co??rdinaten hebben"},points:{position:{missing:"Punten configuratie ontbreekt",invalid_parameters_number:"Elk punt moet 2 co??rdinaten hebben"}},rooms:{id:{missing:"Kamer id ontbreekt",invalid_format:"Ongeldige kamer id: {0}"},outline:{invalid_parameters_number:"Elk punt van de kamer omtrek moet 2 co??rdinaten hebben"}},label:{x:{missing:"Elk label moet de eigenschap ?? x ?? bevatten"},y:{missing:"Elk label moet de eigenschap ?? y ?? bevatten"},text:{missing:"Elk label moet de eigenschap ?? text ?? bevatten"}},icon:{x:{missing:"Elk pictogram moet de eigenschap ?? x ?? bevatten"},y:{missing:"Elk pictogram moet de eigenschap ?? y ?? bevatten"},name:{missing:"Elk pictogram moet de eigenschap ?? name ?? bevatten"}}},service_call_schema:{missing:"Serviceoproep schema",service:{missing:"Serviceoproep schema moet een service bevatten",invalid:"Ongeldige service: {0}"}}}},invalid_entities:"Ongeldige entiteiten:",invalid_calibration:"Ongeldige kalibratie, controleer je configuratie"},sa={status:{label:"Status",value:{Starting:"Starten","Charger disconnected":"Lader niet aangesloten",Idle:"Inactief","Remote control active":"Afstandsbediening actief",Cleaning:"Schoonmaken","Returning home":"Terugkeren naar basisstation","Manual mode":"Handmatige modus",Charging:"Laden","Charging problem":"Laadprobleem",Paused:"Gepauzeerd","Spot cleaning":"Spot schoonmaken",Error:"Fout","Shutting down":"Afsluiten",Updating:"Updaten",Docking:"Docking","Going to target":"Onderweg naar doel","Zoned cleaning":"Zone schoonmaken","Segment cleaning":"Kamers schoonmaken","Emptying the bin":"Opvangbak leegmaken","Charging complete":"Opladen voltooid","Device offline":"Apparaat offline"}},battery_level:{label:"Batterij"},fan_speed:{label:"Fan snelheid",value:{Silent:"Stil",Standard:"Standaard",Medium:"Medium",Turbo:"Turbo",Auto:"Automatisch",Gentle:"Zacht"}},sensor_dirty_left:{label:"Sensors"},filter_left:{label:"Filter"},main_brush_left:{label:"Hoofdborstel"},side_brush_left:{label:"Zijborstel"},cleaning_count:{label:"Schoonmaakteller"},cleaned_area:{label:"Oppervlakte"},cleaning_time:{label:"Schoonmaaktijd"},mop_left:{label:"Dweil"}},ca={vacuum_start:"Start",vacuum_pause:"Pause",vacuum_stop:"Stop",vacuum_return_to_base:"Terug naar basisstation",vacuum_clean_spot:"Spot schoonmaak",vacuum_locate:"Lokaliseren",vacuum_set_fan_speed:"Fan snelheid aanpassen"},da={hour_shortcut:"u",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},ua={success:"Succes!",no_selection:"Geen selectie opgegeven",failed:"Fout bij aanroepen service"},ma={description:{before_link:"Deze grafische editor ondersteunt slechts een basis configuratie met een camera entiteit welke gemaakt is met ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Gebruik de YAML modus voor een geavanceerde configuratie."},label:{name:"Titel (optioneel)",entity:"Stofzuiger entiteit (verplicht)",camera:"Camera entiteit (verplicht)",vacuum_platform:"stofzuigerplatform (verplicht)",map_locked:"Kaart vergrendelen (optioneel)",two_finger_pan:"Kaart verplaatsen met twee vingers (optioneel)"}},pa={common:ra,map_mode:oa,validation:la,tile:sa,icon:ca,unit:da,popups:ua,editor:ma},_a={version:"Wersja",invalid_configuration:"Nieprawid??owa konfiguracja {0}",description:"Karta pozwalaj??ca na kontrolowanie odkurzacza",old_configuration:"Wykryto star?? wersj?? konfiguracji. Dostosuj kart?? do najnowszej wersji, albo utw??rz j?? od nowa.",old_configuration_migration_link:"Przewodnik po migracji"},ga={invalid:"Nieprawid??owa warto???? template",vacuum_goto:"Id?? do punktu",vacuum_goto_predefined:"Zapisane punkty",vacuum_clean_segment:"Pokoje",vacuum_clean_point:"Sprz??tanie punktowe",vacuum_clean_point_predefined:"Zapisane punkty",vacuum_clean_zone:"Sprz??tanie strefowe",vacuum_clean_zone_predefined:"Zapisane strefy",vacuum_follow_path:"??cie??ka"},va={preset:{entity:{missing:"Brakuj??cy parametr: entity"},preset_name:{missing:"Brakuj??cy parametr: preset_name"},platform:{invalid:"Nieprawid??owa platforma odkurzacza: {0}"},map_source:{missing:"Brakuj??cy parametr: map_source",none_provided:"Nie podano ??r??d??a mapy",ambiguous:"Mo??na poda?? tylko jedno ??r??d??o mapy"},calibration_source:{missing:"Brakuj??cy parametr: calibration_source",ambiguous:"Mo??na poda?? tylko jedno ??r??d??o kalibracji",none_provided:"Nie podano ??r??d??a kalibracji",calibration_points:{invalid_number:"Wymagane 3 b??d?? 4 punkty kalibracyjne",missing_map:"Ka??dy punkt kalibracyjny musi posiada?? wsp????rz??dne na mapie",missing_vacuum:"Ka??dy punkt kalibracyjny musi posiada?? wsp????rz??dne w uk??adzie odkurzacza",missing_coordinate:"Ka??dy punkt kalibracyjny musi mie?? wsp????rz??dne x i y"}},icons:{invalid:"B????d w konfiguracji: icons",icon:{missing:'Ka??da pozycja na li??cie ikon musi posiada?? parametr "icon"'}},tiles:{invalid:"B????d w konfiguracji: tiles",entity:{missing:'Ka??da pozycja na li??cie kafelk??w musi posiada?? parametr "entity"'},label:{missing:'Ka??da pozycja na li??cie kafelk??w musi posiada?? parametr "label"'}},map_modes:{invalid:"B????d w konfiguracji: map_modes",icon:{missing:"Brakuj??ca ikona szablonu trybu mapy"},name:{missing:"Brakuj??ca nazwa szablonu trybu mapy"},template:{invalid:"Nieprawid??owy szablon trybu mapy: {0}"},predefined_selections:{not_applicable:"Szablon {0} nie wspiera zapisywania zaznacze??",zones:{missing:"Brakuj??ca lista zapisanych stref",invalid_parameters_number:"Ka??da zapisana strefa musi posiada?? 4 wsp????rz??dne"},points:{position:{missing:"Brakuj??ca lista zapisanych punkt??w",invalid_parameters_number:"Ka??dy zapisany punkt musi posiada?? 2 wsp????rz??dne"}},rooms:{id:{missing:"Brakuj??cy identyfikator pokoju",invalid_format:"Nieprawid??owy identyfikator pokoju: {0}"},outline:{invalid_parameters_number:"Ka??dy punkt obrysu pokoju musi posiada?? 2 wsp????rz??dne"}},label:{x:{missing:"Ka??da etykieta musi posiada?? wsp????rz??dn?? x"},y:{missing:"Ka??da etykieta musi posiada?? wsp????rz??dn?? y"},text:{missing:"Ka??da etykieta musi posiada?? tekst"}},icon:{x:{missing:"Ka??da ikona musi posiada?? wsp????rz??dn?? x"},y:{missing:"Ka??da ikona musi posiada?? wsp????rz??dn?? y"},name:{missing:'Ka??da ikona musi posiada?? parametr "name"'}}},service_call_schema:{missing:"Brakuj??cy schemat wywo??ania us??ugi",service:{missing:"Ka??dy schemat us??ugi musi posiada?? podan?? nazw?? us??ugi  ",invalid:"Nieprawid??owa us??uga: {0}"}}}},invalid_entities:"Nieprawid??owe encje:",invalid_calibration:"Nieprawid??owa kalibracja, sprawd?? konfiguracj??"},ha={status:{label:"Status",value:{Starting:"Uruchamianie","Charger disconnected":"??adowarka od????czona",Idle:"Nieaktywny","Remote control active":"Zdalne sterowanie",Cleaning:"Sprz??tanie","Returning home":"Powr??t do stacji","Manual mode":"Tryb manualny",Charging:"??adowanie","Charging problem":"Problem z ??adowaniem",Paused:"Wstrzymany","Spot cleaning":"Sprz??tanie punktowe",Error:"B????d","Shutting down":"Wy????czanie",Updating:"Aktualizowanie",Docking:"Dokowanie","Going to target":"W drodze do celu","Zoned cleaning":"Sprz??tanie strefowe","Segment cleaning":"Sprz??tanie pokoju","Emptying the bin":"Opr????nianie pojemnika","Charging complete":"??adowanie zako??czone","Device offline":"Offline"}},battery_level:{label:"Bateria"},fan_speed:{label:"Wentylator",value:{Silent:"Cichy",Standard:"Normalny",Medium:"??redni",Turbo:"Turbo",Auto:"Automatyczny",Gentle:"Delikatny"}},sensor_dirty_left:{label:"Sensory"},filter_left:{label:"Filtr"},main_brush_left:{label:"G????wna szczotka"},side_brush_left:{label:"Boczna szczotka"},cleaning_count:{label:"Licznik sprz??ta??"},cleaned_area:{label:"Powierzchnia"},cleaning_time:{label:"Czas sprz??tania"},mop_left:{label:"Mop"}},fa={vacuum_start:"Uruchom",vacuum_pause:"Wstrzymaj",vacuum_stop:"Zatrzymaj",vacuum_return_to_base:"Wr???? do stacji dokuj??cej",vacuum_clean_spot:"Wyczy???? miejsce",vacuum_locate:"Zlokalizuj",vacuum_set_fan_speed:"Zmie?? pr??dko???? wentylatora"},ba={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},ya={success:"Us??uga wywo??ana!",no_selection:"Nie wybrano zaznaczenia",failed:"B????d wywo??ania us??ugi"},ka={description:{before_link:"Ten edytor interfejsu wspiera jedynie podstawow?? konfiguracj?? dla kamery utworzonej przy u??yciu ",link_text:"Xiaomi Cloud Map Extractora",after_link:". W celu bardziej zaawansowanej konfiguracji u??yj trybu YAML."},label:{name:"Tytu?? (opcjonalny)",entity:"Encja odkurzacza (wymagana)",camera:"Kamera z map?? (wymagana)",vacuum_platform:"Platforma integracji odkurzacza (wymagana)",map_locked:"Blokada mapy (opcjonalna)",two_finger_pan:"Przesuwanie mapy dwoma palcami (opcjonalne)"}},Aa={common:_a,map_mode:ga,validation:va,tile:ha,icon:fa,unit:ba,popups:ya,editor:ka},xa={version:"Vers??o",invalid_configuration:"configura????o inv??lida {0}",description:"Um cart??o que permite que voc?? controlar seu aspirador",old_configuration:"Configura????o antiga detectada. Ajuste sua configura????o para a vers??o mais recente ou crie um novo cart??o do zero.",old_configuration_migration_link:"Guia de migra????o"},za={invalid:"template inv??lido!",vacuum_goto:"Click & vai",vacuum_goto_predefined:"Local",vacuum_clean_segment:"Quartos",vacuum_clean_zone:"Limpar zona",vacuum_clean_zone_predefined:"Lista de zonas",vacuum_follow_path:"Seguir caminho"},Ea={preset:{entity:{missing:"Propriedade ausente: entidade"},preset_name:{missing:"Propriedade ausente: preset_name"},platform:{invalid:"Plataforma de aspirador inv??lida: {0}"},map_source:{missing:"Propriedade ausente: map_source",none_provided:"Nenhuma c??mera nem imagem fornecida",ambiguous:"Apenas uma fonte de mapa permitida"},calibration_source:{missing:"Propriedade ausente: calibration_source",ambiguous:"Apenas uma fonte de calibra????o permitida",none_provided:"Nenhuma fonte de calibra????o fornecida",calibration_points:{invalid_number:"Exatamente 3 ou 4 pontos de calibra????o s??o necess??rios",missing_map:"Cada ponto de calibra????o deve conter coordenadas do mapa",missing_vacuum:"Cada ponto de calibra????o deve conter coordenadas do aspirador",missing_coordinate:"Os pontos de calibra????o do mapa e do aspirador devem conter as coordenadas x e y"}},icons:{invalid:"Erro na configura????o: icones",icon:{missing:"Cada entrada na lista de ??cones deve conter a propriedade do ??cone"}},tiles:{invalid:"Erro na configura????o: tiles",entity:{missing:"Cada entrada da lista de tiles deve conter entidade"},label:{missing:"Cada entrada da lista de tiles deve conter label"}},map_modes:{invalid:"Erro na configura????o: map_modes",icon:{missing:"Falta o ??cone no modo de mapa"},name:{missing:"Falta o nome no modo de mapa"},template:{invalid:"Template inv??lido: {0}"},predefined_selections:{not_applicable:"O modo {0} n??o oferece suporte a sele????es predefinidas",zones:{missing:"Falta a Configura????o de zonas",invalid_parameters_number:"Cada zona deve ter 4 par??metros"},points:{position:{missing:"Falta a configura????o do local",invalid_parameters_number:"Cada local deve ter 2 par??metros"}},rooms:{id:{missing:"Falta o id do quarto",invalid_format:"Id inv??lido do quarto: {0}"},outline:{invalid_parameters_number:"Cada local da borda do quarto deve ter 2 par??metros"}},label:{x:{missing:"A label deve ter a propriedade x"},y:{missing:"A label deve ter a propriedade y"},text:{missing:"A label deve ter um texto"}},icon:{x:{missing:"O ??cone deve ter a propriedade x"},y:{missing:"O ??cone deve ter a propriedade y"},name:{missing:"O ??cone deve ter um nome"}}},service_call_schema:{missing:"Falta o call service",service:{missing:"O call service deve conter o servi??o",invalid:"servi??o inv??lido: {0}"}}}},invalid_entities:"entidades inv??lidas:",invalid_calibration:"Calibra????o inv??lida, verifique sua configura????o"},wa={status:{label:"Status"},battery_level:{label:"Bateria"},fan_speed:{label:"Velocidade"},sensor_dirty_left:{label:"Sensores"},filter_left:{label:"Filtro"},main_brush_left:{label:"Escova principal"},side_brush_left:{label:"Escova lateral"},cleaning_count:{label:"Contagem de limpezas"},cleaned_area:{label:"??rea limpa"},cleaning_time:{label:"Tempo de limpeza"}},Sa={vacuum_start:"Come??ar",vacuum_pause:"Pausar",vacuum_stop:"Parar",vacuum_return_to_base:"Voltar para a base",vacuum_clean_spot:"Limpar local",vacuum_locate:"Localizar",vacuum_set_fan_speed:"Mudar velocidade"},Pa={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},Ma={success:"Successo!",no_selection:"Nenhuma sele????o fornecida",failed:"Falha em chamar o servi??o"},Ca={description:{before_link:"Este editor suporta apenas uma configura????o b??sica usando uma entidade de c??mera",link_text:"Xiaomi Cloud Map Extractor",after_link:". Para um setup avancado use o YAML mode."},label:{name:"T??tulo (opicional)",entity:"Entidade do aspirador (Obrigat??rio)",camera:"Entidade da camera (Obrigat??rio)",vacuum_platform:"Plataforma do aspirador (Obrigat??rio)",map_locked:"Mapa travado (Opicional)",two_finger_pan:"Movimente com dois dedos (Opicional)"}},Ta={common:xa,map_mode:za,validation:Ea,tile:wa,icon:Sa,unit:Pa,popups:Ma,editor:Ca},$a={version:"????????????",invalid_configuration:"???????????????? ???????????????????????? {0}",description:"????????????????, ?????????????????????? ?????????????????? ?????????? ??????????????????",old_configuration:"???????????????????? ???????????????????? ????????????????????????. ?????????????????? ?????? ???????????? ?? ???????????????????????? ?? ?????????? ??????????????, ?????? ???????????????? ?????????? ???????????????? ?? ????????.",old_configuration_migration_link:"?????????????????????? ???? ???????????????? ?? ???????????????????? ????????????."},Na={invalid:"???????????????? ????????????!",vacuum_goto:"?????????? ????????????????????",vacuum_goto_predefined:"?????????????????????????????????? ??????????",vacuum_clean_segment:"??????????????",vacuum_clean_point:"???????????? ??????????",vacuum_clean_point_predefined:"???????????? ??????????",vacuum_clean_zone:"???????????? ????????",vacuum_clean_zone_predefined:"???????????? ??????",vacuum_follow_path:"????????"},Ra={preset:{entity:{missing:"???? ?????????????? ????????????????: entity"},preset_name:{missing:"???? ?????????????? ????????????????: preset_name"},platform:{invalid:"???????????????? ??????????????????: {0}"},map_source:{missing:"???? ?????????????? ????????????????: map_source",none_provided:"???? ?????????????????????????? ???? ???????????? ???? ??????????????????????",ambiguous:"???????????????? ???????????? ???????? ???????????????? ?????? ??????????"},calibration_source:{missing:"???? ?????????????? ????????????????: calibration_source",ambiguous:"???????????????? ???????????? ???????? ???????????????? ?????? ????????????????????",none_provided:"???? ???????????????????????? ???????????????? ????????????????????",calibration_points:{invalid_number:"?????? ???????????????????? ?????????????????? 3 ?????? 4 ??????????",missing_map:"???????????? ?????????? ???????????????????? ???????????? ?????????????????? ???????????????????? ??????????",missing_vacuum:"???????????? ?????????? ???????????????????? ???????????? ?????????????????? ???????????????????? ????????????????",missing_coordinate:"?????????????????????????? ?????????? ?????????? ?? ???????????????? ???????????? ?????????????????? ?????? x ?????? ?? y ????????????????????"}},icons:{invalid:"???????????? ?? ????????????????????????: icons",icon:{missing:"???????????? ?????????????????? ?? ???????????? ???????????? ???????????? ?????????????????? icon property"}},tiles:{invalid:"???????????? ?? ????????????????????????: tiles",entity:{missing:"???????????? ?????????????????? ?? ???????????? ???????????? ???????????? ?????????????????? entity"},label:{missing:"???????????? ?????????????????? ?? ???????????? ???????????? ???????????? ?????????????????? label"}},map_modes:{invalid:"???????????? ?? ????????????????????????: map_modes",icon:{missing:"???? ?????????????? ???????????? ?????? ?????????????? ????????????"},name:{missing:"???? ?????????????? ?????? ?????? ?????????????? ????????????"},template:{invalid:"???????????????? ????????????: {0}"},predefined_selections:{not_applicable:"?????????? {0} ???? ???????????????????????? ???????????????????????????????? ????????????????",zones:{missing:"???? ?????????????? ???????????????????????? ????????",invalid_parameters_number:"???????????? ???????? ???????????? ?????????????????? 4 ??????????????????"},points:{position:{missing:"???? ?????????????? ???????????????????????? ?????? ??????????",invalid_parameters_number:"???????????? ?????????? ???????????? ?????????????????? 2 ??????????????????"}},rooms:{id:{missing:"???? ???????????? id ??????????????",invalid_format:"???????????????????????? id ??????????????: {0}"},outline:{invalid_parameters_number:"???????????? ?????????? ?????????????? ?????????????? ???????????? ?????????????????? 2 ??????????????????"}},label:{x:{missing:"?????????? ???????????? ?????????????????? ???????????????? x"},y:{missing:"?????????? ???????????? ?????????????????? ???????????????? y"},text:{missing:"?????????? ???????????? ?????????????????? ???????????????? text"}},icon:{x:{missing:"???????????? ???????????? ?????????????????? ???????????????? x"},y:{missing:"???????????? ???????????? ?????????????????? ???????????????? y"},name:{missing:"???????????? ???????????? ?????????????????? ???????????????? name"}}},service_call_schema:{missing:"?????????????????????? ?????????? ???????????? ????????????",service:{missing:"?????????? ???????????? ???????????? ???????????? ?????????????????? service",invalid:"???????????????????????? ????????????: {0}"}}}},invalid_entities:"???????????????????????? ????????????????:",invalid_calibration:"???????????????????????? ????????????????????, ?????????????????? ???????? ????????????????????????"},ja={status:{label:"????????????",value:{Starting:"???????????? ????????????","Charger disconnected":"???????????????? ???????????????????? ??????????????????",Idle:"????????????????","Remote control active":"???????????????? ???????????????????? ?????????? ??????????",Cleaning:"????????????","Returning home":"?????????????????????? ???? ????????","Manual mode":"???????????? ??????????",Charging:"??????????????","Charging problem":"???????????????? ?? ????????????????",Paused:"??????????","Spot cleaning":"???????????? ??????????",Error:"????????????","Shutting down":"????????????????????",Updating:"????????????????????",Docking:"?????????????????? ?? ????????","Going to target":"?????????????????????? ???? ??????????","Zoned cleaning":"???????????? ????????","Segment cleaning":"????????????","Emptying the bin":"?????????????? ????????","Charging complete":"?????????????? ??????????????????","Device offline":"???????????????????? ???? ?? ????????"}},battery_level:{label:"?????????????? ????????????"},fan_speed:{label:"???????????????? ????????????????????",value:{Silent:"??????????",Standard:"????????????????",Medium:"??????????????",Turbo:"??????????",Auto:"????????",Gentle:"????????????"}},sensor_dirty_left:{label:"?????????????? ?????????????????????? ????????????????"},filter_left:{label:"???????????? ??????????????"},main_brush_left:{label:"???????????? ???????????????? ??????????"},side_brush_left:{label:"???????????? ?????????????? ??????????"},cleaning_count:{label:"?????????? ????????????"},cleaned_area:{label:"?????????????? ????????????"},cleaning_time:{label:"?????????? ????????????"},mop_left:{label:"???????????? ????????????"}},Oa={vacuum_start:"??????????",vacuum_pause:"??????????",vacuum_stop:"????????",vacuum_return_to_base:"?????????????? ?? ????????",vacuum_clean_spot:"???????????? ??????????",vacuum_locate:"????????????????????",vacuum_set_fan_speed:"???????????????? ???????????????? ????????????????????"},La={hour_shortcut:"??",meter_shortcut:"??",meter_squared_shortcut:"????",minute_shortcut:"??????"},Ia={success:"??????????!",no_selection:"???????????? ???? ??????????????",failed:"???? ?????????????? ?????????????? ????????????"},Da={description:{before_link:"???????????? ???????????????? ???????????????????????? ???????????? ?????????????? ???????????????????????? ?? ??????????????, ?????????????????? ??????????????????????",link_text:"Xiaomi Cloud Map Extractor",after_link:". ?????? ?????????? ???????????? ??????????????????, ?????????????????????? YAML-??????."},label:{name:"?????????????????? (??????????????????????)",entity:"???????????????? ???????????????? (??????????????????????)",camera:"???????????????? ???????????? (??????????????????????)",vacuum_platform:"?????????????????? ???????????????? (??????????????????????)",map_locked:"???????????????????? ?????????? (??????????????????????)",two_finger_pan:"?????????????????????? ???????????? ?????????? ???????????????? (??????????????????????)"}},Ua={common:$a,map_mode:Na,validation:Ra,tile:ja,icon:Oa,unit:La,popups:Ia,editor:Da},Fa={version:"Verzia",invalid_configuration:"Neplatn?? konfigur??cia {0}",description:"Karta pomocou ktorej m????ete ovl??da?? v???? vys??va??",old_configuration:"Detekovan?? zastaral?? konfigur??cia. Upravte pros??m konfigur??ciu alebo kartu vytvorte znovu od za??iatku.",old_configuration_migration_link:"N??vod na ??pravu konfigur??cie"},Va={invalid:"Neplatn?? ??abl??na",vacuum_goto:"Presun na bod",vacuum_goto_predefined:"Presun na bod zo zoznamu",vacuum_clean_segment:"Upratovanie miestnosti",vacuum_clean_point:"Upratovanie bodu",vacuum_clean_point_predefined:"Upratovanie bodu zo zoznamu",vacuum_clean_zone:"Upratovanie oblasti",vacuum_clean_zone_predefined:"Upratovanie oblasti zo zoznamu",vacuum_follow_path:"Trasa"},Ha={preset:{entity:{missing:'Ch??baj??ca polo??ka "entity"'},preset_name:{missing:'Ch??baj??ca polo??ka "preset_name"'},platform:{invalid:"Neplatn?? platforma vys??va??a: {0}"},map_source:{missing:'Ch??baj??ca polo??ka "map_source"',none_provided:"Ch??baj??ci odkaz na kameru alebo obr??zok s mapou",ambiguous:"Povolen?? iba jeden zdroj mapy"},calibration_source:{missing:'Ch??baj??ca polo??ka "calibration_source"',ambiguous:"Povolen?? iba jeden zdroj kalibr??cie",none_provided:"Ch??baj??ci zdroj kalibr??cie",calibration_points:{invalid_number:"Po??adovan?? 3 alebo 4 kalibra??n?? body",missing_map:"Ka??d?? kalibra??n?? bod mus?? obsahova?? s??radnice mapy",missing_vacuum:"Ka??d?? kalibra??n?? bod mus?? obsahova?? s??radnice vys??va??a",missing_coordinate:'S??radnice mapy aj vys??va??e musia v??dy obsahova?? polo??ku "x" a "y"'}},icons:{invalid:'Neplatn?? konfigur??cia pre polo??ku "icons"',icon:{missing:'Ka??d?? z??znam v zozname ikon mus?? v??dy obsahova?? polo??ku "icon"'}},tiles:{invalid:'Neplatn?? konfigur??cia pre polo??ku "tiles"',entity:{missing:'Ka??d?? z??znam v zozname dla??d??c mus?? v??dy obsahova?? polo??ku "entity"'},label:{missing:'Ka??d?? z??znam v zozname dla??d??c mus?? v??dy obsahova?? polo??ku "label"'}},map_modes:{invalid:'Neplatn?? konfigur??cia pre polo??ku "map_modes"',icon:{missing:"Ch??baj??ca ikona pre mapov?? re??im"},name:{missing:"Ch??baj??ci n??zov pre mapov?? re??im"},template:{invalid:"Neplatn?? ??abl??na: {0}"},predefined_selections:{not_applicable:"Re??im {0} nepodporuje v??ber z prednastaven??ch mo??nost??",zones:{missing:"Ch??baj??ce konfigur??cie oblast??",invalid_parameters_number:"Ka??d?? oblas?? mus?? ma?? 4 parametre"},points:{position:{missing:"Ch??baj??ce konfigur??cie bodov",invalid_parameters_number:"Ka??d?? bod mus?? ma?? 2 parametre"}},rooms:{id:{missing:"Ch??baj??ci ID miestnosti",invalid_format:"Neplatn?? ID miestnosti: {0}"},outline:{invalid_parameters_number:"Ka??d?? bod ohrani??enia miestnosti mus?? ma?? 2 parametre"}},label:{x:{missing:'??t??tok mus?? ma?? polo??ku "x"'},y:{missing:'??t??tok mus?? ma?? polo??ku "y"'},text:{missing:'??t??tok mus?? ma?? polo??ku "text"'}},icon:{x:{missing:'Ikona mus?? ma?? polo??ku "x"'},y:{missing:'Ikona mus?? ma?? polo??ku "y"'},name:{missing:'Ikona mus?? ma?? polo??ku "name"'}}},service_call_schema:{missing:"Ch??baj??ci form??t volania slu??by",service:{missing:'Form??t volania slu??by mus?? obsahova?? polo??ku "service"',invalid:"Neplatn?? slu??ba: {0}"}}}},invalid_entities:"Neplatn?? entity:",invalid_calibration:"Neplatn?? kalibr??cia, pros??m skontrolujte konfigur??ciu"},Za={status:{label:"Stav",value:{Starting:"Zap??nanie","Charger disconnected":"Nab??je??ka odpojena",Idle:"Ne??inn??","Remote control active":"Dia??kov?? ovl??danie akt??vne",Cleaning:"Upratovanie","Returning home":"N??vrat do z??kladne","Manual mode":"Manu??lny re??im",Charging:"Nab??janie","Charging problem":"Probl??m s nab??jan??m",Paused:"Pozastaven??","Spot cleaning":"Upratovanie bodu",Error:"Chyba","Shutting down":"Vyp??nanie",Updating:"Prebieha aktualiz??cia",Docking:"Parkovanie","Going to target":"Presun na bod","Zoned cleaning":"Upratovanie oblasti","Segment cleaning":"Upratovanie miestnosti","Emptying the bin":"Vypr??zd??ovanie z??sobn??ka","Charging complete":"Nab??janie dokon??en??","Device offline":"Zariadenie je nedostupn??"}},battery_level:{label:"Bat??ria"},fan_speed:{label:"Stupe?? vys??vania",value:{Silent:"Tich??",Standard:"??tandardn??",Medium:"Stredn??",Turbo:"Turbo",Auto:"Automatick??",Gentle:"Slab??"}},sensor_dirty_left:{label:"??istota senzorov"},filter_left:{label:"??ivotnos?? filtra"},main_brush_left:{label:"??ivotnos?? hlavnej kefy"},side_brush_left:{label:"??ivotnos?? bo??ej kefy"},cleaning_count:{label:"Po??et upratovan??"},cleaned_area:{label:"Upratan?? plocha"},cleaning_time:{label:"Doba upratovania"},mop_left:{label:"??ivotnos?? mopu"}},Ga={vacuum_start:"Za??a?? upratovanie",vacuum_pause:"Pozastavi?? upratovanie",vacuum_stop:"Ukon??i?? upratovanie",vacuum_return_to_base:"N??vrat do z??kladne",vacuum_clean_spot:"Uprata?? bod",vacuum_locate:"N??js??",vacuum_set_fan_speed:"Nastavi?? stupe?? vys??vania"},Xa={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},Ka={success:"Volanie slu??by bolo ??spe??n??",no_selection:"Nebol vykonan?? ??iadny v??ber",failed:"Volanie slu??by zlyhalo"},qa={description:{before_link:"Tento editor podporuje iba z??kladn?? konfigur??ciu s pou??it??m entity kamera vytvoren?? pomocou ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Pre pokro??il?? nastavenia pou??ite editor k??du."},label:{name:"Titulok (volite??n?? polo??ka)",entity:"Entita vys??va??a (povinn?? polo??ka)",camera:"Entita kamery (povinn?? polo??ka)",vacuum_platform:"Platforma vys??va??a (povinn?? polo??ka)",map_locked:"Uzamknutie mapy",two_finger_pan:"Posuv mapy dvoma prstami"}},Ba={common:Fa,map_mode:Va,validation:Ha,tile:Za,icon:Ga,unit:Xa,popups:Ka,editor:qa},Ya={version:"Version",invalid_configuration:"Ogiltig configuration {0}",description:"Ett kort som l??ter dig kontrollera din dammsugare",old_configuration:"Gammal konfiguration uppt??ckt. Editera din konfiguration till senaste schema eller skapa ett nytt kort fr??n b??rjan.",old_configuration_migration_link:"Guide f??r migrering"},Wa={invalid:"Ogiltig template!",vacuum_goto:"Klicka & G??",vacuum_goto_predefined:"Punkter",vacuum_clean_segment:"Rum",vacuum_clean_point:"St??dpunkt",vacuum_clean_point_predefined:"Punkter",vacuum_clean_zone:"Zonst??dning",vacuum_clean_zone_predefined:"Zonlista",vacuum_follow_path:"Bana"},Ja={preset:{entity:{missing:"Saknar egenskap: entity"},preset_name:{missing:"Saknar egenskap: preset_name"},platform:{invalid:"Ogiltig dammsugarplattform: {0}"},map_source:{missing:"Saknar egenskap: map_source",none_provided:"Ingen kamera elle bild angiven",ambiguous:"Endast en kartk??lla till??ts"},calibration_source:{missing:"Saknar egenskap: calibration_source",ambiguous:"Endast en kalibreringsk??lla till??ts",none_provided:"Ingen kallibreringsk??lla angiven",calibration_points:{invalid_number:"Exakt 3 eller 4 kalibreringspunkter kr??vs",missing_map:"Varje kalibreringspunkt m??ste inneh??lla koordinater f??r karta",missing_vacuum:"Varje kalibreringspunkt m??ste inneh??lla koordinater f??r dammsugare",missing_coordinate:"Kalibreringspunkter f??r karta och dammsugare m??ste inneh??lla b??de x och y koordinater"}},icons:{invalid:"Fel i konfigurationen: icons",icon:{missing:"Varje post med icons m??ste inneh??lla icon-egenskap"}},tiles:{invalid:"Fel i konfigurationen: tiles",entity:{missing:"Varje post med tiles m??ste inneh??lla entity"},label:{missing:"Varje post med tiles m??ste inneh??lla label"}},map_modes:{invalid:"Fel i konfigurationen: map_modes",icon:{missing:"Saknar ikon f??r map mode"},name:{missing:"Saknar namn f??r map mode"},template:{invalid:"Ogiltig template: {0}"},predefined_selections:{not_applicable:"L??ge {0} har inte st??d f??r f??rdefinierade val",zones:{missing:"Zonens konfiguration saknas",invalid_parameters_number:"Varje zon m??ste ha 4 parametrar"},points:{position:{missing:"Punktens konfiguration saknas",invalid_parameters_number:"Varje punkt m??ste ha 2 parametrar"}},rooms:{id:{missing:"Rummets id saknas",invalid_format:"Felaktigt id f??r rum: {0}"},outline:{invalid_parameters_number:"Varje punk f??r rumskonturen m??ste ha 2 parametrar"}},label:{x:{missing:"Label m??ste ha egenskapen x"},y:{missing:"Label m??ste ha egenskapen y"},text:{missing:"Label m??ste ha egenskapen text"}},icon:{x:{missing:"Icon m??ste ha egenskapen x"},y:{missing:"Icon m??ste ha egenskapen y"},name:{missing:"Icon m??ste ha egenskapen name"}}},service_call_schema:{missing:"Service call schema saknas",service:{missing:"Service call schema m??ste inneh??lla service",invalid:"Ogiltig service: {0}"}}}},invalid_entities:"Ogiltiga entiteter:",invalid_calibration:"Ogiltig kalibrering, v??nligen se ??ver din konfiguration"},Qa={status:{label:"Status",value:{Starting:"Startar","Charger disconnected":"Laddare fr??nkopplad",Idle:"Inaktiv","Remote control active":"Fj??rrkontroll aktiv",Cleaning:"St??dar","Returning home":"??terv??nder hem","Manual mode":"Manuellt l??ge",Charging:"Laddar","Charging problem":"Laddningsproblem",Paused:"Pausad","Spot cleaning":"Spot-reng??ring",Error:"Fel","Shutting down":"St??nger av",Updating:"Uppdaterar",Docking:"Dockar","Going to target":"G??r till destination","Zoned cleaning":"St??dning av zon","Segment cleaning":"St??dning av rum","Emptying the bin":"T??mmer beh??llaren","Charging complete":"F??rdigladdad","Device offline":"Enhet offline"}},battery_level:{label:"Batteri"},fan_speed:{label:"Fl??kthastighet",value:{Silent:"Tyst",Standard:"Standard",Medium:"Medium",Turbo:"Turbo",Auto:"Auto",Gentle:"F??rsiktig"}},sensor_dirty_left:{label:"Sensorer kvar"},filter_left:{label:"Filter kvar"},main_brush_left:{label:"Huvudborste kvar"},side_brush_left:{label:"Sidoborste kvar"},cleaning_count:{label:"Antal st??dningar"},cleaned_area:{label:"St??dat omr??de"},cleaning_time:{label:"St??dtid"},mop_left:{label:"Mopp kvar"}},ei={vacuum_start:"Start",vacuum_pause:"Paus",vacuum_stop:"Stopp",vacuum_return_to_base:"??terg?? till basen",vacuum_clean_spot:"Spot-reng??ring",vacuum_locate:"Lokalisera",vacuum_set_fan_speed:"??ndra fl??kthastighet"},ti={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},ai={success:"Lyckades!",no_selection:"Inget urval tillhandah??lls",failed:"Mysslyckades kalla p?? tj??nsten"},ii={description:{before_link:"Denna visuella redigerare st??der endast en grundl??ggande konfiguration med en kameraenhet skapad med hj??lp av ",link_text:"Xiaomi Cloud Map Extractor",after_link:". Anv??nd YAML-l??get f??r avancerade inst??llningar."},label:{name:"Titel (valfritt)",entity:"Dammsugar-entitet (obligatoriskt)",camera:"Kamera-entitet (obligatoriskt)",vacuum_platform:"Dammsugarplattform (obligatoriskt)",map_locked:"L??st karta (valfritt)",two_finger_pan:"Panorering med tv?? fingrar (valfritt)"}},ni={common:Ya,map_mode:Wa,validation:Ja,tile:Qa,icon:ei,unit:ti,popups:ai,editor:ii},ri={version:"S??r??m",invalid_configuration:"Ge??ersiz yap??land??rma {0}",description:"Vakumunuzu kontrol etmenizi sa??layan bir kart",old_configuration:"Eski yap??land??rma alg??land??. Yap??land??rman??z?? en son ??emaya g??re ayarlay??n veya s??f??rdan yeni bir kart olu??turun.",old_configuration_migration_link:"Ta????ma k??lavuzu"},oi={invalid:"Ge??ersiz ??ablon!",vacuum_goto:"Sabitle ve Git",vacuum_goto_predefined:"Noktalar",vacuum_clean_segment:"Odalar",vacuum_clean_point:"Temiz alan",vacuum_clean_point_predefined:"Noktalar",vacuum_clean_zone:"B??lge temizli??i",vacuum_clean_zone_predefined:"B??lge listesi",vacuum_follow_path:"Yol"},li={preset:{entity:{missing:"Eksik ??zellik: varl??k"},preset_name:{missing:"Eksik ??zellik: ??n_ayar_ad??(preset_name)"},platform:{invalid:"Ge??ersiz vakum platformu: {0}"},map_source:{missing:"Eksik ??zellik: harita kayna???? (map_source)",none_provided:"Kamera yok, g??r??nt?? de sa??lanmad??",ambiguous:"Yaln??zca bir harita kayna????na izin verilir"},calibration_source:{missing:"Eksik ??zellik: kalibrasyon_kaynak (calibration_source)",ambiguous:"Yaln??zca bir kalibrasyon kayna????na izin verilir",none_provided:"Kalibrasyon kayna???? sa??lanmad??",calibration_points:{invalid_number:"Tam olarak 3 veya 4 kalibrasyon noktas?? gerekli",missing_map:"Her kalibrasyon noktas?? harita koordinatlar??n?? i??ermelidir",missing_vacuum:"Her kalibrasyon noktas?? vakum koordinatlar??n?? i??ermelidir",missing_coordinate:"Harita ve vakum kalibrasyon noktalar?? hem x hem de y koordinat??n?? i??ermelidir"}},icons:{invalid:"Yap??land??rmada hata: simgeler",icon:{missing:"Simgeler listesinin her giri??i, simge ??zelli??i i??ermelidir"}},tiles:{invalid:"Yap??land??rmada hata: d????emeler",entity:{missing:"Kutucuk listesinin her giri??i varl??k i??ermelidir"},label:{missing:"Fayans listesinin her giri??i etiket i??ermelidir"}},map_modes:{invalid:"Yap??land??rmada hata: map_modes",icon:{missing:"Harita modunun eksik simgesi"},name:{missing:"Harita modunun ad?? eksik"},template:{invalid:"Ge??ersiz ??ablon: {0}"},predefined_selections:{not_applicable:"Mod {0} ??nceden tan??mlanm???? se??imleri desteklemiyor",zones:{missing:"Eksik b??lge yap??land??rmas??",invalid_parameters_number:"Her b??lgenin 4 parametresi olmal??d??r"},points:{position:{missing:"Eksik nokta yap??land??rmas??",invalid_parameters_number:"Her noktan??n 2 parametresi olmal??d??r"}},rooms:{id:{missing:"Eksik oda kimli??i",invalid_format:"Ge??ersiz oda kimli??i: {0}"},outline:{invalid_parameters_number:"Oda anahatt??n??n her noktas?? 2 parametreye sahip olmal??d??r"}},label:{x:{missing:"Etiketin x ??zelli??i olmal??d??r"},y:{missing:"Etiketin y ??zelli??i olmal??d??r"},text:{missing:"Etiketin metin ??zelli??i olmal??d??r"}},icon:{x:{missing:"Simgenin x ??zelli??i olmal??d??r"},y:{missing:"Simgenin y ??zelli??i olmal??d??r"},name:{missing:"Simge isim ??zelli??ine sahip olmal??d??r"}}},service_call_schema:{missing:"Eksik servis ??a??r??s?? ??emas??",service:{missing:"Servis ??a??r??s?? ??emas?? servis i??ermelidir",invalid:"Ge??ersiz hizmet: {0}"}}}},invalid_entities:"Ge??ersiz varl??klar:",invalid_calibration:"Ge??ersiz kalibrasyon, l??tfen yap??land??rman??z?? kontrol edin"},si={status:{label:"Durum",value:{Starting:"Ba??lang????","Charger disconnected":"??arj cihaz??n??n ba??lant??s?? kesildi",Idle:"Idle","Remote control active":"Uzaktan kumanda aktif",Cleaning:"Temizleme","Returning home":"Eve d??n????","Manual mode":"Manual mod",Charging:"??arj oluyor","Charging problem":"??arj sorunu",Paused:"Duraklat??ld??","Spot cleaning":"Nokta temizleme",Error:"Hata","Shutting down":"Kapat??l??yor",Updating:"G??ncelleniyor",Docking:"Yerle??tirme","Going to target":"Hedefe gidiyor","Zoned cleaning":"B??lgeli temizlik","Segment cleaning":"Segment temizli??i","Emptying the bin":"????p haznesini bo??alt","Charging complete":"??arj tamamland??","Device offline":"Cihaz ??evrimd??????"}},battery_level:{label:"Pil"},fan_speed:{label:"S??p??rme Modu",value:{Silent:"Sessiz",Standard:"Standart",Medium:"Orta",Turbo:"G????l??",Auto:"Otomatik",Gentle:"Uysal"}},sensor_dirty_left:{label:"Sens??r kirli"},filter_left:{label:"Filtre"},main_brush_left:{label:"Ana F??r??a"},side_brush_left:{label:"Yan F??r??a"},cleaning_count:{label:"Temizleme say??s??"},cleaned_area:{label:"Temizlenmi?? alan"},cleaning_time:{label:"Temizlik zaman??"},mop_left:{label:"Paspaslama"}},ci={vacuum_start:"Ba??lat",vacuum_pause:"Duraklat",vacuum_stop:"Durdur",vacuum_return_to_base:"??niteye geri d??n",vacuum_clean_spot:"Temiz nokta",vacuum_locate:"Bul",vacuum_set_fan_speed:"Fan h??z??n?? de??i??tir"},di={hour_shortcut:"S",meter_shortcut:"D",meter_squared_shortcut:"m??",minute_shortcut:"Sn"},ui={success:"Ba??ar??!",no_selection:"Se??im sa??lanmad??",failed:"Servis aranamad??"},mi={description:{before_link:"Bu g??rsel d??zenleyici, kullan??larak olu??turulan bir kamera varl?????? ile yaln??zca temel bir yap??land??rmay?? destekler.",link_text:"Xiaomi Bulut Haritas?? ????kar??c??",after_link:". Daha geli??mi?? kurulum i??in YAML modunu kullan??n."},label:{name:"Ba??l??k (iste??e ba??l??)",entity:"Vakum varl?????? (gerekli)",camera:"Kamera varl?????? (gerekli)",vacuum_platform:"Vakum platformu (gerekli)",map_locked:"Harita kilitli (iste??e ba??l??)",two_finger_pan:"??ki parmakl?? tava (iste??e ba??l??)"}},pi={common:ri,map_mode:oi,validation:li,tile:si,icon:ci,unit:di,popups:ui,editor:mi},_i={version:"Version",invalid_configuration:"???????????????? ???????????????????????? {0}",description:"????????????, ?????? ?????? ?????????? ???????????????????????? ??????????????",old_configuration:"???????????????? ?????????? ????????????????????????. ???????????????????? ???????????????????????? ???? ?????????????????? ?????????? ?????? ???????????????? ???????? ???????????? ?? ??????????????.",old_configuration_migration_link:"???????????????? ?? ????????????????"},gi={invalid:"?????????????????? ????????????!",vacuum_goto:"?????? ???? ????????",vacuum_goto_predefined:"?????????????????? ??????????",vacuum_clean_segment:"??????????????",vacuum_clean_point:"?????????????? ????????????????????",vacuum_clean_point_predefined:"?????????????????? ??????????",vacuum_clean_zone:"???????????????? ????????????????????",vacuum_clean_zone_predefined:"???????????? ??????",vacuum_follow_path:"????????"},vi={preset:{entity:{missing:"?????????????????? ????????????????: entity"},preset_name:{missing:"?????????????????? ????????????????: preset_name"},platform:{invalid:"???????????????? ?????????????????? ????????????????: {0}"},map_source:{missing:"?????????????????? ????????????????: map_source",none_provided:"???? ?????????????? ?????????????? ????????",ambiguous:"?????????????????? ???????????? ???????? ?????????????? ????????"},calibration_source:{missing:"?????????????????? ????????????????: calibration_source",ambiguous:"?????????????????? ???????????? ???????? ?????????????? ????????????????????????",none_provided:"???? ?????????????? ?????????????? ????????????????????????",calibration_points:{invalid_number:"???????????????? 3 ?????? 4 ?????????? ????????????????????????",missing_map:"?????????? ?????????? ???????????????????????? ?????????????? ???????? ???????????????????? ???? ????????",missing_vacuum:"?????????? ?????????? ???????????????????????? ?????????????? ???????? ???????????????????? ?? ?????????????? ????????????????",missing_coordinate:"?????????? ?????????? ???????????????????????? ?????????????? ???????? ???????????????????? x ?? y"}},icons:{invalid:"?????????????? ?? ????????????????????????: icons",icon:{missing:'?????????? ?????????????? ?? ???????????? ?????????????????? ?????????????? ???????? ???????????????? "icon"'}},tiles:{invalid:"?????????????? ?? ????????????????????????: tiles",entity:{missing:'?????????? ?????????????? ?? ???????????? ???????????? ?????????????? ???????? ???????????????? "entity"'},label:{missing:'?????????? ?????????????? ?? ???????????? ???????????? ?????????????? ???????? ???????????????? "label"'}},map_modes:{invalid:"?????????????? ?? ????????????????????????: map_modes",icon:{missing:"???????????????? ???????????????????? ?????????????? ???????????? ????????"},name:{missing:"???????????????? ?????????? ?????????????? ???????????? ????????"},template:{invalid:"?????????????????? ????????????: {0}"},predefined_selections:{not_applicable:"???????????? {0} ???? ?????????????????? ???????????????????? ???????????????? ??????????????????",zones:{missing:"?????????????????? ???????????? ???????????????????? ??????",invalid_parameters_number:"?????????? ?????????????????? ???????? ?????????????? ???????? 4 ????????????????????"},points:{position:{missing:"?????????????????? ???????????? ???????????????????? ??????????",invalid_parameters_number:"?????????? ???????????????? ?????????? ?????????????? ???????? 2 ????????????????????"}},rooms:{id:{missing:"?????????????????? ?????????????????????????? ??????????????",invalid_format:"?????????????????? ?????????????????????????? ??????????????: {0}"},outline:{invalid_parameters_number:"?????????? ?????????? ?????????????? ?????????????? ?????????????? ???????? 2 ????????????????????"}},label:{x:{missing:"?????????? ?????????? ?????????????? ???????? ???????????????????? x"},y:{missing:"?????????? ?????????? ?????????????? ???????? ???????????????????? y"},text:{missing:"?????????? ?????????? ?????????????? ?????????????? ??????????"}},icon:{x:{missing:"?????????? ???????????????????? ?????????????? ???????? ???????????????????? x"},y:{missing:"?????????? ???????????????????? ?????????????? ???????? ???????????????????? y"},name:{missing:'?????????? ???????????????????? ?????????????? ???????? ???????????????? "name"'}}},service_call_schema:{missing:"???????????????? ?????????? ?????????????? ????????????",service:{missing:"?????????? ?????????? ???????????? ?????????????? ???????? ?????????? ????????????",invalid:"???????????????? ????????????: {0}"}}}},invalid_entities:"???????????????? ????????????????:",invalid_calibration:"?????????????????????? ????????????????????????, ?????????????????? ????????????????????????"},hi={status:{label:"????????????",value:{Starting:"??????????????","Charger disconnected":"???????????????? ???????????????? ????????????????????",Idle:"????????????????????","Remote control active":"??????????",Cleaning:"????????????????????","Returning home":"???????????????????? ???? ??????-??????????????","Manual mode":"???????????? ??????????",Charging:"????????????????????","Charging problem":"???????????????? ?? ??????????????????????",Paused:"??????????????????????","Spot cleaning":"?????????????? ????????????????",Error:"??????????????","Shutting down":"??????????????????",Updating:"??????????????????",Docking:"????????????????","Going to target":"???? ?????????? ???? ????????","Zoned cleaning":"???????????????? ????????????????????","Segment cleaning":"???????????????????? ??????????????","Emptying the bin":"?????????????????????? ????????????????????","Charging complete":"???????????????????? ??????????????????","Device offline":"????????????"}},battery_level:{label:"??????????????"},fan_speed:{label:"????????????????????",value:{Silent:"??????????",Standard:"????????????????",Medium:"????????????????",Turbo:"??????????",Auto:"????????",Gentle:"????????????????????"}},sensor_dirty_left:{label:"????????????"},filter_left:{label:"????????????"},main_brush_left:{label:"?????????????? ??????????"},side_brush_left:{label:"???????????? ??????????"},cleaning_count:{label:"?????????????????? ??????????????????"},cleaned_area:{label:"????????????????"},cleaning_time:{label:"?????? ????????????????????"},mop_left:{label:"????????????"}},fi={vacuum_start:"??????????",vacuum_pause:"??????????",vacuum_stop:"????????",vacuum_return_to_base:"???????????????????? ???? ????????",vacuum_clean_spot:"???????????????? ??????????",vacuum_locate:"??????????",vacuum_set_fan_speed:"?????????? ????????????????????"},bi={hour_shortcut:"h",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"min"},yi={success:"??????????!",no_selection:"?????????????????? ???? ????????????????",failed:"???? ?????????????? ?????????????????? ????????????"},ki={description:{before_link:"?????? ???????????????? ???????????????????? ?????????????????? ???????? ???????????? ???????????????????????? ?????? ????????????, ?????????????????? ???? ?????????????????? ",link_text:"Xiaomi Cloud Map Extractor",after_link:". ?????? ?????????? ?????????????????????? ???????????????????????? ???????????????????????????? ?????????? YAML."},label:{name:"?????????? (??????????)",entity:"???????????????? ???????????????? (??????????????????)",camera:"???????????????? ???????????? (??????????????????)",vacuum_platform:"?????????????????? ???????????????????? ???????????????? (??????????????????)",map_locked:"???????????????????? ???????? (??????????)",two_finger_pan:"???????????????????? ???????? ?????????? ???????????????? (??????????)"}},Ai={common:_i,map_mode:gi,validation:vi,tile:hi,icon:fi,unit:bi,popups:yi,editor:ki},xi={version:"??????",invalid_configuration:"???????????? {0}",description:"????????????????????????????????????",old_configuration:"?????????????????????????????????????????????????????????????????????????????????????????????",old_configuration_migration_link:"????????????"},zi={invalid:"???????????????",vacuum_goto:"????????????",vacuum_goto_predefined:"?????????",vacuum_clean_segment:"????????????",vacuum_clean_point:"????????????",vacuum_clean_point_predefined:"?????????????????????",vacuum_clean_zone:"????????????",vacuum_clean_zone_predefined:"?????????????????????",vacuum_follow_path:"????????????"},Ei={preset:{entity:{missing:"???????????????entity"},preset_name:{missing:"???????????????preset_name"},platform:{invalid:"????????????????????????{0}"},map_source:{missing:"???????????????map_source",none_provided:"??????????????????????????????",ambiguous:"?????????????????????"},calibration_source:{missing:"???????????????calibration_source",ambiguous:"????????????????????????",none_provided:"??????????????????",calibration_points:{invalid_number:"??????3???4????????????",missing_map:"???????????????????????????????????????",missing_vacuum:"??????????????????????????????????????????",missing_coordinate:"??????????????????????????????????????????????????????x?????????y??????"}},icons:{invalid:"???????????????icons",icon:{missing:"??????????????????????????????????????????icon??????"}},tiles:{invalid:"???????????????tiles",entity:{missing:"????????????????????????????????????????????????"},label:{missing:"????????????????????????????????????????????????"}},map_modes:{invalid:"???????????????map_modes",icon:{missing:"??????????????????????????????"},name:{missing:"??????????????????????????????"},template:{invalid:"???????????????{0}"},predefined_selections:{not_applicable:"?????? {0} ?????????????????????",zones:{missing:"??????????????????",invalid_parameters_number:"????????????????????????4?????????"},points:{position:{missing:"?????????????????????",invalid_parameters_number:"???????????????????????????2?????????"}},rooms:{id:{missing:"????????????id",invalid_format:"??????id?????????{0}"},outline:{invalid_parameters_number:"??????????????????????????????2?????????"}},label:{x:{missing:"??????????????????x???"},y:{missing:"??????????????????y???"},text:{missing:"???????????????????????????"}},icon:{x:{missing:"??????????????????x???"},y:{missing:"??????????????????y???"},name:{missing:"????????????????????????"}}},service_call_schema:{missing:"????????????????????????",service:{missing:"????????????????????????????????????",invalid:"???????????????{0}"}}}},invalid_entities:"???????????????",invalid_calibration:"??????????????????????????????"},wi={status:{label:"??????",value:{Starting:"????????????","Charger disconnected":"??????????????????",Idle:"??????","Remote control active":"??????????????????",Cleaning:"?????????","Returning home":"????????????","Manual mode":"????????????",Charging:"????????????","Charging problem":"????????????",Paused:"??????","Spot cleaning":"????????????",Error:"??????","Shutting down":"????????????",Updating:"????????????",Docking:"??????","Going to target":"?????????????????????","Zoned cleaning":"????????????","Segment cleaning":"????????????","Emptying the bin":"????????????","Charging complete":"????????????","Device offline":"????????????"}},battery_level:{label:"????????????"},fan_speed:{label:"??????",value:{Silent:"??????",Standard:"??????",Medium:"??????",Turbo:"MAX",Auto:"??????",Gentle:"??????"}},sensor_dirty_left:{label:"?????????????????????"},filter_left:{label:"????????????"},main_brush_left:{label:"????????????"},side_brush_left:{label:"????????????"},cleaning_count:{label:"???????????????"},cleaned_area:{label:"???????????????"},cleaning_time:{label:"???????????????"},mop_left:{label:"????????????"}},Si={vacuum_start:"??????",vacuum_pause:"??????",vacuum_stop:"??????",vacuum_return_to_base:"??????",vacuum_clean_spot:"????????????",vacuum_locate:"??????",vacuum_set_fan_speed:"????????????"},Pi={hour_shortcut:"??????",meter_shortcut:"???",meter_squared_shortcut:"??????",minute_shortcut:"??????"},Mi={success:"?????????????????????",no_selection:"???????????????",failed:"??????????????????"},Ci={description:{before_link:"?????????????????????????????????????????????????????????????????????????????????????????????????????????",link_text:"Xiaomi Cloud Map Extractor",after_link:"???????????????????????????????????????YAML??????"},label:{name:"??????????????????",entity:"???????????????????????????",camera:"???????????????????????????",vacuum_platform:"???????????????????????????",map_locked:"????????????????????????",two_finger_pan:"????????????????????????"}},Ti={common:xi,map_mode:zi,validation:Ei,tile:wi,icon:Si,unit:Pi,popups:Mi,editor:Ci},$i={version:"??????",invalid_configuration:"???????????? {0}",description:"?????????????????????????????????????????????",old_configuration:"???????????????????????????????????????????????????????????????????????????????????????????????????",old_configuration_migration_link:"????????????"},Ni={invalid:"????????????!",vacuum_goto:"????????????",vacuum_goto_predefined:"?????????",vacuum_clean_segment:"????????????",vacuum_clean_point:"????????????",vacuum_clean_point_predefined:"????????????",vacuum_clean_zone:"????????????",vacuum_clean_zone_predefined:"????????????",vacuum_follow_path:"????????????"},Ri={preset:{entity:{missing:"????????????: entity"},preset_name:{missing:"????????????: preset_name"},platform:{invalid:"????????? vacuum platform: {0}"},map_source:{missing:"????????????: map_source",none_provided:"???????????????????????????",ambiguous:"????????????????????????"},calibration_source:{missing:"????????????: calibration_source",ambiguous:"????????????????????????",none_provided:"??????????????????",calibration_points:{invalid_number:"?????? 3 ??? 4 ????????????",missing_map:"???????????????????????????????????????",missing_vacuum:"??????????????????????????????????????????",missing_coordinate:"?????????????????????????????????????????????????????? x ????????? y ??????"}},icons:{invalid:"????????????: icons",icon:{missing:"Icon list ???????????? icon"}},tiles:{invalid:"????????????: tiles",entity:{missing:"tiles list ???????????? entity"},label:{missing:"tiles list ???????????? label"}},map_modes:{invalid:"????????????: map_modes",icon:{missing:"Map modes ??? icon(??????) ????????????"},name:{missing:"Map modes ??? name(??????) ????????????"},template:{invalid:"????????????: {0}"},predefined_selections:{not_applicable:"Mode {0} ????????? predefined selections",zones:{missing:"zones ????????????",invalid_parameters_number:"zones ???????????? 4 ?????????"},points:{position:{missing:"points ????????????",invalid_parameters_number:"points ???????????? 2 ?????????"}},rooms:{id:{missing:"room id ??????",invalid_format:"room id ??????: {0}"},outline:{invalid_parameters_number:"room ??? point(??????) ???????????? 2 ?????????"}},label:{x:{missing:"label ???????????? x ???"},y:{missing:"label ???????????? y ???"},text:{missing:"label ???????????? text"}},icon:{x:{missing:"icon ???????????? x ???"},y:{missing:"icon ???????????? y ???"},name:{missing:"icon ???????????? name"}}},service_call_schema:{missing:"??????????????????",service:{missing:"????????????(service)?????????????????????(service)",invalid:"????????????: {0}"}}}},invalid_entities:"????????? entities(??????): ",invalid_calibration:"calibration(??????)????????????????????????"},ji={status:{label:"??????",value:{Starting:"????????????","Charger disconnected":"??????????????????",Idle:"??????","Remote control active":"??????????????????",Cleaning:"?????????","Returning home":"?????????","Manual mode":"????????????",Charging:"?????????","Charging problem":"????????????",Paused:"??????","Spot cleaning":"????????????",Error:"??????","Shutting down":"?????????",Updating:"?????????",Docking:"Docking","Going to target":"????????????????????????","Zoned cleaning":"????????????","Segment cleaning":"????????????","Emptying the bin":"???????????????","Charging complete":"????????????","Device offline":"????????????"}},battery_level:{label:"????????????"},fan_speed:{label:"??????",value:{Silent:"??????",Standard:"??????",Medium:"??????",Turbo:"MAX",Auto:"??????",Gentle:"??????"}},sensor_dirty_left:{label:"???????????????"},filter_left:{label:"????????????"},main_brush_left:{label:"????????????"},side_brush_left:{label:"????????????"},cleaning_count:{label:"??????????????????"},cleaned_area:{label:"??????????????????"},cleaning_time:{label:"??????????????????"},mop_left:{label:"????????????"}},Oi={vacuum_start:"??????",vacuum_pause:"??????",vacuum_stop:"??????",vacuum_return_to_base:"??????",vacuum_clean_spot:"????????????",vacuum_locate:"??????",vacuum_set_fan_speed:"????????????"},Li={hour_shortcut:"??????",meter_shortcut:"m",meter_squared_shortcut:"m??",minute_shortcut:"??????"},Ii={success:"Success!",no_selection:"???????????????",failed:"??????????????????"},Di={description:{before_link:"????????????????????????????????????????????????????????????????????????????????????????????????: ",link_text:"Xiaomi Cloud Map Extractor",after_link:"????????????????????????????????????????????? YAML ??????"},label:{name:"??????????????????",entity:"?????????????????????????????????",camera:"???????????????????????????",vacuum_platform:"vacuum platform????????????",map_locked:"????????????????????????",two_finger_pan:"????????????????????????"}},Ui={common:$i,map_mode:Ni,validation:Ri,tile:ji,icon:Oi,unit:Li,popups:Ii,editor:Di};const Fi={cs:Ae,da:Object.freeze({__proto__:null,common:xe,map_mode:ze,validation:Ee,tile:we,icon:Se,unit:Pe,popups:Me,editor:Ce,default:Te}),de:Object.freeze({__proto__:null,common:$e,map_mode:Ne,validation:Re,tile:je,icon:Oe,unit:Le,popups:Ie,editor:De,default:Ue}),el:Object.freeze({__proto__:null,common:Fe,map_mode:Ve,validation:He,tile:Ze,icon:Ge,unit:Xe,popups:Ke,editor:qe,default:Be}),en:Object.freeze({__proto__:null,common:Ye,map_mode:We,validation:Je,tile:Qe,icon:et,unit:tt,popups:at,editor:it,default:nt}),es:Object.freeze({__proto__:null,common:rt,map_mode:ot,validation:lt,tile:st,icon:ct,unit:dt,popups:ut,editor:mt,default:pt}),fr:Object.freeze({__proto__:null,common:_t,map_mode:gt,validation:vt,tile:ht,icon:ft,unit:bt,popups:yt,editor:kt,default:At}),he:Object.freeze({__proto__:null,common:xt,map_mode:zt,validation:Et,tile:wt,icon:St,unit:Pt,popups:Mt,editor:Ct,default:Tt}),hu:Object.freeze({__proto__:null,common:$t,map_mode:Nt,validation:Rt,tile:jt,icon:Ot,unit:Lt,popups:It,editor:Dt,default:Ut}),is:Object.freeze({__proto__:null,common:Ft,map_mode:Vt,validation:Ht,tile:Zt,icon:Gt,unit:Xt,popups:Kt,editor:qt,default:Bt}),it:Object.freeze({__proto__:null,common:Yt,map_mode:Wt,validation:Jt,tile:Qt,icon:ea,unit:ta,popups:aa,editor:ia,default:na}),nl:Object.freeze({__proto__:null,common:ra,map_mode:oa,validation:la,tile:sa,icon:ca,unit:da,popups:ua,editor:ma,default:pa}),pl:Object.freeze({__proto__:null,common:_a,map_mode:ga,validation:va,tile:ha,icon:fa,unit:ba,popups:ya,editor:ka,default:Aa}),"pt-BR":Object.freeze({__proto__:null,common:xa,map_mode:za,validation:Ea,tile:wa,icon:Sa,unit:Pa,popups:Ma,editor:Ca,default:Ta}),ru:Object.freeze({__proto__:null,common:$a,map_mode:Na,validation:Ra,tile:ja,icon:Oa,unit:La,popups:Ia,editor:Da,default:Ua}),sk:Object.freeze({__proto__:null,common:Fa,map_mode:Va,validation:Ha,tile:Za,icon:Ga,unit:Xa,popups:Ka,editor:qa,default:Ba}),sv:Object.freeze({__proto__:null,common:Ya,map_mode:Wa,validation:Ja,tile:Qa,icon:ei,unit:ti,popups:ai,editor:ii,default:ni}),tr:Object.freeze({__proto__:null,common:ri,map_mode:oi,validation:li,tile:si,icon:ci,unit:di,popups:ui,editor:mi,default:pi}),uk:Object.freeze({__proto__:null,common:_i,map_mode:gi,validation:vi,tile:hi,icon:fi,unit:bi,popups:yi,editor:ki,default:Ai}),zh:Object.freeze({__proto__:null,common:xi,map_mode:zi,validation:Ei,tile:wi,icon:Si,unit:Pi,popups:Mi,editor:Ci,default:Ti}),"zh-Hant":Object.freeze({__proto__:null,common:$i,map_mode:Ni,validation:Ri,tile:ji,icon:Oi,unit:Li,popups:Ii,editor:Di,default:Ui})};function Vi(e,t="",a="",i="",n=e){const r="en";if(!i)try{i=JSON.parse(localStorage.getItem("selectedLanguage")||'"en"')}catch(e){i=(localStorage.getItem("selectedLanguage")||r).replace(/['"]+/g,"")}let o;try{o=Hi(e,null!=i?i:r)}catch(t){o=Hi(e,r)}return void 0===o&&(o=Hi(e,r)),o=null!=o?o:n,""!==t&&""!==a&&(o=o.replace(t,a)),o}function Hi(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),Fi[t])}catch(e){return}}function Zi(e,t,a){return"string"==typeof e?Vi(e,"","",t,a):Vi(...e,t,a)}function Gi(e,t,a,i){var n,r;return Zi(e,null!==(n=null==a?void 0:a.language)&&void 0!==n?n:null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language,i)}var Xi={defaultTemplates:["vacuum_clean_zone","vacuum_goto"],templates:{vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",repeats_type:"REPEAT",max_repeats:3,service_call_schema:{service:"xiaomi_miio.vacuum_clean_segment",service_data:{segments:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone:{name:"map_mode.vacuum_clean_zone",icon:"mdi:select-drag",selection_type:"MANUAL_RECTANGLE",coordinates_rounding:!0,max_selections:5,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"xiaomi_miio.vacuum_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone_predefined:{name:"map_mode.vacuum_clean_zone_predefined",icon:"mdi:floor-plan",selection_type:"PREDEFINED_RECTANGLE",max_selections:5,coordinates_rounding:!0,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"xiaomi_miio.vacuum_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_goto:{name:"map_mode.vacuum_goto",icon:"mdi:map-marker-plus",selection_type:"MANUAL_POINT",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"xiaomi_miio.vacuum_goto",service_data:{x_coord:"[[point_x]]",y_coord:"[[point_y]]",entity_id:"[[entity_id]]"}}},vacuum_goto_predefined:{name:"map_mode.vacuum_goto_predefined",icon:"mdi:map-marker",selection_type:"PREDEFINED_POINT",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"xiaomi_miio.vacuum_goto",service_data:{x_coord:"[[point_x]]",y_coord:"[[point_y]]",entity_id:"[[entity_id]]"}}},vacuum_follow_path:{name:"map_mode.vacuum_follow_path",icon:"mdi:map-marker-path",selection_type:"MANUAL_PATH",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"script.vacuum_follow_path",service_data:{service:"xiaomi_miio.vacuum_goto",mode:"individual",path:"[[selection]]",entity_id:"[[entity_id]]"}}}}},Ki={from_attributes:[{attribute:"sensor_dirty_left",label:"tile.sensor_dirty_left.label",icon:"mdi:eye-outline",unit:"unit.hour_shortcut"},{attribute:"filter_left",label:"tile.filter_left.label",icon:"mdi:air-filter",unit:"unit.hour_shortcut"},{attribute:"main_brush_left",label:"tile.main_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"},{attribute:"side_brush_left",label:"tile.side_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"},{attribute:"cleaning_count",label:"tile.cleaning_count.label",icon:"mdi:counter"}],from_sensors:[{unique_id_prefix:"consumable_sensor_dirty_left_",label:"tile.sensor_dirty_left.label",unit:"unit.hour_shortcut",multiplier:.0002777777777777778},{unique_id_prefix:"consumable_filter_left_",label:"tile.filter_left.label",unit:"unit.hour_shortcut",multiplier:.0002777777777777778},{unique_id_prefix:"consumable_main_brush_left_",label:"tile.main_brush_left.label",unit:"unit.hour_shortcut",multiplier:.0002777777777777778},{unique_id_prefix:"consumable_side_brush_left_",label:"tile.side_brush_left.label",unit:"unit.hour_shortcut",multiplier:.0002777777777777778},{unique_id_prefix:"clean_history_count_",label:"tile.cleaning_count.label"}]},qi={map_modes:Xi,sensors_from:"2021.11.0",tiles:Ki},Bi=Object.freeze({__proto__:null,map_modes:Xi,sensors_from:"2021.11.0",tiles:Ki,default:qi}),Yi={defaultTemplates:["vacuum_clean_zone","vacuum_goto"],templates:{vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",repeats_type:"REPEAT",max_repeats:3,service_call_schema:{service:"vacuum.vacuum_clean_segment",service_data:{segments:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone:{name:"map_mode.vacuum_clean_zone",icon:"mdi:select-drag",selection_type:"MANUAL_RECTANGLE",coordinates_rounding:!1,max_selections:5,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.vacuum_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone_predefined:{name:"map_mode.vacuum_clean_zone_predefined",icon:"mdi:floor-plan",selection_type:"PREDEFINED_RECTANGLE",max_selections:5,coordinates_rounding:!1,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.vacuum_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_goto:{name:"map_mode.vacuum_goto",icon:"mdi:map-marker-plus",selection_type:"MANUAL_POINT",coordinates_rounding:!1,repeats_type:"NONE",service_call_schema:{service:"vacuum.vacuum_goto",service_data:{x_coord:"[[point_x]]",y_coord:"[[point_y]]",entity_id:"[[entity_id]]"}}},vacuum_goto_predefined:{name:"map_mode.vacuum_goto_predefined",icon:"mdi:map-marker",selection_type:"PREDEFINED_POINT",coordinates_rounding:!1,repeats_type:"NONE",service_call_schema:{service:"vacuum.vacuum_goto",service_data:{x_coord:"[[point_x]]",y_coord:"[[point_y]]",entity_id:"[[entity_id]]"}}},vacuum_follow_path:{name:"map_mode.vacuum_follow_path",icon:"mdi:map-marker-path",selection_type:"MANUAL_PATH",coordinates_rounding:!1,repeats_type:"NONE",service_call_schema:{service:"script.vacuum_follow_path",service_data:{service:"vacuum.vacuum_goto",mode:"individual",path:"[[selection]]",entity_id:"[[entity_id]]"}}}}},Wi={from_attributes:[{attribute:"cleaned_area",label:"tile.cleaned_area.label",icon:"mdi:texture-box",unit:"unit.meter_squared_shortcut"},{attribute:"cleaning_time",label:"tile.cleaning_time.label",icon:"mdi:timer-sand",unit:"unit.minute_shortcut"}]},Ji={map_modes:Yi,tiles:Wi},Qi=Object.freeze({__proto__:null,map_modes:Yi,tiles:Wi,default:Ji}),en={defaultTemplates:["vacuum_clean_zone","vacuum_clean_point"],templates:{vacuum_clean_zone:{name:"map_mode.vacuum_clean_zone",icon:"mdi:select-drag",selection_type:"MANUAL_RECTANGLE",coordinates_rounding:!1,max_selections:5,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.xiaomi_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone_predefined:{name:"map_mode.vacuum_clean_zone_predefined",icon:"mdi:floor-plan",selection_type:"PREDEFINED_RECTANGLE",max_selections:5,coordinates_rounding:!1,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.xiaomi_clean_zone",service_data:{zone:"[[selection]]",repeats:"[[repeats]]",entity_id:"[[entity_id]]"}}},vacuum_clean_point:{name:"map_mode.vacuum_clean_point",icon:"mdi:map-marker-plus",selection_type:"MANUAL_POINT",coordinates_rounding:!1,repeats_type:"NONE",service_call_schema:{service:"vacuum.xiaomi_clean_point",service_data:{point:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_point_predefined:{name:"map_mode.vacuum_clean_point_predefined",icon:"mdi:map-marker",selection_type:"PREDEFINED_POINT",coordinates_rounding:!1,repeats_type:"NONE",service_call_schema:{service:"vacuum.xiaomi_clean_point",service_data:{point:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",max_selections:1,repeats_type:"EXTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.send_command",service_data:{entity_id:"[[entity_id]]",command:"set_mode_withroom",params:"[ 0, [[repeats]], 1, [[selection_unwrapped]] ]|[[jsonify]]"}}}}},tn={from_attributes:[{attribute:"filter_left",label:"tile.filter_left.label",icon:"mdi:air-filter",unit:"unit.hour_shortcut"},{attribute:"main_brush_left",label:"tile.main_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"},{attribute:"side_brush_left",label:"tile.side_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"},{attribute:"mop_left",label:"tile.mop_left.label",icon:"mdi:format-color-fill",unit:"unit.hour_shortcut"}]},an={map_modes:en,tiles:tn},nn=Object.freeze({__proto__:null,map_modes:en,tiles:tn,default:an}),rn={defaultTemplates:[],templates:{vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",repeats_type:"REPEAT",max_repeats:3,service_call_schema:{service:"mqtt.publish",service_data:{topic:"[[topic]]/custom_command",payload:'{ "command": "segmented_cleanup", "segment_ids": [[selection]], "repeats": [[repeats]], "afterCleaning": "Base" }'}}},vacuum_goto_predefined:{name:"map_mode.vacuum_goto_predefined",icon:"mdi:map-marker",selection_type:"ROOM",repeats_type:"NONE",service_call_schema:{service:"mqtt.publish",service_data:{topic:"[[topic]]/custom_command",payload:'{ "command": "go_to", "spot_id": "[[selection_unwrapped]]" }'}}}}},on={from_attributes:[{attribute:"filter",label:"tile.filter_left.label",icon:"mdi:air-filter",unit:"unit.hour_shortcut"},{attribute:"mainBrush",label:"tile.main_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"},{attribute:"sideBrush",label:"tile.side_brush_left.label",icon:"mdi:brush",unit:"unit.hour_shortcut"}]},ln={map_modes:rn,tiles:on},sn=Object.freeze({__proto__:null,map_modes:rn,tiles:on,default:ln}),cn={defaultTemplates:["vacuum_clean_zone","vacuum_goto"],templates:{vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",repeats_type:"REPEAT",max_repeats:3,service_call_schema:{service:"vacuum.send_command",service_data:{command:"app_segment_clean",params:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone:{name:"map_mode.vacuum_clean_zone",icon:"mdi:select-drag",selection_type:"MANUAL_RECTANGLE",coordinates_rounding:!0,max_selections:5,repeats_type:"INTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.send_command",service_data:{command:"app_zoned_clean",params:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_clean_zone_predefined:{name:"map_mode.vacuum_clean_zone_predefined",icon:"mdi:floor-plan",selection_type:"PREDEFINED_RECTANGLE",max_selections:5,coordinates_rounding:!0,repeats_type:"INTERNAL",max_repeats:3,service_call_schema:{service:"vacuum.send_command",service_data:{command:"app_zoned_clean",params:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_goto:{name:"map_mode.vacuum_goto",icon:"mdi:map-marker-plus",selection_type:"MANUAL_POINT",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"vacuum.send_command",service_data:{command:"app_goto_target",params:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_goto_predefined:{name:"map_mode.vacuum_goto_predefined",icon:"mdi:map-marker",selection_type:"PREDEFINED_POINT",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"vacuum.send_command",service_data:{command:"app_goto_target",params:"[[selection]]",entity_id:"[[entity_id]]"}}},vacuum_follow_path:{name:"map_mode.vacuum_follow_path",icon:"mdi:map-marker-path",selection_type:"MANUAL_PATH",coordinates_rounding:!0,repeats_type:"NONE",service_call_schema:{service:"script.vacuum_follow_path",service_data:{service:"vacuum.send_command",mode:"send_command",path:"[[selection]]",entity_id:"[[entity_id]]"}}}}},dn={from_attributes:[],from_sensors:[]},un={map_modes:cn,tiles:dn},mn=Object.freeze({__proto__:null,map_modes:cn,tiles:dn,default:un}),pn={defaultTemplates:["vacuum_clean_segment"],templates:{vacuum_clean_segment:{name:"map_mode.vacuum_clean_segment",icon:"mdi:floor-plan",selection_type:"ROOM",repeats_type:"NONE",service_call_schema:{service:"neato.custom_cleaning",service_data:{zone:"[[selection_unwrapped]]",entity_id:"[[entity_id]]"}}}}},_n={from_attributes:[{attribute:"clean_area",label:"tile.cleaned_area.label",icon:"mdi:texture-box",unit:"unit.meter_squared_shortcut"}]},gn={map_modes:pn,tiles:_n},vn=Object.freeze({__proto__:null,map_modes:pn,tiles:_n,default:gn});const hn=(e,t,a)=>{En(a);const i=function(e,t){const a=bn(e),i=bn(t),n=a.pop(),r=i.pop(),o=An(a,i);return 0!==o?o:n&&r?An(n.split("."),r.split(".")):n||r?n?-1:1:0}(e,t);return xn[a].includes(i)},fn=/^v?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,bn=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const t=e.match(fn);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},yn=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},kn=(e,t)=>{const[a,i]=((e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t])(yn(e),yn(t));return a>i?1:a<i?-1:0},An=(e,t)=>{for(let a=0;a<Math.max(e.length,t.length);a++){const i=kn(e[a]||0,t[a]||0);if(0!==i)return i}return 0},xn={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]},zn=Object.keys(xn),En=e=>{if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===zn.indexOf(e))throw new Error(`Invalid operator, expected one of ${zn.join("|")}`)};class wn{static getPlatforms(){return Array.from(wn.TEMPLATES.keys())}static isValidModeTemplate(e,t){return void 0!==t&&Object.keys(this.getPlatformTemplate(e).map_modes.templates).includes(t)}static getModeTemplate(e,t){return this.getPlatformTemplate(e).map_modes.templates[t]}static generateDefaultModes(e){return this.getPlatformTemplate(e).map_modes.defaultTemplates.map((e=>({template:e})))}static getTilesFromAttributesTemplates(e){var t;return null!==(t=this.getPlatformTemplate(e).tiles.from_attributes)&&void 0!==t?t:[]}static getTilesFromSensorsTemplates(e){var t;return null!==(t=this.getPlatformTemplate(e).tiles.from_sensors)&&void 0!==t?t:[]}static usesSensors(e,t){const a=this.getPlatformTemplate(t).sensors_from;return!!a&&hn(e.config.version.replace(/\.*[a-z].*/,""),a,">=")}static getPlatformTemplate(e){var t,a;return null!==(a=null!==(t=this.TEMPLATES.get(e))&&void 0!==t?t:this.TEMPLATES.get(this.DEFAULT_PLATFORM))&&void 0!==a?a:{templates:[],defaultTemplates:{}}}}wn.DEFAULT_PLATFORM="default",wn.KRZYSZTOFHAJDAMOWICZ_MIIO2_PLATFORM="KrzysztofHajdamowicz/miio2",wn.MAROTOWEB_VIOMISE_PLATFORM="marotoweb/viomise",wn.RAND256_VALETUDO_RE_PLATFORM="rand256/ValetudoRE",wn.SEND_COMMAND_PLATFORM="send_command",wn.NEATO_PLATFORM="Neato",wn.TEMPLATES=new Map([[wn.DEFAULT_PLATFORM,Bi],[wn.KRZYSZTOFHAJDAMOWICZ_MIIO2_PLATFORM,Qi],[wn.MAROTOWEB_VIOMISE_PLATFORM,nn],[wn.RAND256_VALETUDO_RE_PLATFORM,sn],[wn.SEND_COMMAND_PLATFORM,mn],[wn.NEATO_PLATFORM,vn]]);const Sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADwCAYAAABxLb1rAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QsWDwwxfsgRyAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAtkSURBVHja7d19zCVXXQfw725368JuC7JtUWKXKiLUF7aQVhRYSUEUGiGAaEUJEkBAMWZVasQivlQrxVZAFgIiiYCgIWDiGxZECoKKS60FxQCW1yLU0hcXWlraZdc/znmSeWbvs8+duTNz99l+PslNdp699/zuzD33d+ecOedMAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAoNh2n+3VWkicneWiSByT5xiTbk3w1yS1Jbkjy8fr41yT/mOTAgjHvmeRRSR6T5CFJTq2PE5P8X5Lrk/xHkquSvCPJfy3wme1O8tga7/QkpyXZkeTGGue/k1xeH/+jmh+zpqozzJk0Dh/lcTDJbUm+lOQTSd6T5DVJnpXkm3rGfPY6MZuPq+co7+FJ9ncoc+Xx9SQfSPL8JCd13IddSV6d5PaOMT+e5NeS3KtDrPPql2HeGIeSvCXJ/QaqC9cm2dahnFNar9+7QWL2ebxoSXXm8MiPbRMfr2XkoYV37lCSf07yY0k2LyEBbkpySX0fi34wP9jh/e9N8rUF492a5IJ14uxI8lcLxLgzyS8PVBcuWEIyuuA4SoBD15m7WgIcNA9tzjA2Jfn+JG9N8uEkD5747PVVSX6l1aR/b5JnJjkzycm1WfHNSb6nNo9fkeTfe8bbmuRNSV5Wy11xXZLLahK9b5K71eb3mfXsbV+Sz7bKunuSRx4l1r1rE/3xrb/vr0ntrNoE/oYk35JkT/0xaDZ9tyS5NMkfDfCZv7A23aa0jJhDm7LO3JW79HrnoXbm3df6/xNqIrlPDfL0JH9SP8B2Jv5akqf12IG3tcqZ55T2ia3X3JLkRzvEvF+S3699gPOeAf7hjF+ei2o/4zwf0uOT/Gfj9X9zlB+oK1qxbkjy1Dni3D3JS2acFV/Yoy78bWv7JROcjS0j5r4Rv5xT1Zm1fKbx2usGaiWOcbyWlof67tzWJM9I8skZH/DTJ0iA7T6/J/U88KfV/rL1EuBTZxzkH+8Rb0uSX6/N07Uq84tasf63nsF28TOtJHiw9pV2qQvnt758X60VcMxktIyYYyXAKevM8Z4AR8tDi+7c9iRvbJVxe5KzR0yA92k9f+yrZNuSfLHDF2we5yZ5w4y/n1o7e5sf5Lk9Y1zaes//1LEuPCXJE1p/e93IyWgZMfdt8DpzV06AC+ehoXbuda1yPlx/ucZIgA9rPf9tIyfAn2/FuyLjDSX6zVas1y9Q1t2SfLpV3vd1TEZJuVLePJN84MgJcOqY+zZ4nZEAO+ahzSPswM/VpsuKByX5qZE+1C0zmrFj+oXW9iX14A5tU5Lntf522QLl3ZYy7KLpeT3K+dVWX8zvTvDFXUbMjVhn6JGHxkiAd+bIYQu/ONJOtgf5Prg2Hcdw3yT3b2x/Ksk7R4p1ZsrV3xX7B2jev6E2o5vNqK4+kOSvG9srg83HtIyYG7HO0CMPbR4p+DtTOiNX7E73wbjz+GQrCe5I8tqUISFDayeMK0b8Jd/T2n7/AGVenzKQdsWu+ujqha1EeskElXkZMTdanaFHHhorAR5OmbrT9OiRYrWbdk9K8rEkL0iZBjeUs2ecmYylPX7pyoHK/dA6cebx0ZRO5hWPTPK4kSvyMmJutDpDjzy0ecTgV7W2v2ukOH8wI9YZKWP7PpYybu7dKQNQn1Ur5bYecdpN60+PeOxOaW1/dqByP7dOnHm9OGUox4rfG7kuTRXz+Rl2ZsOUdWYZhj5ek+ehMStt+8PeNVKc25P88FF+XXfWrL83yR/Xs6Avp/SrXZwyCX0eO1vbN4947Nrzgw8MVO6BdeLM69qsvjq3O8lPjlyRlxFzUVPWGXrkoTET4Jdb2yeNGOuG2ix6TpJr5nj+1iTnpPQt/VtNnues85p7rrN/Q2ofq1sHKveW1vbJC5R1cSuhXpTVU7zGsIyYi5iyztAjD42ZAKce63QoZezPd6RcRLgoZaWIL83x2ocn+WDKmK213DlhQm8nqu0DlbtjwC/kTVl9MeKMJD878mc8dsxX1Xrb5/E7S64zyzD08Zo8D42ZAIf8snVxuJ7Rvbg2fU9LWQThh1LGlL01ZTjCrGPxyhy56MBa73/nyF/0pnsMVG67nBsXLO/lSb7Q2L5wgi/5MmIOdfaxM0ztqHlozAR4xjpt8Sldl+Tv69nD+SmXwnenrI7SHpbw0jV+NdoXEE4fuUm/Zr/FAk5fJ05XtyX5rcb2qem2dNVGidnXlHWGHnlozAR4Vmv76mPswHwkyXNz5OjwB2b2dKv2QOQfGPG9tY/V2QOV2+7nvGqAMl+f1eMLfymrB3GPYRkx+5iyztAjD42ZAB/b+PehJO86Rg/QnyX5l9bfvnvG89rPefSI76k98HnPAGXubCX2TyX5/ADlfj2rl9janrJiyZiWEbOPKesMPfLQWAlwT8p0rhXvTVnK6Vj1kXX6DZIybOb6xva3pixYOYaPZvXFm4cm+c4Fy3xG6/N+z4Dv9+0p91ZZ8ZyMM/Nn2TG7mrLO0CMPjZEAT0gZhNx06TF+oO5obX9xxnMOpUyza7ow41ztPpzSP5lWM6+vbSmTw5teO/B7bi5asDXTXOVbRswupqwz9MhDYyTAl2b1ZPV3J/m7kXZyb8rV3kX3o7k01MGs3Tf2siRfaWw/LN3utTHLuSkr2rbty+qZD89MuYNYHxcl+bbG9vsy3PS65q9r83M+P+PfGmEZMbuass7QMQ8NmQBPTBlG0jxTOZB+yy7Na0vKFcF/WKD588SsvjhweavZ0nRzyhSspouT/ESPuJtrAn9XZk9Juy6rx7xtSvLnKVevu3h26zM52DpzGlJz0YJNM47V8RKziynrDAvkoUUWInxySr9V8/V3pPuE9a4Lor4gqxfL/NN0m3P8tJSl1pvveb2+tk058g5th+rp9rzj9R6XskDjevd3OCHlhkjNWDfX971eM2p7yn002nMw50l+ay1OOo83Ze35n3uP8ZhjLYk/ZZ1Zy2dy/C+IulAemudmJCfVpHRObW68MkeuNLxy274f6bHziyTA5uNDKSsqPyblTmkn1j6ieyX53vqluHJGhXzunO/z5JTb77Xj3pgyUPe8lLF722oFf0DKQOzLUm5a3n7d0SrzvTP7XsBX1l+53fVsYGvKLQIeUc84Pj/jNa+Zs/9pkWR0Rta+7ePeYzzmmDdFmrLOHM8JcLQ8NNQ9P/dn/WXLm82zRe4L/NMpQyIWfc9fqWV1PdV+9QCxb8r607m2J/nLBWIcTLltaN+68JSOx+blEyfAoWKOfV/gKevMFAnwWLsvcN88NEjgD9b+tK79U4veGH1X7Qf8RI/3fEeSN2exmRZ7UtYc6xr76pS5xzs6xDov5V7GXeL8RVYPBZgiAZ6SMuVoygQ4RMwpbow+dZ25qyXATnloS4edP5wyufvW2g/1hXpqvr+ejg8xqLaPzyX5jfr49pSlsR5Uv/S76unySbWJe6A2Oa6uzZG3Z/aQly7eXx/3Txno+oiUW1furE3urfWYXVv7cN6XsjLwNT1ivSPlStZDUgZ4nlub+KfVL8VNKeMHr0mZ+nd5Zs97HtsNtX/rt4/zmBuhzhxvjtU8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASf4fJ6JYBxmOptUAAAAASUVORK5CYII=";let Pn=class extends Q{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _title(){var e;return(null===(e=this._config)||void 0===e?void 0:e.title)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _vacuum_platform(){var e;return(null===(e=this._config)||void 0===e?void 0:e.vacuum_platform)||""}get _camera(){var e,t;return(null===(t=null===(e=this._config)||void 0===e?void 0:e.map_source)||void 0===t?void 0:t.camera)||""}get _map_locked(){var e;return(null===(e=this._config)||void 0===e?void 0:e.map_locked)||!1}get _two_finger_pan(){var e;return(null===(e=this._config)||void 0===e?void 0:e.two_finger_pan)||!1}render(){if(!this.hass||!this._helpers)return N``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states),t=e.filter((e=>"camera"===e.substr(0,e.indexOf(".")))),a=e.filter((e=>"vacuum"===e.substr(0,e.indexOf(".")))),i=wn.getPlatforms();return N`
            <div class="card-config">
                <div class="description">
                    ${this._localize("editor.description.before_link")}<a
                        target="_blank"
                        href="https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor"
                        >${this._localize("editor.description.link_text")}</a
                    >${this._localize("editor.description.after_link")}
                </div>
                <div class="values">
                    <ha-textfield
                        label=${this._localize("editor.label.name")}
                        .value=${this._title}
                        .configValue=${"title"}
                        @input=${this._titleChanged}></ha-textfield>
                </div>
                <div class="values">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label=${this._localize("editor.label.entity")}
                        @selected=${this._entityChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"entity"}
                        .value=${this._entity}>
                        ${a.map((e=>N` <mwc-list-item .value="${e}">${e}</mwc-list-item> `))}
                    </ha-select>
                </div>
                <div class="values">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label=${this._localize("editor.label.vacuum_platform")}
                        @selected=${this._entityChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"vacuum_platform"}
                        .value=${this._vacuum_platform}>
                        ${i.map((e=>N` <mwc-list-item .value="${e}">${e}</mwc-list-item> `))}
                    </ha-select>
                </div>
                <div class="values">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label=${this._localize("editor.label.camera")}
                        @selected=${this._cameraChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"camera"}
                        .value=${this._camera}>
                        ${t.map((e=>N` <mwc-list-item .value="${e}">${e}</mwc-list-item> `))}
                    </ha-select>
                </div>
                <div class="values">
                    <ha-formfield class="switch-wrapper" .label=${this._localize("editor.label.map_locked")}>
                        <ha-switch
                            .checked=${this._map_locked}
                            .configValue=${"map_locked"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="values">
                    <ha-formfield class="switch-wrapper" .label=${this._localize("editor.label.two_finger_pan")}>
                        <ha-switch
                            .checked=${this._two_finger_pan}
                            .configValue=${"two_finger_pan"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
            </div>
        `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_entityChanged(e){this._valueChanged(e)}_cameraChanged(e){if(!this._config||!this.hass)return;const t=e.target.value;if(this._camera===t)return;const a=Object.assign({},this._config);a.map_source={camera:t},a.calibration_source={camera:!0},this._config=a,ce(this,"config-changed",{config:this._config})}_titleChanged(e){this._valueChanged(e)}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(this[`_${t.configValue}`]!==t.value){if(t.configValue)this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value});else{const e=Object.assign({},this._config);delete e[t.configValue],this._config=e}ce(this,"config-changed",{config:this._config})}}_localize(e){return Gi(e,this.hass)}static get styles(){return r`
            .values {
                padding-left: 16px;
                margin: 8px;
                display: grid;
            }

            .switch-wrapper {
                padding: 8px;
            }
        `}};e([ie({attribute:!1})],Pn.prototype,"hass",void 0),e([ne()],Pn.prototype,"_config",void 0),e([ne()],Pn.prototype,"_helpers",void 0),Pn=e([te("xiaomi-vacuum-map-card-editor")],Pn);const Mn="ontouchstart"in window||navigator.maxTouchPoints>0;class Cn extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Mn?"100px":"50px",height:Mn?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",(e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1}));const a=e=>{let t,a;this.held=!1,e.touches?(t=e.touches[0].pageX,a=e.touches[0].pageY):(t=e.pageX,a=e.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(t,a),this.held=!0}),this.holdTime)},i=a=>{a.preventDefault(),["touchend","touchcancel"].includes(a.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?ce(e,"action",{action:"hold"}):t.hasDoubleClick?"click"===a.type&&a.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,ce(e,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,ce(e,"action",{action:"double_tap"})):ce(e,"action",{action:"tap"}))};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),e.addEventListener("mousedown",a,{passive:!0}),e.addEventListener("click",i),e.addEventListener("keyup",(e=>{13===e.keyCode&&i(e)}))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-xiaomi-vacuum-map-card",Cn);const Tn=(e,t)=>{const a=(()=>{const e=document.body;if(e.querySelector("action-handler-xiaomi-vacuum-map-card"))return e.querySelector("action-handler-xiaomi-vacuum-map-card");const t=document.createElement("action-handler-xiaomi-vacuum-map-card");return e.appendChild(t),t})();a&&a.bind(e,t)},$n=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{update(e,[t]){return Tn(e.element,t),j}render(e){}});class Nn{constructor(e){this.id=-1,this.nativePointer=e,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,self.Touch&&e instanceof Touch?this.id=e.identifier:Rn(e)&&(this.id=e.pointerId)}getCoalesced(){return"getCoalescedEvents"in this.nativePointer?this.nativePointer.getCoalescedEvents().map((e=>new Nn(e))):[this]}}const Rn=e=>self.PointerEvent&&e instanceof PointerEvent,jn=()=>{};class On{constructor(e,{start:t=(()=>!0),move:a=jn,end:i=jn,rawUpdates:n=!1}={}){this._element=e,this.startPointers=[],this.currentPointers=[],this._pointerStart=e=>{if(0===e.button&&this._triggerPointerStart(new Nn(e),e))if(Rn(e)){(e.target&&"setPointerCapture"in e.target?e.target:this._element).setPointerCapture(e.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)}else window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)},this._touchStart=e=>{for(const t of Array.from(e.changedTouches))this._triggerPointerStart(new Nn(t),e)},this._move=e=>{const t=this.currentPointers.slice(),a="changedTouches"in e?Array.from(e.changedTouches).map((e=>new Nn(e))):[new Nn(e)],i=[];for(const e of a){const t=this.currentPointers.findIndex((t=>t.id===e.id));-1!==t&&(i.push(e),this.currentPointers[t]=e)}0!==i.length&&this._moveCallback(t,i,e)},this._triggerPointerEnd=(e,t)=>{const a=this.currentPointers.findIndex((t=>t.id===e.id));if(-1===a)return!1;this.currentPointers.splice(a,1),this.startPointers.splice(a,1);const i="touchcancel"===t.type||"pointercancel"===t.type;return this._endCallback(e,t,i),!0},this._pointerEnd=e=>{if(this._triggerPointerEnd(new Nn(e),e))if(Rn(e)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=e=>{for(const t of Array.from(e.changedTouches))this._triggerPointerEnd(new Nn(t),e)},this._startCallback=t,this._moveCallback=a,this._endCallback=i,this._rawUpdates=n&&"onpointerrawupdate"in window,self.PointerEvent?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(e,t){return!!this._startCallback(e,t)&&(this.currentPointers.push(e),this.startPointers.push(e),!0)}}var Ln,In,Dn,Un;!function(e){e[e.MANUAL_RECTANGLE=0]="MANUAL_RECTANGLE",e[e.PREDEFINED_RECTANGLE=1]="PREDEFINED_RECTANGLE",e[e.ROOM=2]="ROOM",e[e.MANUAL_PATH=3]="MANUAL_PATH",e[e.MANUAL_POINT=4]="MANUAL_POINT",e[e.PREDEFINED_POINT=5]="PREDEFINED_POINT"}(Ln||(Ln={})),function(e){e[e.NONE=0]="NONE",e[e.INTERNAL=1]="INTERNAL",e[e.EXTERNAL=2]="EXTERNAL",e[e.REPEAT=3]="REPEAT"}(In||(In={})),function(e){e.ENTITY_ID="[[entity_id]]",e.SELECTION="[[selection]]",e.SELECTION_SIZE="[[selection_size]]",e.SELECTION_UNWRAPPED="[[selection_unwrapped]]",e.REPEATS="[[repeats]]",e.POINT_X="[[point_x]]",e.POINT_Y="[[point_y]]"}(Dn||(Dn={}));class Fn{constructor(e,t,a,i){this.domain=e,this.service=t,this.serviceData=a,this.target=i}}!function(e){e.JSONIFY="|[[jsonify]]"}(Un||(Un={}));class Vn{constructor(e){this.service=e.service,this.serviceData=e.service_data,this.target=e.target}apply(e,t,a,i){const n=n=>Vn.getReplacedValue(n,e,t,a,i);let r,o;this.serviceData&&(r=this.getFilledTemplate(this.serviceData,n)),this.target&&(o=this.getFilledTemplate(this.target,n));const l=this.service.split(".");return new Fn(l[0],l[1],r,o)}getFilledTemplate(e,t){const a=JSON.parse(JSON.stringify(e));return this.replacer(a,t),a}replacer(e,t){for(const[a,i]of Object.entries(e))"object"==typeof i?this.replacer(i,t):"string"==typeof i&&(e[a]=t(i))}static getReplacedValue(e,t,a,i,n){var r;const o=r=>{switch(r){case Dn.ENTITY_ID:return t;case Dn.SELECTION:return a;case Dn.SELECTION_SIZE:return a.length;case Dn.SELECTION_UNWRAPPED:return JSON.stringify(a).replaceAll("[","").replaceAll("]","").replaceAll('"',"");case Dn.REPEATS:return i;case Dn.POINT_X:return this.isPoint(a)?a[0]:e;case Dn.POINT_Y:return this.isPoint(a)?a[1]:e;default:return r in n?n[r]:null}};return null!==(r=o(e))&&void 0!==r?r:Vn.replaceInStr(e,n,o)}static replaceInStr(e,t,a){let i=e;return[...Object.values(Dn),...Object.keys(t)].forEach((e=>{let t=a(e);"object"==typeof t&&(t=JSON.stringify(t)),i=i.replaceAll(e,`${t}`)})),i.endsWith(Un.JSONIFY)?JSON.parse(i.replace(Un.JSONIFY,"")):i}static isPoint(e){return"number"==typeof e[0]&&2==e.length}}class Hn{constructor(e,t,a){var i,n,r,o,l,s,c,d,u;this.config=t,this.name=null!==(i=t.name)&&void 0!==i?i:Zi("map_mode.invalid",a),this.icon=null!==(n=t.icon)&&void 0!==n?n:"mdi:help",this.selectionType=t.selection_type?Ln[t.selection_type]:Ln.PREDEFINED_POINT,this.maxSelections=null!==(r=t.max_selections)&&void 0!==r?r:999,this.coordinatesRounding=null===(o=t.coordinates_rounding)||void 0===o||o,this.runImmediately=null!==(l=t.run_immediately)&&void 0!==l&&l,this.repeatsType=t.repeats_type?In[t.repeats_type]:In.NONE,this.maxRepeats=null!==(s=t.max_repeats)&&void 0!==s?s:1,this.serviceCallSchema=new Vn(null!==(c=t.service_call_schema)&&void 0!==c?c:{}),this.predefinedSelections=null!==(d=t.predefined_selections)&&void 0!==d?d:[],this.variables=Object.fromEntries(Object.entries(null!==(u=t.variables)&&void 0!==u?u:{}).map((([e,t])=>[`[[${e}]]`,t]))),this._applyTemplateIfPossible(e,t,a),Hn.PREDEFINED_SELECTION_TYPES.includes(this.selectionType)||(this.runImmediately=!1)}_applyTemplateIfPossible(e,t,a){if(!t.template||!wn.isValidModeTemplate(e,t.template))return;const i=wn.getModeTemplate(e,t.template);!t.name&&i.name&&(this.name=Zi(i.name,a)),!t.icon&&i.icon&&(this.icon=i.icon),!t.selection_type&&i.selection_type&&(this.selectionType=Ln[i.selection_type]),!t.max_selections&&i.max_selections&&(this.maxSelections=i.max_selections),void 0===t.coordinates_rounding&&void 0!==i.coordinates_rounding&&(this.coordinatesRounding=i.coordinates_rounding),void 0===t.run_immediately&&void 0!==i.run_immediately&&(this.runImmediately=i.run_immediately),!t.repeats_type&&i.repeats_type&&(this.repeatsType=In[i.repeats_type]),!t.max_repeats&&i.max_repeats&&(this.maxRepeats=i.max_repeats),!t.service_call_schema&&i.service_call_schema&&(this.serviceCallSchema=new Vn(i.service_call_schema))}getServiceCall(e,t,a){return this.serviceCallSchema.apply(e,t,a,this.variables)}}Hn.PREDEFINED_SELECTION_TYPES=[Ln.PREDEFINED_RECTANGLE,Ln.ROOM,Ln.PREDEFINED_POINT];class Zn{constructor(e,t){this.x=e,this.y=t}}function Gn(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}function Xn(e,t){const a=e.indexOf(t,0);return a>-1&&e.splice(a,1),a}function Kn(e,t){var a,i,n,r,o;const l=new Set;return e.entity&&l.add(e.entity),e.map_source.camera&&l.add(e.map_source.camera),e.calibration_source.entity&&l.add(e.calibration_source.entity),(null!==(a=e.conditions)&&void 0!==a?a:[]).map((e=>null==e?void 0:e.entity)).forEach((e=>{e&&l.add(e)})),(null!==(i=e.icons)&&void 0!==i?i:[]).filter((e=>e.conditions)).flatMap((e=>e.conditions)).map((e=>null==e?void 0:e.entity)).forEach((e=>{e&&l.add(e)})),(null!==(n=e.tiles)&&void 0!==n?n:[]).forEach((e=>l.add(e.entity))),(null!==(r=e.tiles)&&void 0!==r?r:[]).filter((e=>e.conditions)).flatMap((e=>e.conditions)).map((e=>null==e?void 0:e.entity)).forEach((e=>{e&&l.add(e)})),(null!==(o=e.map_modes)&&void 0!==o?o:[]).map((a=>{var i;return new Hn(null!==(i=e.vacuum_platform)&&void 0!==i?i:"default",a,t)})).forEach((e=>function(e){const t=new Set;switch(e.selectionType){case Ln.PREDEFINED_RECTANGLE:e.predefinedSelections.map((e=>e)).filter((e=>"string"==typeof e.zones)).forEach((e=>t.add(e.zones.split(".attributes.")[0])));break;case Ln.PREDEFINED_POINT:e.predefinedSelections.map((e=>e)).filter((e=>"string"==typeof e.position)).forEach((e=>t.add(e.position.split(".attributes.")[0])))}return t}(e).forEach((e=>l.add(e))))),l}function qn(e,t){var a;return(null!==(a=e.conditions)&&void 0!==a?a:[]).every((e=>function(e,t){const a=e.attribute?t.states[e.entity].attributes[e.attribute]:t.states[e.entity].state;return e.value?a==e.value:!!e.value_not&&a!=e.value_not}(e,t)))}function Bn(e,t){return e?t():null}function Yn(e,t){return a=>{e.hass&&t&&a.detail.action&&function(e,t,a,i){var n;"double_tap"===i&&a.double_tap_action?n=a.double_tap_action:"hold"===i&&a.hold_action?n=a.hold_action:"tap"===i&&a.tap_action&&(n=a.tap_action),ue(e,t,a,n)}(e,e.hass,t,a.detail.action)}}function Wn(e,t,a){let i,n;return e instanceof MouseEvent&&(i=e.offsetX,n=e.offsetY),window.TouchEvent&&e instanceof TouchEvent&&e.touches&&(i=(e.touches[0].clientX-t.getBoundingClientRect().x)/a,n=(e.touches[0].clientY-t.getBoundingClientRect().y)/a),new Zn(i,n)}function Jn(e,t){return t?Math.sqrt((t.clientX-e.clientX)**2+(t.clientY-e.clientY)**2):0}function Qn(e,t){return t?{clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}:e}function er(e,t){return"number"==typeof e?e:e.trimRight().endsWith("%")?t*parseFloat(e)/100:parseFloat(e)}let tr;function ar(){return tr||(tr=document.createElementNS("http://www.w3.org/2000/svg","svg"))}function ir(){return ar().createSVGMatrix()}function nr(){return ar().createSVGPoint()}class rr extends HTMLElement{constructor(){super(),this._transform=ir(),this._enablePan=!0,this._locked=!1,this._twoFingerPan=!1,new MutationObserver((()=>this._stageElChange())).observe(this,{childList:!0});const e=new On(this,{start:(t,a)=>!(a.target.classList.contains("draggable")&&e.currentPointers.length<2)&&(!(2===e.currentPointers.length||!this._positioningEl||this.locked)&&((this.enablePan||1==e.currentPointers.length||a instanceof PointerEvent&&"mouse"==a.pointerType)&&(this.enablePan=!0),!0)),move:t=>{this.enablePan&&this._onPointerMove(t,e.currentPointers)},end:(t,a,i)=>(this.twoFingerPan&&1==e.currentPointers.length&&(this.enablePan=!1),Gn(a),!1)});this.addEventListener("wheel",(e=>this._onWheel(e)))}static get observedAttributes(){return["min-scale","max-scale","no-default-pan","two-finger-pan","locked"]}attributeChangedCallback(e,t,a){"min-scale"===e&&this.scale<this.minScale&&this.setTransform({scale:this.minScale}),"max-scale"===e&&this.scale>this.maxScale&&this.setTransform({scale:this.maxScale}),"no-default-pan"===e&&(this.enablePan=!("1"==a||"true"==a)),"two-finger-pan"===e&&("1"==a||"true"==a?(this.twoFingerPan=!0,this.enablePan=!1):(this.twoFingerPan=!1,this.enablePan=!0)),"locked"===e&&(this.locked="1"==a||"true"==a)}get minScale(){const e=this.getAttribute("min-scale");if(!e)return.01;const t=parseFloat(e);return Number.isFinite(t)?Math.max(.01,t):.01}set minScale(e){e&&this.setAttribute("min-scale",String(e))}get maxScale(){const e=this.getAttribute("max-scale");if(!e)return 100;const t=parseFloat(e);return Number.isFinite(t)?Math.min(100,t):100}set maxScale(e){e&&this.setAttribute("max-scale",String(e))}set enablePan(e){this._enablePan=e,this._enablePan?this._enablePan&&"none"!=this.style.touchAction&&(this.style.touchAction="none"):this.style.touchAction="pan-y pan-x"}get enablePan(){return this._enablePan}set locked(e){this._locked=e}get locked(){return this._locked}set twoFingerPan(e){this._twoFingerPan=e}get twoFingerPan(){return this._twoFingerPan}connectedCallback(){this._stageElChange()}get x(){return this._transform.e}get y(){return this._transform.f}get scale(){return this._transform.a}scaleTo(e,t={}){let{originX:a=0,originY:i=0}=t;const{relativeTo:n="content",allowChangeEvent:r=!1}=t,o="content"===n?this._positioningEl:this;if(!o||!this._positioningEl)return void this.setTransform({scale:e,allowChangeEvent:r});const l=o.getBoundingClientRect();if(a=er(a,l.width),i=er(i,l.height),"content"===n)a+=this.x,i+=this.y;else{const e=this._positioningEl.getBoundingClientRect();a-=e.left,i-=e.top}this._applyChange({allowChangeEvent:r,originX:a,originY:i,scaleDiff:e/this.scale})}setTransform(e={}){const{scale:t=this.scale,allowChangeEvent:a=!1}=e;let{x:i=this.x,y:n=this.y}=e;if(!this._positioningEl)return void this._updateTransform(t,i,n,a);const r=this.getBoundingClientRect(),o=this._positioningEl.getBoundingClientRect();if(!r.width||!r.height)return void this._updateTransform(t,i,n,a);let l=nr();l.x=o.left-r.left,l.y=o.top-r.top;let s=nr();s.x=o.width+l.x,s.y=o.height+l.y;const c=ir().translate(i,n).scale(t).multiply(this._transform.inverse());l=l.matrixTransform(c),s=s.matrixTransform(c),l.x>r.width?i+=r.width-l.x:s.x<0&&(i+=-s.x),l.y>r.height?n+=r.height-l.y:s.y<0&&(n+=-s.y),this._updateTransform(t,i,n,a)}_updateTransform(e,t,a,i){if(!(e<this.minScale)&&!(e>this.maxScale)&&(e!==this.scale||t!==this.x||a!==this.y)&&(this._transform.e=t,this._transform.f=a,this._transform.d=this._transform.a=e,this.style.setProperty("--x",this.x+"px"),this.style.setProperty("--y",this.y+"px"),this.style.setProperty("--scale",this.scale+""),i)){const e=new Event("change",{bubbles:!0});this.dispatchEvent(e)}}_stageElChange(){this._positioningEl=void 0,0!==this.children.length&&(this._positioningEl=this.children[0],this.children.length>1&&console.warn("<pinch-zoom> must not have more than one child."),this.setTransform({allowChangeEvent:!0}))}_onWheel(e){if(!this._positioningEl||this.locked)return;e.preventDefault();const t=this._positioningEl.getBoundingClientRect();let{deltaY:a}=e;const{ctrlKey:i,deltaMode:n}=e;1===n&&(a*=15);const r=1-a/(i?100:300);this._applyChange({scaleDiff:r,originX:e.clientX-t.left,originY:e.clientY-t.top,allowChangeEvent:!0})}_onPointerMove(e,t){if(!this._positioningEl)return;const a=this._positioningEl.getBoundingClientRect(),i=Qn(e[0],e[1]),n=Qn(t[0],t[1]),r=i.clientX-a.left,o=i.clientY-a.top,l=Jn(e[0],e[1]),s=Jn(t[0],t[1]),c=l?s/l:1;this._applyChange({originX:r,originY:o,scaleDiff:c,panX:n.clientX-i.clientX,panY:n.clientY-i.clientY,allowChangeEvent:!0})}_applyChange(e={}){const{panX:t=0,panY:a=0,originX:i=0,originY:n=0,scaleDiff:r=1,allowChangeEvent:o=!1}=e,l=ir().translate(t,a).translate(i,n).translate(this.x,this.y).scale(r).translate(-i,-n).scale(this.scale);this.setTransform({allowChangeEvent:o,scale:l.a,x:l.e,y:l.f})}}customElements.define("pinch-zoom",rr);class or{constructor(e){this._context=e}scaled(e){return e/this._context.scale()}scaledCss(e){return parseFloat(this._context.cssEvaluator(e))/this._context.scale()}realScaled(e){return e/this._context.realScale()}realScaled2(e){return e*this._context.realScale()}realScaled2Point(e){return[this.realScaled2(e[0]),this.realScaled2(e[1])]}realScaledPoint(e){return[this.realScaled(e[0]),this.realScaled(e[1])]}update(){this._context.update()}localize(e){return this._context.localize(e)}getMousePosition(e){return this._context.mousePositionCalculator(e)}vacuumToRealMap(e,t){var a;const i=null===(a=this._context.coordinatesConverter())||void 0===a?void 0:a.vacuumToMap(e,t);if(!i)throw Error("Missing calibration");return i}vacuumToScaledMap(e,t){return this.realScaled2Point(this.vacuumToRealMap(e,t))}scaledMapToVacuum(e,t){const[a,i]=this.realScaledPoint([e,t]);return this.realMapToVacuum(a,i)}realMapToVacuum(e,t){var a;const i=null===(a=this._context.coordinatesConverter())||void 0===a?void 0:a.mapToVacuum(e,t);if(!i)throw Error("Missing calibration");return this._context.roundMap(i)}renderIcon(e,t,a){const i=e?this.vacuumToScaledMap(e.x,e.y):[];return R`${Bn(null!=e&&i.length>0,(()=>R`
                <foreignObject class="icon-foreign-object"
                               style="--x-icon: ${i[0]}px; --y-icon: ${i[1]}px;"
                               x="${i[0]}px" y="${i[1]}px" width="36px" height="36px">         
                    <body xmlns="http://www.w3.org/1999/xhtml">
                      <div class="map-icon-wrapper ${a} clickable" @click="${t}" >
                          <ha-icon icon="${null==e?void 0:e.name}" style="background: transparent;"></ha-icon>
                      </div>
                    </body>
                </foreignObject>
            `))}`}renderLabel(e,t){const a=e?this.vacuumToScaledMap(e.x,e.y):[];return R`${Bn(null!=e&&a.length>0,(()=>{var i,n;return R`
                <text class="label-text ${t}"
                      x="${a[0]+this.scaled(null!==(i=null==e?void 0:e.offset_x)&&void 0!==i?i:0)}px"
                      y="${a[1]+this.scaled(null!==(n=null==e?void 0:e.offset_y)&&void 0!==n?n:0)}px">
                    ${null==e?void 0:e.text}
                </text>
            `}))}`}vacuumToMapRect([e,t,a,i]){const n=[e,t],r=[a,t],o=[a,i],l=[e,i],s=this.vacuumToScaledMap(e,t),c=this.vacuumToScaledMap(a,t),d=this.vacuumToScaledMap(a,i),u=this.vacuumToScaledMap(e,i),m=[n,r,o,l,n,r,o,l],p=[s,c,d,u,s,c,d,u],_=[s,c,d,u],g=p.indexOf(or.findTopLeft(_)),v=p.slice(g,g+4),h=this._isCounterClockwise(v),f=m.slice(g,g+4);return h?[or._reverse(v),or._reverse(f)]:[v,f]}_isCounterClockwise(e){let t=0;return e.forEach(((a,i)=>t+=(e[(i+1)%4][0]-a[0])*(e[(i+1)%4][1]+a[1]))),t<0}static findTopLeft(e){const t=e.sort(((e,t)=>e[1]-t[1]))[0],a=e.indexOf(t),i=e[(a+1)%4],n=e[(a+3)%4],r=or.calcAngle(t,i)<or.calcAngle(t,n)?i:n;return r[0]<t[0]?r:t}static calcAngle(e,t){let a=Math.atan2(t[1]-e[1],t[0]-e[0]);return a>Math.PI/2&&(a=Math.PI-a),a}static _reverse([e,t,a,i]){return[e,i,a,t]}static get styles(){return r`
            .icon-foreign-object {
                overflow: visible;
                pointer-events: none;
            }

            .map-icon-wrapper {
                position: center;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: auto;
            }
        `}}var lr;!function(e){e[e.NONE=0]="NONE",e[e.RESIZE=1]="RESIZE",e[e.MOVE=2]="MOVE"}(lr||(lr={}));class sr extends or{constructor(e,t,a,i,n,r){super(r),this._id=n,this._dragMode=lr.NONE,this._vacRect=this._toVacuumFromDimensions(e,t,a,i),this._vacRectSnapshot=this._vacRect}render(){const e=this._vacRect,t=this.vacuumToMapRect(e)[0],a=t[0],i=t[2],n=t[3],r=sr.calcAngle(t[0],t[3]);return R`
            <g class="manual-rectangle-wrapper ${this.isSelected()?"selected":""}"
               style="--x-resize:${i[0]}px; 
                      --y-resize:${i[1]}px;
                      --x-delete:${n[0]}px;
                      --y-delete:${n[1]}px;
                      --x-description:${a[0]}px;
                      --y-description:${a[1]}px;
                      --angle-description: ${r}rad;">
                <polygon class="manual-rectangle draggable movable"
                         @mousedown="${e=>this._startDrag(e)}"
                         @mousemove="${e=>this._drag(e)}"
                         @mouseup="${e=>this._endDrag(e)}"
                         @touchstart="${e=>this._startDrag(e)}"
                         @touchmove="${e=>this._drag(e)}"
                         @touchend="${e=>this._endDrag(e)}"
                         @touchleave="${e=>this._endDrag(e)}"
                         @touchcancel="${e=>this._endDrag(e)}"
                         points="${sr._toPoints(t)}">
                </polygon>
                <g class="manual-rectangle-description">
                    <text>
                        ${this._id} ${this._getDimensions()}
                    </text>
                </g>
                <circle class="manual-rectangle-delete-circle clickable"
                        @mouseup="${e=>this._delete(e)}"></circle>
                <path class="manual-rectangle-delete-icon"
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                </path>
                <circle class="manual-rectangle-resize-circle draggable resizer"
                        @mousedown="${e=>this._startDrag(e)}"
                        @mousemove="${e=>this._drag(e)}"
                        @mouseup="${e=>this._endDrag(e)}"
                        @touchstart="${e=>this._startDrag(e)}"
                        @touchmove="${e=>this._drag(e)}"
                        @touchend="${e=>this._endDrag(e)}"
                        @touchleave="${e=>this._endDrag(e)}"
                        @touchcancel="${e=>this._endDrag(e)}">
                </circle>
                <path class="manual-rectangle-resize-icon"
                      d="M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z">
                </path>
            </g>
        `}isSelected(){return null!=this._selectedElement}_getDimensions(){const[e,t,a,i]=this.toVacuum(),n=Math.abs(a-e),r=Math.abs(i-t),o=this._context.roundingEnabled()?1e3:1,l=e=>(e/o).toFixed(1);return`${l(n)}${this.localize("unit.meter_shortcut")} x ${l(r)}${this.localize("unit.meter_shortcut")}`}_startDrag(e){var t;if(window.TouchEvent&&e instanceof TouchEvent&&e.touches.length>1)return;if(!e.target.classList.contains("draggable"))return;if(!(null===(t=e.target.parentElement)||void 0===t?void 0:t.classList.contains("manual-rectangle-wrapper")))return;if(!e.target.parentElement)return;Gn(e),this._selectedTarget=e.target;const a=e.target;a.classList.contains("movable")?this._dragMode=lr.MOVE:a.classList.contains("resizer")?this._dragMode=lr.RESIZE:this._dragMode=lr.NONE,this._selectedElement=e.target.parentElement,this._vacRectSnapshot=[...this._vacRect];const i=this.getMousePosition(e);this._startPointSnapshot=this.scaledMapToVacuum(i.x,i.y),this.update()}externalDrag(e){this._drag(e)}_drag(e){if(!(window.TouchEvent&&e instanceof TouchEvent&&e.touches.length>1)&&this._selectedElement){Gn(e);const t=this.getMousePosition(e);if(t){const e=this.scaledMapToVacuum(t.x,t.y),a=e[0]-this._startPointSnapshot[0],i=e[1]-this._startPointSnapshot[1];switch(this._dragMode){case lr.MOVE:this._vacRect=[this._vacRectSnapshot[0]+a,this._vacRectSnapshot[1]+i,this._vacRectSnapshot[2]+a,this._vacRectSnapshot[3]+i],this._setup(this.vacuumToMapRect(this._vacRect)[0]);break;case lr.RESIZE:const e=this.vacuumToMapRect(this._vacRectSnapshot)[1][0],t=[...this._vacRect];e[0]===this._vacRectSnapshot[0]?this._vacRect[2]=this._vacRectSnapshot[2]+a:this._vacRect[0]=this._vacRectSnapshot[0]+a,e[1]===this._vacRectSnapshot[1]?this._vacRect[3]=this._vacRectSnapshot[3]+i:this._vacRect[1]=this._vacRectSnapshot[1]+i,Math.sign(this._vacRect[0]-this._vacRect[2])==Math.sign(t[0]-t[2])&&Math.sign(this._vacRect[1]-this._vacRect[3])==Math.sign(t[1]-t[3])||(this._vacRect=t),this._setup(this.vacuumToMapRect(this._vacRect)[0]);case lr.NONE:}}}}_setup(e){var t,a,i,n,r,o,l,s,c,d,u,m,p,_,g,v,h;null===(i=null===(a=null===(t=this._selectedElement)||void 0===t?void 0:t.children)||void 0===a?void 0:a.item(0))||void 0===i||i.setAttribute("points",sr._toPoints(e));const f=e[0],b=e[2],y=e[3],k=sr.calcAngle(e[0],e[3]);null===(r=null===(n=this._selectedElement)||void 0===n?void 0:n.style)||void 0===r||r.setProperty("--x-resize",b[0]+"px"),null===(l=null===(o=this._selectedElement)||void 0===o?void 0:o.style)||void 0===l||l.setProperty("--y-resize",b[1]+"px"),null===(c=null===(s=this._selectedElement)||void 0===s?void 0:s.style)||void 0===c||c.setProperty("--x-delete",y[0]+"px"),null===(u=null===(d=this._selectedElement)||void 0===d?void 0:d.style)||void 0===u||u.setProperty("--y-delete",y[1]+"px"),null===(p=null===(m=this._selectedElement)||void 0===m?void 0:m.style)||void 0===p||p.setProperty("--x-description",f[0]+"px"),null===(g=null===(_=this._selectedElement)||void 0===_?void 0:_.style)||void 0===g||g.setProperty("--y-description",f[1]+"px"),null===(h=null===(v=this._selectedElement)||void 0===v?void 0:v.style)||void 0===h||h.setProperty("--angle-description",k+"rad")}_endDrag(e){Gn(e),this._selectedElement=null,this._selectedTarget=null,this.update()}_delete(e){Gn(e);const t=Xn(this._context.selectedManualRectangles(),this);if(t>-1){for(let e=t;e<this._context.selectedManualRectangles().length;e++)this._context.selectedManualRectangles()[e]._id=(e+1).toString();de("selection"),this._context.update()}}static _toPoints(e){const t=e.filter((e=>!isNaN(e[0])&&!isNaN(e[1]))).map((e=>e.join(", "))).join(" ");return 3==t.length&&console.error(`Points: ${t}`),t}_toVacuumFromDimensions(e,t,a,i){const n=this.realScaled(e),r=this.realScaled(t),o=this.realScaled(a),l=this.realScaled(i),s=this.realMapToVacuum(n,r),c=this.realMapToVacuum(n+o,r+l),d=[s[0],c[0]].sort(),u=[s[1],c[1]].sort();return[d[0],u[0],d[1],u[1]]}toVacuum(e=null){const[t,a,i,n]=this._vacRect,r=[Math.min(t,i),Math.min(a,n),Math.max(t,i),Math.max(a,n)];return null!=e?[...r,e]:r}static get styles(){return r`
            .resizer {
                cursor: nwse-resize;
            }

            .movable {
                cursor: move;
            }

            .manual-rectangle-wrapper {
            }

            .manual-rectangle-wrapper.selected {
            }

            .manual-rectangle {
                stroke: var(--map-card-internal-manual-rectangle-line-color);
                stroke-linejoin: round;
                stroke-dasharray: calc(var(--map-card-internal-manual-rectangle-line-segment-line) / var(--map-scale)),
                    calc(var(--map-card-internal-manual-rectangle-line-segment-gap) / var(--map-scale));
                fill: var(--map-card-internal-manual-rectangle-fill-color);
                stroke-width: calc(var(--map-card-internal-manual-rectangle-line-width) / var(--map-scale));
            }

            .manual-rectangle-wrapper.selected > .manual-rectangle {
                stroke: var(--map-card-internal-manual-rectangle-line-color-selected);
                fill: var(--map-card-internal-manual-rectangle-fill-color-selected);
            }

            .manual-rectangle-description {
                transform: translate(
                        calc(
                            var(--x-description) + var(--map-card-internal-manual-rectangle-description-offset-x) /
                                var(--map-scale)
                        ),
                        calc(
                            var(--y-description) + var(--map-card-internal-manual-rectangle-description-offset-y) /
                                var(--map-scale)
                        )
                    )
                    rotate(var(--angle-description));
                font-size: calc(var(--map-card-internal-manual-rectangle-description-font-size) / var(--map-scale));
                fill: var(--map-card-internal-manual-rectangle-description-color);
                background: transparent;
            }

            .manual-rectangle-delete-circle {
                r: calc(var(--map-card-internal-manual-rectangle-delete-circle-radius) / var(--map-scale));
                cx: var(--x-delete);
                cy: var(--y-delete);
                stroke: var(--map-card-internal-manual-rectangle-delete-circle-line-color);
                fill: var(--map-card-internal-manual-rectangle-delete-circle-fill-color);
                stroke-width: calc(
                    var(--map-card-internal-manual-rectangle-delete-circle-line-width) / var(--map-scale)
                );
            }

            .manual-rectangle-delete-icon {
                fill: var(--map-card-internal-manual-rectangle-delete-icon-color);
                transform: translate(
                        calc(var(--x-delete) - 8.5px / var(--map-scale)),
                        calc(var(--y-delete) - 8.5px / var(--map-scale))
                    )
                    scale(calc(0.71 / var(--map-scale)));
                pointer-events: none;
            }

            .manual-rectangle-wrapper.selected > .manual-rectangle-delete-circle {
                stroke: var(--map-card-internal-manual-rectangle-delete-circle-line-color-selected);
                fill: var(--map-card-internal-manual-rectangle-delete-circle-fill-color-selected);
                opacity: 50%;
            }

            .manual-rectangle-wrapper.selected > .manual-rectangle-delete-icon {
                fill: var(--map-card-internal-manual-rectangle-delete-icon-color-selected);
                opacity: 50%;
            }

            .manual-rectangle-resize-circle {
                r: calc(var(--map-card-internal-manual-rectangle-resize-circle-radius) / var(--map-scale));
                cx: var(--x-resize);
                cy: var(--y-resize);
                stroke: var(--map-card-internal-manual-rectangle-resize-circle-line-color);
                fill: var(--map-card-internal-manual-rectangle-resize-circle-fill-color);
                stroke-width: calc(
                    var(--map-card-internal-manual-rectangle-resize-circle-line-width) / var(--map-scale)
                );
            }

            .manual-rectangle-resize-icon {
                fill: var(--map-card-internal-manual-rectangle-resize-icon-color);
                transform: translate(
                        calc(var(--x-resize) - 8.5px / var(--map-scale)),
                        calc(var(--y-resize) - 8.5px / var(--map-scale))
                    )
                    scale(calc(0.71 / var(--map-scale)));
                pointer-events: none;
            }

            .manual-rectangle-wrapper.selected > .manual-rectangle-resize-circle {
                stroke: var(--map-card-internal-manual-rectangle-resize-circle-line-color-selected);
                fill: var(--map-card-internal-manual-rectangle-resize-circle-fill-color-selected);
                opacity: 50%;
            }

            .manual-rectangle-wrapper.selected > .manual-rectangle-resize-icon {
                fill: var(--map-card-internal-manual-rectangle-resize-icon-color-selected);
                opacity: 50%;
            }
        `}}class cr{constructor(e,t,a,i,n,r,o,l,s,c,d,u,m,p){this.scale=e,this.realScale=t,this.mousePositionCalculator=a,this.update=i,this.coordinatesConverter=n,this.selectedManualRectangles=r,this.selectedPredefinedRectangles=o,this.selectedRooms=l,this.selectedPredefinedPoint=s,this.roundingEnabled=c,this.maxSelections=d,this.cssEvaluator=u,this.runImmediately=m,this.localize=p}roundMap([e,t]){return this.roundingEnabled()?[Math.round(e),Math.round(t)]:[e,t]}}class dr extends or{constructor(e,t,a){super(a),this._x=e,this._y=t}}class ur extends dr{constructor(e,t,a){super(e,t,a)}render(){return R`
            <g class="manual-point-wrapper" style="--x-point:${this._x}px; --y-point:${this._y}px;">
                <circle class="manual-point"></circle>
            </g>
        `}imageX(){return this.realScaled(this._x)}imageY(){return this.realScaled(this._y)}toVacuum(e=null){const[t,a]=this.realMapToVacuum(this.imageX(),this.imageY());return null===e?[t,a]:[t,a,e]}static get styles(){return r`
            .manual-point-wrapper {
                stroke: var(--map-card-internal-manual-point-line-color);
                stroke-width: calc(var(--map-card-internal-manual-point-line-width) / var(--map-scale));
                --radius: calc(var(--map-card-internal-manual-point-radius) / var(--map-scale));
            }

            .manual-point {
                cx: var(--x-point);
                cy: var(--y-point);
                r: var(--radius);
                fill: var(--map-card-internal-manual-point-fill-color);
            }
        `}}class mr extends or{constructor(e,t,a){super(a),this.x=e,this.y=t}imageX(){return this.realScaled(this.x)}imageY(){return this.realScaled(this.y)}renderMask(){return R`
            <circle style="r: var(--radius)"
                    cx="${this.x}"
                    cy="${this.y}"
                    fill="black">
            </circle>`}render(){return R`
            <circle class="manual-path-point"
                    cx="${this.x}"
                    cy="${this.y}">
            </circle>`}}class pr extends or{constructor(e,t){super(t),this.points=e}render(){if(0===this.points.length)return R``;const e=this.points.map((e=>e.x)),t=this.points.map((e=>e.y)),a=Math.max(...e),i=Math.min(...e),n=Math.max(...t),r=Math.min(...t);return R`
            <g class="manual-path-wrapper">
                <defs>
                    <mask id="manual-path-circles-filter">
                        <rect x="${i}" y="${r}" width="${a-i}" height="${n-r}"
                              fill="white"></rect>
                        ${this.points.map((e=>e.renderMask()))}
                    </mask>
                </defs>
                ${this.points.map((e=>e.render()))}
                <polyline class="manual-path-line"
                          points="${this.points.map((e=>`${e.x},${e.y}`)).join(" ")}"
                          mask="url(#manual-path-circles-filter)">
                </polyline>
            </g>
        `}toVacuum(e=null){return this.points.map((t=>{const[a,i]=this.realMapToVacuum(t.imageX(),t.imageY());return null===e?[a,i]:[a,i,e]}))}addPoint(e,t){this.points.push(new mr(e,t,this._context))}clear(){this.points=[]}removeLast(){this.points.pop()}static get styles(){return r`
            .manual-path-wrapper {
                --radius: calc(var(--map-card-internal-manual-path-point-radius) / var(--map-scale));
            }

            .manual-path-line {
                fill: transparent;
                stroke: var(--map-card-internal-manual-path-line-color);
                stroke-width: calc(var(--map-card-internal-manual-path-line-width) / var(--map-scale));
            }

            .manual-path-point {
                r: var(--radius);
                stroke: var(--map-card-internal-manual-path-point-line-color);
                fill: var(--map-card-internal-manual-path-point-fill-color);
                stroke-width: calc(var(--map-card-internal-manual-path-point-line-width) / var(--map-scale));
            }
        `}}class _r extends or{constructor(e,t){var a;super(t),this._config=e,this._selected=!1,this._iconConfig=null!==(a=this._config.icon)&&void 0!==a?a:{x:this._config.position[0],y:this._config.position[1],name:"mdi:map-marker"}}render(){return R`
            <g class="predefined-point-wrapper ${this._selected?"selected":""}">
                ${this.renderIcon(this._iconConfig,(()=>this._click()),"predefined-point-icon-wrapper")}
                ${this.renderLabel(this._config.label,"predefined-point-label")}
            </g>
        `}_click(){if(this._selected=!this._selected,de("selection"),this._selected){const e=this._context.selectedPredefinedPoint().pop();void 0!==e&&(e._selected=!1),this._context.selectedPredefinedPoint().push(this)}else Xn(this._context.selectedPredefinedPoint(),this);if(this._context.runImmediately())return this._selected=!1,void Xn(this._context.selectedPredefinedPoint(),this);this.update()}toVacuum(e=null){return"string"==typeof this._config.position?[0,0]:null===e?this._config.position:[...this._config.position,e]}static get styles(){return r`
            .predefined-point-wrapper {
            }

            .predefined-point-icon-wrapper {
                x: var(--x-icon);
                y: var(--y-icon);
                height: var(--map-card-internal-predefined-point-icon-wrapper-size);
                width: var(--map-card-internal-predefined-point-icon-wrapper-size);
                border-radius: var(--map-card-internal-small-radius);
                transform-box: fill-box;
                overflow: hidden;
                transform: translate(
                        calc(var(--map-card-internal-predefined-point-icon-wrapper-size) / -2),
                        calc(var(--map-card-internal-predefined-point-icon-wrapper-size) / -2)
                    )
                    scale(calc(1 / var(--map-scale)));
                background: var(--map-card-internal-predefined-point-icon-background-color);
                color: var(--map-card-internal-predefined-point-icon-color);
                --mdc-icon-size: var(--map-card-internal-predefined-point-icon-size);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .predefined-point-label {
                text-anchor: middle;
                dominant-baseline: middle;
                pointer-events: none;
                font-size: calc(var(--map-card-internal-predefined-point-label-font-size) / var(--map-scale));
                fill: var(--map-card-internal-predefined-point-label-color);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .predefined-point-wrapper.selected > * > .predefined-point-icon-wrapper {
                background: var(--map-card-internal-predefined-point-icon-background-color-selected);
                color: var(--map-card-internal-predefined-point-icon-color-selected);
            }

            .predefined-point-wrapper.selected > .predefined-point-label {
                fill: var(--map-card-internal-predefined-point-label-color-selected);
            }
        `}static getFromEntities(e,t,a){return e.predefinedSelections.map((e=>e)).filter((e=>"string"==typeof e.position)).map((e=>e.position.split(".attributes."))).flatMap((e=>{const a=t.states[e[0]],i=2===e.length?a.attributes[e[1]]:a.state;let n;try{n=JSON.parse(i)}catch(e){n=i}return n})).map((e=>new _r({position:e,label:void 0,icon:{x:e[0],y:e[1],name:"mdi:map-marker"}},a())))}}class gr extends or{constructor(e,t){super(t),this._config=e,this._selected=!1}render(){let e=[];"string"!=typeof this._config.zones&&(e=this._config.zones);const t=e.map((e=>this.vacuumToMapRect(e)[0]));return R`
            <g class="predefined-rectangle-wrapper ${this._selected?"selected":""}">
                ${t.map((e=>R`
                    <polygon class="predefined-rectangle clickable"
                             points="${e.map((e=>e.join(", "))).join(" ")}"
                             @click="${()=>this._click()}">
                    </polygon>
                `))}
                ${this.renderIcon(this._config.icon,(()=>this._click()),"predefined-rectangle-icon-wrapper")}
                ${this.renderLabel(this._config.label,"predefined-rectangle-label")}
            </g>
        `}_click(){if(!this._selected&&this._context.selectedPredefinedRectangles().map((e=>e.size())).reduce(((e,t)=>e+t),0)+this.size()>this._context.maxSelections())de("failure");else{if(this._selected=!this._selected,this._selected?this._context.selectedPredefinedRectangles().push(this):Xn(this._context.selectedPredefinedRectangles(),this),this._context.runImmediately())return this._selected=!1,void Xn(this._context.selectedPredefinedRectangles(),this);de("selection"),this.update()}}size(){return this._config.zones.length}toVacuum(e){return"string"==typeof this._config.zones?[]:null===e?this._config.zones:this._config.zones.map((t=>[...t,e]))}static get styles(){return r`
            .predefined-rectangle-wrapper {
            }

            .predefined-rectangle-wrapper.selected {
            }

            .predefined-rectangle {
                width: var(--width);
                height: var(--height);
                x: var(--x);
                y: var(--y);
                stroke: var(--map-card-internal-predefined-rectangle-line-color);
                stroke-linejoin: round;
                stroke-dasharray: calc(
                        var(--map-card-internal-predefined-rectangle-line-segment-line) / var(--map-scale)
                    ),
                    calc(var(--map-card-internal-predefined-rectangle-line-segment-gap) / var(--map-scale));
                fill: var(--map-card-internal-predefined-rectangle-fill-color);
                stroke-width: calc(var(--map-card-internal-predefined-rectangle-line-width) / var(--map-scale));
                transition: stroke var(--map-card-internal-transitions-duration) ease,
                    fill var(--map-card-internal-transitions-duration) ease;
            }

            .predefined-rectangle-icon-wrapper {
                x: var(--x-icon);
                y: var(--y-icon);
                height: var(--map-card-internal-predefined-rectangle-icon-wrapper-size);
                width: var(--map-card-internal-predefined-rectangle-icon-wrapper-size);
                border-radius: var(--map-card-internal-small-radius);
                transform-box: fill-box;
                transform: translate(
                        calc(var(--map-card-internal-predefined-rectangle-icon-wrapper-size) / -2),
                        calc(var(--map-card-internal-predefined-rectangle-icon-wrapper-size) / -2)
                    )
                    scale(calc(1 / var(--map-scale)));
                background: var(--map-card-internal-predefined-rectangle-icon-background-color);
                color: var(--map-card-internal-predefined-rectangle-icon-color);
                --mdc-icon-size: var(--map-card-internal-predefined-rectangle-icon-size);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .predefined-rectangle-label {
                text-anchor: middle;
                dominant-baseline: middle;
                pointer-events: none;
                font-size: calc(var(--map-card-internal-predefined-rectangle-label-font-size) / var(--map-scale));
                fill: var(--map-card-internal-predefined-rectangle-label-color);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .predefined-rectangle-wrapper.selected > .predefined-rectangle {
                stroke: var(--map-card-internal-predefined-rectangle-line-color-selected);
                fill: var(--map-card-internal-predefined-rectangle-fill-color-selected);
            }

            .predefined-rectangle-wrapper.selected > * > .predefined-rectangle-icon-wrapper {
                background: var(--map-card-internal-predefined-rectangle-icon-background-color-selected);
                color: var(--map-card-internal-predefined-rectangle-icon-color-selected);
            }

            .predefined-rectangle-wrapper.selected > .predefined-rectangle-label {
                fill: var(--map-card-internal-predefined-rectangle-label-color-selected);
            }
        `}static getFromEntities(e,t,a){return e.predefinedSelections.map((e=>e)).filter((e=>"string"==typeof e.zones)).map((e=>e.zones.split(".attributes."))).flatMap((e=>{const a=t.states[e[0]],i=2===e.length?a.attributes[e[1]]:a.state;let n;try{n=JSON.parse(i)}catch(e){n=i}return n})).map((e=>new gr({zones:[e],label:void 0,icon:{x:(e[0]+e[2])/2,y:(e[1]+e[3])/2,name:"mdi:broom"}},a())))}}class vr extends or{constructor(e,t){super(t),this._config=e,this._selected=!1}render(){var e,t;const a=(null!==(t=null===(e=this._config)||void 0===e?void 0:e.outline)&&void 0!==t?t:[]).map((e=>this.vacuumToScaledMap(e[0],e[1])));return R`
            <g class="room-wrapper ${this._selected?"selected":""} 
            room-${`${this._config.id}`.replace(" ","_")}-wrapper">
                <polygon class="room-outline clickable"
                         points="${a.map((e=>e.join(", "))).join(" ")}"
                         @click="${()=>this._click()}">
                </polygon>
                ${this.renderIcon(this._config.icon,(()=>this._click()),"room-icon-wrapper")}
                ${this.renderLabel(this._config.label,"room-label")}
            </g>
        `}toVacuum(){return this._config.id}_click(){if(!this._selected&&this._context.selectedRooms().length>=this._context.maxSelections())de("failure");else{if(this._selected=!this._selected,this._selected?this._context.selectedRooms().push(this):Xn(this._context.selectedRooms(),this),this._context.runImmediately())return this._selected=!1,void Xn(this._context.selectedRooms(),this);de("selection"),this.update()}}static get styles(){return r`
            .room-wrapper {
            }

            .room-outline {
                stroke: var(--map-card-internal-room-outline-line-color);
                stroke-width: calc(var(--map-card-internal-room-outline-line-width) / var(--map-scale));
                fill: var(--map-card-internal-room-outline-fill-color);
                stroke-linejoin: round;
                stroke-dasharray: calc(var(--map-card-internal-room-outline-line-segment-line) / var(--map-scale)),
                    calc(var(--map-card-internal-room-outline-line-segment-gap) / var(--map-scale));
                transition: stroke var(--map-card-internal-transitions-duration) ease,
                    fill var(--map-card-internal-transitions-duration) ease;
            }

            .room-icon-wrapper {
                x: var(--x-icon);
                y: var(--y-icon);
                height: var(--map-card-internal-room-icon-wrapper-size);
                width: var(--map-card-internal-room-icon-wrapper-size);
                border-radius: var(--map-card-internal-small-radius);
                transform-box: fill-box;
                overflow: hidden;
                transform: translate(
                        calc(var(--map-card-internal-room-icon-wrapper-size) / -2),
                        calc(var(--map-card-internal-room-icon-wrapper-size) / -2)
                    )
                    scale(calc(1 / var(--map-scale)));
                background: var(--map-card-internal-room-icon-background-color);
                color: var(--map-card-internal-room-icon-color);
                --mdc-icon-size: var(--map-card-internal-room-icon-size);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .room-label {
                text-anchor: middle;
                dominant-baseline: middle;
                pointer-events: none;
                font-size: calc(var(--map-card-internal-room-label-font-size) / var(--map-scale));
                fill: var(--map-card-internal-room-label-color);
                transition: color var(--map-card-internal-transitions-duration) ease,
                    background var(--map-card-internal-transitions-duration) ease;
            }

            .room-wrapper.selected > .room-outline {
                stroke: var(--map-card-internal-room-outline-line-color-selected);
                fill: var(--map-card-internal-room-outline-fill-color-selected);
            }

            .room-wrapper.selected > * > .room-icon-wrapper {
                background: var(--map-card-internal-room-icon-background-color-selected);
                color: var(--map-card-internal-room-icon-color-selected);
            }

            .room-wrapper.selected > .room-label {
                fill: var(--map-card-internal-room-label-color-selected);
            }
        `}}function hr(e){return void 0===e.x?["validation.preset.map_modes.predefined_selections.icon.x.missing"]:void 0===e.y?["validation.preset.map_modes.predefined_selections.icon.y.missing"]:e.name?[]:["validation.preset.map_modes.predefined_selections.icon.name.missing"]}function fr(e){return void 0===e.x?["validation.preset.map_modes.predefined_selections.label.x.missing"]:void 0===e.y?["validation.preset.map_modes.predefined_selections.label.y.missing"]:e.text?[]:["validation.preset.map_modes.predefined_selections.label.text.missing"]}function br(e,t,a){var i,n;if(!t)return["validation.preset.map_modes.invalid"];if(t.template&&!wn.isValidModeTemplate(e,t.template))return[["validation.preset.map_modes.template.invalid","{0}",t.template]];const r=[];t.template||t.icon||r.push("validation.preset.map_modes.icon.missing"),t.template||t.name||r.push("validation.preset.map_modes.name.missing"),t.template||t.service_call_schema||r.push("validation.preset.map_modes.service_call_schema.missing");const o=new Hn(e,t,a);switch(o.selectionType){case Ln.PREDEFINED_RECTANGLE:o.predefinedSelections.flatMap((e=>function(e){const t=e,a=[];return t.zones||a.push("validation.preset.map_modes.predefined_selections.zones.missing"),"string"!=typeof t.zones&&t.zones.filter((e=>4!=e.length)).length>0&&a.push("validation.preset.map_modes.predefined_selections.zones.invalid_parameters_number"),t.icon&&hr(t.icon).forEach((e=>a.push(e))),t.label&&fr(t.label).forEach((e=>a.push(e))),a}(e))).forEach((e=>r.push(e)));break;case Ln.ROOM:o.predefinedSelections.flatMap((e=>function(e){var t;const a=e,i=[];return void 0===a.id&&i.push("validation.preset.map_modes.predefined_selections.rooms.id.missing"),a.id.toString().match(/^[A-Za-z0-9 _]+$/i)||i.push(["validation.preset.map_modes.predefined_selections.rooms.id.invalid_format","{0}",a.id.toString()]),(null!==(t=a.outline)&&void 0!==t?t:[]).filter((e=>2!=e.length)).length>0&&i.push("validation.preset.map_modes.predefined_selections.rooms.outline.invalid_parameters_number"),a.icon&&hr(a.icon).forEach((e=>i.push(e))),a.label&&fr(a.label).forEach((e=>i.push(e))),i}(e))).forEach((e=>r.push(e)));break;case Ln.PREDEFINED_POINT:o.predefinedSelections.flatMap((e=>function(e){var t;const a=e,i=[];return a.position||i.push("validation.preset.map_modes.predefined_selections.points.position.missing"),"string"!=typeof a.position&&2!=(null===(t=a.position)||void 0===t?void 0:t.length)&&i.push("validation.preset.map_modes.predefined_selections.points.position.invalid_parameters_number"),a.icon&&hr(a.icon).forEach((e=>i.push(e))),a.label&&fr(a.label).forEach((e=>i.push(e))),i}(e))).forEach((e=>r.push(e)));break;case Ln.MANUAL_RECTANGLE:case Ln.MANUAL_PATH:case Ln.MANUAL_POINT:null!==(n=null===(i=o.predefinedSelections)||void 0===i?void 0:i.length)&&void 0!==n&&n&&r.push(["validation.preset.map_modes.predefined_selections.not_applicable","{0}",Ln[o.selectionType]])}return t.service_call_schema&&function(e){return e.service?e.service.includes(".")?[]:[["validation.preset.map_modes.service_call_schema.service.invalid","{0}",e.service]]:["validation.preset.map_modes.service_call_schema.service.missing"]}(t.service_call_schema).forEach((e=>r.push(e))),r}function yr(e,t,a){var i,n,r,o;const l=[],s=new Map([["entity","validation.preset.entity.missing"],["map_source","validation.preset.map_source.missing"],["calibration_source","validation.preset.calibration_source.missing"]]),c=Object.keys(e);var d,u;s.forEach(((e,t)=>{c.includes(t)||l.push(e)})),e.map_source&&(d=e.map_source,d.camera||d.image?d.camera&&d.image?["validation.preset.map_source.ambiguous"]:[]:["validation.preset.map_source.none_provided"]).forEach((e=>l.push(e))),e.calibration_source&&(u=e.calibration_source,Object.keys(u).filter((e=>"attribute"!=e)).length>1?["validation.preset.calibration_source.ambiguous"]:u.calibration_points?[3,4].includes(u.calibration_points.length)?u.calibration_points.flatMap((e=>function(e){const t=[];return(null==e?void 0:e.map)||t.push("validation.preset.calibration_source.calibration_points.missing_map"),(null==e?void 0:e.vacuum)||t.push("validation.preset.calibration_source.calibration_points.missing_vacuum"),[null==e?void 0:e.map,null==e?void 0:e.vacuum].filter((e=>void 0===e.x||void 0===e.y)).length>0&&t.push("validation.preset.calibration_source.calibration_points.missing_coordinate"),t}(e))):["validation.preset.calibration_source.calibration_points.invalid_number"]:[]).forEach((e=>l.push(e))),e.vacuum_platform&&!wn.getPlatforms().includes(e.vacuum_platform)&&l.push(["validation.preset.platform.invalid","{0}",e.vacuum_platform]);const m=null!==(i=e.vacuum_platform)&&void 0!==i?i:"default";return(null!==(n=e.icons)&&void 0!==n?n:[]).flatMap((e=>function(e){if(!e)return["validation.preset.icons.invalid"];const t=[];return e.icon||t.push("validation.preset.icons.icon.missing"),t}(e))).forEach((e=>l.push(e))),(null!==(r=e.tiles)&&void 0!==r?r:[]).flatMap((e=>function(e){if(!e)return["validation.preset.tiles.invalid"];const t=[];return e.entity||t.push("validation.preset.tiles.entity.missing"),e.label||t.push("validation.preset.tiles.label.missing"),t}(e))).forEach((e=>l.push(e))),(null!==(o=e.map_modes)&&void 0!==o?o:[]).flatMap((e=>br(m,e,a))).forEach((e=>l.push(e))),!e.preset_name&&t&&l.push("validation.preset.preset_name.missing"),l}class kr{static generate(e,t,a,i){if(!e)return new Promise((e=>e([])));const n=wn.usesSensors(e,a),r=e.states[t],o=[];return r?(o.push(...this.getCommonTiles(r,t,i)),n?this.addTilesFromSensors(e,t,a,o,i):new Promise((e=>e(this.addTilesFromAttributes(r,t,a,o,i))))):new Promise((e=>e(o)))}static getCommonTiles(e,t,a){const i=[];return"status"in e.attributes&&i.push({entity:t,label:Zi("tile.status.label",a),attribute:"status",icon:"mdi:robot-vacuum",translations:this.generateTranslationKeys(["Starting","Charger disconnected","Idle","Remote control active","Cleaning","Returning home","Manual mode","Charging","Charging problem","Paused","Spot cleaning","Error","Shutting down","Updating","Docking","Going to target","Zoned cleaning","Segment cleaning","Emptying the bin","Charging complete","Device offline"],"status",a)}),"battery_level"in e.attributes&&"battery_icon"in e.attributes&&i.push({entity:t,label:Zi("tile.battery_level.label",a),attribute:"battery_level",icon:e.attributes.battery_icon,unit:"%"}),"battery_level"in e.attributes&&!("battery_icon"in e.attributes)&&i.push({entity:t,label:Zi("tile.battery_level.label",a),attribute:"battery_level",icon:"mdi:battery",unit:"%"}),"fan_speed"in e.attributes&&i.push({entity:t,label:Zi("tile.fan_speed.label",a),attribute:"fan_speed",icon:"mdi:fan",translations:this.generateTranslationKeys(["Silent","Standard","Medium","Turbo","Auto","Gentle"],"fan_speed",a)}),i}static addTilesFromAttributes(e,t,a,i,n){return wn.getTilesFromAttributesTemplates(a).filter((t=>t.attribute in e.attributes)).forEach((e=>i.push({entity:t,label:Zi(e.label,n),attribute:e.attribute,icon:e.icon,unit:e.unit?Zi(e.unit,n):void 0,precision:e.precision,multiplier:e.multiplier}))),i}static async addTilesFromSensors(e,t,a,i,n){const r=(await async function(e,t){const a=(await e.callWS({type:"entity/source",entity_id:[t]}))[t].config_entry,i=(await e.callWS({type:"config/entity_registry/list"})).filter((e=>e.config_entry_id===a));return Promise.all(i.map((t=>e.callWS({type:"config/entity_registry/get",entity_id:t.entity_id}))))}(e,t)).filter((e=>null===e.disabled_by)),o=r.filter((e=>e.entity_id===t))[0].unique_id;return wn.getTilesFromSensorsTemplates(a).map((e=>({tile:e,entity:r.filter((t=>t.unique_id===`${e.unique_id_prefix}${o}`))}))).flatMap((e=>e.entity.map((t=>this.mapToTile(t,e.tile.label,e.tile.unit,e.tile.multiplier,n))))).forEach((e=>i.push(e))),new Promise((e=>e(i)))}static mapToTile(e,t,a,i,n){var r;return{entity:e.entity_id,label:Zi(t,n),icon:null!==(r=e.icon)&&void 0!==r?r:e.original_icon,multiplier:i||void 0,precision:i?1:void 0,unit:a?Zi(a,n):void 0}}static generateTranslationKeys(e,t,a){const i={};return e.forEach((e=>{const n=Zi(`tile.${t}.value.${e}`,a,"");n&&(i[e]=n)})),i}}class Ar{static generate(e,t,a){var i;if(!e)return[];const n=e.states[t],r=n&&n.attributes,o=[];this.isFeatureSupported(n,8192)&&o.push({icon:"mdi:play",conditions:[{entity:t,value_not:"cleaning"},{entity:t,value_not:"error"},{entity:t,value_not:"returning"}],tooltip:Zi("icon.vacuum_start",a),tap_action:{action:"call-service",service:"vacuum.start",service_data:{entity_id:t}}}),this.isFeatureSupported(n,4)&&o.push({icon:"mdi:pause",conditions:[{entity:t,value_not:"docked"},{entity:t,value_not:"idle"},{entity:t,value_not:"error"},{entity:t,value_not:"paused"}],tooltip:Zi("icon.vacuum_pause",a),tap_action:{action:"call-service",service:"vacuum.pause",service_data:{entity_id:t}}}),this.isFeatureSupported(n,8)&&o.push({icon:"mdi:stop",conditions:[{entity:t,value_not:"docked"},{entity:t,value_not:"idle"},{entity:t,value_not:"error"},{entity:t,value_not:"paused"}],tooltip:Zi("icon.vacuum_stop",a),tap_action:{action:"call-service",service:"vacuum.stop",service_data:{entity_id:t}}}),this.isFeatureSupported(n,16)&&o.push({icon:"mdi:home-map-marker",conditions:[{entity:t,value_not:"docked"},{entity:t,value_not:"returning"}],tooltip:Zi("icon.vacuum_return_to_base",a),tap_action:{action:"call-service",service:"vacuum.return_to_base",service_data:{entity_id:t}}}),this.isFeatureSupported(n,1024)&&o.push({icon:"mdi:target-variant",conditions:[{entity:t,value_not:"docked"},{entity:t,value_not:"error"},{entity:t,value_not:"cleaning"},{entity:t,value_not:"returning"}],tooltip:Zi("icon.vacuum_clean_spot",a),tap_action:{action:"call-service",service:"vacuum.clean_spot",service_data:{entity_id:t}}}),this.isFeatureSupported(n,512)&&o.push({icon:"mdi:map-marker",tooltip:Zi("icon.vacuum_locate",a),tap_action:{action:"call-service",service:"vacuum.locate",service_data:{entity_id:t}}});const l=r&&null!==(i=n.attributes.fan_speed_list)&&void 0!==i?i:[];for(let e=0;e<l.length;e++){const i=l[e],n=l[(e+1)%l.length];o.push({icon:i in this._ICON_MAPPING?this._ICON_MAPPING[i]:"mdi:fan-alert",conditions:[{entity:t,attribute:"fan_speed",value:i}],tooltip:Zi("icon.vacuum_set_fan_speed",a),tap_action:{action:"call-service",service:"vacuum.set_fan_speed",service_data:{entity_id:t,fan_speed:n}}})}return 0!=l.length&&o.push({icon:"mdi:fan-alert",conditions:l.map((e=>({entity:t,attribute:"fan_speed",value_not:e}))),tooltip:Zi("icon.vacuum_set_fan_speed",a),tap_action:{action:"call-service",service:"vacuum.set_fan_speed",service_data:{entity_id:t,fan_speed:l[0]}}}),o}static isFeatureSupported(e,t){var a;return e&&e.attributes&&((null!==(a=e.attributes.supported_features)&&void 0!==a?a:0)&t)===t}}Ar._ICON_MAPPING={Silent:"mdi:fan-remove",Standard:"mdi:fan-speed-1",Medium:"mdi:fan-speed-2",Turbo:"mdi:fan-speed-3",Auto:"mdi:fan-auto",Gentle:"mdi:waves"};class xr{static render(e,t){var a,i,n,r;let o=e.attribute?t.hass.states[e.entity].attributes[e.attribute]:t.hass.states[e.entity].state;"number"!=typeof o&&isNaN(+o)||(o=parseFloat(o.toString())*(null!==(a=e.multiplier)&&void 0!==a?a:1),null!=e.precision&&(o=o.toFixed(e.precision)));const l=null!==(i=e.translations)&&void 0!==i?i:{};return o in l&&(o=l[o]),N`
            <div
                class="tile-wrapper clickable ripple"
                .title=${null!==(n=e.tooltip)&&void 0!==n?n:""}
                @action=${Yn(t,e)}
                .actionHandler=${$n({hasHold:me(null==e?void 0:e.hold_action),hasDoubleClick:me(null==e?void 0:e.double_tap_action)})}>
                <div class="tile-title">${e.label}</div>
                <div class="tile-value-wrapper">
                    ${Bn(!!e.icon,(()=>N` <div class="tile-icon">
                            <ha-icon icon="${e.icon}"></ha-icon>
                        </div>`))}
                    <div class="tile-value">${o}${null!==(r=e.unit)&&void 0!==r?r:""}</div>
                </div>
            </div>
        `}static get styles(){return r`
            .tile-wrapper {
                min-width: fit-content;
                width: 80px;
                padding: 10px;
                border-radius: var(--map-card-internal-small-radius);
                background-color: var(--map-card-internal-tertiary-color);
                flex-grow: 1;
                overflow: hidden;
                color: var(--map-card-internal-tertiary-text-color);
            }

            .tile-title {
                font-size: smaller;
            }

            .tile-value-wrapper {
                display: inline-flex;
                align-items: flex-end;
                padding-top: 5px;
            }

            .tile-icon {
                padding-right: 5px;
            }

            .tile-value {
            }
        `}}class zr{static render(e,t){var a;return N`
            <paper-button
                class="vacuum-actions-item clickable ripple"
                .title=${null!==(a=e.tooltip)&&void 0!==a?a:""}
                @action=${Yn(t,e)}
                .actionHandler=${$n({hasHold:me(null==e?void 0:e.hold_action),hasDoubleClick:me(null==e?void 0:e.double_tap_action)})}>
                <ha-icon icon="${e.icon}"></ha-icon>
            </paper-button>
        `}static get styles(){return r`
            .vacuum-actions-item {
                float: left;
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
            }
        `}}class Er{static render(){return N`
            <div id="toast">
                <div id="toast-icon">
                    <ha-icon icon="mdi:check" style="vertical-align: center"></ha-icon>
                </div>
                <div id="toast-text">Success!</div>
            </div>
        `}static get styles(){return r`
            #toast {
                visibility: hidden;
                display: inline-flex;
                width: calc(100% - 60px);
                min-height: 50px;
                color: var(--primary-text-color);
                text-align: center;
                border-radius: var(--map-card-internal-small-radius);
                padding-inline-start: 30px;
                position: absolute;
                z-index: 1;
                bottom: 30px;
                font-size: 17px;
            }

            #toast #toast-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                background-color: var(--map-card-internal-primary-color);
                border-start-start-radius: var(--map-card-internal-small-radius);
                border-end-start-radius: var(--map-card-internal-small-radius);
                color: #0f0;
            }

            #toast #toast-text {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                padding-left: 10px;
                padding-right: 10px;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                background-color: var(--paper-listbox-background-color);
                color: var(--primary-text-color);
                vertical-align: middle;
                overflow: hidden;
                border-color: var(--map-card-internal-primary-color);
                border-style: solid;
                border-width: 1px;
                border-start-end-radius: var(--map-card-internal-small-radius);
                border-end-end-radius: var(--map-card-internal-small-radius);
            }

            #toast.show {
                visibility: visible;
                -webkit-animation: fadein 0.5s, stay 1s 1s, fadeout 0.5s 1.5s;
                animation: fadein 0.5s, stay 1s 1s, fadeout 0.5s 1.5s;
            }

            @-webkit-keyframes fadein {
                from {
                    bottom: 0;
                    opacity: 0;
                }
                to {
                    bottom: 30px;
                    opacity: 1;
                }
            }
            @keyframes fadein {
                from {
                    bottom: 0;
                    opacity: 0;
                }
                to {
                    bottom: 30px;
                    opacity: 1;
                }
            }
            @-webkit-keyframes stay {
            }
            @keyframes stay {
            }
            @-webkit-keyframes fadeout {
                from {
                    bottom: 30px;
                    opacity: 1;
                }
                to {
                    bottom: 60px;
                    opacity: 0;
                }
            }
            @keyframes fadeout {
                from {
                    bottom: 30px;
                    opacity: 1;
                }
                to {
                    bottom: 60px;
                    opacity: 0;
                }
            }
        `}}class wr{static render(e,t,a){const i=()=>e[t];return N`
            <ha-button-menu class="modes-dropdown-menu">
                <div class="modes-dropdown-menu-button" slot="trigger" alt="bottom align">
                    <paper-button class="modes-dropdown-menu-button-button">
                        <ha-icon icon="${i().icon}" class="dropdown-icon"></ha-icon>
                    </paper-button>
                    <div class="modes-dropdown-menu-button-text">${i().name}</div>
                </div>
                ${e.map(((i,n)=>N`<mwc-list-item
                        ?activated=${t===n}
                        @click=${()=>a(n)}>
                            <div class="modes-dropdown-menu-entry clickable ${t===n?"selected":""}">
                                <div
                                    class="modes-dropdown-menu-entry-button-wrapper ${0===n?"first":""} ${n===e.length-1?"last":""} ${t===n?"selected":""}">
                                    <paper-button
                                        class="modes-dropdown-menu-entry-button ${t===n?"selected":""}">
                                        <ha-icon icon="${i.icon}"></ha-icon>
                                    </paper-button>
                                </div>
                                <div class="modes-dropdown-menu-entry-text">${i.name}</div>
                            </div>
                    </mwc-list-item>`))}
            </ha-button-menu>
        `}static get styles(){return r`
            .modes-dropdown-menu {
                --mdc-menu-item-height: 50px;
                --mdc-theme-primary: transparent;
                --mdc-list-vertical-padding: 0px;
                --mdc-list-side-padding: 0px;
                --mdc-shape-medium: var(--map-card-internal-big-radius);
                --mdc-ripple-color: transparent;
            }

            .modes-dropdown-menu-button {
                display: inline-flex;
            }

            .modes-dropdown-menu-button-button {
                width: 50px;
                height: 50px;
                border-radius: var(--map-card-internal-big-radius);
                display: flex;
                justify-content: center;
                background-color: var(--map-card-internal-primary-color);
                align-items: center;
            }

            .modes-dropdown-menu-button-text {
                display: inline-flex;
                line-height: 50px;
                background-color: transparent;
                padding-left: 10px;
                padding-right: 15px;
            }

            .modes-dropdown-menu-entry {
                display: inline-flex;
                width: 100%;
            }

            .modes-dropdown-menu-entry.selected {
                border-radius: var(--map-card-internal-big-radius);
                background-color: var(--map-card-internal-primary-color);
                color: var(--map-card-internal-primary-text-color);
            }

            .modes-dropdown-menu-entry-button-wrapper.first:not(.selected) {
                border-top-left-radius: var(--map-card-internal-big-radius);
                border-top-right-radius: var(--map-card-internal-big-radius);
            }

            .modes-dropdown-menu-entry-button-wrapper.last:not(.selected) {
                border-bottom-left-radius: var(--map-card-internal-big-radius);
                border-bottom-right-radius: var(--map-card-internal-big-radius);
            }

            .modes-dropdown-menu-entry-button.selected {
                border-start-start-radius: var(--map-card-internal-big-radius);
                border-end-start-radius: var(--map-card-internal-big-radius);
                background-color: var(--map-card-internal-primary-color);
                color: var(--map-card-internal-primary-text-color);
            }

            .modes-dropdown-menu-entry-button-wrapper {
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
                overflow: hidden;
            }

            .modes-dropdown-menu-entry-button {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
            }

            .modes-dropdown-menu-entry-text {
                display: inline-flex;
                line-height: 50px;
                background-color: transparent;
                padding-left: 10px;
                padding-right: 15px;
            }

            .modes-dropdown-menu-listbox {
                padding: 0;
                background-color: transparent;
            }
        `}}function Sr(e,t){return Array.isArray(t)?[e.a*t[0]+e.c*t[1]+e.e,e.b*t[0]+e.d*t[1]+e.f]:{x:e.a*t.x+e.c*t.y+e.e,y:e.b*t.x+e.d*t.y+e.f}}function Pr(...e){const t=(e,t)=>({a:e.a*t.a+e.c*t.b,c:e.a*t.c+e.c*t.d,e:e.a*t.e+e.c*t.f+e.e,b:e.b*t.a+e.d*t.b,d:e.b*t.c+e.d*t.d,f:e.b*t.e+e.d*t.f+e.f});switch((e=Array.isArray(e[0])?e[0]:e).length){case 0:throw new Error("no matrices provided");case 1:return e[0];case 2:return t(e[0],e[1]);default:{const[a,i,...n]=e;return Pr(t(a,i),...n)}}}function Mr(e,t){const a=null!=e[0].x?e[0].x:e[0][0],i=null!=e[0].y?e[0].y:e[0][1],n=null!=t[0].x?t[0].x:t[0][0],r=null!=t[0].y?t[0].y:t[0][1],o=null!=e[1].x?e[1].x:e[1][0],l=null!=e[1].y?e[1].y:e[1][1],s=null!=t[1].x?t[1].x:t[1][0],c=null!=t[1].y?t[1].y:t[1][1],d=null!=e[2].x?e[2].x:e[2][0],u=null!=e[2].y?e[2].y:e[2][1],m=null!=t[2].x?t[2].x:t[2][0],p=null!=t[2].y?t[2].y:t[2][1],_={a:n-m,b:r-p,c:s-m,d:c-p,e:m,f:p},g=function(e){const{a:t,b:a,c:i,d:n,e:r,f:o}=e,l=t*n-a*i;return{a:n/l,b:a/-l,c:i/-l,d:t/l,e:(n*r-i*o)/-l,f:(a*r-t*o)/l}}({a:a-d,b:i-u,c:o-d,d:l-u,e:d,f:u});return function(e,t=1e10){return{a:Math.round(e.a*t)/t,b:Math.round(e.b*t)/t,c:Math.round(e.c*t)/t,d:Math.round(e.d*t)/t,e:Math.round(e.e*t)/t,f:Math.round(e.f*t)/t}}(Pr([_,g]))}function Cr(e,t,a,i){this.message=e,this.expected=t,this.found=a,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,Cr)}!function(e,t){function a(){this.constructor=e}a.prototype=t.prototype,e.prototype=new a}(Cr,Error),Cr.buildMessage=function(e,t,a){var i={literal:function(e){return'"'+r(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?o(e[0])+"-"+o(e[1]):o(e)}));return"["+(e.inverted?"^":"")+t+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description},not:function(e){return"not "+l(e.expected)}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function r(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function l(e){return i[e.type](e)}return"Expected "+function(e){var t,a,i=e.map(l);if(i.sort(),i.length>0){for(t=1,a=1;t<i.length;t++)i[t-1]!==i[t]&&(i[a]=i[t],a++);i.length=a}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+function(e){return e?'"'+r(e)+'"':"end of input"}(t)+" found."};var Tr,$r,Nr,Rr=(Tr=function(e,t){function a(e){var t;return"object"==typeof e?"object"==typeof(t=e[0])?[e.length,t.length]:[e.length]:[]}function i(e,t,a,n){if(a===t.length-1)return n(e);var r,o=t[a],l=Array(o);for(r=o-1;r>=0;r--)l[r]=i(e[r],t,a+1,n);return l}function n(e){var t,a=e.length,i=Array(a);for(t=a-1;-1!==t;--t)i[t]=e[t];return i}function r(e){if("object"!=typeof e)return e;var t=n;return i(e,a(e),0,t)}function o(e,t,a){void 0===a&&(a=0);var i,n=e[a],r=Array(n);if(a===e.length-1){for(i=n-2;i>=0;i-=2)r[i+1]=t,r[i]=t;return-1===i&&(r[0]=t),r}for(i=n-1;i>=0;i--)r[i]=o(e,t,a+1);return r}function l(e){return function(e){var t,a,i,n,r=e.length,o=Array(r);for(t=r-1;t>=0;t--){for(n=Array(r),a=t+2,i=r-1;i>=a;i-=2)n[i]=0,n[i-1]=0;for(i>t&&(n[i]=0),n[t]=e[t],i=t-1;i>=1;i-=2)n[i]=0,n[i-1]=0;0===i&&(n[0]=0),o[t]=n}return o}(o([e],1))}function s(e,t){var a,i,n,r,o,l,s,c,d,u,m;for(r=e.length,o=t.length,l=t[0].length,s=Array(r),a=r-1;a>=0;a--){for(c=Array(l),d=e[a],n=l-1;n>=0;n--){for(u=d[o-1]*t[o-1][n],i=o-2;i>=1;i-=2)m=i-1,u+=d[i]*t[i][n]+d[m]*t[m][n];0===i&&(u+=d[0]*t[0][n]),c[n]=u}s[a]=c}return s}function c(e,t){var a,i,n=e.length,r=e[n-1]*t[n-1];for(a=n-2;a>=1;a-=2)i=a-1,r+=e[a]*t[a]+e[i]*t[i];return 0===a&&(r+=e[0]*t[0]),r}function d(e){var t,a,i,n,r,o=e.length,l=e[0].length,s=Array(l);for(a=0;a<l;a++)s[a]=Array(o);for(t=o-1;t>=1;t-=2){for(n=e[t],i=e[t-1],a=l-1;a>=1;--a)(r=s[a])[t]=n[a],r[t-1]=i[a],(r=s[--a])[t]=n[a],r[t-1]=i[a];0===a&&((r=s[0])[t]=n[0],r[t-1]=i[0])}if(0===t){for(i=e[0],a=l-1;a>=1;--a)s[a][0]=i[a],s[--a][0]=i[a];0===a&&(s[0][0]=i[0])}return s}function u(e,t,i){if(i){var n=t;t=e,e=n}var o,u=[[e[0],e[1],1,0,0,0,-1*t[0]*e[0],-1*t[0]*e[1]],[0,0,0,e[0],e[1],1,-1*t[1]*e[0],-1*t[1]*e[1]],[e[2],e[3],1,0,0,0,-1*t[2]*e[2],-1*t[2]*e[3]],[0,0,0,e[2],e[3],1,-1*t[3]*e[2],-1*t[3]*e[3]],[e[4],e[5],1,0,0,0,-1*t[4]*e[4],-1*t[4]*e[5]],[0,0,0,e[4],e[5],1,-1*t[5]*e[4],-1*t[5]*e[5]],[e[6],e[7],1,0,0,0,-1*t[6]*e[6],-1*t[6]*e[7]],[0,0,0,e[6],e[7],1,-1*t[7]*e[6],-1*t[7]*e[7]]],m=t;try{o=function(e){var t,i,n,o,s,c,d,u,m=a(e),p=Math.abs,_=m[0],g=m[1],v=r(e),h=l(_);for(c=0;c<g;++c){var f=-1,b=-1;for(s=c;s!==_;++s)(d=p(v[s][c]))>b&&(f=s,b=d);for(i=v[f],v[f]=v[c],v[c]=i,o=h[f],h[f]=h[c],h[c]=o,u=i[c],d=c;d!==g;++d)i[d]/=u;for(d=g-1;-1!==d;--d)o[d]/=u;for(s=_-1;-1!==s;--s)if(s!==c){for(t=v[s],n=h[s],u=t[c],d=c+1;d!==g;++d)t[d]-=i[d]*u;for(d=g-1;d>0;--d)n[d]-=o[d]*u,n[--d]-=o[d]*u;0===d&&(n[0]-=o[0]*u)}}return h}(s(d(u),u))}catch(e){return[1,0,0,0,1,0,0,0]}for(var p,_=function(e,t){var a,i=e.length,n=Array(i);for(a=i-1;a>=0;a--)n[a]=c(e[a],t);return n}(s(o,d(u)),m),g=0;g<_.length;g++)_[g]=(p=_[g],Math.round(1e10*p)/1e10);return _[8]=1,_}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=u(e,t,!1);return function(e,t){return function(e,t,a){var i=[];return i[0]=(e[0]*t+e[1]*a+e[2])/(e[6]*t+e[7]*a+1),i[1]=(e[3]*t+e[4]*a+e[5])/(e[6]*t+e[7]*a+1),i}(a,e,t)}}},Tr($r={exports:{}},$r.exports),$r.exports),jr=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(Rr);!function(e){e[e.AFFINE=0]="AFFINE",e[e.PERSPECTIVE=1]="PERSPECTIVE"}(Nr||(Nr={}));class Or{constructor(e){const t=null==e?void 0:e.map((e=>e.map)),a=null==e?void 0:e.map((e=>e.vacuum));if(t&&a)if(3===t.length)this.transformMode=Nr.AFFINE,this.mapToVacuumMatrix=Mr(t,a),this.vacuumToMapMatrix=Mr(a,t),this.calibrated=!(!this.mapToVacuumMatrix||!this.vacuumToMapMatrix);else{this.transformMode=Nr.PERSPECTIVE;const e=t.flatMap((e=>[e.x,e.y])),i=a.flatMap((e=>[e.x,e.y]));this.mapToVacuumTransformer=jr(e,i),this.vacuumToMapTransformer=jr(i,e),this.calibrated=!0}else this.calibrated=!1}mapToVacuum(e,t){if(this.transformMode===Nr.AFFINE&&this.mapToVacuumMatrix)return Sr(this.mapToVacuumMatrix,[e,t]);if(this.transformMode===Nr.PERSPECTIVE&&this.mapToVacuumTransformer)return this.mapToVacuumTransformer(e,t);throw Error("Missing calibration")}vacuumToMap(e,t){if(this.transformMode===Nr.AFFINE&&this.vacuumToMapMatrix)return Sr(this.vacuumToMapMatrix,[e,t]);if(this.transformMode===Nr.PERSPECTIVE&&this.vacuumToMapTransformer)return this.vacuumToMapTransformer(e,t);throw Error("Missing calibration")}}const Lr="   XIAOMI-VACUUM-MAP-CARD",Ir=`   ${Zi("common.version")} v2.0.11`,Dr=Math.max(Lr.length,Ir.length)+3,Ur=(e,t)=>e+" ".repeat(t-e.length);console.info(`%c${Ur(Lr,Dr)}\n%c${Ur(Ir,Dr)}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const Fr=window;Fr.customCards=Fr.customCards||[],Fr.customCards.push({type:"xiaomi-vacuum-map-card",name:"Xiaomi Vacuum Map Card",description:Zi("common.description"),preview:!0});let Vr=class extends Q{constructor(){super(...arguments),this.oldConfig=!1,this.repeats=1,this.selectedMode=0,this.mapLocked=!1,this.configErrors=[],this.connected=!1,this.watchedEntities=[],this.selectedManualRectangles=[],this.selectedManualPath=new pr([],this._getContext()),this.selectedPredefinedRectangles=[],this.selectedRooms=[],this.selectedPredefinedPoint=[],this.selectablePredefinedRectangles=[],this.selectableRooms=[],this.selectablePredefinedPoints=[],this.modes=[]}static async getConfigElement(){return document.createElement("xiaomi-vacuum-map-card-editor")}static getStubConfig(e){const t=Object.keys(e.states),a=t.filter((e=>"camera"===e.substr(0,e.indexOf(".")))).filter((t=>null==e?void 0:e.states[t].attributes.calibration_points)),i=t.filter((e=>"vacuum"===e.substr(0,e.indexOf("."))));if(0!==a.length&&0!==i.length)return{type:"custom:xiaomi-vacuum-map-card",map_source:{camera:a[0]},calibration_source:{camera:!0},entity:i[0],vacuum_platform:"default"}}set hass(e){const t=!this._hass&&e;this._hass=e,this.lastHassUpdate=new Date,t&&this._firstHass()}get hass(){return this._hass}setConfig(e){if(!e)throw new Error(this._localize("common.invalid_configuration"));this.config=e,function(e){return e.map_image||e.map_camera}(e)?this.oldConfig=!0:(this.configErrors=function(e){var t,a,i;const n=[],r=(null!==(a=null===(t=e.additional_presets)||void 0===t?void 0:t.length)&&void 0!==a?a:0)>0;return yr(e,r,e.language).forEach((e=>n.push(e))),null===(i=e.additional_presets)||void 0===i||i.flatMap((t=>yr(t,r,e.language))).forEach((e=>n.push(e))),n.map((t=>Zi(t,e.language)))}(this.config),this.configErrors.length>0||(this.watchedEntities=function(e){var t;const a=new Set;return[e,...null!==(t=e.additional_presets)&&void 0!==t?t:[]].flatMap((t=>[...Kn(t,e.language)])).forEach((e=>a.add(e))),[...a]}(this.config),this._setPresetIndex(0,!1,!0),this.requestUpdate("config")))}getCardSize(){return 12}_getCurrentPreset(){return this.currentPreset}_getCalibration(e){var t,a,i,n,r,o,l;return e.calibration_source.identity?[{map:{x:0,y:0},vacuum:{x:0,y:0}},{map:{x:1,y:0},vacuum:{x:1,y:0}},{map:{x:0,y:1},vacuum:{x:0,y:1}}]:e.calibration_source.calibration_points&&[3,4].includes(e.calibration_source.calibration_points.length)?e.calibration_source.calibration_points:this.hass?e.calibration_source.entity&&!(null===(t=e.calibration_source)||void 0===t?void 0:t.attribute)?JSON.parse(null===(a=this.hass.states[e.calibration_source.entity])||void 0===a?void 0:a.state):e.calibration_source.entity&&(null===(i=e.calibration_source)||void 0===i?void 0:i.attribute)?null===(n=this.hass.states[e.calibration_source.entity])||void 0===n?void 0:n.attributes[e.calibration_source.attribute]:e.calibration_source.camera?null===(l=this.hass.states[null!==(o=null===(r=e.map_source)||void 0===r?void 0:r.camera)&&void 0!==o?o:""])||void 0===l?void 0:l.attributes.calibration_points:void 0:void 0}_firstHass(){if(0===this.configErrors.length&&!this.oldConfig){const e=this._getAllPresets(),t=this._getAllAvailablePresets(),a=e.indexOf(t[0]);this._setPresetIndex(a,!1,!0)}}_getAllPresets(){var e;return[this.config,...null!==(e=this.config.additional_presets)&&void 0!==e?e:[]]}_getAllAvailablePresets(){const e=this._getAllPresets(),t=e.filter((e=>{var t,a;return 0===(null!==(a=null===(t=e.conditions)||void 0===t?void 0:t.length)&&void 0!==a?a:0)||qn(e,this.hass)}));return 0===t.length?[e[0]]:t}_getPreviousPresetIndex(){const e=this._getAllPresets(),t=e.filter(((e,t)=>{var a,i;return t<this.presetIndex&&(0===(null!==(i=null===(a=e.conditions)||void 0===a?void 0:a.length)&&void 0!==i?i:0)||qn(e,this.hass))}));return 0==t.length?-1:e.indexOf(t[t.length-1])}_getNextPresetIndex(){const e=this._getAllPresets(),t=e.filter(((e,t)=>{var a,i;return t>this.presetIndex&&(0===(null!==(i=null===(a=e.conditions)||void 0===a?void 0:a.length)&&void 0!==i?i:0)||qn(e,this.hass))}));return 0==t.length?-1:e.indexOf(t[0])}_openPreviousPreset(){const e=this._getPreviousPresetIndex();e>=0&&this._setPresetIndex(e,!0)}_openNextPreset(){const e=this._getNextPresetIndex();e>=0&&this._setPresetIndex(e,!0)}_setPresetIndex(e,t=!1,a=!1){var i,n,r,o,l,s,c,d,u,m,p,_,g,v;if((e=Math.min(Math.max(e,0),null!==(n=null===(i=this.config.additional_presets)||void 0===i?void 0:i.length)&&void 0!==n?n:0))===this.presetIndex&&!a)return;const h=0===e?this.config:(null!==(r=this.config.additional_presets)&&void 0!==r?r:[])[e-1];this.mapLocked||null===(o=this._getPinchZoom())||void 0===o||o.setTransform({scale:1,x:0,y:0,allowChangeEvent:!0}),t&&de("selection"),this.mapLocked=null!==(l=null==h?void 0:h.map_locked)&&void 0!==l&&l,this.selectedMode=0,this.realScale=1,this.mapScale=1,this.mapX=0,this.mapY=0,this.hass&&this._updateCalibration(h);const f=null!==(s=h.vacuum_platform)&&void 0!==s?s:"default";this.modes=(0===(null!==(d=null===(c=h.map_modes)||void 0===c?void 0:c.length)&&void 0!==d?d:0)?wn.generateDefaultModes(f):null!==(u=h.map_modes)&&void 0!==u?u:[]).map((e=>new Hn(f,e,this.config.language))),this.presetIndex=e,this.currentPreset=h;const b=-1===(null!==(p=null===(m=h.icons)||void 0===m?void 0:m.length)&&void 0!==p?p:-1)?Ar.generate(this.hass,h.entity,this.config.language):h.append_icons?[...Ar.generate(this.hass,h.entity,this.config.language),...null!==(_=h.icons)&&void 0!==_?_:[]]:h.icons,y=-1===(null!==(v=null===(g=h.tiles)||void 0===g?void 0:g.length)&&void 0!==v?v:-1)?kr.generate(this.hass,h.entity,f,this.config.language):h.append_tiles?kr.generate(this.hass,h.entity,f,this.config.language).then((e=>{var t;return[...e,...null!==(t=h.tiles)&&void 0!==t?t:[]]})):new Promise((e=>{var t;return e(null!==(t=h.tiles)&&void 0!==t?t:[])}));y.then((e=>this._setPreset(Object.assign(Object.assign({},h),{tiles:e,icons:b})))).then((()=>setTimeout((()=>this.requestUpdate()),100))).then((()=>this._setCurrentMode(0,!1))),t&&this.currentPreset.activate_on_switch&&this._executePresetsActivation()}_executePresetsActivation(){if(this.currentPreset.activate){const e=new Vn(this.currentPreset.activate).apply(this.currentPreset.entity,[],0,{});this.hass.callService(e.domain,e.service,e.serviceData,e.target).then((()=>de("success")))}}_setPreset(e){this.currentPreset=e}_updateCalibration(e){this.coordinatesConverter=void 0;const t=this._getCalibration(e);this.coordinatesConverter=new Or(t)}_getMapSrc(e){if(e.map_source.camera){if(this.connected&&this.lastHassUpdate&&this.lastHassUpdate.getTime()+36e4>=(new Date).getTime()){return`${this.hass.hassUrl(this.hass.states[e.map_source.camera].attributes.entity_picture)}&v=${+new Date}`}return Sn}return e.map_source.image?`${e.map_source.image}`:Sn}shouldUpdate(e){return!!this.config&&function(e,t,a,i){if(t.has("config")||a)return!0;const n=t.get("hass");return!n||e.some((e=>n.states[e]!==(null==i?void 0:i.states[e])))}(this.watchedEntities,e,!1,this.hass)}render(){var e,t,a,i,n,r,o,l,s,c,d,u;if(this.oldConfig)return this._showOldConfig();if(this.configErrors.length>0)return this._showConfigErrors(this.configErrors);const m=function(e,t){const a=Object.keys(t.states);return e.filter((e=>!a.includes(e)))}(this.watchedEntities,this.hass);if(m.length>0)return this._showInvalidEntities(m);const p="rtl"===(null===(e=getComputedStyle(this))||void 0===e?void 0:e.getPropertyValue("direction"));let _=this._getCurrentPreset();const g=this._getAllPresets();let v=this._getAllAvailablePresets(),h=v.indexOf(g[this.presetIndex]);-1===h&&(this._firstHass(),_=this._getCurrentPreset(),v=this._getAllAvailablePresets(),h=v.indexOf(g[this.presetIndex])),this._updateCalibration(_);const f=_.tiles,b=_.icons,y=this.modes,k=this._getMapSrc(_),A=!!this.coordinatesConverter&&this.coordinatesConverter.calibrated,x=A?this._createMapControls():[],z=N`
            <div
                id="map-zoomer-content"
                style="
                 margin-top: ${-1*(null!==(a=null===(t=_.map_source.crop)||void 0===t?void 0:t.top)&&void 0!==a?a:0)}px;
                 margin-bottom: ${-1*(null!==(n=null===(i=_.map_source.crop)||void 0===i?void 0:i.bottom)&&void 0!==n?n:0)}px;
                 margin-left: ${-1*(null!==(o=null===(r=_.map_source.crop)||void 0===r?void 0:r.left)&&void 0!==o?o:0)}px;
                 margin-right: ${-1*(null!==(s=null===(l=_.map_source.crop)||void 0===l?void 0:l.right)&&void 0!==s?s:0)}px;">
                <img
                    id="map-image"
                    alt="camera_image"
                    class="${this.mapScale*this.realScale>1?"zoomed":""}"
                    src="${k}"
                    @load="${()=>this._calculateBasicScale()}" />
                <div id="map-image-overlay">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="2.0"
                        id="svg-wrapper"
                        width="100%"
                        height="100%"
                        @mousedown="${e=>this._mouseDown(e)}"
                        @mousemove="${e=>this._mouseMove(e)}"
                        @mouseup="${e=>this._mouseUp(e)}">
                        ${A?this._drawSelection():null}
                    </svg>
                </div>
            </div>
        `;return N`
            <ha-card style="--map-scale: ${this.mapScale}; --real-scale: ${this.realScale};">
                ${Bn((null!==(c=this.config.title)&&void 0!==c?c:"").length>0,(()=>N`<h1 class="card-header">${this.config.title}</h1>`))}
                ${Bn(v.length>1,(()=>N`
                        <div class="preset-selector-wrapper">
                            <div
                                class="preset-selector-icon-wrapper"
                                @click="${()=>this._openPreviousPreset()}">
                                <ha-icon
                                    icon="mdi:chevron-${p?"right":"left"}"
                                    class="preset-selector-icon ${-1===this._getPreviousPresetIndex()?"disabled":""}">
                                </ha-icon>
                            </div>
                            <div
                                class="preset-label-wrapper ${_.activate?"clickable":""}"
                                @click="${()=>this._executePresetsActivation()}">
                                <div class="preset-label">${_.preset_name}</div>
                                <div class="preset-indicator">
                                    ${new Array(v.length).fill(0).map(((e,t)=>t===h?"???":"???"))}
                                </div>
                            </div>
                            <div class="preset-selector-icon-wrapper" @click="${()=>this._openNextPreset()}">
                                <ha-icon
                                    icon="mdi:chevron-${p?"left":"right"}"
                                    class="preset-selector-icon ${-1===this._getNextPresetIndex()?"disabled":""}">
                                </ha-icon>
                            </div>
                        </div>
                    `))}
                <div class="map-wrapper">
                    <pinch-zoom
                        min-scale="0.5"
                        id="map-zoomer"
                        @change="${this._calculateScale}"
                        two-finger-pan="${_.two_finger_pan}"
                        locked="${this.mapLocked}"
                        style="touch-action: none;">
                        ${z}
                    </pinch-zoom>
                    <div id="map-zoomer-overlay">
                        <div style="right: 0; top: 0; position: absolute;">
                            <ha-icon
                                icon="${this.mapLocked?"mdi:lock":"mdi:lock-open"}"
                                class="standalone-icon-on-map clickable ripple"
                                @click="${this._toggleLock}"></ha-icon>
                        </div>
                        <div class="map-zoom-icons" style="visibility: ${this.mapLocked?"hidden":"visible"}">
                            <ha-icon
                                icon="mdi:restore"
                                class="icon-on-map clickable ripple"
                                @click="${this._restoreMap}"></ha-icon>
                            <div class="map-zoom-icons-main">
                                <ha-icon
                                    icon="mdi:magnify-minus"
                                    class="icon-on-map clickable ripple"
                                    @click="${this._zoomOut}"></ha-icon>
                                <ha-icon
                                    icon="mdi:magnify-plus"
                                    class="icon-on-map clickable ripple"
                                    @click="${this._zoomIn}"></ha-icon>
                            </div>
                        </div>
                    </div>
                </div>
                ${Bn(!A,(()=>this._showInvalidCalibrationWarning()))}
                <div class="controls-wrapper">
                    ${Bn(A&&(y.length>1||x.length>0),(()=>N`
                            <div class="map-controls-wrapper">
                                <div class="map-controls">
                                    ${Bn(y.length>1,(()=>wr.render(y,this.selectedMode,(e=>this._setCurrentMode(e)))))}
                                    ${Bn(x.length>0,(()=>N` <div class="map-actions-list">${x}</div> `))}
                                </div>
                            </div>
                        `))}
                    ${Bn(0!==(null!==(d=null==b?void 0:b.length)&&void 0!==d?d:0),(()=>N`
                            <div class="vacuum-controls">
                                <div class="vacuum-actions-list">
                                    ${null==b?void 0:b.filter((e=>qn(e,this.hass))).map((e=>zr.render(e,this)))}
                                </div>
                            </div>
                        `))}
                    ${Bn(0!==(null!==(u=null==f?void 0:f.length)&&void 0!==u?u:0),(()=>N`
                            <div class="tiles-wrapper">
                                ${null==f?void 0:f.filter((e=>qn(e,this.hass))).map((e=>xr.render(e,this)))}
                            </div>
                        `))}
                </div>
                ${Er.render()}
            </ha-card>
        `}_createMapControls(){const e=[],t=this._getCurrentMode();return t?(t.selectionType===Ln.MANUAL_RECTANGLE&&e.push(N`
                <paper-button class="map-actions-item clickable ripple" @click="${()=>this._addRectangle()}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                </paper-button>
            `),t.selectionType===Ln.MANUAL_PATH&&e.push(N`
                <paper-button
                    class="map-actions-item clickable ripple"
                    @click="${()=>{this.selectedManualPath.removeLast(),de("selection"),this.requestUpdate()}}">
                    <ha-icon icon="mdi:undo-variant"></ha-icon>
                </paper-button>
                <paper-button
                    class="map-actions-item clickable ripple"
                    @click="${()=>{this.selectedManualPath.clear(),de("selection"),this.requestUpdate()}}">
                    <ha-icon icon="mdi:delete-empty"></ha-icon>
                </paper-button>
            `),t.repeatsType!==In.NONE&&e.push(N`
                <paper-button
                    class="map-actions-item clickable ripple"
                    @click="${()=>{this.repeats=this.repeats%t.maxRepeats+1,de("selection")}}">
                    <div>??${this.repeats}</div>
                </paper-button>
            `),t.runImmediately||e.push(N`
                <paper-button
                    class="map-actions-item main clickable ripple"
                    @action="${this._handleRunAction()}"
                    .actionHandler="${$n({hasHold:!0,hasDoubleClick:!0})}">
                    <ha-icon icon="mdi:play"></ha-icon>
                    <ha-icon
                        icon="${t.icon}"
                        style="position: absolute; transform: scale(0.5) translate(15px, -20px)"></ha-icon>
                </paper-button>
            `),e):[]}_getContext(){return new cr((()=>this.mapScale),(()=>this.realScale),(e=>this._getMousePosition(e)),(()=>this.requestUpdate()),(()=>this.coordinatesConverter),(()=>this.selectedManualRectangles),(()=>this.selectedPredefinedRectangles),(()=>this.selectedRooms),(()=>this.selectedPredefinedPoint),(()=>this._getCurrentMode().coordinatesRounding),(()=>this._getCurrentMode().maxSelections),(e=>this._getCssProperty(e)),(()=>this._runImmediately()),(e=>this._localize(e)))}_getMousePosition(e){return Wn(e,this._getSvgWrapper(),this.mapScale)}_setCurrentMode(e,t=!0){const a=this.modes[e];switch(this.selectedManualRectangles=[],this.selectedManualPoint=void 0,this.selectedManualPath.clear(),this.selectedPredefinedRectangles=[],this.selectedRooms=[],this.selectedPredefinedPoint=[],this.selectablePredefinedRectangles=[],this.selectableRooms=[],this.selectablePredefinedPoints=[],null==a?void 0:a.selectionType){case Ln.PREDEFINED_RECTANGLE:const e=gr.getFromEntities(a,this.hass,(()=>this._getContext())),t=a.predefinedSelections.map((e=>e)).filter((e=>"string"!=typeof e.zones)).map((e=>new gr(e,this._getContext())));this.selectablePredefinedRectangles=e.concat(t);break;case Ln.ROOM:this.selectableRooms=a.predefinedSelections.map((e=>new vr(e,this._getContext())));break;case Ln.PREDEFINED_POINT:const i=_r.getFromEntities(a,this.hass,(()=>this._getContext())),n=a.predefinedSelections.map((e=>e)).filter((e=>"string"!=typeof e.position)).map((e=>new _r(e,this._getContext())));this.selectablePredefinedPoints=i.concat(n)}this.selectedMode!=e&&t&&de("selection"),this.selectedMode=e}_getCurrentMode(){return this.modes[this.selectedMode]}_getSelection(e){var t,a;const i=e.repeatsType===In.INTERNAL?this.repeats:null;let n=[];switch(e.selectionType){case Ln.MANUAL_RECTANGLE:n=this.selectedManualRectangles.map((e=>e.toVacuum(i)));break;case Ln.PREDEFINED_RECTANGLE:n=this.selectedPredefinedRectangles.map((e=>e.toVacuum(i))).reduce(((e,t)=>e.concat(t)),[]);break;case Ln.ROOM:const e=this.selectedRooms.map((e=>e.toVacuum()));n=[...e,...i&&e.length>0?[i]:[]];break;case Ln.MANUAL_PATH:n=this.selectedManualPath.toVacuum(i);break;case Ln.MANUAL_POINT:n=null!==(a=null===(t=this.selectedManualPoint)||void 0===t?void 0:t.toVacuum(i))&&void 0!==a?a:[];break;case Ln.PREDEFINED_POINT:n=this.selectedPredefinedPoint.map((e=>e.toVacuum(i))).reduce(((e,t)=>e.concat(t)),[])}return e.repeatsType===In.REPEAT&&(n=Array(this.repeats).fill(0).flatMap((()=>n))),n}_runImmediately(){return!!this._getCurrentMode().runImmediately&&(this._run(!1),!0)}_run(e){var t,a;const i=this._getCurrentPreset(),n=this._getCurrentMode(),r=this._getSelection(n);if(0==r.length)this._showToast("popups.no_selection","mdi:close",!1),de("failure");else{const a=this.repeats,o=n.getServiceCall(i.entity,r,a),l=JSON.stringify(o,null,2);e||null!==(t=this.config.debug)&&void 0!==t&&t?(this._showToast("popups.success","mdi:check",!0),console.log(l),window.alert(l),de("success")):this.hass.callService(o.domain,o.service,o.serviceData,o.target).then((()=>{this._showToast("popups.success","mdi:check",!0),de("success")}),(e=>{this._showToast("popups.failed","mdi:close",!1,e.message),de("failure")}))}(null===(a=i.clean_selection_on_start)||void 0===a||a)&&this._setCurrentMode(this.selectedMode)}updated(e){this._updateElements()}connectedCallback(){super.connectedCallback(),this.connected=!0,this._updateElements(),this._delay(100).then((()=>this.requestUpdate()))}disconnectedCallback(){super.disconnectedCallback(),this.connected=!1}_updateElements(){var e,t,a;const i=null===(a=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".modes-dropdown-menu"))||void 0===t?void 0:t.shadowRoot)||void 0===a?void 0:a.querySelector(".dropdown-content");i&&(i.style.borderRadius=this._getCssProperty("--map-card-internal-big-radius")),this._delay(100).then((()=>this._calculateBasicScale()))}_drawSelection(){var e,t,a;switch(null===(e=this._getCurrentMode())||void 0===e?void 0:e.selectionType){case Ln.MANUAL_RECTANGLE:return R`${this.selectedManualRectangles.map((e=>e.render()))}`;case Ln.PREDEFINED_RECTANGLE:return R`${this.selectablePredefinedRectangles.map((e=>e.render()))}`;case Ln.ROOM:return R`${this.selectableRooms.map((e=>e.render()))}`;case Ln.MANUAL_PATH:return R`${null===(t=this.selectedManualPath)||void 0===t?void 0:t.render()}`;case Ln.MANUAL_POINT:return R`${null===(a=this.selectedManualPoint)||void 0===a?void 0:a.render()}`;case Ln.PREDEFINED_POINT:return R`${this.selectablePredefinedPoints.map((e=>e.render()))}`;default:return null}}_toggleLock(){this.mapLocked=!this.mapLocked,de("selection"),this._delay(500).then((()=>this.requestUpdate()))}_addRectangle(){var e,t,a,i,n,r,o,l;const s=this._getCurrentPreset(),c=null!==(t=null===(e=s.map_source.crop)||void 0===e?void 0:e.top)&&void 0!==t?t:0,d=null!==(i=null===(a=s.map_source.crop)||void 0===a?void 0:a.bottom)&&void 0!==i?i:0,u=null!==(r=null===(n=s.map_source.crop)||void 0===n?void 0:n.left)&&void 0!==r?r:0,m=null!==(l=null===(o=s.map_source.crop)||void 0===o?void 0:o.right)&&void 0!==l?l:0;if(this._calculateBasicScale(),this.selectedManualRectangles.length>=this._getCurrentMode().maxSelections)return void de("failure");const p=this.realImageHeight*this.realScale-c-d,_=this.realImageWidth*this.realScale-u-m,g=(this.selectedManualRectangles.length+1).toString(),v=(_/3+u-this.mapX)/this.mapScale,h=(p/3+c-this.mapY)/this.mapScale,f=_/3/this.mapScale,b=p/3/this.mapScale;this.selectedManualRectangles.push(new sr(v,h,f,b,g,this._getContext())),de("selection"),this.requestUpdate()}_mouseDown(e){e instanceof MouseEvent&&0!=e.button||(this.shouldHandleMouseUp=!0)}_mouseMove(e){e.target.classList.contains("draggable")||(this.selectedManualRectangles.filter((e=>e.isSelected())).forEach((t=>t.externalDrag(e))),this.shouldHandleMouseUp=!1)}_mouseUp(e){if(!(e instanceof MouseEvent&&0!=e.button)&&this.shouldHandleMouseUp){const{x:t,y:a}=Wn(e,this._getSvgWrapper(),1);switch(this._getCurrentMode().selectionType){case Ln.MANUAL_PATH:de("selection"),this.selectedManualPath.addPoint(t,a);break;case Ln.MANUAL_POINT:de("selection"),this.selectedManualPoint=new ur(t,a,this._getContext());break;default:return}Gn(e),this.requestUpdate()}this.shouldHandleMouseUp=!1}_handleRunAction(){return e=>{if(this.hass&&e.detail.action)switch(e.detail.action){case"tap":this._run(!1);break;case"hold":this._run(!0);break;case"double_tap":console.log(JSON.stringify(Object.assign(Object.assign({},this._getCurrentPreset()),{additional_presets:void 0,title:void 0,type:void 0}),null,2)),window.alert("Configuration available in browser's console"),de("success")}}}_restoreMap(){const e=this._getMapZoomerContent();e.style.transitionDuration=this._getCssProperty("--map-card-internal-transitions-duration"),this._getPinchZoom().setTransform({scale:1,x:0,y:0,allowChangeEvent:!0}),this.mapScale=1,de("selection"),this._delay(300).then((()=>e.style.transitionDuration="0s"))}_getCssProperty(e){return getComputedStyle(this._getMapImage()).getPropertyValue(e)}_zoomIn(){de("selection"),this._updateScale(1.5)}_zoomOut(){de("selection"),this._updateScale(1/1.5)}_updateScale(e){const t=this._getMapZoomerContent(),a=this._getPinchZoom(),i=this._getPinchZoom().getBoundingClientRect();this.mapScale=Math.max(this.mapScale*e,.5),t.style.transitionDuration="200ms",a.scaleTo(this.mapScale,{originX:i.left+i.width/2,originY:i.top+i.height/2,relativeTo:"container",allowChangeEvent:!0}),this._delay(300).then((()=>t.style.transitionDuration="0s"))}_calculateBasicScale(){const e=this._getMapImage();e&&e.naturalWidth>0&&(this.realImageWidth=e.naturalWidth,this.realImageHeight=e.naturalHeight,this.realScale=e.width/e.naturalWidth)}_calculateScale(){const e=this._getPinchZoom();this.mapScale=e.scale,this.mapX=e.x,this.mapY=e.y}_getPinchZoom(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("map-zoomer")}_getMapImage(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("map-image")}_getMapZoomerContent(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("map-zoomer-content")}_getSvgWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#svg-wrapper")}_showConfigErrors(e){e.forEach((e=>console.error(e)));const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e[0],origConfig:this.config}),N` ${t} `}_showOldConfig(){return N`
            <hui-warning>
                <h1>Xiaomi Vacuum Map Card ${"v2.0.11"}</h1>
                <p>${this._localize("common.old_configuration")}</p>
                <p>
                    <a
                        href="https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card#migrating-from-v1xx"
                        target="_blank"
                        >${this._localize("common.old_configuration_migration_link")}</a
                    >
                </p>
            </hui-warning>
        `}_showInvalidEntities(e){return N`
            <hui-warning>
                <h1>${this._localize("validation.invalid_entities")}</h1>
                <ul>
                    ${e.map((e=>N` <li>
                            <pre>${e}</pre>
                        </li>`))}
                </ul>
            </hui-warning>
        `}_showInvalidCalibrationWarning(){return N` <hui-warning>${this._localize("validation.invalid_calibration")}</hui-warning> `}_localize(e){return Gi(e,this.hass,this.config)}async _delay(e){await new Promise((t=>setTimeout((()=>t()),e)))}_showToast(e,t,a,i=""){var n,r,o;const l=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById("toast"),s=null===(r=this.shadowRoot)||void 0===r?void 0:r.getElementById("toast-text"),c=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById("toast-icon");l&&s&&c&&(l.className="show",s.innerText=this._localize(e)+(i?`\n${i}`:""),c.children[0].setAttribute("icon",t),c.style.color=a?"var(--map-card-internal-toast-successful-icon-color)":"var(--map-card-internal-toast-unsuccessful-icon-color)",this._delay(2e3).then((()=>l.className=l.className.replace("show",""))))}static get styles(){return r`
            ha-card {
                overflow: hidden;
                display: flow-root;
                --map-card-internal-primary-color: var(--map-card-primary-color, var(--slider-color));
                --map-card-internal-primary-text-color: var(--map-card-primary-text-color, var(--primary-text-color));
                --map-card-internal-secondary-color: var(--map-card-secondary-color, var(--slider-secondary-color));
                --map-card-internal-secondary-text-color: var(
                    --map-card-secondary-text-color,
                    var(--text-light-primary-color)
                );
                --map-card-internal-tertiary-color: var(--map-card-tertiary-color, var(--secondary-background-color));
                --map-card-internal-tertiary-text-color: var(--map-card-tertiary-text-color, var(--primary-text-color));
                --map-card-internal-disabled-text-color: var(
                    --map-card-disabled-text-color,
                    var(--disabled-text-color)
                );
                --map-card-internal-zoomer-background: var(
                    --map-card-zoomer-background,
                    var(--map-card-internal-tertiary-color)
                );
                --map-card-internal-ripple-color: var(--map-card-ripple-color, #7a7f87);
                --map-card-internal-big-radius: var(--map-card-big-radius, 25px);
                --map-card-internal-small-radius: var(--map-card-small-radius, 18px);
                --map-card-internal-predefined-point-icon-wrapper-size: var(
                    --map-card-predefined-point-icon-wrapper-size,
                    36px
                );
                --map-card-internal-predefined-point-icon-size: var(--map-card-predefined-point-icon-size, 24px);
                --map-card-internal-predefined-point-icon-color: var(
                    --map-card-predefined-point-icon-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-predefined-point-icon-color-selected: var(
                    --map-card-predefined-point-icon-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-predefined-point-icon-background-color: var(
                    --map-card-predefined-point-icon-background-color,
                    var(--map-card-internal-secondary-color)
                );
                --map-card-internal-predefined-point-icon-background-color-selected: var(
                    --map-card-predefined-point-icon-background-color-selected,
                    var(--map-card-internal-primary-color)
                );
                --map-card-internal-predefined-point-label-color: var(
                    --map-card-predefined-point-label-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-predefined-point-label-color-selected: var(
                    --map-card-predefined-point-label-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-predefined-point-label-font-size: var(
                    --map-card-predefined-point-label-font-size,
                    12px
                );
                --map-card-internal-manual-point-radius: var(--map-card-manual-point-radius, 5px);
                --map-card-internal-manual-point-line-color: var(--map-card-manual-point-line-color, yellow);
                --map-card-internal-manual-point-fill-color: var(--map-card-manual-point-fill-color, transparent);
                --map-card-internal-manual-point-line-width: var(--map-card-manual-point-line-width, 1px);
                --map-card-internal-manual-path-point-radius: var(--map-card-manual-path-point-radius, 5px);
                --map-card-internal-manual-path-point-line-color: var(--map-card-manual-path-point-line-color, yellow);
                --map-card-internal-manual-path-point-fill-color: var(
                    --map-card-manual-path-point-fill-color,
                    transparent
                );
                --map-card-internal-manual-path-point-line-width: var(--map-card-manual-path-point-line-width, 1px);
                --map-card-internal-manual-path-line-color: var(--map-card-manual-path-line-color, yellow);
                --map-card-internal-manual-path-line-width: var(--map-card-manual-path-line-width, 1px);
                --map-card-internal-predefined-rectangle-line-width: var(
                    --map-card-predefined-rectangle-line-width,
                    1px
                );
                --map-card-internal-predefined-rectangle-line-color: var(
                    --map-card-predefined-rectangle-line-color,
                    white
                );
                --map-card-internal-predefined-rectangle-fill-color: var(
                    --map-card-predefined-rectangle-fill-color,
                    transparent
                );
                --map-card-internal-predefined-rectangle-line-color-selected: var(
                    --map-card-predefined-rectangle-line-color-selected,
                    white
                );
                --map-card-internal-predefined-rectangle-fill-color-selected: var(
                    --map-card-predefined-rectangle-fill-color-selected,
                    rgba(255, 255, 255, 0.2)
                );
                --map-card-internal-predefined-rectangle-line-segment-line: var(
                    --map-card-predefined-rectangle-line-segment-line,
                    10px
                );
                --map-card-internal-predefined-rectangle-line-segment-gap: var(
                    --map-card-predefined-rectangle-line-segment-gap,
                    5px
                );
                --map-card-internal-predefined-rectangle-icon-wrapper-size: var(
                    --map-card-predefined-rectangle-icon-wrapper-size,
                    36px
                );
                --map-card-internal-predefined-rectangle-icon-size: var(
                    --map-card-predefined-rectangle-icon-size,
                    24px
                );
                --map-card-internal-predefined-rectangle-icon-color: var(
                    --map-card-predefined-rectangle-icon-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-predefined-rectangle-icon-color-selected: var(
                    --map-card-predefined-rectangle-icon-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-predefined-rectangle-icon-background-color: var(
                    --map-card-predefined-rectangle-icon-background-color,
                    var(--map-card-internal-secondary-color)
                );
                --map-card-internal-predefined-rectangle-icon-background-color-selected: var(
                    --map-card-predefined-rectangle-icon-background-color-selected,
                    var(--map-card-internal-primary-color)
                );
                --map-card-internal-predefined-rectangle-label-color: var(
                    --map-card-predefined-rectangle-label-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-predefined-rectangle-label-color-selected: var(
                    --map-card-predefined-rectangle-label-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-predefined-rectangle-label-font-size: var(
                    --map-card-predefined-rectangle-label-font-size,
                    12px
                );
                --map-card-internal-manual-rectangle-line-width: var(--map-card-manual-rectangle-line-width, 1px);
                --map-card-internal-manual-rectangle-line-color: var(--map-card-manual-rectangle-line-color, white);
                --map-card-internal-manual-rectangle-fill-color: var(
                    --map-card-manual-rectangle-fill-color,
                    rgba(255, 255, 255, 0.2)
                );
                --map-card-internal-manual-rectangle-line-color-selected: var(
                    --map-card-manual-rectangle-line-color-selected,
                    white
                );
                --map-card-internal-manual-rectangle-fill-color-selected: var(
                    --map-card-manual-rectangle-fill-color-selected,
                    transparent
                );
                --map-card-internal-manual-rectangle-line-segment-line: var(
                    --map-card-manual-rectangle-line-segment-line,
                    10px
                );
                --map-card-internal-manual-rectangle-line-segment-gap: var(
                    --map-card-manual-rectangle-line-segment-gap,
                    5px
                );
                --map-card-internal-manual-rectangle-description-color: var(
                    --map-card-manual-rectangle-description-color,
                    white
                );
                --map-card-internal-manual-rectangle-description-font-size: var(
                    --map-card-manual-rectangle-description-font-size,
                    12px
                );
                --map-card-internal-manual-rectangle-description-offset-x: var(
                    --map-card-manual-rectangle-description-offset-x,
                    2px
                );
                --map-card-internal-manual-rectangle-description-offset-y: var(
                    --map-card-manual-rectangle-description-offset-y,
                    -8px
                );
                --map-card-internal-manual-rectangle-delete-circle-radius: var(
                    --map-card-manual-rectangle-delete-circle-radius,
                    13px
                );
                --map-card-internal-manual-rectangle-delete-circle-line-color: var(
                    --map-card-manual-rectangle-delete-circle-line-color,
                    white
                );
                --map-card-internal-manual-rectangle-delete-circle-fill-color: var(
                    --map-card-manual-rectangle-delete-circle-fill-color,
                    var(--map-card-internal-secondary-color)
                );
                --map-card-internal-manual-rectangle-delete-circle-line-color-selected: var(
                    --map-card-manual-rectangle-delete-circle-line-color-selected,
                    white
                );
                --map-card-internal-manual-rectangle-delete-circle-fill-color-selected: var(
                    --map-card-manual-rectangle-delete-circle-fill-color-selected,
                    var(--map-card-internal-primary-color)
                );
                --map-card-internal-manual-rectangle-delete-circle-line-width: var(
                    --map-card-manual-rectangle-delete-circle-line-width,
                    1px
                );
                --map-card-internal-manual-rectangle-delete-icon-color: var(
                    --map-card-manual-rectangle-delete-icon-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-manual-rectangle-delete-icon-color-selected: var(
                    --map-card-manual-rectangle-delete-icon-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-manual-rectangle-resize-circle-radius: var(
                    --map-card-manual-rectangle-resize-circle-radius,
                    13px
                );
                --map-card-internal-manual-rectangle-resize-circle-line-color: var(
                    --map-card-manual-rectangle-resize-circle-line-color,
                    white
                );
                --map-card-internal-manual-rectangle-resize-circle-fill-color: var(
                    --map-card-manual-rectangle-resize-circle-fill-color,
                    var(--map-card-internal-secondary-color)
                );
                --map-card-internal-manual-rectangle-resize-circle-line-color-selected: var(
                    --map-card-manual-rectangle-resize-circle-line-color-selected,
                    white
                );
                --map-card-internal-manual-rectangle-resize-circle-fill-color-selected: var(
                    --map-card-manual-rectangle-resize-circle-fill-color-selected,
                    var(--map-card-internal-primary-color)
                );
                --map-card-internal-manual-rectangle-resize-circle-line-width: var(
                    --map-card-manual-rectangle-resize-circle-line-width,
                    1px
                );
                --map-card-internal-manual-rectangle-resize-icon-color: var(
                    --map-card-manual-rectangle-resize-icon-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-manual-rectangle-resize-icon-color-selected: var(
                    --map-card-manual-rectangle-resize-icon-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-room-outline-line-color: var(--map-card-room-outline-line-color, white);
                --map-card-internal-room-outline-line-width: var(--map-card-room-outline-line-width, 1px);
                --map-card-internal-room-outline-line-segment-line: var(
                    --map-card-room-outline-line-segment-line,
                    10px
                );
                --map-card-internal-room-outline-line-segment-gap: var(--map-card-room-outline-line-segment-gap, 5px);
                --map-card-internal-room-outline-fill-color: var(--map-card-room-outline-fill-color, transparent);
                --map-card-internal-room-outline-line-color-selected: var(
                    --map-card-room-outline-line-color-selected,
                    white
                );
                --map-card-internal-room-outline-fill-color-selected: var(
                    --map-card-room-outline-fill-color-selected,
                    rgba(255, 255, 255, 0.3)
                );
                --map-card-internal-room-icon-wrapper-size: var(--map-card-room-icon-wrapper-size, 36px);
                --map-card-internal-room-icon-size: var(--map-card-room-icon-size, 24px);
                --map-card-internal-room-icon-color: var(
                    --map-card-room-icon-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-room-icon-color-selected: var(
                    --map-card-room-icon-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-room-icon-background-color: var(
                    --map-card-room-icon-background-color,
                    var(--map-card-internal-secondary-color)
                );
                --map-card-internal-room-icon-background-color-selected: var(
                    --map-card-room-icon-background-color-selected,
                    var(--map-card-internal-primary-color)
                );
                --map-card-internal-room-label-color: var(
                    --map-card-room-label-color,
                    var(--map-card-internal-secondary-text-color)
                );
                --map-card-internal-room-label-color-selected: var(
                    --map-card-room-label-color-selected,
                    var(--map-card-internal-primary-text-color)
                );
                --map-card-internal-room-label-font-size: var(--map-card-room-label-font-size, 12px);
                --map-card-internal-toast-successful-icon-color: var(
                    --map-card-toast-successful-icon-color,
                    rgb(0, 255, 0)
                );
                --map-card-internal-toast-unsuccessful-icon-color: var(
                    --map-card-toast-unsuccessful-icon-color,
                    rgb(255, 0, 0)
                );
                --map-card-internal-transitions-duration: var(--map-card-transitions-duration, 200ms);
            }

            .clickable {
                cursor: pointer;
            }

            .preset-selector-wrapper {
                width: 100%;
                display: inline-flex;
                align-content: center;
                justify-content: space-between;
                align-items: center;
            }

            .preset-selector-icon-wrapper {
                height: 44px;
                width: 44px;
                display: grid;
                place-items: center;
            }

            .preset-selector-icon {
                cursor: pointer;
            }

            .preset-selector-icon.disabled {
                color: var(--map-card-internal-disabled-text-color);
                cursor: default;
            }

            .preset-label-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .preset-indicator {
                line-height: 50%;
            }

            .map-wrapper {
                position: relative;
                height: max-content;
            }

            #map-zoomer {
                overflow: hidden;
                display: block;
                --scale: 1;
                --x: 0;
                --y: 0;
                background: var(--map-card-internal-zoomer-background);
            }

            #map-zoomer-content {
                transform: translate(var(--x), var(--y)) scale(var(--scale));
                transform-origin: 0 0;
                position: relative;
            }

            #map-image {
                width: 100%;
                margin-bottom: -6px;
            }

            #map-image.zoomed {
                image-rendering: pixelated;
            }

            #map-image-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .standalone-icon-on-map {
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
                border-radius: var(--map-card-internal-small-radius);
                margin: 5px;
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .map-zoom-icons {
                right: 0;
                bottom: 0;
                position: absolute;
                display: inline-flex;
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
                border-radius: var(--map-card-internal-small-radius);
                margin: 5px;
                direction: ltr;
            }

            .map-zoom-icons-main {
                display: inline-flex;
                border-radius: var(--map-card-internal-small-radius);
                background-color: var(--map-card-internal-primary-color);
                color: var(--map-card-internal-primary-text-color);
            }

            .icon-on-map {
                touch-action: auto;
                pointer-events: auto;
                height: 36px;
                width: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .controls-wrapper {
                margin: 15px;
            }

            .controls-wrapper > * {
                margin-top: 10px;
                margin-bottom: 10px;
            }

            .map-controls {
                width: 100%;
                display: inline-flex;
                gap: 10px;
                place-content: space-between;
                flex-wrap: wrap;
            }

            .map-actions-list {
                border-radius: var(--map-card-internal-big-radius);
                overflow: hidden;
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
                margin-inline-start: auto;
                display: inline-flex;
                height: min-content;
            }

            .map-actions-item.main {
                border-radius: var(--map-card-internal-big-radius);
                background-color: var(--map-card-internal-primary-color);
                color: var(--map-card-internal-primary-text-color);
            }

            .map-actions-item {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
            }

            .vacuum-controls {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .vacuum-actions-list {
                float: right;
                border-radius: var(--map-card-internal-big-radius);
                overflow: hidden;
                background-color: var(--map-card-internal-secondary-color);
                color: var(--map-card-internal-secondary-text-color);
            }

            .tiles-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: stretch;
                gap: 5px;
            }

            .ripple {
                position: relative;
                overflow: hidden;
                transform: translate3d(0, 0, 0);
            }

            .ripple:after {
                content: "";
                display: block;
                position: absolute;
                border-radius: 50%;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background-image: radial-gradient(circle, var(--map-card-internal-ripple-color) 2%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: scale(10, 10);
                opacity: 0;
                transition: transform 0.5s, opacity 1s;
            }

            .ripple:active:after {
                transform: scale(0, 0);
                opacity: 0.7;
                transition: 0s;
            }

            ${or.styles}
            ${sr.styles}
            ${gr.styles}
            ${pr.styles}
            ${ur.styles}
            ${_r.styles}
            ${vr.styles}
            ${wr.styles}
            ${zr.styles}
            ${xr.styles}
            ${Er.styles}
        `}};e([ie({attribute:!1})],Vr.prototype,"_hass",void 0),e([ne()],Vr.prototype,"oldConfig",void 0),e([ne()],Vr.prototype,"config",void 0),e([ne()],Vr.prototype,"presetIndex",void 0),e([ne()],Vr.prototype,"realScale",void 0),e([ne()],Vr.prototype,"realImageWidth",void 0),e([ne()],Vr.prototype,"realImageHeight",void 0),e([ne()],Vr.prototype,"mapScale",void 0),e([ne()],Vr.prototype,"mapX",void 0),e([ne()],Vr.prototype,"mapY",void 0),e([ne()],Vr.prototype,"repeats",void 0),e([ne()],Vr.prototype,"selectedMode",void 0),e([ne()],Vr.prototype,"mapLocked",void 0),e([ne()],Vr.prototype,"configErrors",void 0),e([ne()],Vr.prototype,"connected",void 0),Vr=e([te("xiaomi-vacuum-map-card")],Vr);export{Vr as XiaomiVacuumMapCard};
