"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeContext = exports.ConnectKitThemeProvider = void 0;
const react_1 = require("react");
const Context = (0, react_1.createContext)(null);
const ConnectKitThemeProvider = ({ children, theme = 'auto', mode = 'auto', customTheme }) => {
    const value = {
        theme,
        mode,
        customTheme,
    };
    return (0, react_1.createElement)(Context.Provider, { value }, <>{children}</>);
};
exports.ConnectKitThemeProvider = ConnectKitThemeProvider;
const useThemeContext = () => {
    const context = react_1.default.useContext(Context);
    if (!context)
        throw Error('ConnectKitThemeProvider must be inside a Provider.');
    return context;
};
exports.useThemeContext = useThemeContext;
//# sourceMappingURL=ConnectKitThemeProvider.js.map