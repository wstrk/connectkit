"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBalance = exports.Balance = exports.BalanceContainer = exports.ChainSelectorContainer = exports.AvatarInner = exports.AvatarContainer = void 0;
const styled_components_1 = require("styled-components");
const styled_1 = require("./../../../styles/styled");
const framer_motion_1 = require("framer-motion");
const defaultTheme_1 = require("../../../constants/defaultTheme");
exports.AvatarContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  padding: 18px 0 20px;
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    padding: 16px 0 20px;
  }
`;
exports.AvatarInner = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  display: inline-block;
`;
exports.ChainSelectorContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 3;
  position: absolute;
  bottom: 0px;
  right: -16px;
`;
exports.BalanceContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
`;
exports.Balance = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
`;
const PlaceholderKeyframes = (0, styled_components_1.keyframes) `
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
exports.LoadingBalance = (0, styled_1.default)(framer_motion_1.motion.div) `
  width: 25%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ck-body-background-secondary);
  inset: 0;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      var(--ck-body-background-transparent) 50%,
      var(--ck-body-background),
      var(--ck-body-background-transparent)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${PlaceholderKeyframes} 1000ms linear infinite both;
  }
`;
//# sourceMappingURL=styles.js.map