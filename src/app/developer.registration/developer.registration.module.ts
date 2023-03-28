import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRegistrationRoutingModule } from './developer.registration-routing.module';
import { DeveloperRegistrationComponent } from './developer.registration.component';


@NgModule({
  declarations: [DeveloperRegistrationComponent],
  imports: [
    CommonModule,
    DeveloperRegistrationRoutingModule
  ]
})
export class DeveloperRegistrationModule { }
