"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wallets = void 0;
const connectors_1 = require("@wagmi/connectors");
const walletConfigs_1 = require("./walletConfigs");
exports.wallets = Object.keys(walletConfigs_1.walletConfigs).reduce((acc, key) => {
    const config = walletConfigs_1.walletConfigs[key];
    if (!config?.getWalletConnectDeeplink)
        return acc;
    const target = key.split(',')[0].trim();
    const flag = config.name?.replace('Wallet', '').replace(' ', '') ??
        target[0].toUpperCase() + target.slice(1);
    const connector = (0, connectors_1.injected)({
        target: {
            id: target,
            name: config.name ?? config.shortName ?? key,
            provider: (w) => w?.ethereum?.[`is${flag}`],
        },
    });
    const name = (config.name ?? config.shortName ?? key)
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
        .replace(/\s/g, '')
        .replace(/(?:^|\s)\S/g, (a) => a.toLowerCase());
    acc[name] = connector;
    return acc;
}, {});
//# sourceMappingURL=index.js.map