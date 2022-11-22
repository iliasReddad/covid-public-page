import { AuthService } from './../../../_services/auth.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(private service : AuthService , router:Router) {}
  data: any[] = [];
  allComments!: number;

  ngOnInit() {
    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
      console.log(response);
    });
    this.service.getComments().subscribe((response:any)=>{
      this.allComments = response.length;
      console.log(response);
    }
    );
  }

  
}
