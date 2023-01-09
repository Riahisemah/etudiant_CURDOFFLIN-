import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {


  allEtudiant :any =[];

  show:boolean=true;


  constructor(private etudiant:EtudiantService) { }

  ngOnInit(): void {
     this.etudiant.getAllEtudiants().subscribe((data)=>{
      this.allEtudiant= data;
    })
  }



  delete(id_studint: any){
    this.etudiant.deletEtudant(id_studint).subscribe((resalt)=>{


      this.ngOnInit();
    })
  }/*
  onSearch(dataForm:any){
    this.etudiant.getSerchEtudiant(dataForm.keyword)
    .subscribe((data)=>{
      console.log(data);
      this.allEtudiants= data;
      this.show=false;
    })
  };*/

}
