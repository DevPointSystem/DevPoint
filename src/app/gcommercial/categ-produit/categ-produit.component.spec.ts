import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategProduitComponent } from './categ-produit.component';

describe('CategProduitComponent', () => {
  let component: CategProduitComponent;
  let fixture: ComponentFixture<CategProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
