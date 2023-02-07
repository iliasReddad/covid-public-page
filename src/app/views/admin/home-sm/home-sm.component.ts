import { contenu } from './../../../contenu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import { ContenuServiceTsService } from 'src/app/contenu.service.ts.service';

@Component({
  selector: 'app-home-sm',
  templateUrl: './home-sm.component.html',
  styleUrls: ['./home-sm.component.css']
})

export class HomeSMComponent implements OnInit {

  contenus!: contenu;
  idBlock: string = "HOME";

  AUTH_API = 'http://localhost:8080/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };

  constructor(private service: ContenuServiceTsService) { }

  ngOnInit(): void {
    this.service.getContenuById("HOME").subscribe((response: any) => {
      this.contenus = response
      console.log(this.contenus);
    });
  }

}
