import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, VStack } from '@chakra-ui/react';
import { Link } from "@remix-run/react";
import { BoundaryError } from "./BoundaryError";
import { PrimaryButton } from './PrimaryButton';
export function CustomCatchBoundary(props) {
    const { reload, caught } = props;
    switch (caught.status) {
        case 400: {
            return (_jsx(BoundaryError, Object.assign({ title: "400 - Bad Request" }, { children: _jsxs(VStack, Object.assign({ spacing: 4, py: 2 }, { children: [_jsx(Text, Object.assign({ fontSize: "sm" }, { children: _jsx("code", { children: JSON.stringify(caught.data, null, 2) }) })), _jsx(PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })) })));
        }
        case 401: {
            return (_jsx(BoundaryError, Object.assign({ title: "401 - Unauthorised" }, { children: _jsxs(VStack, Object.assign({ spacing: 4, py: 2 }, { children: [_jsx(Text, Object.assign({ fontSize: "sm" }, { children: _jsx("code", { children: JSON.stringify(caught.data, null, 2) }) })), _jsx(Link, Object.assign({ to: `/login` }, { children: _jsx(PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Log In Page" })) }))] })) })));
        }
        case 403: {
            return (_jsx(BoundaryError, Object.assign({ title: "403 - Forbidden" }, { children: _jsxs(VStack, Object.assign({ spacing: 4, py: 2 }, { children: [_jsx(Text, Object.assign({ fontSize: "sm" }, { children: _jsx("code", { children: JSON.stringify(caught.data, null, 2) }) })), _jsx(Link, Object.assign({ to: `/login` }, { children: _jsx(PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Log In Page" })) }))] })) })));
        }
        case 404: {
            return (_jsx(BoundaryError, Object.assign({ title: "404 - Not Found" }, { children: _jsxs(VStack, Object.assign({ spacing: 4, py: 2 }, { children: [_jsx(Text, Object.assign({ fontSize: "sm" }, { children: _jsx("code", { children: JSON.stringify(caught.data, null, 2) }) })), _jsx(Link, Object.assign({ to: `/` }, { children: _jsx(PrimaryButton, Object.assign({ w: "100%" }, { children: "Go To Home Page" })) }))] })) })));
        }
        default: {
            throw new Error(`Unhandled error: ${caught.status}`);
        }
    }
}
//# sourceMappingURL=CustomCatchBoundary.js.map