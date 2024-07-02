import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab:any=[
   
  ]
  constructor(private teamsService:TeamService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(
      (response) => {
        console.log("here response from BE", response.teams);
        this. teamsTab= response.teams;
      }
    );
  }

}
