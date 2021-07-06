import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'
import { Router } from '@angular/router';
import { Page } from "@nativescript/core/ui/page";
import { SearchBar } from 'tns-core-modules';
@Component({
    selector: "common-header",
    moduleId: module.id,
    templateUrl: "./commonheader.component.html",
    styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {
  searchPhrase: string;
  onSearchSubmit(args): void {
      let searchBar = <SearchBar>args.object;
      console.log("You are searching for " + searchBar.text);}
  constructor(private route:Router,private page: Page) {
    this.page.actionBarHidden = true;
}

    ngOnInit(): void { }
        
        onDrawerButtonTap(): void {
          const sideDrawer=<RadSideDrawer>Application.getRootView()
          sideDrawer.showDrawer()
        }

        GoToGoogleMap():void {
            alert("Go TO GoogleMaps");
              }
        
}
