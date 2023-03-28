import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocietyRegistrationComponent } from './society.registration.component';
import { UpdateSocietyRegistrationComponent } from './update-society-registration/update-society-registration.component';

const routes: Routes = [
  {
    path: '',
    component: SocietyRegistrationComponent
  },
  {
    path: 'DeveloperKYC',
component: UpdateSocietyRegistrationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocietyRegistrationRoutingModule { }
