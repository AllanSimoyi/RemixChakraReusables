import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, VStack } from "@chakra-ui/react";
import { Folder } from "tabler-icons-react";
export function RecordsNotFound(props) {
    const { children, imageHeight = 40 } = props;
    return (_jsxs(VStack, Object.assign({ justify: "center", align: "center", py: 8, spacing: 2 }, { children: [_jsx(Folder, { size: imageHeight }), _jsx(Text, Object.assign({ fontSize: "sm", fontWeight: "light" }, { children: children }))] })));
}
//# sourceMappingURL=RecordsNotFound.js.map