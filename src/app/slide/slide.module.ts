import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePageRoutingModule } from './slide-routing.module';

import { SlidePage } from './slide.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePageRoutingModule
  ],
  declarations: [SlidePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlidePageModule {}
