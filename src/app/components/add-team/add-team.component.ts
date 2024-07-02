import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamform!:FormGroup;
  team:any={};
  constructor(private tservice:TeamService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  addTeam(){
    console.log("here team ",this.team);
    this.tservice.addTeam(this.team).subscribe(
      (response)=>{
        console.log('here response from BE',response.isAdded);
        this.router.navigate(['admin']);
       }
    );
     }
}
