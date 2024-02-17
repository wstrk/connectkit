"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../../ConnectKit");
const react_use_measure_1 = require("react-use-measure");
const styles_1 = require("./styles");
const framer_motion_1 = require("framer-motion");
const styles_2 = require("../../../styles");
const Portal_1 = require("../Portal");
const ConnectKitThemeProvider_1 = require("../../ConnectKitThemeProvider/ConnectKitThemeProvider");
const Tooltip = ({ children, message, open, xOffset = 0, yOffset = 0, delay, }) => {
    const context = (0, ConnectKit_1.useContext)();
    const themeContext = (0, ConnectKitThemeProvider_1.useThemeContext)();
    if (context.options?.hideTooltips)
        return <>{children}</>;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [outOfBounds, setOutOfBounds] = (0, react_1.useState)(false);
    const [size, setSize] = (0, react_1.useState)('small');
    const [ready, setReady] = (0, react_1.useState)(false);
    const [currentRoute] = (0, react_1.useState)(context.route);
    const targetRef = (0, react_1.useRef)(null);
    const [ref, bounds] = (0, react_use_measure_1.default)({
        debounce: !ready ? 220 : 0,
        offsetSize: true,
        scroll: true,
    });
    const checkBounds = () => {
        let flag = false;
        const x = xOffset + bounds.left + bounds.width;
        const y = yOffset + bounds.top + bounds.height * 0.5;
        if (x > window.innerWidth || x < 0 || y > window.innerHeight || y < 0) {
            flag = true;
        }
        return flag;
    };
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
    const refreshLayout = () => {
        if (!targetRef.current ||
            bounds.top +
                bounds.bottom +
                bounds.left +
                bounds.right +
                bounds.height +
                bounds.width ===
                0)
            return;
        const x = xOffset + bounds.left + bounds.width;
        const y = yOffset + bounds.top + bounds.height * 0.5;
        if (!ready && x !== 0 && y !== 0)
            setReady(true);
        targetRef.current.style.left = `${x}px`;
        targetRef.current.style.top = `${y}px`;
        setSize(targetRef.current.offsetHeight <= 40 ? 'small' : 'large');
        setOutOfBounds(checkBounds());
    };
    useIsomorphicLayoutEffect(refreshLayout, [bounds, open, isOpen]);
    (0, react_1.useEffect)(() => {
        if (!context.open)
            setIsOpen(false);
    }, [context.open]);
    (0, react_1.useEffect)(() => {
        setIsOpen(!!open);
    }, [open]);
    return (<>
      <framer_motion_1.motion.div ref={ref} style={open === undefined
            ? {
                cursor: 'help',
            }
            : {}} onHoverStart={() => setIsOpen(true)} onHoverEnd={() => setIsOpen(false)} onClick={() => setIsOpen(false)}>
        {children}
      </framer_motion_1.motion.div>
      <Portal_1.default>
        <framer_motion_1.AnimatePresence>
          {currentRoute === context.route && !outOfBounds && isOpen && (<styles_2.ResetContainer $useTheme={themeContext.theme} $useMode={themeContext.mode} $customTheme={themeContext.customTheme}>
              <styles_1.TooltipWindow>
                <styles_1.TooltipContainer role="tooltip" $size={size} ref={targetRef} initial={'collapsed'} animate={ready ? 'open' : {}} exit={'collapsed'} variants={{
                collapsed: {
                    transformOrigin: '20px 50%',
                    opacity: 0,
                    scale: 0.9,
                    z: 0.01,
                    y: '-50%',
                    x: 20,
                    transition: {
                        duration: 0.1,
                    },
                },
                open: {
                    willChange: 'opacity,transform',
                    opacity: 1,
                    scale: 1,
                    z: 0.01,
                    y: '-50%',
                    x: 20,
                    transition: {
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.15,
                        delay: delay ? delay : 0.5,
                    },
                },
            }}>
                  {message}
                  <styles_1.TooltipTail $size={size}/>
                </styles_1.TooltipContainer>
              </styles_1.TooltipWindow>
            </styles_2.ResetContainer>)}
        </framer_motion_1.AnimatePresence>
      </Portal_1.default>
    </>);
};
exports.default = Tooltip;
//# sourceMappingURL=index.js.map