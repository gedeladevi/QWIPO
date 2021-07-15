import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
    selector: "cashback",
    moduleId: module.id,
    templateUrl: "./cashback.component.html",
    styleUrls: ['./cashback.component.css']
})
export class CashbackComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
