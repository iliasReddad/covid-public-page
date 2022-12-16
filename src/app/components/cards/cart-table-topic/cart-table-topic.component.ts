import { AuthService } from 'src/app/_services/auth.service';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-table-topic',
  templateUrl: './cart-table-topic.component.html',
  styleUrls: ['./cart-table-topic.component.css']
})
export class CartTableTopicComponent implements OnInit {
 
  
  

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


  ngOnInit(): void {
    
    this.service.getCommentsBytopic().subscribe((response:any)=>{
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
