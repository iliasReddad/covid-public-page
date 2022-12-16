import { AuthService } from 'src/app/_services/auth.service';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-table-sentiments',
  templateUrl: './cart-table-sentiments.component.html',
  styleUrls: ['./cart-table-sentiments.component.css']
})
export class CartTableSentimentsComponent implements OnInit {
  
  

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  
  
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  
  Comments: any;
  data: any[] = [];
  allComments!: number;


  constructor(private service: AuthService) {
        

  }

  getColor(emotion: string){
    let color: string = '';
    switch (emotion.split(",")[1]) {
      case 'Anger':
        color = '#fecaca';
        break;
      case 'Approval':
        color = '#bcf0da';
        break;
      case 'Optimism':
        color = '#c3ddfd';
        break;
      case 'Fear':
        color = '#fed7aa';
        break;
      case 'Mistrust':
        color = '#303249';
        break;
      case 'Sadness':
        color = '#d662a8';
        break;
      default:
        color = 'white';
        break;
    }

    return color;
  
  }



  


  ngOnInit(): void {
    
    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
      let myMap = new Map(Object.entries(this.data));


      
    });


   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',

    };

    this.service.getBackEndData().subscribe((response:any)=>{
      this.Comments = response;
      this.dtTrigger.next(void 0);
      this.allComments=this.Comments.length;
    });


 




  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  

  


}
