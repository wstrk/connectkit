"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectors_1 = require("@wagmi/connectors");
const defaultConnectors = ({ app, walletConnectProjectId, }) => {
    const hasAllAppData = app.name && app.icon && app.description && app.url;
    const shouldUseSafeConnector = !(typeof window === 'undefined') && window?.parent !== window;
    const connectors = [];
    if (shouldUseSafeConnector) {
        connectors.push((0, connectors_1.safe)({
            allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
        }));
    }
    connectors.push((0, connectors_1.injected)({ target: 'metaMask' }), (0, connectors_1.coinbaseWallet)({
        appName: app.name,
        appLogoUrl: app.icon,
        headlessMode: true,
        overrideIsMetaMask: false,
    }));
    if (walletConnectProjectId) {
        connectors.push((0, connectors_1.walletConnect)({
            showQrModal: false,
            projectId: walletConnectProjectId,
            metadata: hasAllAppData
                ? {
                    name: app.name,
                    description: app.description,
                    url: app.url,
                    icons: [app.icon],
                }
                : undefined,
        }));
    }
    return connectors;
};
exports.default = defaultConnectors;
//# sourceMappingURL=defaultConnectors.js.map