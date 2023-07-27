import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsmouthUniComponent } from './portsmouth-uni.component';

describe('PortsmouthUniComponent', () => {
  let component: PortsmouthUniComponent;
  let fixture: ComponentFixture<PortsmouthUniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortsmouthUniComponent]
    });
    fixture = TestBed.createComponent(PortsmouthUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
