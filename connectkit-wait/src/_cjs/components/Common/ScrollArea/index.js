"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollArea = void 0;
const react_1 = require("react");
const styles_1 = require("./styles");
const useIsMobile_1 = require("../../../hooks/useIsMobile");
const ArrowDown = () => (<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.49438 1L5.49438 11M5.49438 11L9.5 7M5.49438 11L1.5 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>);
const ScrollArea = ({ children, height, backgroundColor, mobileDirection, }) => {
    const ref = (0, react_1.useRef)(null);
    const moreRef = (0, react_1.useRef)(null);
    const isMobile = (0, useIsMobile_1.default)();
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        if (el.scrollHeight > el.clientHeight) {
            if (moreRef.current) {
                moreRef.current.classList.remove('hide');
            }
        }
        const handleScroll = (e) => {
            const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth, } = e.target;
            if (moreRef.current) {
                if (scrollTop > 0) {
                    moreRef.current.classList.add('hide');
                }
            }
            if (scrollTop === 0 && scrollLeft === 0) {
                el.classList.add('scroll-start');
            }
            else {
                el.classList.remove('scroll-start');
            }
            if (scrollHeight - scrollTop === clientHeight &&
                scrollWidth - scrollLeft === clientWidth) {
                el.classList.add('scroll-end');
            }
            else {
                el.classList.remove('scroll-end');
            }
        };
        el.addEventListener('scroll', handleScroll);
        handleScroll({ target: el });
        return () => {
            el.removeEventListener('scroll', handleScroll);
        };
    }, [ref.current]);
    return (<styles_1.ScrollContainer>
      <styles_1.ScrollAreaContainer ref={ref} $mobile={isMobile} $height={height} $backgroundColor={backgroundColor} $mobileDirection={mobileDirection}>
        {children}
      </styles_1.ScrollAreaContainer>
      <styles_1.MoreIndicator ref={moreRef} className="hide" onClick={() => {
            if (ref.current) {
                ref.current.scrollTo({
                    top: ref.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }}>
        <span>
          <ArrowDown /> More Available
        </span>
      </styles_1.MoreIndicator>
    </styles_1.ScrollContainer>);
};
exports.ScrollArea = ScrollArea;
//# sourceMappingURL=index.js.map