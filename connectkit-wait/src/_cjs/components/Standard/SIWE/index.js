"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIWEButtonComponent = exports.SIWEButton = void 0;
const Button_1 = require("../../Common/Button");
const icons_1 = require("../../../assets/icons");
const styles_1 = require("../../../styles");
const framer_motion_1 = require("framer-motion");
const useIsMounted_1 = require("../../../hooks/useIsMounted");
const useLocales_1 = require("../../../hooks/useLocales");
const siwe_1 = require("./../../../siwe");
const wagmi_1 = require("wagmi");
const useModal_1 = require("../../../hooks/useModal");
const SIWEButton = ({ showSignOutButton, onSignIn, onSignOut, }) => {
    const isMounted = (0, useIsMounted_1.default)();
    const locales = (0, useLocales_1.default)();
    const { setOpen } = (0, useModal_1.useModal)();
    const { isSignedIn, isReady, isLoading, isRejected, isSuccess, isError, signIn, signOut, error, } = (0, siwe_1.useSIWE)({
        onSignIn: (data) => onSignIn?.(data),
        onSignOut: () => onSignOut?.(),
    });
    const { address: connectedAddress } = (0, wagmi_1.useAccount)();
    function getButtonLabel() {
        if (isSuccess)
            return locales.signedIn;
        if (isRejected)
            return locales.tryAgain;
        if (isLoading)
            return locales.awaitingConfirmation;
        if (isError)
            return error ?? 'Unknown Error';
        if (isReady)
            return locales.signIn;
        return locales.signIn;
    }
    if (!isMounted) {
        return <Button_1.default key="loading" style={{ margin: 0 }} disabled/>;
    }
    if (showSignOutButton && isSignedIn) {
        return (<Button_1.default key="button" style={{ margin: 0 }} onClick={signOut} icon={<icons_1.DisconnectIcon />}>
        {locales.signOut}
      </Button_1.default>);
    }
    if (!connectedAddress) {
        return (<Button_1.default key="button" style={{ margin: 0 }} onClick={() => setOpen(true)} arrow>
        {locales.walletNotConnected}
      </Button_1.default>);
    }
    return (<Button_1.default key="button" style={{ margin: 0 }} arrow={!isSignedIn ? !isLoading && !isRejected : false} onClick={!isLoading && !isSuccess ? signIn : undefined} disabled={isLoading} waiting={isLoading} icon={isRejected && (<framer_motion_1.motion.div initial={{
                rotate: -270,
            }} animate={{
                rotate: 0,
            }} transition={{
                duration: 1,
                ease: [0.175, 0.885, 0.32, 0.98],
            }}>
            <icons_1.RetryIcon style={{ opacity: 0.4 }}/>
          </framer_motion_1.motion.div>)}>
      {getButtonLabel()}
    </Button_1.default>);
};
exports.SIWEButton = SIWEButton;
const SIWEButtonComponent = ({ ...props }) => (<styles_1.ResetContainer>
    <exports.SIWEButton {...props}/>
  </styles_1.ResetContainer>);
exports.SIWEButtonComponent = SIWEButtonComponent;
exports.default = exports.SIWEButtonComponent;
//# sourceMappingURL=index.js.map