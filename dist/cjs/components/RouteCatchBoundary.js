"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCatchBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const BoundaryError_1 = require("./BoundaryError");
const PrimaryButton_1 = require("./PrimaryButton");
const react_3 = require("react");
function RouteCatchBoundary({ customerCareLink, loginLink }) {
    const caught = (0, react_2.useCatch)();
    const navigate = (0, react_2.useNavigate)();
    const reload = (0, react_3.useCallback)(() => {
        navigate('.', { replace: true });
    }, [navigate]);
    switch (caught.status) {
        case 400: {
            return ((0, jsx_runtime_1.jsxs)(BoundaryError_1.BoundaryError, Object.assign({ title: "Error 400 - Bad Request" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["We received a malformed or invalid request. Please review your input and ensure it is valid. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists,\u00A0", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ color: "blue.600", fontWeight: "semibold", as: react_2.Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })));
        }
        case 401: {
            return ((0, jsx_runtime_1.jsxs)(BoundaryError_1.BoundaryError, Object.assign({ title: "Error 401 - Unauthorised" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["You're not authorised to access this resource. Please ensure you're logged in before requesting for this resource. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists,\u00A0", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ color: "blue.600", fontWeight: "semibold", as: react_2.Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), (0, jsx_runtime_1.jsx)(react_2.Link, Object.assign({ prefetch: "render", to: loginLink }, { children: (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ w: "100%" }, { children: "Open Login Page" })) }))] })));
        }
        case 403: {
            return ((0, jsx_runtime_1.jsxs)(BoundaryError_1.BoundaryError, Object.assign({ title: "Error 403 - Forbidden" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["You don't have permission to access this resource. Please ensure you're logged in using an account with the right access level. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists,\u00A0", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ color: "blue.600", fontWeight: "semibold", as: react_2.Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), (0, jsx_runtime_1.jsx)(react_2.Link, Object.assign({ to: loginLink }, { children: (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ w: "100%" }, { children: "Open Login Page" })) }))] })));
        }
        case 404: {
            return ((0, jsx_runtime_1.jsx)(BoundaryError_1.BoundaryError, Object.assign({ title: "Error 404 - Resource Not Found" }, { children: (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ align: "flex-start", px: 6 }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: ["We couldn't find that resource. ", (0, jsx_runtime_1.jsx)("br", {})] })), (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ align: "flex-start", py: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: "This could've been because of any of the following:" })), (0, jsx_runtime_1.jsxs)(react_1.UnorderedList, Object.assign({ textAlign: "start" }, { children: [(0, jsx_runtime_1.jsx)(react_1.ListItem, { children: "The resource has moved." }), (0, jsx_runtime_1.jsx)(react_1.ListItem, { children: "The resource no longer exists." }), (0, jsx_runtime_1.jsx)(react_1.ListItem, { children: "You entered a slighly wrong URL, try checking for typos." })] }))] })), (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", textAlign: "start" }, { children: ["Please review the resource address and try again. ", (0, jsx_runtime_1.jsx)("br", {}), "If the issue pesists,\u00A0", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ color: "blue.600", fontWeight: "semibold", as: react_2.Link, to: customerCareLink }, { children: "contact Customer Care" }))] }))] })) })));
        }
        default: {
            throw new Error(`Unhandled error: ${caught.status}`);
        }
    }
}
exports.RouteCatchBoundary = RouteCatchBoundary;
//# sourceMappingURL=RouteCatchBoundary.js.map