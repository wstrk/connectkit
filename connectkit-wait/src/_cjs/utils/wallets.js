"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isZerion = exports.isRainbow = exports.isFordefi = exports.isTalisman = exports.isTokenPocket = exports.isTrust = exports.isFrontier = exports.isRabby = exports.isInfinityWallet = exports.isPhantom = exports.isFrame = exports.isDawn = exports.isTokenary = exports.isBrave = exports.isFamily = exports.isCoinbaseWallet = exports.isMetaMask = exports.isWalletInstalled = void 0;
const isWalletInstalled = (name) => {
    if (typeof window === 'undefined')
        return false;
    const { ethereum } = window;
    return !!(ethereum?.[`is${name}`] ||
        (ethereum?.providers &&
            ethereum?.providers.find((provider) => provider?.[`is${name}`])));
};
exports.isWalletInstalled = isWalletInstalled;
const isMetaMask = () => (0, exports.isWalletInstalled)('MetaMask');
exports.isMetaMask = isMetaMask;
const isCoinbaseWallet = () => (0, exports.isWalletInstalled)('CoinbaseWallet');
exports.isCoinbaseWallet = isCoinbaseWallet;
const isFamily = () => (0, exports.isWalletInstalled)('Family');
exports.isFamily = isFamily;
const isBrave = () => (0, exports.isWalletInstalled)('BraveWallet');
exports.isBrave = isBrave;
const isTokenary = () => (0, exports.isWalletInstalled)('Tokenary');
exports.isTokenary = isTokenary;
const isDawn = () => (0, exports.isWalletInstalled)('Dawn');
exports.isDawn = isDawn;
const isFrame = () => (0, exports.isWalletInstalled)('Frame');
exports.isFrame = isFrame;
const isPhantom = () => (0, exports.isWalletInstalled)('Phantom');
exports.isPhantom = isPhantom;
const isInfinityWallet = () => (0, exports.isWalletInstalled)('InfinityWallet');
exports.isInfinityWallet = isInfinityWallet;
const isRabby = () => (0, exports.isWalletInstalled)('Rabby');
exports.isRabby = isRabby;
const isFrontier = () => (0, exports.isWalletInstalled)('Frontier');
exports.isFrontier = isFrontier;
const isTrust = () => {
    if (typeof window === 'undefined')
        return false;
    return ((0, exports.isWalletInstalled)('Trust') ||
        window?.trustWallet?.isTrust ||
        window?.trustwallet?.isTrust);
};
exports.isTrust = isTrust;
const isTokenPocket = () => (0, exports.isWalletInstalled)('TokenPocket');
exports.isTokenPocket = isTokenPocket;
const isTalisman = () => (0, exports.isWalletInstalled)('Talisman');
exports.isTalisman = isTalisman;
const isFordefi = () => (0, exports.isWalletInstalled)('Fordefi');
exports.isFordefi = isFordefi;
const isRainbow = () => (0, exports.isWalletInstalled)('Rainbow');
exports.isRainbow = isRainbow;
const isZerion = () => (0, exports.isWalletInstalled)('Zerion');
exports.isZerion = isZerion;
//# sourceMappingURL=wallets.js.map