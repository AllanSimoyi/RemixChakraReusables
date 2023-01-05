import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function RootBoundaryError({ error, customerCareLink }) {
    return (_jsxs("div", Object.assign({ className: "shadow-md rounded-lg p-6 space-y-2" }, { children: [_jsx("h1", Object.assign({ className: "text-xl font-bold" }, { children: "Error 500 - Internal Server Error" })), _jsxs("p", { children: ["We encountered an unexpected error. We're already working on fixing it. ", _jsx("br", {}), error.message && (_jsxs("div", Object.assign({ className: "font-bold py-2" }, { children: ["Detail: \"", error.message, "\" ", _jsx("br", {})] }))), "Please try reloading the page. ", _jsx("br", {}), "If the issue pesists, ", _jsx("a", Object.assign({ className: "underline text-blue-500", href: customerCareLink }, { children: "contact Customer Care" })), "."] })] })));
}
//# sourceMappingURL=RootBoundaryError.js.map