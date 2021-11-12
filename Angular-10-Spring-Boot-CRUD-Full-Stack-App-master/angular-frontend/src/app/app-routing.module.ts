import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { EducationUpdateComponent } from './education-update/education-update.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'Sign Up', component: CreateEmployeeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Logout',component:LoginComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'Personal Details/:id', component: EmployeeDetailsComponent},
  {path:'Personal Details',component:EmployeeDetailsComponent},
  {path:'Educational Details',component:EducationComponent},
  {path: 'Education Details/Edit', component: EducationUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
