import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-zchart',
  templateUrl: './zchart.component.html',
  styleUrls: ['./zchart.component.css']
})
export class ZchartComponent implements OnInit , OnDestroy {

  date: string[] = [];
  comments: string[] = [];
  constructor(private Service:AuthService ) { }

  public tachart: any;

  
  ngOnDestroy(): void {
this.tachart.destroy();
  }
  
  ngOnInit(): void {
    this.Service.getCommentsByEmotion().subscribe((response: any) => {
      response.forEach((element: string) => {
        this.comments.push(element.split(",")[0]);
        this.date.push(element.split(",")[1]);
      });
      this.createTachart(this.date,this.comments);
    });

  }
  createTachart(date:string[],comments:string[]) {

    this.tachart = new Chart("MyZchart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: date,
        datasets: [
          {
            label: "comments",
            data: comments,
            backgroundColor: 'blue'
          },
          
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}
