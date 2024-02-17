"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isows";
exports.ids = ["vendor-chunks/isows"];
exports.modules = {

/***/ "(ssr)/../../node_modules/isows/_cjs/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/isows/_cjs/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.WebSocket = void 0;\nconst WebSocket_ = __webpack_require__(/*! ws */ \"(ssr)/../../node_modules/ws/index.js\");\nconst utils_js_1 = __webpack_require__(/*! ./utils.js */ \"(ssr)/../../node_modules/isows/_cjs/utils.js\");\nexports.WebSocket = (()=>{\n    try {\n        return (0, utils_js_1.getNativeWebSocket)();\n    } catch  {\n        if (WebSocket_.WebSocket) return WebSocket_.WebSocket;\n        return WebSocket_;\n    }\n})(); //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2lzb3dzL19janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELGlCQUFpQixHQUFHLEtBQUs7QUFDekIsTUFBTUcsYUFBYUMsbUJBQU9BLENBQUMsZ0RBQUk7QUFDL0IsTUFBTUMsYUFBYUQsbUJBQU9BLENBQUMsZ0VBQVk7QUFDdkNKLGlCQUFpQixHQUFHLENBQUM7SUFDakIsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHSyxXQUFXQyxrQkFBa0I7SUFDNUMsRUFDQSxPQUFNO1FBQ0YsSUFBSUgsV0FBV0QsU0FBUyxFQUNwQixPQUFPQyxXQUFXRCxTQUFTO1FBQy9CLE9BQU9DO0lBQ1g7QUFDSixNQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJrbmV0LXJlYWN0Ly4uLy4uL25vZGVfbW9kdWxlcy9pc293cy9fY2pzL2luZGV4LmpzP2ViMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldlYlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IFdlYlNvY2tldF8gPSByZXF1aXJlKFwid3NcIik7XG5jb25zdCB1dGlsc19qc18xID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5leHBvcnRzLldlYlNvY2tldCA9ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICgwLCB1dGlsc19qc18xLmdldE5hdGl2ZVdlYlNvY2tldCkoKTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICBpZiAoV2ViU29ja2V0Xy5XZWJTb2NrZXQpXG4gICAgICAgICAgICByZXR1cm4gV2ViU29ja2V0Xy5XZWJTb2NrZXQ7XG4gICAgICAgIHJldHVybiBXZWJTb2NrZXRfO1xuICAgIH1cbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJXZWJTb2NrZXQiLCJXZWJTb2NrZXRfIiwicmVxdWlyZSIsInV0aWxzX2pzXzEiLCJnZXROYXRpdmVXZWJTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/isows/_cjs/index.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/isows/_cjs/utils.js":
/*!**********************************************!*\
  !*** ../../node_modules/isows/_cjs/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.getNativeWebSocket = void 0;\nfunction getNativeWebSocket() {\n    if (typeof WebSocket !== \"undefined\") return WebSocket;\n    if (typeof global.WebSocket !== \"undefined\") return global.WebSocket;\n    if (typeof window.WebSocket !== \"undefined\") return window.WebSocket;\n    if (typeof self.WebSocket !== \"undefined\") return self.WebSocket;\n    throw new Error(\"`WebSocket` is not supported in this environment\");\n}\nexports.getNativeWebSocket = getNativeWebSocket; //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2lzb3dzL19janMvdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELDBCQUEwQixHQUFHLEtBQUs7QUFDbEMsU0FBU0U7SUFDTCxJQUFJLE9BQU9DLGNBQWMsYUFDckIsT0FBT0E7SUFDWCxJQUFJLE9BQU9DLE9BQU9ELFNBQVMsS0FBSyxhQUM1QixPQUFPQyxPQUFPRCxTQUFTO0lBQzNCLElBQUksT0FBT0UsT0FBT0YsU0FBUyxLQUFLLGFBQzVCLE9BQU9FLE9BQU9GLFNBQVM7SUFDM0IsSUFBSSxPQUFPRyxLQUFLSCxTQUFTLEtBQUssYUFDMUIsT0FBT0csS0FBS0gsU0FBUztJQUN6QixNQUFNLElBQUlJLE1BQU07QUFDcEI7QUFDQVAsMEJBQTBCLEdBQUdFLG9CQUM3QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFya25ldC1yZWFjdC8uLi8uLi9ub2RlX21vZHVsZXMvaXNvd3MvX2Nqcy91dGlscy5qcz9mYzVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXROYXRpdmVXZWJTb2NrZXQgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXROYXRpdmVXZWJTb2NrZXQoKSB7XG4gICAgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBXZWJTb2NrZXQ7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gZ2xvYmFsLldlYlNvY2tldDtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5XZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiB3aW5kb3cuV2ViU29ja2V0O1xuICAgIGlmICh0eXBlb2Ygc2VsZi5XZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBzZWxmLldlYlNvY2tldDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJgV2ViU29ja2V0YCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnRcIik7XG59XG5leHBvcnRzLmdldE5hdGl2ZVdlYlNvY2tldCA9IGdldE5hdGl2ZVdlYlNvY2tldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImdldE5hdGl2ZVdlYlNvY2tldCIsIldlYlNvY2tldCIsImdsb2JhbCIsIndpbmRvdyIsInNlbGYiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/isows/_cjs/utils.js\n");

/***/ })

};
;