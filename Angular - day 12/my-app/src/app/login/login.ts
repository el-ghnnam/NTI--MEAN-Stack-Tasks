import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../models/models';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  isLoggedIn: boolean = false;
  loggedUser: Iuser | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    try {
      const user = this.userService.getLogedUser();
      if (user) {
        this.isLoggedIn = true;
        this.loggedUser = user;
      }
    } catch (e) {
      this.isLoggedIn = false;
    }
  }

  Login() {
    if (this.loginForm.valid) {
      const { username, email, password } = this.loginForm.value;
      this.userService.login({ username, email, password }).subscribe({
        next: (user) => {
          if (user) {
            this.userService.setLoggedUser(user);
            this.isLoggedIn = true;
            this.loggedUser = user;
            this.loginError = '';
            this.loginForm.reset();
          } else {
            this.loginError = 'Invalid credentials';
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.loginError = 'An error occurred during login';
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      this.loginError = 'Please fill in all required fields correctly';
    }
  }

  logOut() {
    this.userService.logOutUser();
    this.isLoggedIn = false;
    this.loggedUser = null;
  }
}
