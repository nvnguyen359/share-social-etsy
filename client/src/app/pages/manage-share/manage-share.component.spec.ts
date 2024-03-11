import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShareComponent } from './manage-share.component';

describe('ManageShareComponent', () => {
  let component: ManageShareComponent;
  let fixture: ComponentFixture<ManageShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageShareComponent]
    });
    fixture = TestBed.createComponent(ManageShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
