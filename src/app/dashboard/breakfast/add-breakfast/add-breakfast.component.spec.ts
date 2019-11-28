import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakfastComponent } from './add-breakfast.component';

describe('AddBreakfastComponent', () => {
  let component: AddBreakfastComponent;
  let fixture: ComponentFixture<AddBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
