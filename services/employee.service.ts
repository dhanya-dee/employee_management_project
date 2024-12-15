import { Injectable } from '@angular/core';
import { Employee, ListOfEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  
  constructor(private http: HttpClient){}

  currentEmployee(): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:3000/currentEmployee');
  }

  listOfEmployee(): Observable<ListOfEmployee[]> {
    return this.http.get<ListOfEmployee[]>('http://localhost:3000/displayEmployees');
  }
}
