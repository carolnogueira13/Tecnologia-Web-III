import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from '../models/credenciais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  @Input() credencial: Credenciais = {
    email: '',
    senha: ''
  };

  email = new FormControl(null, Validators.email); // Validacao do email
  senha = new FormControl(null,Validators.minLength(4)) // validacao da senha

  validaDados():boolean{
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }

  logar(){
    if (this.credencial.email == "teste@teste.com" && this.credencial.senha == "1234"){
      this.router.navigate(['']);
      localStorage.setItem("logado", "true");
    }
  }

}

