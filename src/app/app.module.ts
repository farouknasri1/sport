import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { StarPipe } from './pipes/star.pipe';
import { SearchComponent } from './components/search/search.component';
import{ HttpClientModule} from '@angular/common/http';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesComponent,
    PlayerComponent,
    PlayersComponent,
    TeamsComponent,
    TeamComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    ReversePipe,
    StarPipe,
    SearchComponent,
    EditMatchComponent,
    EditTeamComponent,
    EditPlayerComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
