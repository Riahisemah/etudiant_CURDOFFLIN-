import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  public active:boolean = false;
  public get authenticated():boolean {
    return this.active;
  }
  public  auth(value:boolean) {
   this.active = value;
  }
  public authenticate(name : string,password : string) {
    if((name === 'user' )&& (password === 'user')){
      this.active =true;
    }
  }
}
