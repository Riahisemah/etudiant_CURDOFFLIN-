import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { etudiant } from '../modules/modules';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 url ='http://localhost:3000/etudiants';


  constructor(private http:HttpClient) {
     }
     //get toute les etudiant
    getAllEtudiants():Observable<etudiant[]>{
      return this.http.get<etudiant[]>(this.url);
    }
    //ajouter un etudiant
    addEtudiant(data :any):Observable<any>{
      return this.http.post(this.url,data,{observe:'response'});
    }

// suprimer un etudiant
deletEtudant(id:any){
return this.http.delete('http://localhost:3000/etudiants/'+id );
}
//get etudiant selon id
getStudintById(id:number){
  return this.http.get('http://localhost:3000/etudiants/'+id);
}
//edit un etudiant
editEtudiant(data:any,id :number){
  return this.http.put('http://localhost:3000/etudiants/'+id,data);


}
// fonction get un etudiant cherchee
/*
getSerchEtudiant(keyword:number):Observable<etudiant[]>{

  return this.http.get<etudiant[]>('http://localhost:3000/etudiants/'+keyword);

}
*/

}
