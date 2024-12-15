
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@NgModule({
  declarations: [],
    exports: [
    DeleteEmployeeComponent
  ],
  imports: [
    DeleteEmployeeComponent,
    CommonModule
  ],
})
export class ViewDeleteEmployeeCardModule { }
