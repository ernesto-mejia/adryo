import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryDevelopmentPage } from './gallery-development.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryDevelopmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryDevelopmentPageRoutingModule {}
