import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnumPopupPosition, EnumPopupTheme } from '../../types/enums';
import { InterfaceGenericPopup } from '../../types/interfaces';

@Component({
  selector: 'app-generic-popup',
  standalone: true,
  imports: [],
  templateUrl: './generic-popup.component.html',
  styleUrl: './generic-popup.component.css',
})
export class GenericPopupComponent implements InterfaceGenericPopup {
  types = EnumPopupTheme;

  @Input()
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }
  private _message = '';

  @Input()
  get theme(): EnumPopupTheme {
    return this._theme;
  }
  set theme(value: EnumPopupTheme) {
    this._theme = value;
  }
  private _theme = EnumPopupTheme.DEFAULT;
  
  @Input()
  get position(): EnumPopupPosition {
    return this._position;
  }
  set position(value: EnumPopupPosition) {
    this._position = value;
  }
  private _position = EnumPopupPosition.TOP_RIGHT;

  @Output()
  closed = new EventEmitter<void>();
}
