import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
const routes: Routes = [  
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('~/app/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
 
]
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
