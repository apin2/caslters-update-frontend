import { Component } from '@angular/core';

@Component({
  selector: 'app-select-society',
  templateUrl: './select-society.component.html',
  styleUrls: ['./select-society.component.scss']
})
export class SelectSocietyComponent {

  select(f:any){
    console.log(f);

  }
}
