"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
const wagmi_1 = require("wagmi");
const ConnectKit_1 = require("../components/ConnectKit");
const siwe_1 = require("../siwe");
const useConnectCallback_1 = require("./useConnectCallback");
const safeRoutes = {
    disconnected: [
        ConnectKit_1.routes.CONNECTORS,
        ConnectKit_1.routes.ABOUT,
        ConnectKit_1.routes.ONBOARDING,
        ConnectKit_1.routes.MOBILECONNECTORS,
        ConnectKit_1.routes.ONBOARDING,
    ],
    connected: [ConnectKit_1.routes.PROFILE, ConnectKit_1.routes.SWITCHNETWORKS, ConnectKit_1.routes.SIGNINWITHETHEREUM],
};
const allRoutes = [
    ...safeRoutes.connected,
    ...safeRoutes.disconnected,
];
const useModal = ({ onConnect, onDisconnect } = {}) => {
    const context = (0, ConnectKit_1.useContext)();
    (0, useConnectCallback_1.useConnectCallback)({
        onConnect,
        onDisconnect,
    });
    const { isConnected } = (0, wagmi_1.useAccount)();
    const { signIn } = (0, siwe_1.useSIWE)();
    const close = () => {
        context.setOpen(false);
    };
    const open = () => {
        context.setOpen(true);
    };
    const gotoAndOpen = (route) => {
        let validRoute = route;
        if (!allRoutes.includes(route)) {
            validRoute = isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS;
            context.log(`Route ${route} is not a valid route, navigating to ${validRoute} instead.`);
        }
        else {
            if (isConnected) {
                if (!safeRoutes.connected.includes(route)) {
                    validRoute = ConnectKit_1.routes.PROFILE;
                    context.log(`Route ${route} is not a valid route when connected, navigating to ${validRoute} instead.`);
                }
            }
            else {
                if (!safeRoutes.disconnected.includes(route)) {
                    validRoute = ConnectKit_1.routes.CONNECTORS;
                    context.log(`Route ${route} is not a valid route when disconnected, navigating to ${validRoute} instead.`);
                }
            }
        }
        context.setRoute(validRoute);
        open();
    };
    return {
        open: context.open,
        setOpen: (show) => {
            if (show) {
                gotoAndOpen(isConnected ? ConnectKit_1.routes.PROFILE : ConnectKit_1.routes.CONNECTORS);
            }
            else {
                close();
            }
        },
        openAbout: () => gotoAndOpen(ConnectKit_1.routes.ABOUT),
        openOnboarding: () => gotoAndOpen(ConnectKit_1.routes.ONBOARDING),
        openProfile: () => gotoAndOpen(ConnectKit_1.routes.PROFILE),
        openSwitchNetworks: () => gotoAndOpen(ConnectKit_1.routes.SWITCHNETWORKS),
        openSIWE: (triggerSIWE) => {
            gotoAndOpen(ConnectKit_1.routes.SIGNINWITHETHEREUM);
            if (triggerSIWE)
                signIn();
        },
    };
};
exports.useModal = useModal;
//# sourceMappingURL=useModal.js.map