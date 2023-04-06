import{k as S,x as p,c as m,a as A,i as d,m as h,y as k,z as f,f as z,p as O,t as y}from"./web.a5c6c600.js";import{s as P,D as w,P as j,S as E}from"./pane.c0b1e308.js";const x=P;function $(t){return Object.keys(t).reduce((s,n)=>{const e=t[n];return s[n]=Object.assign({},e),b(e.value)&&!M(e.value)&&!Array.isArray(e.value)&&(s[n].value=Object.assign({},e.value)),Array.isArray(e.value)&&(s[n].value=e.value.slice(0)),s},{})}function K(t){return t?Object.keys(t).reduce((s,n)=>{const e=t[n];return s[n]=b(e)&&"value"in e?e:{value:e},s[n].attribute||(s[n].attribute=N(n)),s[n].parse="parse"in s[n]?s[n].parse:typeof s[n].value!="string",s},{}):{}}function R(t){return Object.keys(t).reduce((s,n)=>(s[n]=t[n].value,s),{})}function L(t,r){const s=$(r);return Object.keys(r).forEach(e=>{const i=s[e],l=t.getAttribute(i.attribute),a=t[e];l&&(i.value=i.parse?g(l):l),a!=null&&(i.value=Array.isArray(a)?a.slice(0):a),i.reflect&&_(t,i.attribute,i.value),Object.defineProperty(t,e,{get(){return i.value},set(o){const C=i.value;i.value=o,i.reflect&&_(this,i.attribute,i.value);for(let u=0,v=this.__propertyChangedCallbacks.length;u<v;u++)this.__propertyChangedCallbacks[u](e,o,C)},enumerable:!0,configurable:!0})}),s}function g(t){if(!!t)try{return JSON.parse(t)}catch{return t}}function _(t,r,s){if(s==null||s===!1)return t.removeAttribute(r);let n=JSON.stringify(s);t.__updating[r]=!0,n==="true"&&(n=""),t.setAttribute(r,n),Promise.resolve().then(()=>delete t.__updating[r])}function N(t){return t.replace(/\.?([A-Z]+)/g,(r,s)=>"-"+s.toLowerCase()).replace("_","-").replace(/^-/,"")}function b(t){return t!=null&&(typeof t=="object"||typeof t=="function")}function M(t){return Object.prototype.toString.call(t)==="[object Function]"}function T(t){return typeof t=="function"&&t.toString().indexOf("class")===0}let c;function B(t,r){const s=Object.keys(r);return class extends t{static get observedAttributes(){return s.map(e=>r[e].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=L(this,r);const e=R(this.props),i=this.Component,l=c;try{c=this,this.__initialized=!0,T(i)?new i(e,{element:this}):i(e,{element:this})}finally{c=l}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,i,l){if(!!this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e),e in r)){if(l==null&&!this[e])return;this[e]=r[e].parse?g(l):l}}lookupProp(e){if(!!r)return s.find(i=>e===i||e===r[i].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function F(t,r={},s={}){const{BaseElement:n=HTMLElement,extension:e}=s;return i=>{if(!t)throw new Error("tag is required to register a Component");let l=customElements.get(t);return l?(l.prototype.Component=i,l):(l=B(n,K(r)),l.prototype.Component=i,l.prototype.registeredTag=t,customElements.define(t,l,e),l)}}function J(t){const r=Object.keys(t),s={};for(let n=0;n<r.length;n++){const[e,i]=m(t[r[n]]);Object.defineProperty(s,r[n],{get:e,set(l){i(()=>l)}})}return s}function V(t){if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;let r=t.parentNode;for(;r&&!r._$owner&&!(r.assignedSlot&&r.assignedSlot._$owner);)r=r.parentNode;return r&&r.assignedSlot?r.assignedSlot._$owner:t._$owner}function q(t){return(r,s)=>{const{element:n}=s;return S(e=>{const i=J(r);n.addPropertyChangedCallback((a,o)=>i[a]=o),n.addReleaseCallback(()=>{n.renderRoot.textContent="",e()});const l=t(i,s);return p(n.renderRoot,l)},V(n))}}function H(t,r,s){return arguments.length===2&&(s=r,r={}),F(t,r)(q(s))}const I=y(`<style>* {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            </style>`),Z=y('<link rel="stylesheet">'),G={horizontal:!1,customClass:"",resizeBarClass:"",pushOtherPane:!1,styleCode:"",splitterId:"0",styleLink:""},Q=async()=>{const t=new w;try{H("so-splitter",G,(r,{element:s})=>{const n=A(()=>[...s.children].map(e=>{const i={customClass:e.getAttribute("custom-class")??"",maxSize:e.getAttribute("max-size")??100,minSize:e.getAttribute("min-size")??0,size:e.getAttribute("size")??0};return d(j,h(i,{get children(){return[...e.children]}}))}));return k(t.resolve),[(()=>{const e=I.cloneNode(!0),i=e.firstChild;return p(e,x,null),p(e,()=>r.styleCode,null),e})(),f((()=>{const e=f(()=>r.styleLink?.trim()!=="",!0);return()=>e()&&(()=>{const i=Z.cloneNode(!0);return z(()=>O(i,"href",r.styleLink)),i})()})()),d(E,h(r,{children:n}))]})}catch(r){t.reject(r)}return t.promise};Q();
