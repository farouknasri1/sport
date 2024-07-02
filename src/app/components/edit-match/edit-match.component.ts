import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchform!:FormGroup;
  match: any={};
  id:any;
  constructor(
    private activatedRoute:ActivatedRoute ,
    private matchService: MatchService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.match=data.match;
      }
    );
  }
  EditMatch(){
    console.log("here the objet",this.match);
    this.matchService.editMatch(this.match).subscribe(
      (response)=>{
        console.log('here response from BE',response.isEdit);
        this.router.navigate(['admin'])
      }
    );

  }
}
