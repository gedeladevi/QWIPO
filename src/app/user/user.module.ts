import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { UserRoutingModule } from "./user.routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { SplashComponent } from "./splash/splash.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { OtpverificationComponent } from "./otpverification/otpverification.component";
import { AccountactivationComponent } from "./accountactivation/accountactivation.component";
import { AddlocationComponent } from "./addlocation/addlocation.component";
 
@NgModule({
    imports: [
        UserRoutingModule
        ,NativeScriptCommonModule
         
      ],
    declarations: [
        SplashComponent,
        LoginComponent,
        RegistrationComponent,
        OtpverificationComponent,
        AccountactivationComponent,
        AddlocationComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }