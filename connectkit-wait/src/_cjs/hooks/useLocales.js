"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const logos_1 = require("../assets/logos");
const ConnectKit_1 = require("../components/ConnectKit");
const localizations_1 = require("./../localizations");
function useLocales(replacements) {
    const context = (0, ConnectKit_1.useContext)();
    const language = context.options?.language ?? 'en-US';
    const translations = (0, react_1.useMemo)(() => {
        return (0, localizations_1.getLocale)(language);
    }, [language]);
    if (!translations) {
        console.error(`Missing translations for: ${language}`);
        return `Missing translations for: ${language}`;
    }
    const translated = {};
    Object.keys(translations).map((key) => {
        const string = translations[key];
        return (translated[key] = localize(string, replacements));
    });
    return translated;
}
exports.default = useLocales;
const localize = (text, replacements) => {
    let parsedText = text;
    if (replacements) {
        Object.keys(replacements).forEach((key) => {
            parsedText = parsedText.replace(new RegExp(`({{ ${key} }})`, 'g'), replacements[key]);
        });
    }
    return replaceMarkdown(parsedText);
};
const replaceMarkdown = (markdownText) => {
    let text = markdownText;
    text = text.split('\n');
    text = text.map((t, i) => {
        return (<react_1.default.Fragment key={i}>
        {wrapTags(t)}
        {i < text.length - 1 && <br />}
      </react_1.default.Fragment>);
    });
    return text;
};
const wrapTags = (text) => {
    const textArray = text.split(/(\*\*[^\*]*\*\*)/g);
    let result = textArray.map((str, i) => {
        if (/(\*\*.*\*\*)/g.test(str)) {
            return <strong key={i}>{str.replace(/\*\*/g, '')}</strong>;
        }
        return `${str}`;
    });
    return result.map((r) => {
        if (typeof r === 'string') {
            return r.split(/(\[WALLETCONNECTLOGO\])/g).map((s) => {
                if (s === '[WALLETCONNECTLOGO]') {
                    return (<span key={s} className="ck-tt-logo">
              <logos_1.default.WalletConnect />
            </span>);
                }
                return s;
            });
        }
        return r;
    });
};
//# sourceMappingURL=useLocales.js.map