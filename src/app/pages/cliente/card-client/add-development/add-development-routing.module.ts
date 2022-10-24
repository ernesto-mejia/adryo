import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDevelopmentPage } from './add-development.page';

const routes: Routes = [
  {
    path: '',
    component: AddDevelopmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDevelopmentPageRoutingModule {}
