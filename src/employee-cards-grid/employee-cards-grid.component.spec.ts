import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardsGridComponent } from './employee-cards-grid.component';

describe('EmployeeCardsGridComponent', () => {
  let component: EmployeeCardsGridComponent;
  let fixture: ComponentFixture<EmployeeCardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCardsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
