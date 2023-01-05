"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const ActionContextProvider_1 = require("./ActionContextProvider");
const CustomFormControl_1 = __importDefault(require("./CustomFormControl"));
function CustomTextArea(props) {
    var _a;
    const { label, formControlProps, name } = props, restOfProps = __rest(props, ["label", "formControlProps", "name"]);
    const ref = (0, react_2.useRef)(null);
    const { value, error } = (0, ActionContextProvider_1.useField)(name);
    (0, react_2.useEffect)(() => {
        var _a;
        if (error) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        }
    }, [error]);
    return ((0, jsx_runtime_1.jsx)(CustomFormControl_1.default, Object.assign({ py: 1 }, formControlProps, { label: label, error: error === null || error === void 0 ? void 0 : error.join(", "), labelProps: Object.assign(Object.assign({}, formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps), { htmlFor: ((_a = formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps) === null || _a === void 0 ? void 0 : _a.htmlFor) || props.id || props.name }) }, { children: (0, jsx_runtime_1.jsx)(react_1.Textarea, Object.assign({ fontSize: "sm", name: name, defaultValue: value }, restOfProps)) })));
}
exports.CustomTextArea = CustomTextArea;
//# sourceMappingURL=CustomTextArea.js.map