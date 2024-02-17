"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const DynamicContainer = ({ id, children, }) => {
    return (<div style={{ position: 'relative' }}>
      <framer_motion_1.motion.div key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, position: 'absolute', top: 0, left: 0 }} transition={{ duration: 0.3 }}>
        {children}
      </framer_motion_1.motion.div>
    </div>);
};
exports.default = DynamicContainer;
//# sourceMappingURL=index.js.map