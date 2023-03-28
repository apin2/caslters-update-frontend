import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeveloperKYCComponent } from './developer-kyc/developer-kyc.component';
import { DisplaySocietyComponent } from './display-society/display-society.component';
// import { DeveloperRegistrationComponent } from './developer.registration/developer.registration.component';
import { HomePageComponentComponent } from './home.page.component/home.page.component.component';
import { LetterOfInterestComponent } from './letter-of-interest/letter-of-interest.component';
import { NotificationComponent } from './notification/notification.component';
import { SelectSocietyComponent } from './updatation/select-society/select-society.component';
import { UpdatationComponent } from './updatation/updatation.component';
import { UpdateSocietyMemberComponent } from './update-society-member/update-society-member.component';
// import { SocietyRegistrationComponent } from './society.registration/society.registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: HomePageComponentComponent },  // Wildcard route for a 404 page
  { path: 'homePage', component: HomePageComponentComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'developerRegistration',
  loadChildren: () => import("./developer.registration/developer.registration.module").then(m => m.DeveloperRegistrationModule) },
  { path: 'societyRegistration', 
  loadChildren: () => import("./society.registration/society.registration.module").then(m => m.SocietyRegistrationModule),
  runGuardsAndResolvers: 'always' },


  // { path: '',   redirectTo: '/homePage', pathMatch: 'full' },
  // { path: 'homePage', component: HomePageComponentComponent },
  // { path: 'aboutUs', component: AboutUsComponent },
  // { path: 'developerRegistration', component: DeveloperRegistrationComponent },
  // { path: 'DeveloperKYC', component: DeveloperKYCComponent },
  // { path: 'societyRegistration', component: SocietyRegistrationComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'LetterOfInterest', component: LetterOfInterestComponent },
  { path: 'UpdateSocietyMember', component: UpdateSocietyMemberComponent },
  { path: 'DisplaySociety', component: DisplaySocietyComponent },
  { path: 'selectSociety', component: SelectSocietyComponent },
  { path: 'updateSociety', component: UpdatationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
