"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletConnectUri = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ConnectKit_1 = require("../../components/ConnectKit");
const useConnect_1 = require("../useConnect");
const useConnectors_1 = require("./../useConnectors");
function useWalletConnectUri({ enabled } = {
    enabled: true,
}) {
    const { log } = (0, ConnectKit_1.useContext)();
    const [uri, setUri] = (0, react_1.useState)(undefined);
    const connector = (0, useConnectors_1.useWalletConnectConnector)();
    const { isConnected } = (0, wagmi_1.useAccount)();
    const { connectAsync } = (0, useConnect_1.useConnect)();
    (0, react_1.useEffect)(() => {
        if (!enabled)
            return;
        async function handleMessage(message) {
            const { type, data } = message;
            log('WC Message', type, data);
            if (type === 'display_uri') {
                setUri(data);
            }
        }
        async function handleDisconnect() {
            log('WC Disconnect');
            if (connector)
                connectWallet(connector);
        }
        async function connectWallet(connector) {
            const result = await connectAsync({ connector });
            if (result)
                return result;
            return false;
        }
        async function connectWalletConnect(connector) {
            try {
                await connectWallet(connector);
            }
            catch (error) {
                log('catch error');
                log(error);
                if (error.code) {
                    switch (error.code) {
                        case 4001:
                            log('error.code - User rejected');
                            connectWalletConnect(connector);
                            break;
                        default:
                            log('error.code - Unknown Error');
                            break;
                    }
                }
                else {
                    log('WalletConnect cannot connect.', error);
                }
            }
        }
        if (!connector || uri)
            return;
        if (connector && !isConnected) {
            connectWalletConnect(connector);
            log('add wc listeners');
            connector.emitter.on('message', handleMessage);
            connector.emitter.on('disconnect', handleDisconnect);
            return () => {
                log('remove wc listeners');
                connector.emitter.off('message', handleMessage);
                connector.emitter.off('disconnect', handleDisconnect);
            };
        }
    }, [enabled, connector, isConnected]);
    return {
        uri,
    };
}
exports.useWalletConnectUri = useWalletConnectUri;
//# sourceMappingURL=useWalletConnectUri.js.map