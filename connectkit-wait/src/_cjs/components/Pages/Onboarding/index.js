"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const logos_1 = require("../../../assets/logos");
const wave_1 = require("../../../assets/wave");
const Button_1 = require("../../Common/Button");
const useLocales_1 = require("../../../hooks/useLocales");
const ConnectKit_1 = require("../../ConnectKit");
const Introduction = () => {
    const context = (0, ConnectKit_1.useContext)();
    const locales = (0, useLocales_1.default)({});
    const ctaUrl = context.options?.walletOnboardingUrl ?? locales.onboardingScreen_ctaUrl;
    return (<styles_2.PageContent>
      <styles_1.Graphic>
        <styles_1.LogoGroup>
          <styles_1.Logo>
            <styles_1.LogoPosition>
              <styles_1.LogoInner>
                <styles_1.FloatWrapper>
                  <styles_1.RotateWrapper>
                    <styles_1.LogoGraphic>
                      <logos_1.default.Coinbase background/>
                    </styles_1.LogoGraphic>
                  </styles_1.RotateWrapper>
                </styles_1.FloatWrapper>
              </styles_1.LogoInner>
            </styles_1.LogoPosition>
          </styles_1.Logo>
          <styles_1.Logo>
            <styles_1.LogoPosition>
              <styles_1.LogoInner>
                <styles_1.FloatWrapper>
                  <styles_1.RotateWrapper>
                    <styles_1.LogoGraphic>
                      <logos_1.default.MetaMask background/>
                    </styles_1.LogoGraphic>
                  </styles_1.RotateWrapper>
                </styles_1.FloatWrapper>
              </styles_1.LogoInner>
            </styles_1.LogoPosition>
          </styles_1.Logo>
          <styles_1.Logo>
            <styles_1.LogoPosition>
              <styles_1.LogoInner>
                <styles_1.FloatWrapper>
                  <styles_1.RotateWrapper>
                    <styles_1.LogoGraphic>
                      <logos_1.default.Trust />
                    </styles_1.LogoGraphic>
                  </styles_1.RotateWrapper>
                </styles_1.FloatWrapper>
              </styles_1.LogoInner>
            </styles_1.LogoPosition>
          </styles_1.Logo>
          <styles_1.Logo>
            <styles_1.LogoPosition>
              <styles_1.LogoInner>
                <styles_1.FloatWrapper>
                  <styles_1.RotateWrapper>
                    <styles_1.LogoGraphic>
                      <logos_1.default.Argent />
                    </styles_1.LogoGraphic>
                  </styles_1.RotateWrapper>
                </styles_1.FloatWrapper>
              </styles_1.LogoInner>
            </styles_1.LogoPosition>
          </styles_1.Logo>
          <styles_1.Logo>
            <styles_1.LogoPosition>
              <styles_1.LogoInner>
                <styles_1.FloatWrapper>
                  <styles_1.RotateWrapper>
                    <styles_1.LogoGraphic>
                      <logos_1.default.ImToken />
                    </styles_1.LogoGraphic>
                  </styles_1.RotateWrapper>
                </styles_1.FloatWrapper>
              </styles_1.LogoInner>
            </styles_1.LogoPosition>
          </styles_1.Logo>
        </styles_1.LogoGroup>
        <styles_1.GraphicBackground>{wave_1.default}</styles_1.GraphicBackground>
      </styles_1.Graphic>
      <styles_2.ModalContent style={{ paddingBottom: 18 }}>
        <styles_2.ModalH1 $small>{locales.onboardingScreen_h1}</styles_2.ModalH1>
        <styles_2.ModalBody>{locales.onboardingScreen_p}</styles_2.ModalBody>
      </styles_2.ModalContent>
      <Button_1.default href={ctaUrl} arrow>
        {locales.onboardingScreen_ctaText}
      </Button_1.default>
    </styles_2.PageContent>);
};
exports.default = Introduction;
//# sourceMappingURL=index.js.map