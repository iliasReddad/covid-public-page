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


    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
    
    });
  }



  getColor(emotion: string){
    let color: string = '';
    switch (emotion) {
      case 'Anger':
        color = 'bg-red-200';
        break;
      case 'Approval':
        color = 'bg-green-200';
        break;
      case 'Optimism':
        color = 'bg-blue-200';
        break;
      case 'Fear':
        color = 'bg-orange-200';
        break;
      case 'Mistrust':
        color = 'bg-blueGrey-200';
        break;
      case 'Sadness':
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
      case 'Anger':
        color = 'fa-solid fa-face-angry';
        break;
      case 'Approval':
        color = 'fa-solid fa-thumbs-up';
        break;
      case 'Optimism':
        color = 'fa-solid fa-face-smile';
        break;
      case 'Fear':
        color = 'fa-solid fa-face-sad-cry';
        break;
      case 'Mistrust':
        color = 'fa-solid fa-question';
        break;
      case 'Sadness':
        color = 'fa-solid fa-face-frown';
        break;
      default:
        color = 'fa-solid fa-face-smile';
        break;
    }

    return color;
  
  }


}
