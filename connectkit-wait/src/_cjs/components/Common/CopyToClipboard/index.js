"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const CopyToClipboardIcon_1 = require("./CopyToClipboardIcon");
const Button_1 = require("../Button");
const Container = styled_1.default.div `
  --color: var(--ck-copytoclipboard-stroke);
  --bg: var(--ck-body-background);
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.$disabled
    ? (0, styled_components_1.css) `
          cursor: not-allowed;
          opacity: 0.4;
        `
    : (0, styled_components_1.css) `
          &:hover {
            --color: var(--ck-body-color-muted);
          }
        `}
`;
const OffsetContainer = styled_1.default.div `
  display: block;
  position: relative;
  transition: inherit;
  svg {
    position: absolute;
    left: 100%;
    display: block;
    top: -1px;
    margin: 0;
    margin-left: 4px;
  }
`;
const CopyToClipboard = ({ string, children, variant }) => {
    const [clipboard, setClipboard] = (0, react_1.useState)(false);
    let timeout;
    const onCopy = () => {
        if (!string)
            return;
        const str = string.trim();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str);
        }
        else {
        }
        setClipboard(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setClipboard(false), 1000);
    };
    if (variant === 'button')
        return (<Button_1.default disabled={!string} onClick={onCopy} icon={<CopyToClipboardIcon_1.default copied={clipboard}/>}>
        {children}
      </Button_1.default>);
    return (<Container onClick={onCopy} $disabled={!string}>
      <OffsetContainer>
        {children}
        <CopyToClipboardIcon_1.default copied={clipboard} small/>
      </OffsetContainer>
    </Container>);
};
exports.default = CopyToClipboard;
//# sourceMappingURL=index.js.map