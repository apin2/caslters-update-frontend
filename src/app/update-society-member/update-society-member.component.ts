import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';
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
  uploadForm: FormGroup | any;
  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder
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
  edititem(i: any) {
    console.log('i', i);
  }
  removeitem(i: any) {
    console.log('i', this.data);
    this.data.splice(i, 1);
  }
  memberupdate(f: any) {}

  showtable() {
    const formData = new FormData();
    formData.append('memberDetails', this.uploadForm.get('profile').value);

    console.log(this.file);
    console.log(this.selectedsocietyid);
    this.show = true;
    const formfile = new FormData();
    formfile.append('memberDetails', this.file);
    console.log();
    let obj: any = {
      societyId: this.selectedsocietyid,
      societyNewMemberDetails: formfile,
    };
    console.log(obj);
    this.service.addnewmember(formData,this.selectedsocietyid).subscribe((res) => {
      console.log(res);
    });
  }
}
