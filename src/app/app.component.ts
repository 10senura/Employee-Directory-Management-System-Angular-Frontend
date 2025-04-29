import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./page/navigation/navigation.component";
import { ViewEmployeeListComponent } from './page/Employee/view-employee-list/view-employee-list.component';
import { EmployeeFormComponent } from "./page/Employee/employee-form/employee-form.component";
import { EmployeeLoginPageComponent } from "./page/Employee/employee-login-page/employee-login-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeFormComponent, EmployeeLoginPageComponent , EmployeeLoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Directory-Management-System';
}
