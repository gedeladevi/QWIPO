import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from '@nativescript/core/ui/page';
@Component({
    selector: "splash",
    moduleId: module.id,
    templateUrl: "./splash.component.html",
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    GoToLogin(): void{
        this.route.navigate(["user/login"]);
    }
    GoToregistration(): void{
    this.route.navigate(["user/registration"]);
        
    }
}
