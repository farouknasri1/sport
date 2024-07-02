import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  userURL: string = 'http://localhost:3001/api/users';
  constructor(private http: HttpClient) {}

  login(user: any) {
   
  }

  signup(user: any) {
   
  }


}
