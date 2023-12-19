import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookPageRoutingModule } from './ebook-routing.module';

import { EbookPage } from './ebook.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookPageRoutingModule,
    FooterPageModule
  ],
  declarations: [EbookPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterPage]
})
export class EbookPageModule {}
