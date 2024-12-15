import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Employee, ListOfEmployee } from './employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no unmatched HTTP calls remain
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch current employee details', () => {
    const mockEmployee: Employee = {
      id: 1,
      name: 'Dhanya',
      designation: 'Senior Software Developer',
      companyName: 'Infrrd',
      currentTeam: 'Products',
      emailId: 'dhvnair@gmail.com',
      contact: 9900990098,
    };

    service.currentEmployee().subscribe((employee) => {
      expect(employee).toEqual(mockEmployee);
    });

    const req = httpMock.expectOne('http://localhost:3000/currentEmployee');
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployee);
  });

  it('should fetch the list of employees', () => {
    const mockEmployees: ListOfEmployee[] = [
      {
          id: 1,
          name: 'Dhanya',
          designation: 'Senior Software Developer',
          companyName: 'Infrrd',
          currentTeam: 'Products',
          emailId: 'dhvnair@gmail.com',
          contact: 9900990098,
          employees: []
      },
      {
          id: 2,
          name: 'Name2',
          designation: 'Quality Assurance',
          companyName: 'Infrrd',
          currentTeam: 'Products-QA',
          emailId: 'name2@gmail.com',
          contact: 8800880078,
          employees: []
      },
    ];

    service.listOfEmployee().subscribe((employees) => {
      expect(employees.length).toBe(2);
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne('http://localhost:3000/displayEmployees');
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });
});
