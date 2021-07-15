import {  NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { HomeComponent } from './home.component'
import { SeeallitemsComponent } from '../seeallitems/seeallitems.component'
import { CategoryitemsComponent } from '../categoryitems/categoryitems.component'
import { productlistV1Component } from '../productlistV1/productlistV1.component'
import { CommonheaderComponent } from '../commonheader/commonheader.component'
import { VendorproductlistComponent } from './vendorproductlist/vendorproductlist.component'

const routes: Routes = [
  { path: '', component: VendorproductlistComponent },
  { path: 'home', component: HomeComponent },
  { path:'seeallitems' , component:SeeallitemsComponent },
  { path:'categorylist' , component: CategoryitemsComponent },
  { path:'productlistv1', component:productlistV1Component },
  { path: 'commonheader' , component:CommonheaderComponent },
  { path: 'vendorproductlist' , component:VendorproductlistComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule { }
