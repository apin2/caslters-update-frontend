import { Component } from '@angular/core';
import { Consents, Devappointment, DevConinformation, Legaldocument, Reports, Resolution, Technicaldetail, Technicaldocument } from '../shared/interface/interface';
import { ServiceService } from '../shared/interface/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  allregistersociety:any;
  societydata:any;
  show:any=false;
  selectedsocietyid:any;

  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService
  ) {
    this.service.getRegisterSociety();
  }
  ngOnInit() {
    this.show=false;
    this.service.getRegisterSociety().subscribe((res) => {
      console.log(res);
      this.allregistersociety = res;
    });
  }

  onSocietySelected(societyid: any) {
    console.log(societyid);
    this.service.getallmember(societyid).subscribe((res) => {
      this.societydata = res;
      this.show = true;
    });
  }

  select(f:any){

  }

  technical_detail_save(f:any){
    console.log(this.technicaldetail);
  }
  legaldocSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','MasterFileDocument');
    obj.append('subtype','LegalDocument');
    obj.append('typeofdocument',this.legal.type_of_document);
    obj.append('documentfile',this.legal.file);
    console.log(obj);
  }
  technicaldocSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','MasterFileDocument');
    obj.append('subtype','TechnicalDocument');
    obj.append('typeofdocument',this.technicaldoc.type_of_document);
    obj.append('documentfile',this.technicaldoc.file);
    console.log(this.technicaldoc);    
  }
  resolutionSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ResolutionDocument');
    obj.append('typeofdocument',this.resolution.type_of_document);
    obj.append('documentfile',this.resolution.file);
    console.log(this.resolution);    
  }
  ConsentsSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ConsentsDocument');
    obj.append('typeofdocument',this.consents.type_of_document);
    obj.append('documentfile',this.consents.file);
    console.log(this.consents);
    
  }
  ReportsSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ReportsDocument');
    obj.append('typeofdocument',this.reports.type_of_document);
    obj.append('documentfile',this.reports.file);
    console.log(this.reports);
    
  }
  appointmentSave(f:any){
    const obj = new FormData ;
    obj.append('societyid','098234');
    obj.append('societyname','test');
    obj.append('type','AppointmentofDevloper');
    // obj.append('subtype','ConsentsDocument');
    // obj.append('typeofdocument',this.consents.type_of_document);
    obj.append('documentfile',this.devappointment.file);
    console.log(this.devappointment);
    
  }
  devandconSave(f:any){
    console.log(this.dev_information);
    
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
