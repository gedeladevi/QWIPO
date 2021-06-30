import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { Application } from '@nativescript/core';
import { DrawerTransitionBase, RadSideDrawer,SlideInOnTopTransition,} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router } from '@angular/router'
@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _sideDrawerTransition: DrawerTransitionBase;
  private _activatedUrl: string;
  constructor( private router: Router,private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
  }
  get sideDrawerTransition(): DrawerTransitionBase {
  return this._sideDrawerTransition
}
isComponentSelected(url: string): boolean {
  return this._activatedUrl === url
}
onNavItemTap(navItemRoute: string): void {
  this.routerExtensions.navigate([navItemRoute], {
    transition: {
      name: 'fade',
    },
  })

  const sideDrawer = <RadSideDrawer>Application.getRootView()
  sideDrawer.closeDrawer()
}
}
