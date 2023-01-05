import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Text } from "@chakra-ui/react";
export function SeveralErrors(props) {
    const { errors } = props;
    return (_jsxs(Alert, Object.assign({ borderRadius: 6, status: "error", fontSize: "sm", w: "auto" }, { children: [_jsx(AlertIcon, {}), _jsxs(Box, { children: [_jsx(AlertTitle, { children: "Error" }), _jsx(AlertDescription, { children: errors.map((error, index) => (_jsx(Text, Object.assign({ fontSize: "sm" }, { children: error }), index))) })] })] })));
}
//# sourceMappingURL=SeveralErrors.js.map