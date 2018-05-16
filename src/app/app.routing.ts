import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { HelpComponent } from './help/help.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'problem-list',
    component: ProblemListComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'grids/:id',
    component: GridDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
