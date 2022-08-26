import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailsendPageRoutingModule } from './mailsend-routing.module';

import { MailsendPage } from './mailsend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailsendPageRoutingModule
  ],
  declarations: [MailsendPage]
})
export class MailsendPageModule {}
