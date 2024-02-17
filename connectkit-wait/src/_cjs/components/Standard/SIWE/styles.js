"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerContainer = void 0;
const styled_components_1 = require("styled-components");
const styled_1 = require("./../../../styles/styled");
const framer_motion_1 = require("framer-motion");
const Spin = (0, styled_components_1.keyframes) `
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`;
exports.SpinnerContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  animation: ${Spin} 1s linear infinite;
  svg {
    display: block;
    position: relative;
    animation: ${Spin} 1s ease-in-out infinite;
  }
`;
//# sourceMappingURL=styles.js.map