import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule,
    FooterPageModule
  ],
  declarations: [BlogPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterPage]
})
export class BlogPageModule {}
