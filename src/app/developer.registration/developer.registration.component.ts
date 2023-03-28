import { Component } from '@angular/core';

@Component({
  selector: 'app-developer.registration',
  templateUrl: './developer.registration.component.html',
  styleUrls: ['./developer.registration.component.scss']
})
export class DeveloperRegistrationComponent {
  // layer1:any=false;
  // layer2:any=false;
  // layer3:any=false;
  layer:any="";
  layerNew:any="";


  clickelayer1(layer:any){
    console.log("layer===>>>",layer);
    this.layer=layer;
  }
  clicklayer1(layerNew:any){
    console.log("layerNew===>>>",layerNew);
    this.layerNew=layerNew;
  }
}
