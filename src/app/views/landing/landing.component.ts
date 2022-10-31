import { Component, ElementRef, OnInit ,HostListener } from "@angular/core";
import 'flowbite';
import { ContenuServiceTsService } from "src/app/contenu.service.ts.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  
  
})
export class LandingComponent implements OnInit {
  contenu: any[] = [];
  

  
  constructor(private service : ContenuServiceTsService) {}


  ngOnInit(): void {
    environment.production = false;

    this.service.getContenu().subscribe((response:any)=>{this.contenu = response});
    console.log(this.service.getContenuById(1).subscribe((response:any)=>{console.log(response)}));
  }
  
  

}

function ViewChild(arg0: string) {
  throw new Error("Function not implemented.");
}

