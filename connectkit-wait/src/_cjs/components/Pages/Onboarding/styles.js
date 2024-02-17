"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = exports.RotateWrapper = exports.FloatWrapper = exports.LogoGraphic = exports.LogoInner = exports.LogoPosition = exports.GraphicBackground = exports.LogoGroup = exports.Graphic = void 0;
const styled_components_1 = require("styled-components");
const styled_1 = require("./../../../styles/styled");
const framer_motion_1 = require("framer-motion");
const defaultTheme_1 = require("../../../constants/defaultTheme");
exports.Graphic = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  margin: 16px auto 20px;
  height: 190px;
  max-width: 295px;
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    height: 200px;
    max-width: 100%;
    margin-bottom: 32px;
  }
`;
exports.LogoGroup = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 0;
  z-index: 2;
`;
const graphicIn = (0, styled_components_1.keyframes) `
  0%{
    opacity:0;
    transform:scale(0.9);
  }
  100%{
    opacity:1;
    transform:none;
  }
`;
exports.GraphicBackground = (0, styled_1.default)(framer_motion_1.motion.div) `
  z-index: 1;
  position: absolute;
  inset: 0;
  top: -2px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ck-body-background);
    background: radial-gradient(
      closest-side,
      var(--ck-body-background-transparent, transparent) 18.75%,
      var(--ck-body-background) 100%
    );
    background-size: 100%;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  animation: ${graphicIn} 1000ms 100ms ease both;
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    animation: none;
  }
`;
const logoIn = (0, styled_components_1.keyframes) `
  0%{
    opacity:0;
    transform:scale(0) translateY(40%);
  }
  100%{
    opacity:1;
    transform:none;
  }
`;
exports.LogoPosition = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 0;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-delay: inherit;
`;
exports.LogoInner = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
`;
exports.LogoGraphic = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  overflow: hidden;
  height: 58px;
  width: 58px;
  border-radius: 13.84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.03);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const float = (0, styled_components_1.keyframes) `
  0%,100%{ transform:none; }
  50%{ transform: translateY(-10%) }
`;
exports.FloatWrapper = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${float};
  animation-duration: 3600ms;
`;
const rotate = (0, styled_components_1.keyframes) `
  0%,100%{ transform:rotate(-3deg); }
  50%{ transform:rotate(3deg); }
`;
exports.RotateWrapper = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${rotate};
  animation-duration: 3200ms;
`;
exports.Logo = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  inset: 0;

  animation: ${logoIn} 750ms cubic-bezier(0.19, 1, 0.22, 1) both;
  &:nth-child(1){ z-index:2; animation-delay:0ms;  }
  &:nth-child(2){ z-index:1; animation-delay:60ms; }
  &:nth-child(3){ z-index:1; animation-delay:30ms; }
  &:nth-child(4){ z-index:1; animation-delay:90ms; }
  &:nth-child(5){ z-index:1; animation-delay:120ms;}

  &:nth-child(1){ ${exports.RotateWrapper}{ animation-delay:0ms; } }
  &:nth-child(2){ ${exports.RotateWrapper}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${exports.RotateWrapper}{ animation-delay:-1200ms; } }
  &:nth-child(4){ ${exports.RotateWrapper}{ animation-delay:-1800ms; } }
  &:nth-child(5){ ${exports.RotateWrapper}{ animation-delay:-2400ms; } }

  &:nth-child(1){ ${exports.FloatWrapper}{ animation-delay:-200ms; } }
  &:nth-child(2){ ${exports.FloatWrapper}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${exports.FloatWrapper}{ animation-delay:-800ms; } }
  &:nth-child(4){ ${exports.FloatWrapper}{ animation-delay:-300ms; } }
  &:nth-child(5){ ${exports.FloatWrapper}{ animation-delay:-3200ms; } }

  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    animation: none !important;
    ${exports.RotateWrapper},${exports.FloatWrapper} {
      animation: none !important;
    }
  }

  ${exports.LogoInner} {
    transform: translate(-50%, -50%);
  }

  &:nth-child(1) ${exports.LogoPosition} {
    transform: translate(50%, 50%);
    ${exports.LogoGraphic} {
      border-radius: 17.2px;
      width: 72px;
      height: 72px;
    }
  }
  &:nth-child(2) ${exports.LogoPosition} {
    transform: translate(21%, 21.5%);
  }
  &:nth-child(3) ${exports.LogoPosition} {
    transform: translate(78%, 14%);
  }
  &:nth-child(4) ${exports.LogoPosition} {
    transform: translate(22.5%, 76%);
  }
  &:nth-child(5) ${exports.LogoPosition} {
    transform: translate(76%, 80%);
  }
`;
//# sourceMappingURL=styles.js.map