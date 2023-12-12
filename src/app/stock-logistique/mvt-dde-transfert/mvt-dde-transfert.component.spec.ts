import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtDdeTransfertComponent } from './mvt-dde-transfert.component';

describe('MvtDdeTransfertComponent', () => {
  let component: MvtDdeTransfertComponent;
  let fixture: ComponentFixture<MvtDdeTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtDdeTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtDdeTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
