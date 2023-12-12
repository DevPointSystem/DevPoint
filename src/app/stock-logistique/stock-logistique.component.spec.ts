import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLogistiqueComponent } from './stock-logistique.component';

describe('StockLogistiqueComponent', () => {
  let component: StockLogistiqueComponent;
  let fixture: ComponentFixture<StockLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLogistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
