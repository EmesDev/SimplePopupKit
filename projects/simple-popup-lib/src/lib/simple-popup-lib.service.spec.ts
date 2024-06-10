import { TestBed } from '@angular/core/testing';

import { SimplePopupLibService } from './simple-popup-lib.service';

describe('SimplePopupLibService', () => {
  let service: SimplePopupLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplePopupLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
