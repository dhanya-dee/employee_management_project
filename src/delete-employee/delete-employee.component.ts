import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  imports: [],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  @Input() title!: string;
  @Output() modalClosed = new EventEmitter<boolean>();
  @ViewChild('deleteEmployee') deleteEmployee!: ElementRef;

  closeModal(): void{
    this.deleteEmployee.nativeElement.style.display = 'none';
    this.modalClosed.emit(true);
  }
}
