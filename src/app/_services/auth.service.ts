import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: any;
  constructor(private http: HttpClient) { }


  getBackEndData():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data')
  }
  
  getComments():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/Commentaires')

  }

  getCommentsPositives():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/numberofcommentairesbyEmotionPositive')
  }

  getCommentsByDate():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/numberofcommentairesbyDate')
  }
  getCommentsBytopic():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/numberofcommentairesbyTopic')
  }
  getEvolutionOfCommentsBytopic():Observable<any>{
    console.log('TESTINNNG CHAART');
    return this.http.get('http://localhost:8080/api/Data/EvolutionofcommentairesbyTopic')
  }
  getCommentsByEmotion():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/numberofcommentairesbyEmotion')
  }
  getEvolutionOfCommentsByEmotion():Observable<any>{
    return this.http.get('http://localhost:8080/api/Data/EvolutionofcommentairesbyEmotion')
  }

  login(username: string, password: string ): Observable<any> {
    console.log('TESTINNNG')
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
    }, httpOptions);
    
  }

  register(username: string, email: string, password: string, role:string): Observable<any> {

    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      role,
      password,
      
    }, httpOptions);

  
  }
}
