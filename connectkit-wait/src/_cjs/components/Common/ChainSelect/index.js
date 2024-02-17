"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("./../../ConnectKit");
const utils_1 = require("./../../../utils");
const defaultTheme_1 = require("./../../../constants/defaultTheme");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const framer_motion_1 = require("framer-motion");
const Tooltip_1 = require("../Tooltip");
const ChainSelectDropdown_1 = require("../ChainSelectDropdown");
const Chain_1 = require("../Chain");
const useLocales_1 = require("../../../hooks/useLocales");
const wagmi_1 = require("wagmi");
const Container = (0, styled_1.default)(framer_motion_1.motion.div) ``;
const SwitchChainButton = (0, styled_1.default)(framer_motion_1.motion.button) `
  --color: var(
    --ck-dropdown-button-color,
    var(--ck-button-primary-color, var(--ck-body-color))
  );
  --background: var(
    --ck-dropdown-button-background,
    var(--ck-secondary-button-background, var(--ck-body-background-secondary))
  );
  --box-shadow: var(
    --ck-dropdown-button-box-shadow,
    var(
      --ck-secondary-button-box-shadow,
      var(--ck-button-primary-box-shadow),
      none
    )
  );

  --hover-color: var(--ck-dropdown-button-hover-color, var(--color));
  --hover-background: var(
    --ck-dropdown-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-dropdown-button-hover-box-shadow,
    var(--box-shadow)
  );

  --active-color: var(--ck-dropdown-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-dropdown-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-dropdown-button-active-box-shadow,
    var(--hover-box-shadow)
  );

  appearance: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 52px;
  height: 30px;
  padding: 2px 6px 2px 3px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transform: translateZ(0px);

  transition: 100ms ease;
  transition-property: transform, background-color, box-shadow, color;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);

  svg {
    position: relative;
    display: block;
  }

  ${(props) => props.disabled
    ? (0, styled_components_1.css) `
          width: auto;
          padding: 3px;
          position: relative;
          left: -22px;
        `
    : (0, styled_components_1.css) `
          cursor: pointer;

          @media only screen and (min-width: ${defaultTheme_1.default.mobileWidth +
        1}px) {
            &:hover,
            &:focus-visible {
              color: var(--hover-color);
              background: var(--hover-background);
              box-shadow: var(--hover-box-shadow);
            }
            &:active {
              color: var(--active-color);
              background: var(--active-background);
              box-shadow: var(--active-box-shadow);
            }
          }
        `}
`;
const ChevronDown = ({ ...props }) => (<svg aria-hidden="true" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.5 1L5.5 5L9.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>);
const ChainSelector = () => {
    const context = (0, ConnectKit_1.useContext)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { chain } = (0, wagmi_1.useAccount)();
    const { chains } = (0, wagmi_1.useSwitchChain)();
    const locales = (0, useLocales_1.default)({
        CHAIN: chain?.name,
    });
    const mobile = (0, utils_1.isMobile)() || window?.innerWidth < defaultTheme_1.default.mobileWidth;
    (0, react_1.useEffect)(() => {
        if (!context.open)
            setIsOpen(false);
    }, [context.open]);
    const disabled = chains.length <= 1;
    return (<>
      <Container>
        <ChainSelectDropdown_1.default offsetX={-12} open={!mobile && isOpen} onClose={() => setIsOpen(false)}>
          <SwitchChainButton aria-label={(0, utils_1.flattenChildren)(locales.switchNetworks).toString()} disabled={disabled} onClick={() => {
            if (mobile) {
                context.setRoute(ConnectKit_1.routes.SWITCHNETWORKS);
            }
            else {
                setIsOpen(!isOpen);
            }
        }}>
            {disabled ? (<Tooltip_1.default message={locales.chainNetwork} xOffset={-6} delay={0.01}>
                <Chain_1.default id={chain?.id}/>
              </Tooltip_1.default>) : (<Chain_1.default id={chain?.id}/>)}
            {!disabled && <ChevronDown style={{ top: 1, left: -3 }}/>}
          </SwitchChainButton>
        </ChainSelectDropdown_1.default>
      </Container>
    </>);
};
exports.default = ChainSelector;
//# sourceMappingURL=index.js.map