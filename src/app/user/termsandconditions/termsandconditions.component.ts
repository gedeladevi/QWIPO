import { Component, OnInit } from "@angular/core";
import {Page} from "@nativescript/core/ui/page"

@Component({
    selector: "termsandconditions",
    moduleId: module.id,
    templateUrl: "./termsandconditions.component.html",
    styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
