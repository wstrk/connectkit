"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const utils_1 = require("../utils");
function useIsMobile() {
    const [mobile, setMobile] = (0, react_1.useState)((0, utils_1.isMobile)());
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            setMobile((0, utils_1.isMobile)());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return mobile;
}
exports.default = useIsMobile;
//# sourceMappingURL=useIsMobile.js.map