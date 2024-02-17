"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLastConnector = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useLastConnector = () => {
    const { storage } = (0, wagmi_1.useConfig)();
    const [lastConnectorId, setLastConnectorId] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const init = async () => {
            const id = await storage?.getItem('recentConnectorId');
            setLastConnectorId(id ?? '');
        };
        init();
    }, []);
    const update = (id) => {
        storage?.setItem('recentConnectorId', id);
    };
    return {
        lastConnectorId,
        updateLastConnectorId: update,
    };
};
exports.useLastConnector = useLastConnector;
//# sourceMappingURL=useLastConnector.js.map