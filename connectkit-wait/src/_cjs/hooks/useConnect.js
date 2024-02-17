"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnect = void 0;
const wagmi_1 = require("wagmi");
const ConnectKit_1 = require("../components/ConnectKit");
function useConnect({ ...props } = {}) {
    const context = (0, ConnectKit_1.useContext)();
    const { connect, connectAsync, connectors, ...rest } = (0, wagmi_1.useConnect)({
        ...props,
        mutation: {
            ...props.mutation,
            onError(err) {
                if (err.message) {
                    if (err.message !== 'User rejected request') {
                        context.log(err.message, err);
                    }
                }
                else {
                    context.log(`Could not connect.`, err);
                }
            },
        },
    });
    return {
        connect: ({ connector, chainId, mutation, }) => {
            return connect({
                connector,
                chainId: chainId ?? context.options?.initialChainId,
            }, mutation);
        },
        connectAsync: async ({ connector, chainId, mutation, }) => {
            return connectAsync({
                connector,
                chainId: chainId ?? context.options?.initialChainId,
            }, mutation);
        },
        connectors,
        ...rest,
    };
}
exports.useConnect = useConnect;
//# sourceMappingURL=useConnect.js.map