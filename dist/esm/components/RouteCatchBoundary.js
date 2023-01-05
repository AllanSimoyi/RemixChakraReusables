import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as ChakraLink, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { Link, useCatch, useNavigate } from "@remix-run/react";
import { BoundaryError } from "./BoundaryError";
import { PrimaryButton } from './PrimaryButton';
import { useCallback } from "react";
export function RouteCatchBoundary({ customerCareLink, loginLink }) {
    const caught = useCatch();
    const navigate = useNavigate();
    const reload = useCallback(() => {
        navigate('.', { replace: true });
    }, [navigate]);
    switch (caught.status) {
        case 400: {
            return (_jsxs(BoundaryError, Object.assign({ title: "Error 400 - Bad Request" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["We received a malformed or invalid request. Please review your input and ensure it is valid. ", _jsx("br", {}), "If the issue pesists,\u00A0", _jsx(ChakraLink, Object.assign({ color: "blue.600", fontWeight: "semibold", as: Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), _jsx(PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })));
        }
        case 401: {
            return (_jsxs(BoundaryError, Object.assign({ title: "Error 401 - Unauthorised" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["You're not authorised to access this resource. Please ensure you're logged in before requesting for this resource. ", _jsx("br", {}), "If the issue pesists,\u00A0", _jsx(ChakraLink, Object.assign({ color: "blue.600", fontWeight: "semibold", as: Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), _jsx(Link, Object.assign({ prefetch: "render", to: loginLink }, { children: _jsx(PrimaryButton, Object.assign({ w: "100%" }, { children: "Open Login Page" })) }))] })));
        }
        case 403: {
            return (_jsxs(BoundaryError, Object.assign({ title: "Error 403 - Forbidden" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["You don't have permission to access this resource. Please ensure you're logged in using an account with the right access level. ", _jsx("br", {}), "If the issue pesists,\u00A0", _jsx(ChakraLink, Object.assign({ color: "blue.600", fontWeight: "semibold", as: Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), _jsx(Link, Object.assign({ to: loginLink }, { children: _jsx(PrimaryButton, Object.assign({ w: "100%" }, { children: "Open Login Page" })) }))] })));
        }
        case 404: {
            return (_jsx(BoundaryError, Object.assign({ title: "Error 404 - Resource Not Found" }, { children: _jsxs(VStack, Object.assign({ align: "flex-start", px: 6 }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm" }, { children: ["We couldn't find that resource. ", _jsx("br", {})] })), _jsxs(VStack, Object.assign({ align: "flex-start", py: 2 }, { children: [_jsx(Text, Object.assign({ fontSize: "sm" }, { children: "This could've been because of any of the following:" })), _jsxs(UnorderedList, Object.assign({ textAlign: "start" }, { children: [_jsx(ListItem, { children: "The resource has moved." }), _jsx(ListItem, { children: "The resource no longer exists." }), _jsx(ListItem, { children: "You entered a slighly wrong URL, try checking for typos." })] }))] })), _jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "start" }, { children: ["Please review the resource address and try again. ", _jsx("br", {}), "If the issue pesists,\u00A0", _jsx(ChakraLink, Object.assign({ color: "blue.600", fontWeight: "semibold", as: Link, to: customerCareLink }, { children: "contact Customer Care" }))] }))] })) })));
        }
        default: {
            throw new Error(`Unhandled error: ${caught.status}`);
        }
    }
}
//# sourceMappingURL=RouteCatchBoundary.js.map