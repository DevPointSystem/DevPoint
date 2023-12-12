import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureVteComponent } from './facture-vte.component';

describe('FactureVteComponent', () => {
  let component: FactureVteComponent;
  let fixture: ComponentFixture<FactureVteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureVteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureVteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
