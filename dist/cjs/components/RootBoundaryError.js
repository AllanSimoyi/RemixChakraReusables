"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootBoundaryError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function RootBoundaryError({ error, customerCareLink }) {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "shadow-md rounded-lg p-6 space-y-2" }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "text-xl font-bold" }, { children: "Error 500 - Internal Server Error" })), (0, jsx_runtime_1.jsxs)("p", { children: ["We encountered an unexpected error. We're already working on fixing it. ", (0, jsx_runtime_1.jsx)("br", {}), error.message && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "font-bold py-2" }, { children: ["Detail: \"", error.message, "\" ", (0, jsx_runtime_1.jsx)("br", {})] }))), "Please try reloading the page. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists, ", (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "underline text-blue-500", href: customerCareLink }, { children: "contact Customer Care" })), "."] })] })));
}
exports.RootBoundaryError = RootBoundaryError;
//# sourceMappingURL=RootBoundaryError.js.map