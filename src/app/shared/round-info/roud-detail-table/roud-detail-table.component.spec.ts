import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoudDetailTableComponent } from './roud-detail-table.component';

describe('RoudDetailTableComponent', () => {
  let component: RoudDetailTableComponent;
  let fixture: ComponentFixture<RoudDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoudDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoudDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
