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
    getAllEtudiants():Observable<etudiant[]>{
      return this.http.get<etudiant[]>(this.url);
    }
    addEtudiant(data :any):Observable<any>{
      return this.http.post(this.url,data,{observe:'response'});
    }


deletEtudant(id:any){
return this.http.delete('http://localhost:3000/etudiants/'+id );
}
getStudintById(id:number){
  return this.http.get('http://localhost:3000/etudiants/'+id);


}
editEtudiant(data:any,id :number){
  return this.http.put('http://localhost:3000/etudiants/'+id,data);


}
getSerchEtudiant(keyword:number):Observable<etudiant[]>{

  return this.http.get<etudiant[]>('http://localhost:3000/etudiants/'+keyword);

}
}
