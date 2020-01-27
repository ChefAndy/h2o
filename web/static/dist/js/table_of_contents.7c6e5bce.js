(function(t){function e(e){for(var i,s,a=e[0],l=e[1],c=e[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={table_of_contents:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([5,"chunk-common"]),n()})({"10e3":function(t,e,n){},5:function(t,e,n){t.exports=n("cf90")},"627d":function(t,e,n){
/*!
 * vue-nestable v2.5.0
 * (c) Ralph Huwiler <ralph@huwiler.rocks>
 * Released under the MIT License.
 */
!function(t,n){n(e)}(0,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={},l={methods:{registerNestable:function(t){var e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart:function(t,e,n){var i=this._getByGroup(t),o=!0,r=!1,s=void 0;try{for(var a,l=i.onDragStartListeners[Symbol.iterator]();!(o=(a=l.next()).done);o=!0)(0,a.value)(e,n)}catch(t){r=!0,s=t}finally{try{o||null==l.return||l.return()}finally{if(r)throw s}}},notifyMouseEnter:function(t,e,n,i){var o=this._getByGroup(t),r=!0,s=!1,a=void 0;try{for(var l,c=o.onMouseEnterListeners[Symbol.iterator]();!(r=(l=c.next()).done);r=!0)(0,l.value)(e,n,i)}catch(t){s=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}},notifyMouseMove:function(t,e){var n=this._getByGroup(t),i=!0,o=!1,r=void 0;try{for(var s,a=n.onMouseMoveListeners[Symbol.iterator]();!(i=(s=a.next()).done);i=!0)(0,s.value)(e)}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}},_getByGroup:function(t){return s[t]?s[t]:(s[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null},s[t])}}},c={name:"NestableItem",mixins:[l],props:{item:{type:Object,required:!0,default:function(){return{}}},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function(){return{}}}},inject:["listId","group","keyProp"],data:function(){return{breakPoint:null,moveDown:!1}},computed:{isDragging:function(){var t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle:function(){return!!this.$scopedSlots.handler},normalizedClassProp:function(){var t=this.item[this.options.classProp];return t?Array.isArray(t)?t:("undefined"==typeof a||e(a),[t]):[]},itemClasses:function(){var t=this.isDragging?["is-dragging"]:[];return["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(t,r(this.normalizedClassProp))}},methods:{onMouseEnter:function(t){if(this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.srcElement.getBoundingClientRect().height/2}},onMouseLeave:function(){this.breakPoint=null},onMouseMove:function(t){if(this.breakPoint){var e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)}},sendNotification:function(t){this.breakPoint=null;var e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}};function u(t,e,n,i,o,r,s,a,l,c){"boolean"!=typeof s&&(l=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let d;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=d):e&&(d=s?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(u.functional){const t=u.render;u.render=function(e,n){return d.call(n),t(e,n)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,d):[d]}return n}"undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var d,h,p=u({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.itemClasses},[n("div",{staticClass:"nestable-item-content",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove}},[t._t("default",null,{index:t.index,item:t.item,isChild:t.isChild})],2),t._v(" "),t.hasChildren?n("ol",{staticClass:"nestable-list"},[t._l(t.item[t.options.childrenProp],(function(e,i){return[n("NestableItem",{key:e[t.keyProp],attrs:{item:e,index:i,options:t.options,"is-copy":t.isCopy,"is-child":""},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2):t._e()])},staticRenderFns:[]},void 0,c,void 0,!1,void 0,!1,void 0,void 0,void 0),f=u({render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"nestable-list-empty",on:{mouseenter:this.onMouseEnter}},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"Placeholder",mixins:[l],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function(){return{}}}},inject:["listId","group"],computed:{isDragging:function(){return this.options.dragItem}},methods:{onMouseEnter:function(t){this.options.dragItem&&this.notifyMouseEnter(this.group,t,this.listId,null)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),m={methods:{getPathById:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,i=[];return n.every((function(n,o){if(n[e.keyProp]===t)i.push(o);else if(n[e.childrenProp]){var r=e.getPathById(t,n[e.childrenProp]);r.length&&(i=i.concat(o).concat(r))}return 0===i.length})),i},getItemByPath:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,i=null;return t.forEach((function(t){var o=i&&i[e.childrenProp]?i[e.childrenProp]:n;i=o[t]})),i},getItemDepth:function(t){var e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){var n=t[this.childrenProp].map(this.getItemDepth);e+=Math.max.apply(Math,r(n))}return e},getSplicePath:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={},o=e.numToRemove||0,s=e.itemsToInsert||[],a=t.length-1,l=i;return t.forEach((function(t,i){if(i===a)l.$splice=[[t,o].concat(r(s))];else{var c={};l[t]=n({},e.childrenProp,c),l=c}})),i},getRealNextPath:function(t,e){var n=t.length-1,i=e.length-1;if(t.length<e.length){var o=!1;return e.map((function(r,s){return o?s===i?r+1:r:"number"!=typeof t[s]?r:e[s]>t[s]&&s===n?(o=!0,r-1):r}))}if(t.length===e.length&&e[i]>t[i]){var r=this.getItemByPath(e);if(r[this.childrenProp]&&r[this.childrenProp].length&&!this.isCollapsed(r))return e.slice(0,-1).concat(e[i]-1).concat(0)}return e}}},v={methods:{hook:function(t,e){if(!this.hooks[t])return!0;var n=this.hooks[t](e);return n||void 0===n}}},y="production",g=function(t,e,n,i,o,r,s,a){if("production"!==y&&void 0===e)throw new Error("invariant requires an error message argument");if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,o,r,s,a],u=0;(l=new Error(e.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}},b=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.prototype.hasOwnProperty,i=Array.prototype.splice,o=Object.prototype.toString;function r(t){return o.call(t).slice(8,-1)}var s=Object.assign||function(t,e){return a(e).forEach((function(i){n.call(e,i)&&(t[i]=e[i])})),t},a="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function l(t){return Array.isArray(t)?s(t.constructor(t.length),t):"Map"===r(t)?new Map(t):"Set"===r(t)?new Set(t):t&&"object"==typeof t?s(Object.create(Object.getPrototypeOf(t)),t):t}var c=function(){function t(){this.commands=s({},u),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var i=this,o="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(o)||g(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),g("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(this.commands).join(", "));var s=t;return a(o).forEach((function(e){if(n.call(i.commands,e)){var a=t===s;s=i.commands[e](o[e],s,o,t),a&&i.isEquals(s,t)&&(s=t)}else{var c="Map"===r(t)?i.update(t.get(e),o[e]):i.update(t[e],o[e]),u="Map"===r(s)?s.get(e):s[e];i.isEquals(c,u)&&(void 0!==c||n.call(t,e))||(s===t&&(s=l(t)),"Map"===r(s)?s.set(e,c):s[e]=c)}})),s},t}();e.Context=c;var u={$push:function(t,e,n){return h(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return h(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,o){return function(t,e){g(Array.isArray(t),"Expected $splice target to be an array; got %s",t),f(e.$splice)}(e,n),t.forEach((function(t){f(t),e===o&&t.length&&(e=l(o)),i.apply(e,t)})),e},$set:function(t,e,n){return function(t){g(1===Object.keys(t).length,"Cannot have more than one key in an object with $set")}(n),t},$toggle:function(t,e){p(t,"$toggle");var n=t.length?l(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,i){return p(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===i&&(e=l(i)),delete e[t])})),e},$add:function(t,e,n,i){return m(e,"$add"),p(t,"$add"),"Map"===r(e)?t.forEach((function(t){var n=t[0],o=t[1];e===i&&e.get(n)!==o&&(e=l(i)),e.set(n,o)})):t.forEach((function(t){e!==i||e.has(t)||(e=l(i)),e.add(t)})),e},$remove:function(t,e,n,i){return m(e,"$remove"),p(t,"$remove"),t.forEach((function(t){e===i&&e.has(t)&&(e=l(i)),e.delete(t)})),e},$merge:function(t,e,n,i){var o,r;return o=e,g((r=t)&&"object"==typeof r,"update(): $merge expects a spec of type 'object'; got %s",r),g(o&&"object"==typeof o,"update(): $merge expects a target of type 'object'; got %s",o),a(t).forEach((function(n){t[n]!==e[n]&&(e===i&&(e=l(i)),e[n]=t[n])})),e},$apply:function(t,e){var n;return g("function"==typeof(n=t),"update(): expected spec of $apply to be a function; got %s.",n),t(e)}},d=new c;function h(t,e,n){g(Array.isArray(t),"update(): expected target of %s to be an array; got %s.",n,t),p(e[n],n)}function p(t,e){g(Array.isArray(t),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",e,t)}function f(t){g(Array.isArray(t),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",t)}function m(t,e){var n=r(t);g("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",e,n)}e.isEquals=d.update.isEquals,e.extend=d.extend,e.default=d.update,e.default.default=t.exports=s(e.default,e)}(d={exports:{}},d.exports),d.exports),_=(h=b)&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,P=(b.Context,b.isEquals,b.extend,u({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["nestable","nestable-"+t.group,t.rtl?"nestable-rtl":""]},[n("ol",{staticClass:"nestable-list nestable-group"},[t.listIsEmpty?n("Placeholder",{attrs:{options:t.itemOptions}},[t._t("placeholder",[t._v("\n        No content\n      ")])],2):t._e(),t._v(" "),t._l(t.value,(function(e,i){return[n("NestableItem",{key:e[t.keyProp],attrs:{index:i,item:e,options:t.itemOptions},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2),t._v(" "),t.dragItem?[n("div",{staticClass:"nestable-drag-layer"},[n("ol",{staticClass:"nestable-list",style:t.listStyles},[n("NestableItem",{attrs:{item:t.dragItem,options:t.itemOptions,"is-copy":!0},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})],1)])]:t._e()],2)},staticRenderFns:[]},void 0,{name:"VueNestable",components:{NestableItem:p,Placeholder:f},mixins:[m,l,v],props:{value:{type:Array,required:!0,default:function(){return[]}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:function(){return{}}},rtl:{type:Boolean,required:!1,default:!1}},provide:function(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data:function(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function(){return 0===this.value.length},itemOptions:function(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),e={};return t&&(e.width="".concat(t.clientWidth,"px")),this.elCopyStyles&&(e=o({},e,{},this.elCopyStyles)),e}},created:function(){var t=function t(e,i){return e.map((function(e){return o({},e,n({},i,e[i]?t(e[i],i):[]))}))}(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy:function(){this.stopTrackMouse()},methods:{startTrackMouse:function(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse:function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart:function(t,e){var n,i;t&&(t.preventDefault(),t.stopPropagation()),this.el=(n=t.target,i=".nestable-item",n.closest(i)),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value},onDragEnd:function(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown:function(t){27===t.which&&this.onDragEnd(null,!0)},getXandYFromEvent:function(t){var e=t.clientX,n=t.clientY,i=t.targetTouches;if(i){var o=i[0];e=o.clientX,n=o.clientY;var r=new Event("mouseenter"),s=document.elementFromPoint(e,n),a=s&&(s.closest(".nestable-item-content")||s.closest(".nestable-list-empty"));a&&a.dispatchEvent(r)}return{clientX:e,clientY:n}},onMouseMove:function(t){t&&t.preventDefault();var e=this.getXandYFromEvent(t),n=e.clientX,i=e.clientY;0===this.mouse.last.x&&(this.mouse.last.x=n);var r,s,a={transform:"translate("+n+"px, "+i+"px)"},l=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer").getBoundingClientRect(),c=l.top,u=l.left,d=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=o({},this.elCopyStyles,{},a),d)for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&(d.style[h]=a[h]);var p=this.rtl?this.mouse.last.x-n:n-this.mouse.last.x;p>=0&&this.mouse.shift.x>=0||p<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=p:this.mouse.shift.x=0,this.mouse.last.x=n,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{var f=(r=this.el,s=r.getBoundingClientRect(),{top:Math.round(s.top),left:Math.round(s.left)});this.elCopyStyles=o({marginTop:"".concat(f.top-i-c,"px"),marginLeft:"".concat(f.left-n-u,"px")},a)}},moveItem:function(t){var e=t.dragItem,n=t.pathFrom,i=t.pathTo,o=this.getRealNextPath(n,i),r=this.getSplicePath(n,{numToRemove:1,childrenProp:this.childrenProp}),s=this.getSplicePath(o,{numToRemove:0,itemsToInsert:[e],childrenProp:this.childrenProp});if(this.hook("beforeMove",{dragItem:e,pathFrom:n,pathTo:o})){var a=this.value;a=_(a,r),a=_(a,s),this.isDirty=!0,this.pathTo=i,this.$emit("input",a)}},tryIncreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1],i=e.length+this.getItemDepth(t);if(n>0&&i<=this.maxDepth){var o=this.getItemByPath(e.slice(0,-1).concat(n-1));if(o[this.childrenProp]&&(!o[this.childrenProp].length||!this.isCollapsed(o))){var r=e.slice(0,-1).concat(n-1).concat(o[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:r})}}},tryDecreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1];if(e.length>1&&n+1===this.getItemByPath(e.slice(0,-1))[this.childrenProp].length){var i=e.slice(0,-1);i[i.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:i})}},onMouseEnter:function(t,e,n){t&&(t.preventDefault(),t.stopPropagation());var i=this.dragItem;if(i&&(null===n||i[this.keyProp]!==n[this.keyProp])){var o,r=this.getPathById(i[this.keyProp]);if((e===this.listId||0!==r.length)&&(o=null===n?r.length>0?[]:[0]:this.getPathById(n[this.keyProp]),!(this.getRealNextPath(r,o).length+(this.getItemDepth(i)-1)>this.maxDepth))){var s={};if(this.collapsed&&r.length>1){var a=this.getItemByPath(r.slice(0,-1));1===a[this.childrenProp].length&&(s=this.onToggleCollapse(a,!0))}this.moveItem({dragItem:i,pathFrom:r,pathTo:o},s)}}},isCollapsed:function(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply:function(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert:function(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},void 0,!1,void 0,!1,void 0,void 0,void 0)),C=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nestable-handle",attrs:{draggable:""},on:{dragstart:this.dragstart,touchstart:this.dragstart,touchend:this.touchend,touchmove:this.touchmove}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"VueNestableHandle",mixins:[l],props:{item:{type:Object,required:!1,default:function(){return{}}}},inject:["group","onDragEnd"],methods:{dragstart:function(t){var e=this.item||this.$parent.item;this.notifyDragStart(this.group,t,e)},touchend:function(t){this.onDragEnd(t)},touchmove:function(t){this.notifyMouseMove(this.group,t)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),x={install:function(t,e){t.component("VueNestable",P),t.component("VueNestableHandle",C)}};t.VueNestable=P,t.VueNestableHandle=C,t.default=x,Object.defineProperty(t,"__esModule",{value:!0})}))},"7a82":function(t,e,n){"use strict";var i=n("10e3"),o=n.n(i);o.a},a8fc:function(t,e,n){"use strict";var i=n("bbbc"),o=n.n(i);o.a},bbbc:function(t,e,n){},cf90:function(t,e,n){"use strict";n.r(e);var i=n("a026"),o=n("6866"),r=(n("67c4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-of-contents",class:{editable:t.editing}},[t.dataReady?n("vue-nestable",{attrs:{hooks:{beforeMove:t.canMove}},on:{change:t.moveSubsection},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return t.editing?n("vue-nestable-handle",{staticClass:"collapsed",attrs:{item:i}},[n("div",{class:{"listing-wrapper":!0,"delete-confirm":t.promptForDelete({id:i.id})}},[null!==i.resource_type?n("div",{staticClass:"listing resource"},[n("div",{staticClass:"section-number"}),"Case"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title case-section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))]),n("div",{staticClass:"case-metadata-container"},[n("div",{staticClass:"resource-case"},[t._v(t._s(i.citation))]),n("div",{staticClass:"resource-date"},[t._v(t._s(i.decision_date))])])]):"TextBlock"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])]):"Link"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])]):t._e(),n("div",{staticClass:"resource-type-container"},[n("div",{staticClass:"resource-type"},[t._v(t._s("TextBlock"===i.resource_type?"Text":i.resource_type))])])]):n("div",{staticClass:"listing section"},[n("div",{staticClass:"action-expand",on:{click:function(e){return t.toggleSectionExpanded({id:i.id})}}},[n("collapse-triangle",{attrs:{collapsed:t.isCollapsed({id:i.id})}})],1),n("div",{staticClass:"section-number"}),n("div",{staticClass:"section-title"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])])]),n("div",{staticClass:"actions"},[t.promptForDelete({id:i.id})?n("div",{staticClass:"action-confirmation"},[n("div",{staticClass:"action-align"},[n("button",{staticClass:"action-confirm-delete",on:{click:function(e){return t.confirmDeletion({id:i.id})}}},[t._v("Delete")]),n("button",{staticClass:"action-cancel-delete",on:{click:function(e){return t.cancelDeletion({id:i.id})}}},[t._v("Keep")])])]):n("button",{staticClass:"action-delete",on:{click:function(e){return t.markForDeletion({id:i.id})}}})])])]):n("div",{staticClass:"listing-wrapper"},[null!==i.resource_type?n("div",{staticClass:"listing resource"},[n("div",{staticClass:"section-number"}),"Case"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title case-section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))]),n("div",{staticClass:"case-metadata-container"},[n("div",{staticClass:"resource-case"},[t._v(t._s(i.citation))]),n("div",{staticClass:"resource-date"},[t._v(t._s(i.decision_date))])])]):"TextBlock"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])]):"Link"===i.resource_type?n("div",{staticClass:"resource-container"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])]):t._e(),n("div",{staticClass:"resource-type-container"},[n("div",{staticClass:"resource-type"},[t._v(t._s("TextBlock"===i.resource_type?"Text":i.resource_type))])])]):n("div",{staticClass:"listing section"},[n("div",{staticClass:"action-expand",on:{click:function(e){return t.toggleSectionExpanded({id:i.id})}}},[n("collapse-triangle",{attrs:{collapsed:t.isCollapsed({id:i.id})}})],1),n("div",{staticClass:"section-number"}),n("div",{staticClass:"section-title"},[n("a",{staticClass:"section-title",attrs:{href:i.edit_url}},[t._v(t._s(i.title))])])])])}}],null,!0),model:{value:t.toc,callback:function(e){t.toc=e},expression:"toc"}}):t._e()],1)}),s=[],a=n("627d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:{open:!t.collapsed,collapsed:t.collapsed},attrs:{height:"32",width:"32"}},[n("polygon",{attrs:{points:"6,6 20,16 6,24"}})])},c=[],u={name:"collapse-triangle",props:["collapsed"]},d=u,h=(n("7a82"),n("2877")),p=Object(h["a"])(d,l,c,!1,null,"2f13508c",null),f=p.exports,m=n("2f62");const{mapActions:v,mapMutations:y}=Object(m["a"])("table_of_contents");var g={components:{VueNestable:a["VueNestable"],VueNestableHandle:a["VueNestableHandle"],CollapseTriangle:f},data:()=>({needsDeleteConfirmation:{},collapsedSections:{}}),computed:{targetId:function(){return this.rootId||this.casebook},toc:{get:function(){const t=this.$store.getters["table_of_contents/getNode"](this.targetId),e=this.collapsedSections;function n(t){if(!t)return t;let{children:i,id:o}=t;return o in e?{...t,children:[]}:{...t,children:i.map(n)}}let i=n(t);return i&&i.children},set:function(t){this.shuffle({id:this.targetId,children:t})}},dataReady:function(){return this.toc!==[null]&&null!==this.toc}},methods:{...v(["fetch","deleteNode","commitShuffle","moveNode"]),...y(["shuffle"]),canMove:function({dragItem:t,pathFrom:e,pathTo:n}){if(1===n.length)return!0;let i=[],o=n.slice(0),r=o.splice(0,1)[0],s=this.toc[r];while(o.length>0){if(i.push({ii:r,t:s.resoure_type}),null!==s.resource_type||s.id in this.collapsedSections||s.id===t.id)return!1;r=o.splice(0,1)[0],s=s.children[r]}return!0},promptForDelete:function({id:t}){return t in this.needsDeleteConfirmation},markForDeletion:function({id:t}){i["a"].set(this.needsDeleteConfirmation,t,!0)},cancelDeletion:function({id:t}){i["a"].delete(this.needsDeleteConfirmation,t)},confirmDeletion:function({id:t}){this.deleteNode({casebook:this.casebook,targetId:t})},moveSubsection:function({id:t},{pathTo:e}){this.moveNode({casebook:this.casebook,targetId:t,pathTo:e})},isCollapsed:function({id:t}){return t in this.collapsedSections},toggleSectionExpanded:function({id:t}){t in this.collapsedSections?i["a"].delete(this.collapsedSections,t):i["a"].set(this.collapsedSections,t,!0)}},props:["rootId","casebook","editing"],created:function(){this.fetch({casebook:this.casebook,subsection:this.rootId})}},b=g,_=(n("a8fc"),Object(h["a"])(b,r,s,!1,null,null,null)),P=_.exports;i["a"].config.productionTip=!1,document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("table-of-contents"),e=new i["a"]({el:t,store:o["a"],components:{TheTableOfContents:P}});window.app=e})}});
//# sourceMappingURL=table_of_contents.7c6e5bce.js.map