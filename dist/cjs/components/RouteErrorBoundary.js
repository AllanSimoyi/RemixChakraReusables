"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteErrorBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const BoundaryError_1 = require("./BoundaryError");
const PrimaryButton_1 = require("./PrimaryButton");
const react_3 = require("react");
function RouteErrorBoundary({ error, customerCareLink }) {
    const navigate = (0, react_2.useNavigate)();
    const reload = (0, react_3.useCallback)(() => {
        navigate('.', { replace: true });
    }, [navigate]);
    return ((0, jsx_runtime_1.jsxs)(BoundaryError_1.BoundaryError, Object.assign({ title: "Error 500 - Internal Server Error" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["We encountered an unexpected error. ", (0, jsx_runtime_1.jsx)("br", {}), "We're already working on fixing it. ", (0, jsx_runtime_1.jsx)("br", {})] })), error.message && ((0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", fontWeight: "semibold", textAlign: "center" }, { children: ["\"", error.message, "\" ", (0, jsx_runtime_1.jsx)("br", {})] }))), (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["Please try reloading the page. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists,\u00A0", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ color: "blue.600", fontWeight: "semibold", as: react_2.Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })));
}
exports.RouteErrorBoundary = RouteErrorBoundary;
//# sourceMappingURL=RouteErrorBoundary.js.map