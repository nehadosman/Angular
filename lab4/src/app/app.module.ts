import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

let routes:Routes = [
    {path:"",component:RegistrationComponent},
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:StudentDetailsComponent},
    {path:"**",component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
