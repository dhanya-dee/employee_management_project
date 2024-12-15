import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteEmployeeCardComponent } from './view-delete-employee-card.component';

describe('ViewDeleteEmployeeCardComponent', () => {
  let component: ViewDeleteEmployeeCardComponent;
  let fixture: ComponentFixture<ViewDeleteEmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDeleteEmployeeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDeleteEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
