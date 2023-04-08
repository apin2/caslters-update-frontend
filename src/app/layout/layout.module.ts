import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomePageComponentComponent } from './home.page.component/home.page.component.component'


@NgModule({
  declarations: [HomePageComponentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
})
export class LayoutModule { }
