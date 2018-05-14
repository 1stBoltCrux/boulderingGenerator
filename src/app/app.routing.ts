import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { GridComponent } from './grid/grid.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  // {
  //   path: 'grid',
  //   // component: GridComponent
  // },
  {
    path: 'problem-list',
    component: ProblemListComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
