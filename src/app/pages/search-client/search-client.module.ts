import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchClientPageRoutingModule } from './search-client-routing.module';

import { SearchClientPage } from './search-client.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchClientPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchClientPage]
})
export class SearchClientPageModule {}
