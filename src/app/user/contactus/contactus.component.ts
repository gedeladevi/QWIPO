import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "contactus",
    moduleId: module.id,
    templateUrl: "./contactus.component.html",
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
