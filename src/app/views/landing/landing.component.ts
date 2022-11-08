import { Component, ElementRef, OnInit ,HostListener } from "@angular/core";
import { ContenuServiceTsService } from "src/app/contenu.service.ts.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  
  
})
export class LandingComponent implements OnInit {
  contenu: any[] = [];
  closeResult = '';
  showModalVisitor = false;
  showModalAdmin = false;

  showModalData = false;


  toggleModalVisitor(){
    this.showModalVisitor = !this.showModalVisitor;
  }
  toggleModalAdmin (){
    this.showModalAdmin = !this.showModalAdmin;
  }
  toggleModalData (){
    this.showModalData = !this.showModalData;
  }
  
  constructor(private service : ContenuServiceTsService) {}


  ngOnInit(): void {
    this.service.getContenu().subscribe((response:any)=>{this.contenu = response});
    this.service.getContenu().subscribe((response:any)=>{console.log(response)});
  }

  

}



