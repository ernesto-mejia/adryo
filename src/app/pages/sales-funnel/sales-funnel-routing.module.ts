import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesFunnelPage } from './sales-funnel.page';

const routes: Routes = [
  {
    path: '',
    component: SalesFunnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesFunnelPageRoutingModule {}
