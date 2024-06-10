import {
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent,
} from '@angular/core';
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
    setTimeout(() => {
      this.applicationRef.detachView(ElementComponentRef.hostView);
      ElementComponentRef.destroy();
    }, conf.timeout);


    ElementComponentRef.instance.title = conf.title;
    ElementComponentRef.instance.message = conf.message;
    ElementComponentRef.instance.theme = conf.theme;

    document.body.appendChild(NewElement);
  }

}
