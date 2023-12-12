import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GproductionComponent } from './gproduction.component';

describe('GproductionComponent', () => {
  let component: GproductionComponent;
  let fixture: ComponentFixture<GproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GproductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
