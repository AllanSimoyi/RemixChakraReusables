"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeveralErrors = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function SeveralErrors(props) {
    const { errors } = props;
    return ((0, jsx_runtime_1.jsxs)(react_1.Alert, Object.assign({ borderRadius: 6, status: "error", fontSize: "sm", w: "auto" }, { children: [(0, jsx_runtime_1.jsx)(react_1.AlertIcon, {}), (0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(react_1.AlertTitle, { children: "Error" }), (0, jsx_runtime_1.jsx)(react_1.AlertDescription, { children: errors.map((error, index) => ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: error }), index))) })] })] })));
}
exports.SeveralErrors = SeveralErrors;
//# sourceMappingURL=SeveralErrors.js.map