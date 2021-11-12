import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router, private share: ShareService) { }
  employees: Employee[];
  ngOnInit(): void {
    
  }
   getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  username:string;
  password:string;
  t:number=0;
  chid_msg:any=["Sign Up"];
  onSubmit(){
    for (let index = 0; index < this.employees.length; index++) {
      const element = this.employees[index];
      this.share.uname=this.username
      //alert(this.username+" "+element.username)
      if(element.username==this.username && element.password==this.password){
        this.router.navigate(['Personal Details', element.id])
        this.t+=1
      }
      }
      
      if(this.t==0){
        alert("Invalid Username/Password")
        
      }
      // else if(element.username!=this.username){
      //   alert("Invalid Username")
      // }
      
    
  }
  submit(){
    this.router.navigate(['Sign Up'])
  }
  


}
