import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiReportingComponent } from './bi-reporting.component';

describe('BiReportingComponent', () => {
  let component: BiReportingComponent;
  let fixture: ComponentFixture<BiReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiReportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
