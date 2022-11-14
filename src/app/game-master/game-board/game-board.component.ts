import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardPoint } from './point';
import { GameColors } from '../player';
import { OnReset } from 'src/app/OnReset';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnReset {

  @Input() currentColor!: string;

  @Output() madeMove = new EventEmitter<boolean>();
  @Output() win = new EventEmitter<boolean>();

  rows = 6;
  columns = 7;
  hasWon = false;
  board: BoardPoint[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.board = Array(this.columns).fill(Array(this.rows).fill(''));

    for(let i = 0; i < this.columns; i++){
      this.board[i] = [];
      for(let j = 0; j < this.rows; j++){
        this.board[i][j] = new BoardPoint(
          {
            col: i,
            row: j
          },
          GameColors.default,
          false
        )
      }
    }
  }

  checkColumn(col: string) {
    if(!this.hasWon){
      let colTemp: unknown = col;
      let colNum = colTemp as number;
  
      for(let i = this.rows-1; i >= 0 ; i--){
        if(!this.board[colNum][i].occupied){
          this.board[colNum][i].occupied = true;
          this.board[colNum][i].color = this.currentColor;
  
          if(this.checkForWin(this.board[colNum][i])){
            this.hasWon = true;
            this.win.emit(true);
          }
          this.madeMove.emit(true);
          break;
        }
      }
    }
  }

  checkForWin(boardPoint: BoardPoint): boolean{
    let win = false;
    const availablePoints = [
      boardPoint.vertExp(boardPoint.point, this.rows),
      boardPoint.horizExp(boardPoint.point, this.columns),
      boardPoint.diagTL_BR(boardPoint.point, this.columns, this.rows),
      boardPoint.diagBL_TR(boardPoint.point, this.columns, this.rows)
    ]

    for(let i = 0; i < availablePoints.length; i++){
      let sameColor = 0
      if(availablePoints[i].length < 4) continue;
      else{
        for(let j = 0; j < availablePoints[i].length; j++){
          let currentPoint = this.board[availablePoints[i][j].col][availablePoints[i][j].row];
          if(currentPoint.color === this.currentColor){
            sameColor++;
            if(sameColor === 4){
              win = true;
              return win;
            }
          }
          else sameColor = 0;
        }
      }
    }
    return win;
  }

  onReset(){
    this.hasWon = false;

    for(let i = 0; i < this.columns; i++){
      this.board[i] = [];
      for(let j = 0; j < this.rows; j++){
        this.board[i][j] = new BoardPoint(
          {
            col: i,
            row: j
          },
          GameColors.default,
          false
        )
      }
    }
  }

  setBorderClass(isFirst: boolean, isLast: boolean ): string {
    if(isFirst) return 'first';
    else if(isLast) return 'last';
    else return 'middle';
  }
}
