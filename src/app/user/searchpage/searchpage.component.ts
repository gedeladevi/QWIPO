import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
import { SearchBar } from 'tns-core-modules';
@Component({
    selector: "searchpage",
    moduleId: module.id,
    templateUrl: "./searchpage.component.html",
    styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}
    constructor(private page:Page) {
        this.page.actionBarHidden=true;
        
    }

    ngOnInit(): void {
    }
}
