import { Component, HostListener, OnInit } from '@angular/core';
import { GameColors, Player } from './player';
import { GameBoardComponent } from './game-board/game-board.component';
import { OnReset } from '../OnReset';

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.component.html',
  styleUrls: ['./game-master.component.css']
})
export class GameMasterComponent implements OnInit, OnReset {
[x: string]: any;

  @HostListener('window', ['$event'])

  innWidth = '';

  allTokens = 42;
  hasWon = false;
  currentPlayer: number = 0;

  redPlayer: Player = {
    color: GameColors.red,
    tokens: this.allTokens / 2,
    hasTurn: false,
    hasWon: false
  }

  yellowPlayer: Player = {
    color: GameColors.yellow,
    tokens: this.allTokens / 2,
    hasTurn: false,
    hasWon: false
  }

  players: Player[] = [
    this.redPlayer,
    this.yellowPlayer
  ]

  constructor() { }

  ngOnInit(): void {
    if(innerWidth < 700){
      let num: unknown = innerWidth / 7;
      this.innWidth = <string>num;
    }    
    else{
      this.innWidth = '100';
    }
    console.log(this.innWidth)
    this.players[this.currentPlayer].hasTurn = true;
  }

  changePlayer(madeMove: boolean){
    if(madeMove && !this.hasWon){
      if(this.currentPlayer + 1 >= this.players.length){
        this.currentPlayer = 0;
      }
      else{
        this.currentPlayer++;
      }
      for(let i = 0; i < this.players.length; i++){
        if(i === this.currentPlayer){
          this.players[i] = {
            color: this.players[i].color,
            tokens: this.players[i].tokens,
            hasTurn: true,
            hasWon: this.players[i].hasWon
          }
        }
        else{
          this.players[i] = {
            color: this.players[i].color,
            tokens: this.players[i].tokens,
            hasTurn: false,
            hasWon: this.players[i].hasWon
          }
        }
      }
    }
  }

  winTitle(win: boolean){
    if(win){
      this.players[this.currentPlayer] = {
        color: this.players[this.currentPlayer].color,
        tokens: this.players[this.currentPlayer].tokens,
        hasTurn: false,
        hasWon: true
      }
      this.hasWon = win;
    }
  }

  onReset(){
    this.hasWon = false;
    this.currentPlayer = 0;
    this.players.forEach(player => {
      player.hasWon = false;
    });
  }

  onResize(event: any){
    if(innerWidth < 700){
      let num: unknown = innerWidth / 7;
      this.innWidth = <string>num;
    }
    else{
      this.innWidth = '100';
    }
  }
}
