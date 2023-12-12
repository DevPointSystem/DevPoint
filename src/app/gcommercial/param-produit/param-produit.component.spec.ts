import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamProduitComponent } from './param-produit.component';

describe('ParamProduitComponent', () => {
  let component: ParamProduitComponent;
  let fixture: ComponentFixture<ParamProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
