import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleryPropertiePage } from './galery-propertie.page';

const routes: Routes = [
  {
    path: '',
    component: GaleryPropertiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleryPropertiePageRoutingModule {}
