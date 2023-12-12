import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationOfComponent } from './planification-of.component';

describe('PlanificationOfComponent', () => {
  let component: PlanificationOfComponent;
  let fixture: ComponentFixture<PlanificationOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificationOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificationOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
