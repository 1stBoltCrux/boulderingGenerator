import { Component, Input, OnInit } from '@angular/core';
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
  @Input() selectedGrid;
  
  grids: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;

  constructor(private router: Router, private problemService: ProblemService) { }

  ngOnInit() {
    this.grids = this.problemService.getGrids();
  }

  goToDetailPage(clickedGrid) {
    this.router.navigate(['grids', clickedGrid.$key]);
  }

  beginDeletingGrid(gridToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")) {
      this.problemService.deleteGrid(gridToDelete);
    }
  }
}
