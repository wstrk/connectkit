"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetContainer = void 0;
const styled_1 = require("./styled");
const styled_components_1 = require("styled-components");
const framer_motion_1 = require("framer-motion");
const p3_1 = require("../utils/p3");
const themes_1 = require("./themes");
const themeGlobals = {
    default: {
        '--ck-font-family': `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
    'Segoe UI Symbol'`,
        '--ck-border-radius': '20px',
        '--ck-secondary-button-border-radius': '16px',
    },
    graphics: {
        light: {
            '--ck-graphic-wave-stop-01': '#E8F17D',
            '--ck-graphic-wave-stop-02': '#A8ECDE',
            '--ck-graphic-wave-stop-03': '#7AA1F2',
            '--ck-graphic-wave-stop-04': '#DEA1E8',
            '--ck-graphic-wave-stop-05': '#F46D98',
            '--ck-graphic-scaniconwithlogos-01': '#4E4E4E',
            '--ck-graphic-scaniconwithlogos-02': '#272727',
            '--ck-graphic-scaniconwithlogos-03': '#F8D74A',
            '--ck-graphic-scaniconwithlogos-04': '#F6F7F9',
            '--ck-chain-ethereum-01': '#25292E',
            '--ck-chain-ethereum-02': '#fff',
            '--ck-chain-ethereum-03': '#DFE0E0',
        },
        dark: {
            '--ck-graphic-wave-stop-01': '#E8F17D',
            '--ck-graphic-wave-stop-02': '#A8ECDE',
            '--ck-graphic-wave-stop-03': '#7AA1F2',
            '--ck-graphic-wave-stop-04': '#DEA1E8',
            '--ck-graphic-wave-stop-05': '#F46D98',
            '--ck-graphic-scaniconwithlogos-01': '#AFAFAF',
            '--ck-graphic-scaniconwithlogos-02': '#696969',
            '--ck-graphic-scaniconwithlogos-03': '#F8D74A',
            '--ck-graphic-scaniconwithlogos-04': '#3D3D3D',
        },
    },
    ens: {
        light: {
            '--ck-ens-01-start': '#FF3B30',
            '--ck-ens-01-stop': '#FF9500',
            '--ck-ens-02-start': '#FF9500',
            '--ck-ens-02-stop': '#FFCC00',
            '--ck-ens-03-start': '#FFCC00',
            '--ck-ens-03-stop': '#34C759',
            '--ck-ens-04-start': '#5856D6',
            '--ck-ens-04-stop': '#AF52DE',
            '--ck-ens-05-start': '#5AC8FA',
            '--ck-ens-05-stop': '#007AFF',
            '--ck-ens-06-start': '#007AFF',
            '--ck-ens-06-stop': '#5856D6',
            '--ck-ens-07-start': '#5856D6',
            '--ck-ens-07-stop': '#AF52DE',
            '--ck-ens-08-start': '#AF52DE',
            '--ck-ens-08-stop': '#FF2D55',
        },
        dark: {
            '--ck-ens-01-start': '#FF453A',
            '--ck-ens-01-stop': '#FF9F0A',
            '--ck-ens-02-start': '#FF9F0A',
            '--ck-ens-02-stop': '#FFD60A',
            '--ck-ens-03-start': '#FFD60A',
            '--ck-ens-03-stop': '#32D74B',
            '--ck-ens-04-start': '#32D74B',
            '--ck-ens-04-stop': '#64D2FF',
            '--ck-ens-05-start': '#64D2FF',
            '--ck-ens-05-stop': '#0A84FF',
            '--ck-ens-06-start': '#0A84FF',
            '--ck-ens-06-stop': '#5E5CE6',
            '--ck-ens-07-start': '#5E5CE6',
            '--ck-ens-07-stop': '#BF5AF2',
            '--ck-ens-08-start': '#BF5AF2',
            '--ck-ens-08-stop': '#FF2D55',
        },
    },
    brand: {
        '--ck-family-brand': '#1A88F8',
        '--ck-brand-walletConnect': '#3B99FC',
        '--ck-brand-coinbaseWallet': '#0052FF',
        '--ck-brand-metamask': '#f6851b',
        '--ck-brand-metamask-01': '#F6851B',
        '--ck-brand-metamask-02': '#E2761B',
        '--ck-brand-metamask-03': '#CD6116',
        '--ck-brand-metamask-04': '#161616',
        '--ck-brand-metamask-05': '#763D16',
        '--ck-brand-metamask-06': '#D7C1B3',
        '--ck-brand-metamask-07': '#C0AD9E',
        '--ck-brand-metamask-08': '#E4761B',
        '--ck-brand-metamask-09': '#233447',
        '--ck-brand-metamask-10': '#E4751F',
        '--ck-brand-metamask-11': '#FEF5E7',
        '--ck-brand-metamask-12': '#E3C8AB',
        '--ck-brand-trust-01': '#3375BB',
        '--ck-brand-trust-02': '#ffffff',
        '--ck-brand-trust-01b': '#ffffff',
        '--ck-brand-trust-02b': '#3375BB',
        '--ck-brand-argent': '#f36a3d',
        '--ck-brand-imtoken-01': '#11C4D1',
        '--ck-brand-imtoken-02': '#0062AD',
        '--ck-brand-safe': '#12FF80',
        '--ck-brand-dawn': '#000000',
    },
};
const themeColors = {
    light: themes_1.default.base.light,
    dark: themes_1.default.base.dark,
    web95: themes_1.default.web95,
    retro: themes_1.default.retro,
    soft: themes_1.default.soft,
    midnight: themes_1.default.midnight,
    minimal: themes_1.default.minimal,
    rounded: themes_1.default.rounded,
    nouns: themes_1.default.nouns,
};
const createCssVars = (scheme, important) => {
    return (0, styled_components_1.css) `
    ${Object.keys(scheme).map((key) => {
        const value = scheme[key];
        return value && `${key}:${value};`;
    })}
  `;
};
const createCssColors = (scheme, override) => {
    const important = override ? ' !important' : '';
    return (0, styled_components_1.css) `
    ${Object.keys(scheme).map((key) => {
        const value = scheme[key];
        return value && `${key}:${value}${important};`;
    })}
    @supports (color: color(display-p3 1 1 1)) {
      ${Object.keys(scheme).map((key) => {
        const value = scheme[key];
        return `${key}:${(0, p3_1.hexToP3)(value)}${important};`;
    })}
    }
  `;
};
const themes = {
    default: createCssVars(themeGlobals.default),
    light: createCssColors(themeColors.light),
    dark: createCssColors(themeColors.dark),
    web95: createCssColors(themeColors.web95),
    retro: createCssColors(themeColors.retro),
    soft: createCssColors(themeColors.soft),
    midnight: createCssColors(themeColors.midnight),
    minimal: createCssColors(themeColors.minimal),
    rounded: createCssColors(themeColors.rounded),
    nouns: createCssColors(themeColors.nouns),
};
const globals = {
    brand: createCssVars(themeGlobals.brand),
    ensLight: createCssVars(themeGlobals.ens.light),
    ensDark: createCssVars(themeGlobals.ens.dark),
    graphicsLight: createCssVars(themeGlobals.graphics.light),
    graphicsDark: createCssVars(themeGlobals.graphics.dark),
};
const globalsLight = (0, styled_components_1.css) `
  ${globals.brand}
  ${globals.ensLight}
  ${globals.graphicsLight}
`;
const globalsDark = (0, styled_components_1.css) `
  ${globals.brand}
  ${globals.ensDark}
  ${globals.graphicsDark}
`;
let mode = 'auto';
exports.ResetContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  ${themes.default}

  ${(props) => {
    switch (props.$useTheme) {
        case 'web95':
            mode = 'light';
            return themes.web95;
        case 'retro':
            mode = 'light';
            return themes.retro;
        case 'soft':
            mode = 'light';
            return themes.soft;
        case 'midnight':
            mode = 'dark';
            return themes.midnight;
        case 'minimal':
            mode = 'light';
            return themes.minimal;
        case 'rounded':
            mode = 'light';
            return themes.rounded;
        case 'nouns':
            mode = 'light';
            return themes.nouns;
        default:
            if (props.$useMode === 'light') {
                mode = 'light';
                return themes.light;
            }
            else if (props.$useMode === 'dark') {
                mode = 'dark';
                return themes.dark;
            }
            else {
                return (0, styled_components_1.css) `
            @media (prefers-color-scheme: light) {
              ${themes.light}
            }
            @media (prefers-color-scheme: dark) {
              ${themes.dark}
            }
          `;
            }
    }
}}

  ${(props) => {
    switch (mode) {
        case 'light':
            return globalsLight;
        case 'dark':
            return globalsDark;
        default:
            return (0, styled_components_1.css) `
          ${globalsLight}
          @media (prefers-color-scheme: dark) {
            ${globalsDark}
          }
        `;
    }
}}


  ${(props) => {
    if (props.$customTheme &&
        props.$customTheme['--ck-accent-color'] &&
        ['light', 'dark', 'auto', '', undefined].includes(props.$useTheme)) {
        const accentColor = props.$customTheme['--ck-accent-color'];
        const accentTextColor = props.$customTheme['--ck-accent-text-color'] ?? '#ffffff';
        return {
            '--ck-accent-color': accentColor,
            '--ck-accent-text-color': accentTextColor,
            '--ck-secondary-button-background': accentColor,
            '--ck-secondary-button-hover-background': accentColor,
            '--ck-secondary-button-color': accentTextColor,
            '--ck-button-primary-color': accentTextColor,
            '--ck-focus-color': accentColor,
        };
    }
    if (props.$customTheme) {
        return createCssColors(props.$customTheme, true);
    }
}}

  all: initial;
  text-align: left;
  text-direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.001px transparent;
  text-size-adjust: none;
  font-size: 16px;

  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.001px transparent;
  }

  &,
  * {
    font-family: var(--ck-font-family);
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  /*
  @media (prefers-reduced-motion) {
    * {
      animation-duration: 60ms !important;
      transition-duration: 60ms !important;
    }
  }
  */
  img,
  svg {
    max-width: 100%;
  }
  strong {
    font-weight: 600;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--ck-focus-color);
  }
`;
//# sourceMappingURL=index.js.map