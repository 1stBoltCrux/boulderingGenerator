import { Component, OnInit } from '@angular/core';
import { Grid } from '../problem.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid = new Grid;

  makeMove() {
    this.grid.moveNum++;
    console.log(this.grid.moveNum)
  }
  constructor() { }

  ngOnInit() {
  }

}