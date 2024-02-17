"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const ConnectKit_1 = require("../ConnectKit");
const useWallets_1 = require("../../wallets/useWallets");
const ConnectWithInjector_1 = require("./ConnectWithInjector");
const ConnectWithQRCode_1 = require("./ConnectWithQRCode");
const Modal_1 = require("../Common/Modal");
const Alert_1 = require("../Common/Alert");
const states = {
    QRCODE: 'qrcode',
    INJECTOR: 'injector',
};
const ConnectUsing = () => {
    const context = (0, ConnectKit_1.useContext)();
    const wallet = (0, useWallets_1.useWallet)(context.connector.id);
    const isQrCode = !wallet?.isInstalled && wallet?.getWalletConnectDeeplink;
    const [status, setStatus] = (0, react_1.useState)(isQrCode ? states.QRCODE : states.INJECTOR);
    (0, react_1.useEffect)(() => {
        const checkProvider = async () => {
            const res = await wallet?.connector.getProvider();
            if (!res) {
                setStatus(states.QRCODE);
                setTimeout(context.triggerResize, 10);
            }
        };
        if (status === states.INJECTOR)
            checkProvider();
    }, []);
    if (!wallet)
        return <Alert_1.default>Connector not found {context.connector.id}</Alert_1.default>;
    return (<framer_motion_1.AnimatePresence>
      {status === states.QRCODE && (<framer_motion_1.motion.div key={states.QRCODE} initial={'initial'} animate={'animate'} exit={'exit'} variants={Modal_1.contentVariants}>
          <ConnectWithQRCode_1.default switchConnectMethod={(id) => {
                setStatus(states.INJECTOR);
            }}/>
        </framer_motion_1.motion.div>)}
      {status === states.INJECTOR && (<framer_motion_1.motion.div key={states.INJECTOR} initial={'initial'} animate={'animate'} exit={'exit'} variants={Modal_1.contentVariants}>
          <ConnectWithInjector_1.default switchConnectMethod={(id) => {
                setStatus(states.QRCODE);
            }}/>
        </framer_motion_1.motion.div>)}
    </framer_motion_1.AnimatePresence>);
};
exports.default = ConnectUsing;
//# sourceMappingURL=ConnectUsing.js.map