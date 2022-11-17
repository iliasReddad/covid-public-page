import { UserService } from './../../../_services/user.service';
import { Component, OnInit, Input } from "@angular/core";
import { User } from 'src/app/User';
import * as XLSX from 'xlsx'; 


@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  users!: User[];
  userole!:string;
  user : User|undefined;

  public boolean = false
  public state = "";
  public msgerror = ""


  public printnamebinded = this.printname.bind(this);

  printname(msg:string):void{
    this.state=msg.split('.')[0];
    this.msgerror = msg.split('.')[1];

    setTimeout(() => {
      this.state="";
      this.msgerror = "";
    }, 2500);
  }


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getAllUser().subscribe((response:any)=>{
      this.users = response;
    });
    this.service.getAllUser().subscribe((response:any)=>{console.log(response)});
  }

  fileName= 'ExcelSheet.xlsx';  

  exportexcel(): void 
    {

       /* table id is passed over here */   
      /*  let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       /* const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');*/  

       /* save to file */
       /* XLSX.writeFile(wb, this.fileName);*/

     

      

       /*const fileName = "test.xlsx";

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users.concat());
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "test");

    XLSX.writeFile(wb, fileName);*/
			
    }

  
}
