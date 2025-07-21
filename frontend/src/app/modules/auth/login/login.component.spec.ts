import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have login form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should redirect to home on successful login', () => {
    component.loginForm.setValue({ email: 'test@example.com', password: 'password' });
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should redirect to register page on register() call', () => {
    component.register();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['register']);
  });
});
