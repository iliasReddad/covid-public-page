import { UserService } from './../../../_services/user.service';
import { Component, OnInit, Input } from "@angular/core";
import { User } from 'src/app/User';
import { Subject } from 'rxjs';


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

  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private service: UserService) {}

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',

    };
   
    
    this.service.getAllUser().subscribe((response:any)=>{
      this.users = response;
      this.dtTrigger.next(void 0);
    });
    this.service.getAllUser().subscribe((response:any)=>{console.log(response)});
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }



  isSuccessful = false;
  isDeleteFailed = false;
  errorMessage = ''
  isChangeFailed = false;
  isChangeSuccessful = false;
  errorMessage2 = ''

  
  
  delete(user:User):void{
    this.service.deleteuser(user?.username).subscribe({
      next: data => {
        console.log(data.message);
        this.isSuccessful = true;
        this.isDeleteFailed = false;

        //delete User from table
        const deletedUser = this.users.find(x => x.id === user.id);
        this.users.splice(this.users.indexOf(deletedUser!), 1);

       //timeOut to Hide the alert
        setTimeout(() => {
          this.isSuccessful=false;
        }, 1000);
      },
      
      error: err => {
        this.errorMessage = err.error.message;
        this.isDeleteFailed = true;

        //timeOut to Hide the alert
        setTimeout(() => {
          this.isDeleteFailed=false;
          this.errorMessage = "";
        }, 2500);        //alert(this.errorMessage);

      }
    });
  }

  changeStatue(user:User):void{
    this.service.changeStatues(user?.username).subscribe({
      next: data => {
        console.log(data.message);
        this.isChangeSuccessful = true;
        this.isChangeFailed = false;

       //timeOut to Hide the alert
        setTimeout(() => {
          this.isChangeSuccessful=false;
        }, 1000);

        setTimeout(() => {
          this.service.getAllUser().subscribe((response:any)=>{
            this.users = response;
          });
        }, 1000);

        
      },
      
      error: err => {
        this.errorMessage2 = err.error.message;
        this.isChangeFailed = true;

        //timeOut to Hide the alert
        setTimeout(() => {
          this.isChangeFailed=false;
          this.errorMessage2 = "";
        }, 2500);        //alert(this.errorMessage);

      }
    });
  }



  
}
