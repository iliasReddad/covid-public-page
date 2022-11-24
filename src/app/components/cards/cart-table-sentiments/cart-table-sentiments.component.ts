import { AuthService } from 'src/app/_services/auth.service';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-table-sentiments',
  templateUrl: './cart-table-sentiments.component.html',
  styleUrls: ['./cart-table-sentiments.component.css']
})
export class CartTableSentimentsComponent implements OnInit {
  totalCards: number  = 6;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage!: number ;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
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



  getIcon(emotion: string){
    console.log(emotion);
    let color: string = '';
    switch (emotion.split(",")[1]) {
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


  ngOnInit(): void {
    
    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
      let myMap = new Map(Object.entries(this.data));


      
    });


    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();

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


  

  
 initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

}
