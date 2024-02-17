"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/encode-utf8";
exports.ids = ["vendor-chunks/encode-utf8"];
exports.modules = {

/***/ "(ssr)/../../node_modules/encode-utf8/index.js":
/*!***********************************************!*\
  !*** ../../node_modules/encode-utf8/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function encodeUtf8(input) {\n    var result = [];\n    var size = input.length;\n    for(var index = 0; index < size; index++){\n        var point = input.charCodeAt(index);\n        if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {\n            var second = input.charCodeAt(index + 1);\n            if (second >= 0xDC00 && second <= 0xDFFF) {\n                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\n                point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;\n                index += 1;\n            }\n        }\n        // US-ASCII\n        if (point < 0x80) {\n            result.push(point);\n            continue;\n        }\n        // 2-byte UTF-8\n        if (point < 0x800) {\n            result.push(point >> 6 | 192);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // 3-byte UTF-8\n        if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {\n            result.push(point >> 12 | 224);\n            result.push(point >> 6 & 63 | 128);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // 4-byte UTF-8\n        if (point >= 0x10000 && point <= 0x10FFFF) {\n            result.push(point >> 18 | 240);\n            result.push(point >> 12 & 63 | 128);\n            result.push(point >> 6 & 63 | 128);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // Invalid character\n        result.push(0xEF, 0xBF, 0xBD);\n    }\n    return new Uint8Array(result).buffer;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2VuY29kZS11dGY4L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxXQUFZQyxLQUFLO0lBQ3pDLElBQUlDLFNBQVMsRUFBRTtJQUNmLElBQUlDLE9BQU9GLE1BQU1HLE1BQU07SUFFdkIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFGLE1BQU1FLFFBQVM7UUFDekMsSUFBSUMsUUFBUUwsTUFBTU0sVUFBVSxDQUFDRjtRQUU3QixJQUFJQyxTQUFTLFVBQVVBLFNBQVMsVUFBVUgsT0FBT0UsUUFBUSxHQUFHO1lBQzFELElBQUlHLFNBQVNQLE1BQU1NLFVBQVUsQ0FBQ0YsUUFBUTtZQUV0QyxJQUFJRyxVQUFVLFVBQVVBLFVBQVUsUUFBUTtnQkFDeEMsd0VBQXdFO2dCQUN4RUYsUUFBUSxDQUFDQSxRQUFRLE1BQUssSUFBSyxRQUFRRSxTQUFTLFNBQVM7Z0JBQ3JESCxTQUFTO1lBQ1g7UUFDRjtRQUVBLFdBQVc7UUFDWCxJQUFJQyxRQUFRLE1BQU07WUFDaEJKLE9BQU9PLElBQUksQ0FBQ0g7WUFDWjtRQUNGO1FBRUEsZUFBZTtRQUNmLElBQUlBLFFBQVEsT0FBTztZQUNqQkosT0FBT08sSUFBSSxDQUFDLFNBQVUsSUFBSztZQUMzQlAsT0FBT08sSUFBSSxDQUFDLFFBQVMsS0FBTTtZQUMzQjtRQUNGO1FBRUEsZUFBZTtRQUNmLElBQUlILFFBQVEsVUFBV0EsU0FBUyxVQUFVQSxRQUFRLFNBQVU7WUFDMURKLE9BQU9PLElBQUksQ0FBQyxTQUFVLEtBQU07WUFDNUJQLE9BQU9PLElBQUksQ0FBQyxTQUFXLElBQUssS0FBTTtZQUNsQ1AsT0FBT08sSUFBSSxDQUFDLFFBQVMsS0FBTTtZQUMzQjtRQUNGO1FBRUEsZUFBZTtRQUNmLElBQUlILFNBQVMsV0FBV0EsU0FBUyxVQUFVO1lBQ3pDSixPQUFPTyxJQUFJLENBQUMsU0FBVSxLQUFNO1lBQzVCUCxPQUFPTyxJQUFJLENBQUMsU0FBVyxLQUFNLEtBQU07WUFDbkNQLE9BQU9PLElBQUksQ0FBQyxTQUFXLElBQUssS0FBTTtZQUNsQ1AsT0FBT08sSUFBSSxDQUFDLFFBQVMsS0FBTTtZQUMzQjtRQUNGO1FBRUEsb0JBQW9CO1FBQ3BCUCxPQUFPTyxJQUFJLENBQUMsTUFBTSxNQUFNO0lBQzFCO0lBRUEsT0FBTyxJQUFJQyxXQUFXUixRQUFRUyxNQUFNO0FBQ3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NhLy4uLy4uL25vZGVfbW9kdWxlcy9lbmNvZGUtdXRmOC9pbmRleC5qcz83ODI0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuY29kZVV0ZjggKGlucHV0KSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc2l6ZSA9IGlucHV0Lmxlbmd0aFxuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzaXplOyBpbmRleCsrKSB7XG4gICAgdmFyIHBvaW50ID0gaW5wdXQuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChwb2ludCA+PSAweEQ4MDAgJiYgcG9pbnQgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHZhciBzZWNvbmQgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgcG9pbnQgPSAocG9pbnQgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwXG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVUy1BU0NJSVxuICAgIGlmIChwb2ludCA8IDB4ODApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAyLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweDgwMCkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDYpIHwgMTkyKVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAzLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweEQ4MDAgfHwgKHBvaW50ID49IDB4RTAwMCAmJiBwb2ludCA8IDB4MTAwMDApKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTIpIHwgMjI0KVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiA2KSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gNC1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50ID49IDB4MTAwMDAgJiYgcG9pbnQgPD0gMHgxMEZGRkYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiAxOCkgfCAyNDApXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDEyKSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIEludmFsaWQgY2hhcmFjdGVyXG4gICAgcmVzdWx0LnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpLmJ1ZmZlclxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbmNvZGVVdGY4IiwiaW5wdXQiLCJyZXN1bHQiLCJzaXplIiwibGVuZ3RoIiwiaW5kZXgiLCJwb2ludCIsImNoYXJDb2RlQXQiLCJzZWNvbmQiLCJwdXNoIiwiVWludDhBcnJheSIsImJ1ZmZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/encode-utf8/index.js\n");

/***/ })

};
;