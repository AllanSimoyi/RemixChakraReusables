import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link, useNavigate } from "@remix-run/react";
import { BoundaryError } from "./BoundaryError";
import { PrimaryButton } from './PrimaryButton';
import { useCallback } from "react";
export function RouteErrorBoundary({ error, customerCareLink }) {
    const navigate = useNavigate();
    const reload = useCallback(() => {
        navigate('.', { replace: true });
    }, [navigate]);
    return (_jsxs(BoundaryError, Object.assign({ title: "Error 500 - Internal Server Error" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["We encountered an unexpected error. ", _jsx("br", {}), "We're already working on fixing it. ", _jsx("br", {})] })), error.message && (_jsxs(Text, Object.assign({ fontSize: "sm", fontWeight: "semibold", textAlign: "center" }, { children: ["\"", error.message, "\" ", _jsx("br", {})] }))), _jsxs(Text, Object.assign({ fontSize: "sm", textAlign: "center" }, { children: ["Please try reloading the page. ", _jsx("br", {}), "If the issue pesists,\u00A0", _jsx(ChakraLink, Object.assign({ color: "blue.600", fontWeight: "semibold", as: Link, to: customerCareLink }, { children: "contact Customer Care" }))] })), _jsx(PrimaryButton, Object.assign({ onClick: reload }, { children: "Reload" }))] })));
}
//# sourceMappingURL=RouteErrorBoundary.js.map