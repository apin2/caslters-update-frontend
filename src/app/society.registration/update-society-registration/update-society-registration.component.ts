import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Baerer, updatesocietyReg } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-update-society-registration',
  templateUrl: './update-society-registration.component.html',
  styleUrls: ['./update-society-registration.component.scss']
})
export class UpdateSocietyRegistrationComponent {
  public updatesociety:FormGroup|any;
  submitted :any=false;
  updatesociet:any= new updatesocietyReg;
  newbaarer:any= new Baerer;
  // bearers:any;
  id:any;
  socitybearer:any=[];
  check:any = {
    chairman: false,
    Secretory: false,
    treasurer: false
  }

  constructor(private fb: FormBuilder,public toastr: ToastrService){

  }
  ngOnInit(){
    console.log("updatesociet",this.updatesociet);
    this.updatesociety = this.fb.group({
      usedfor: new FormControl('',[Validators.required] ),
      sizeofplot: new FormControl('',[Validators.required] ),
      plotDimensions: new FormControl('',[Validators.required] ),
      totalCarpetBldgArea: new FormControl('',[Validators.required] ),
      approchRoadWidth: new FormControl('',[Validators.required] ),
      numberOfCommercialTenaments: new FormControl('',[Validators.required] ),
      numberOfResidentialTenaments: new FormControl('',[Validators.required] ),
      totalCommercialBuiltUpBldgArea: new FormControl('',[Validators.required] ),
      totalResidentialBuiltUpBldgArea: new FormControl('',[Validators.required] ),
    })

    this.updatesociety
    // setTimeout(() => {
    //   const control = new FormControl("321");
    //   control.valueChanges.subscribe(data => console.log(data));
    //   this.updatesociety = new FormGroup({
    //     sizeofplot : control
    //   });
    // }, 5000)
  }
  get updateregisterFormControl(){
    return this.updatesociety?.controls;
  }
  update(f:any){
    console.log("updatesociet",this.updatesociet);
    console.log(this.newbaarer);
    // console.log(f.value);
  }

  bearerssave(){
    // this.userForm.controls['name'].reset();
    // this.userForm.controls['email'].reset();
    // this.userForm.controls['number'].reset();
    // this.newbaarer
    // this.bearers= new Baerer();
    let bearers:any ={
      bearers:this.newbaarer.bearers,
      name : this.newbaarer.name,
      email : this.newbaarer.email,
      number : this.newbaarer.number
    }
    // this.bearers.bearers= this.newbaarer.bearers;
    // this.bearers.name = this.newbaarer.name;
    // this.bearers.email = this.newbaarer.email;
    // this.bearers.number = this.newbaarer.number;
    console.log("this.bearers",bearers);
  // this.newbaarer={
  //     name:'',
  //     email:'',
  //     number:''
  //   }
    this.newbaarer.name='';
    this.newbaarer.email='';
    this.newbaarer.number=''
    console.log( this.newbaarer);
    // if(this.socitybearer.length>0)
      if(this.id || this.id == 0){
        console.log("if");
      for(let i=0;i<=this.socitybearer.length;i++){
        if( this.id == i){
          this.socitybearer[i].bearers=bearers.bearers;
          this.socitybearer[i].name=bearers.name;
          this.socitybearer[i].email=bearers.email;
          this.socitybearer[i].number=bearers.number;
          this.id=undefined
        }
      }  
    }
    else{
      if (!(["chairmen", "secretory", "treasurer"].includes(bearers.bearers))) {
        this.socitybearer.push(bearers)
        console.log("esel",this.socitybearer);
    } else {
      if (!(this.check.chairman) && bearers.bearers === 'chairmen') {
        this.socitybearer.push(bearers)
        this.check.chairman = true
        console.log("this.",this.socitybearer);
      } else if (!(this.check.Secretory) && bearers.bearers === 'secretory') {
        this.check.Secretory = true
        this.socitybearer.push(bearers)
        console.log("seretory",this.socitybearer);
      }else if (!(this.check.treasurer) && bearers.bearers === 'treasurer') {
        this.check.treasurer = true
        this.socitybearer.push(bearers)
        console.log("treasurer",this.socitybearer);
      }
       else {console.log(`${bearers.bearers} is already Exist`)
       console.log("this.toastr.success('Hello world!', 'Toastr fun!')")
       this.toastr.error( 'is already Exist!', bearers.bearers);
      }
    }
  }
  }

  edititem(index:any){
    this.id=index;
    for(let i=0;i<=this.socitybearer.length;i++){
      if(index == i){
        console.log("this.socitybearer[i].name",this.socitybearer[i]);
        this.newbaarer.bearers=this.socitybearer[i].bearers;
        this.newbaarer.name=this.socitybearer[i].name;
        this.newbaarer.email=this.socitybearer[i].email;
        this.newbaarer.number=this.socitybearer[i].number;
        // this.userForm.controls['name'].reset(this.socitybearer[i].name);
        // this.userForm.controls['email'].reset(this.socitybearer[i].email);
        // this.userForm.controls['number'].reset(this.socitybearer[i].number);
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
}
