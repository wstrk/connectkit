"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("./../../ConnectKit");
const react_use_measure_1 = require("react-use-measure");
const ChainSelectList_1 = require("./../ChainSelectList");
const Portal_1 = require("./../Portal");
const styles_1 = require("./../../../styles");
const styles_2 = require("./styles");
const framer_motion_1 = require("framer-motion");
const ConnectKitThemeProvider_1 = require("./../../ConnectKitThemeProvider/ConnectKitThemeProvider");
const useFocusTrap_1 = require("./../../../hooks/useFocusTrap");
const useLockBodyScroll_1 = require("./../../../hooks/useLockBodyScroll");
const useLocales_1 = require("../../../hooks/useLocales");
const ChainSelectDropdown = ({ children, open, onClose, offsetX = 0, offsetY = 8 }) => {
    const context = (0, ConnectKit_1.useContext)();
    const themeContext = (0, ConnectKitThemeProvider_1.useThemeContext)();
    const locales = (0, useLocales_1.default)();
    const [offset, setOffset] = (0, react_1.useState)({ x: 0, y: 0 });
    (0, useLockBodyScroll_1.default)(open);
    const contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const listener = (e) => {
            if (!open)
                return;
            if (e.key === 'Escape')
                onClose();
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                if (!contentRef.current)
                    return;
                e.preventDefault();
                const focusableEls = contentRef.current?.querySelectorAll(`
            a[href]:not(:disabled),
            button:not(:disabled),
            textarea:not(:disabled),
            input[type="text"]:not(:disabled),
            input[type="radio"]:not(:disabled),
            input[type="checkbox"]:not(:disabled),
            select:not(:disabled)
          `), firstFocusableEl = focusableEls[0], lastFocusableEl = focusableEls[focusableEls.length - 1];
                if (e.key === 'ArrowUp') {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus();
                    }
                    else {
                        let focusItem = document?.activeElement?.previousSibling;
                        if (!focusItem)
                            focusItem = lastFocusableEl;
                        while (focusItem.disabled)
                            focusItem = focusItem.previousSibling;
                        focusItem.focus();
                    }
                }
                else {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                    }
                    else {
                        let focusItem = document?.activeElement?.nextSibling;
                        if (!focusItem)
                            focusItem = firstFocusableEl;
                        while (focusItem.disabled)
                            focusItem = focusItem.nextSibling;
                        focusItem.focus();
                    }
                }
            }
        };
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    }, [open]);
    const targetRef = (0, react_1.useRef)(null);
    const innerRef = (0, react_1.useCallback)((node) => {
        if (!node)
            return;
        targetRef.current = node;
        refresh();
    }, [open]);
    const [ref, bounds] = (0, react_use_measure_1.default)({
        debounce: 120,
        offsetSize: true,
        scroll: true,
    });
    const refresh = () => {
        if (!targetRef.current ||
            bounds.top +
                bounds.bottom +
                bounds.left +
                bounds.right +
                bounds.height +
                bounds.width ===
                0) {
            return;
        }
        let x = bounds.left + offsetX;
        let y = bounds.top + bounds.height + offsetY;
        targetRef.current.style.left = `${x}px`;
        targetRef.current.style.top = `${y}px`;
    };
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
    useIsomorphicLayoutEffect(refresh, [targetRef.current, bounds, open]);
    (0, react_1.useEffect)(refresh, [open, targetRef.current]);
    const onScroll = onClose;
    const onResize = onClose;
    (0, react_1.useEffect)(() => {
        refresh();
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return (<>
      <div ref={ref}>{children}</div>
      <framer_motion_1.AnimatePresence>
        {open && (<Portal_1.default>
            <styles_1.ResetContainer $useTheme={themeContext.theme ?? context.theme} $useMode={themeContext.mode ?? context.mode} $customTheme={themeContext.customTheme ?? context.customTheme}>
              <useFocusTrap_1.default>
                <styles_2.DropdownWindow ref={contentRef}>
                  <styles_2.DropdownOverlay onClick={onClose}/>
                  <styles_2.DropdownContainer ref={innerRef} style={{
                left: offset.x,
                top: offset.y,
            }} initial={'collapsed'} animate={'open'} exit={'collapsed'} variants={{
                collapsed: {
                    transformOrigin: '0 0',
                    opacity: 0,
                    scale: 0.96,
                    z: 0.01,
                    y: -4,
                    x: 0,
                    transition: {
                        duration: 0.1,
                    },
                },
                open: {
                    transformOrigin: '0 0',
                    willChange: 'opacity,transform',
                    opacity: 1,
                    scale: 1,
                    z: 0.01,
                    y: 0,
                    x: 0,
                    transition: {
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.15,
                    },
                },
            }}>
                    <styles_2.DropdownHeading>{locales.switchNetworks}</styles_2.DropdownHeading>
                    <ChainSelectList_1.default />
                  </styles_2.DropdownContainer>
                </styles_2.DropdownWindow>
              </useFocusTrap_1.default>
            </styles_1.ResetContainer>
          </Portal_1.default>)}
      </framer_motion_1.AnimatePresence>
    </>);
};
exports.default = ChainSelectDropdown;
//# sourceMappingURL=index.js.map