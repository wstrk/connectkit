"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Squircle = exports.LogoContainer = void 0;
const styled_1 = require("./../../../styles/styled");
exports.LogoContainer = styled_1.default.div `
  position: relative;
  width: ${({ $width }) => $width + 'px' || '100%'};
  height: ${({ $height }) => $height + 'px' || '100%'};
`;
exports.Squircle = styled_1.default.svg `
  z-index: 1;
  position: relative;
  display: block;
`;
exports.Image = styled_1.default.div `
  z-index: 2;
  position: absolute;
  inset: 0;
  display: block;
  overflow: hidden;
  svg,
  img {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
//# sourceMappingURL=styles.js.map