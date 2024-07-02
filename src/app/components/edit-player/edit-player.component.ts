import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  playerform!:FormGroup;
  player: any={};
  id:any;
  constructor(
    private activatedRoute:ActivatedRoute ,
    private playerService: PlayerService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.player=data.player;
      }
    );
  }
  editPlayer(){
    console.log("here the objet",this.player);
    this.playerService.editplayer(this.player).subscribe(
      (response)=>{
        console.log('here response from BE',response.isEdit);
        this.router.navigate(['admin'])
      }
    );

  }
}
