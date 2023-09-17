import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(){
    let flag = localStorage.getItem("logado");
    if (flag == "true"){
      return true;
    } else {
      return false;
    }
  }
}
