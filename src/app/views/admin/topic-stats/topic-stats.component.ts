import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-topic-stats',
  templateUrl: './topic-stats.component.html',
  styleUrls: ['./topic-stats.component.css']
})
export class TopicStatsComponent implements OnInit {

  state:boolean = false;
  state2:boolean = false;

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;
 
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  

  changestate(){
    this.state2 = true;
  }
  
  changestate2(){
    this.state = true;
  }
  
  data: any[] = [];
  date: any;
  dateFormated: any;
  dateFormated2: any;

  dateFormatedFrom: any;
  dateFormatedTo: any;



  date2: any;

  Comments: any;
  length:number = 0;
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
    this.state = false;
    this.state2 = false;
  }

  sendRequest(){
    this.showModal = !this.showModal;
    var datePipe = new DatePipe('en-US');
    
    this.dateFormated = datePipe.transform(this.date, 'yyyy-MM-dd');

    this.service.getCommentsBytopicFilter(this.dateFormated).subscribe((response:any)=>{
      this.data = response;
      console.log("data" +response);

    });

  }
  sendRequestBetwen(){
    this.showModal = !this.showModal;
    var datePipe = new DatePipe('en-US');
    console.log("data" +this.date2);
    this.dateFormatedFrom = datePipe.transform(String(this.date2).split(',')[0], 'yyyy-MM-dd');
    this.dateFormatedTo = datePipe.transform(String(this.date2).split(',')[1], 'yyyy-MM-dd');

    console.log("data" +this.dateFormatedFrom);
    console.log("dataTO" +this.dateFormatedTo);

    this.service.getCommentsBytopicFilter2(this.dateFormatedFrom,this.dateFormatedTo).subscribe((response:any)=>{
      this.data = response;
      console.log("data" +response);

    });
  }
    
  
  constructor(private service:AuthService) { this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate]; }

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
