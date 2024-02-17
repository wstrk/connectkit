"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeFont = exports.useGoogleFont = void 0;
const react_1 = require("react");
function useGoogleFont(font) {
    (0, react_1.useEffect)(() => {
        if (!font)
            return;
        font = font.replace(/ /g, '+');
        const googleapis = document.createElement('link');
        googleapis.href = `https://fonts.googleapis.com`;
        googleapis.rel = 'preconnect';
        const gstatic = document.createElement('link');
        gstatic.href = `https://fonts.gstatic.com`;
        gstatic.rel = 'preconnect';
        gstatic.crossOrigin = 'true';
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(googleapis);
        document.head.appendChild(gstatic);
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(googleapis);
            document.head.removeChild(gstatic);
            document.head.removeChild(link);
        };
    }, [font]);
}
exports.useGoogleFont = useGoogleFont;
function useThemeFont(theme) {
    const themeFonts = {
        web95: 'Lato',
        retro: 'Nunito',
        midnight: 'Inter',
        minimal: 'Inter',
        rounded: 'Nunito',
    };
    const font = themeFonts[theme] ?? null;
    useGoogleFont(font ?? '');
}
exports.useThemeFont = useThemeFont;
//# sourceMappingURL=useGoogleFont.js.map