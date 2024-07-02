import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
 playersTab:any=[

  ];

  constructor(private router:Router,
    private playerService :PlayerService
  ) {}

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (response)=>{
    console.log("here response match from BE",response.players);
    this.playersTab = response.players;
      }
    );
  }
  goToInfo(id:number){
    this.router.navigate([`playerinfo/${id}`])

  }
  goToEdit(id: number) {
    this.router.navigate([`playeredit/${id}`]);
  }

  deletePlayer(id:any){
    this.playerService.deletePlayer(id).subscribe((response)=> {
      console.log('here response from BE',response.isDeleted);
      if (response.isDeleted) {
        this.playerService.getAllPlayers().subscribe((data)=>{
          this.playersTab =data.players;
        });
        
      }
    });
  }

}
