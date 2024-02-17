"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LazyImage = ({ src, alt, width, height }) => {
    const imageRef = (0, react_1.useRef)(null);
    const [loaded, setLoaded] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (!(imageRef.current &&
            imageRef.current.complete &&
            imageRef.current.naturalHeight !== 0)) {
            setLoaded(false);
        }
    }, [src]);
    return (<div style={{
            width,
            height,
            background: 'rgba(0,0,0,0.02)',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.02)',
        }}>
      <img ref={imageRef} src={src} alt={alt} width={width} height={height} onLoad={() => setLoaded(true)} style={{ transition: 'opacity 0.2s ease', opacity: loaded ? 1 : 0 }}/>
    </div>);
};
exports.default = LazyImage;
//# sourceMappingURL=index.js.map