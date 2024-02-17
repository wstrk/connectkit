"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCoinbaseWalletUri = void 0;
const react_1 = require("react");
const ConnectKit_1 = require("./../../components/ConnectKit");
const useConnect_1 = require("./../useConnect");
const useConnectors_1 = require("./../useConnectors");
const wagmi_1 = require("wagmi");
const useWallets_1 = require("../../wallets/useWallets");
function useCoinbaseWalletUri({ enabled } = {
    enabled: true,
}) {
    const { log, displayError } = (0, ConnectKit_1.useContext)();
    const [uri, setUri] = (0, react_1.useState)(undefined);
    const connector = (0, useConnectors_1.useCoinbaseWalletConnector)();
    const wallet = (0, useWallets_1.useWallet)('com.coinbase.wallet');
    const shouldConnect = enabled && !wallet;
    const { isConnected } = (0, wagmi_1.useAccount)();
    const { connectAsync } = (0, useConnect_1.useConnect)();
    (0, react_1.useEffect)(() => {
        if (!shouldConnect)
            return;
        async function handleMessage(message) {
            const { type } = message;
            log('CBW Message', message);
            if (type === 'connecting') {
                const p = await connector.getProvider();
                if (p?.qrUrl)
                    setUri(p.qrUrl);
            }
        }
        async function connectWallet(connector) {
            const result = await connectAsync({ connector });
            if (result)
                return result;
            return false;
        }
        async function connectCoinbaseWallet(connector) {
            try {
                await connectWallet(connector);
            }
            catch (error) {
                log(error);
                displayError(<>
            This dApp is most likely missing the <code>headlessMode: true</code>{' '}
            flag in the custom <code>CoinbaseWalletConnector</code> options. See{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://connect.family.co/v0/docs/cbwHeadlessMode">
              documentation
            </a>{' '}
            for more details.
          </>, error);
            }
        }
        if (!connector || uri)
            return;
        if (connector && !isConnected) {
            connectCoinbaseWallet(connector);
            log('add wc listeners');
            connector.emitter.on('message', handleMessage);
            return () => {
                log('remove wc listeners');
                connector.emitter.off('message', handleMessage);
            };
        }
    }, [shouldConnect, connector, isConnected]);
    return {
        uri,
    };
}
exports.useCoinbaseWalletUri = useCoinbaseWalletUri;
//# sourceMappingURL=useCoinbaseWalletUri.js.map