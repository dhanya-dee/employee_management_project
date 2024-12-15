import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { EmployeeCardsGridComponent } from '../employee-cards-grid/employee-cards-grid.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  exports: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    PaginationComponent,
    EmployeeCardsGridComponent,
  ],
  imports: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    PaginationComponent,
    EmployeeCardsGridComponent,
    CommonModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

