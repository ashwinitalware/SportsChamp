import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradecardPage } from './gradecard.page';

const routes: Routes = [
  {
    path: '',
    component: GradecardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradecardPageRoutingModule {}
