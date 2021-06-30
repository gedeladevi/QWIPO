import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
@Component({
    selector: "seeall-items",
    moduleId: module.id,
    templateUrl: "./seeallitems.component.html",
    styleUrls: ['./seeallitems.component.css']
})
export class SeeallitemsComponent implements OnInit {

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView;    
    }
    constructor(private route:Router) {
    }

    ngOnInit(): void {
    }
    GoTovegitabelsList():void{
        alert("Different types of vegitabels available")
       }
  GoToFruitsList():void{
     alert("All Fruits available here")
   }
  GoToLeafyvegitabelsList():void{
     alert("Fresh Leafy Vegitabels available here")
   }
  GoToChacolatesList():void{
    alert("All types of chacolates available here")
   }
  

}
