import {  NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { HomeComponent } from './home.component'
import { SeeallitemsComponent } from '../seeallitems/seeallitems.component'
import {CategoryitemsComponent } from '../categoryitems/categoryitems.component'
import { Seeallitems1Component} from '../seeallitems1/seeallitems1.component'
import { CommonheaderComponent } from '../commonheader/commonheader.component'

  
const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: ' ' , component:CommonheaderComponent},
  { path: 'home', component: HomeComponent },
  { path:'seeallitems' , component:SeeallitemsComponent},
  {path:'categorylist' ,component: CategoryitemsComponent},
  {path:'seeallitems1',component:Seeallitems1Component},
  { path: 'commonheader' , component:CommonheaderComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
