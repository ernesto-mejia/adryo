import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardClientPageRoutingModule } from './card-client-routing.module';

import { CardClientPage } from './card-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardClientPageRoutingModule
  ],
  declarations: [CardClientPage]
})
export class CardClientPageModule {}
