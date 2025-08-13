import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;
  message: string = '';
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
    this.message = '';

    const email = this.forgotForm.value.email || '';

    this.authService.forgotPassword(email).subscribe({
      next: (res: any) => {
        this.message = res.message || 'If an account exists, you will receive an OTP.';
        this.loading = false;

        // Redirect to reset-password and pass email
        this.router.navigate(['/reset-password'], { queryParams: { email } });
      },
      error: (err: any) => {
        this.message = err.error?.message || 'Something went wrong. Try again later.';
        this.loading = false;
      }
    });
  }
}
