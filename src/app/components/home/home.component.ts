import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
m:any =
  {id:1,scoreOne:2, scoreTow:1, teamOne:'EST',teamTow:'CA'}

  constructor() { }

  ngOnInit(): void {
  }

}
