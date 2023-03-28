import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperRegistrationComponent } from './developer.registration.component';

const routes: Routes = [
  {
    path: '',
    component: DeveloperRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRegistrationRoutingModule { }
