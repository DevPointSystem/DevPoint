import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitValidationComponent } from './circuit-validation.component';

describe('CircuitValidationComponent', () => {
  let component: CircuitValidationComponent;
  let fixture: ComponentFixture<CircuitValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
