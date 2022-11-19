import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
    href: string = "";

  constructor(private router: Router) { 
 
  }

  ngOnInit(): void {

    this.href = this.geturl();



  }

  
 
  geturl(){
    return this.router.url;
  }

}
