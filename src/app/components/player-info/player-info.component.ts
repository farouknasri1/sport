import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  id:any;
  player:any;


  constructor(
    private activatedRoute:ActivatedRoute,
    private playerSerivce:PlayerService
  ) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params['id'];
    this.playerSerivce.getPlayerById(this.id).subscribe((response)=>{
      console.log('here response from BE',response.player);
      this.player =response.player
    }
    )
  }
  }


