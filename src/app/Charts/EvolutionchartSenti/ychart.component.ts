import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-ychart',
  templateUrl: './ychart.component.html',
  styleUrls: ['./ychart.component.css']
})
export class YchartComponent implements OnInit , OnDestroy {

  constructor(private Service: AuthService) { }
  public chart: any;
  date: string[] = [];
  topic: string[] = [];
  responseFiltré: any[] = [];
  labelss: string[] = [];
  responseFiltré2: string[] = [];

  ngOnDestroy(): void {
    this.chart.destroy();
  }


  ngOnInit(): void {
    this.Service.getEvolutionOfCommentsByEmotion().subscribe((response: any) => {
      console.log(response);
      response.forEach((element: string) => {
        this.topic.push(element.split(",")[1]);
        this.date.push(element.split(",")[2].split(" ")[0]);
      });

      this.labelss = this.topic.filter((x, i, a) => a.indexOf(x) === i);
      console.log(this.labelss);


      this.labelss.forEach((element: string) => {
        this.responseFiltré.push(response.filter((x: string) => x.split(",")[1] === element));


      });

     this.responseFiltré.forEach((element: any) => {
        element.forEach((element: string) => {
          this.responseFiltré2.push(element.split(",")[0]);

        });

      });




      this.labelss.forEach((element: string, index = 0) => {
           const container = document.getElementById("mainY-container");
            const btn = document.createElement("button");
             btn.innerHTML = element;
             btn.type = "button";
              btn.id = "btn" + index;
              btn.style.margin = "10px";
              btn.style.color = "black";
              btn.className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
              btn.onclick = () => {
                if(this.chart != null){
                  this.chart.destroy();
                }
                this.creeatechsart(index, element);
              }
             
              container?.appendChild(btn);
              

      });

      this.creeatechsart(0, this.labelss[0]);





    });

  }

  creeatechsart(index: number, element: any) {
    
    this.chart = new Chart("MyYChart", {

      type: 'bar',
      data: {
        labels: this.responseFiltré[index].map((x: string) => x.split(",")[2].split(" ")[0]),
        datasets: [

          {
            label: element,
            data: this.responseFiltré[index].map((x: string) => x.split(",")[0]),
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
