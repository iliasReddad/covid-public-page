import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-topic-stats',
  templateUrl: './topic-stats.component.html',
  styleUrls: ['./topic-stats.component.css']
})
export class TopicStatsComponent implements OnInit {

  data: any[] = [];
  Comments: any;
  length:number = 0;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getBackEndData().subscribe((response:any)=>{
      this.Comments = response;
      this.length= this.Comments.length;
      
    });


    this.service.getCommentsBytopic().subscribe((response:any)=>{
      this.data = response;
    
    });
  }



  getColor(emotion: string){
    let color: string = '';
    switch (emotion) {
      
      case 'Economy':
        color = 'bg-green-200';
        break;
      case 'Education':
        color = 'bg-blue-200';
        break;
      case 'Govt':
        color = 'bg-orange-200';
        break;
    
      case 'Health':
        color = 'bg-grey-200';
        break;
      default:
        color = 'grey';
        break;
    }

    return color;
  
  }

  getIcon(emotion: string){
    console.log(emotion);
    let color: string = '';
    switch (emotion) {
      case 'Economy':
        color = 'fa-solid fa-money-bill';
        break;
      case 'Education':
        color = 'fa-solid fa-school';
        break;
      case 'Govt':
        color = 'fa-solid fa-building-columns';
        break;
      case 'Health':
        color = 'fa-solid fa-notes-medical';
        break;
     
      default:
        color = '';
        break;
    }

    return color;
  
  }


}
