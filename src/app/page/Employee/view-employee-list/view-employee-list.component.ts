import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../model/employee.model';
import { EmployeeService } from '../../../../service/employee.service';

@Component({
  selector: 'app-view-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load employees. Please try again later.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}