import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.html',
  styleUrls: ['./change-password.css']
})
export class ChangePasswordComponent {
  changePasswordForm!: FormGroup;
  message: string = '';
  loading: boolean = false;
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
  if (this.changePasswordForm.invalid) return;

  const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.value;

  if (newPassword !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Mismatch',
      text: 'New password and confirm password do not match.'
    });
    return;
  }

  this.loading = true;
  this.success = false;

  this.authService.changePassword({ currentPassword, newPassword, confirmPassword }).subscribe({
    next: (res: any) => {
      this.loading = false;
      this.success = true;

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.message || 'Password changed successfully.'
      });

      //  Log out and redirect to login after short delay
      setTimeout(() => {
        this.authService.logout();
        this.router.navigate(['/login'], {
          queryParams: { message: 'Password changed successfully. Please log in again.' }
        });
      }, 1500);
    },
    error: (err: any) => {
      this.loading = false;

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error?.message || 'Something went wrong. Try again later.'
      });
    }
  });
}
}
