"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenChildren = exports.detectOS = exports.detectBrowser = exports.isAndroid = exports.isMobile = exports.truncateENSAddress = exports.truncateEthAddress = exports.nFormatter = exports.isInjectedConnector = exports.isSafeConnector = exports.isLedgerConnector = exports.isCoinbaseWalletConnector = exports.isMetaMaskConnector = exports.isWalletConnectConnector = void 0;
const react_1 = require("react");
const detect_browser_1 = require("detect-browser");
const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
const truncateEthAddress = (address, separator = '••••') => {
    if (!address)
        return '';
    const match = address.match(truncateRegex);
    if (!match)
        return address;
    return `${match[1]}${separator}${match[2]}`;
};
exports.truncateEthAddress = truncateEthAddress;
const truncateENSAddress = (ensName, maxLength) => {
    if (ensName.length > maxLength) {
        return ensName.replace('.eth', '').slice(0, maxLength) + '...';
    }
    else {
        return ensName;
    }
};
exports.truncateENSAddress = truncateENSAddress;
const nFormatter = (num, digits = 2) => {
    if (num < 10000)
        return num.toFixed(2);
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'm' },
        { value: 1e9, symbol: 'g' },
        { value: 1e12, symbol: 't' },
        { value: 1e15, symbol: 'p' },
        { value: 1e18, symbol: 'e' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
        return num >= item.value;
    });
    return item
        ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
        : '0';
};
exports.nFormatter = nFormatter;
const detectBrowser = () => {
    const browser = (0, detect_browser_1.detect)();
    return browser?.name ?? '';
};
exports.detectBrowser = detectBrowser;
const detectOS = () => {
    const browser = (0, detect_browser_1.detect)();
    return browser?.os ?? '';
};
exports.detectOS = detectOS;
const isIOS = () => {
    const os = detectOS();
    return os.toLowerCase().includes('ios');
};
const isAndroid = () => {
    const os = detectOS();
    return os.toLowerCase().includes('android');
};
exports.isAndroid = isAndroid;
const isMobile = () => {
    return isAndroid() || isIOS();
};
exports.isMobile = isMobile;
function flattenChildren(children) {
    const childrenArray = react_1.default.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child) => {
        if (child.type === react_1.default.Fragment) {
            return flatChildren.concat(flattenChildren(child.props.children));
        }
        flatChildren.push(child);
        return flatChildren;
    }, []);
}
exports.flattenChildren = flattenChildren;
const isWalletConnectConnector = (connectorId) => connectorId === 'walletConnect' || connectorId === 'walletConnectLegacy';
exports.isWalletConnectConnector = isWalletConnectConnector;
const isMetaMaskConnector = (connectorId) => connectorId === 'metaMask';
exports.isMetaMaskConnector = isMetaMaskConnector;
const isCoinbaseWalletConnector = (connectorId) => connectorId === 'coinbaseWalletSDK';
exports.isCoinbaseWalletConnector = isCoinbaseWalletConnector;
const isLedgerConnector = (connectorId) => connectorId === 'ledger';
exports.isLedgerConnector = isLedgerConnector;
const isSafeConnector = (connectorId) => connectorId === 'safe';
exports.isSafeConnector = isSafeConnector;
const isInjectedConnector = (connectorId) => connectorId === 'injected';
exports.isInjectedConnector = isInjectedConnector;
//# sourceMappingURL=index.js.map