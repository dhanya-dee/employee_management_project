import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDeleteEmployeeCardComponent } from '../view-delete-employee-card/view-delete-employee-card.component';

@NgModule({
  declarations: [],
    exports: [
    ViewDeleteEmployeeCardComponent
  ],
  imports: [
    ViewDeleteEmployeeCardComponent,
    CommonModule
  ],
})
export class EmployeeCardsGridModule { }
