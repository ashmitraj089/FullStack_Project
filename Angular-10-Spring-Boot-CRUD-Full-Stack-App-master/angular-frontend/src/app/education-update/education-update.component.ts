import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../education';
import {EducationServiceService} from '../education-service.service';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  constructor(private route:Router,private eduservice : EducationServiceService,private share: ShareService ) { }
  username:string;
  education : Education = new Education();
  edulist:Education[];
  ngOnInit(): void {
    //alert("oninit")
    this.eduservice.getEducationList().subscribe(data=>{
      this.edulist=data;
      for(let i=0;i<this.edulist.length;i++){
        if(this.edulist[i].username==this.share.uname &&this.share.uname!=null){
          this.education=this.edulist[i];
          break
        }
      }
      //alert(JSON.stringify(this.education))
    })
  }
  child_msg=["Logout"]
  onsubmit(){
    if(this.share.uname!=null){
    this.saveEducation();
    }
    else{
      alert("You need to login first.")
      this.route.navigate(['Login'])
    }
  }
  
  saveEducation(){
    //alert(JSON.stringify(this.education))
    this.education.username=this.share.uname
    this.eduservice.createEducation(this.education).subscribe( data =>{
      //alert(JSON.stringify(data))
      this.route.navigate(['Educational Details'])
    },
    error => console.log(error));
  }
}
