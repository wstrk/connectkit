"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrDivider = exports.contentVariants = void 0;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../../../styles");
const Portal_1 = require("../Portal");
const utils_1 = require("../../../utils");
const styles_2 = require("./styles");
const ConnectKit_1 = require("../../ConnectKit");
const useLockBodyScroll_1 = require("../../../hooks/useLockBodyScroll");
const react_transition_state_1 = require("react-transition-state");
const useFocusTrap_1 = require("../../../hooks/useFocusTrap");
const usePrevious_1 = require("../../../hooks/usePrevious");
const ConnectKitThemeProvider_1 = require("../../ConnectKitThemeProvider/ConnectKitThemeProvider");
const wagmi_1 = require("wagmi");
const icons_1 = require("../../../assets/icons");
const siwe_1 = require("../../../siwe");
const useLocales_1 = require("../../../hooks/useLocales");
const FitText_1 = require("../FitText");
const useWallets_1 = require("../../../wallets/useWallets");
const ProfileIcon = ({ isSignedIn }) => (<div style={{ position: 'relative' }}>
    {isSignedIn ? (<icons_1.AuthIcon style={{
            bottom: -1,
            right: -1,
        }}/>) : (<div style={{
            zIndex: 2,
            position: 'absolute',
            top: -2,
            right: -2,
            background: '#1A88F8',
            borderRadius: 8,
            boxShadow: '0 0 0 2px var(--ck-body-background)',
            width: 8,
            height: 8,
        }}/>)}
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M16.5 16.775C14.8618 15.0649 12.5552 14 10 14C7.44477 14 5.13825 15.0649 3.5 16.775" stroke="currentColor" strokeWidth="2"/>
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>);
const InfoIcon = ({ ...props }) => (<svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z" fill="currentColor"/>
  </svg>);
const CloseIcon = ({ ...props }) => (<framer_motion_1.motion.svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </framer_motion_1.motion.svg>);
const BackIcon = ({ ...props }) => (<framer_motion_1.motion.svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </framer_motion_1.motion.svg>);
const contentTransitionDuration = 0.22;
exports.contentVariants = {
    initial: {
        zIndex: 2,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: contentTransitionDuration * 0.75,
            delay: contentTransitionDuration * 0.25,
            ease: [0.26, 0.08, 0.25, 1],
        },
    },
    exit: {
        zIndex: 1,
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute',
        left: ['50%', '50%'],
        x: ['-50%', '-50%'],
        transition: {
            duration: contentTransitionDuration,
            ease: [0.26, 0.08, 0.25, 1],
        },
    },
};
const Modal = ({ open, pages, pageId, positionInside, inline, demo, onClose, onBack, onInfo, }) => {
    const context = (0, ConnectKit_1.useContext)();
    const themeContext = (0, ConnectKitThemeProvider_1.useThemeContext)();
    const mobile = (0, utils_1.isMobile)();
    const { isSignedIn, reset } = (0, siwe_1.useSIWE)();
    const wallet = (0, useWallets_1.useWallet)(context.connector?.id);
    const walletInfo = {
        name: wallet?.name,
        shortName: wallet?.shortName ?? wallet?.name,
        icon: wallet?.iconConnector ?? wallet?.icon,
        iconShape: wallet?.iconShape ?? 'circle',
        iconShouldShrink: wallet?.iconShouldShrink,
    };
    const locales = (0, useLocales_1.default)({
        CONNECTORNAME: walletInfo?.name,
    });
    const [state, setOpen] = (0, react_transition_state_1.useTransition)({
        timeout: mobile ? 160 : 160,
        preEnter: true,
        mountOnEnter: true,
        unmountOnExit: true,
    });
    const mounted = !(state === 'exited' || state === 'unmounted');
    const rendered = state === 'preEnter' || state !== 'exiting';
    const currentDepth = context.route === ConnectKit_1.routes.CONNECTORS
        ? 0
        : context.route === ConnectKit_1.routes.DOWNLOAD
            ? 2
            : 1;
    const prevDepth = (0, usePrevious_1.default)(currentDepth, currentDepth);
    if (!positionInside)
        (0, useLockBodyScroll_1.default)(mounted);
    const prevPage = (0, usePrevious_1.default)(pageId, pageId);
    (0, react_1.useEffect)(() => {
        setOpen(open);
        if (open)
            setInTransition(undefined);
    }, [open]);
    const [dimensions, setDimensions] = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    });
    const [inTransition, setInTransition] = (0, react_1.useState)(undefined);
    const updateBounds = (node) => {
        const bounds = {
            width: node?.offsetWidth,
            height: node?.offsetHeight,
        };
        setDimensions({
            width: `${bounds?.width}px`,
            height: `${bounds?.height}px`,
        });
    };
    let blockTimeout;
    const contentRef = (0, react_1.useCallback)((node) => {
        if (!node)
            return;
        ref.current = node;
        setInTransition(inTransition === undefined ? false : true);
        clearTimeout(blockTimeout);
        blockTimeout = setTimeout(() => setInTransition(false), 360);
        updateBounds(node);
    }, [open, inTransition]);
    const { chain } = (0, wagmi_1.useAccount)();
    const { switchChain } = (0, wagmi_1.useSwitchChain)();
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current)
            updateBounds(ref.current);
    }, [chain, switchChain, mobile, isSignedIn, context.options, context.resize]);
    (0, react_1.useEffect)(() => {
        if (!mounted) {
            setDimensions({
                width: undefined,
                height: undefined,
            });
            return;
        }
        const listener = (e) => {
            if (e.key === 'Escape' && onClose)
                onClose();
        };
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    }, [mounted, onClose]);
    const dimensionsCSS = {
        '--height': dimensions.height,
        '--width': dimensions.width,
    };
    function shouldUseQrcode() {
        if (!wallet)
            return false;
        const useInjector = !wallet.getWalletConnectDeeplink || wallet.isInstalled;
        return !useInjector;
    }
    function getHeading() {
        switch (context.route) {
            case ConnectKit_1.routes.ABOUT:
                return locales.aboutScreen_heading;
            case ConnectKit_1.routes.CONNECT:
                if (shouldUseQrcode()) {
                    return (0, utils_1.isWalletConnectConnector)(wallet?.connector?.id)
                        ? locales.scanScreen_heading
                        : locales.scanScreen_heading_withConnector;
                }
                else {
                    return walletInfo?.name;
                }
            case ConnectKit_1.routes.CONNECTORS:
                return locales.connectorsScreen_heading;
            case ConnectKit_1.routes.MOBILECONNECTORS:
                return locales.mobileConnectorsScreen_heading;
            case ConnectKit_1.routes.DOWNLOAD:
                return locales.downloadAppScreen_heading;
            case ConnectKit_1.routes.ONBOARDING:
                return locales.onboardingScreen_heading;
            case ConnectKit_1.routes.PROFILE:
                return locales.profileScreen_heading;
            case ConnectKit_1.routes.SWITCHNETWORKS:
                return locales.switchNetworkScreen_heading;
            case ConnectKit_1.routes.SIGNINWITHETHEREUM:
                return isSignedIn
                    ? locales.signInWithEthereumScreen_signedIn_heading
                    : locales.signInWithEthereumScreen_signedOut_heading;
            default:
                return '';
        }
    }
    const Content = (<styles_1.ResetContainer $useTheme={demo?.theme ?? themeContext.theme} $useMode={demo?.mode ?? themeContext.mode} $customTheme={demo?.customTheme ?? themeContext.customTheme}>
      <styles_2.ModalContainer role="dialog" style={{
            pointerEvents: rendered ? 'auto' : 'none',
            position: positionInside ? 'absolute' : undefined,
        }}>
        {!inline && (<styles_2.BackgroundOverlay $active={rendered} onClick={onClose} $blur={context.options?.overlayBlur}/>)}
        <styles_2.Container style={dimensionsCSS} initial={false}>
          <div style={{
            pointerEvents: inTransition ? 'all' : 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'var(--width)',
            zIndex: 9,
            transition: 'width 200ms ease',
        }}/>
          <styles_2.BoxContainer className={`${rendered && 'active'}`}>
            <framer_motion_1.AnimatePresence initial={false}>
              {context.options?.disclaimer &&
            context.route === ConnectKit_1.routes.CONNECTORS && (<styles_2.DisclaimerBackground initial={{
                opacity: 0,
            }} animate={{
                opacity: 1,
            }} exit={{ opacity: 0 }} transition={{
                delay: 0,
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1.0],
            }}>
                    <styles_2.Disclaimer>
                      <div>{context.options?.disclaimer}</div>
                    </styles_2.Disclaimer>
                  </styles_2.DisclaimerBackground>)}
            </framer_motion_1.AnimatePresence>
            <framer_motion_1.AnimatePresence initial={false}>
              {context.errorMessage && (<styles_2.ErrorMessage initial={{ y: '10%', x: '-50%' }} animate={{ y: '-100%' }} exit={{ y: '100%' }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
                  <span>{context.errorMessage}</span>
                  <div onClick={() => context.displayError(null)} style={{
                position: 'absolute',
                right: 24,
                top: 24,
                cursor: 'pointer',
            }}>
                    <CloseIcon />
                  </div>
                </styles_2.ErrorMessage>)}
            </framer_motion_1.AnimatePresence>
            <styles_2.ControllerContainer>
              {onClose && (<styles_2.CloseButton aria-label={(0, utils_1.flattenChildren)(locales.close).toString()} onClick={onClose}>
                  <CloseIcon />
                </styles_2.CloseButton>)}
              <div style={{
            position: 'absolute',
            top: 23,
            left: 20,
            width: 32,
            height: 32,
        }}>
                <framer_motion_1.AnimatePresence>
                  {onBack ? (<styles_2.BackButton disabled={inTransition} aria-label={(0, utils_1.flattenChildren)(locales.back).toString()} key="backButton" onClick={onBack} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                duration: mobile ? 0 : 0.1,
                delay: mobile ? 0.01 : 0,
            }}>
                      <BackIcon />
                    </styles_2.BackButton>) : context.route === ConnectKit_1.routes.PROFILE &&
            context.signInWithEthereum ? (<>
                      {!isSignedIn && !context.options?.hideTooltips && (<framer_motion_1.motion.div style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                }} initial={{ opacity: 0, scale: 0.8 }} animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5, duration: 0.2 },
                }} exit={{
                    opacity: 0,
                    scale: 0.6,
                    transition: {
                        delay: 0,
                        duration: mobile ? 0 : 0.1,
                    },
                }}>
                          <styles_2.SignInTooltip>
                            {locales.signInWithEthereumScreen_tooltip}
                          </styles_2.SignInTooltip>
                        </framer_motion_1.motion.div>)}
                      <styles_2.SiweButton disabled={inTransition} aria-label={locales.signInWithEthereumScreen_signedOut_heading} key="siweButton" onClick={() => {
                reset();
                context.setRoute(ConnectKit_1.routes.SIGNINWITHETHEREUM);
            }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                duration: mobile ? 0 : 0.1,
                delay: mobile ? 0.01 : 0,
            }}>
                        <ProfileIcon isSignedIn={isSignedIn}/>
                      </styles_2.SiweButton>
                    </>) : (onInfo &&
            !context.options?.hideQuestionMarkCTA && (<styles_2.InfoButton disabled={inTransition} aria-label={(0, utils_1.flattenChildren)(locales.moreInformation).toString()} key="infoButton" onClick={onInfo} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                duration: mobile ? 0 : 0.1,
                delay: mobile ? 0.01 : 0,
            }}>
                        <InfoIcon />
                      </styles_2.InfoButton>))}
                </framer_motion_1.AnimatePresence>
              </div>
            </styles_2.ControllerContainer>

            <styles_2.ModalHeading>
              <framer_motion_1.AnimatePresence>
                <framer_motion_1.motion.div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 52,
            right: 52,
            display: 'flex',
            justifyContent: 'center',
        }} key={`${context.route}-${isSignedIn ? 'signedIn' : ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
            duration: mobile ? 0 : 0.17,
            delay: mobile ? 0.01 : 0,
        }}>
                  <FitText_1.default>{getHeading()}</FitText_1.default>
                </framer_motion_1.motion.div>
              </framer_motion_1.AnimatePresence>
            </styles_2.ModalHeading>

            <styles_2.InnerContainer>
              {Object.keys(pages).map((key) => {
            const page = pages[key];
            return (<Page key={key} open={key === pageId} initial={!positionInside && state !== 'entered'} enterAnim={key === pageId
                    ? currentDepth > prevDepth
                        ? 'active-scale-up'
                        : 'active'
                    : ''} exitAnim={key !== pageId
                    ? currentDepth < prevDepth
                        ? 'exit-scale-down'
                        : 'exit'
                    : ''}>
                    <styles_2.PageContents key={`inner-${key}`} ref={contentRef} style={{
                    pointerEvents: key === pageId && rendered ? 'auto' : 'none',
                }}>
                      {page}
                    </styles_2.PageContents>
                  </Page>);
        })}
            </styles_2.InnerContainer>
          </styles_2.BoxContainer>
        </styles_2.Container>
      </styles_2.ModalContainer>
    </styles_1.ResetContainer>);
    return (<>
      {mounted && (<>
          {positionInside ? (Content) : (<>
              {<Portal_1.default>
                  <useFocusTrap_1.default>{Content}</useFocusTrap_1.default>
                </Portal_1.default>}
            </>)}
        </>)}
    </>);
};
const Page = ({ children, open, initial, prevDepth, currentDepth, enterAnim, exitAnim, }) => {
    const [state, setOpen] = (0, react_transition_state_1.useTransition)({
        timeout: 400,
        preEnter: true,
        initialEntered: open,
        mountOnEnter: true,
        unmountOnExit: true,
    });
    const mounted = !(state === 'exited' || state === 'unmounted');
    const rendered = state === 'preEnter' || state !== 'exiting';
    (0, react_1.useEffect)(() => {
        setOpen(open);
    }, [open]);
    if (!mounted)
        return null;
    return (<styles_2.PageContainer className={`${rendered ? enterAnim : exitAnim}`} style={{
            animationDuration: initial ? '0ms' : undefined,
            animationDelay: initial ? '0ms' : undefined,
        }}>
      {children}
    </styles_2.PageContainer>);
};
const OrDivider = ({ children }) => {
    const locales = (0, useLocales_1.default)();
    return (<styles_2.TextWithHr>
      <span>{children ?? locales.or}</span>
    </styles_2.TextWithHr>);
};
exports.OrDivider = OrDivider;
exports.default = Modal;
//# sourceMappingURL=index.js.map