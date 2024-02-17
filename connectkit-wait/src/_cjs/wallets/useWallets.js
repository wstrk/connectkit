"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWallets = exports.useWallet = void 0;
const useConnectors_1 = require("../hooks/useConnectors");
const walletConfigs_1 = require("./walletConfigs");
const ConnectKit_1 = require("../components/ConnectKit");
const useWallet = (id) => {
    const wallets = (0, exports.useWallets)();
    const wallet = wallets.find((c) => c.id === id);
    if (!wallet)
        return null;
    return wallet;
};
exports.useWallet = useWallet;
const useWallets = () => {
    const connectors = (0, useConnectors_1.useConnectors)();
    const context = (0, ConnectKit_1.useContext)();
    const wallets = connectors.map((connector) => {
        const walletId = Object.keys(walletConfigs_1.walletConfigs).find((id) => id
            .split(',')
            .map((i) => i.trim())
            .indexOf(connector.id) !== -1);
        const c = {
            id: connector.id,
            name: connector.name ?? connector.id ?? connector.type,
            icon: (<img src={connector.icon} alt={connector.name} width={'100%'} height={'100%'}/>),
            connector,
            iconShape: 'squircle',
            isInstalled: connector.type === 'injected' && connector.id !== 'metaMask',
        };
        if (walletId) {
            const wallet = walletConfigs_1.walletConfigs[walletId];
            return {
                ...c,
                iconConnector: connector.icon ? (<img src={connector.icon} alt={connector.name} width={'100%'} height={'100%'}/>) : undefined,
                ...wallet,
            };
        }
        return c;
    });
    return (wallets
        .filter((wallet, index, self) => self.findIndex((w) => w.id === wallet.id) === index)
        .map((wallet) => {
        if (wallet.id === 'walletConnect') {
            return {
                ...wallet,
                name: context.options?.walletConnectName || wallet.name,
                shortName: context.options?.walletConnectName || wallet.shortName,
            };
        }
        return wallet;
    })
        .filter((wallet, index, self) => !(wallet.id === 'coinbaseWalletSDK' &&
        self.find((w) => w.id === 'com.coinbase.wallet')))
        .filter((wallet, index, self) => !(wallet.id === 'metaMask' &&
        self.find((w) => w.id === 'io.metamask' || w.id === 'io.metamask.mobile')))
        .sort((a, b) => {
        if (a.isInstalled && !b.isInstalled)
            return -1;
        if (!a.isInstalled && b.isInstalled)
            return 1;
        return 0;
    })
        .sort((a, b) => {
        if (a.id === 'walletConnect')
            return 1;
        if (b.id === 'walletConnect')
            return -1;
        return 0;
    }));
};
exports.useWallets = useWallets;
//# sourceMappingURL=useWallets.js.map