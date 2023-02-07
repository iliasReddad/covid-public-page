import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { contenu } from 'src/app/contenu';
import { ContenuServiceTsService } from 'src/app/contenu.service.ts.service';

@Component({
  selector: 'app-about-sm',
  templateUrl: './about-sm.component.html',
  styleUrls: ['./about-sm.component.css']
})
export class AboutSMComponent implements OnInit {

  contenus!: contenu;
  idBlock: string = "ABOUT";

  AUTH_API = 'http://localhost:8080/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };


  constructor(private service: ContenuServiceTsService) { }

  ngOnInit(): void {
    this.service.getContenuById(this.idBlock).subscribe((response: any) => {
      this.contenus = response
      console.log(this.contenus);
    });

  }

}
