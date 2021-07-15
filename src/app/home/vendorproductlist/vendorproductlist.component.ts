import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Recommandeditems } from '../../Models/Recommandeditems';
import { SblqwipoService } from '../../Service'
import { Buyagainitems } from '../../Models/Buyagainitems';
import { Page } from "@nativescript/core/ui/page";
import { SearchBar } from 'tns-core-modules';
registerElement('CardView', () => CardView);

@Component({
    selector: "vendorproductlist",
    moduleId: module.id,
    templateUrl: "./vendorproductlist.component.html",
    styleUrls: ['./vendorproductlist.component.css']
})
export class VendorproductlistComponent implements OnInit {

    MixItems : Recommandeditems[]=[];
    Buyagainitems: Buyagainitems[]=[];
    qty: number = 0;
    onScroll(args: ScrollEventData) {
      const scrollView = args.object as ScrollView;    
  }
  
  isseeallshow:Boolean=false;
  searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}
    constructor(private route:Router,private page: Page , private _sblqwipoService:SblqwipoService) {
      this.page.actionBarHidden = true;
    }
  
    ngOnInit(): void {
  
  this.MixItems = this._sblqwipoService.GetMixItems();
  this.MixItems = this._sblqwipoService.FormateItems4(this.MixItems);
  
  this.Buyagainitems = this._sblqwipoService.GetBuyagainitems();
  this.Buyagainitems = this._sblqwipoService.formateItems5(this.Buyagainitems);
      
    }
    gotologin(): void{
      this.route.navigate(["/home/login"]);
      }
      
      onDrawerButtonTap(): void{
        const sideDrawer=<RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
      }
  
      GoToGoogleMap():void{
          alert("Go TO GoogleMaps");
        }
  
        GoToCategories():void{
          this.isseeallshow=false;
        
      }
      GoToSeeAllItems():void{ 
        this.isseeallshow=true;
        
      }
  
  minusqty(item:Recommandeditems):void{
    item.Quantity--;
  
  
  }
  plusqty(item:Recommandeditems):void{
     item.Quantity++;
     
  }
  
  }
