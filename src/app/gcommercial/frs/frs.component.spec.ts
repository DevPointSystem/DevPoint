import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrsComponent } from './frs.component';

describe('FrsComponent', () => {
  let component: FrsComponent;
  let fixture: ComponentFixture<FrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
