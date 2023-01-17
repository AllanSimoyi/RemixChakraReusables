import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { ImageUploadIcon } from './ImageUploadIcon';
export function UploadImage(props) {
    const { onChange, uploadState, uploadError, publicId, identifier, isProcessing, uploadSizeLimit } = props;
    const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");
    const hoverBgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
    const handleChange = useCallback((event) => {
        if (event.target.files) {
            onChange([event.target.files[0]]);
        }
    }, [onChange]);
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "file", accept: "image/*", id: `file${identifier}`, onChange: handleChange, style: {
                    position: "absolute",
                    visibility: "hidden",
                    opacity: 0,
                    top: 0,
                    left: 0
                }, disabled: isProcessing }), _jsx("label", Object.assign({ htmlFor: `file${identifier}` }, { children: _jsx(VStack, Object.assign({ p: "4", border: '1px', borderStyle: "dashed", justify: "center", cursor: "pointer", align: "flex-start", borderRadius: "md", borderColor: borderColor, _hover: { background: hoverBgColor } }, { children: _jsxs(HStack, Object.assign({ spacing: "12px" }, { children: [_jsx(ImageUploadIcon, { status: uploadState, publicId: publicId, cursor: "pointer", style: { color: getIconColor(uploadState) } }), _jsxs("div", { children: [_jsxs(Text, Object.assign({ cursor: "pointer", fontSize: "sm" }, { children: ["Upload ", identifier] })), _jsxs(Text, Object.assign({ cursor: "pointer", fontSize: "xs" }, { children: ["Image should not exceed ", uploadSizeLimit] })), uploadError && (_jsx(Text, Object.assign({ fontSize: "sm", color: "red.600" }, { children: uploadError })))] })] })) })) }))] }));
}
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