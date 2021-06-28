import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "addlocation",
    moduleId: module.id,
    templateUrl: "./addlocation.component.html",
    styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  
    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
}
