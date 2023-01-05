import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription, AlertIcon, AlertTitle, VStack } from '@chakra-ui/react';
export function BoundaryError(props) {
    const { title, children } = props;
    return (_jsxs(Alert, Object.assign({ flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', status: 'error', variant: 'subtle', textAlign: 'center', minHeight: '200px', maxWidth: '600px', borderRadius: 5, p: 6 }, { children: [_jsx(VStack, Object.assign({ align: "center" }, { children: _jsx(AlertIcon, { boxSize: '40px', mr: 0 }) })), _jsx(VStack, Object.assign({ align: "center", py: 6 }, { children: _jsx(AlertTitle, Object.assign({ fontSize: 'lg' }, { children: title })) })), _jsx(AlertDescription, { children: _jsx(VStack, Object.assign({ align: "stretch", spacing: 6 }, { children: children })) })] })));
}
//# sourceMappingURL=BoundaryError.js.map