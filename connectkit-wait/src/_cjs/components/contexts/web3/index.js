"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWeb3 = exports.Web3ContextProvider = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useChains_1 = require("../../../hooks/useChains");
const useWalletConnectUri_1 = require("../../../hooks/connectors/useWalletConnectUri");
const useCoinbaseWalletUri_1 = require("../../../hooks/connectors/useCoinbaseWalletUri");
const utils_1 = require("../../../utils");
const useIsMobile_1 = require("../../../hooks/useIsMobile");
const useChainIsSupported_1 = require("../../../hooks/useChainIsSupported");
const Web3Context = react_1.default.createContext({
    connect: {
        getUri: () => '',
    },
    dapp: {
        chains: [],
    },
    account: undefined,
});
const Web3ContextProvider = ({ enabled, children, }) => {
    const isMobile = (0, useIsMobile_1.default)();
    const { uri: walletConnectUri } = (0, useWalletConnectUri_1.useWalletConnectUri)({
        enabled,
    });
    const { uri: coinbaseWalletUri } = (0, useCoinbaseWalletUri_1.useCoinbaseWalletUri)({
        enabled: enabled && !isMobile,
    });
    const { address: currentAddress, chain } = (0, wagmi_1.useAccount)();
    const chainIsSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const chains = (0, useChains_1.useChains)();
    const value = {
        connect: {
            getUri: (id) => {
                if ((0, utils_1.isCoinbaseWalletConnector)(id))
                    return coinbaseWalletUri;
                return walletConnectUri;
            },
        },
        dapp: {
            chains,
        },
        account: currentAddress
            ? {
                chain,
                chainIsSupported,
                address: currentAddress,
            }
            : undefined,
    };
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
exports.Web3ContextProvider = Web3ContextProvider;
const useWeb3 = () => react_1.default.useContext(Web3Context);
exports.useWeb3 = useWeb3;
//# sourceMappingURL=index.js.map