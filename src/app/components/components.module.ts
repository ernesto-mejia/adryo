import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationBarComponent,
    DetailComponent
  ],
  exports: [
    HeaderComponent,
    NavigationBarComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
