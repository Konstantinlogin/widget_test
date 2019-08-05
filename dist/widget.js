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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 626);
/******/ })
/************************************************************************/
/******/ ({

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(627);

var MAIN_ID = document.currentScript.getAttribute('data-ready4-travel-search-id');
var FRAME_ID = document.currentScript.getAttribute('data-ready4-travel-search-frame-id');
var FRAME = document.getElementById(FRAME_ID);

function resizeIframe() {
  FRAME.height = '0px';
  FRAME.height = FRAME.contentWindow.document.body.scrollHeight + 16 + 'px';
}

;

function onWindowResise(evt) {
  resizeIframe();
}

;

FRAME.onload = function () {
  resizeIframe();
};

document.addEventListener('drodown_changed_' + ('' + MAIN_ID), function (e) {
  setTimeout(function () {
    resizeIframe();
  }, 20);
}, false);
window.addEventListener('resize', onWindowResise);

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (document) {
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script');

  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function get() {
        try {
          throw new Error();
        } catch (err) {
          var i,
              res = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(err.stack) || [false])[1];

          for (i in scripts) {
            if (scripts[i].src == res || scripts[i].readyState == "interactive") {
              return scripts[i];
            }
          }

          return null;
        }
      }
    });
  }
}(document);

/***/ })

/******/ });