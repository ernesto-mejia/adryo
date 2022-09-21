import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/login/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./pages/properties/properties.module').then( m => m.PropertiesPageModule)
  },
  {
    path: 'developments',
    loadChildren: () => import('./pages/developments/developments.module').then( m => m.DevelopmentsPageModule)
  },
  {
    path: 'mail-send',
    loadChildren: () => import('./pages/login/mailsend/mailsend.module').then( m => m.MailsendPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('./pages/user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
  },
  {
    path: 'sales-funnel',
    loadChildren: () => import('./pages/sales-funnel/sales-funnel.module').then( m => m.SalesFunnelPageModule)
  },
  {
    path: 'client-list',
    loadChildren: () => import('./pages/cliente/client-list/client-list.module').then( m => m.ClientListPageModule)
  },
  {
    path: 'search-client',
    loadChildren: () => import('./pages/cliente/search-client/search-client.module').then( m => m.SearchClientPageModule)
  },
  {
    path: 'card-client',
    loadChildren: () => import('./pages/cliente/card-client/card-client.module').then( m => m.CardClientPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/cliente/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'search-event',
    loadChildren: () => import('./pages/search-event/search-event.module').then( m => m.SearchEventPageModule)
  },
  {
    path: 'view-propertie',
    loadChildren: () => import('./pages/properties/view-propertie/view-propertie.module').then( m => m.ViewPropertiePageModule)
  },
  {
    path: 'view-development',
    loadChildren: () => import('./pages/developments/view-development/view-development.module').then( m => m.ViewDevelopmentPageModule)
  },
  {
    path: 'galery-propertie',
    loadChildren: () => import('./pages/properties/galery-propertie/galery-propertie.module').then( m => m.GaleryPropertiePageModule)
  },
  {
    path: 'gallery-development',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./pages/developments/gallery-development/gallery-development.module').then( m => m.GalleryDevelopmentPageModule)
  }









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
