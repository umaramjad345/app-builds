import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeInput } from './date-range-input';

describe('DateRangeInput', () => {
  let component: DateRangeInput;
  let fixture: ComponentFixture<DateRangeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
