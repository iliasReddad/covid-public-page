import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentimental-stats',
  templateUrl: './sentimental-stats.component.html',
  styleUrls: ['./sentimental-stats.component.css']
})
export class SentimentalStatsComponent implements OnInit {

  data: any[] = [];
  Comments: any;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getBackEndData().subscribe((response:any)=>{
      this.Comments = response;
    });


    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
    
    });
  }


}
