import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamform!:FormGroup;
  team: any={};
  id:any;
  constructor(
    private activatedRoute:ActivatedRoute ,
    private teamService:TeamService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.teamService.getTeamById(this.id).subscribe();
  }
  editTeam(){
    console.log("here the object",this.team);
    this.teamService.editTeam(this.team).subscribe();
  }

}
