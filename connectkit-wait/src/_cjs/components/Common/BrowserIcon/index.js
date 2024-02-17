"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const utils_1 = require("../../../utils");
const browsers_1 = require("../../../assets/browsers");
const BrowserIcon = react_1.default.forwardRef(({ browser }, ref) => {
    const currentBrowser = browser ?? (0, utils_1.detectBrowser)();
    let icon;
    switch (currentBrowser) {
        case 'chrome':
            icon = browsers_1.default.Chrome;
            break;
        case 'firefox':
            icon = browsers_1.default.FireFox;
            break;
        case 'edge':
            icon = browsers_1.default.Edge;
            break;
        case 'brave':
            break;
    }
    if (!icon)
        return <></>;
    return <styles_1.BrowserIconContainer>{icon}</styles_1.BrowserIconContainer>;
});
BrowserIcon.displayName = 'BrowserIcon';
exports.default = BrowserIcon;
//# sourceMappingURL=index.js.map