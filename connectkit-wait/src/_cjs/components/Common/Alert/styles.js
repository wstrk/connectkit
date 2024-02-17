"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconContainer = exports.AlertContainer = void 0;
const styled_1 = require("./../../../styles/styled");
const framer_motion_1 = require("framer-motion");
const defaultTheme_1 = require("../../../constants/defaultTheme");
const styled_components_1 = require("styled-components");
exports.AlertContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    padding: 16px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 24px;
    text-align: center;
  }

  ${($error) => {
    if ($error)
        return (0, styled_components_1.css) `
        color: #fff;
        background: var(--ck-body-color-danger, red);
      `;
}}
`;
exports.IconContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;
//# sourceMappingURL=styles.js.map