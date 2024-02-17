"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function usePrevious(value, initial) {
    const ref = (0, react_1.useRef)({ target: value, previous: initial });
    if (ref.current.target !== value) {
        ref.current.previous = ref.current.target;
        ref.current.target = value;
    }
    return ref.current.previous;
}
exports.default = usePrevious;
//# sourceMappingURL=usePrevious.js.map