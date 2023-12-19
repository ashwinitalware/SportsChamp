import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradecardPageRoutingModule } from './gradecard-routing.module';

import { GradecardPage } from './gradecard.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradecardPageRoutingModule,
    FooterPageModule
  ],
  declarations: [GradecardPage],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterPage]
})
export class GradecardPageModule {}
