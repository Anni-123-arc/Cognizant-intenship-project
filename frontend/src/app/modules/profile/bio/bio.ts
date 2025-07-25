import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bio',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './bio.html',
  styleUrls: ['./bio.css']
})
export class Bio implements OnInit {
  bioForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.bioForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address1: ['', Validators.required],
      address2: ['']
    });
  }

  onSave(): void {
  if (this.bioForm.valid) {
    console.log('Bio Saved:', this.bioForm.value);
    alert('Bio updated successfully!');
    this.bioForm.reset(); // This clears all form fields
  }
}

  goToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }
}
