import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Memberdetail, Societyupdate } from '../shared/interface/interface';
import { ServiceService } from '../shared/interface/service.service';

@Component({
  selector: 'app-updatation',
  templateUrl: './updatation.component.html',
  styleUrls: ['./updatation.component.scss'],
})
export class UpdatationComponent {
  updatesociety: any = new Societyupdate();
  updatememberdetail: any = [];
  memberdetail: any;
  id: any;
  societyid: any;
  designation: any;
  productID: any;
  detail: any;
  singlemember: any;
  check: any = {
    chairman: false,
    Secretory: false,
    treasurer: false,
  };
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private aroute: ActivatedRoute,
    private route: Router,
    private service: ServiceService
  ) {}

  ngOnInit() {
    console.log(this.id);
    
    this.memberdetail = new Memberdetail();
    this.service.getSocietyMemberDesignations().subscribe((res) => {
      this.designation = res;
      console.log(res);
    });
    this.getupdatesociety();
  }

  getupdatesociety() {
    this.societyid = this.aroute.snapshot.paramMap.get('id');
    this.service.getsocietybyid(this.societyid).subscribe((res) => {
      if (res) {
        this.updatesociety = res;
        this.updatememberdetail = res.societyMemberDetails;
        for (let i = 0; i < this.updatememberdetail.length; i++) {
          console.log(this.updatememberdetail[i].societyMemberDesignationId);
          if (this.updatememberdetail[i].societyMemberDesignationId === 1) {
            this.check.chairman = true;
          } else if (
            this.updatememberdetail[i].societyMemberDesignationId === 2
          ) {
            this.check.seretory = true;
          } else if (
            this.updatememberdetail[i].societyMemberDesignationId === 3
          ) {
            this.check.treasurer = true;
          }
        }
      }
    });
  }
  saveupdatesociety(f: any) {
    this.service
      .updateRegistrationSocietyDetails(this.updatesociety)
      .subscribe((res) => {
        console.log(res);
      });
  }

  updatemember() {
    let bearers: any = {
      societyMemberDesignationId: this.memberdetail.societyMemberDesignationId,
      memberName: this.memberdetail.memberName,
      email: this.memberdetail.email,
      mobileNumber: this.memberdetail.mobileNumber,
      societyMemberDetailsId: this.updatesociety.societyMemberDetailsId,
      registeredSocietyId: this.updatesociety.registeredSocietyId,
    };
    console.log(bearers)
    this.memberdetail.memberName = '';
    this.memberdetail.email = '';
    this.memberdetail.mobileNumber = '';
    console.log(this.id);
    if (this.id || this.id == 0) {
      console.log('if');
      for (let i = 0; i <= this.updatememberdetail.length; i++) {
        if (this.id == i) {
          this.updatememberdetail[i].societyMemberDesignationId =
            bearers.societyMemberDesignationId;
          this.updatememberdetail[i].memberName = bearers.memberName;
          this.updatememberdetail[i].email = bearers.email;
          this.updatememberdetail[i].mobileNumber = bearers.mobileNumber;
          this.id = undefined;
        }
      }
    } else {
      if (!['1', '2', '3'].includes(bearers.societyMemberDesignationId)) {
        this.updatememberdetail.push(bearers);
        console.log('esel', this.memberdetail.societyMemberDesignationId);
      } else {
        console.log(
          'elsethis.==',
          this.memberdetail.societyMemberDesignationId
        );

        if (
          !this.check.chairman &&
          bearers.societyMemberDesignationId === '1'
        ) {
          this.updatememberdetail.push(bearers);
          this.check.chairman = true;
          console.log('this.', this.updatememberdetail);
        } else if (
          !this.check.Secretory &&
          bearers.societyMemberDesignationId === '2'
        ) {
          this.check.Secretory = true;
          this.updatememberdetail.push(bearers);
          console.log('seretory', this.updatememberdetail);
        } else if (
          !this.check.treasurer &&
          bearers.societyMemberDesignationId === '3'
        ) {
          this.check.treasurer = true;
          this.updatememberdetail.push(bearers);
          console.log('treasurer', this.updatememberdetail);
        } else {
          console.log(`${bearers.societyMemberDesignationId} is already Exist`);
          console.log("this.toastr.success('Hello world!', 'Toastr fun!')");
          if (bearers.societyMemberDesignationId == '1') {
            let alertmessage = 'Chairmen';
            this.toastr.error('Already Exist!', alertmessage);
          } else if (bearers.societyMemberDesignationId == '2') {
            let alertmessage = 'Secretory';
            this.toastr.error('Already Exist!', alertmessage);
          } else if (bearers.societyMemberDesignationId == '3') {
            let alertmessage = 'Treasurer';
            this.toastr.error('Already Exist!', alertmessage);
          }
        }
      }
    }
  }
  updatedititem(index: any, data: any) {
    this.singlemember = data;
    this.id = index;
    this.memberdetail.societyMemberDesignationId =
      data.societyMemberDesignationId;
    this.memberdetail.memberName = data.memberName;
    this.memberdetail.email = data.email;
    this.memberdetail.mobileNumber = data.mobileNumber;
  }
  updateremoveitem(i: any, data: any) {
    let obj: any = {
      societyMemberDetailsId: data.societyMemberDetailsId,
      registeredSocietyId: data.registeredSocietyId,
    };
    this.service.deletemember(obj).subscribe((res) => {
      console.log(res);
      if (res) {
        // this.onSocietySelected(this.selectedsocietyid);
        this.toastr.success('Delete Successfully', 'Member');
      }
    });
    console.log(i);
    this.updatememberdetail.splice(i, 1);
    // this.toastr.success( 'delete successfully','Success');
    this.check.chairman = false;
    this.check.secretory = false;
    this.check.treasurer = false;
  }
}
