import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenteeComponent } from './list-mentee.component';

describe('ListMenteeComponent', () => {
  let component: ListMenteeComponent;
  let fixture: ComponentFixture<ListMenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
