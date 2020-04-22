import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { homedataComponent } from './homedata/homedata.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
  path: '', component:LoginComponent,
  },

  {
    path: 'home',
     component:HomeComponent,
     children:[
     {path: 'homedata', component:homedataComponent},
     {path: 'admin', component:AdminComponent },
     {path: 'form', component:Form1Component},
     {path: 'employees', component:EmployeeComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
