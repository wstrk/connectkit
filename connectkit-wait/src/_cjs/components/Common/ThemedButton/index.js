"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContainer = exports.PlaceholderButton = void 0;
const react_1 = require("react");
const styles_1 = require("./styles");
Object.defineProperty(exports, "ThemeContainer", { enumerable: true, get: function () { return styles_1.ThemeContainer; } });
const react_use_measure_1 = require("react-use-measure");
const PlaceholderButton = () => {
    return <div style={{ height: 40 }}/>;
};
exports.PlaceholderButton = PlaceholderButton;
const ThemedButton = ({ children, variant = 'primary', autoSize = true, duration = 0.3, style, }) => {
    const [contentRef, bounds] = (0, react_use_measure_1.default)();
    return (<styles_1.Container className={variant} initial={false} animate={autoSize
            ? {
                width: bounds.width > 10 ? bounds.width : 'auto',
            }
            : undefined} transition={{
            duration: duration,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.01,
        }} style={style}>
      <div ref={contentRef} style={{
            whiteSpace: 'nowrap',
            width: 'fit-content',
            position: 'relative',
            padding: '0 12px',
        }}>
        {children}
      </div>
    </styles_1.Container>);
};
exports.default = ThemedButton;
//# sourceMappingURL=index.js.map