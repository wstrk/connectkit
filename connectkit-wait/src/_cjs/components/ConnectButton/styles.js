"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedNetworkContainer = exports.IconContainer = exports.ChainContainer = exports.TextContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../styles/styled");
exports.TextContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
exports.ChainContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  svg {
    display: block;
  }
`;
exports.IconContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  pointer-events: none;
  user-select: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
exports.UnsupportedNetworkContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  background: var(--ck-body-color-danger, red);
  color: #fff;
  svg {
    display: block;
    position: relative;
    top: -1px;
  }
`;
//# sourceMappingURL=styles.js.map