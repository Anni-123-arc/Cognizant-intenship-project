import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
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
    if (this.passwordForm.valid && this.passwordForm.value.newPassword === this.passwordForm.value.confirmPassword) {
      alert('Password changed successfully!');
      this.router.navigate(['/profile']);
    } else {
      alert('Passwords do not match!');
    }
  }
}