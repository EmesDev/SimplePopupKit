import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePopupLibComponent } from './simple-popup-lib.component';

describe('SimplePopupLibComponent', () => {
  let component: SimplePopupLibComponent;
  let fixture: ComponentFixture<SimplePopupLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplePopupLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePopupLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
