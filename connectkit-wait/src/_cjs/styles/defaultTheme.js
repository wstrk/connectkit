"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultLightTheme = {
    font: {
        family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji'`,
    },
    text: {
        primary: {
            color: '#373737',
        },
        secondary: {
            color: '#999999',
            hover: {
                color: '#111111',
            },
        },
        error: '#FC6464',
        valid: '#32D74B',
    },
    buttons: {
        primary: {
            borderRadius: 16,
            color: '#000373737000',
            background: '#FFFFFF',
            border: '#F0F0F0',
            hover: {
                color: '#000000',
                border: '#1A88F8',
            },
        },
        secondary: {
            borderRadius: 16,
            background: '#F6F7F9',
            color: '#000000',
        },
    },
    navigation: {
        color: '#999999',
    },
    modal: {
        background: '#ffffff',
        divider: '#f7f6f8',
    },
    tooltips: {
        color: '#999999',
        background: '#ffffff',
        hover: {
            background: '#f6f7f9',
        },
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.06)',
    },
    qrCode: {
        accentColor: '#F7F6F8',
    },
};
const parseTheme = (theme) => {
    return theme;
};
const userPrefersDarkMode = () => {
    if (typeof window === 'undefined')
        return false;
    return (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
};
let darkMode = userPrefersDarkMode();
if (darkMode) {
}
const defaultTheme = {
    connectKit: {
        options: {
            iconStyle: 'light',
        },
        theme: {
            preferred: 'dark',
            light: parseTheme(defaultLightTheme),
            dark: parseTheme(defaultLightTheme),
        },
    },
};
exports.default = defaultTheme;
//# sourceMappingURL=defaultTheme.js.map