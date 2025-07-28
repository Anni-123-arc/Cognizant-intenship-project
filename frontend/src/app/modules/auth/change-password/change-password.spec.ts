import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordComponent } from './change-password';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [
        ReactiveFormsModule,      // Required for formGroup
        RouterTestingModule       // For router navigation mocking
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid initially', () => {
    expect(component.passwordForm.valid).toBeFalse();
  });

  it('should show error if passwords do not match', () => {
    spyOn(window, 'alert');

    component.passwordForm.setValue({
      newPassword: 'password123',
      confirmPassword: 'password321'
    });

    component.onChangePassword();

    expect(window.alert).toHaveBeenCalledWith('Passwords do not match!');
  });

  it('should alert success and navigate on valid match', () => {
    spyOn(window, 'alert');
    const router = TestBed.inject(RouterTestingModule);
    const navigateSpy = spyOn(component['router'], 'navigate');

    component.passwordForm.setValue({
      newPassword: 'password123',
      confirmPassword: 'password123'
    });

    component.onChangePassword();

    expect(window.alert).toHaveBeenCalledWith('Password changed successfully!');
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
