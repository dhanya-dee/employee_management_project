import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeCardsGridModule } from './employee-cards-grid.module';
import { EmployeeService } from '../../services/employee.service';
import { ListOfEmployee } from '../../services/employee';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-employee-cards-grid',
  imports: [EmployeeCardsGridModule, NgForOf],
  templateUrl: './employee-cards-grid.component.html',
  styleUrl: './employee-cards-grid.component.css'
})
export class EmployeeCardsGridComponent implements OnInit {
  empObject: ListOfEmployee[] = [];
  @Input() typeOfModal!:number;
  @Input() title!: string;
  @Output() totalRecords = new EventEmitter<number>();

  constructor(private apiService: EmployeeService) { }

  ngOnInit(): void {
    this.apiService.listOfEmployee().subscribe(res => {
      this.empObject = res;
      this.totalRecords.emit(res.length);
    })
  }
}
