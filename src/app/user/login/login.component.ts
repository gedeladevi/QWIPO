import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    GoToregistration():void{
this.route.navigate(["user/registration"]);
    }
}
