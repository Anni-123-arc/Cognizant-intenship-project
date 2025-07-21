import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create RegisterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have register form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should redirect to login page on successful register', () => {
    component.registerForm.setValue({ username: 'John', email: 'john@example.com', password: 'test1234' });
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  });
});
