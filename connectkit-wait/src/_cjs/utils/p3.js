"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p3Hex = exports.hexToP3 = void 0;
const styled_components_1 = require("styled-components");
const hexToP3 = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result == null)
        return hex;
    const values = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
    return `color(display-p3 ${values.r / 255} ${values.g / 255} ${values.b / 255})`;
};
exports.hexToP3 = hexToP3;
const p3Hex = (hex, property) => {
    const isSafari = true;
    const p3 = (0, exports.hexToP3)(hex);
    if (!p3 || !isSafari) {
        return (0, styled_components_1.css) `
      ${property}: ${hex};
    `;
    }
    else {
        return (0, styled_components_1.css) `
      ${property}: ${hex};
      ${property}: ${p3};
    `;
    }
};
exports.p3Hex = p3Hex;
//# sourceMappingURL=p3.js.map