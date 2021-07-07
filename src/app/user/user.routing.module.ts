import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { SplashComponent } from "./splash/splash.component";
import { LoginComponent } from "./login/login.component"; 
import { RegistrationComponent } from "./registration/registration.component";   
import { OtpverificationComponent } from "./otpverification/otpverification.component"
import { AccountactivationComponent} from "./accountactivation/accountactivation.component"
import { AddlocationComponent } from "./addlocation/addlocation.component"
import { VenderlistComponent } from "./venderlist/venderlist.component";


    const routes: Routes = [
        //{ path: "" , component: SplashComponent},
       // { path: "" , component:AddlocationComponent},
        { path: "", component:VenderlistComponent},
        { path: "splash", component: SplashComponent },
        { path: "login" , component: LoginComponent},
        { path: "registration", component: RegistrationComponent},
        { path: "otpverification" ,component:OtpverificationComponent},
        { path: "accountactivation", component:AccountactivationComponent},
        { path: "addlocation" , component:AddlocationComponent},
        { path: "venderlist", component:VenderlistComponent}
      
    ];    
    @NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class UserRoutingModule { }
