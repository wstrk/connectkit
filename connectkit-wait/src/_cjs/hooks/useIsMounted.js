"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useIsMounted() {
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setMounted(true), []);
    return mounted;
}
exports.default = useIsMounted;
//# sourceMappingURL=useIsMounted.js.map