import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradecardPage } from './gradecard.page';

describe('GradecardPage', () => {
  let component: GradecardPage;
  let fixture: ComponentFixture<GradecardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GradecardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
