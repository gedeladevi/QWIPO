import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { UserRoutingModule } from "./user.routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { SplashComponent } from "./splash/splash.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { OtpverificationComponent } from "./otpverification/otpverification.component";
import { AccountactivationComponent } from "./accountactivation/accountactivation.component";
import { AddlocationComponent } from "./addlocation/addlocation.component";
import { VenderlistComponent} from "./venderlist/venderlist.component"
import { TermsandconditionsComponent } from "./termsandconditions/termsandconditions.component";
import { OrderconformationComponent } from "./orderconformation/orderconformation.component";
import { NotificationComponent } from "./notification/notification.component";
import { SearchpageComponent } from "./searchpage/searchpage.component";
import { ContactusComponent } from "./contactus/contactus.component"
import { SelectpaymentComponent } from "./selectpayment/selectpayment.component";
import { CashbackComponent } from "./cashback/cashback.component";
 
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
        AddlocationComponent,
        VenderlistComponent,
        TermsandconditionsComponent,
        OrderconformationComponent,
        NotificationComponent,
        SearchpageComponent,
        ContactusComponent,
        SelectpaymentComponent,
        CashbackComponent

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }