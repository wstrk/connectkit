"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectKitButton = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const utils_1 = require("./../../utils");
const useIsMounted_1 = require("../../hooks/useIsMounted");
const styles_1 = require("./styles");
const ConnectKit_1 = require("../ConnectKit");
const useModal_1 = require("../../hooks/useModal");
const Avatar_1 = require("../Common/Avatar");
const framer_motion_1 = require("framer-motion");
const BalanceButton_1 = require("../BalanceButton");
const ThemedButton_1 = require("../Common/ThemedButton");
const styles_2 = require("../../styles");
const icons_1 = require("../../assets/icons");
const siwe_1 = require("../../siwe");
const useLocales_1 = require("../../hooks/useLocales");
const useChainIsSupported_1 = require("../../hooks/useChainIsSupported");
const contentVariants = {
    initial: {
        zIndex: 2,
        opacity: 0,
        x: '-100%',
    },
    animate: {
        opacity: 1,
        x: 0.1,
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
        },
    },
    exit: {
        zIndex: 1,
        opacity: 0,
        x: '-100%',
        pointerEvents: 'none',
        position: 'absolute',
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};
const addressVariants = {
    initial: {
        zIndex: 2,
        opacity: 0,
        x: '100%',
    },
    animate: {
        x: 0.2,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
        },
    },
    exit: {
        zIndex: 1,
        x: '100%',
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute',
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};
const textVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 1, 0.5, 1],
        },
    },
    exit: {
        position: 'absolute',
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};
const ConnectButtonRenderer = ({ children, }) => {
    const isMounted = (0, useIsMounted_1.default)();
    const context = (0, ConnectKit_1.useContext)();
    const { open, setOpen } = (0, useModal_1.useModal)();
    const { address, isConnected, chain } = (0, wagmi_1.useAccount)();
    const isChainSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const { data: ensName } = (0, wagmi_1.useEnsName)({
        chainId: 1,
        address: address,
    });
    function hide() {
        setOpen(false);
    }
    function show() {
        setOpen(true);
        context.setRoute(isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS);
    }
    if (!children)
        return null;
    if (!isMounted)
        return null;
    return (<>
      {children({
            show,
            hide,
            chain: chain,
            unsupported: !isChainSupported,
            isConnected: !!address,
            isConnecting: open,
            address: address,
            truncatedAddress: address ? (0, utils_1.truncateEthAddress)(address) : undefined,
            ensName: ensName?.toString(),
        })}
    </>);
};
ConnectButtonRenderer.displayName = 'ConnectKitButton.Custom';
function ConnectKitButtonInner({ label, showAvatar, separator, }) {
    const locales = (0, useLocales_1.default)({});
    const context = (0, ConnectKit_1.useContext)();
    const { isSignedIn } = (0, siwe_1.useSIWE)();
    const { address, chain } = (0, wagmi_1.useAccount)();
    const isChainSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const { data: ensName } = (0, wagmi_1.useEnsName)({
        chainId: 1,
        address: address,
    });
    const defaultLabel = locales.connectWallet;
    return (<framer_motion_1.AnimatePresence initial={false}>
      {address ? (<styles_1.TextContainer key="connectedText" initial={'initial'} animate={'animate'} exit={'exit'} variants={addressVariants} style={{
                height: 40,
            }}>
          {showAvatar && (<styles_1.IconContainer>
              <framer_motion_1.AnimatePresence initial={false}>
                {isSignedIn && (<framer_motion_1.motion.div style={{
                        zIndex: 2,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <icons_1.AuthIcon />
                  </framer_motion_1.motion.div>)}
                {!isChainSupported && (<styles_1.UnsupportedNetworkContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z" fill="currentColor"/>
                    </svg>
                  </styles_1.UnsupportedNetworkContainer>)}
              </framer_motion_1.AnimatePresence>
              <Avatar_1.default size={24} address={address}/>
            </styles_1.IconContainer>)}

          <div style={{
                position: 'relative',
                paddingRight: showAvatar ? 1 : 0,
            }}>
            <framer_motion_1.AnimatePresence initial={false}>
              {ensName ? (<styles_1.TextContainer key="ckEnsName" initial={'initial'} animate={'animate'} exit={'exit'} variants={textVariants} style={{
                    position: ensName ? 'relative' : 'absolute',
                }}>
                  {context.options?.truncateLongENSAddress
                    ? (0, utils_1.truncateENSAddress)(ensName, 20)
                    : ensName}
                </styles_1.TextContainer>) : (<styles_1.TextContainer key="ckTruncatedAddress" initial={'initial'} animate={'animate'} exit={'exit'} variants={textVariants} style={{
                    position: ensName ? 'absolute' : 'relative',
                }}>
                  {(0, utils_1.truncateEthAddress)(address, separator)}{' '}
                </styles_1.TextContainer>)}
            </framer_motion_1.AnimatePresence>
          </div>
        </styles_1.TextContainer>) : (<styles_1.TextContainer key="connectWalletText" initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants} style={{
                height: 40,
            }}>
          {label ? label : defaultLabel}
        </styles_1.TextContainer>)}
    </framer_motion_1.AnimatePresence>);
}
function ConnectKitButton({ label, showBalance = false, showAvatar = true, theme, mode, customTheme, onClick, }) {
    const isMounted = (0, useIsMounted_1.default)();
    const context = (0, ConnectKit_1.useContext)();
    const { isConnected, address, chain } = (0, wagmi_1.useAccount)();
    const chainIsSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    function show() {
        context.setOpen(true);
        context.setRoute(isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS);
    }
    const separator = ['web95', 'rounded', 'minimal'].includes(theme ?? context.theme ?? '')
        ? '....'
        : undefined;
    if (!isMounted)
        return null;
    const shouldShowBalance = showBalance && chainIsSupported;
    const willShowBalance = address && shouldShowBalance;
    return (<styles_2.ResetContainer $useTheme={theme ?? context.theme} $useMode={mode ?? context.mode} $customTheme={customTheme ?? context.customTheme}>
      <ThemedButton_1.ThemeContainer onClick={() => {
            if (onClick) {
                onClick(show);
            }
            else {
                show();
            }
        }}>
        {shouldShowBalance && (<framer_motion_1.AnimatePresence initial={false}>
            {willShowBalance && (<framer_motion_1.motion.div key={'balance'} initial={{
                    opacity: 0,
                    x: '100%',
                    width: 0,
                    marginRight: 0,
                }} animate={{
                    opacity: 1,
                    x: 0,
                    width: 'auto',
                    marginRight: -24,
                    transition: {
                        duration: 0.4,
                        ease: [0.25, 1, 0.5, 1],
                    },
                }} exit={{
                    opacity: 0,
                    x: '100%',
                    width: 0,
                    marginRight: 0,
                    transition: {
                        duration: 0.4,
                        ease: [0.25, 1, 0.5, 1],
                    },
                }}>
                <ThemedButton_1.default variant={'secondary'} theme={theme ?? context.theme} mode={mode ?? context.mode} customTheme={customTheme ?? context.customTheme} style={{ overflow: 'hidden' }}>
                  <framer_motion_1.motion.div style={{ paddingRight: 24 }}>
                    <BalanceButton_1.Balance hideSymbol/>
                  </framer_motion_1.motion.div>
                </ThemedButton_1.default>
              </framer_motion_1.motion.div>)}
          </framer_motion_1.AnimatePresence>)}
        <ThemedButton_1.default theme={theme ?? context.theme} mode={mode ?? context.mode} customTheme={customTheme ?? context.customTheme} style={shouldShowBalance &&
            showBalance &&
            address &&
            (theme === 'retro' || context.theme === 'retro')
            ? {
                boxShadow: 'var(--ck-connectbutton-balance-connectbutton-box-shadow)',
                borderRadius: 'var(--ck-connectbutton-balance-connectbutton-border-radius)',
                overflow: 'hidden',
            }
            : {
                overflow: 'hidden',
            }}>
          <ConnectKitButtonInner separator={separator} showAvatar={showAvatar} label={label}/>
        </ThemedButton_1.default>
      </ThemedButton_1.ThemeContainer>
    </styles_2.ResetContainer>);
}
exports.ConnectKitButton = ConnectKitButton;
ConnectKitButton.Custom = ConnectButtonRenderer;
//# sourceMappingURL=index.js.map