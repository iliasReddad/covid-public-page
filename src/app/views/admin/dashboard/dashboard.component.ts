import { AuthService } from './../../../_services/auth.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  datas: string | undefined;
  constructor(private service : AuthService , router:Router) {}
  allComments!: number;
  data: any[] = [];
  up_Down:string = "";
  integer: number = 0;

  dataPosit: string | undefined;
  up_DownPosit:string = "";
  integerPosit: number = 0;

  Usernumbner: number | undefined;


  ngOnInit() {

    
    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
    });
    this.service.getComments().subscribe((response:any)=>{
      this.allComments = response.length;
    }
    );

    this.service.getBackEndUserNumber().subscribe((response:any)=>{
      this.Usernumbner = response;
    }
    );

    this.service.getBackEndDataGrowRate().subscribe((ele:any) => {
      this.datas = JSON.stringify(ele[0].split(',')[3]);
      this.integer = JSON.parse(this.datas);
      console.log(this.datas.valueOf());
      console.log(this.integer);
      this.integer>0?this.up_Down="up":this.up_Down="down";
      console
    });

    this.service.getBackEndDataGrowRatePositive().subscribe((ele:any) => {
      this.dataPosit = JSON.stringify(ele[0].split(',')[3]);
      this.integerPosit = JSON.parse(this.dataPosit);
      console.log(this.dataPosit.valueOf());
      console.log(this.integer);
      this.integerPosit>0?this.up_DownPosit="up":this.up_DownPosit="down";
      console
    });

  }

  
}
