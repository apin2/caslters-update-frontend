import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { Memberdetail } from '../shared/interface/interface';
import { ServiceService } from '../shared/interface/service.service';
type AOA = any[][];

@Component({
  selector: 'app-update-society-member',
  templateUrl: './update-society-member.component.html',
  styleUrls: ['./update-society-member.component.scss'],
})
export class UpdateSocietyMemberComponent {
  data: AOA | any = [];
  as: any = XLSX;
  fileName: string = 'updatemember.xlsx';
  show: any = false;
  allregistersociety: any;
  selectedsocietyid: any;
  file: any;
  memberdetail: any = new Memberdetail();
  showfile: any = false;
  id: any;
  p: any;
  societydata: any;
  singlemember: any;
  uploadForm: FormGroup | any;
  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService
  ) {
    this.service.getRegisterSociety();
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({ profile: [''] });
    this.service.getRegisterSociety().subscribe((res) => {
      console.log(res);
      this.allregistersociety = res;
    });
  }

  onSocietySelected(societyid: any) {
    console.log(societyid);
    this.service.getallmember(societyid).subscribe((res) => {
      debugger;
      this.societydata = res;
      this.show = true;
    });
  }

  onFileChange(evt: any) {
    console.log(evt);
    const file = evt.target.files[0];
    this.uploadForm.get('profile').setValue(file);
    /* wire up file reader */
    this.file = evt.target.files[0];
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log('data:', this.data);
      this.data.map((res: any) => {
        if (res[0] === 'no') {
          console.log(res[0]);
        } else {
          console.log(res[0]);
        }
      });
    };
    reader.readAsBinaryString(target.files[0]);
  }

  export(): void {
    this.data = [['Name', 'E-mail Id', 'Contact Number'], []];
    console.log(this.data);
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  edititem(index: any, data: any) {
    this.memberdetail.memberName = data.memberName;
    this.memberdetail.mobileNumber = data.mobileNumber;
    this.memberdetail.email = data.email;
    this.singlemember = data;

    this.showfile = true;
    // console.log('i', index);
    // this.id=index;
    // console.log("dat===>>",this.data);
    // for(let i =1 ; i<=this.data.length ; i++){
    //   if(index==i){
    //     console.log(this.data[i]);
    //     this.memberdetail.memberName=this.data[i][1];
    //     this.memberdetail.email=this.data[i][2];
    //     this.memberdetail.mobileNumber=this.data[i][3];
    //   }
    // }
  }
  removeitem(i: any, data: any) {
    console.log('i', this.data);
    let obj: any = {
      societyMemberDetailsId: data.societyMemberDetailsId,
      registeredSocietyId: data.registeredSocietyId,
    };
    this.service.deletemember(obj).subscribe((res) => {
      console.log(res);
      if (res) {
        this.onSocietySelected(this.selectedsocietyid);
        this.toastr.success('Member Deleted Successfully', 'Success');
      }
    });
    // this.data.splice(i, 1);
  }
  memberupdate(f: any) {}

  showtable() {
    const formData = new FormData();
    formData.append('memberDetails', this.uploadForm.get('profile').value);

    console.log(this.file);
    console.log(this.selectedsocietyid);
    this.show = true;
    const formfile = new FormData();
    formfile.append('societyNewMemberDetails', this.file);
    formfile.append('societyId', this.selectedsocietyid);
    console.log(formfile);

    this.service.addnewmember(formfile).subscribe((res) => {
      console.log(res);
      if (res) {
        this.onSocietySelected(this.selectedsocietyid);
        this.toastr.success('Members Added Successfully', 'Success');
      }
    });
  }
  updatemember() {
    if (this.memberdetail.email != '' && this.memberdetail.mobileNumber != '') {
      if (
        !this.societydata.includes(
          this.memberdetail.email && this.memberdetail.email
        )
      ) {
        if (this.singlemember.societyMemberDetailsId) {
          let obj: any = [
            {
              societyMemberDetailsId: this.singlemember.societyMemberDetailsId,
              registeredSocietyId: this.singlemember.registeredSocietyId,
              memberName: this.memberdetail.memberName,
              mobileNumber: this.memberdetail.mobileNumber,
              email: this.memberdetail.email,
              societyMemberDesignationId:
                this.singlemember.societyMemberDesignationId,
              createdDate: this.singlemember.createdDate,
              updatedDate: this.singlemember.updatedDate,
            },
          ];
          this.memberdetail = new Memberdetail();
          this.service.updatemember(obj).subscribe((res) => {
            console.log(res);
            if (res) {
              this.onSocietySelected(this.selectedsocietyid);
              this.toastr.success('Member Updated Successfully', 'Success');
              this.memberdetail.memberName = '';
              this.memberdetail.mobileNumber = '';
              this.memberdetail.email = '';
            }
          });
        }
      } else {
        this.toastr.error('', 'All ready exist');
      }
    } else {
      this.toastr.error('All filed must be requered', 'Requered');
    }
    // this.id;
    // this.data[this.id][1]=this.memberdetail.memberName;
    // this.data[this.id][2]=this.memberdetail.email;
    // this.data[this.id][3]=this.memberdetail.mobileNumber;
  }
}
