import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  FormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
export interface DateRangeValue {
  start: Date | null;
  end: Date | null;
}
@Component({
  selector: 'app-date-range-input',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './date-range-input.html',
  styleUrl: './date-range-input.scss',
})
export class DateRangeInput {
  private static _counter = 0;

  @Input() label?: string = 'Select Date Range';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() startPlaceholder: string = 'Start Date';
  @Input() endPlaceholder: string = 'End Date';
  @Input() tabIndex?: number;
  @Input() startControl?: AbstractControl<any>;
  @Input() endControl?: AbstractControl<any>;
  @Input() startDate?: any;
  @Input() endDate?: any;

  @Output() startDateChange: EventEmitter<any> = new EventEmitter();
  @Output() endDateChange: EventEmitter<any> = new EventEmitter();

  public startId: string;
  public startName: string;
  public endId: string;
  public endName: string;

  constructor() {
    DateRangeInput._counter++;
    this.startId = `date-range-start-${DateRangeInput._counter}`;
    this.startName = `dateRangeStart${DateRangeInput._counter}`;
    this.endId = `date-range-end-${DateRangeInput._counter}`;
    this.endName = `dateRangeEnd${DateRangeInput._counter}`;
  }

  // Called when start date changes (ngModel)
  public onStartChange(date: any): void {
    this.startDateChange.emit(date);
  }

  // Called when end date changes (ngModel)
  public onEndChange(date: any): void {
    this.endDateChange.emit(date);
  }
}
