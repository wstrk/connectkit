"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = exports.Dots = exports.Slider = exports.Slide = exports.Slides = exports.MobileImageContainer = exports.ImageContainerInner = exports.ImageContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const defaultTheme_1 = require("../../../constants/defaultTheme");
const imageHeight = 208;
exports.ImageContainer = styled_1.default.div `
  pointer-events: none;
  user-select: none;
  height: ${imageHeight}px;
  padding: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    display: none;
  }
`;
exports.ImageContainerInner = (0, styled_1.default)(framer_motion_1.motion.div) ``;
exports.MobileImageContainer = styled_1.default.div `
  pointer-events: none;
  user-select: none;
  height: ${imageHeight}px;
  padding: 0 0 12px;
  display: none;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    display: flex;
  }
`;
exports.Slides = styled_1.default.div `
  position: relative;
`;
exports.Slide = (0, styled_1.default)(framer_motion_1.motion.div) `
  scroll-snap-type: x mandatory;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 4px 8px;
  /* will-change: transform, opacity; */
  transition: 400ms 50ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;
  ${(props) => !props.$active &&
    (0, styled_components_1.css) `
      pointer-events: none;
      position: absolute;
      opacity: 0;
      transform: scale(0.95);
      transition-duration: 300ms;
      transition-delay: 0ms;
    `}
`;
exports.Slider = styled_1.default.div `
  --background: var(--ck-body-background-secondary);
  --background-transparent: var(--ck-body-background-transparent, transparent);
  position: relative;
  padding: 0 0 4px;
  border-radius: 16px;
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    margin: 0 -24px;
    ${exports.Slides} {
      position: relative;
      z-index: 3;
      display: flex;
      overflow: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      margin-top: -${imageHeight}px;
      padding-top: ${imageHeight}px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    ${exports.Slide} {
      position: relative;
      opacity: 1;
      transform: none;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }
`;
exports.Dots = styled_1.default.div `
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  pointer-events: auto;
`;
exports.Dot = styled_1.default.button `
  display: flex;
  align-items: center;
  height: 28px;
  padding: 2px;
  background: none;
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    padding: 4px;
    &:before {
      transform: none !important;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 3px;
    opacity: 0.12;
    border-radius: 4px;
    background: var(--ck-accent-color, var(--ck-body-color));
    transition: transform 200ms ease, opacity 180ms ease;
  }
  ${(props) => props.$active
    ? (0, styled_components_1.css) `
          cursor: default;
          &:before {
            opacity: 1;
          }
        `
    : !props.disabled &&
        (0, styled_components_1.css) `
          cursor: pointer;
          &:hover:before {
            transform: scaleY(3.5);
          }
          &:active:before {
          }
        `}
`;
//# sourceMappingURL=styles.js.map