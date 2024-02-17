"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConnectKit_1 = require("../components/ConnectKit");
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
function useLockBodyScroll(initialLocked) {
    const [locked, setLocked] = (0, react_1.useState)(initialLocked);
    const context = (0, ConnectKit_1.useContext)();
    useIsomorphicLayoutEffect(() => {
        if (!locked)
            return;
        const original = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            touchAction: document.body.style.touchAction,
            paddingRight: document.body.style.paddingRight,
        };
        const style = getComputedStyle(document.body);
        const offsetX = parseInt(style.marginRight) +
            parseInt(style.paddingRight) +
            parseInt(style.borderRight) +
            parseInt(style.marginLeft) +
            parseInt(style.paddingLeft) +
            parseInt(style.borderLeft);
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth - offsetX;
        document.documentElement.style.setProperty('--ck-scrollbar-width', `${scrollBarWidth}px`);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'relative';
        document.body.style.touchAction = 'none';
        if (context.options?.avoidLayoutShift) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        return () => {
            document.documentElement.style.removeProperty('--ck-scrollbar-width');
            document.body.style.overflow = original.overflow;
            document.body.style.position = original.position;
            document.body.style.touchAction = original.touchAction;
            if (context.options?.avoidLayoutShift) {
                document.body.style.paddingRight = original.paddingRight;
            }
        };
    }, [locked]);
    (0, react_1.useEffect)(() => {
        if (locked !== initialLocked)
            setLocked(initialLocked);
    }, [initialLocked]);
    return [locked, setLocked];
}
exports.default = useLockBodyScroll;
//# sourceMappingURL=useLockBodyScroll.js.map