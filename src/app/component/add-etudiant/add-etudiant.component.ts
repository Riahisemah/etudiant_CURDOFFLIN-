import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  constructor(private etudiant:EtudiantService) { }
addEtudiant = new FormGroup({
  id: new FormControl(),
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  age: new FormControl(),
} ) ;
masge : Boolean = false;


  ngOnInit(): void {
  }
save(){
 this.etudiant.addEtudiant(this.addEtudiant.value).subscribe((rusalt )=>
  {
    alert('add etudiant succed ');
  })
  this.masge=true;
}
}
