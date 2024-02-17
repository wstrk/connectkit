"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserIconContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
exports.BrowserIconContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
//# sourceMappingURL=styles.js.map