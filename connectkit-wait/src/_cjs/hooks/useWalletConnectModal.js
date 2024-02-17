"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletConnectModal = void 0;
const react_1 = require("react");
const connectors_1 = require("wagmi/connectors");
const ConnectKit_1 = require("../components/ConnectKit");
const utils_1 = require("../utils");
const useConnect_1 = require("./useConnect");
function useWalletConnectModal() {
    const { log } = (0, ConnectKit_1.useContext)();
    const { connectAsync, connectors } = (0, useConnect_1.useConnect)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return {
        isOpen,
        open: async () => {
            const w3mcss = document.createElement('style');
            w3mcss.innerHTML = `w3m-modal, wcm-modal{ --wcm-z-index: 2147483647; --w3m-z-index:2147483647; }`;
            document.head.appendChild(w3mcss);
            const clientConnector = connectors.find((c) => (0, utils_1.isWalletConnectConnector)(c.id));
            if (clientConnector) {
                const connector = (0, connectors_1.walletConnect)({
                    projectId: '',
                    showQrModal: true,
                });
                setIsOpen(true);
                try {
                    await connectAsync({ connector: connector });
                }
                catch (err) {
                    log('WalletConnect', err);
                }
                setIsOpen(false);
                document.head.removeChild(w3mcss);
            }
            else {
                log('No WalletConnect connector available');
            }
        },
    };
}
exports.useWalletConnectModal = useWalletConnectModal;
//# sourceMappingURL=useWalletConnectModal.js.map