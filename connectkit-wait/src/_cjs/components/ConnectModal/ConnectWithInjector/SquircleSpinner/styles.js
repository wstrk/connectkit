"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = exports.SpinnerContainer = exports.Logo = exports.LogoContainer = void 0;
const styled_1 = require("./../../../../styles/styled");
const framer_motion_1 = require("framer-motion");
exports.LogoContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 4;
  position: relative;
  overflow: hidden;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`;
exports.Logo = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: 6px;
  border-radius: 24px;
  background: var(--ck-body-background);
  svg,
  img {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
exports.SpinnerContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 1px;
  overflow: hidden;
`;
exports.Spinner = (0, styled_1.default)(framer_motion_1.motion.div) `
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from -90deg,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      var(--ck-spinner-color)
    );
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
//# sourceMappingURL=styles.js.map