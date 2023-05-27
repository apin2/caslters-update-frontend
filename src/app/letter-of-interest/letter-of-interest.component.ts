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
  file:any;

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
    for(let i=0;i<=this.allregistersociety.length;i++){
    if(this.allregistersociety[i]?.registeredSocietyId == societyid){
      this.societydata = this.allregistersociety[i];
    }
  }
    this.service.getallmember(societyid).subscribe((res) => {
      // this.societydata = res;
      this.show = true;
    });
  }

  select(f:any){

  }

  technical_detail_save(f:any){
    let obj={
       registeredSocietyId:this.selectedsocietyid,
 sizeOfPlot : this.technicaldetail.sizeOfPlot,
 plotDimensions:this.technicaldetail.plotDimensions,
 residentialUse:this.technicaldetail.existingbuilding == 'residentialuse'?true:false,
 commercialUse:this.technicaldetail.existingbuilding == 'commercialuse'?true:false,
 mixedUse:this.technicaldetail.existingbuilding == 'mixeduse'?true:false,
 numberOfWings:this.technicaldetail.numberofwing,
 numberOfCommercialTenaments:this.technicaldetail.existing_commercial_tenaments,
 numberOfResidentialTenaments:this.technicaldetail.existing_residential_tenaments,
 totalCommercialBuiltUpBldgArea:this.technicaldetail.existing_commercial_builtup_area,
 totalResidentialBuiltUpBldgArea:this.technicaldetail.existing_residential_builtup_area,
 totalBuiltUpArea:this.technicaldetail.total_builtup_area,
 approchRoadWidth:this.technicaldetail.width_of_approach_road
    }
    console.log(obj);
    this.service.technicaldetailsubmit(obj).subscribe((res)=>{
      console.log(res);
    })
  }
  onFileChange(event:any){
    console.log(event);
    this.file=event.target.files[0];
    console.log(this.file);
  }
  legaldocSave(f:any){
    console.log(this.societydata);
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','MasterFileDocument');
    obj.append('subtype','Legal');
    obj.append('typeofdocumentName',this.legal.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(obj);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'MasterFileDocument',
      subtype:'Legal',
      typeofdocumentName:this.legal.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    })
  }
  conformupdate(message: any,fileobj:any) {
    if(confirm(message)) {
      const obj = new FormData ;
    obj.append('societyid',fileobj.societyid);
    obj.append('societyname',fileobj.societyname);
    obj.append('type',fileobj.type);
    obj.append('subtype',fileobj.subtype);
    obj.append('typeofdocumentName',fileobj.typeofdocumentName);
    obj.append('documentfile',fileobj.documentfile);
    obj.append('isupdate','true');
    console.log(obj);
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
    })
    }
  }
  technicaldocSave(f:any){
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','MasterFileDocument');
    obj.append('subtype','TechnicalDocument');
    obj.append('typeofdocumentName',this.technicaldoc.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(this.technicaldoc);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'MasterFileDocument',
      subtype:'Legal',
      typeofdocumentName:this.technicaldoc.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    })    
  }
  resolutionSave(f:any){
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ResolutionDocument');
    obj.append('typeofdocumentName',this.resolution.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(this.resolution);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'ComplianceDocument',
      subtype:'ResolutionDocument',
      typeofdocumentName:this.resolution.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    })    
  }
  ConsentsSave(f:any){
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ConsentsDocument');
    obj.append('typeofdocumentName',this.consents.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(this.consents);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'ComplianceDocument',
      subtype:'ConsentsDocument',
      typeofdocumentName:this.consents.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    })   
    
  }
  ReportsSave(f:any){
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','ComplianceDocument');
    obj.append('subtype','ReportsDocument');
    obj.append('typeofdocumentName',this.reports.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(this.consents);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'ComplianceDocument',
      subtype:'ReportsDocument',
      typeofdocumentName:this.reports.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    }) 
    
  }
  appointmentSave(f:any){
    const obj = new FormData ;
    obj.append('societyid',this.selectedsocietyid);
    obj.append('societyname',this.societydata.societyName);
    obj.append('type','AppointmentofDevloper');
    // obj.append('subtype','ReportsDocument');
    // obj.append('typeofdocumentName',this.reports.type_of_document);
    obj.append('documentfile',this.file);
    obj.append('isupdate','false');
    console.log(this.consents);
    let uplaodobj={
      societyid:this.selectedsocietyid,
      societyname:this.societydata.societyName,
      type:'AppointmentofDevloper',
      // subtype:'ReportsDocument',
      // typeofdocumentName:this.reports.type_of_document,
    documentfile:this.file,
    isupdate:false
    }
    this.service.fileupload(obj).subscribe((res:any)=>{
      console.log(res);
      if(res.Status=='Failed' ){
        this.conformupdate(res.Message,uplaodobj)
      }
    }) 
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
