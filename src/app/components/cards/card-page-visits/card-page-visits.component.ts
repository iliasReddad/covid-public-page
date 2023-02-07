import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit {
  datas: any[] = [];
  length: number = 0;
  index: number = 7;
  constructor( private dataService: AuthService) {}

  ngOnInit(): void {
    this.dataService.getBackEndDataGrowRate().subscribe((data) => {
      this.length = data.length;
      this.datas = data.slice(0,this.index);

    });
    

  
  }
  event(){
    this.dataService.getBackEndDataGrowRate().subscribe((data) => {
      this.length = data.length;
      this.datas = data
      
    });
  }
}
