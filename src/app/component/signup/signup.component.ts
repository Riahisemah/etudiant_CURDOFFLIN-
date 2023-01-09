import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }
  //function to change login to false
  a:boolean=false;
active(){
  this.auth.auth(this.a);
}
}
