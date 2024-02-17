"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../../ConnectKit");
const utils_1 = require("../../../utils");
const wagmi_1 = require("wagmi");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const Button_1 = require("../../Common/Button");
const Avatar_1 = require("../../Common/Avatar");
const ChainSelect_1 = require("../../Common/ChainSelect");
const icons_1 = require("../../../assets/icons");
const CopyToClipboard_1 = require("../../Common/CopyToClipboard");
const framer_motion_1 = require("framer-motion");
const ConnectKitThemeProvider_1 = require("../../ConnectKitThemeProvider/ConnectKitThemeProvider");
const useLocales_1 = require("../../../hooks/useLocales");
const Profile = ({ closeModal }) => {
    const context = (0, ConnectKit_1.useContext)();
    const themeContext = (0, ConnectKitThemeProvider_1.useThemeContext)();
    const locales = (0, useLocales_1.default)();
    const { reset } = (0, wagmi_1.useConnect)();
    const { disconnect } = (0, wagmi_1.useDisconnect)();
    const { address, isConnected, connector, chain } = (0, wagmi_1.useAccount)();
    const { data: ensName } = (0, wagmi_1.useEnsName)({
        chainId: 1,
        address: address,
    });
    const { data: balance } = (0, wagmi_1.useBalance)({
        address,
    });
    const [shouldDisconnect, setShouldDisconnect] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!isConnected)
            context.setOpen(false);
    }, [isConnected]);
    (0, react_1.useEffect)(() => {
        if (!shouldDisconnect)
            return;
        if (closeModal) {
            closeModal();
        }
        else {
            context.setOpen(false);
        }
        return () => {
            disconnect();
            reset();
        };
    }, [shouldDisconnect, disconnect, reset]);
    const separator = ['web95', 'rounded', 'minimal'].includes(themeContext.theme ?? context.theme ?? '')
        ? '....'
        : undefined;
    return (<styles_2.PageContent>
      <styles_2.ModalContent style={{ paddingBottom: 22, gap: 6 }}>
        <styles_1.AvatarContainer>
          <styles_1.AvatarInner>
            <styles_1.ChainSelectorContainer>
              <ChainSelect_1.default />
            </styles_1.ChainSelectorContainer>
            <Avatar_1.default address={address}/>
          </styles_1.AvatarInner>
        </styles_1.AvatarContainer>
        <styles_2.ModalH1>
          <CopyToClipboard_1.default string={address}>
            {ensName ?? (0, utils_1.truncateEthAddress)(address, separator)}
          </CopyToClipboard_1.default>
        </styles_2.ModalH1>
        {context?.options?.hideBalance ? null : (<styles_2.ModalBody>
            <styles_1.BalanceContainer>
              <framer_motion_1.AnimatePresence exitBeforeEnter initial={false}>
                {balance && (<styles_1.Balance key={`chain-${chain?.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    {(0, utils_1.nFormatter)(Number(balance?.formatted))}
                    {` `}
                    {balance?.symbol}
                  </styles_1.Balance>)}
                {!balance && (<styles_1.LoadingBalance initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    &nbsp;
                  </styles_1.LoadingBalance>)}
              </framer_motion_1.AnimatePresence>
            </styles_1.BalanceContainer>
          </styles_2.ModalBody>)}
      </styles_2.ModalContent>
      {!(0, utils_1.isSafeConnector)(connector?.id) && (<Button_1.default onClick={() => setShouldDisconnect(true)} icon={<icons_1.DisconnectIcon />}>
          {locales.disconnect}
        </Button_1.default>)}
    </styles_2.PageContent>);
};
exports.default = Profile;
//# sourceMappingURL=index.js.map