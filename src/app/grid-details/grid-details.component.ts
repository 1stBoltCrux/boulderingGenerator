import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Grid } from '../grid.model';
import { Rock } from '../rock.model';
import { UserGrid } from '../user.model';
import { ProblemService } from '../problem.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css'],
  providers: [ProblemService]
})
export class GridDetailsComponent implements OnInit {
  gridId: string;
  gridToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private problemService: ProblemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.gridId = urlParameters['id'];
    });
    this.gridToDisplay = this.problemService.getGridById(this.gridId);
  }

}
