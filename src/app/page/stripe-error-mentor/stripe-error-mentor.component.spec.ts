import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeErrorMentorComponent } from './stripe-error-mentor.component';

describe('StripeErrorMentorComponent', () => {
  let component: StripeErrorMentorComponent;
  let fixture: ComponentFixture<StripeErrorMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeErrorMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeErrorMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
