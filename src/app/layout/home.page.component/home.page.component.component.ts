import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HomePage',
  templateUrl: './home.page.component.component.html',
  styleUrls: ['./home.page.component.component.scss']
})
export class HomePageComponentComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void {
    this.gotoTop();
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
