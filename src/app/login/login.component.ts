import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  jsonIn = {
    username: '',
    password: '',
    rememberMe: false,
  }
  @ViewChild('loginForm') loginForm!: NgForm;
  showErrors = false;
  showPassword = false;
  auth: any;

  constructor(private router: Router, private auht: AuthService) {}

  /* ngOnInit() {
    localStorage.clear();
  } */
  signIn() {
    if (this.loginForm.form.invalid) {
      this.showErrors = true;
    } 
    else {
      // this.auth.login(this.jsonIn).subscribe( (response: any) => {
        // if(response.success) {
          // localStorage.token = response.token;
          this.router.navigateByUrl('/home');
        }
        /* else {
          alert('Login errato, riprova');
        }
      })
      } */
  }

}
