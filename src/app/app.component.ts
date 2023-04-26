import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Castlers';
  gototop(){
    document.documentElement.scrollTop = 0;
    console.log("totop");
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
