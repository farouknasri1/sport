import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerform!:FormGroup;
  player:any={};
  constructor(private pService:PlayerService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  addPlayer(){
    console.log("here player ",this.player);
    this.pService.addplayer(this.player).subscribe((response)=>{
      console.log('here response from BE',response.isAdded);
      this.router.navigate(['admin']);
     }

    );
     }
}
