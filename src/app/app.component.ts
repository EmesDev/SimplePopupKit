import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnumPopupTheme, GenericPopupComponent, PopupService } from 'simple-popup-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private popupService: PopupService) {}
  title = 'SimplePopupKit';

  openPopup() {
    this.popupService.ShowAsComponent(GenericPopupComponent, {
      title: 'Popup Title',
      message: 'Popup Message',
      theme: EnumPopupTheme.DEFAULT,

    });
  }
}
