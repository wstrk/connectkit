"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Alert = ({ children, error, icon }) => {
    return (<styles_1.AlertContainer $error={error}>
      {icon && <styles_1.IconContainer>{icon}</styles_1.IconContainer>}
      <div>{children}</div>
    </styles_1.AlertContainer>);
};
Alert.displayName = 'Alert';
exports.default = Alert;
//# sourceMappingURL=index.js.map