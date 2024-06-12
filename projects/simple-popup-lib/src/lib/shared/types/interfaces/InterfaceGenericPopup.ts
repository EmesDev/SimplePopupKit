import { EnumPopupPosition } from "../enums";
import { EnumPopupTheme } from "../enums/EnumPopupTheme";

export interface InterfaceGenericPopup {
    message: string;
    theme: EnumPopupTheme
    position?: EnumPopupPosition
    timeout?: number;
    closed?: any;

}