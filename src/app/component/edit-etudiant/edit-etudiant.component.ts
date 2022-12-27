import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  masge:boolean=false;
  constructor(private etudiant:EtudiantService, private router:ActivatedRoute ) { }
  editEtudiant = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(),
  } )


    ngOnInit(): void {
      this.etudiant.getStudintById(this.router.snapshot.params['id']).
      subscribe((resalt: any)=>{
        console.log(resalt);
        this.editEtudiant = new FormGroup({
          firstName: new FormControl(resalt['firstName']),
          lastName: new FormControl(resalt['lastName']),
          age: new FormControl(resalt['age']),
        } )
   });
    }

saveEdit(){
this.etudiant.editEtudiant(this.editEtudiant.value,this.router.snapshot.params['id'])
.subscribe(resalt=>{
  console.log(resalt);
  this.masge=true;
})

}
}



