"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8arrays";
exports.ids = ["vendor-chunks/uint8arrays"];
exports.modules = {

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/alloc.js":
/*!*******************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/alloc.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alloc: () => (/* binding */ alloc),\n/* harmony export */   allocUnsafe: () => (/* binding */ allocUnsafe)\n/* harmony export */ });\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\nfunction alloc(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.alloc(size));\n    }\n    return new Uint8Array(size);\n}\nfunction allocUnsafe(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.allocUnsafe(size));\n    }\n    return new Uint8Array(size);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvYWxsb2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ2hELFNBQVNDLE1BQU1DLE9BQU8sQ0FBQztJQUM1QixJQUFJQyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDSCxLQUFLLElBQUksTUFBTTtRQUNoRSxPQUFPRCxvRUFBWUEsQ0FBQ0csV0FBV0MsTUFBTSxDQUFDSCxLQUFLLENBQUNDO0lBQzlDO0lBQ0EsT0FBTyxJQUFJRyxXQUFXSDtBQUN4QjtBQUNPLFNBQVNJLFlBQVlKLE9BQU8sQ0FBQztJQUNsQyxJQUFJQyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDRSxXQUFXLElBQUksTUFBTTtRQUN0RSxPQUFPTixvRUFBWUEsQ0FBQ0csV0FBV0MsTUFBTSxDQUFDRSxXQUFXLENBQUNKO0lBQ3BEO0lBQ0EsT0FBTyxJQUFJRyxXQUFXSDtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYS8uLi8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9hbGxvYy5qcz82Y2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzVWludDhBcnJheSB9IGZyb20gJy4vdXRpbC9hcy11aW50OGFycmF5LmpzJztcbmV4cG9ydCBmdW5jdGlvbiBhbGxvYyhzaXplID0gMCkge1xuICBpZiAoZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvYyAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFzVWludDhBcnJheShnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvYyhzaXplKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jVW5zYWZlKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jVW5zYWZlICE9IG51bGwpIHtcbiAgICByZXR1cm4gYXNVaW50OEFycmF5KGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jVW5zYWZlKHNpemUpKTtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG59Il0sIm5hbWVzIjpbImFzVWludDhBcnJheSIsImFsbG9jIiwic2l6ZSIsImdsb2JhbFRoaXMiLCJCdWZmZXIiLCJVaW50OEFycmF5IiwiYWxsb2NVbnNhZmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/alloc.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/compare.js":
/*!*********************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/compare.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare)\n/* harmony export */ });\nfunction compare(a, b) {\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] < b[i]) {\n            return -1;\n        }\n        if (a[i] > b[i]) {\n            return 1;\n        }\n    }\n    if (a.byteLength > b.byteLength) {\n        return 1;\n    }\n    if (a.byteLength < b.byteLength) {\n        return -1;\n    }\n    return 0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsUUFBUUMsQ0FBQyxFQUFFQyxDQUFDO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixFQUFFRyxVQUFVLEVBQUVELElBQUs7UUFDckMsSUFBSUYsQ0FBQyxDQUFDRSxFQUFFLEdBQUdELENBQUMsQ0FBQ0MsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDO1FBQ1Y7UUFDQSxJQUFJRixDQUFDLENBQUNFLEVBQUUsR0FBR0QsQ0FBQyxDQUFDQyxFQUFFLEVBQUU7WUFDZixPQUFPO1FBQ1Q7SUFDRjtJQUNBLElBQUlGLEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU87SUFDVDtJQUNBLElBQUlILEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU8sQ0FBQztJQUNWO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NhLy4uLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2NvbXBhcmUuanM/ODUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSA8IGJbaV0pIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFbaV0gPiBiW2ldKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGEuYnl0ZUxlbmd0aCA+IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggPCBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIDA7XG59Il0sIm5hbWVzIjpbImNvbXBhcmUiLCJhIiwiYiIsImkiLCJieXRlTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/compare.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/concat.js":
/*!********************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/concat.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concat: () => (/* binding */ concat)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/alloc.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction concat(arrays, length) {\n    if (!length) {\n        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);\n    }\n    const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(length);\n    let offset = 0;\n    for (const arr of arrays){\n        output.set(arr, offset);\n        offset += arr.length;\n    }\n    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(output);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29uY2F0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNjO0FBQ2hELFNBQVNFLE9BQU9DLE1BQU0sRUFBRUMsTUFBTTtJQUNuQyxJQUFJLENBQUNBLFFBQVE7UUFDWEEsU0FBU0QsT0FBT0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLEtBQUtILE1BQU0sRUFBRTtJQUMzRDtJQUNBLE1BQU1JLFNBQVNSLHNEQUFXQSxDQUFDSTtJQUMzQixJQUFJSyxTQUFTO0lBQ2IsS0FBSyxNQUFNQyxPQUFPUCxPQUFRO1FBQ3hCSyxPQUFPRyxHQUFHLENBQUNELEtBQUtEO1FBQ2hCQSxVQUFVQyxJQUFJTixNQUFNO0lBQ3RCO0lBQ0EsT0FBT0gsb0VBQVlBLENBQUNPO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NhLy4uLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2NvbmNhdC5qcz8yMmU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbG9jVW5zYWZlIH0gZnJvbSAnLi9hbGxvYy5qcyc7XG5pbXBvcnQgeyBhc1VpbnQ4QXJyYXkgfSBmcm9tICcuL3V0aWwvYXMtdWludDhhcnJheS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5cywgbGVuZ3RoKSB7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gYXJyYXlzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLmxlbmd0aCwgMCk7XG4gIH1cbiAgY29uc3Qgb3V0cHV0ID0gYWxsb2NVbnNhZmUobGVuZ3RoKTtcbiAgbGV0IG9mZnNldCA9IDA7XG4gIGZvciAoY29uc3QgYXJyIG9mIGFycmF5cykge1xuICAgIG91dHB1dC5zZXQoYXJyLCBvZmZzZXQpO1xuICAgIG9mZnNldCArPSBhcnIubGVuZ3RoO1xuICB9XG4gIHJldHVybiBhc1VpbnQ4QXJyYXkob3V0cHV0KTtcbn0iXSwibmFtZXMiOlsiYWxsb2NVbnNhZmUiLCJhc1VpbnQ4QXJyYXkiLCJjb25jYXQiLCJhcnJheXMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwib3V0cHV0Iiwib2Zmc2V0IiwiYXJyIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/concat.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/equals.js":
/*!********************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/equals.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   equals: () => (/* binding */ equals)\n/* harmony export */ });\nfunction equals(a, b) {\n    if (a === b) {\n        return true;\n    }\n    if (a.byteLength !== b.byteLength) {\n        return false;\n    }\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] !== b[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZXF1YWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxPQUFPQyxDQUFDLEVBQUVDLENBQUM7SUFDekIsSUFBSUQsTUFBTUMsR0FBRztRQUNYLE9BQU87SUFDVDtJQUNBLElBQUlELEVBQUVFLFVBQVUsS0FBS0QsRUFBRUMsVUFBVSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUNBLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxFQUFFRSxVQUFVLEVBQUVDLElBQUs7UUFDckMsSUFBSUgsQ0FBQyxDQUFDRyxFQUFFLEtBQUtGLENBQUMsQ0FBQ0UsRUFBRSxFQUFFO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NhLy4uLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2VxdWFscy5qcz9mYThkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59Il0sIm5hbWVzIjpbImVxdWFscyIsImEiLCJiIiwiYnl0ZUxlbmd0aCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/equals.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/from-string.js":
/*!*************************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/from-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/bases.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction fromString(string, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(globalThis.Buffer.from(string, \"utf-8\"));\n    }\n    return base.decoder.decode(`${base.prefix}${string}`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZnJvbS1zdHJpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBQ21CO0FBQ2hELFNBQVNFLFdBQVdDLE1BQU0sRUFBRUMsV0FBVyxNQUFNO0lBQ2xELE1BQU1DLE9BQU9MLHNEQUFLLENBQUNJLFNBQVM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUdGLFNBQVUsQ0FBQyxDQUFDO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDQSxhQUFhLFVBQVVBLGFBQWEsT0FBTSxLQUFNRyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDQyxJQUFJLElBQUksTUFBTTtRQUNoSCxPQUFPUixvRUFBWUEsQ0FBQ00sV0FBV0MsTUFBTSxDQUFDQyxJQUFJLENBQUNOLFFBQVE7SUFDckQ7SUFDQSxPQUFPRSxLQUFLSyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUdOLEtBQUtPLE1BQU0sQ0FBRSxFQUFHVCxPQUFRLENBQUM7QUFDMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2EvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZnJvbS1zdHJpbmcuanM/NzdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZXMgZnJvbSAnLi91dGlsL2Jhc2VzLmpzJztcbmltcG9ydCB7IGFzVWludDhBcnJheSB9IGZyb20gJy4vdXRpbC9hcy11aW50OGFycmF5LmpzJztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nKHN0cmluZywgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3QgYmFzZSA9IGJhc2VzW2VuY29kaW5nXTtcbiAgaWYgKCFiYXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBlbmNvZGluZyBcIiR7IGVuY29kaW5nIH1cImApO1xuICB9XG4gIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi04JykgJiYgZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tICE9IG51bGwpIHtcbiAgICByZXR1cm4gYXNVaW50OEFycmF5KGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oc3RyaW5nLCAndXRmLTgnKSk7XG4gIH1cbiAgcmV0dXJuIGJhc2UuZGVjb2Rlci5kZWNvZGUoYCR7IGJhc2UucHJlZml4IH0keyBzdHJpbmcgfWApO1xufSJdLCJuYW1lcyI6WyJiYXNlcyIsImFzVWludDhBcnJheSIsImZyb21TdHJpbmciLCJzdHJpbmciLCJlbmNvZGluZyIsImJhc2UiLCJFcnJvciIsImdsb2JhbFRoaXMiLCJCdWZmZXIiLCJmcm9tIiwiZGVjb2RlciIsImRlY29kZSIsInByZWZpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/from-string.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/index.js":
/*!*******************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* reexport safe */ _compare_js__WEBPACK_IMPORTED_MODULE_0__.compare),\n/* harmony export */   concat: () => (/* reexport safe */ _concat_js__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   equals: () => (/* reexport safe */ _equals_js__WEBPACK_IMPORTED_MODULE_2__.equals),\n/* harmony export */   fromString: () => (/* reexport safe */ _from_string_js__WEBPACK_IMPORTED_MODULE_3__.fromString),\n/* harmony export */   toString: () => (/* reexport safe */ _to_string_js__WEBPACK_IMPORTED_MODULE_4__.toString),\n/* harmony export */   xor: () => (/* reexport safe */ _xor_js__WEBPACK_IMPORTED_MODULE_5__.xor)\n/* harmony export */ });\n/* harmony import */ var _compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/compare.js\");\n/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/equals.js\");\n/* harmony import */ var _from_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-string.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-string.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var _xor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xor.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/xor.js\");\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDQTtBQUNTO0FBQ0o7QUFDWDtBQVE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYS8uLi8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9pbmRleC5qcz83MjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICcuL2NvbXBhcmUuanMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9jb25jYXQuanMnO1xuaW1wb3J0IHsgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMuanMnO1xuaW1wb3J0IHsgZnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcuanMnO1xuaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tICcuL3RvLXN0cmluZy5qcyc7XG5pbXBvcnQgeyB4b3IgfSBmcm9tICcuL3hvci5qcyc7XG5leHBvcnQge1xuICBjb21wYXJlLFxuICBjb25jYXQsXG4gIGVxdWFscyxcbiAgZnJvbVN0cmluZyxcbiAgdG9TdHJpbmcsXG4gIHhvclxufTsiXSwibmFtZXMiOlsiY29tcGFyZSIsImNvbmNhdCIsImVxdWFscyIsImZyb21TdHJpbmciLCJ0b1N0cmluZyIsInhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/index.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/to-string.js":
/*!***********************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction toString(array, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString(\"utf8\");\n    }\n    return base.encoder.encode(array).substring(1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBQzdCLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsV0FBVyxNQUFNO0lBQy9DLE1BQU1DLE9BQU9KLHNEQUFLLENBQUNHLFNBQVM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUdGLFNBQVUsQ0FBQyxDQUFDO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDQSxhQUFhLFVBQVVBLGFBQWEsT0FBTSxLQUFNRyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDQyxJQUFJLElBQUksTUFBTTtRQUNoSCxPQUFPRixXQUFXQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sTUFBTU8sTUFBTSxFQUFFUCxNQUFNUSxVQUFVLEVBQUVSLE1BQU1TLFVBQVUsRUFBRVYsUUFBUSxDQUFDO0lBQzNGO0lBQ0EsT0FBT0csS0FBS1EsT0FBTyxDQUFDQyxNQUFNLENBQUNYLE9BQU9ZLFNBQVMsQ0FBQztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYS8uLi8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy90by1zdHJpbmcuanM/MzVkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZXMgZnJvbSAnLi91dGlsL2Jhc2VzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhhcnJheSwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3QgYmFzZSA9IGJhc2VzW2VuY29kaW5nXTtcbiAgaWYgKCFiYXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBlbmNvZGluZyBcIiR7IGVuY29kaW5nIH1cImApO1xuICB9XG4gIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi04JykgJiYgZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbShhcnJheS5idWZmZXIsIGFycmF5LmJ5dGVPZmZzZXQsIGFycmF5LmJ5dGVMZW5ndGgpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gIH1cbiAgcmV0dXJuIGJhc2UuZW5jb2Rlci5lbmNvZGUoYXJyYXkpLnN1YnN0cmluZygxKTtcbn0iXSwibmFtZXMiOlsiYmFzZXMiLCJ0b1N0cmluZyIsImFycmF5IiwiZW5jb2RpbmciLCJiYXNlIiwiRXJyb3IiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiZnJvbSIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiZW5jb2RlciIsImVuY29kZSIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/to-string.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js":
/*!********************************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/util/as-uint8array.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asUint8Array: () => (/* binding */ asUint8Array)\n/* harmony export */ });\nfunction asUint8Array(buf) {\n    if (globalThis.Buffer != null) {\n        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);\n    }\n    return buf;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9hcy11aW50OGFycmF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxhQUFhQyxHQUFHO0lBQzlCLElBQUlDLFdBQVdDLE1BQU0sSUFBSSxNQUFNO1FBQzdCLE9BQU8sSUFBSUMsV0FBV0gsSUFBSUksTUFBTSxFQUFFSixJQUFJSyxVQUFVLEVBQUVMLElBQUlNLFVBQVU7SUFDbEU7SUFDQSxPQUFPTjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NhLy4uLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL3V0aWwvYXMtdWludDhhcnJheS5qcz8xNmFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhc1VpbnQ4QXJyYXkoYnVmKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zi5idWZmZXIsIGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZUxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn0iXSwibmFtZXMiOlsiYXNVaW50OEFycmF5IiwiYnVmIiwiZ2xvYmFsVGhpcyIsIkJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/util/bases.js":
/*!************************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/util/bases.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ \"(ssr)/../../node_modules/multiformats/esm/src/basics.js\");\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alloc.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/alloc.js\");\n\n\nfunction createCodec(name, prefix, encode, decode) {\n    return {\n        name,\n        prefix,\n        encoder: {\n            name,\n            prefix,\n            encode\n        },\n        decoder: {\n            decode\n        }\n    };\n}\nconst string = createCodec(\"utf8\", \"u\", (buf)=>{\n    const decoder = new TextDecoder(\"utf8\");\n    return \"u\" + decoder.decode(buf);\n}, (str)=>{\n    const encoder = new TextEncoder();\n    return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec(\"ascii\", \"a\", (buf)=>{\n    let string = \"a\";\n    for(let i = 0; i < buf.length; i++){\n        string += String.fromCharCode(buf[i]);\n    }\n    return string;\n}, (str)=>{\n    str = str.substring(1);\n    const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__.allocUnsafe)(str.length);\n    for(let i = 0; i < str.length; i++){\n        buf[i] = str.charCodeAt(i);\n    }\n    return buf;\n});\nconst BASES = {\n    utf8: string,\n    \"utf-8\": string,\n    hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,\n    latin1: ascii,\n    ascii: ascii,\n    binary: ascii,\n    ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRjtBQUMxQyxTQUFTRSxZQUFZQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNO0lBQy9DLE9BQU87UUFDTEg7UUFDQUM7UUFDQUcsU0FBUztZQUNQSjtZQUNBQztZQUNBQztRQUNGO1FBQ0FHLFNBQVM7WUFBRUY7UUFBTztJQUNwQjtBQUNGO0FBQ0EsTUFBTUcsU0FBU1AsWUFBWSxRQUFRLEtBQUtRLENBQUFBO0lBQ3RDLE1BQU1GLFVBQVUsSUFBSUcsWUFBWTtJQUNoQyxPQUFPLE1BQU1ILFFBQVFGLE1BQU0sQ0FBQ0k7QUFDOUIsR0FBR0UsQ0FBQUE7SUFDRCxNQUFNTCxVQUFVLElBQUlNO0lBQ3BCLE9BQU9OLFFBQVFGLE1BQU0sQ0FBQ08sSUFBSUUsU0FBUyxDQUFDO0FBQ3RDO0FBQ0EsTUFBTUMsUUFBUWIsWUFBWSxTQUFTLEtBQUtRLENBQUFBO0lBQ3RDLElBQUlELFNBQVM7SUFDYixJQUFLLElBQUlPLElBQUksR0FBR0EsSUFBSU4sSUFBSU8sTUFBTSxFQUFFRCxJQUFLO1FBQ25DUCxVQUFVUyxPQUFPQyxZQUFZLENBQUNULEdBQUcsQ0FBQ00sRUFBRTtJQUN0QztJQUNBLE9BQU9QO0FBQ1QsR0FBR0csQ0FBQUE7SUFDREEsTUFBTUEsSUFBSUUsU0FBUyxDQUFDO0lBQ3BCLE1BQU1KLE1BQU1ULHNEQUFXQSxDQUFDVyxJQUFJSyxNQUFNO0lBQ2xDLElBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJSixJQUFJSyxNQUFNLEVBQUVELElBQUs7UUFDbkNOLEdBQUcsQ0FBQ00sRUFBRSxHQUFHSixJQUFJUSxVQUFVLENBQUNKO0lBQzFCO0lBQ0EsT0FBT047QUFDVDtBQUNBLE1BQU1XLFFBQVE7SUFDWkMsTUFBTWI7SUFDTixTQUFTQTtJQUNUYyxLQUFLdkIsc0RBQUtBLENBQUN3QixNQUFNO0lBQ2pCQyxRQUFRVjtJQUNSQSxPQUFPQTtJQUNQVyxRQUFRWDtJQUNSLEdBQUdmLHNEQUFLO0FBQ1Y7QUFDQSxpRUFBZXFCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2EvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcz8wYjM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VzIH0gZnJvbSAnbXVsdGlmb3JtYXRzL2Jhc2ljcyc7XG5pbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4uL2FsbG9jLmpzJztcbmZ1bmN0aW9uIGNyZWF0ZUNvZGVjKG5hbWUsIHByZWZpeCwgZW5jb2RlLCBkZWNvZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByZWZpeCxcbiAgICBlbmNvZGVyOiB7XG4gICAgICBuYW1lLFxuICAgICAgcHJlZml4LFxuICAgICAgZW5jb2RlXG4gICAgfSxcbiAgICBkZWNvZGVyOiB7IGRlY29kZSB9XG4gIH07XG59XG5jb25zdCBzdHJpbmcgPSBjcmVhdGVDb2RlYygndXRmOCcsICd1JywgYnVmID0+IHtcbiAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmOCcpO1xuICByZXR1cm4gJ3UnICsgZGVjb2Rlci5kZWNvZGUoYnVmKTtcbn0sIHN0ciA9PiB7XG4gIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0ci5zdWJzdHJpbmcoMSkpO1xufSk7XG5jb25zdCBhc2NpaSA9IGNyZWF0ZUNvZGVjKCdhc2NpaScsICdhJywgYnVmID0+IHtcbiAgbGV0IHN0cmluZyA9ICdhJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59LCBzdHIgPT4ge1xuICBzdHIgPSBzdHIuc3Vic3RyaW5nKDEpO1xuICBjb25zdCBidWYgPSBhbGxvY1Vuc2FmZShzdHIubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufSk7XG5jb25zdCBCQVNFUyA9IHtcbiAgdXRmODogc3RyaW5nLFxuICAndXRmLTgnOiBzdHJpbmcsXG4gIGhleDogYmFzZXMuYmFzZTE2LFxuICBsYXRpbjE6IGFzY2lpLFxuICBhc2NpaTogYXNjaWksXG4gIGJpbmFyeTogYXNjaWksXG4gIC4uLmJhc2VzXG59O1xuZXhwb3J0IGRlZmF1bHQgQkFTRVM7Il0sIm5hbWVzIjpbImJhc2VzIiwiYWxsb2NVbnNhZmUiLCJjcmVhdGVDb2RlYyIsIm5hbWUiLCJwcmVmaXgiLCJlbmNvZGUiLCJkZWNvZGUiLCJlbmNvZGVyIiwiZGVjb2RlciIsInN0cmluZyIsImJ1ZiIsIlRleHREZWNvZGVyIiwic3RyIiwiVGV4dEVuY29kZXIiLCJzdWJzdHJpbmciLCJhc2NpaSIsImkiLCJsZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0IiwiQkFTRVMiLCJ1dGY4IiwiaGV4IiwiYmFzZTE2IiwibGF0aW4xIiwiYmluYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/util/bases.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/uint8arrays/esm/src/xor.js":
/*!*****************************************************!*\
  !*** ../../node_modules/uint8arrays/esm/src/xor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   xor: () => (/* binding */ xor)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/alloc.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction xor(a, b) {\n    if (a.length !== b.length) {\n        throw new Error(\"Inputs should have the same length\");\n    }\n    const result = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(a.length);\n    for(let i = 0; i < a.length; i++){\n        result[i] = a[i] ^ b[i];\n    }\n    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(result);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNjO0FBQ2hELFNBQVNFLElBQUlDLENBQUMsRUFBRUMsQ0FBQztJQUN0QixJQUFJRCxFQUFFRSxNQUFNLEtBQUtELEVBQUVDLE1BQU0sRUFBRTtRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxTQUFTUCxzREFBV0EsQ0FBQ0csRUFBRUUsTUFBTTtJQUNuQyxJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUwsRUFBRUUsTUFBTSxFQUFFRyxJQUFLO1FBQ2pDRCxNQUFNLENBQUNDLEVBQUUsR0FBR0wsQ0FBQyxDQUFDSyxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ksRUFBRTtJQUN6QjtJQUNBLE9BQU9QLG9FQUFZQSxDQUFDTTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYS8uLi8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy94b3IuanM/NTIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4vYWxsb2MuanMnO1xuaW1wb3J0IHsgYXNVaW50OEFycmF5IH0gZnJvbSAnLi91dGlsL2FzLXVpbnQ4YXJyYXkuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHhvcihhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0cyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBsZW5ndGgnKTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBhbGxvY1Vuc2FmZShhLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IGFbaV0gXiBiW2ldO1xuICB9XG4gIHJldHVybiBhc1VpbnQ4QXJyYXkocmVzdWx0KTtcbn0iXSwibmFtZXMiOlsiYWxsb2NVbnNhZmUiLCJhc1VpbnQ4QXJyYXkiLCJ4b3IiLCJhIiwiYiIsImxlbmd0aCIsIkVycm9yIiwicmVzdWx0IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/uint8arrays/esm/src/xor.js\n");

/***/ })

};
;