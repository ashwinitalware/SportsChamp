import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  // images = [
  //   // 'assets/slider.png',
  //   'assets/home-logo.png',
  //   'assets/home-logo.png',
  //   'assets/home-logo.png',
  // ];
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }


  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
