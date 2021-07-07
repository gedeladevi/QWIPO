import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "venderlist",
    moduleId: module.id,
    templateUrl: "./venderlist.component.html",
    styleUrls: ['./venderlist.component.css']
})
export class VenderlistComponent implements OnInit {

    constructor(private route:Router,private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
}
