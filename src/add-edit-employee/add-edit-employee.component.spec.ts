import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeComponent } from './add-edit-employee.component';

describe('AddEditEmployeeComponent', () => {
  let component: AddEditEmployeeComponent;
  let fixture: ComponentFixture<AddEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
