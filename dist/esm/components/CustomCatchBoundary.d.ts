/// <reference types="react" />
import type { ThrownResponse } from "@remix-run/react";
interface Props {
    reload: () => void;
    caught: ThrownResponse<number, any>;
}
export declare function CustomCatchBoundary(props: Props): JSX.Element;
export {};
