import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { HomeRoutingModule } from './home.routing.module'
import { HomeComponent } from './home.component'
import { SeeallitemsComponent } from '../seeallitems/seeallitems.component'
import { CommonhorizontalscrollComponent} from '../commonhorizontalscroll/commonhorizontalscroll.component'
import { CategoryitemsComponent } from '../categoryitems/categoryitems.component'
import { Seeallitems1Component } from '../seeallitems1/seeallitems1.component'
import { SblqwipoService } from '../Service'
import { CommonheaderComponent } from '../commonheader/commonheader.component'
import { TestComponent } from '../testcomponent/tests.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
     HomeRoutingModule,
     NativeScriptFormsModule
    ],
  declarations: [
    HomeComponent   
    ,SeeallitemsComponent 
    ,CategoryitemsComponent
    ,CommonhorizontalscrollComponent
    ,Seeallitems1Component 
    ,CommonheaderComponent   
    ,TestComponent
    ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [SblqwipoService]

})
export class HomeModule { }
