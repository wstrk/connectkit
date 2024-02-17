"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnectCallback = void 0;
const wagmi_1 = require("wagmi");
const useConnectCallback = ({ onConnect, onDisconnect, }) => {
    (0, wagmi_1.useAccountEffect)({
        onConnect: ({ address, connector, isReconnected }) => {
            if (!isReconnected) {
                onConnect?.({
                    address: address,
                    connectorId: connector?.id,
                });
            }
        },
        onDisconnect: () => onDisconnect?.(),
    });
};
exports.useConnectCallback = useConnectCallback;
//# sourceMappingURL=useConnectCallback.js.map