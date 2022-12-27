import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'etudiant';
 

  constructor(public auth:AuthService){

  }
  a:boolean=false;
  active(){ 
     return this.auth.authenticated;
      
  }
  

}
