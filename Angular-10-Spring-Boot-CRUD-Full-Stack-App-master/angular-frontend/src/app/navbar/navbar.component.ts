import { Component, Input, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() parent_msg:any=[];
  @Input() c_id:any;
  constructor(private share: ShareService) { }

  ngOnInit(): void {
    this.c_id=this.share.u_id
  }

}
