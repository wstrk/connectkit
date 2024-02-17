"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../../ConnectKit");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const wallet_1 = require("../../../assets/wallet");
const useLocales_1 = require("../../../hooks/useLocales");
const ConnectorList_1 = require("../../Common/ConnectorList");
const useIsMobile_1 = require("../../../hooks/useIsMobile");
const Button_1 = require("../../Common/Button");
const Wallets = () => {
    const context = (0, ConnectKit_1.useContext)();
    const locales = (0, useLocales_1.default)({});
    const isMobile = (0, useIsMobile_1.default)();
    return (<styles_2.PageContent style={{ width: 312 }}>
      <ConnectorList_1.default />

      {isMobile ? (<>
          <styles_1.InfoBox>
            <styles_2.ModalContent style={{ padding: 0, textAlign: 'left' }}>
              <styles_2.ModalH1 $small>{locales.connectorsScreen_h1}</styles_2.ModalH1>
              <styles_2.ModalBody>{locales.connectorsScreen_p}</styles_2.ModalBody>
            </styles_2.ModalContent>
            <styles_1.InfoBoxButtons>
              {!context.options?.hideQuestionMarkCTA && (<Button_1.default variant={'tertiary'} onClick={() => context.setRoute(ConnectKit_1.routes.ABOUT)}>
                  {locales.learnMore}
                </Button_1.default>)}
              {!context.options?.hideNoWalletCTA && (<Button_1.default variant={'tertiary'} onClick={() => context.setRoute(ConnectKit_1.routes.ONBOARDING)}>
                  {locales.getWallet}
                </Button_1.default>)}
            </styles_1.InfoBoxButtons>
          </styles_1.InfoBox>
        </>) : (<>
          {!context.options?.hideNoWalletCTA && (<styles_1.LearnMoreContainer>
              <styles_1.LearnMoreButton onClick={() => context.setRoute(ConnectKit_1.routes.ONBOARDING)}>
                <wallet_1.default /> {locales.connectorsScreen_newcomer}
              </styles_1.LearnMoreButton>
            </styles_1.LearnMoreContainer>)}
        </>)}
      {context.options?.disclaimer && (<styles_2.Disclaimer style={{ visibility: 'hidden', pointerEvents: 'none' }}>
          <div>{context.options?.disclaimer}</div>
        </styles_2.Disclaimer>)}
    </styles_2.PageContent>);
};
exports.default = Wallets;
//# sourceMappingURL=index.js.map