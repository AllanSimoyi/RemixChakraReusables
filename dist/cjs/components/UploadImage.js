"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const core_validations_1 = require("../lib/core.validations");
const ImageUploadIcon_1 = require("./ImageUploadIcon");
function UploadImage(props) {
    const { onChange, uploadState, uploadError, publicId, identifier, isProcessing } = props;
    const borderColor = (0, react_1.useColorModeValue)("blackAlpha.400", "whiteAlpha.400");
    const hoverBgColor = (0, react_1.useColorModeValue)("blackAlpha.100", "whiteAlpha.100");
    const handleChange = (0, react_2.useCallback)((event) => {
        if (event.target.files) {
            onChange([event.target.files[0]]);
        }
    }, [onChange]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", accept: "image/*", id: `file${identifier}`, onChange: handleChange, style: {
                    position: "absolute",
                    visibility: "hidden",
                    opacity: 0,
                    top: 0,
                    left: 0
                }, disabled: isProcessing }), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: `file${identifier}` }, { children: (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ p: "4", border: '1px', borderStyle: "dashed", justify: "center", cursor: "pointer", align: "flex-start", borderRadius: "md", borderColor: borderColor, _hover: { background: hoverBgColor } }, { children: (0, jsx_runtime_1.jsxs)(react_1.HStack, Object.assign({ spacing: "12px" }, { children: [(0, jsx_runtime_1.jsx)(ImageUploadIcon_1.ImageUploadIcon, { status: uploadState, publicId: publicId, cursor: "pointer", style: { color: getIconColor(uploadState) } }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ cursor: "pointer", fontSize: "sm" }, { children: ["Upload ", identifier] })), (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ cursor: "pointer", fontSize: "xs" }, { children: ["Image should not exceed ", core_validations_1.ImageUploadSizeLimit.DisplayValue] })), uploadError && ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm", color: "red.600" }, { children: uploadError })))] })] })) })) }))] }));
}
exports.UploadImage = UploadImage;
function getIconColor(status) {
    const mapping = [
        ["uploaded", "red"],
        ["uploading", "blue"],
        ["error", "red"],
    ];
    const match = mapping.find(el => el[0] === status);
    return (match === null || match === void 0 ? void 0 : match[1]) || "grey";
}
//# sourceMappingURL=UploadImage.js.map