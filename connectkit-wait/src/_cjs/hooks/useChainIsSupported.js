"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainIsSupported = void 0;
const wagmi_1 = require("wagmi");
function useChainIsSupported(chainId) {
    const { chains } = (0, wagmi_1.useConfig)();
    if (!chainId)
        return false;
    return chains.some((x) => x.id === chainId);
}
exports.useChainIsSupported = useChainIsSupported;
//# sourceMappingURL=useChainIsSupported.js.map