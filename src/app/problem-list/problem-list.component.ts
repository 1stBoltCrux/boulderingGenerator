import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../problem.service';
import { Grid } from '../grid.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
  providers: [ProblemService]
})
export class ProblemListComponent implements OnInit {

  grids: FirebaseListObservable<any[]>;

  constructor(private router: Router, private problemService: ProblemService) { }

  ngOnInit() {
    this.grids = this.problemService.getGrids();
  }

  goToDetailPage(clickedGrid) {
    this.router.navigate(['grids', clickedGrid.$key]);
  }

}
