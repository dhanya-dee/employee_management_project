import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { EmployeeCardsGridComponent } from '../employee-cards-grid/employee-cards-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { ViewDeleteEmployeeCardModule } from '../view-delete-employee-card/view-delete=employee-card.module';
import { EmployeeCardsGridModule } from '../employee-cards-grid/employee-cards-grid.module';

@NgModule({
  exports: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    PaginationComponent,
    AddEditEmployeeComponent,
    EmployeeCardsGridComponent,
  ],
  imports: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    PaginationComponent,
    EmployeeCardsGridComponent,
    AddEditEmployeeComponent,
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    EmployeeCardsGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
