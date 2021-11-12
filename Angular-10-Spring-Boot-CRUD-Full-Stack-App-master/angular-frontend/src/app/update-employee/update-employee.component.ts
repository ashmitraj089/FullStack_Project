import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }
  parent_msg:any=["Personal Details",this.employee.id]

  onSubmit(){
    //alert(JSON.stringify(this.employee))
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      this.goToEmployeeList();
    })
    // this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
    //   this.goToEmployeeList();
    //   //alert(JSON.stringify(data))
    // }
    // , error => console.log(error));
  }

  child_msg=["Logout"]
  goToEmployeeList(){
    this.router.navigate(['/Personal Details']);
  }
}
