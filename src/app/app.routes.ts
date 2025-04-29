import { Routes } from '@angular/router';
import { ViewEmployeeListComponent } from './page/Employee/view-employee-list/view-employee-list.component';
import { EmployeeFormComponent } from './page/Employee/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Employeeform', component: EmployeeFormComponent },
  { path: 'viewEmployeeList', component: ViewEmployeeListComponent },
];


