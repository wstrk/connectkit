"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../../ConnectKit");
const styles_1 = require("../../Common/Modal/styles");
const styles_2 = require("./styles");
const wagmi_1 = require("wagmi");
const SIWE_1 = require("../../Standard/SIWE");
const siwe_1 = require("../../../siwe");
const icons_1 = require("../../../assets/icons");
const chains_1 = require("../../../assets/chains");
const Avatar_1 = require("../../Common/Avatar");
const defaultConfig_1 = require("../../../defaultConfig");
const framer_motion_1 = require("framer-motion");
const LazyImage_1 = require("../../Common/LazyImage");
const utils_1 = require("../../../utils");
const useLocales_1 = require("../../../hooks/useLocales");
const FitText_1 = require("../../Common/FitText");
const transition = { duration: 0.2, ease: [0.26, 0.08, 0.25, 1] };
const copyTransition = { duration: 0.16, ease: [0.26, 0.08, 0.25, 1] };
const SignInWithEthereum = () => {
    const context = (0, ConnectKit_1.useContext)();
    const { isSignedIn, reset } = (0, siwe_1.useSIWE)();
    const mobile = (0, utils_1.isMobile)();
    const [status, setStatus] = (0, react_1.useState)(isSignedIn ? 'signedIn' : 'signedOut');
    const locales = (0, useLocales_1.default)({});
    const copy = status === 'signedIn'
        ? {
            heading: locales.signInWithEthereumScreen_signedIn_heading,
            h1: locales.signInWithEthereumScreen_signedIn_h1,
            p: locales.signInWithEthereumScreen_signedIn_p,
            button: locales.signInWithEthereumScreen_signedIn_button,
        }
        : {
            heading: locales.signInWithEthereumScreen_signedOut_heading,
            h1: locales.signInWithEthereumScreen_signedOut_h1,
            p: locales.signInWithEthereumScreen_signedOut_p,
            button: locales.signInWithEthereumScreen_signedOut_button,
        };
    (0, react_1.useEffect)(() => {
        if (isSignedIn)
            setStatus('signedIn');
    }, []);
    (0, react_1.useEffect)(() => {
        if (!isSignedIn)
            setStatus('signedOut');
    }, [isSignedIn]);
    const { address } = (0, wagmi_1.useAccount)();
    const getFavicons = () => {
        const favicons = {
            svg: null,
            default: null,
        };
        const nodeList = document.getElementsByTagName('link');
        Array.from(nodeList).forEach((node) => {
            if ((node.getAttribute('rel') === 'icon' ||
                node.getAttribute('rel') === 'shortcut icon') &&
                node.getAttribute('href')) {
                if (node.getAttribute('type') === 'image/svg+xml') {
                    favicons.svg = node.getAttribute('href');
                }
                else {
                    favicons.default = node.getAttribute('href');
                }
            }
        });
        return favicons;
    };
    const favicons = getFavicons();
    const favicon = (0, defaultConfig_1.getAppIcon)() ?? favicons.svg ?? favicons.default;
    return (<styles_1.PageContent style={{ width: 278 }}>
      <styles_1.ModalContent style={{ padding: 0, marginTop: -10 }}>
        <styles_2.ContentContainer>
          <framer_motion_1.AnimatePresence exitBeforeEnter>
            <framer_motion_1.motion.div key={(0, utils_1.flattenChildren)(copy.h1).toString()} initial={mobile ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={copyTransition}>
              <styles_1.ModalBody style={{ height: 42 }}>
                <FitText_1.default>{copy.h1}</FitText_1.default>
              </styles_1.ModalBody>
            </framer_motion_1.motion.div>
          </framer_motion_1.AnimatePresence>
        </styles_2.ContentContainer>
        <styles_2.StatusGraphic $connected={isSignedIn} key="status">
          <div style={{ position: 'absolute', inset: 0 }}>
            <styles_2.StatusGraphicBgSvg width="262" height="134" viewBox="0 0 262 134" fill="none" xmlns="http://www.w3.org/2000/svg">
              <framer_motion_1.motion.rect x="0" y="0" rx="12" width="262" height="134" strokeDasharray="3 3" animate={{
            strokeDashoffset: [0, -6],
        }} transition={{
            duration: 0.4,
            ease: 'linear',
            repeat: Infinity,
        }}/>
            </styles_2.StatusGraphicBgSvg>
          </div>

          <framer_motion_1.motion.div key="avatarImage" initial={mobile
            ? false
            : {
                opacity: 0,
                x: 50,
                scale: 0.8,
            }} animate={{
            opacity: 1,
            x: 0,
            scale: 1,
        }} transition={transition}>
            <styles_2.LogoContainer>
              <Avatar_1.default address={address} size={64}/>
            </styles_2.LogoContainer>
          </framer_motion_1.motion.div>
          <framer_motion_1.motion.div key="tickIcon" initial={mobile
            ? false
            : {
                scale: 0.6,
            }} animate={{
            scale: 1,
        }} transition={{
            ...transition,
        }}>
            <styles_2.StatusIcon>
              <icons_1.TickIcon />
            </styles_2.StatusIcon>
          </framer_motion_1.motion.div>
          <framer_motion_1.motion.div key="appLogo" initial={mobile
            ? false
            : {
                opacity: 0,
                x: -40,
                scale: 0.8,
            }} animate={{
            opacity: 1,
            x: 0,
            scale: 1,
        }} transition={{
            ...transition,
        }}>
            <styles_2.LogoContainer>
              {favicon ? (<LazyImage_1.default src={favicon} alt={'app'}/>) : (<chains_1.default.UnknownChain />)}
            </styles_2.LogoContainer>
          </framer_motion_1.motion.div>
        </styles_2.StatusGraphic>
        <framer_motion_1.AnimatePresence exitBeforeEnter>
          <framer_motion_1.motion.div key={(0, utils_1.flattenChildren)(copy.p).toString()} style={{ paddingBottom: mobile ? 24 : 12 }} initial={mobile ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={copyTransition}>
            <styles_1.ModalBody style={{ height: 42, marginTop: -1, marginBottom: -3 }}>
              <FitText_1.default>{copy.p}</FitText_1.default>
            </styles_1.ModalBody>
          </framer_motion_1.motion.div>
        </framer_motion_1.AnimatePresence>
        <SIWE_1.SIWEButton showSignOutButton={status === 'signedIn'} onSignIn={() => {
            setTimeout(() => {
                context.setOpen(false);
            }, 1000);
        }}/>
      </styles_1.ModalContent>
    </styles_1.PageContent>);
};
exports.default = SignInWithEthereum;
//# sourceMappingURL=index.js.map