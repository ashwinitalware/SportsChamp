import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.page.html',
  styleUrls: ['./ebook.page.scss'],
})
export class EbookPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
