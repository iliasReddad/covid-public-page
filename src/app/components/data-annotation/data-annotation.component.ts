import { AuthService } from '../../_services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-annotation',
  templateUrl: './data-annotation.component.html',
  styleUrls: ['./data-annotation.component.css']
})
export class DataAnnotationComponent implements OnInit {

 
  //data ( comment + id)
  list!: any[];
  //index of the comment
  i = 0;
  noCommentLeft: boolean = false;
  //comment Id
  cMTid!: number;
  //Comment
  Commeent: string = " ";

  constructor(private service: AuthService) { }

  ngOnInit(): void {

    //Get Annotated Comments List with Id ( 'Commentaire , id') // need to split by ',' to get the comment and the id
    this.service.getCommentsNoAnnoted().subscribe((response: any) => {
      //assign the repsonse to the list
      this.list = response;
      //to display the first comment 
      this.show();
    });

  }

  //to check if the form is submitted
  isSubmitted = false;
  submitForm(form: NgForm, id: number): boolean | void {
    //to check if the form is valid
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } else {
      
      //to update the comment with the emotion and the topic
      this.service.UpdateComments(id, form.value.Emotion, form.value.topic).subscribe((response: any) => {
        //to display the next comment
        this.show();
        form.resetForm();
      });
    }
  }



  show() {
    if (this.i < this.list.length) {
      //split the comment and the id
      this.Commeent = this.list[this.i].split(',')[0];
      this.cMTid = this.list[this.i].split(',')[1];
      //increment the index
      this.i++;
    }
    else {
      //if there is no more comments to annotate
      this.Commeent = " not comment Left ";
      //to hide the submit button 
      this.noCommentLeft = true;
    }

  }




}
