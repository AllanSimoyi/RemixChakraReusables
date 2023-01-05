"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCatchBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const BoundaryError_1 = require("./BoundaryError");
const PrimaryButton_1 = require("./PrimaryButton");
function CustomCatchBoundary(props) {
    const { reload, caught } = props;
    switch (caught.status) {
        case 400: {
            return ((0, jsx_runtime_1.jsx)(BoundaryError_1.BoundaryError, Object.assign({ title: "400 - Bad Request" }, { children: (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ spacing: 4, py: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(caught.data, null, 2) }) })), (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })) })));
        }
        case 401: {
            return ((0, jsx_runtime_1.jsx)(BoundaryError_1.BoundaryError, Object.assign({ title: "401 - Unauthorised" }, { children: (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ spacing: 4, py: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(caught.data, null, 2) }) })), (0, jsx_runtime_1.jsx)(react_2.Link, Object.assign({ to: `/login` }, { children: (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Log In Page" })) }))] })) })));
        }
        case 403: {
            return ((0, jsx_runtime_1.jsx)(BoundaryError_1.BoundaryError, Object.assign({ title: "403 - Forbidden" }, { children: (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ spacing: 4, py: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(caught.data, null, 2) }) })), (0, jsx_runtime_1.jsx)(react_2.Link, Object.assign({ to: `/login` }, { children: (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Log In Page" })) }))] })) })));
        }
        case 404: {
            return ((0, jsx_runtime_1.jsx)(BoundaryError_1.BoundaryError, Object.assign({ title: "404 - Not Found" }, { children: (0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ spacing: 4, py: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(caught.data, null, 2) }) })), (0, jsx_runtime_1.jsx)(react_2.Link, Object.assign({ to: `/` }, { children: (0, jsx_runtime_1.jsx)(PrimaryButton_1.PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Home Page" })) }))] })) })));
        }
        default: {
            throw new Error(`Unhandled error: ${caught.status}`);
        }
    }
}
exports.CustomCatchBoundary = CustomCatchBoundary;
//# sourceMappingURL=CustomCatchBoundary.js.map