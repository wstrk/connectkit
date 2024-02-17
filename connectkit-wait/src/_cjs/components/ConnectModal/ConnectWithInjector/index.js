"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.states = void 0;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const Button_1 = require("../../Common/Button");
const Tooltip_1 = require("../../Common/Tooltip");
const Alert_1 = require("../../Common/Alert");
const SquircleSpinner_1 = require("./SquircleSpinner");
const icons_1 = require("../../../assets/icons");
const BrowserIcon_1 = require("../../Common/BrowserIcon");
const icons_2 = require("../../../assets/icons");
const utils_1 = require("../../../utils");
const useLocales_1 = require("../../../hooks/useLocales");
const useConnect_1 = require("../../../hooks/useConnect");
const ConnectKit_1 = require("../../ConnectKit");
const useWallets_1 = require("../../../wallets/useWallets");
const CircleSpinner_1 = require("./CircleSpinner");
exports.states = {
    CONNECTED: 'connected',
    CONNECTING: 'connecting',
    EXPIRING: 'expiring',
    FAILED: 'failed',
    REJECTED: 'rejected',
    NOTCONNECTED: 'notconnected',
    UNAVAILABLE: 'unavailable',
};
const contentVariants = {
    initial: {
        willChange: 'transform,opacity',
        position: 'relative',
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        position: 'relative',
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.16, 1, 0.3, 1],
            duration: 0.4,
            delay: 0.05,
            position: { delay: 0 },
        },
    },
    exit: {
        position: 'absolute',
        opacity: 0,
        scale: 0.95,
        transition: {
            ease: [0.16, 1, 0.3, 1],
            duration: 0.3,
        },
    },
};
const ConnectWithInjector = ({ switchConnectMethod, forceState }) => {
    const { connect } = (0, useConnect_1.useConnect)({
        mutation: {
            onMutate: (connector) => {
                if (connector.connector) {
                    setStatus(exports.states.CONNECTING);
                }
                else {
                    setStatus(exports.states.UNAVAILABLE);
                }
            },
            onError(err) {
                console.error(err);
            },
            onSettled(data, error) {
                if (error) {
                    setShowTryAgainTooltip(true);
                    setTimeout(() => setShowTryAgainTooltip(false), 3500);
                    if (error.code) {
                        switch (error.code) {
                            case -32002:
                                setStatus(exports.states.NOTCONNECTED);
                                break;
                            case 4001:
                                setStatus(exports.states.REJECTED);
                                break;
                            default:
                                setStatus(exports.states.FAILED);
                                break;
                        }
                    }
                    else {
                        if (error.message) {
                            switch (error.message) {
                                case 'User rejected request':
                                    setStatus(exports.states.REJECTED);
                                    break;
                                default:
                                    setStatus(exports.states.FAILED);
                                    break;
                            }
                        }
                    }
                }
                else if (data) {
                }
                setTimeout(triggerResize, 100);
            },
        },
    });
    const { triggerResize, connector: c } = (0, ConnectKit_1.useContext)();
    const id = c.id;
    const wallet = (0, useWallets_1.useWallet)(id);
    const walletInfo = {
        name: wallet?.name,
        shortName: wallet?.shortName ?? wallet?.name,
        icon: wallet?.iconConnector ?? wallet?.icon,
        iconShape: wallet?.iconShape ?? 'circle',
        iconShouldShrink: wallet?.iconShouldShrink,
    };
    const [showTryAgainTooltip, setShowTryAgainTooltip] = (0, react_1.useState)(false);
    const expiryDefault = 9;
    const [expiryTimer, setExpiryTimer] = (0, react_1.useState)(expiryDefault);
    const browser = (0, utils_1.detectBrowser)();
    const extensionUrl = wallet?.downloadUrls?.[browser];
    const suggestedExtension = wallet?.downloadUrls
        ? {
            name: Object.keys(wallet?.downloadUrls)[0],
            label: Object.keys(wallet?.downloadUrls)[0]?.charAt(0).toUpperCase() +
                Object.keys(wallet?.downloadUrls)[0]?.slice(1),
            url: wallet?.downloadUrls[Object.keys(wallet?.downloadUrls)[0]],
        }
        : undefined;
    const [status, setStatus] = (0, react_1.useState)(forceState
        ? forceState
        : !wallet?.isInstalled
            ? exports.states.UNAVAILABLE
            : exports.states.CONNECTING);
    const locales = (0, useLocales_1.default)({
        CONNECTORNAME: walletInfo.name,
        CONNECTORSHORTNAME: walletInfo.shortName ?? walletInfo.name,
        SUGGESTEDEXTENSIONBROWSER: suggestedExtension?.label ?? 'your browser',
    });
    const runConnect = async () => {
        if (wallet?.isInstalled && wallet?.connector) {
            connect({ connector: wallet?.connector });
        }
        else {
            setStatus(exports.states.UNAVAILABLE);
        }
    };
    let connectTimeout;
    (0, react_1.useEffect)(() => {
        if (status === exports.states.UNAVAILABLE)
            return;
        connectTimeout = setTimeout(runConnect, 600);
        return () => {
            clearTimeout(connectTimeout);
        };
    }, []);
    if (!wallet) {
        return (<styles_2.PageContent>
        <styles_1.Container>
          <styles_2.ModalHeading>Invalid State</styles_2.ModalHeading>
          <styles_2.ModalContent>
            <Alert_1.default>
              No connectors match the id given. This state should never happen.
            </Alert_1.default>
          </styles_2.ModalContent>
        </styles_1.Container>
      </styles_2.PageContent>);
    }
    if ((0, utils_1.isWalletConnectConnector)(wallet?.connector.id)) {
        return (<styles_2.PageContent>
        <styles_1.Container>
          <styles_2.ModalHeading>Invalid State</styles_2.ModalHeading>
          <styles_2.ModalContent>
            <Alert_1.default>
              WalletConnect does not have an injection flow. This state should
              never happen.
            </Alert_1.default>
          </styles_2.ModalContent>
        </styles_1.Container>
      </styles_2.PageContent>);
    }
    return (<styles_2.PageContent>
      <styles_1.Container>
        <styles_1.ConnectingContainer>
          <styles_1.ConnectingAnimation $shake={status === exports.states.FAILED || status === exports.states.REJECTED} $circle={walletInfo.iconShape === 'circle'}>
            <framer_motion_1.AnimatePresence>
              {(status === exports.states.FAILED || status === exports.states.REJECTED) && (<styles_1.RetryButton aria-label="Retry" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1 }} onClick={runConnect}>
                  <styles_1.RetryIconContainer>
                    <Tooltip_1.default open={showTryAgainTooltip &&
                (status === exports.states.FAILED || status === exports.states.REJECTED)} message={locales.tryAgainQuestion} xOffset={-6}>
                      <icons_1.RetryIconCircle />
                    </Tooltip_1.default>
                  </styles_1.RetryIconContainer>
                </styles_1.RetryButton>)}
            </framer_motion_1.AnimatePresence>
            {walletInfo.iconShape === 'circle' ? (<CircleSpinner_1.default logo={status === exports.states.UNAVAILABLE ? (<div style={{
                    transform: 'scale(1.14)',
                    position: 'relative',
                    width: '100%',
                }}>
                      {walletInfo.icon}
                    </div>) : (<>{walletInfo.icon}</>)} smallLogo={walletInfo.iconShouldShrink} connecting={status === exports.states.CONNECTING} unavailable={status === exports.states.UNAVAILABLE}/>) : (<SquircleSpinner_1.default logo={status === exports.states.UNAVAILABLE ? (<div style={{
                    transform: 'scale(1.14)',
                    position: 'relative',
                    width: '100%',
                }}>
                      {walletInfo.icon}
                    </div>) : (<>{walletInfo.icon}</>)} connecting={status === exports.states.CONNECTING}/>)}
            
          </styles_1.ConnectingAnimation>
        </styles_1.ConnectingContainer>
        <styles_2.ModalContentContainer>
          <framer_motion_1.AnimatePresence initial={false}>
            {status === exports.states.FAILED && (<styles_1.Content key={exports.states.FAILED} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                <styles_2.ModalContent>
                  <styles_2.ModalH1 $error>
                    <icons_2.AlertIcon />
                    {locales.injectionScreen_failed_h1}
                  </styles_2.ModalH1>
                  <styles_2.ModalBody>{locales.injectionScreen_failed_p}</styles_2.ModalBody>
                </styles_2.ModalContent>
                
                
              </styles_1.Content>)}
            {status === exports.states.REJECTED && (<styles_1.Content key={exports.states.REJECTED} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                <styles_2.ModalContent style={{ paddingBottom: 28 }}>
                  <styles_2.ModalH1>{locales.injectionScreen_rejected_h1}</styles_2.ModalH1>
                  <styles_2.ModalBody>{locales.injectionScreen_rejected_p}</styles_2.ModalBody>
                </styles_2.ModalContent>

                
                
              </styles_1.Content>)}
            {(status === exports.states.CONNECTING || status === exports.states.EXPIRING) && (<styles_1.Content key={exports.states.CONNECTING} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                <styles_2.ModalContent style={{ paddingBottom: 28 }}>
                  <styles_2.ModalH1>
                    {wallet.connector.id === 'injected'
                ? locales.injectionScreen_connecting_injected_h1
                : locales.injectionScreen_connecting_h1}
                  </styles_2.ModalH1>
                  <styles_2.ModalBody>
                    {wallet.connector.id === 'injected'
                ? locales.injectionScreen_connecting_injected_p
                : locales.injectionScreen_connecting_p}
                  </styles_2.ModalBody>
                </styles_2.ModalContent>
              </styles_1.Content>)}
            {status === exports.states.CONNECTED && (<styles_1.Content key={exports.states.CONNECTED} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                <styles_2.ModalContent>
                  <styles_2.ModalH1 $valid>
                    <icons_2.TickIcon /> {locales.injectionScreen_connected_h1}
                  </styles_2.ModalH1>
                  <styles_2.ModalBody>{locales.injectionScreen_connected_p}</styles_2.ModalBody>
                </styles_2.ModalContent>
              </styles_1.Content>)}
            {status === exports.states.NOTCONNECTED && (<styles_1.Content key={exports.states.NOTCONNECTED} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                <styles_2.ModalContent>
                  <styles_2.ModalH1>{locales.injectionScreen_notconnected_h1}</styles_2.ModalH1>
                  <styles_2.ModalBody>
                    {locales.injectionScreen_notconnected_p}
                  </styles_2.ModalBody>
                </styles_2.ModalContent>
              </styles_1.Content>)}
            {status === exports.states.UNAVAILABLE && (<styles_1.Content key={exports.states.UNAVAILABLE} initial={'initial'} animate={'animate'} exit={'exit'} variants={contentVariants}>
                {!extensionUrl ? (<>
                    <styles_2.ModalContent style={{ paddingBottom: 12 }}>
                      <styles_2.ModalH1>
                        {locales.injectionScreen_unavailable_h1}
                      </styles_2.ModalH1>
                      <styles_2.ModalBody>
                        {locales.injectionScreen_unavailable_p}
                      </styles_2.ModalBody>
                    </styles_2.ModalContent>

                    {!wallet.isInstalled && suggestedExtension && (<Button_1.default href={suggestedExtension?.url} icon={<BrowserIcon_1.default browser={suggestedExtension?.name}/>}>
                        Install on {suggestedExtension?.label}
                      </Button_1.default>)}
                  </>) : (<>
                    <styles_2.ModalContent style={{ paddingBottom: 18 }}>
                      <styles_2.ModalH1>{locales.injectionScreen_install_h1}</styles_2.ModalH1>
                      <styles_2.ModalBody>{locales.injectionScreen_install_p}</styles_2.ModalBody>
                    </styles_2.ModalContent>
                    
                    {!wallet.isInstalled && extensionUrl && (<Button_1.default href={extensionUrl} icon={<BrowserIcon_1.default />}>
                        {locales.installTheExtension}
                      </Button_1.default>)}
                  </>)}
              </styles_1.Content>)}
          </framer_motion_1.AnimatePresence>
        </styles_2.ModalContentContainer>
      </styles_1.Container>
    </styles_2.PageContent>);
};
exports.default = ConnectWithInjector;
//# sourceMappingURL=index.js.map