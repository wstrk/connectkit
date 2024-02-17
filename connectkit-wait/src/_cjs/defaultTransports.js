"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultTransports = void 0;
const wagmi_1 = require("wagmi");
const chains_1 = require("wagmi/chains");
const chainConfigs_1 = require("./constants/chainConfigs");
const createTransport = ({ chain, provider = 'public', apiKey, }) => {
    const supportedChain = chainConfigs_1.chainConfigs.find((c) => c.id === chain.id);
    if (supportedChain?.rpcUrls) {
        if (provider === 'alchemy') {
            if (supportedChain.rpcUrls?.alchemy?.http) {
                return (0, wagmi_1.http)(supportedChain.rpcUrls?.alchemy?.http + apiKey);
            }
            else {
                return (0, wagmi_1.webSocket)(supportedChain.rpcUrls?.alchemy?.webSocket + apiKey);
            }
        }
        else if (provider === 'infura') {
            if (supportedChain.rpcUrls?.infura?.http) {
                return (0, wagmi_1.http)(supportedChain.rpcUrls?.infura?.http + apiKey);
            }
            else {
                return (0, wagmi_1.webSocket)(supportedChain.rpcUrls?.infura?.webSocket + apiKey);
            }
        }
    }
    return (0, wagmi_1.http)();
};
const getDefaultTransports = ({ chains = [chains_1.mainnet, chains_1.polygon, chains_1.optimism, chains_1.arbitrum], alchemyId, infuraId, }) => {
    const transports = {};
    Object.keys(chains).forEach((key, index) => {
        const chain = chains[index];
        const urls = [];
        if (alchemyId)
            urls.push(createTransport({ chain, provider: 'alchemy', apiKey: alchemyId }));
        if (infuraId)
            urls.push(createTransport({ chain, provider: 'infura', apiKey: infuraId }));
        urls.push((0, wagmi_1.http)());
        transports[chain.id] = (0, wagmi_1.fallback)(urls);
    });
    return transports;
};
exports.getDefaultTransports = getDefaultTransports;
//# sourceMappingURL=defaultTransports.js.map