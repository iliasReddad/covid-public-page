import { AuthService } from 'src/app/_services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',

    };

    this.service.getBackEndData().subscribe((response:any)=>{
      this.Comments = response;
      this.dtTrigger.next(void 0);
    });

    

  


  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
