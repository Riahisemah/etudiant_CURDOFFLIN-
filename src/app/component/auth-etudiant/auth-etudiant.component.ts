import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-etudiant',
  templateUrl: './auth-etudiant.component.html',
  styleUrls: ['./auth-etudiant.component.css']
})
export class AuthEtudiantComponent implements OnInit {

  loggdIn : boolean =false;
  @ViewChild('name') name: any;
  @ViewChild('password') password:any;
  constructor(public authService :AuthService ){

  }
  ngOnInit(): void {

  }
  login(){
    this.authService.authenticate(
      this.name.nativeElement.value,this.password.nativeElement.value
      
    );
    
  }
}

