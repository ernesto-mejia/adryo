import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationBarComponent,
    ClientsComponent
  ],
  exports: [
    HeaderComponent,
    NavigationBarComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
