import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourFrsComponent } from './retour-frs.component';

describe('RetourFrsComponent', () => {
  let component: RetourFrsComponent;
  let fixture: ComponentFixture<RetourFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
