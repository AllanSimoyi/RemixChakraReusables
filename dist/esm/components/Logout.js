import { jsx as _jsx } from "react/jsx-runtime";
import { MenuItem } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
export function Logout() {
    return (_jsx(Form, Object.assign({ action: "/logout", method: "post" }, { children: _jsx(MenuItem, Object.assign({ type: "submit", fontSize: "sm" }, { children: "Log Out" })) })));
}
//# sourceMappingURL=Logout.js.map