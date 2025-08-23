import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Pre-fill email if passed via query param
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.resetForm.patchValue({ email: params['email'] });
      }
    });
  }

  onSubmit() {
    if (this.resetForm.invalid) return;

    const data = this.resetForm.value;

    this.loading = true;

    this.authService.resetPassword(data).subscribe({
      next: (res: any) => {
        this.loading = false;

        Swal.fire({
          icon: 'success',
          title: 'Password Reset',
          text: res.message || 'Password reset successfully!',
          confirmButtonText: 'OK'
        }).then(() => {
          // ✅ Redirect only after clicking OK
          this.router.navigate(['/login']);
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
