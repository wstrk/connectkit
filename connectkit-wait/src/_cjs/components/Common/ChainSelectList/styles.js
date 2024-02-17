"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainButtonBg = exports.ChainButtonStatus = exports.ChainButton = exports.ChainButtons = exports.ChainButtonContainer = exports.ChainLogoSpinner = exports.ChainLogoContainer = exports.ChainIcon = exports.SwitchNetworksContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const defaultTheme_1 = require("../../../constants/defaultTheme");
exports.SwitchNetworksContainer = styled_1.default.div `
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    flex-direction: column-reverse;
  }
`;
exports.ChainIcon = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: var(--ck-body-background);
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  ${(props) => props.$empty &&
    (0, styled_components_1.css) `
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '?';
        color: var(--ck-body-color-muted);
        font-weight: bold;
        font-family: var(--ck-font-family);
      }
    `}
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    border-radius: 16px;
    width: 32px;
    height: 32px;
  }
`;
exports.ChainLogoContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
`;
exports.ChainLogoSpinner = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: -6px;
  animation: rotateSpinner 1200ms linear infinite;
  pointer-events: none;
  svg {
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
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
exports.ChainButtonContainer = styled_1.default.div `
  position: relative;
  margin: -8px -8px;
  &:after {
    border-radius: var(--border-radius, 0);
    z-index: 2;
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0 2px;
    box-shadow: inset 0 16px 8px -12px var(--background, var(--ck-body-background)),
      inset 0 -16px 8px -12px var(--background, var(--ck-body-background));
  }
`;
exports.ChainButtons = (0, styled_1.default)(framer_motion_1.motion.div) `
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 242px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    padding: 8px 14px;
    margin: 2px -2px 0;
    max-height: 60vh;
  }
`;
exports.ChainButton = (0, styled_1.default)(framer_motion_1.motion.button) `
  appearance: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 11px;
  margin: 0 0 1px;
  padding: 8px 0;
  padding-right: 154px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--ck-body-color);
  background: none;
  white-space: nowrap;
  transition: transform 100ms ease, background-color 100ms ease;
  transform: translateZ(0px);
  &:before {
    content: '';
    background: currentColor;
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: var(--ck-dropdown-active-border-radius, 12px);
    opacity: 0;
    transition: opacity 180ms ease;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 180ms ease;
    outline: 2px solid var(--ck-focus-color);
  }
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    font-size: 17px;
    padding: 8px 0;
  }
  @media only screen and (min-width: ${defaultTheme_1.default.mobileWidth}px) {
    &:hover {
      &:before {
        transition-duration: 80ms;
        opacity: 0.05;
      }
    }
  }
  &:active {
    transform: scale(0.99) translateZ(0px);
  }
  &:disabled {
    //opacity: 0.4;
    pointer-events: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      opacity: 1;
    }
  }
  ${(props) => props.$variant === 'secondary' &&
    (0, styled_components_1.css) `
      padding: 12px 4px;
      margin: 0 0 8px;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        opacity: 0.05;
      }
      &:hover:before {
        opacity: 0.1;
      }
    `}
`;
exports.ChainButtonStatus = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-right: 4px;
  span {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    font-size: 17px;
    padding: 0;
  }
`;
exports.ChainButtonBg = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  z-index: -1;
  inset: 0 var(--ck-dropdown-active-inset, -8px);
  background: var(--ck-dropdown-active-background, rgba(26, 136, 248, 0.1));
  box-shadow var(--ck-dropdown-active-box-shadow);
  border-radius: var(--ck-dropdown-active-border-radius, 12px);
  
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    inset: 0 var(--ck-dropdown-active-inset, -8px);
  }
`;
//# sourceMappingURL=styles.js.map