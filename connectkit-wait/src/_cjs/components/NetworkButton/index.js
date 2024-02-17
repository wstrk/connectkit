"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const wagmi_1 = require("wagmi");
const useIsMounted_1 = require("../../hooks/useIsMounted");
const Chain_1 = require("../Common/Chain");
const DynamicContainer_1 = require("../Common/DynamicContainer");
const chainConfigs_1 = require("../../constants/chainConfigs");
const ThemedButton_1 = require("../Common/ThemedButton");
const ChainSelectDropdown_1 = require("../Common/ChainSelectDropdown");
const ConnectKitThemeProvider_1 = require("../ConnectKitThemeProvider/ConnectKitThemeProvider");
const framer_motion_2 = require("framer-motion");
const styled_1 = require("./../../styles/styled");
const ConnectKit_1 = require("../ConnectKit");
const Container = (0, styled_1.default)(framer_motion_2.motion.div) `
  position: relative;
`;
const ArrowIcon = (<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.31658 6.59763 4.68342 6.59763 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="currentColor"/>
  </svg>);
const NetworkButton = ({ theme, mode, customTheme, hideIcon, hideName, }) => {
    const context = (0, ConnectKit_1.useContext)();
    const isMounted = (0, useIsMounted_1.default)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const { isConnected, chain } = (0, wagmi_1.useAccount)();
    if (!isMounted)
        return null;
    const currentChain = chainConfigs_1.chainConfigs.find((c) => c.id === chain?.id);
    return (<ConnectKitThemeProvider_1.ConnectKitThemeProvider theme={theme ?? context.theme} mode={mode ?? context.mode} customTheme={customTheme ?? context.customTheme}>
      <framer_motion_1.AnimatePresence initial={false}>
        {!(hideIcon && hideName) && (isConnected || chain) && (<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: 'linear' }}>
            <ChainSelectDropdown_1.default open={open} onClose={() => setOpen(false)}>
              <ThemedButton_1.default theme={theme} mode={mode} customTheme={customTheme} onClick={() => setOpen(true)}>
                <div style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                  {!hideIcon && (<div>
                      <Chain_1.default id={chain?.id}/>
                    </div>)}
                  <framer_motion_1.AnimatePresence initial={false}>
                    {!hideName && (<div>
                        <DynamicContainer_1.default id={`chain-${chain?.id}`}>
                          {currentChain?.name ?? chain?.name}
                        </DynamicContainer_1.default>
                      </div>)}
                  </framer_motion_1.AnimatePresence>
                  <div style={{ minWidth: 10, transform: 'translateY(1px)' }}>
                    {ArrowIcon}
                  </div>
                </div>
              </ThemedButton_1.default>
            </ChainSelectDropdown_1.default>
          </Container>)}
      </framer_motion_1.AnimatePresence>
    </ConnectKitThemeProvider_1.ConnectKitThemeProvider>);
};
exports.default = NetworkButton;
//# sourceMappingURL=index.js.map