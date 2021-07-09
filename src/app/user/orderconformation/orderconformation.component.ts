import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
    selector: "orderconformation",
    moduleId: module.id,
    templateUrl: "./orderconformation.component.html",
    styleUrls: ['./orderconformation.component.css']
})
export class OrderconformationComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
