import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Castlers';
  constructor(private viewportScroller: ViewportScroller){}
  gototop(){
    document.documentElement.scrollTop = 0;
    console.log("totop");
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
