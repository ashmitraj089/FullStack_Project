import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }
  child_msg:any=['Login'];
  
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      //alert(JSON.stringify(data))
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/Login']);
  }
  
  onSubmit(){
    this.saveEmployee();
    this.router.navigate(['login'])
  }
checkpass(pass){
  
  if(pass.errors?.pattern){
    alert("Please enter password in correct format.")
  }
}

checkuser(pass){
  this.employeeService.getEmployeesList().subscribe(data => {
    this.employees = data;
    for (let index = 0; index < this.employees.length; index++) {
      const element = this.employees[index];
      //alert(JSON.stringify(element.username))
      if(element.username==this.employee.username){
        alert("Username already taken.")
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['Sign Up']);
          
      });
      }
      }
  });
  //alert(this.flag)
  if(pass.errors?.pattern){
    alert("Please enter username in correct format.")
  }
}
checkemail(pass){
  
  if(pass.errors?.pattern){
    alert("Please enter email in correct format.")
  }
}
checkphone(pass){
  if(pass.errors?.pattern){
    alert("Please enter name in correct format.")
  }
  
}
checkname(pass){
  if(pass.errors?.pattern){
    alert("Please enter name in correct format.")
  }
  
}

  
}
