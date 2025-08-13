import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value;

      this.authService.login({ email, password }).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);

          if (role === 'admin') {
            alert('Admin login successful!');
            this.router.navigate(['/admin']);
          } else {
            alert('User login successful!');
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          alert(err.error?.message || 'Login failed');
        }
      });
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
