import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEtudiantComponent } from './component/list-etudiant/list-etudiant.component';
import { EditEtudiantComponent } from './component/edit-etudiant/edit-etudiant.component';
import { AddEtudiantComponent } from './component/add-etudiant/add-etudiant.component';
import { AuthEtudiantComponent } from './component/auth-etudiant/auth-etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantComponent,
    EditEtudiantComponent,
    AddEtudiantComponent,
    AuthEtudiantComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
