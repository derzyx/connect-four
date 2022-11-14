import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-row',
  templateUrl: './drop-row.component.html',
  styleUrls: ['./drop-row.component.css']
})
export class DropRowComponent implements OnInit {

  @Input() elId = '';
  @Input() borderClass = '';
  @Input() innWidth = '';

  @Output() selectedCol = new EventEmitter<string>();

  styles: Record<string, string> = {};

  constructor() { }

  ngOnInit(): void {
  }

  selectCol(col: string){
    this.selectedCol.emit(col[col.length-1]);
  }
}
