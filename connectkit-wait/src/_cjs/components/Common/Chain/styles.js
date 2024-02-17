"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unsupported = exports.LoadingContainer = exports.LogoContainer = exports.ChainContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
exports.ChainContainer = styled_1.default.div `
  --bg: transparent;
  --color: #333;
  ${(props) => typeof props.size === 'string'
    ? (0, styled_components_1.css) `
          --width: ${props.size};
          --height: ${props.size};
        `
    : (0, styled_components_1.css) `
          --width: ${props.size >= 0 ? `${props.size}px` : '24px'};
          --height: ${props.size >= 0 ? `${props.size}px` : '24px'};
        `};
  ${(props) => typeof props.radius === 'string'
    ? (0, styled_components_1.css) `
          --radius: ${props.radius};
        `
    : (0, styled_components_1.css) `
          --radius: ${props.radius >= 0 ? `${props.radius}px` : '24px'};
        `};
  display: block;
  position: relative;
  width: var(--width);
  height: var(--height);
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--radius);
  background: var(--ck-body-background-secondary);
  pointer-events: none;
  user-select: none;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
exports.LogoContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: block;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const Spin = (0, styled_components_1.keyframes) `
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`;
exports.LoadingContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 0;
  animation: ${Spin} 1s linear infinite;
  svg {
    display: block;
    position: absolute;
    inset: 0;
  }
`;
exports.Unsupported = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 40%;
  min-width: 13px;
  min-height: 13px;
  color: var(--ck-body-color-danger, red);
  svg {
    display: block;
    position: relative;
    top: -30%;
    right: -30%;
  }
`;
//# sourceMappingURL=styles.js.map