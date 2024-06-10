import { TestBed } from '@angular/core/testing';

import { EnumPopupTheme, GenericPopupComponent } from 'simple-popup-lib';
import { PopupService } from './popup.service';

describe('PopupService', () => {
  let service: PopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show popup', () => {
    service.ShowAsComponent(GenericPopupComponent, {
      title: 'Test Title',
      message: 'Test Message',
      theme: EnumPopupTheme.DEFAULT,
    });

    expect(service).toBeTruthy();

    
  });

  it('should show popup with timeout', () => {
    service.ShowAsComponent(GenericPopupComponent, {
      title: 'Test Title',
      message: 'Test Message',
      theme: EnumPopupTheme.DEFAULT,
      timeout: 1000,
    });

    expect(service).toBeTruthy();
  });




});
