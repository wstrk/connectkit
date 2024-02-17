"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const CircleSpinner = ({ logo, smallLogo, connecting = true, unavailable = false, countdown = false, }) => {
    return (<styles_1.LogoContainer transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 0.98] }}>
      <styles_1.Logo $small={!unavailable && smallLogo} style={unavailable ? { borderRadius: 0 } : undefined}>
        {logo}
      </styles_1.Logo>
      <styles_1.SpinnerContainer>
        <framer_motion_1.AnimatePresence>
          {connecting && (<styles_1.Spinner key="Spinner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{
                opacity: 0,
                transition: {
                    duration: countdown ? 1 : 0,
                },
            }}>
              <svg aria-hidden="true" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 100C24.3858 100 2 77.6142 2 50" stroke="url(#paint0_linear_1943_4139)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_1943_4139" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--ck-spinner-color)"/>
                    <stop offset="1" stopColor="var(--ck-spinner-color)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </styles_1.Spinner>)}
          {countdown && (<styles_1.ExpiringSpinner key="ExpiringSpinner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <div />
              <div />
            </styles_1.ExpiringSpinner>)}
        </framer_motion_1.AnimatePresence>
      </styles_1.SpinnerContainer>
    </styles_1.LogoContainer>);
};
exports.default = CircleSpinner;
//# sourceMappingURL=index.js.map