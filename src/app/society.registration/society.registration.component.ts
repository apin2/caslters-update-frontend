import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Baerer, Memberdetail, Societyupdate } from '../shared/interface/interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/interface/service.service';


@Component({
  selector: 'app-society.registration',
  templateUrl: './society.registration.component.html',
  styleUrls: ['./society.registration.component.scss']
})
export class SocietyRegistrationComponent {
  public userForm:FormGroup|any;
  submitted :any=false;
  name:any;
  number:any;
  email:any;
  bearers:any;
  socitybearer:any=[];
  updatesociety:any=new Societyupdate;
  public id:any;
  memberdetail:any;
  designation:any;
  check:any = {
    chairman: false,
    Secretory: false,
    treasurer: false
  }

  constructor(private fb: FormBuilder,public toastr: ToastrService, private route: Router , private service:ServiceService) {
   
  }
  
  ngOnInit() {
    this.memberdetail = new Memberdetail;
    this.userForm = this.fb.group({
      societyRegistrationNumber: new FormControl('',[Validators.required] ),
      societyName: new FormControl('',[Validators.required] ),
      address: new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      emailofsociet:new FormControl('',[Validators.required,Validators.email]),
      existingMemberCount: new FormControl('',[Validators.required] ),
      // age: new FormControl('',[Validators.required] ),
      ageofbuilding : new FormControl('',[Validators.required] ),
      // preliminaryStatus: new FormControl('',[Validators.required] ),
      // secondaryStatus: new FormControl('',[Validators.required] ),
      // termandcondition: new FormControl('',[Validators.required] ),
      bearers: new FormControl('' ),
      name: new FormControl(''),
      number: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      typedevelopment: new FormControl(''),  
      typetrety: new FormControl(''),
    });
    
    this.service.getSocietyMemberDesignations().subscribe((res) => {
      this.designation=res;
      console.log(res);
    });

    }
  
  get registerFormControl() {
    return this.userForm.controls;
  }

  save(f:any){
    if(f.value.societyName != ''){
      console.log(f.value);
      // console.log(this.socitybearer);
      let obj={
        "registeredSocietyId": 0,
        "societyDevelopmentTypeId": (f.value.typedevelopment),
        "societyDevelopmentSubType": f.value.typetrety,
        "societyRegistrationNumber": f.value.societyRegistrationNumber,
        "societyName": f.value.societyName,
        "registeredAddress": f.value.address,
        "city": f.value.city,
        "email": f.value.emailofsociet,
        "existingMemberCount": f.value.existingMemberCount,
        "age": f.value.ageofbuilding,
        "societyRegisteredCode": 'MHP'+f.value.societyRegistrationNumber+Math.floor(Math.random() * (90 - 10 + 1)) + 10,
        "societyMemberDetails": this.socitybearer,
      }
      console.log("obj====>>",obj);
      let local = JSON.stringify(obj);
      localStorage.setItem('society_detail',local);
      this.service.registersociety(obj).subscribe(res =>{
        if(res){
          this.toastr.success( 'Registration success',"Society" );
        }
        console.log(res);
      });
      this.route.navigate(['selectSociety']);
    }
    else{
      this.toastr.error( 'is Requered',"societyName" );
    }
  }
  bearersocity:any=[];

  // Office Bearers of Society member adding condition wise
  bearerssave(bearers:any,name:any,email:any,number:any){
    this.userForm.controls['name'].reset();
    this.userForm.controls['email'].reset();
    this.userForm.controls['number'].reset();
    this.bearers= new Baerer();
    this.bearers.societyMemberDesignationId= bearers;
    this.bearers.memberName = name;
    this.bearers.email = email;
    this.bearers.mobileNumber = number;
    this.bearers.societyMemberDetailsId=0;
    this.bearers.registeredSocietyId=0;
    // if(this.socitybearer.length>0)
      if(this.id || this.id == 0){
      for(let i=0;i<=this.socitybearer.length;i++){
        if( this.id == i){
          this.socitybearer[i].societyMemberDesignationId=this.bearers.societyMemberDesignationId;
          this.socitybearer[i].memberName=this.bearers.memberName;
          this.socitybearer[i].email=this.bearers.email;
          this.socitybearer[i].mobileNumber=this.bearers.mobileNumber;
          this.id=undefined
        }
      }  
    }
    else{
    if (!(["1", "2", "3"].includes(this.bearers.societyMemberDesignationId))) {
      this.socitybearer.push(this.bearers)
      // for(let i=0;i<=this.socitybearer.length;i++){ 
      //   if(this.socitybearer.email != this.bearers.email && this.socitybearer.mobileNumber != this.bearers.mobileNumber){
      //    }
      // }
    } else {
      if (!(this.check.chairman) && this.bearers.societyMemberDesignationId === '1') {
        this.check.chairman = true
        this.socitybearer.push(this.bearers)
        // for(let i=0;i<=this.socitybearer.length;i++){ 
        //   if(this.socitybearer.email != this.bearers.email && this.socitybearer.mobileNumber != this.bearers.mobileNumber){
        //   }
        //   else{
            
        //   }
        // }
        console.log("this.",this.socitybearer);
      } else if (!(this.check.Secretory) && this.bearers.societyMemberDesignationId === '2') {
        this.check.Secretory = true
        this.socitybearer.push(this.bearers)
        // for(let i=0;i<=this.socitybearer.length;i++){ 
        //   if(this.socitybearer.email != this.bearers.email && this.socitybearer.mobileNumber != this.bearers.mobileNumber){
        //   }
        //   else{
            
        //   }
        // }
      }else if (!(this.check.treasurer) && this.bearers.societyMemberDesignationId === '3') {
        this.check.treasurer = true
        this.socitybearer.push(this.bearers)
        // for(let i=0;i<=this.socitybearer.length;i++){ 
        //   if(this.socitybearer.email != this.bearers.email && this.socitybearer.mobileNumber != this.bearers.mobileNumber){
        //   }
        //   else{
            
        //   }
        // }
      }
       else {console.log(`${this.bearers.societyMemberDesignationId} is already Exist`)
      //  console.log("this.toastr.success('Hello world!', 'Toastr fun!')",this.toastr.success('Hello world!', 'Toastr fun!'))
      if(this.bearers.societyMemberDesignationId=='1'){
        let alertmessage='chairman'
        this.toastr.error( 'is already Exist!', alertmessage);
      }else if(this.bearers.societyMemberDesignationId=='2'){
        let alertmessage='Secretory';
        this.toastr.error( 'is already Exist!', alertmessage);
      }else if(this.bearers.societyMemberDesignationId=='3'){
        let alertmessage='Treasurer';
        this.toastr.error( 'is already Exist!', alertmessage);
      }
       
      }
    }
  }
  }

  edititem(index:any){
    this.id=index;
    for(let i=0;i<=this.socitybearer.length;i++){
      if(index == i){
        console.log("this.socitybearer[i].name",this.socitybearer[i].memberName);
        this.userForm.controls['name'].reset(this.socitybearer[i].memberName);
        this.userForm.controls['email'].reset(this.socitybearer[i].email);
        this.userForm.controls['number'].reset(this.socitybearer[i].mobileNumber);
      }
    }
  }

  // remove Office Bearers of Society table row
  removeitem(remove:any){
    console.log(remove);
    this.socitybearer.splice(remove,1);
    this.check.chairman=false;
    this.check.secretory=false;
    this.check.treasurer=false;
  }



  // update society

}
