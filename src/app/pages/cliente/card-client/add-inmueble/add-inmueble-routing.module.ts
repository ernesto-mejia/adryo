import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInmueblePage } from './add-inmueble.page';

const routes: Routes = [
  {
    path: '',
    component: AddInmueblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInmueblePageRoutingModule {}
