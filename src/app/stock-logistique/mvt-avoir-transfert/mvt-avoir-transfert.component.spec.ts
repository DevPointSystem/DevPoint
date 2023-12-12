import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtAvoirTransfertComponent } from './mvt-avoir-transfert.component';

describe('MvtAvoirTransfertComponent', () => {
  let component: MvtAvoirTransfertComponent;
  let fixture: ComponentFixture<MvtAvoirTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtAvoirTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtAvoirTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
