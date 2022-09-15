import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardClientPage } from './card-client.page';

const routes: Routes = [
  {
    path: '',
    component: CardClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardClientPageRoutingModule {}
