import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { SplashComponent } from "./splash/splash.component";
import { LoginComponent } from "./login/login.component"; 
import { RegistrationComponent } from "./registration/registration.component";   
import { OtpverificationComponent } from "./otpverification/otpverification.component"
import { AccountactivationComponent} from "./accountactivation/accountactivation.component"
import { AddlocationComponent } from "./addlocation/addlocation.component"
import { VenderlistComponent } from "./venderlist/venderlist.component"
import { TermsandconditionsComponent } from "./termsandconditions/termsandconditions.component"
import { OrderconformationComponent } from "./orderconformation/orderconformation.component"
import { NotificationComponent } from "./notification/notification.component"
import { SearchpageComponent} from "./searchpage/searchpage.component"
import { ContactusComponent } from "./contactus/contactus.component"
import { SelectpaymentComponent } from "./selectpayment/selectpayment.component"
import {CashbackComponent } from "./cashback/cashback.component"
    const routes: Routes = [
        { path: "", component:CashbackComponent},
        { path: "splash", component: SplashComponent },
        { path: "login" , component: LoginComponent},
        { path: "registration", component: RegistrationComponent},
        { path: "otpverification" ,component:OtpverificationComponent},
        { path: "accountactivation", component:AccountactivationComponent},
        { path: "addlocation" , component:AddlocationComponent},
        { path: "venderlist", component:VenderlistComponent},
        { path: "termsandconditions" , component:TermsandconditionsComponent},
        { path: "orderconformation" , component:OrderconformationComponent },
        { path: "notification", component:NotificationComponent},
        { path: "searchpage" , component:SearchpageComponent},
        { path: "contactus" , component:ContactusComponent},
        { path: "selectpayment" , component:SelectpaymentComponent},
        { path: "cashback", component:CashbackComponent}
      
    ];    
    @NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class UserRoutingModule { }
