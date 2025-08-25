import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
  if (this.forgotForm.invalid) return;

  this.loading = true;

  const email = this.forgotForm.value.email || '';

  this.authService.forgotPassword(email).subscribe({
    next: (res: any) => {
      this.loading = false;

      Swal.fire({
        icon: 'success',
        title: 'OTP Sent',
        text: res.message || 'If an account exists, you will receive an OTP.',
        confirmButtonText: 'OK'   // ✅ User must click OK
      }).then(() => {
        // ✅ Only after user clicks OK → redirect
        this.router.navigate(['/reset-password'], { queryParams: { email } });
      });
    },
    error: (err: any) => {
      this.loading = false;

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error?.message || 'Something went wrong. Try again later.',
        confirmButtonText: 'OK'
      });
    }
  });
}
}
