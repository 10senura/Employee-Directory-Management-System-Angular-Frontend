import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private apiUrl = 'http://localhost:8080/employee/allEmployee';
  
    constructor(private http: HttpClient) { }
  
    getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiUrl).pipe(
        catchError(this.handleError)
      );
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error('An error occurred:', error.error);
      return throwError(() => new Error('Something went wrong; please try again later.'));
    }
  }
