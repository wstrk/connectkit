"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.WalletList = exports.WalletLabel = exports.WalletIcon = exports.WalletItem = void 0;
const styled_components_1 = require("styled-components");
const styled_1 = require("./../../../styles/styled");
exports.WalletItem = styled_1.default.div `
  text-align: center;
  transition: opacity 100ms ease;
  opacity: ${(props) => (props.$waiting ? 0.4 : 1)};
`;
exports.WalletIcon = styled_1.default.div `
  z-index: 9;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.04);
  ${(props) => props.$outline &&
    `
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px var(--ck-body-background-tertiary);
  }`}
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`;
exports.WalletLabel = styled_1.default.div `
  color: var(--ck-body-color);
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  opacity: 0.75;
`;
const PulseKeyframes = (0, styled_components_1.keyframes) `
  0%,100% { opacity:1; }
  50% { opacity:0.5; }
`;
exports.WalletList = styled_1.default.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px 8px;
  margin: 0 -10px;
  padding: 4px 0 0;
  transition: opacity 300ms ease;
  ${(props) => props.$disabled &&
    (0, styled_components_1.css) `
      pointer-events: none;
      opacity: 0.4;
      ${exports.WalletItem} {
        animation: ${PulseKeyframes} 1s infinite ease-in-out;
      }
    `}
`;
exports.Container = styled_1.default.div ``;
//# sourceMappingURL=styles.js.map