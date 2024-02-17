"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const resize_observer_polyfill_1 = require("resize-observer-polyfill");
const LOG_LEVEL = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40,
    none: 100,
};
const useIsoLayoutEffect = typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement !== undefined
    ? react_1.useLayoutEffect
    : react_1.useEffect;
const useFitText = ({ logLevel: logLevelOption = 'info', maxFontSize = 100, minFontSize = 20, onFinish, onStart, resolution = 5, } = {}) => {
    const logLevel = LOG_LEVEL[logLevelOption];
    const initState = (0, react_1.useCallback)(() => {
        return {
            calcKey: 0,
            fontSize: maxFontSize,
            fontSizePrev: minFontSize,
            fontSizeMax: maxFontSize,
            fontSizeMin: minFontSize,
        };
    }, [maxFontSize, minFontSize]);
    const ref = (0, react_1.useRef)(null);
    const innerHtmlPrevRef = (0, react_1.useRef)();
    const isCalculatingRef = (0, react_1.useRef)(false);
    const [state, setState] = (0, react_1.useState)(initState);
    const { calcKey, fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;
    let animationFrameId = null;
    const [ro] = (0, react_1.useState)(() => new resize_observer_polyfill_1.default(() => {
        animationFrameId = window.requestAnimationFrame(() => {
            if (isCalculatingRef.current) {
                return;
            }
            onStart && onStart();
            isCalculatingRef.current = true;
            setState({
                ...initState(),
                calcKey: calcKey + 1,
            });
        });
    }));
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            ro.observe(ref.current);
        }
        return () => {
            animationFrameId && window.cancelAnimationFrame(animationFrameId);
            ro.disconnect();
        };
    }, [animationFrameId, ro]);
    const innerHtml = ref.current && ref.current.innerHTML;
    (0, react_1.useEffect)(() => {
        if (calcKey === 0 || isCalculatingRef.current)
            return;
        if (innerHtml !== innerHtmlPrevRef.current) {
            onStart && onStart();
            setState({
                ...initState(),
                calcKey: calcKey + 1,
            });
        }
        innerHtmlPrevRef.current = innerHtml;
    }, [calcKey, initState, innerHtml, onStart]);
    useIsoLayoutEffect(() => {
        if (calcKey === 0) {
            return;
        }
        const isWithinResolution = Math.abs(fontSize - fontSizePrev) <= resolution;
        const isOverflow = !!ref.current &&
            (ref.current.scrollHeight > ref.current.offsetHeight ||
                ref.current.scrollWidth > ref.current.offsetWidth);
        const isFailed = isOverflow && fontSize === fontSizePrev;
        const isAsc = fontSize > fontSizePrev;
        if (isWithinResolution) {
            if (isFailed) {
                isCalculatingRef.current = false;
                if (logLevel <= LOG_LEVEL.info) {
                    console.info(`[use-fit-text] reached \`minFontSize = ${minFontSize}\` without fitting text`);
                }
            }
            else if (isOverflow) {
                setState({
                    fontSize: isAsc ? fontSizePrev : fontSizeMin,
                    fontSizeMax,
                    fontSizeMin,
                    fontSizePrev,
                    calcKey,
                });
            }
            else {
                isCalculatingRef.current = false;
                onFinish && onFinish(fontSize);
            }
            return;
        }
        let delta;
        let newMax = fontSizeMax;
        let newMin = fontSizeMin;
        if (isOverflow) {
            delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
            newMax = Math.min(fontSizeMax, fontSize);
        }
        else {
            delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
            newMin = Math.max(fontSizeMin, fontSize);
        }
        setState({
            calcKey,
            fontSize: fontSize + delta / 2,
            fontSizeMax: newMax,
            fontSizeMin: newMin,
            fontSizePrev: fontSize,
        });
    }, [
        calcKey,
        fontSize,
        fontSizeMax,
        fontSizeMin,
        fontSizePrev,
        onFinish,
        ref,
        resolution,
    ]);
    return { fontSize, ref };
};
exports.default = useFitText;
//# sourceMappingURL=useFitText.js.map