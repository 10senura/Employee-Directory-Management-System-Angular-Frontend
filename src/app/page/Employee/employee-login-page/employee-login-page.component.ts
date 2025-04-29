import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isLoading: boolean = false;
  notification = {
    show: false,
    message: '',
    type: '' as 'success' | 'error'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check for saved credentials
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';

    if (rememberMe && savedUsername && savedPassword) {
      this.username = savedUsername;
      this.password = savedPassword;
      this.rememberMe = true;
    }
  }

  onSubmit(): void {
    if (!this.username.trim() || !this.password) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.simulateLogin(this.username.trim(), this.password, this.rememberMe);
      this.isLoading = false;
    }, 1500);
  }

  private simulateLogin(username: string, password: string, remember: boolean): void {
    // In a real app, this would be an actual API call
    if (username === 'demo' && password === 'password') {
      if (remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
      }

      this.showNotification('Login successful! Redirecting...', 'success');
      
      setTimeout(() => {
        this.router.navigate(['/dashboard']); // Adjust route as needed
      }, 1500);
    } else {
      this.showNotification('Invalid username or password', 'error');
    }
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = {
      show: true,
      message,
      type
    };

    setTimeout(() => {
      this.notification.show = false;
    }, 3000);
  }
}