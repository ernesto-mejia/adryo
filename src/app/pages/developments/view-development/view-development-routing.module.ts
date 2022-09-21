import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDevelopmentPage } from './view-development.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDevelopmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDevelopmentPageRoutingModule {}
