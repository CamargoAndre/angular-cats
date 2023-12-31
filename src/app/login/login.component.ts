import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private toast: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      login: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    let {login, password} = this.loginForm.value;
    this.service.login(login, password).subscribe(
      {
        next: (value) => {

          localStorage.setItem("auth", String(value.auth));
          this.router.navigate(['/cats/search'])

        },
        error: (err: HttpErrorResponse) => {
          console.log(err.status)
          if(err.status == 401) {
            this.toast.error("Error!" , "Usuario ou senha inválidos!");
            this.loginForm.reset();
          } else {
            this.toast.error("Error!" , "Ocorreu um erro, tente novamente!");
          }
        }
      }
    );
  }

}
