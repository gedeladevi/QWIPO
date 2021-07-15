import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
    selector: "selectpayment",
    moduleId: module.id,
    templateUrl: "./selectpayment.component.html",
    styleUrls: ['./selectpayment.component.css']
})
export class SelectpaymentComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
