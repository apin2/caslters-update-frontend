import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeveloperKYCComponent } from './developer-kyc/developer-kyc.component';
import { DisplaySocietyComponent } from './display-society/display-society.component';
// import { DeveloperRegistrationComponent } from './developer.registration/developer.registration.component';
// import { HomePageComponentComponent } from './home.page.component/home.page.component.component';
import { LetterOfInterestComponent } from './letter-of-interest/letter-of-interest.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthGuard } from './shared/interface/auth/auth.guard';
import { SocietyInfoViewComponent } from './society-info-view/society-info-view.component';
import { SelectSocietyComponent } from './updatation/select-society/select-society.component';
import { UpdatationComponent } from './updatation/updatation.component';
import { UpdateSocietyMemberComponent } from './update-society-member/update-society-member.component';
import { FAQComponent } from './faq/faq.component';
import { TenderComponent } from './tender/tender.component';
// import { SocietyRegistrationComponent } from './society.registration/society.registration.component';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }, // redirect to `first-component`
  // { path: '**', component: HomePageComponentComponent },  // Wildcard route for a 404 page
  // { path: 'homePage', component: HomePageComponentComponent, canActivate: [AuthGuard] },
  { path: 'aboutUs', component: AboutUsComponent},
  {
    path: 'developerRegistration', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],data: { roles: ['Admin','Devloper']},
    loadChildren: () => import("./developer.registration/developer.registration.module").then(m => m.DeveloperRegistrationModule)
  },
  {
    path: 'societyRegistration', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],data: { roles: ['Admin','Devloper']},
    loadChildren: () => import("./society.registration/society.registration.module").then(m => m.SocietyRegistrationModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'faq',
    component: FAQComponent,
    runGuardsAndResolvers: 'always'
  },

  // { path: '',   redirectTo: '/homePage', pathMatch: 'full' },
  // { path: 'homePage', component: HomePageComponentComponent },
  // { path: 'aboutUs', component: AboutUsComponent },
  // { path: 'developerRegistration', component: DeveloperRegistrationComponent },
  // { path: 'DeveloperKYC', component: DeveloperKYCComponent },
  // { path: 'societyRegistration', component: SocietyRegistrationComponent },
  // TenderComponent
  { path: 'tender', component: TenderComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard],data: { roles: ['Admin','User']} },
  { path: 'LetterOfInterest', component: LetterOfInterestComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'UpdateSocietyMember', component: UpdateSocietyMemberComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'DisplaySociety', component: DisplaySocietyComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'selectSociety', component: SelectSocietyComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'updateSociety/:id', component: UpdatationComponent, canActivate: [AuthGuard],data: { roles: ['Admin']} },
  { path: 'society-info-view', component: SocietyInfoViewComponent, canActivate: [AuthGuard],data: { roles: ['user']} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
