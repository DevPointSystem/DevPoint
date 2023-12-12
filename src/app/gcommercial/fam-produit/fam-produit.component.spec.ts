import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamProduitComponent } from './fam-produit.component';

describe('FamProduitComponent', () => {
  let component: FamProduitComponent;
  let fixture: ComponentFixture<FamProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
