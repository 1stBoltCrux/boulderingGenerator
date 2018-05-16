import { Component, Input, OnInit } from '@angular/core';
import { Grid } from '../grid.model';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProblemService]
})
export class AdminComponent implements OnInit {
  @Input() selectedGrid;

  constructor(private problemService: ProblemService) { }

  ngOnInit() {
  }

}
