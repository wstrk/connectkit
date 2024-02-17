"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const KEYCODE_TAB = 9;
function useFocusTrap() {
    const elRef = (0, react_1.useRef)(null);
    function handleFocus(e) {
        if (!elRef.current)
            return;
        var focusableEls = elRef.current.querySelectorAll(`
        a[href]:not(:disabled),
        button:not(:disabled),
        textarea:not(:disabled),
        input[type="text"]:not(:disabled),
        input[type="radio"]:not(:disabled),
        input[type="checkbox"]:not(:disabled),
        select:not(:disabled)
      `), firstFocusableEl = focusableEls[0], lastFocusableEl = focusableEls[focusableEls.length - 1];
        var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
        if (!isTabPressed) {
            return;
        }
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        }
        else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    }
    (0, react_1.useEffect)(() => {
        if (elRef.current) {
            elRef.current.addEventListener('keydown', handleFocus);
            elRef.current.focus({ preventScroll: true });
        }
        return () => {
            if (elRef.current) {
                elRef.current.removeEventListener('keydown', handleFocus);
            }
        };
    }, []);
    return elRef;
}
function FocusTrap(props) {
    const elRef = useFocusTrap();
    (0, react_1.useEffect)(() => {
        if (!elRef.current)
            return;
        elRef.current.focus({ preventScroll: true });
    }, []);
    return (<div ref={elRef} tabIndex={0}>
      {props.children}
    </div>);
}
exports.default = FocusTrap;
//# sourceMappingURL=useFocusTrap.js.map