import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcommercialComponent } from './gcommercial.component';

describe('GcommercialComponent', () => {
  let component: GcommercialComponent;
  let fixture: ComponentFixture<GcommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
