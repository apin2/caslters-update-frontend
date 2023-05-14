import { Component } from '@angular/core';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent {

  layer:any="";
  layerNew:any="";
  layer_compliance:any="";

  clickelayer1(layer:any){
    this.layer=layer;
  }

  click_layer(layer_compliance:any){
    this.layer_compliance=layer_compliance;
  }

  clicklayer1(layerNew:any){
    this.layerNew=layerNew;
  }
}
