"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const __1 = require("../../..");
const Portal = (props) => {
    props = {
        selector: '__CONNECTKIT__',
        ...props,
    };
    const { selector, children } = props;
    const ref = (0, react_1.useRef)(null);
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const selectorPrefixed = '#' + selector.replace(/^#/, '');
        ref.current = document.querySelector(selectorPrefixed);
        if (!ref.current) {
            const div = document.createElement('div');
            div.setAttribute('id', selector);
            div.setAttribute('data-connectkit', `${__1.CONNECTKIT_VERSION}`);
            document.body.appendChild(div);
            ref.current = div;
        }
        setMounted(true);
    }, [selector]);
    if (!ref.current)
        return null;
    return mounted ? (0, react_dom_1.createPortal)(children, ref.current) : null;
};
exports.default = Portal;
//# sourceMappingURL=index.js.map