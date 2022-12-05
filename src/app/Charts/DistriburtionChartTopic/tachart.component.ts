import { AuthService } from 'src/app/_services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tachart',
  templateUrl: './tachart.component.html',
  styleUrls: ['./tachart.component.css']
})
export class TachartComponent implements OnInit , OnDestroy {
  date: string[] = [];
  comments: string[] = [];
  constructor(private Service:AuthService ) { }
 
  public tachart: any;

  ngOnDestroy(): void {
    this.tachart.destroy();
  }
  ngOnInit(): void {
    this.Service.getCommentsBytopic().subscribe((response: any) => {
      response.forEach((element: string) => {
        this.comments.push(element.split(",")[0]);
        this.date.push(element.split(",")[1]);
      });
      this.createTachart(this.date,this.comments);
    });

  }
  createTachart(date:string[],comments:string[]) {

    this.tachart = new Chart("MyTachart", {
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
