import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGuestComponent } from './secondary-guest.component';

describe('SecondaryGuestComponent', () => {
  let component: SecondaryGuestComponent;
  let fixture: ComponentFixture<SecondaryGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
