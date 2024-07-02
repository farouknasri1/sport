import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab:any=[
  
  ];

  constructor(private router:Router,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (response)=>{
    console.log("here response match from BE",response.teams);
    this.teamsTab = response.teams;
      }
    );

  }
  goToInfo(id:number){
    this.router.navigate([`teaminfo/${id}`])
  }
  goToEdit(id:number){
    this.router.navigate([`teamedit/${id}`])
  }
  deleteTeam(id:any){
    this.teamService.deleteTeam(id).subscribe((response)=> {
      console.log('here response from BE',response.isDeleted);
      if (response.isDeleted) {
        this.teamService.getAllTeams().subscribe((data)=>{
          this.teamsTab =data.teams;
        });
        
      }
    });
  }
}

