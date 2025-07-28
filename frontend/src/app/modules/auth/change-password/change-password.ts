import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './change-password.html',
  styleUrls: ['./change-password.css']
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onChangePassword() {
    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (this.passwordForm.valid && newPassword === confirmPassword) {
      alert('Password changed successfully!');
      this.router.navigate(['/login']); // redirect to login
    } else {
      alert('Passwords do not match!');
    }
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
}
