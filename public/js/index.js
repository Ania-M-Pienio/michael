/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack5new/./src/style.css?");

/***/ }),

/***/ "./src/js/bars.js":
/*!************************!*\
  !*** ./src/js/bars.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n$('.ap-bars').each(function() {\r\n    const $bars = $(this);\r\n    $bars.find('.ap-bars__item').each(function() {\r\n        const $barItem = $(this);\r\n        const value = $barItem.data('value');\r\n        const percent = $barItem.data('percent');\r\n        if (value) {\r\n            $barItem.find('.bar__value').text(value);\r\n        } \r\n        if (percent) {\r\n            $barItem.find('.bar').css('width', `${percent}%`);\r\n        }\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack://webpack5new/./src/js/bars.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _bars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bars */ \"./src/js/bars.js\");\n/* harmony import */ var _bars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_assets_landscape_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/landscape-1.jpg */ \"./src/assets/landscape-1.jpg\");\n/* harmony import */ var _src_assets_landscape_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/landscape-2.jpg */ \"./src/assets/landscape-2.jpg\");\n/* harmony import */ var _src_assets_landscape_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/landscape-3.jpg */ \"./src/assets/landscape-3.jpg\");\n/* harmony import */ var _src_assets_about_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/assets/about.png */ \"./src/assets/about.png\");\n/* harmony import */ var _src_assets_tech_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/assets/tech.jpg */ \"./src/assets/tech.jpg\");\n/* harmony import */ var _src_assets_tech2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/assets/tech2.jpg */ \"./src/assets/tech2.jpg\");\n/* harmony import */ var _src_assets_cert_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/assets/cert-1.png */ \"./src/assets/cert-1.png\");\n/* harmony import */ var _src_assets_cert_2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/assets/cert-2.png */ \"./src/assets/cert-2.png\");\n/* harmony import */ var _src_assets_cert_3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/assets/cert-3.png */ \"./src/assets/cert-3.png\");\n/* harmony import */ var _src_assets_cert_4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/assets/cert-4.png */ \"./src/assets/cert-4.png\");\n/* harmony import */ var _src_assets_cert_5_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/assets/cert-5.png */ \"./src/assets/cert-5.png\");\n/* harmony import */ var _src_assets_cert_6_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/assets/cert-6.png */ \"./src/assets/cert-6.png\");\n/* harmony import */ var _src_assets_cert_7_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/assets/cert-7.png */ \"./src/assets/cert-7.png\");\n/* harmony import */ var _src_assets_experience_1_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/assets/experience-1.jpg */ \"./src/assets/experience-1.jpg\");\n/* harmony import */ var _src_assets_experience_2_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/assets/experience-2.jpg */ \"./src/assets/experience-2.jpg\");\n/* harmony import */ var _src_assets_experience_3_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../src/assets/experience-3.jpg */ \"./src/assets/experience-3.jpg\");\n/* harmony import */ var _src_assets_experience_4_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/assets/experience-4.jpg */ \"./src/assets/experience-4.jpg\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\r\n\r\n\r\n\r\n// images\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$('.my-class').addClass('inactive');\r\n\r\n$('.home-hero__slider').slick({\r\n    dots: false,\r\n    infinite: true,\r\n    arrows: false,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    // autoplay: true,\r\n    autoplaySpeed: 5000,\r\n    adaptiveHeight: true,\r\n  });\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack5new/./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\r\n$('.navbar-toggle').each( function() {\r\n    const $toggle = $(this);\r\n    const $target = $(`${$toggle.data('target')}`);\r\n    $toggle.on('click', function() {\r\n        $target.toggleClass('active');\r\n    });\r\n\r\n});\r\n\r\n$(document).on('click', '.navbar__link', function (event) {\r\n    event.preventDefault();\r\n\r\n    $('html, body').animate({\r\n        scrollTop: $(`${$(this).attr('href')}`).offset().top\r\n    }, 500);\r\n});\r\n\r\n$(document).on('click', '.begin-button', function (event) {\r\n    event.preventDefault();\r\n\r\n    const $section = $('.main section:nth-child(2)');\r\n\r\n    $('html, body').animate({\r\n        scrollTop: $section.offset().top\r\n    }, 500);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack5new/./src/js/navbar.js?");

/***/ }),

/***/ "./src/assets/about.png":
/*!******************************!*\
  !*** ./src/assets/about.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/about.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/about.png?");

/***/ }),

/***/ "./src/assets/cert-1.png":
/*!*******************************!*\
  !*** ./src/assets/cert-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-1.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-1.png?");

/***/ }),

/***/ "./src/assets/cert-2.png":
/*!*******************************!*\
  !*** ./src/assets/cert-2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-2.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-2.png?");

/***/ }),

/***/ "./src/assets/cert-3.png":
/*!*******************************!*\
  !*** ./src/assets/cert-3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-3.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-3.png?");

/***/ }),

/***/ "./src/assets/cert-4.png":
/*!*******************************!*\
  !*** ./src/assets/cert-4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-4.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-4.png?");

/***/ }),

/***/ "./src/assets/cert-5.png":
/*!*******************************!*\
  !*** ./src/assets/cert-5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-5.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-5.png?");

/***/ }),

/***/ "./src/assets/cert-6.png":
/*!*******************************!*\
  !*** ./src/assets/cert-6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-6.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-6.png?");

/***/ }),

/***/ "./src/assets/cert-7.png":
/*!*******************************!*\
  !*** ./src/assets/cert-7.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cert-7.png\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/cert-7.png?");

/***/ }),

/***/ "./src/assets/experience-1.jpg":
/*!*************************************!*\
  !*** ./src/assets/experience-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/experience-1.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/experience-1.jpg?");

/***/ }),

/***/ "./src/assets/experience-2.jpg":
/*!*************************************!*\
  !*** ./src/assets/experience-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/experience-2.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/experience-2.jpg?");

/***/ }),

/***/ "./src/assets/experience-3.jpg":
/*!*************************************!*\
  !*** ./src/assets/experience-3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/experience-3.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/experience-3.jpg?");

/***/ }),

/***/ "./src/assets/experience-4.jpg":
/*!*************************************!*\
  !*** ./src/assets/experience-4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/experience-4.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/experience-4.jpg?");

/***/ }),

/***/ "./src/assets/landscape-1.jpg":
/*!************************************!*\
  !*** ./src/assets/landscape-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/landscape-1.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/landscape-1.jpg?");

/***/ }),

/***/ "./src/assets/landscape-2.jpg":
/*!************************************!*\
  !*** ./src/assets/landscape-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/landscape-2.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/landscape-2.jpg?");

/***/ }),

/***/ "./src/assets/landscape-3.jpg":
/*!************************************!*\
  !*** ./src/assets/landscape-3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/landscape-3.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/landscape-3.jpg?");

/***/ }),

/***/ "./src/assets/tech.jpg":
/*!*****************************!*\
  !*** ./src/assets/tech.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/tech.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/tech.jpg?");

/***/ }),

/***/ "./src/assets/tech2.jpg":
/*!******************************!*\
  !*** ./src/assets/tech2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/tech2.jpg\";\n\n//# sourceURL=webpack://webpack5new/./src/assets/tech2.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack5new"] = self["webpackChunkwebpack5new"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_slick-carousel_slick_slick_js"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;