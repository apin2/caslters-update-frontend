import { Component } from '@angular/core';
import { Consents, Devappointment, DevConinformation, Legaldocument, Reports, Resolution, Technicaldetail, Technicaldocument } from '../shared/interface/interface';

@Component({
  selector: 'app-letter-of-interest',
  templateUrl: './letter-of-interest.component.html',
  styleUrls: ['./letter-of-interest.component.scss']
})
export class LetterOfInterestComponent {
  layer:any="";
  layerNew:any="";
  layer_compliance:any="";
  technicaldetail:any= new Technicaldetail;
  legal:any= new Legaldocument;
  technicaldoc:any =new Technicaldocument;
  resolution:any =  new Resolution;
  consents:any = new Consents;
  reports:any = new Reports;
  devappointment:any = new Devappointment;
  dev_information:any = new DevConinformation;

  technical_detail_save(f:any){
    console.log(f.value);
  }
  legaldocSave(f:any){
    console.log(f.value);
  }
  technicaldocSave(f:any){
    console.log(f.value);
    
  }

  clickelayer1(layer:any){
    console.log("layer===>>>",layer);
    this.layer=layer;
  }

  click_layer(layer_compliance:any){
    console.log("layer_compliance===>>>",layer_compliance);
    this.layer_compliance=layer_compliance;
  }

  clicklayer1(layerNew:any){
    console.log("layerNew===>>>",layerNew);
    this.layerNew=layerNew;
  }
}
