import {
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent,
} from '@angular/core';
import { EnumPopupPosition } from '../../../../public-api';
import { InterfaceGenericPopup } from '../../../shared/types/interfaces/InterfaceGenericPopup';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(
    private injector: EnvironmentInjector,
    private applicationRef: ApplicationRef
  ) {}

  public ShowAsComponent<T extends InterfaceGenericPopup>(
    component: Type<T>,
    conf: InterfaceGenericPopup
  ): void {
    const NewElement = document.createElement('simple-popup');

    const ElementComponentRef = createComponent(component, {
      environmentInjector: this.injector,
      hostElement: NewElement,
    });

    this.applicationRef.attachView(ElementComponentRef.hostView);

    ElementComponentRef.instance.closed.subscribe(() => {
      this.applicationRef.detachView(ElementComponentRef.hostView);
      ElementComponentRef.destroy();
    });

    if (!conf.timeout) conf.timeout = 3000;
    if (!conf.position) conf.position = EnumPopupPosition.TOP_RIGHT;

    ElementComponentRef.instance.message = conf.message;
    ElementComponentRef.instance.theme = conf.theme;
    ElementComponentRef.instance.position = conf.position;

    setTimeout(() => {
      this.applicationRef.detachView(ElementComponentRef.hostView);
      ElementComponentRef.destroy();
    }, conf.timeout);


    document.body.appendChild(NewElement);
  }
}
