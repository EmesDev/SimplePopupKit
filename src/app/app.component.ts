import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnumPopupPosition, EnumPopupTheme, GenericPopupComponent, PopupService } from '../../projects/simple-popup-lib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private popupService: PopupService) {}
  title = 'SimplePopupKit';
  theme = EnumPopupTheme.SUCCESS;

  openPopup() {
    this.popupService.ShowAsComponent(GenericPopupComponent, {
      message: 'Popup Message',
      theme: EnumPopupTheme.WARNING,
      timeout: 3000,
      position: EnumPopupPosition.BOTTOM_RIGHT,

    });
  }
}
