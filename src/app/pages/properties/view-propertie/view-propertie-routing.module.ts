import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPropertiePage } from './view-propertie.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPropertiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPropertiePageRoutingModule {}
