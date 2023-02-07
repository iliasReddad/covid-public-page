import { contenu } from './contenu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,  Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ContenuServiceTsService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' } )
  
  };

  constructor(private http: HttpClient) { }

  getContenu():Observable<any>{
    return this.http.get('http://localhost:8080/content/all')
    
  }

  getContenuById(id:string):Observable<any>{
    return this.http.get('http://localhost:8080/content/'+id, {responseType: 'json'})
  
  }

    update(id:string , titre: string ,sous_titre: string,paragraphe: string): Observable<any> {

    console.log('show' + sous_titre);
    return this.http.post('http://localhost:8080/content/Update/'+id , {
      titre,
      sous_titre,
      paragraphe,

    }, this.httpOptions);
    
  }

  

 


  private log(response:any){
    console.table(response);
  }

  private handleError(error:Error , errorValue :any){
    console.table(error);
        return of(errorValue);
  }
  

}
