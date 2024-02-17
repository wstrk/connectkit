"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ConnectKit_1 = require("../ConnectKit");
const Modal_1 = require("../Common/Modal");
const Onboarding_1 = require("../Pages/Onboarding");
const About_1 = require("../Pages/About");
const Connectors_1 = require("../Pages/Connectors");
const ConnectUsing_1 = require("./ConnectUsing");
const DownloadApp_1 = require("../Pages/DownloadApp");
const Profile_1 = require("../Pages/Profile");
const SwitchNetworks_1 = require("../Pages/SwitchNetworks");
const MobileConnectors_1 = require("../Pages/MobileConnectors");
const SignInWithEthereum_1 = require("../Pages/SignInWithEthereum");
const ConnectButton_1 = require("../ConnectButton");
const defaultConfig_1 = require("../../defaultConfig");
const ConnectKitThemeProvider_1 = require("../ConnectKitThemeProvider/ConnectKitThemeProvider");
const styled_1 = require("./../../styles/styled");
const styled_components_1 = require("styled-components");
const web3_1 = require("../contexts/web3");
const useChainIsSupported_1 = require("../../hooks/useChainIsSupported");
const dist = 8;
const shake = (0, styled_components_1.keyframes) `
  0%{ transform:none; }
  25%{ transform:translateX(${dist}px); }
  50%{ transform:translateX(-${dist}px); }
  75%{ transform:translateX(${dist}px); }
  100%{ transform:none; }
`;
const cursorIn = (0, styled_components_1.keyframes) `
  0%{ transform:translate(500%,100%); opacity:0; }
  60%{ transform:translate(25%,-20%); opacity:1; }
  70%{ transform:translate(25%,-20%); }
  85%{ transform:translate(25%,-20%) scale(0.9); }
  100%{ transform:translate(25%,-20%) scale(1); opacity:1; }
`;
const Cursor = styled_1.default.div `
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  &.play {
    animation: ${cursorIn} 1300ms 200ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`;
const Container = styled_1.default.div `
  z-index: 1;
  position: absolute;
  inset: 0;
  &.shake {
    animation: ${shake} 300ms 100ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`;
const ButtonContainer = styled_1.default.div `
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 9;
    content: '';
    position: absolute;
    inset: 0;
  }
`;
const customThemeDefault = {};
const ConnectModal = ({ theme = 'auto', customTheme = customThemeDefault, lang = 'en-US', mode = 'auto', inline = false, open, onClose, }) => {
    const context = (0, ConnectKit_1.useContext)();
    const { isConnected, chain } = (0, wagmi_1.useAccount)();
    const chainIsSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const closeable = !(context.options?.enforceSupportedChains &&
        isConnected &&
        !chainIsSupported);
    const showBackButton = closeable &&
        context.route !== ConnectKit_1.routes.CONNECTORS &&
        context.route !== ConnectKit_1.routes.PROFILE;
    const showInfoButton = closeable && context.route !== ConnectKit_1.routes.PROFILE;
    const onBack = () => {
        if (context.route === ConnectKit_1.routes.SIGNINWITHETHEREUM) {
            context.setRoute(ConnectKit_1.routes.PROFILE);
        }
        else if (context.route === ConnectKit_1.routes.SWITCHNETWORKS) {
            context.setRoute(ConnectKit_1.routes.PROFILE);
        }
        else if (context.route === ConnectKit_1.routes.DOWNLOAD) {
            context.setRoute(ConnectKit_1.routes.CONNECT);
        }
        else {
            context.setRoute(ConnectKit_1.routes.CONNECTORS);
        }
    };
    const pages = {
        onboarding: <Onboarding_1.default />,
        about: <About_1.default />,
        download: <DownloadApp_1.default />,
        connectors: <Connectors_1.default />,
        mobileConnectors: <MobileConnectors_1.default />,
        connect: <ConnectUsing_1.default />,
        profile: <Profile_1.default closeModal={() => setIsOpen(false)}/>,
        switchNetworks: <SwitchNetworks_1.default />,
        signInWithEthereum: <SignInWithEthereum_1.default />,
    };
    const ref = (0, react_1.useRef)(null);
    const cursorRef = (0, react_1.useRef)(null);
    const [isOpen, setIsOpen] = (0, react_1.useState)(open ?? false);
    (0, react_1.useEffect)(() => {
        if (open)
            context.setRoute(isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS);
        setIsOpen(open ?? false);
    }, [open]);
    (0, react_1.useEffect)(() => {
        if (isOpen)
            context.setRoute(isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS);
    }, [isOpen]);
    (0, react_1.useEffect)(() => {
        if (!isOpen && inline) {
            if (onClose) {
                if (cursorRef.current) {
                    cursorRef.current.classList.remove('play');
                    void cursorRef.current.offsetWidth;
                    cursorRef.current.classList.add('play');
                }
                setTimeout(() => {
                    setIsOpen(true);
                }, 1500);
            }
            else {
                setTimeout(() => {
                    setIsOpen(true);
                }, 500);
            }
        }
    }, [isOpen]);
    const onModalClose = () => {
        if (onClose) {
            setIsOpen(false);
            onClose();
        }
        else {
            if (ref.current) {
                ref.current.classList.remove('shake');
                void ref.current.offsetWidth;
                ref.current.classList.add('shake');
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (isConnected) {
            if (context.route !== ConnectKit_1.routes.PROFILE ||
                context.route !== ConnectKit_1.routes.SIGNINWITHETHEREUM) {
                if (context.signInWithEthereum &&
                    !context.options?.disableSiweRedirect) {
                    context.setRoute(ConnectKit_1.routes.SIGNINWITHETHEREUM);
                }
                else {
                    onModalClose();
                }
            }
        }
        else {
            onModalClose();
        }
    }, [isConnected]);
    (0, react_1.useEffect)(() => {
        const appName = (0, defaultConfig_1.getAppName)();
        if (!appName || (!open && !inline))
            return;
        const title = document.createElement('meta');
        title.setAttribute('property', 'og:title');
        title.setAttribute('content', appName);
        document.head.prepend(title);
        return () => {
            document.head.removeChild(title);
        };
    }, [open, inline]);
    return (<web3_1.Web3ContextProvider enabled={isOpen}>
      <ConnectKitThemeProvider_1.ConnectKitThemeProvider theme={theme} customTheme={customTheme} mode={mode}>
        <Container ref={ref}>
          {inline && onClose && (<>
              <Cursor ref={cursorRef}/>
              <ButtonContainer>
                <ConnectButton_1.ConnectKitButton customTheme={customTheme} theme={theme} mode={mode}/>
              </ButtonContainer>
            </>)}
          <Modal_1.default demo={{ theme: theme, customTheme: customTheme, mode: mode }} onClose={closeable ? onModalClose : undefined} positionInside={inline} open={isOpen} pages={pages} pageId={context.route} onInfo={showInfoButton ? () => context.setRoute(ConnectKit_1.routes.ABOUT) : undefined} onBack={showBackButton ? onBack : undefined}/>
        </Container>
      </ConnectKitThemeProvider_1.ConnectKitThemeProvider>
    </web3_1.Web3ContextProvider>);
};
exports.default = ConnectModal;
//# sourceMappingURL=demo.js.map