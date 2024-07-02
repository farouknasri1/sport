import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any = [
  
  ];

  constructor(
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
this.matchService.getAllMatchs().subscribe(
  (response)=>{
console.log("here response match from BE",response.matches);
this.matchesTab = response.matches;
  }
);
  }
  goToInfo(id: number) {
    this.router.navigate([`matchinfo/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`matchedit/${id}`]);
  }

  deleteMatch(id:any){
    this.matchService.deleteMatch(id).subscribe((response)=> {
      console.log('here response from BE',response.isDeleted);
      if (response.isDeleted) {
        this.matchService.getAllMatchs().subscribe((data)=>{
          this.matchesTab =data.matches;
        });
        
      }
    });
  }

  Result(a: number, b: number, team: string) {
    if (a > b) {
      return [team + ' win', 'green'];

    } else if (a < b) {
      return [team + ' lose', 'red'];
    } else {
      return ['score null', 'blue'];
    }
  }

}
