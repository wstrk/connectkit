"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-rpc-random-id";
exports.ids = ["vendor-chunks/json-rpc-random-id"];
exports.modules = {

/***/ "(ssr)/../../node_modules/json-rpc-random-id/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/json-rpc-random-id/index.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = IdIterator;\nfunction IdIterator(opts) {\n    opts = opts || {};\n    var max = opts.max || Number.MAX_SAFE_INTEGER;\n    var idCounter = typeof opts.start !== \"undefined\" ? opts.start : Math.floor(Math.random() * max);\n    return function createRandomId() {\n        idCounter = idCounter % max;\n        return idCounter++;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2pzb24tcnBjLXJhbmRvbS1pZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsV0FBV0MsSUFBSTtJQUN0QkEsT0FBT0EsUUFBUSxDQUFDO0lBQ2hCLElBQUlDLE1BQU1ELEtBQUtDLEdBQUcsSUFBSUMsT0FBT0MsZ0JBQWdCO0lBQzdDLElBQUlDLFlBQVksT0FBT0osS0FBS0ssS0FBSyxLQUFLLGNBQWNMLEtBQUtLLEtBQUssR0FBR0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtQO0lBRTVGLE9BQU8sU0FBU1E7UUFDZEwsWUFBWUEsWUFBWUg7UUFDeEIsT0FBT0c7SUFDVDtBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmtuZXQtcmVhY3QvLi4vLi4vbm9kZV9tb2R1bGVzL2pzb24tcnBjLXJhbmRvbS1pZC9pbmRleC5qcz80NjkxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSWRJdGVyYXRvclxuXG5mdW5jdGlvbiBJZEl0ZXJhdG9yKG9wdHMpe1xuICBvcHRzID0gb3B0cyB8fCB7fVxuICB2YXIgbWF4ID0gb3B0cy5tYXggfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgdmFyIGlkQ291bnRlciA9IHR5cGVvZiBvcHRzLnN0YXJ0ICE9PSAndW5kZWZpbmVkJyA/IG9wdHMuc3RhcnQgOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUlkICgpIHtcbiAgICBpZENvdW50ZXIgPSBpZENvdW50ZXIgJSBtYXhcbiAgICByZXR1cm4gaWRDb3VudGVyKytcbiAgfVxuXG59Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJJZEl0ZXJhdG9yIiwib3B0cyIsIm1heCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpZENvdW50ZXIiLCJzdGFydCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZVJhbmRvbUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/json-rpc-random-id/index.js\n");

/***/ })

};
;