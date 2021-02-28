/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById(\"sidebarToggle\");\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst page = document.getElementById(\"page\");\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\nif(body.classList.contains('show-nav')){\r\n  closeSidebar();\r\n}else {\r\n  showSidebar();\r\n}\r\n});\r\n\r\n\r\nfunction showSidebar(){\r\n  let mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click',closeSidebar);\r\n    page.appendChild(mask);\r\n\r\n    body.classList.add('show-nav')\r\n}\r\nfunction closeSidebar() {\r\n  body.classList.remove('show-nav')\r\ndocument.querySelector('.page__mask').remove();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\r\n * perfect-scrollbar v1.1.0\r\n * (c) 2017 Hyunje Jun\r\n * @license MIT\r\n */\r\n!function(t,e){ true?module.exports=e():undefined}(this,function(){\"use strict\";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var n=e[i];\"number\"==typeof n&&(n+=\"px\"),t.style[i]=n}return t}function i(t){var e=document.createElement(\"div\");return e.className=t,e}function n(t,e){if(!v)throw new Error(\"No element matching method supported\");return v.call(t,e)}function r(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function l(t,e){return Array.prototype.filter.call(t.children,function(t){return n(t,e)})}function o(t,e){var i=t.element.classList,n=m.state.scrolling(e);i.contains(n)?clearTimeout(w[e]):i.add(n)}function s(t,e){w[e]=setTimeout(function(){return t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){o(t,e),s(t,e)}function c(t){if(\"function\"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent(\"CustomEvent\");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,n){var r=i[0],l=i[1],o=i[2],s=i[3],h=i[4],u=i[5],d=t.element,p=!1;t.reach[s]=null,e<=0&&(e=0,t.reach[s]=\"start\"),e>=t[r]-t[l]&&((e=t[r]-t[l])-d[o]<=2&&(p=!0),t.reach[s]=\"end\");var f=d[o]-e;f&&(d.dispatchEvent(c(\"ps-scroll-\"+s)),f>0?d.dispatchEvent(c(\"ps-scroll-\"+h)):d.dispatchEvent(c(\"ps-scroll-\"+u)),p||(d[o]=e),t.reach[s]&&d.dispatchEvent(c(\"ps-\"+s+\"-reach-\"+t.reach[s])),n&&a(t,s))}function u(t){return parseInt(t,10)||0}function d(t){return n(t,\"input,[contenteditable]\")||n(t,\"select,[contenteditable]\")||n(t,\"textarea,[contenteditable]\")||n(t,\"button,[contenteditable]\")}function p(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function f(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var n={width:i.railXWidth};i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:n.left=t.scrollLeft,i.isScrollbarXUsingBottom?n.bottom=i.scrollbarXBottom-t.scrollTop:n.top=i.scrollbarXTop+t.scrollTop,e(i.scrollbarXRail,n);var r={top:t.scrollTop,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?r.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:r.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:r.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,r),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){y(t,p,g+m*(e[a]-v),!1),o(t,f),L(t),e.stopPropagation(),e.preventDefault()}function n(){s(t,f),t.event.unbind(t.ownerDocument,\"mousemove\",i)}var r=e[0],l=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],p=e[7],f=e[8],b=t.element,g=null,v=null,m=null;t.event.bind(t[h],\"mousedown\",function(e){g=b[d],v=e[a],m=(t[l]-t[r])/(t[c]-t[u]),t.event.bind(t.ownerDocument,\"mousemove\",i),t.event.once(t.ownerDocument,\"mouseup\",n),e.stopPropagation(),e.preventDefault()})}var v=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector,m={main:\"ps\",element:{thumb:function(t){return\"ps__thumb-\"+t},rail:function(t){return\"ps__rail-\"+t},consuming:\"ps__child--consume\"},state:{focus:\"ps--focus\",active:function(t){return\"ps--active-\"+t},scrolling:function(t){return\"ps--scrolling-\"+t}}},w={x:null,y:null},Y=function(t){this.element=t,this.handlers={}},X={isEmpty:{configurable:!0}};Y.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},Y.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)})},Y.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},X.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(Y.prototype,X);var W=function(){this.eventElements=[]};W.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new Y(t),this.eventElements.push(e)),e},W.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},W.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},W.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},W.prototype.once=function(t,e,i){var n=this.eventElement(t),r=function(t){n.unbind(e,r),i(t)};n.bind(e,r)};var y=function(t,e,i,n){void 0===n&&(n=!0);var r;if(\"top\"===e)r=[\"contentHeight\",\"containerHeight\",\"scrollTop\",\"y\",\"up\",\"down\"];else{if(\"left\"!==e)throw new Error(\"A proper axis should be provided\");r=[\"contentWidth\",\"containerWidth\",\"scrollLeft\",\"x\",\"left\",\"right\"]}h(t,i,r,n)},R={isWebKit:document&&\"WebkitAppearance\"in document.documentElement.style,supportsTouch:window&&(\"ontouchstart\"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:navigator&&navigator.msMaxTouchPoints},L=function(t){var e=t.element;t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(l(e,m.element.rail(\"x\")).forEach(function(t){return r(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(l(e,m.element.rail(\"y\")).forEach(function(t){return r(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=f(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=f(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(e.scrollTop*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active(\"x\")):(e.classList.remove(m.state.active(\"x\")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,y(t,\"left\",0)),t.scrollbarYActive?e.classList.add(m.state.active(\"y\")):(e.classList.remove(m.state.active(\"y\")),t.scrollbarYHeight=0,t.scrollbarYTop=0,y(t,\"top\",0))},H={\"click-rail\":function(t){var e=t.element;t.event.bind(t.scrollbarY,\"mousedown\",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,\"mousedown\",function(i){var n=i.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;y(t,\"top\",e.scrollTop+n*t.containerHeight),L(t),i.stopPropagation()}),t.event.bind(t.scrollbarX,\"mousedown\",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,\"mousedown\",function(i){var n=i.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;y(t,\"left\",e.scrollLeft+n*t.containerWidth),L(t),i.stopPropagation()})},\"drag-thumb\":function(t){g(t,[\"containerWidth\",\"contentWidth\",\"pageX\",\"railXWidth\",\"scrollbarX\",\"scrollbarXWidth\",\"scrollLeft\",\"left\",\"x\"]),g(t,[\"containerHeight\",\"contentHeight\",\"pageY\",\"railYHeight\",\"scrollbarY\",\"scrollbarYHeight\",\"scrollTop\",\"top\",\"y\"])},keyboard:function(t){function e(e,n){var r=i.scrollTop;if(0===e){if(!t.scrollbarYActive)return!1;if(0===r&&n>0||r>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var l=i.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===l&&e<0||l>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,r=function(){return n(i,\":hover\")},l=function(){return n(t.scrollbarX,\":focus\")||n(t.scrollbarY,\":focus\")};t.event.bind(t.ownerDocument,\"keydown\",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(r()||l())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if(\"IFRAME\"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(d(o))return}var s=0,a=0;switch(n.which){case 37:s=n.metaKey?-t.contentWidth:n.altKey?-t.containerWidth:-30;break;case 38:a=n.metaKey?t.contentHeight:n.altKey?t.containerHeight:30;break;case 39:s=n.metaKey?t.contentWidth:n.altKey?t.containerWidth:30;break;case 40:a=n.metaKey?-t.contentHeight:n.altKey?-t.containerHeight:-30;break;case 32:a=n.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(y(t,\"top\",i.scrollTop-a),y(t,\"left\",i.scrollLeft+s),L(t),e(s,a)&&n.preventDefault())}})},wheel:function(e){function i(t,i){var n=o.scrollTop;if(0===t){if(!e.scrollbarYActive)return!1;if(0===n&&i>0||n>=e.contentHeight-e.containerHeight&&i<0)return!e.settings.wheelPropagation}var r=o.scrollLeft;if(0===i){if(!e.scrollbarXActive)return!1;if(0===r&&t<0||r>=e.contentWidth-e.containerWidth&&t>0)return!e.settings.wheelPropagation}return!0}function n(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function r(e,i,n){if(!R.isWebKit&&o.querySelector(\"select:focus\"))return!0;if(!o.contains(e))return!1;for(var r=e;r&&r!==o;){if(r.classList.contains(m.element.consuming))return!0;var l=t(r);if([l.overflow,l.overflowX,l.overflowY].join(\"\").match(/(scroll|auto)/)){var s=r.scrollHeight-r.clientHeight;if(s>0&&!(0===r.scrollTop&&n>0||r.scrollTop===s&&n<0))return!0;var a=r.scrollLeft-r.clientWidth;if(a>0&&!(0===r.scrollLeft&&i<0||r.scrollLeft===a&&i>0))return!0}r=r.parentNode}return!1}function l(t){var l=n(t),s=l[0],a=l[1];if(!r(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?y(e,\"top\",o.scrollTop-a*e.settings.wheelSpeed):y(e,\"top\",o.scrollTop+s*e.settings.wheelSpeed),c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?y(e,\"left\",o.scrollLeft+s*e.settings.wheelSpeed):y(e,\"left\",o.scrollLeft-a*e.settings.wheelSpeed),c=!0):(y(e,\"top\",o.scrollTop-a*e.settings.wheelSpeed),y(e,\"left\",o.scrollLeft+s*e.settings.wheelSpeed)),L(e),(c=c||i(s,a))&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,\"wheel\",l):void 0!==window.onmousewheel&&e.event.bind(o,\"mousewheel\",l)},touch:function(t){function e(e,i){var n=h.scrollTop,r=h.scrollLeft,l=Math.abs(e),o=Math.abs(i);if(o>l){if(i<0&&n===t.contentHeight-t.containerHeight||i>0&&0===n)return{stop:!t.settings.swipePropagation,prevent:0===window.scrollY}}else if(l>o&&(e<0&&r===t.contentWidth-t.containerWidth||e>0&&0===r))return{stop:!t.settings.swipePropagation,prevent:!0};return{stop:!0,prevent:!0}}function i(e,i){y(t,\"top\",h.scrollTop-i),y(t,\"left\",h.scrollLeft-e),L(t)}function n(){b=!0}function r(){b=!1}function l(t){return t.targetTouches?t.targetTouches[0]:t}function o(t){return!(t.pointerType&&\"pen\"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||\"mouse\"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function s(t){if(o(t)){g=!0;var e=l(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==f&&clearInterval(f),t.stopPropagation()}}function a(n){if(!g&&t.settings.swipePropagation&&s(n),!b&&g&&o(n)){var r=l(n),a={pageX:r.pageX,pageY:r.pageY},c=a.pageX-u.pageX,h=a.pageY-u.pageY;i(c,h),u=a;var f=(new Date).getTime(),v=f-d;v>0&&(p.x=c/v,p.y=h/v,d=f);var m=e(c,h),w=m.stop,Y=m.prevent;w&&n.stopPropagation(),Y&&n.preventDefault()}}function c(){!b&&g&&(g=!1,t.settings.swipeEasing&&(clearInterval(f),f=setInterval(function(){t.isInitialized?clearInterval(f):p.x||p.y?Math.abs(p.x)<.01&&Math.abs(p.y)<.01?clearInterval(f):(i(30*p.x,30*p.y),p.x*=.8,p.y*=.8):clearInterval(f)},10)))}if(R.supportsTouch||R.supportsIePointer){var h=t.element,u={},d=0,p={},f=null,b=!1,g=!1;R.supportsTouch?(t.event.bind(window,\"touchstart\",n),t.event.bind(window,\"touchend\",r),t.event.bind(h,\"touchstart\",s),t.event.bind(h,\"touchmove\",a),t.event.bind(h,\"touchend\",c)):R.supportsIePointer&&(window.PointerEvent?(t.event.bind(window,\"pointerdown\",n),t.event.bind(window,\"pointerup\",r),t.event.bind(h,\"pointerdown\",s),t.event.bind(h,\"pointermove\",a),t.event.bind(h,\"pointerup\",c)):window.MSPointerEvent&&(t.event.bind(window,\"MSPointerDown\",n),t.event.bind(window,\"MSPointerUp\",r),t.event.bind(h,\"MSPointerDown\",s),t.event.bind(h,\"MSPointerMove\",a),t.event.bind(h,\"MSPointerUp\",c)))}}},T=function(n,r){var l=this;if(void 0===r&&(r={}),\"string\"==typeof n&&(n=document.querySelector(n)),!n||!n.nodeName)throw new Error(\"no element is specified to initialize PerfectScrollbar\");this.element=n,n.classList.add(m.main),this.settings={handlers:[\"click-rail\",\"drag-thumb\",\"keyboard\",\"wheel\",\"touch\"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1};for(var o in r)l.settings[o]=r[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return n.classList.add(m.state.focus)},a=function(){return n.classList.remove(m.state.focus)};this.isRtl=\"rtl\"===t(n).direction,this.isNegativeScroll=function(){var t=n.scrollLeft,e=null;return n.scrollLeft=-1,e=n.scrollLeft<0,n.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?n.scrollWidth-n.clientWidth:0,this.event=new W,this.ownerDocument=n.ownerDocument||document,this.scrollbarXRail=i(m.element.rail(\"x\")),n.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb(\"x\")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute(\"tabindex\",0),this.event.bind(this.scrollbarX,\"focus\",s),this.event.bind(this.scrollbarX,\"blur\",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:\"block\"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:\"\"}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail(\"y\")),n.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb(\"y\")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute(\"tabindex\",0),this.event.bind(this.scrollbarY,\"focus\",s),this.event.bind(this.scrollbarY,\"blur\",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?p(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:\"block\"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:\"\"}),this.railYHeight=null,this.railYRatio=null,this.reach={x:n.scrollLeft<=0?\"start\":n.scrollLeft>=this.contentWidth-this.containerWidth?\"end\":null,y:n.scrollTop<=0?\"start\":n.scrollTop>=this.contentHeight-this.containerHeight?\"end\":null},this.settings.handlers.forEach(function(t){return H[t](l)}),this.event.bind(this.element,\"scroll\",function(){return L(l)}),L(this)},E={isInitialized:{configurable:!0}};return E.isInitialized.get=function(){return this.element.classList.contains(m.main)},T.prototype.update=function(){this.isInitialized&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:\"block\"}),e(this.scrollbarYRail,{display:\"block\"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:\"none\"}),e(this.scrollbarYRail,{display:\"none\"}),L(this),e(this.scrollbarXRail,{display:\"\"}),e(this.scrollbarYRail,{display:\"\"}))},T.prototype.destroy=function(){this.isInitialized&&(this.event.unbindAll(),r(this.scrollbarX),r(this.scrollbarY),r(this.scrollbarXRail),r(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null)},T.prototype.removePsClasses=function(){this.element.className=this.element.className.split(\" \").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(\" \")},Object.defineProperties(T.prototype,E),T});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/option.js":
/*!*********************************!*\
  !*** ./src/assets/js/option.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/option.js?");

/***/ }),

/***/ "./src/assets/js/right-form-switch.js":
/*!********************************************!*\
  !*** ./src/assets/js/right-form-switch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// var chbox;\r\n// chbox=document.getElementById('switch');\r\n// \tif (chbox.checked) {\r\n//     document.getElementsByClassName('selector-case-existing')[0].style.color = \"green\";\r\n// \t}\r\n// \telse {\r\n//     document.getElementsByClassName('selector-case-existing')[0].style.color = \"red\";\r\n// \t}\r\n\r\n// switch.addEventListener('click', switch );\r\n// var switch_case = function(){\r\n//   alert(\"ку\");\r\n// }\r\n//\r\n// switch.addEventListener('click', switch_case());\r\n\n\n//# sourceURL=webpack:///./src/assets/js/right-form-switch.js?");

/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar searchBox = document.querySelectorAll('.search-box input[type=\"text\"] + span');\r\n\r\nsearchBox.forEach((elm) => {\r\n\telm.addEventListener('click', () => {\r\n\t\telm.previousElementSibling.value = '';\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/search.js?");

/***/ }),

/***/ "./src/assets/js/t_switch.js":
/*!***********************************!*\
  !*** ./src/assets/js/t_switch.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const t_switch = document.getElementById(\"t_switch\");\r\nvar checkBox = document.getElementById(\"switch\");\r\n\r\nvar block_case_new = document.getElementById(\"new-case\");\r\nvar block_case_exsiting = document.getElementById(\"existing-case\");\r\n\r\nfunction check() {\r\n  checkBox.checked = true;\r\n  block_case_new.style.display = \"none\";\r\n      block_case_exsiting.style.display = \"block\";\r\n}\r\n\r\nfunction uncheck() {\r\n    checkBox.checked = false;\r\n    block_case_new.style.display = \"block\";\r\n    block_case_exsiting.style.display = \"none\";\r\n}\r\n\r\nt_switch.addEventListener('click', event => {\r\n  if(checkBox.checked == true){\r\n     uncheck()\r\n  }else {\r\n    check();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/t_switch.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/burger.js ./src/assets/js/file2.js ./src/assets/js/option.js ./src/assets/js/right-form-switch.js ./src/assets/js/search.js ./src/assets/js/t_switch.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\option.js */\"./src/assets/js/option.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\right-form-switch.js */\"./src/assets/js/right-form-switch.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\search.js */\"./src/assets/js/search.js\");\nmodule.exports = __webpack_require__(/*! D:\\РОСТИК ВСЕ\\arm_bg\\src\\assets\\js\\t_switch.js */\"./src/assets/js/t_switch.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/burger.js_./src/assets/js/file2.js_./src/assets/js/option.js_./src/assets/js/right-form-switch.js_./src/assets/js/search.js_./src/assets/js/t_switch.js?");

/***/ })

/******/ });