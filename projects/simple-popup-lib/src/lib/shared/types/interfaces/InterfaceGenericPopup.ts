import { EnumPopupTheme } from "../enums/EnumPopupTheme";

export interface InterfaceGenericPopup {
    message: string;
    closed?: any;
    timeout?: number;
    theme: EnumPopupTheme

}