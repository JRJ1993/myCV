import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthcodersComponent } from './northcoders.component';

describe('NorthcodersComponent', () => {
  let component: NorthcodersComponent;
  let fixture: ComponentFixture<NorthcodersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthcodersComponent]
    });
    fixture = TestBed.createComponent(NorthcodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
