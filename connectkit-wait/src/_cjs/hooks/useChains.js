"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChains = void 0;
const wagmi_1 = require("wagmi");
function useChains() {
    const wagmi = (0, wagmi_1.useConfig)();
    const chains = wagmi?.chains ?? [];
    return chains.map((c) => c);
}
exports.useChains = useChains;
//# sourceMappingURL=useChains.js.map