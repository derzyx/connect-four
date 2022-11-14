import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { GameMasterComponent } from './game-master/game-master.component';
import { GameBoardComponent } from './game-master/game-board/game-board.component';
import { TitleComponent } from './title/title.component';
import { DropRowComponent } from './game-master/game-board/drop-row/drop-row.component';
import { DashboardComponent } from './game-master/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameMasterComponent,
    GameBoardComponent,
    TitleComponent,
    DropRowComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
