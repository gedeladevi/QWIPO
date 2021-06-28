import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "accountactivation",
    moduleId: module.id,
    templateUrl: "./accountactivation.component.html",
    styleUrls: ['./accountactivation.component.css']
})
export class AccountactivationComponent implements OnInit {

    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }
    ngOnInit(): void {
    }
}
