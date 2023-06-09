import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomePageComponentComponent } from './home.page.component/home.page.component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { DeveloperRegistrationComponent } from './developer.registration/developer.registration.component';
// import { SocietyRegistrationComponent } from './society.registration/society.registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetterOfInterestComponent } from './letter-of-interest/letter-of-interest.component';
import { DeveloperKYCComponent } from './developer-kyc/developer-kyc.component';
import { NotificationComponent } from './notification/notification.component';
import { UpdateSocietyMemberComponent } from './update-society-member/update-society-member.component';
import { DisplaySocietyComponent } from './display-society/display-society.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatationComponent } from './updatation/updatation.component';
import { SelectSocietyComponent } from './updatation/select-society/select-society.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ServiceService } from './shared/interface/service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SocietyInfoViewComponent } from './society-info-view/society-info-view.component';
import { NgChartsModule } from 'ng2-charts';
import { FAQComponent } from './faq/faq.component';
import { TenderComponent } from './tender/tender.component';

// import { SocietyRegistrationModule } from './society.registration/society.registration.module';
// import { DeveloperRegistrationModule } from './developer.registration/developer.registration.module';

@NgModule({
  declarations: [
    AppComponent,
    TenderComponent,
    // HomePageComponentComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    // DeveloperRegistrationComponent,
    // SocietyRegistrationComponent,
    LetterOfInterestComponent,
    DeveloperKYCComponent,
    NotificationComponent,
    UpdateSocietyMemberComponent,
    DisplaySocietyComponent,
    UpdatationComponent,
    SelectSocietyComponent,
    SocietyInfoViewComponent,
    FAQComponent
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgChartsModule 
    // SocietyRegistrationModule,
    // DeveloperRegistrationModule
  ],
  providers: [ToastrService ,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

