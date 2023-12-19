import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradecard',
  templateUrl: './gradecard.page.html',
  styleUrls: ['./gradecard.page.scss'],
})
export class GradecardPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
