"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wagmi_1 = require("wagmi");
const chainConfigs_1 = require("../../../constants/chainConfigs");
const styles_1 = require("./styles");
const Alert_1 = require("../Alert");
const framer_motion_1 = require("framer-motion");
const utils_1 = require("../../../utils");
const chains_1 = require("../../../assets/chains");
const useLocales_1 = require("../../../hooks/useLocales");
const ConnectKit_1 = require("../../ConnectKit");
const Spinner = (<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 16.75C2.69036 16.75 3.25 17.3096 3.25 18V19C3.25 26.5939 9.40609 32.75 17 32.75V35.25C8.02537 35.25 0.75 27.9746 0.75 19V18C0.75 17.3096 1.30964 16.75 2 16.75Z" fill="url(#paint0_linear_1288_18701)"/>
    <defs>
      <linearGradient id="paint0_linear_1288_18701" x1="2" y1="19.4884" x2="16.8752" y2="33.7485" gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--ck-spinner-color)"/>
        <stop offset="1" stopColor="var(--ck-spinner-color)" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>);
const ChainSelectList = ({ variant, }) => {
    const { connector, chain } = (0, wagmi_1.useAccount)();
    const { chains, isPending, data, switchChain, error } = (0, wagmi_1.useSwitchChain)();
    const locales = (0, useLocales_1.default)({});
    const mobile = (0, utils_1.isMobile)();
    const isError = error?.['code'] === 4902;
    const disabled = isError || !switchChain;
    const handleSwitchNetwork = (chainId) => {
        if (switchChain) {
            switchChain({ chainId });
        }
    };
    const pendingChainId = isPending ? data?.id : undefined;
    const { triggerResize } = (0, ConnectKit_1.useContext)();
    return (<styles_1.SwitchNetworksContainer style={{ marginBottom: switchChain !== undefined ? -8 : 0 }}>
      <styles_1.ChainButtonContainer>
        <styles_1.ChainButtons>
          {chains.map((x) => {
            const c = chainConfigs_1.chainConfigs.find((ch) => ch.id === x.id);
            const ch = { ...c, ...x };
            return (<styles_1.ChainButton key={`${ch?.id}-${ch?.name}`} $variant={variant} disabled={disabled ||
                    ch.id === chain?.id ||
                    (isPending && pendingChainId === ch.id)} onClick={() => handleSwitchNetwork?.(ch.id)} style={{
                    opacity: disabled && ch.id !== chain?.id ? 0.4 : undefined,
                }}>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 12,
                    color: ch.id === chain?.id
                        ? 'var(--ck-dropdown-active-color, inherit)'
                        : 'inherit',
                }}>
                  <styles_1.ChainLogoContainer>
                    <styles_1.ChainLogoSpinner initial={{ opacity: 0 }} animate={{
                    opacity: isPending && pendingChainId === ch.id ? 1 : 0,
                }} transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 0.15,
                    delay: 0.1,
                }}>
                      <framer_motion_1.motion.div key={`${ch?.id}-${ch?.name}`} animate={mobile &&
                    (0, utils_1.isCoinbaseWalletConnector)(connector?.id) &&
                    isPending &&
                    pendingChainId === ch.id
                    ? {
                        opacity: [1, 0],
                        transition: { delay: 4, duration: 3 },
                    }
                    : { opacity: 1 }}>
                        {Spinner}
                      </framer_motion_1.motion.div>
                    </styles_1.ChainLogoSpinner>
                    <styles_1.ChainIcon>
                      {ch.logo ?? <chains_1.default.UnknownChain />}
                    </styles_1.ChainIcon>
                  </styles_1.ChainLogoContainer>
                  {ch.name}
                </span>
                {variant !== 'secondary' && (<styles_1.ChainButtonStatus>
                    <framer_motion_1.AnimatePresence initial={false} exitBeforeEnter>
                      {ch.id === chain?.id && (<framer_motion_1.motion.span key={'connectedText'} style={{
                            color: 'var(--ck-dropdown-active-color, var(--ck-focus-color))',
                            display: 'block',
                            position: 'relative',
                        }} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} exit={{
                            opacity: 0,
                            x: 4,
                            transition: { duration: 0.1, delay: 0 },
                        }} transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 0.3,
                            delay: 0.2,
                        }}>
                          {locales.connected}
                        </framer_motion_1.motion.span>)}
                      {isPending && pendingChainId === ch.id && (<framer_motion_1.motion.span key={'approveText'} style={{
                            color: 'var(--ck-dropdown-pending-color, inherit)',
                            display: 'block',
                            position: 'relative',
                        }} initial={{
                            opacity: 0,
                            x: -4,
                        }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 4 }} transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 0.3,
                            delay: 0.1,
                        }}>
                          <framer_motion_1.motion.span animate={mobile &&
                            (0, utils_1.isCoinbaseWalletConnector)(connector?.id) && {
                            opacity: [1, 0],
                            transition: { delay: 4, duration: 4 },
                        }}>
                            {locales.approveInWallet}
                          </framer_motion_1.motion.span>
                        </framer_motion_1.motion.span>)}
                    </framer_motion_1.AnimatePresence>
                  </styles_1.ChainButtonStatus>)}
                {variant === 'secondary' ? (<styles_1.ChainButtonBg initial={false} animate={{
                        opacity: ch.id === chain?.id ? 1 : 0,
                    }} transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}/>) : (ch.id === chain?.id && (<styles_1.ChainButtonBg layoutId="activeChain" layout="position" transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}/>))}
              </styles_1.ChainButton>);
        })}
        </styles_1.ChainButtons>
      </styles_1.ChainButtonContainer>
      <framer_motion_1.AnimatePresence>
        {isError && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.3,
            }} onAnimationStart={triggerResize} onAnimationComplete={triggerResize}>
            <div style={{ paddingTop: 10, paddingBottom: 8 }}>
              <Alert_1.default>
                {locales.warnings_walletSwitchingUnsupported}{' '}
                {locales.warnings_walletSwitchingUnsupportedResolve}
              </Alert_1.default>
            </div>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>
    </styles_1.SwitchNetworksContainer>);
};
exports.default = ChainSelectList;
//# sourceMappingURL=index.js.map