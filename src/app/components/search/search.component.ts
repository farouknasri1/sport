import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
   newtab= [];


  constructor(private formBuilder: FormBuilder,
    private matchService:MatchService,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', [Validators.required]],
      scoreTow: ['', [Validators.required]],
    });
  }


  search(){
  this.matchService.searchMatchesByScores(this.searchForm.value).subscribe((data)=>{
    console.log('here matches form ', data.matches);
    this.newtab= data.matches;
  });

  }
  /*search() {  
    console.log(this.searchForm.value);
    this.V = [];
    for (let i = 0; i < this.T.length; i++) {
      if (this.searchForm.value.scoreOne == this.T[i].scoreOne || this.searchForm.value.scoreTwo == this.T[i].scoreTwo) {
        this.V.push(this.T[i]);
      }
    }
   
    return this.V;
  }*/
}
