import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeListComponent } from './page/Employee/view-employee-list/view-employee-list.component';
import { EmployeeFormComponent } from './page/Employee/employee-form/employee-form.component';
import { EmployeeLoginPageComponent } from './page/Employee/employee-login-page/employee-login-page.component';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './page/navigation/navigation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: EmployeeLoginPageComponent },
  { path: 'Navigation', component: NavigationComponent },
  { path: 'Employeeform', component: EmployeeFormComponent },
  { path: 'viewEmployeeList', component: ViewEmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

