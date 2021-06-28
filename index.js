(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["base-module"] = factory();
	else
		root["base-module"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./something */ "./dist/something/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _something) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_something).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in _exports && _exports[key] === _something[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _something[key];
      }
    });
  });
});

/***/ }),

/***/ "./dist/something/index.js":
/*!*********************************!*\
  !*** ./dist/something/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./something */ "./dist/something/something.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _something) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_something).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in _exports && _exports[key] === _something[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _something[key];
      }
    });
  });
});

/***/ }),

/***/ "./dist/something/something.js":
/*!*************************************!*\
  !*** ./dist/something/something.js ***!
  \*************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.doSomething = void 0;

  const doSomething = name => {
    return `Hello ${name}`;
  };

  _exports.doSomething = doSomething;
});

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLW1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYmFzZS1tb2R1bGUvLi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtbW9kdWxlLy4vZGlzdC9zb21ldGhpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS1tb2R1bGUvLi9kaXN0L3NvbWV0aGluZy9zb21ldGhpbmcuanMiLCJ3ZWJwYWNrOi8vYmFzZS1tb2R1bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS1tb2R1bGUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxDQUFDLE9BQVMsRUFBRSxtRUFBYSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDL0MsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLEU7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyxPQUFTLEVBQUUsdUVBQWEsQ0FBQyxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQy9DLEdBQUcsTUFBTSxZQVFOO0FBQ0gsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxFOzs7Ozs7Ozs7O0FDNUJEO0FBQ0EsTUFBTSxJQUEwQztBQUNoRCxJQUFJLGlDQUFPLENBQUMsT0FBUyxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDaEMsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCOztBQUVBO0FBQ0EsQ0FBQyxFOzs7Ozs7VUN6QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFzZS1tb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmFzZS1tb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcIi4vc29tZXRoaW5nXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcIi4vc29tZXRoaW5nXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5zb21ldGhpbmcpO1xuICAgIGdsb2JhbC5pbmRleCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF9zb21ldGhpbmcpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBPYmplY3Qua2V5cyhfc29tZXRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gICAgaWYgKGtleSBpbiBfZXhwb3J0cyAmJiBfZXhwb3J0c1trZXldID09PSBfc29tZXRoaW5nW2tleV0pIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3NvbWV0aGluZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwiLi9zb21ldGhpbmdcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwiLi9zb21ldGhpbmdcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnNvbWV0aGluZyk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cywgX3NvbWV0aGluZykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5rZXlzKF9zb21ldGhpbmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgICBpZiAoa2V5IGluIF9leHBvcnRzICYmIF9leHBvcnRzW2tleV0gPT09IF9zb21ldGhpbmdba2V5XSkgcmV0dXJuO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfc29tZXRoaW5nW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMpO1xuICAgIGdsb2JhbC5zb21ldGhpbmcgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZG9Tb21ldGhpbmcgPSB2b2lkIDA7XG5cbiAgY29uc3QgZG9Tb21ldGhpbmcgPSBuYW1lID0+IHtcbiAgICByZXR1cm4gYEhlbGxvICR7bmFtZX1gO1xuICB9O1xuXG4gIF9leHBvcnRzLmRvU29tZXRoaW5nID0gZG9Tb21ldGhpbmc7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==