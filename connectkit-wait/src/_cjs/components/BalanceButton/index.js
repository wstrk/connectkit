"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const styled_1 = require("./../../styles/styled");
const styled_components_1 = require("styled-components");
const framer_motion_1 = require("framer-motion");
const wagmi_1 = require("wagmi");
const useIsMounted_1 = require("../../hooks/useIsMounted");
const Chain_1 = require("../Common/Chain");
const chainConfigs_1 = require("../../constants/chainConfigs");
const ThemedButton_1 = require("../Common/ThemedButton");
const utils_1 = require("../../utils");
const useChains_1 = require("../../hooks/useChains");
const useChainIsSupported_1 = require("../../hooks/useChainIsSupported");
const Container = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const PlaceholderKeyframes = (0, styled_components_1.keyframes) `
  0%,100%{ opacity: 0.1; transform: scale(0.75); }
  50%{ opacity: 0.75; transform: scale(1.2) }
`;
const PulseContainer = styled_1.default.div `
  pointer-events: none;
  user-select: none;
  padding: 0 5px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    background: currentColor;
    animation: ${PlaceholderKeyframes} 1000ms ease infinite both;
  }
`;
const Balance = ({ hideIcon, hideSymbol }) => {
    const isMounted = (0, useIsMounted_1.default)();
    const [isInitial, setIsInitial] = (0, react_1.useState)(true);
    const { address, chain } = (0, wagmi_1.useAccount)();
    const chains = (0, useChains_1.useChains)();
    const isChainSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const queryClient = (0, react_query_1.useQueryClient)();
    const { data: blockNumber } = (0, wagmi_1.useBlockNumber)({ watch: true });
    const { data: balance, queryKey } = (0, wagmi_1.useBalance)({
        address,
        chainId: chain?.id,
    });
    (0, react_1.useEffect)(() => {
        if (blockNumber ?? 0 % 5 === 0)
            queryClient.invalidateQueries({ queryKey });
    }, [blockNumber, queryKey]);
    const currentChain = chainConfigs_1.chainConfigs.find((c) => c.id === chain?.id);
    const state = `${!isMounted || balance?.formatted === undefined
        ? `balance-loading`
        : `balance-${currentChain?.id}-${balance?.formatted}`}`;
    (0, react_1.useEffect)(() => {
        setIsInitial(false);
    }, []);
    return (<div style={{ position: 'relative' }}>
      <framer_motion_1.AnimatePresence initial={false}>
        <framer_motion_1.motion.div key={state} initial={balance?.formatted !== undefined && isInitial
            ? {
                opacity: 1,
            }
            : { opacity: 0, position: 'absolute', top: 0, left: 0, bottom: 0 }} animate={{ opacity: 1, position: 'relative' }} exit={{
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
        }} transition={{
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.4,
        }}>
          {!address || !isMounted || balance?.formatted === undefined ? (<Container>
              {!hideIcon && <Chain_1.default id={chain?.id}/>}
              <span style={{ minWidth: 32 }}>
                <PulseContainer>
                  <span style={{ animationDelay: '0ms' }}/>
                  <span style={{ animationDelay: '50ms' }}/>
                  <span style={{ animationDelay: '100ms' }}/>
                </PulseContainer>
              </span>
            </Container>) : !isChainSupported ? (<Container>
              {!hideIcon && <Chain_1.default id={chain?.id}/>}
              <span style={{ minWidth: 32 }}>???</span>
            </Container>) : (<Container>
              {!hideIcon && <Chain_1.default id={chain?.id}/>}
              <span style={{ minWidth: 32 }}>
                {(0, utils_1.nFormatter)(Number(balance?.formatted))}
              </span>
              {!hideSymbol && ` ${balance?.symbol}`}
            </Container>)}
        </framer_motion_1.motion.div>
      </framer_motion_1.AnimatePresence>
      
    </div>);
};
exports.Balance = Balance;
const BalanceButton = ({ theme, mode, customTheme, hideIcon, hideSymbol, }) => {
    return (<ThemedButton_1.default duration={0.4} variant={'secondary'} theme={theme} mode={mode} customTheme={customTheme}>
      <exports.Balance hideIcon={hideIcon} hideSymbol={hideSymbol}/>
    </ThemedButton_1.default>);
};
exports.default = BalanceButton;
//# sourceMappingURL=index.js.map