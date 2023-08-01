import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlymstockSchoolComponent } from './plymstock-school.component';

describe('PlymstockSchoolComponent', () => {
  let component: PlymstockSchoolComponent;
  let fixture: ComponentFixture<PlymstockSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlymstockSchoolComponent]
    });
    fixture = TestBed.createComponent(PlymstockSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
