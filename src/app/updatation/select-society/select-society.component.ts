import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/interface/service.service';

@Component({
  selector: 'app-select-society',
  templateUrl: './select-society.component.html',
  styleUrls: ['./select-society.component.scss']
})

export class SelectSocietyComponent {
  allregistersociety:any;
  selectedsocietyid:any;

  constructor( private service: ServiceService, private route : Router){}

  ngOnInit(){
this.service.getRegisterSociety().subscribe((res) => {
      console.log(res);
      this.allregistersociety=res;
    });
  }

  select(f:any){
    console.log(f);
    // this.route.navigateByUrl('../updateSociety/'+this.selectedsocietyid);
    this.route.navigateByUrl('/updateSociety/'+this.selectedsocietyid);
    // localStorage.setItem('societyid',this.selectedsocietyid);
    console.log(f);

  }
}
