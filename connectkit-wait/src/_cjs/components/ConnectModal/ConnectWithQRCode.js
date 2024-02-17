"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../ConnectKit");
const useWalletConnectModal_1 = require("../../hooks/useWalletConnectModal");
const utils_1 = require("../../utils");
const styles_1 = require("../Common/Modal/styles");
const Modal_1 = require("../Common/Modal");
const CustomQRCode_1 = require("../Common/CustomQRCode");
const Button_1 = require("../Common/Button");
const ScanIconWithLogos_1 = require("../../assets/ScanIconWithLogos");
const icons_1 = require("../../assets/icons");
const CopyToClipboard_1 = require("../Common/CopyToClipboard");
const useLocales_1 = require("../../hooks/useLocales");
const useWallets_1 = require("../../wallets/useWallets");
const web3_1 = require("../contexts/web3");
const ConnectWithQRCode = ({ switchConnectMethod }) => {
    const context = (0, ConnectKit_1.useContext)();
    const id = context.connector.id;
    const wallet = (0, useWallets_1.useWallet)(context.connector.id);
    const { open: openW3M, isOpen: isOpenW3M } = (0, useWalletConnectModal_1.useWalletConnectModal)();
    const { connect: { getUri }, } = (0, web3_1.useWeb3)();
    const wcUri = getUri(id);
    const uri = wcUri
        ? wallet?.getWalletConnectDeeplink?.(wcUri) ?? wcUri
        : undefined;
    const locales = (0, useLocales_1.default)({
        CONNECTORNAME: wallet?.name,
    });
    if (!wallet)
        return <>Wallet not found {context.connector.id}</>;
    const downloads = wallet?.downloadUrls;
    const extensions = {
        chrome: downloads?.chrome,
        firefox: downloads?.firefox,
        brave: downloads?.brave,
        edge: downloads?.edge,
        safari: downloads?.safari,
    };
    const browser = (0, utils_1.detectBrowser)();
    const hasApps = downloads && Object.keys(downloads).length !== 0;
    const suggestedExtension = extensions
        ? {
            name: Object.keys(extensions)[0],
            label: Object.keys(extensions)[0]?.charAt(0).toUpperCase() +
                Object.keys(extensions)[0]?.slice(1),
            url: extensions[Object.keys(extensions)[0]],
        }
        : undefined;
    const showAdditionalOptions = (0, utils_1.isWalletConnectConnector)(id);
    return (<styles_1.PageContent>
      <styles_1.ModalContent style={{ paddingBottom: 8, gap: 14 }}>
        <CustomQRCode_1.default value={uri} image={wallet?.icon} tooltipMessage={(0, utils_1.isWalletConnectConnector)(id) ? (<>
                <ScanIconWithLogos_1.default />
                <span>{locales.scanScreen_tooltip_walletConnect}</span>
              </>) : (<>
                <ScanIconWithLogos_1.default logo={wallet?.icon}/>
                <span>{locales.scanScreen_tooltip_default}</span>
              </>)}/>
        {showAdditionalOptions ? (<Modal_1.OrDivider />) : (hasApps && <Modal_1.OrDivider>{locales.dontHaveTheApp}</Modal_1.OrDivider>)}
      </styles_1.ModalContent>

      {showAdditionalOptions && (<div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
            }}>
          {context.options?.walletConnectCTA !== 'modal' && (<CopyToClipboard_1.default variant="button" string={uri}>
              {context.options?.walletConnectCTA === 'link'
                    ? locales.copyToClipboard
                    : locales.copyCode}
            </CopyToClipboard_1.default>)}
          {context.options?.walletConnectCTA !== 'link' && (<Button_1.default icon={<icons_1.ExternalLinkIcon />} onClick={openW3M} disabled={isOpenW3M} waiting={isOpenW3M}>
              {context.options?.walletConnectCTA === 'modal'
                    ? locales.useWalletConnectModal
                    : locales.useModal}
            </Button_1.default>)}
        </div>)}

      

      {hasApps && (<>
          <Button_1.default onClick={() => {
                context.setRoute(ConnectKit_1.routes.DOWNLOAD);
            }} download>
            {locales.getWalletName}
          </Button_1.default>
        </>)}
      
    </styles_1.PageContent>);
};
exports.default = ConnectWithQRCode;
//# sourceMappingURL=ConnectWithQRCode.js.map