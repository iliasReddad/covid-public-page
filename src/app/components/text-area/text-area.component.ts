import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { contenu } from 'src/app/contenu';
import { ContenuServiceTsService } from 'src/app/contenu.service.ts.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  
  @Input() titre:string ="";
  

  @Input()
  content:any;

  @Input() idBloock:string ="";

  

  ctn :string = "test";

  constructor(private service : ContenuServiceTsService ) { }

  ngOnInit(): void {

  }

 
  

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

   titr: string="";
   sous_titre: string="";
   paragraphe: string="";
  
  updateContent(){
    if (this.titre == "TITRE"){
      this.titr = this.htmlContent;
    }
    if (this.titre == "SOUS TITRE"){
      this.sous_titre = this.htmlContent;
    }
    if (this.titre == "PARAGRAPHE TITRE"){
      this.paragraphe = this.htmlContent;
    }
    this.service.update(this.idBloock,this.titr,this.sous_titre,this.paragraphe).subscribe((response:any)=>{
      console.log(response);
    });



   
  }


}
