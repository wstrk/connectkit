"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/inherits";
exports.ids = ["vendor-chunks/inherits"];
exports.modules = {

/***/ "(ssr)/../../node_modules/inherits/inherits.js":
/*!***********************************************!*\
  !*** ../../node_modules/inherits/inherits.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    var util = __webpack_require__(/*! util */ \"util\");\n    /* istanbul ignore next */ if (typeof util.inherits !== \"function\") throw \"\";\n    module.exports = util.inherits;\n} catch (e) {\n    /* istanbul ignore next */ module.exports = __webpack_require__(/*! ./inherits_browser.js */ \"(ssr)/../../node_modules/inherits/inherits_browser.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJO0lBQ0YsSUFBSUEsT0FBT0MsbUJBQU9BLENBQUM7SUFDbkIsd0JBQXdCLEdBQ3hCLElBQUksT0FBT0QsS0FBS0UsUUFBUSxLQUFLLFlBQVksTUFBTTtJQUMvQ0MsT0FBT0MsT0FBTyxHQUFHSixLQUFLRSxRQUFRO0FBQ2hDLEVBQUUsT0FBT0csR0FBRztJQUNWLHdCQUF3QixHQUN4QkYsMEhBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmtuZXQtcmVhY3QvLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzP2E2YTIiXSwic291cmNlc0NvbnRlbnQiOlsidHJ5IHtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0eXBlb2YgdXRpbC5pbmhlcml0cyAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgJyc7XG4gIG1vZHVsZS5leHBvcnRzID0gdXRpbC5pbmhlcml0cztcbn0gY2F0Y2ggKGUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luaGVyaXRzX2Jyb3dzZXIuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImluaGVyaXRzIiwibW9kdWxlIiwiZXhwb3J0cyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/inherits/inherits.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/inherits/inherits_browser.js":
/*!*******************************************************!*\
  !*** ../../node_modules/inherits/inherits_browser.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("\nif (typeof Object.create === \"function\") {\n    // implementation from standard node.js 'util' module\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            ctor.prototype = Object.create(superCtor.prototype, {\n                constructor: {\n                    value: ctor,\n                    enumerable: false,\n                    writable: true,\n                    configurable: true\n                }\n            });\n        }\n    };\n} else {\n    // old school shim for old browsers\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            var TempCtor = function() {};\n            TempCtor.prototype = superCtor.prototype;\n            ctor.prototype = new TempCtor();\n            ctor.prototype.constructor = ctor;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksT0FBT0EsT0FBT0MsTUFBTSxLQUFLLFlBQVk7SUFDdkMscURBQXFEO0lBQ3JEQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTO1FBQ2hELElBQUlBLFdBQVc7WUFDYkQsS0FBS0UsTUFBTSxHQUFHRDtZQUNkRCxLQUFLRyxTQUFTLEdBQUdSLE9BQU9DLE1BQU0sQ0FBQ0ssVUFBVUUsU0FBUyxFQUFFO2dCQUNsREMsYUFBYTtvQkFDWEMsT0FBT0w7b0JBQ1BNLFlBQVk7b0JBQ1pDLFVBQVU7b0JBQ1ZDLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsT0FBTztJQUNMLG1DQUFtQztJQUNuQ1gsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFNBQVNDLElBQUksRUFBRUMsU0FBUztRQUNoRCxJQUFJQSxXQUFXO1lBQ2JELEtBQUtFLE1BQU0sR0FBR0Q7WUFDZCxJQUFJUSxXQUFXLFlBQWE7WUFDNUJBLFNBQVNOLFNBQVMsR0FBR0YsVUFBVUUsU0FBUztZQUN4Q0gsS0FBS0csU0FBUyxHQUFHLElBQUlNO1lBQ3JCVCxLQUFLRyxTQUFTLENBQUNDLFdBQVcsR0FBR0o7UUFDL0I7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmtuZXQtcmVhY3QvLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanM/OTMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaGVyaXRzIiwiY3RvciIsInN1cGVyQ3RvciIsInN1cGVyXyIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJUZW1wQ3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/inherits/inherits_browser.js\n");

/***/ })

};
;