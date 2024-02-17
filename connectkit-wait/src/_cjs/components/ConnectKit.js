"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContext = exports.ConnectKitProvider = exports.Context = exports.routes = void 0;
const react_1 = require("react");
const buffer_1 = require("buffer");
const defaultTheme_1 = require("../styles/defaultTheme");
const ConnectModal_1 = require("../components/ConnectModal");
const styled_components_1 = require("styled-components");
const useGoogleFont_1 = require("../hooks/useGoogleFont");
const siwe_1 = require("./../siwe");
const useChains_1 = require("../hooks/useChains");
const useConnectCallback_1 = require("../hooks/useConnectCallback");
const wallets_1 = require("../utils/wallets");
const useConnectors_1 = require("../hooks/useConnectors");
const wagmi_1 = require("wagmi");
const web3_1 = require("./contexts/web3");
const useChainIsSupported_1 = require("../hooks/useChainIsSupported");
exports.routes = {
    ONBOARDING: 'onboarding',
    ABOUT: 'about',
    CONNECTORS: 'connectors',
    MOBILECONNECTORS: 'mobileConnectors',
    CONNECT: 'connect',
    DOWNLOAD: 'download',
    PROFILE: 'profile',
    SWITCHNETWORKS: 'switchNetworks',
    SIGNINWITHETHEREUM: 'signInWithEthereum',
};
exports.Context = (0, react_1.createContext)(null);
const ConnectKitProvider = ({ children, theme = 'auto', mode = 'auto', customTheme, options, onConnect, onDisconnect, debugMode = false, }) => {
    if (!react_1.default.useContext(wagmi_1.WagmiContext)) {
        throw Error('ConnectKitProvider must be within a WagmiProvider');
    }
    if (react_1.default.useContext(exports.Context)) {
        throw new Error('Multiple, nested usages of ConnectKitProvider detected. Please use only one.');
    }
    (0, useConnectCallback_1.useConnectCallback)({
        onConnect,
        onDisconnect,
    });
    const chains = (0, useChains_1.useChains)();
    const injectedConnector = (0, useConnectors_1.useConnector)('injected');
    const defaultOptions = {
        language: 'en-US',
        hideBalance: false,
        hideTooltips: false,
        hideQuestionMarkCTA: false,
        hideNoWalletCTA: false,
        walletConnectCTA: 'link',
        hideRecentBadge: false,
        avoidLayoutShift: true,
        embedGoogleFonts: false,
        truncateLongENSAddress: true,
        walletConnectName: undefined,
        reducedMotion: false,
        disclaimer: null,
        bufferPolyfill: true,
        customAvatar: undefined,
        initialChainId: chains?.[0]?.id,
        enforceSupportedChains: true,
        ethereumOnboardingUrl: undefined,
        walletOnboardingUrl: undefined,
        disableSiweRedirect: false,
    };
    const opts = Object.assign({}, defaultOptions, options);
    if (typeof window !== 'undefined') {
        if (opts.bufferPolyfill)
            window.Buffer = window.Buffer ?? buffer_1.Buffer;
    }
    const [ckTheme, setTheme] = (0, react_1.useState)(theme);
    const [ckMode, setMode] = (0, react_1.useState)(mode);
    const [ckCustomTheme, setCustomTheme] = (0, react_1.useState)(customTheme ?? {});
    const [ckLang, setLang] = (0, react_1.useState)('en-US');
    const [open, setOpen] = (0, react_1.useState)(false);
    const [connector, setConnector] = (0, react_1.useState)({
        id: '',
    });
    const [route, setRoute] = (0, react_1.useState)(exports.routes.CONNECTORS);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [resize, onResize] = (0, react_1.useState)(0);
    if (opts.embedGoogleFonts)
        (0, useGoogleFont_1.useThemeFont)(theme);
    (0, react_1.useEffect)(() => setTheme(theme), [theme]);
    (0, react_1.useEffect)(() => setLang(opts.language || 'en-US'), [opts.language]);
    (0, react_1.useEffect)(() => setErrorMessage(null), [route, open]);
    const { chain, isConnected } = (0, wagmi_1.useAccount)();
    const isChainSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    (0, react_1.useEffect)(() => {
        if (isConnected && opts.enforceSupportedChains && !isChainSupported) {
            setOpen(true);
            setRoute(exports.routes.SWITCHNETWORKS);
        }
    }, [isConnected, isChainSupported, chain, route, open]);
    (0, react_1.useEffect)(() => {
        if ((0, wallets_1.isFamily)()) {
            injectedConnector?.connect();
        }
    }, [injectedConnector]);
    const log = debugMode ? console.log : () => { };
    const value = {
        theme: ckTheme,
        setTheme,
        mode: ckMode,
        setMode,
        customTheme,
        setCustomTheme,
        lang: ckLang,
        setLang,
        open,
        setOpen,
        route,
        setRoute,
        connector,
        setConnector,
        signInWithEthereum: react_1.default.useContext(siwe_1.SIWEContext)?.enabled ?? false,
        onConnect,
        options: opts,
        errorMessage,
        debugMode,
        log,
        displayError: (message, code) => {
            setErrorMessage(message);
            console.log('---------CONNECTKIT DEBUG---------');
            console.log(message);
            if (code)
                console.table(code);
            console.log('---------/CONNECTKIT DEBUG---------');
        },
        resize,
        triggerResize: () => onResize((prev) => prev + 1),
    };
    return (0, react_1.createElement)(exports.Context.Provider, { value }, <>
      <web3_1.Web3ContextProvider enabled={open}>
        <styled_components_1.ThemeProvider theme={defaultTheme_1.default}>
          {children}
          <ConnectModal_1.default lang={ckLang} theme={ckTheme} mode={mode} customTheme={ckCustomTheme}/>
        </styled_components_1.ThemeProvider>
      </web3_1.Web3ContextProvider>
    </>);
};
exports.ConnectKitProvider = ConnectKitProvider;
const useContext = () => {
    const context = react_1.default.useContext(exports.Context);
    if (!context)
        throw Error('ConnectKit Hook must be inside a Provider.');
    return context;
};
exports.useContext = useContext;
//# sourceMappingURL=ConnectKit.js.map