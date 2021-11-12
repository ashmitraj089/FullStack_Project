import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  p_id:any;
  employee: Employee
  emplist:Employee[];
  constructor(private route: ActivatedRoute, private employeService: EmployeeService, private router: Router,private share:ShareService) { }
  child_msg=["Personal Details","Educational Details","Logout"]
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.employee = new Employee();
    // this.share.u_id=this.id
    // this.employeService.getEmployeeById(this.id).subscribe( data => {
    //   this.employee = data;
    // });
    //alert("jdjdsjd")
    this.employee = new Employee();
    this.employeService.getEmployeesList().subscribe(data=>{
      this.emplist=data
      for(let i=0;i<this.emplist.length;i++){
        if(this.emplist[i].username==this.share.uname && this.share.uname!=null){
          this.employee=this.emplist[i];
          //alert(JSON.stringify(this.employee))
          break
        }
      //alert(JSON.stringify(this.employee))
      }
      //alert(JSON.stringify(this.education))
    })
  }
  
  updateEmployee(id: number){
    if(this.share.uname!=null){
      this.router.navigate(['update-employee', id]);
    }else{
      alert("You need to login first.")
      this.router.navigate(['Login'])
    }
  }

}
