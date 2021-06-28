import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "otpverification",
    moduleId: module.id,
    templateUrl: "./otpverification.component.html",
    styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {

    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
    GoToaccountactivation():void
    {
        this.route.navigate(["user/accountactivation"])
    }
}
