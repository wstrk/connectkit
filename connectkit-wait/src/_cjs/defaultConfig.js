"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppIcon = exports.getAppName = void 0;
const wagmi_1 = require("wagmi");
const chains_1 = require("wagmi/chains");
const defaultConnectors_1 = require("./defaultConnectors");
let globalAppName;
let globalAppIcon;
const getAppName = () => globalAppName;
exports.getAppName = getAppName;
const getAppIcon = () => globalAppIcon;
exports.getAppIcon = getAppIcon;
const defaultConfig = ({ appName = 'ConnectKit', appIcon, appDescription, appUrl, walletConnectProjectId, chains = [chains_1.mainnet, chains_1.polygon, chains_1.optimism, chains_1.arbitrum], client, ...props }) => {
    globalAppName = appName;
    if (appIcon)
        globalAppIcon = appIcon;
    const transports = props?.transports ??
        Object.fromEntries(chains.map((chain) => [chain.id, (0, wagmi_1.http)()]));
    const connectors = props?.connectors ??
        (0, defaultConnectors_1.default)({
            app: {
                name: appName,
                icon: appIcon,
                description: appDescription,
                url: appUrl,
            },
            walletConnectProjectId,
        });
    const config = {
        ...props,
        chains,
        connectors,
        transports,
    };
    return config;
};
exports.default = defaultConfig;
//# sourceMappingURL=defaultConfig.js.map