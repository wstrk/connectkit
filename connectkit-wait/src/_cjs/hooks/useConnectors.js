"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMetaMaskConnector = exports.useCoinbaseWalletConnector = exports.useWalletConnectConnector = exports.useInjectedConnector = exports.useConnector = exports.useConnectors = void 0;
const wagmi_1 = require("wagmi");
function useConnectors() {
    const connectors = (0, wagmi_1.useConnectors)();
    return connectors ?? [];
}
exports.useConnectors = useConnectors;
function useConnector(id, uuid) {
    const connectors = useConnectors();
    if (id === 'injected' && uuid) {
        return connectors.find((c) => c.id === id && c.name === uuid);
    }
    else if (id === 'injected') {
        return connectors.find((c) => c.id === id && c.name.includes('Injected'));
    }
    return connectors.find((c) => c.id === id);
}
exports.useConnector = useConnector;
function useInjectedConnector(uuid) {
    return useConnector('injected', uuid);
}
exports.useInjectedConnector = useInjectedConnector;
function useWalletConnectConnector() {
    return useConnector('walletConnect') ?? useConnector('walletConnectLegacy');
}
exports.useWalletConnectConnector = useWalletConnectConnector;
function useCoinbaseWalletConnector() {
    return useConnector('coinbaseWalletSDK');
}
exports.useCoinbaseWalletConnector = useCoinbaseWalletConnector;
function useMetaMaskConnector() {
    return useConnector('metaMask');
}
exports.useMetaMaskConnector = useMetaMaskConnector;
//# sourceMappingURL=useConnectors.js.map