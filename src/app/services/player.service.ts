import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // matchURL => BE server address
 playerURL: string = 'http://localhost:3001/api/players';
  // http => Livreur
  constructor(private http: HttpClient) { }

  
  addplayer(player: any) {
    // match ==> obj    addplayer(obj){}
    return this.http.post<{isAdded:boolean}>(this.playerURL, player);
  }

  editplayer(playerObj: any) {
    return this.http.put<{isEdit:boolean}>(this.playerURL, playerObj);
  }

  //Reponse => One Object
  deletePlayer(id: any) {
    // return this.http.delete(this.playerURL + '/' + id );
    return this.http.delete<{isDeleted:boolean}>(`${this.playerURL}/${id}`);
  }


  getPlayerById(id: any) {
    return this.http.get<{player:any}>(`${this.playerURL}/${id}`);
   }

   //Reponse => Array of Objects
  getAllPlayers() { 
    return this.http.get<{players:any}>(this.playerURL);
  }

  searchPlayersByScores(){

  }


}