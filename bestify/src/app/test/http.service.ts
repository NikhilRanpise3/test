import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http: HttpClient) {


  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/api/user");
  }

  postUsers() {
    return this.http.post("http://localhost:8080/api/user", {

      username: "ajit",
      password: "aa@123",
    });
  }

  
  addToFavourites(userid:number,quizid:number) {
    return this.http.post("http://localhost:8080/api/favourite", {

      "userid": userid,
      "quizid": quizid
    });
  }
  
  getQuizScore(userid): Observable<any> {
    return this.http.get('http://localhost:8080/api/quizscore/'+userid);
  }

  
  getGameScore(): Observable<any> {
    return this.http.get('http://localhost:8080/api/gameScore');
  }

  
  getFavourite(param): Observable<any> {
    //id passed externally
    // console.log('http://localhost:8080/api/favourite/'+param);
    
    return this.http.get('http://localhost:8080/api/favourite/'+param);
    

  }

  
  getAllQuizzes(): Observable<any> {
    return this.http.get('http://localhost:8080/api/quiz');
  }

  

  getByUserId(id:number): Observable<any> {
    return this.http.get('http://localhost:8080/api/quizscore/'+id);
  }

  removeFromFavourites(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/api/favourite/'+id);
  }

  // getQuizId(id: number): Observable<any> {
  //   return this.http.get('http://localhost:8080/api/quiz/'+id);
  // }

  

}
