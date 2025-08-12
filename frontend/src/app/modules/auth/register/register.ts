import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // ✅ Updated name
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        role: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Getters for form controls
  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get mobile() { return this.registerForm.get('mobile'); } // ✅ Updated
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get role() { return this.registerForm.get('role'); }

  // Password match validator
  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  // Submit form data
  onSubmit(): void {
    if (this.registerForm.valid) {
      // Trim spaces from string fields before sending
      const formData = { ...this.registerForm.value };
      Object.keys(formData).forEach(key => {
        if (typeof formData[key] === 'string') {
          formData[key] = formData[key].trim();
        }
      });

      this.authService.register(formData).subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert(err.error?.message || 'Registration failed');
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
