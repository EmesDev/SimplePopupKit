import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumPopupTheme } from 'simple-popup-lib';
import { GenericPopupComponent } from './generic-popup.component';

describe('GenericPopupComponent', () => {
  let component: GenericPopupComponent;
  let fixture: ComponentFixture<GenericPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should bind title input', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(component.title).toBe('Test Title');
  });

  it('should bind message input', () => {
    component.message = 'Test Message';
    fixture.detectChanges();
    expect(component.message).toBe('Test Message');
  });

  it('should bind theme input', () => {
    component.theme = EnumPopupTheme.DEFAULT;
    fixture.detectChanges();
    expect(component.theme).toBe(EnumPopupTheme.DEFAULT);
  });

  it('should emit closed event when closed', () => {
    spyOn(component.closed, 'emit');
    component.closed.emit();
    expect(component.closed.emit).toHaveBeenCalled();
  });

  
});
