import { AuthService } from '../../../_services/auth.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-sentimental-stats',
  templateUrl: './sentimental-stats.component.html',
  styleUrls: ['./sentimental-stats.component.css']
})
export class SentimentalStatsComponent implements OnInit {

  
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;
 
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  
  date: any;
  dateFormated: any;
  dateFormated2: any;
  state:boolean = false;
  state2:boolean = false;
  dateFormatedFrom: any;
  dateFormatedTo: any;

  
  changestate(){
    this.state2 = true;
  }
  
  changestate2(){
    this.state = true;
  }
  



  date2: any;

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

    this.service.getCommentsByStatFilter(this.dateFormated).subscribe((response:any)=>{
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

    this.service.getCommentsByStatFilter2(this.dateFormatedFrom,this.dateFormatedTo).subscribe((response:any)=>{
      this.data = response;
      console.log("data" +response);

    });
  }
  data: any[] = [];
  Comments: any;
  length:number = 0;
  constructor(private service:AuthService) { 
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate]; 
  }

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
