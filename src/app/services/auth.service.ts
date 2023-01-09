import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){

  }

  public active:boolean = false;
  //return la mode login
  public get authenticated():boolean {
    return this.active;
  }
  // change la login en fonction loginOut
  public  auth(value:boolean) {
   this.active = value;
  }

  //virfier la  login
  public authenticate(name : string,password : string) {
    if((name === 'user' )&& (password === 'user')){
      this.active =true;
    }
  }
}
