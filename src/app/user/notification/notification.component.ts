import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
@Component({
    selector: "notification",
    moduleId: module.id,
    templateUrl: "./notification.component.html",
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    constructor(private page:Page) {
        this.page.actionBarHidden=true;
    }

    ngOnInit(): void {
    }
}
