import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppModule } from './app.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AppModule, NgIf],
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('addNewEmployee1') addNewEmployee1!: ElementRef;
  title = 'employee-management';
  noOfRecords = 0;
  typeOfModal = 0;
  show = false;
  constructor() {}

  assigningRecords(eve: number): void{
    this.noOfRecords = eve;
  }

  openModal(type: string): void {
    if(type === 'add'){
      this.typeOfModal = 0;
      this.title = 'Add New Employee';
      this.show = true;
    }
  }

  closeModal(event: boolean): void{
    if(event) this.show = false;;
  }

}