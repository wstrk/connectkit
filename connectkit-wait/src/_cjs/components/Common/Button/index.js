"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const framer_motion_1 = require("framer-motion");
const utils_1 = require("../../../utils");
const FitText_1 = require("../FitText");
const Spinner_1 = require("../Spinner");
const transition = {
    duration: 0.4,
    ease: [0.175, 0.885, 0.32, 0.98],
};
const Button = ({ children, variant = 'secondary', disabled, icon, iconPosition = 'left', roundedIcon, waiting, arrow, download, href, style, onClick, }) => {
    const key = typeof children === 'string'
        ? children
        : (0, utils_1.flattenChildren)(children).join('');
    const hrefUrl = typeof href === 'string' ? href : (0, utils_1.flattenChildren)(href).join('');
    return (<styles_1.ButtonContainer as={href ? 'a' : undefined} onClick={(event) => {
            if (!disabled && onClick)
                onClick(event);
        }} href={hrefUrl} target={href && '_blank'} rel={href && 'noopener noreferrer'} disabled={disabled} $variant={variant} style={style}>
      <framer_motion_1.AnimatePresence initial={false}>
        <styles_1.ButtonContainerInner key={key} initial={{ opacity: 0, y: -10 }} animate={{
            opacity: 1,
            y: -1,
        }} exit={{
            position: 'absolute',
            opacity: 0,
            y: 10,
            transition: {
                ...transition,
            },
        }} transition={{
            ...transition,
            delay: 0.2,
        }}>
          {icon && iconPosition === 'left' && (<styles_1.IconContainer $rounded={roundedIcon}>{icon}</styles_1.IconContainer>)}
          {download && (<styles_1.DownloadArrow>
              <styles_1.DownloadArrowInner>
                <styles_1.Arrow width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <styles_1.ArrowLine stroke="currentColor" x1="1" y1="6" x2="12" y2="6" strokeWidth="var(--stroke-width)" strokeLinecap="round"/>
                  <styles_1.ArrowChevron stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" strokeWidth="var(--stroke-width)" strokeLinecap="round"/>
                </styles_1.Arrow>
              </styles_1.DownloadArrowInner>
            </styles_1.DownloadArrow>)}
          <styles_1.InnerContainer style={{ paddingLeft: arrow ? 6 : 0 }}>
            <FitText_1.default>{children}</FitText_1.default>
          </styles_1.InnerContainer>
          {icon && iconPosition === 'right' && (<styles_1.IconContainer $rounded={roundedIcon}>{icon}</styles_1.IconContainer>)}
          {arrow && (<styles_1.Arrow width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <styles_1.ArrowLine stroke="currentColor" x1="1" y1="6" x2="12" y2="6" strokeWidth="2" strokeLinecap="round"/>
              <styles_1.ArrowChevron stroke="currentColor" d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314" strokeWidth="2" strokeLinecap="round"/>
            </styles_1.Arrow>)}
        </styles_1.ButtonContainerInner>
        {waiting && (<styles_1.SpinnerContainer>
            <Spinner_1.Spinner />
          </styles_1.SpinnerContainer>)}
      </framer_motion_1.AnimatePresence>
    </styles_1.ButtonContainer>);
};
exports.default = Button;
//# sourceMappingURL=index.js.map