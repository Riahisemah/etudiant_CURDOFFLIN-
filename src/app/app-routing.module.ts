import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './component/add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './component/edit-etudiant/edit-etudiant.component';
import { SignupComponent } from './component/signup/signup.component';
import { ListEtudiantComponent } from './component/list-etudiant/list-etudiant.component';
const routes: Routes = [
  {
    path:'' ,component:ListEtudiantComponent
  },
  {
    path:'add' ,component:AddEtudiantComponent
  },
  {
    path:'edit/:id' ,component:EditEtudiantComponent
  },
  {
    path:'signup' ,component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
