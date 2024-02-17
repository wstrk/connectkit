"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ConnectKit_1 = require("../ConnectKit");
const Modal_1 = require("../Common/Modal");
const Onboarding_1 = require("../Pages/Onboarding");
const About_1 = require("../Pages/About");
const Connectors_1 = require("../Pages/Connectors");
const MobileConnectors_1 = require("../Pages/MobileConnectors");
const ConnectUsing_1 = require("./ConnectUsing");
const DownloadApp_1 = require("../Pages/DownloadApp");
const Profile_1 = require("../Pages/Profile");
const SwitchNetworks_1 = require("../Pages/SwitchNetworks");
const SignInWithEthereum_1 = require("../Pages/SignInWithEthereum");
const defaultConfig_1 = require("../../defaultConfig");
const ConnectKitThemeProvider_1 = require("../ConnectKitThemeProvider/ConnectKitThemeProvider");
const useChainIsSupported_1 = require("../../hooks/useChainIsSupported");
const customThemeDefault = {};
const ConnectModal = ({ mode = 'auto', theme = 'auto', customTheme = customThemeDefault, lang = 'en-US', }) => {
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
        profile: <Profile_1.default />,
        switchNetworks: <SwitchNetworks_1.default />,
        signInWithEthereum: <SignInWithEthereum_1.default />,
    };
    function hide() {
        context.setOpen(false);
    }
    (0, react_1.useEffect)(() => {
        if (isConnected) {
            if (context.route !== ConnectKit_1.routes.PROFILE ||
                context.route !== ConnectKit_1.routes.SIGNINWITHETHEREUM) {
                if (context.signInWithEthereum &&
                    !context.options?.disableSiweRedirect) {
                    context.setRoute(ConnectKit_1.routes.SIGNINWITHETHEREUM);
                }
                else {
                    hide();
                }
            }
        }
        else {
            hide();
        }
    }, [isConnected]);
    (0, react_1.useEffect)(() => context.setMode(mode), [mode]);
    (0, react_1.useEffect)(() => context.setTheme(theme), [theme]);
    (0, react_1.useEffect)(() => context.setCustomTheme(customTheme), [customTheme]);
    (0, react_1.useEffect)(() => context.setLang(lang), [lang]);
    (0, react_1.useEffect)(() => {
        const appName = (0, defaultConfig_1.getAppName)();
        if (!appName || !context.open)
            return;
        const title = document.createElement('meta');
        title.setAttribute('property', 'og:title');
        title.setAttribute('content', appName);
        document.head.prepend(title);
        return () => {
            document.head.removeChild(title);
        };
    }, [context.open]);
    return (<ConnectKitThemeProvider_1.ConnectKitThemeProvider theme={theme} customTheme={customTheme} mode={mode}>
      <Modal_1.default open={context.open} pages={pages} pageId={context.route} onClose={closeable ? hide : undefined} onInfo={showInfoButton ? () => context.setRoute(ConnectKit_1.routes.ABOUT) : undefined} onBack={showBackButton ? onBack : undefined}/>
    </ConnectKitThemeProvider_1.ConnectKitThemeProvider>);
};
exports.default = ConnectModal;
//# sourceMappingURL=index.js.map