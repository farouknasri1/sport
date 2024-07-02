import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchURL => BE server address
  matchURL: string = 'http://localhost:3001/api/matches';
  // http => Livreur
  constructor(private http: HttpClient) { }

  
  addMatch(match: any) {
    // match ==> obj    addMatch(obj){}
    return this.http.post<{isAdded:boolean}>(this.matchURL, match);
  }

  editMatch(matchObj: any) {
    return this.http.put<{isEdit :string}>(this.matchURL, matchObj);
  }

  //Reponse => One Object
  deleteMatch(id: any) {
    // return this.http.delete(this.matchURL + '/' + id );
    return this.http.delete<{isDeleted:boolean}>(`${this.matchURL}/${id}`);
  }


  getMatchById(id: any) {
    return this.http.get<{match:any}>(`${this.matchURL}/${id}`);
   }

   //Reponse => Array of Objects
  getAllMatchs() { 
    return this.http.get<{matches:any}>(this.matchURL);
  }
//
  searchMatchesByScores(obj:any){
    return this.http.post<{matches:any}>(this.matchURL + "/search",obj);
  }


}

