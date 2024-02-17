"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCode = void 0;
const qrcode_1 = require("qrcode");
const react_1 = require("react");
const generateMatrix = (value, errorCorrectionLevel) => {
    const arr = Array.prototype.slice.call(qrcode_1.default.create(value, { errorCorrectionLevel }).modules.data, 0);
    const sqrt = Math.sqrt(arr.length);
    return arr.reduce((rows, key, index) => (index % sqrt === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
};
function QRCode({ ecl = 'M', size: sizeProp = 200, uri, clearArea = false, image, imageBackground = 'transparent', }) {
    const logoSize = clearArea ? 76 : 0;
    const size = sizeProp - 10 * 2;
    const dots = (0, react_1.useMemo)(() => {
        const dots = [];
        const matrix = generateMatrix(uri, ecl);
        const cellSize = size / matrix.length;
        let qrList = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
        ];
        qrList.forEach(({ x, y }) => {
            const x1 = (matrix.length - 7) * cellSize * x;
            const y1 = (matrix.length - 7) * cellSize * y;
            for (let i = 0; i < 3; i++) {
                dots.push(<rect key={`${i}-${x}-${y}`} fill={i % 2 !== 0
                        ? 'var(--ck-qr-background, var(--ck-body-background))'
                        : 'var(--ck-qr-dot-color)'} rx={(i - 2) * -5 + (i === 0 ? 2 : 3)} ry={(i - 2) * -5 + (i === 0 ? 2 : 3)} width={cellSize * (7 - i * 2)} height={cellSize * (7 - i * 2)} x={x1 + cellSize * i} y={y1 + cellSize * i}/>);
            }
        });
        if (image) {
            const x1 = (matrix.length - 7) * cellSize * 1;
            const y1 = (matrix.length - 7) * cellSize * 1;
            dots.push(<>
          <rect fill={imageBackground} rx={(0 - 2) * -5 + 2} ry={(0 - 2) * -5 + 2} width={cellSize * (7 - 0 * 2)} height={cellSize * (7 - 0 * 2)} x={x1 + cellSize * 0} y={y1 + cellSize * 0}/>
          <foreignObject width={cellSize * (7 - 0 * 2)} height={cellSize * (7 - 0 * 2)} x={x1 + cellSize * 0} y={y1 + cellSize * 0}>
            <div style={{ borderRadius: (0 - 2) * -5 + 2, overflow: 'hidden' }}>
              {image}
            </div>
          </foreignObject>
        </>);
        }
        const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
        const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
        const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
        matrix.forEach((row, i) => {
            row.forEach((_, j) => {
                if (matrix[i][j]) {
                    if (!((i < 7 && j < 7) ||
                        (i > matrix.length - 8 && j < 7) ||
                        (i < 7 && j > matrix.length - 8))) {
                        if (image ||
                            !(i > matrixMiddleStart &&
                                i < matrixMiddleEnd &&
                                j > matrixMiddleStart &&
                                j < matrixMiddleEnd)) {
                            dots.push(<circle key={`circle-${i}-${j}`} cx={i * cellSize + cellSize / 2} cy={j * cellSize + cellSize / 2} fill="var(--ck-qr-dot-color)" r={cellSize / 3}/>);
                        }
                    }
                }
            });
        });
        return dots;
    }, [ecl, size, uri]);
    return (<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`} style={{
            width: size,
            height: size,
        }}>
      <rect fill="transparent" height={size} width={size}/>
      {dots}
    </svg>);
}
exports.QRCode = QRCode;
//# sourceMappingURL=QRCode.js.map