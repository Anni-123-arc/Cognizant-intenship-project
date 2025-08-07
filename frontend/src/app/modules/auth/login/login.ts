import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
      const role = this.loginForm.value.role;
      if (role === 'admin') {
        alert('Admin login successfully!!!');
        this.router.navigate(['/admin-dashboard']);
      } else {
        alert('User login successfully!!!');
        this.router.navigate(['/home']);
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

 goToForgotPassword() {
  this.router.navigate(['/forgot-password']);
}

}
  
