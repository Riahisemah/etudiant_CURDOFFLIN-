export class etudiant{
constructor(public id : number,public firstName:string,public lastName:string ,age:number){

}
}
export interface Etudiant{
   id : number
  firstName:string
  lastName:string 
  age:number
  
  }
export interface response{
  resalt: Etudiant[];
}