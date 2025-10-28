import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DateRangeInput } from '../../../shared/date-range-input/date-range-input';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    DateRangeInput,
  ],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
})
export class QuoteList {
  quotesSearchForm!: FormGroup;
  private startDate?: Date;
  private endDate?: Date;
  statusOptions = ['Pending', 'Completed', 'In Progress'];
  reworkStatusOptions = ['Yes', 'No'];

  displayedColumns: string[] = [
    'orderNumber',
    'status',
    'reworkStatus',
    'poNumber',
    'invoiceNumber',
    'actions',
  ];
  orderDataSource = new MatTableDataSource<any>([
    {
      orderNumber: 1001,
      status: 'Completed',
      reworkStatus: 'No',
      poNumber: 2001,
      invoiceNumber: 3001,
    },
    {
      orderNumber: 1002,
      status: 'Pending',
      reworkStatus: 'Yes',
      poNumber: 2002,
      invoiceNumber: 3002,
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const fourMonthsAgo = new Date();
    fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() -4);

    this.quotesSearchForm = this.fb.group({
      orderNumber: [''],
      status: [''],
      reworkStatus: [''],
      poNumber: [''],
      invoiceNumber: [''],
      startDateFrom: this.startDate? this.startDate : fourMonthsAgo,
      startDateTo: this.endDate? this.endDate: new Date(),
    });

    this.orderDataSource.paginator = this.paginator;
    this.orderDataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.orderDataSource.filter = filterValue;
  }

  clearValue(controlName: string): void {
    this.quotesSearchForm.get(controlName)?.setValue('');
  }

  onSubmit(): void {
    const filters = this.quotesSearchForm.value;
    console.log('Filters applied:', filters);
  }
}
