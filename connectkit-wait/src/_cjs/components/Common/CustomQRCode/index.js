"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Tooltip_1 = require("../Tooltip");
const framer_motion_1 = require("framer-motion");
const QRCode_1 = require("./QRCode");
const useWindowSize_1 = require("../../../hooks/useWindowSize");
function CustomQRCode({ value, image, imageBackground, imagePosition = 'center', tooltipMessage, }) {
    const windowSize = (0, useWindowSize_1.default)();
    const Logo = windowSize.width > 920 && tooltipMessage ? (<Tooltip_1.default xOffset={139} yOffset={5} delay={0.1} message={tooltipMessage}>
        {image}
      </Tooltip_1.default>) : (image);
    return (<styles_1.QRCodeContainer>
      <styles_1.QRCodeContent>
        {image && (<styles_1.LogoContainer>
            <styles_1.LogoIcon $wcLogo={imagePosition !== 'center'} style={{
                background: imagePosition === 'center' ? imageBackground : undefined,
            }}>
              {Logo}
            </styles_1.LogoIcon>
          </styles_1.LogoContainer>)}

        <framer_motion_1.AnimatePresence initial={false}>
          {value ? (<framer_motion_1.motion.div key={value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, position: 'absolute', inset: [0, 0] }} transition={{
                duration: 0.2,
            }}>
              <QRCode_1.QRCode uri={value} size={288} ecl="M" clearArea={!!(imagePosition === 'center' && image)}/>
            </framer_motion_1.motion.div>) : (<styles_1.QRPlaceholder initial={{ opacity: 0.1 }} animate={{ opacity: 0.1 }} exit={{ opacity: 0, position: 'absolute', inset: [0, 0] }} transition={{
                duration: 0.2,
            }}>
              <span />
              <span />
              <span />
              <div />
            </styles_1.QRPlaceholder>)}
        </framer_motion_1.AnimatePresence>
      </styles_1.QRCodeContent>
    </styles_1.QRCodeContainer>);
}
CustomQRCode.displayName = 'CustomQRCode';
exports.default = CustomQRCode;
//# sourceMappingURL=index.js.map