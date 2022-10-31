import { contenu } from './contenu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,  Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenuServiceTsService {

  constructor(private http: HttpClient) { }

  getContenu():Observable<contenu>{
    return this.http.get('app/contenus/')
    .pipe(
      tap((response: any)=>console.log(response)),
      catchError((error)=> this.handleError(error,[])) //lever error sans cracher app tab vide)
    )
  }

  getContenuById(contenuId:number){
    return this.http.get(`app/contenus/${contenuId}`)
    .pipe(
      tap((response: any)=>this.log(response)),
      catchError((error)=> this.handleError(error,[])) //lever error sans cracher app tab vide)
    )
  }



  private log(response:any){
    console.table(response);
  }

  private handleError(error:Error , errorValue :any){
    console.table(error);
        return of(errorValue);
  }
  

}
