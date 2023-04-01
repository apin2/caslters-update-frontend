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
    this.productID = this.aroute.snapshot.paramMap.get('id');
    console.log(this.productID);

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
        console.log();
        this.updatesociety = res;
        this.updatememberdetail = res.societyMemberDetails;
        console.log('this.updatesociety', this.updatesociety);
        console.log('this.memberdetail', this.updatememberdetail);
        for (let i = 0; i < this.updatememberdetail.length; i++) {
          console.log(this.updatememberdetail[i].societyMemberDesignationId);
          if (this.updatememberdetail[i].societyMemberDesignationId === 1) {
            this.check.chairman = true;
          } else if (this.updatememberdetail[i].societyMemberDesignationId === 2) {
            this.check.seretory = true;
          } else if (this.updatememberdetail[i].societyMemberDesignationId === 3) {
            this.check.treasurer = true;
          }
        }
      }
    });
    console.log('detail', this.updatesociety);
  }
  saveupdatesociety(f: any) {
    // console.log(f.value);
    console.log('this.detail==>>', this.updatesociety);

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
    console.log('this.bearers', bearers);
    this.memberdetail.memberName = '';
    this.memberdetail.email = '';
    this.memberdetail.mobileNumber = '';
    console.log(this.memberdetail);
    if (this.id || this.id == 0) {
      console.log('if');
      for (let i = 0; i <= this.updatememberdetail.length; i++) {
        if (this.id == i) {
          this.updatememberdetail[i].bearers = bearers.bearers;
          this.updatememberdetail[i].name = bearers.name;
          this.updatememberdetail[i].email = bearers.email;
          this.updatememberdetail[i].number = bearers.number;
          this.id = undefined;
        }
      }
    } else {
      if (!['1', '2', '3'].includes(bearers.bearers)) {
        this.updatememberdetail.push(bearers);
        console.log('esel', this.updatememberdetail);
      } else {
        if (!this.check.chairman && bearers.bearers === '1') {
          this.updatememberdetail.push(bearers);
          this.check.chairman = true;
          console.log('this.', this.updatememberdetail);
        } else if (!this.check.Secretory && bearers.bearers === '2') {
          this.check.Secretory = true;
          this.updatememberdetail.push(bearers);
          console.log('seretory', this.updatememberdetail);
        } else if (!this.check.treasurer && bearers.bearers === '3') {
          this.check.treasurer = true;
          this.updatememberdetail.push(bearers);
          console.log('treasurer', this.updatememberdetail);
        } else {
          console.log(`${bearers.bearers} is already Exist`);
          console.log("this.toastr.success('Hello world!', 'Toastr fun!')");
          this.toastr.error('is already Exist!', bearers.bearers);
        }
      }
    }
  }
  updatedititem(index: any) {
    this.id = index;
    for (let i = 0; i <= this.updatememberdetail.length; i++) {
      if (index == i) {
        this.memberdetail.bearers = this.updatememberdetail[i].bearers;
        this.memberdetail.name = this.updatememberdetail[i].name;
        this.memberdetail.email = this.updatememberdetail[i].email;
        this.memberdetail.number = this.updatememberdetail[i].number;
      }
    }
  }
  updateremoveitem(i: any) {
    console.log(i);
    this.updatememberdetail.splice(i, 1);
    this.check.chairman = false;
    this.check.secretory = false;
    this.check.treasurer = false;
  }
}
