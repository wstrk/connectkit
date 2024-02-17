"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryIconContainer = exports.RetryButton = exports.ConnectingAnimation = exports.ConnectingContainer = exports.Container = exports.Content = void 0;
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../../Common/Modal/styles");
exports.Content = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  left: 0;
  right: 0;
  ${styles_1.ModalContent} {
    padding: 0 8px 32px;
    gap: 12px;
  }
`;
const dist = 2;
const shakeKeyframes = (0, styled_components_1.keyframes) `
  0%{ transform:none; }
  25%{ transform:translateX(${dist}px); }
  50%{ transform:translateX(-${dist}px); }
  75%{ transform:translateX(${dist}px); }
  100%{ transform:none; }
`;
const outlineKeyframes = (0, styled_components_1.keyframes) `
  0%{ opacity:1; }
  100%{ opacity:0; }
`;
exports.Container = (0, styled_1.default)(framer_motion_1.motion.div) `
  /*
  background: var(
    --ck-body-background
  ); // To stop the overlay issue during transition for the squircle spinner
  */
`;
exports.ConnectingContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 16px;
  height: 120px;
  //transform: scale(1.001); // fixes shifting issue between states
`;
exports.ConnectingAnimation = (0, styled_1.default)(framer_motion_1.motion.div) `
  user-select: none;
  position: relative;
  --spinner-error-opacity: 0;
  &:before {
    content: '';
    position: absolute;
    inset: 1px;
    opacity: 0;
    background: var(--ck-body-color-danger);
    ${(props) => props.$circle &&
    (0, styled_components_1.css) `
        inset: -5px;
        border-radius: 50%;
        background: none;
        box-shadow: inset 0 0 0 3.5px var(--ck-body-color-danger);
      `}
  }
  ${(props) => props.$shake &&
    (0, styled_components_1.css) `
      animation: ${shakeKeyframes} 220ms ease-out both;
      &:before {
        animation: ${outlineKeyframes} 220ms ease-out 750ms both;
      }
    `}
`;
exports.RetryButton = (0, styled_1.default)(framer_motion_1.motion.button) `
  z-index: 5;
  appearance: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background: none;

  color: var(--ck-body-background);
  transition: color 200ms ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease;
    background: var(--ck-body-color);
  }

  &:hover:before {
    opacity: 0.1;
  }
`;
exports.RetryIconContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 0;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 16px;
    background: conic-gradient(
      from 90deg,
      currentColor 10%,
      var(--ck-body-color) 80%
    );
  }

  svg {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
//# sourceMappingURL=styles.js.map