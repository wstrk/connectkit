"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoIcon = exports.LogoContainer = exports.QRPlaceholder = exports.PlaceholderKeyframes = exports.QRCodeContent = exports.QRCodeContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
exports.QRCodeContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--ck-qr-border-radius, 24px);
  background: var(--ck-qr-background, transparent);
  box-shadow: 0 0 0 1px var(--ck-qr-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;
exports.QRCodeContent = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`;
exports.PlaceholderKeyframes = (0, styled_components_1.keyframes) `
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
exports.QRPlaceholder = (0, styled_1.default)(framer_motion_1.motion.div) `
  --color: var(--ck-qr-dot-color);
  --bg: var(--ck-qr-background, var(--ck-body-background));

  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    z-index: 4;
    position: relative;
    width: 28%;
    height: 28%;
    border-radius: 20px;
    background: var(--bg);
    box-shadow: 0 0 0 7px var(--bg);
  }
  > span {
    z-index: 4;
    position: absolute;
    background: var(--color);
    border-radius: 12px;
    width: 13.25%;
    height: 13.25%;
    box-shadow: 0 0 0 4px var(--bg);
    &:before {
      content: '';
      position: absolute;
      inset: 9px;
      border-radius: 3px;
      box-shadow: 0 0 0 4px var(--bg);
    }
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    background: repeat;
    background-size: 1.888% 1.888%;
    background-image: radial-gradient(var(--color) 41%, transparent 41%);
  }
  &:after {
    z-index: 5;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    background-size: 200% 100%;
    animation: ${exports.PlaceholderKeyframes} 1000ms linear infinite both;
  }
`;
exports.LogoContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`;
exports.LogoIcon = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${(props) => props.$wcLogo
    ? (0, styled_components_1.css) `
          width: 29%;
          height: 20.5%;
        `
    : (0, styled_components_1.css) `
          width: 28%;
          height: 28%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          }
        `}
`;
//# sourceMappingURL=styles.js.map