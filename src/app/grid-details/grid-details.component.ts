import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Grid } from '../grid.model';
import { Rock } from '../rock.model';
import { UserGrid } from '../user.model';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
