import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietyRegistrationRoutingModule } from './society.registration-routing.module';
import { SocietyRegistrationComponent } from './society.registration.component';
import { UpdateSocietyRegistrationComponent } from './update-society-registration/update-society-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule, ToastrService } from 'ngx-toastr';
import { ServiceService } from '../shared/interface/service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SocietyRegistrationComponent,
    UpdateSocietyRegistrationComponent],
  imports: [
    HttpClientModule ,
    CommonModule,
    SocietyRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ToastContainerModule
  ] ,providers: [ToastrService ,ServiceService],
})
export class SocietyRegistrationModule { }
