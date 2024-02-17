"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("../../Common/Modal/styles");
const ChainSelectList_1 = require("../../Common/ChainSelectList");
const wagmi_1 = require("wagmi");
const useLocales_1 = require("../../../hooks/useLocales");
const Button_1 = require("../../Common/Button");
const icons_1 = require("../../../assets/icons");
const utils_1 = require("../../../utils");
const Modal_1 = require("../../Common/Modal");
const useChainIsSupported_1 = require("../../../hooks/useChainIsSupported");
const SwitchNetworks = () => {
    const { reset } = (0, wagmi_1.useConnect)();
    const { disconnect } = (0, wagmi_1.useDisconnect)();
    const { connector, chain } = (0, wagmi_1.useAccount)();
    const isChainSupported = (0, useChainIsSupported_1.useChainIsSupported)(chain?.id);
    const locales = (0, useLocales_1.default)({});
    const onDisconnect = () => {
        disconnect();
        reset();
    };
    return (<styles_1.PageContent style={{ width: 278 }}>
      <styles_1.ModalContent style={{ padding: 0, marginTop: -10 }}>
        {!isChainSupported && (<styles_1.ModalBody>
            {locales.warnings_chainUnsupported}{' '}
            {locales.warnings_chainUnsupportedResolve}
          </styles_1.ModalBody>)}

        <div style={{ padding: '6px 8px' }}>
          <ChainSelectList_1.default variant="secondary"/>
        </div>

        {!isChainSupported && !(0, utils_1.isSafeConnector)(connector?.id) && (<div style={{ paddingTop: 12 }}>
            <Modal_1.OrDivider />
            <Button_1.default icon={<icons_1.DisconnectIcon />} variant="secondary" onClick={onDisconnect}>
              {locales.disconnect}
            </Button_1.default>
          </div>)}
      </styles_1.ModalContent>
    </styles_1.PageContent>);
};
exports.default = SwitchNetworks;
//# sourceMappingURL=index.js.map