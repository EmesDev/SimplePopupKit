import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnumPopupTheme } from '../types/enums/EnumPopupTheme';
import { InterfaceGenericPopup } from '../types/interfaces/InterfaceGenericPopup';

@Component({
  selector: 'app-generic-popup',
  standalone: true,
  imports: [],
  templateUrl: './generic-popup.component.html',
  styleUrl: './generic-popup.component.css',
})
export class GenericPopupComponent implements InterfaceGenericPopup {
  @Input()
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  private _title = '';

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

  @Output()
  closed = new EventEmitter<void>();
}
