import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  imports: [],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent implements OnInit{
  @Input() typeOfModal!: number;
  @Input() title!: string;
  @Output() modalClosed = new EventEmitter<boolean>();
  @ViewChild('addNewEmployee2') addNewEmployee2!: ElementRef;

  ngOnInit(): void {
  }

  closeModal(): void{
    this.addNewEmployee2.nativeElement.style.display = 'none';
    this.modalClosed.emit(true);
  }
}
