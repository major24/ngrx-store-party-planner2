import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryGuestComponent } from './primary-guest.component';

describe('PrimaryGuestComponent', () => {
  let component: PrimaryGuestComponent;
  let fixture: ComponentFixture<PrimaryGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
