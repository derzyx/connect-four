import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OnReset } from 'src/app/OnReset';
import { Player } from '../player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnReset {

  @Input() player!: Player;

  @Output() reset = new EventEmitter<boolean>();

  currentColor: string = '';
  hasWon = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes){
      const chng = changes[propName];
      this.currentColor = (<Player>chng.currentValue).color;
      this.hasWon = (<Player>chng.currentValue).hasWon
    }
  }

  onReset(): void {
    this.hasWon = false;
  }

}
