"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsNotFound = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const tabler_icons_react_1 = require("tabler-icons-react");
function RecordsNotFound(props) {
    const { children, imageHeight = 40 } = props;
    return ((0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ justify: "center", align: "center", py: 8, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(tabler_icons_react_1.Folder, { size: imageHeight }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm", fontWeight: "light" }, { children: children }))] })));
}
exports.RecordsNotFound = RecordsNotFound;
//# sourceMappingURL=RecordsNotFound.js.map