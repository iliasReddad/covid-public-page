import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {
  constructor(private service : AuthService) {}
  data: any[] = [];
  allComments!: number;

  ngOnInit() {
    this.service.getCommentsBytopic().subscribe((response:any)=>{
      this.data = response;
    });
    this.service.getComments().subscribe((response:any)=>{
      this.allComments = response.length;
    }
    );
  }
}
