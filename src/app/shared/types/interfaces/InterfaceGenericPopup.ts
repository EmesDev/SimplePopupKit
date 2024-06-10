import { EnumPopupTheme } from "../enums/EnumPopupTheme";

export interface InterfaceGenericPopup {
    title: string;
    message: string;
    closed?: any;
    theme: EnumPopupTheme
}