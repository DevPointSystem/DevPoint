import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtTransfertComponent } from './mvt-transfert.component';

describe('MvtTransfertComponent', () => {
  let component: MvtTransfertComponent;
  let fixture: ComponentFixture<MvtTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
