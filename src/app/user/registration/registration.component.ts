import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
 
@Component({
    selector: "registration",
    moduleId: module.id,
    templateUrl: "./registration.component.html",
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    ispasswordshow:boolean=false;
    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }
     
    ngOnInit(): void {
    }
    passwordshow():void{
        this.ispasswordshow=true;
            }
            passwordhide():void{
        this.ispasswordshow=false;
            }
            GoToLogin(): void{
                this.route.navigate(["user/login"]);
            }

            GoTootpverification(): void{
                this.route.navigate(["user/otpverification"])
            }
            // GoToaccountactivation():void{
            //     this.route.navigate(["user/accountactivation"])
            // }
}
