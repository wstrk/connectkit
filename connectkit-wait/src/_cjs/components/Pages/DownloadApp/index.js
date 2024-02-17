"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("../../Common/Modal/styles");
const CustomQRCode_1 = require("../../Common/CustomQRCode");
const useLocales_1 = require("../../../hooks/useLocales");
const ConnectKit_1 = require("../../ConnectKit");
const useWallets_1 = require("../../../wallets/useWallets");
const DownloadApp = () => {
    const context = (0, ConnectKit_1.useContext)();
    const wallet = (0, useWallets_1.useWallet)(context.connector.id);
    const locales = (0, useLocales_1.default)({
        CONNECTORNAME: wallet?.name,
    });
    if (!wallet)
        return <>Wallet not found</>;
    const downloads = {
        ios: wallet.downloadUrls?.ios,
        android: wallet.downloadUrls?.android,
        redirect: wallet.downloadUrls?.download,
    };
    const bodycopy = downloads.ios && downloads.android
        ? locales.downloadAppScreen_iosAndroid
        : downloads.ios
            ? locales.downloadAppScreen_ios
            : locales.downloadAppScreen_android;
    return (<styles_1.PageContent>
      <styles_1.ModalContent style={{ paddingBottom: 4, gap: 14 }}>
        {downloads.redirect && <CustomQRCode_1.default value={downloads.redirect}/>}
        {!downloads.redirect && <>No download link available</>}
        <styles_1.ModalBody style={{ fontSize: 15, lineHeight: '20px', padding: '0 12px' }}>
          {bodycopy}
        </styles_1.ModalBody>
      </styles_1.ModalContent>
    </styles_1.PageContent>);
};
exports.default = DownloadApp;
//# sourceMappingURL=index.js.map