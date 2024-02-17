"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useFitText_1 = require("../../../hooks/useFitText");
const FitText = ({ children }) => {
    const [ready, setReady] = react_1.default.useState(false);
    const { fontSize, ref: textRef } = (0, useFitText_1.default)({
        logLevel: 'none',
        maxFontSize: 100,
        minFontSize: 70,
        onStart: () => setReady(true),
        onFinish: () => setReady(true),
    });
    return (<div ref={textRef} style={{
            visibility: ready ? 'visible' : 'hidden',
            fontSize: `${fontSize}%`,
            maxHeight: '100%',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
      {children}
    </div>);
};
FitText.displayName = 'FitText';
exports.default = FitText;
//# sourceMappingURL=index.js.map