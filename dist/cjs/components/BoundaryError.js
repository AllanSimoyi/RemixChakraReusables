"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundaryError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function BoundaryError(props) {
    const { title, children } = props;
    return ((0, jsx_runtime_1.jsxs)(react_1.Alert, Object.assign({ flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', status: 'error', variant: 'subtle', textAlign: 'center', minHeight: '200px', maxWidth: '600px', borderRadius: 5, p: 6 }, { children: [(0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "center" }, { children: (0, jsx_runtime_1.jsx)(react_1.AlertIcon, { boxSize: '40px', mr: 0 }) })), (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "center", py: 6 }, { children: (0, jsx_runtime_1.jsx)(react_1.AlertTitle, Object.assign({ fontSize: 'lg' }, { children: title })) })), (0, jsx_runtime_1.jsx)(react_1.AlertDescription, { children: (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", spacing: 6 }, { children: children })) })] })));
}
exports.BoundaryError = BoundaryError;
//# sourceMappingURL=BoundaryError.js.map