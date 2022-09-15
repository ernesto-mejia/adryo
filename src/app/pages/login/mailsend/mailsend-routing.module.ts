import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailsendPage } from './mailsend.page';

const routes: Routes = [
  {
    path: '',
    component: MailsendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailsendPageRoutingModule {}
